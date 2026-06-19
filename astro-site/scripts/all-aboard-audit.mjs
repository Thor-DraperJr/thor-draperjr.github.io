#!/usr/bin/env node
// Quick visual + metric audit for /tech/all-aboard deck in present mode.
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const VIEWPORTS = {
    desktop: { width: 1920, height: 1080 },
    'laptop-large': { width: 1440, height: 900 },
    'laptop-chrome': { width: 1214, height: 770 },
    laptop: { width: 1366, height: 768 },
    'half-screen': { width: 960, height: 1080 },
    'mobile-port': { width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 },
    'mobile-land': { width: 844, height: 390, isMobile: true, deviceScaleFactor: 2 },
};

const SECTIONS = ['aa-lifecycle', 'aa-zone-local', 'aa-zone-bullet'];
const url = 'http://localhost:4321/tech/all-aboard/';
const outRoot = path.resolve('.artifacts/all-aboard-audit');

async function measure(page, sid) {
    return page.evaluate((sid) => {
        const section = document.getElementById(sid);
        if (!section) return { error: 'missing' };
        const sr = section.getBoundingClientRect();
        const all = [...section.querySelectorAll('*')];
        const textEls = all.filter(el => {
            const cs = getComputedStyle(el);
            if (cs.display === 'none' || cs.visibility === 'hidden') return false;
            const txt = el.childNodes.length === 1 && el.firstChild?.nodeType === 3 ? el.textContent.trim() : '';
            if (!txt) return false;
            const r = el.getBoundingClientRect();
            return r.width > 0 && r.height > 0;
        });
        const fonts = textEls.map(el => ({
            px: parseFloat(getComputedStyle(el).fontSize),
            tag: el.tagName.toLowerCase(),
            cls: (el.className || '').toString().slice(0, 40),
            txt: el.textContent.trim().slice(0, 50),
        }));
        const minFont = fonts.length ? Math.min(...fonts.map(f => f.px)) : 0;
        const smallest = fonts.filter(f => f.px < 14).slice(0, 8);
        const vw = innerWidth, vh = innerHeight;
        const overflows = all.filter(el => {
            const cs = getComputedStyle(el);
            if (cs.display === 'none' || cs.visibility === 'hidden') return false;
            const r = el.getBoundingClientRect();
            return r.right > sr.right + 1 || r.bottom > sr.bottom + 1;
        }).map(el => ({
            tag: el.tagName.toLowerCase(),
            cls: (el.className || '').toString().slice(0, 50),
            txt: (el.textContent || '').trim().slice(0, 40),
        }));
        const vpClips = all.filter(el => {
            const cs = getComputedStyle(el);
            if (cs.display === 'none' || cs.visibility === 'hidden') return false;
            const r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0) return false;
            return r.bottom > vh + 1 || r.right > vw + 1;
        }).map(el => ({
            tag: el.tagName.toLowerCase(),
            cls: (el.className || '').toString().slice(0, 50),
            txt: (el.textContent || '').trim().slice(0, 40),
            bottom: Math.round(el.getBoundingClientRect().bottom),
            right: Math.round(el.getBoundingClientRect().right),
        }));
        return {
            sectionBox: { w: Math.round(sr.width), h: Math.round(sr.height), top: Math.round(sr.top), bottom: Math.round(sr.bottom) },
            viewport: { w: vw, h: vh },
            scrollHeight: section.scrollHeight,
            clientHeight: section.clientHeight,
            minFontPx: Math.round(minFont * 10) / 10,
            smallText: smallest.slice(0, 6),
            overflowCount: overflows.length,
            overflowExamples: overflows.slice(0, 6),
            viewportClipCount: vpClips.length,
            viewportClipExamples: vpClips.slice(0, 6),
        };
    }, sid);
}

(async () => {
    const browser = await chromium.launch();
    const wanted = process.argv.slice(2).find(a => a.startsWith('--viewport='))?.split('=')[1];
    const list = wanted ? [wanted] : Object.keys(VIEWPORTS);
    for (const vp of list) {
        const cfg = VIEWPORTS[vp];
        if (!cfg) { console.error('Unknown viewport', vp); continue; }
        const ctx = await browser.newContext({ viewport: { width: cfg.width, height: cfg.height }, deviceScaleFactor: cfg.deviceScaleFactor || 1, isMobile: !!cfg.isMobile });
        const page = await ctx.newPage();
        await page.goto(url, { waitUntil: 'networkidle' });
        // enter present mode
        await page.evaluate(() => {
            document.querySelector('[data-present-toggle]')?.click();
        });
        await page.waitForTimeout(300);
        const outDir = path.join(outRoot, vp);
        await rm(outDir, { recursive: true, force: true });
        await mkdir(outDir, { recursive: true });
        const report = {};
        for (let i = 0; i < SECTIONS.length; i++) {
            const sid = SECTIONS[i];
            // jump to slide i using End/Home + arrows
            await page.evaluate((target) => {
                const deck = document.querySelector('[data-all-aboard]');
                const sections = [...deck.querySelectorAll('[data-deck-section]')];
                sections.forEach(s => s.classList.remove('is-current', 'is-leaving'));
                const next = document.getElementById(target);
                next.classList.add('is-current');
                next.scrollTop = 0;
            }, sid);
            await page.waitForTimeout(250);
            const m = await measure(page, sid);
            report[sid] = m;
            await page.screenshot({ path: path.join(outDir, `${sid}.png`), fullPage: false });
        }
        await writeFile(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
        console.log(`[${vp}] done -> ${outDir}`);
        await ctx.close();
    }
    await browser.close();
})();
