#!/usr/bin/env node
/**
 * Walking Deck visual + metrics audit.
 *
 * Usage:
 *   node scripts/deck-audit.mjs                    # all viewports
 *   node scripts/deck-audit.mjs --viewport=mobile  # one viewport
 *   node scripts/deck-audit.mjs --url=...          # override URL
 *
 * Writes screenshots + report.json to ./deck-audit/<viewport>/
 */
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const VIEWPORTS = {
    desktop: { width: 1920, height: 1080, deviceScaleFactor: 1 },
    'laptop-large': { width: 1440, height: 900, deviceScaleFactor: 1 },
    laptop: { width: 1366, height: 768, deviceScaleFactor: 1 },
    'half-screen': { width: 960, height: 1080, deviceScaleFactor: 1 },
    'half-laptop': { width: 720, height: 900, deviceScaleFactor: 1 },
    'mobile-land': { width: 844, height: 390, deviceScaleFactor: 2, isMobile: true },
    'mobile-port': { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true },
};

const SECTIONS = [
    'signal-cover', 'signal-human', 'signal-strengths', 'signal-essence',
    'signal-impact', 'signal-voices', 'signal-passion', 'signal-ask',
];

const args = Object.fromEntries(process.argv.slice(2).map(a => {
    const [k, ...rest] = a.replace(/^--/, '').split('=');
    return [k, rest.join('=') || true];
}));

const url = args.url || 'http://localhost:4321/career/walking-deck/?present=1';
const wanted = args.viewport ? [args.viewport] : Object.keys(VIEWPORTS);
const unknown = wanted.filter(v => !VIEWPORTS[v]);
if (unknown.length) {
    console.error(`Unknown viewport(s): ${unknown.join(', ')}`);
    console.error(`Available: ${Object.keys(VIEWPORTS).join(', ')}`);
    process.exit(1);
}
const outRoot = path.resolve('deck-audit');

async function measureSection(page, sectionId) {
    return page.evaluate((sid) => {
        const section = document.getElementById(sid);
        if (!section) return { error: 'section-missing' };
        const sr = section.getBoundingClientRect();
        const allElems = [...section.querySelectorAll('*')];
        const textElems = allElems.filter(el => {
            const cs = getComputedStyle(el);
            if (cs.display === 'none' || cs.visibility === 'hidden') return false;
            const txt = (el.childNodes.length === 1 && el.firstChild?.nodeType === 3)
                ? el.textContent.trim() : '';
            if (!txt) return false;
            const r = el.getBoundingClientRect();
            return r.width > 0 && r.height > 0;
        });
        const fontSizes = textElems.map(el => parseFloat(getComputedStyle(el).fontSize));
        const minFontPx = fontSizes.length ? Math.min(...fontSizes) : 0;
        const overflows = allElems.filter(el => {
            const cs = getComputedStyle(el);
            if (cs.display === 'none' || cs.visibility === 'hidden') return false;
            const r = el.getBoundingClientRect();
            return r.right > sr.right + 1 || r.bottom > sr.bottom + 1;
        }).map(el => ({
            tag: el.tagName.toLowerCase(),
            cls: el.className?.toString().slice(0, 60) || '',
            txt: (el.textContent || '').trim().slice(0, 40),
        }));
        // viewport clip: ink elements whose bottom falls below the visible viewport,
        // or whose right falls past it. Section may "fit" its own box but extend off-screen.
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const viewportClips = allElems.filter(el => {
            const cs = getComputedStyle(el);
            if (cs.display === 'none' || cs.visibility === 'hidden') return false;
            const r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0) return false;
            const isInk = el.tagName === 'IMG' || el.tagName === 'svg'
                || (el.childNodes.length === 1 && el.firstChild?.nodeType === 3
                    && el.textContent.trim().length > 0);
            if (!isInk) return false;
            return r.bottom > vh + 1 || r.right > vw + 1 || r.top < -1;
        }).map(el => ({
            tag: el.tagName.toLowerCase(),
            cls: el.className?.toString().slice(0, 60) || '',
            txt: (el.textContent || '').trim().slice(0, 50),
        }));
        // ink coverage: union bbox of text/image elements vs section
        const inkElems = allElems.filter(el => {
            const cs = getComputedStyle(el);
            if (cs.display === 'none' || cs.visibility === 'hidden') return false;
            if (el.tagName === 'IMG' || el.tagName === 'svg') return true;
            const txt = (el.childNodes.length === 1 && el.firstChild?.nodeType === 3)
                ? el.textContent.trim() : '';
            return !!txt;
        });
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        inkElems.forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0) return;
            minX = Math.min(minX, r.left);
            minY = Math.min(minY, r.top);
            maxX = Math.max(maxX, r.right);
            maxY = Math.max(maxY, r.bottom);
        });
        const inkW = isFinite(minX) ? maxX - minX : 0;
        const inkH = isFinite(minY) ? maxY - minY : 0;
        const fillRatio = sr.width > 0 ? (inkW * inkH) / (sr.width * sr.height) : 0;
        return {
            sectionRect: [Math.round(sr.width), Math.round(sr.height)],
            minFontPx: Math.round(minFontPx * 10) / 10,
            overflowCount: overflows.length,
            overflowExamples: overflows.slice(0, 3),
            viewportClipCount: viewportClips.length,
            viewportClipExamples: viewportClips.slice(0, 3),
            fillRatio: Math.round(fillRatio * 100) / 100,
            scrollOverflow: section.scrollHeight - section.clientHeight,
        };
    }, sectionId);
}

async function activateSection(page, sectionId) {
    await page.evaluate((sid) => {
        const sections = document.querySelectorAll('[data-signal-section]');
        sections.forEach(s => {
            s.classList.toggle('is-current', s.id === sid);
            s.classList.remove('is-leaving');
            s.setAttribute('data-signal-state', s.id === sid ? 'active' : 'inactive');
        });
    }, sectionId);
    await page.waitForTimeout(450);
}

async function runViewport(browser, name) {
    const vp = VIEWPORTS[name];
    if (!vp) throw new Error(`Unknown viewport: ${name}`);
    const outDir = path.join(outRoot, name);
    await rm(outDir, { recursive: true, force: true });
    await mkdir(outDir, { recursive: true });

    const ctx = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: vp.deviceScaleFactor,
        isMobile: !!vp.isMobile,
        hasTouch: !!vp.isMobile,
    });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForSelector('.walking-signal[data-present="true"]', { timeout: 5000 }).catch(() => { });
    await page.waitForTimeout(500);

    const results = {};
    for (const sid of SECTIONS) {
        await activateSection(page, sid);
        const m = await measureSection(page, sid);
        results[sid] = m;
        await page.screenshot({ path: path.join(outDir, `${sid}.png`), fullPage: false });
    }

    await writeFile(path.join(outDir, 'report.json'),
        JSON.stringify({ viewport: name, vp, url, results }, null, 2));
    await ctx.close();

    // console summary
    console.log(`\n[${name}] ${vp.width}x${vp.height}`);
    let anyBad = false;
    for (const sid of SECTIONS) {
        const r = results[sid];
        const bad = r.overflowCount > 0 || r.viewportClipCount > 0 || r.minFontPx < 11;
        if (bad) anyBad = true;
        const flag = bad ? '  !' : '   ';
        console.log(`${flag} ${sid.padEnd(18)} font=${String(r.minFontPx).padStart(5)}px  overflow=${r.overflowCount}  clip=${r.viewportClipCount}  fill=${r.fillRatio}`);
    }
    if (anyBad) {
        for (const sid of SECTIONS) {
            const r = results[sid];
            if (r.viewportClipCount > 0) {
                console.log(`    ${sid} clipped off viewport:`, r.viewportClipExamples.map(e => `${e.tag}.${e.cls.split(' ')[0]}="${e.txt}"`).join(' | '));
            }
        }
    }
    return results;
}

const browser = await chromium.launch();
try {
    for (const name of wanted) {
        await runViewport(browser, name);
    }
} finally {
    await browser.close();
}
console.log(`\nReports + screenshots written to ${outRoot}`);
