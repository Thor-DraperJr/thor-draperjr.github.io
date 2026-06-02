import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const url = 'http://localhost:4321/career/walking-deck/present';
const viewports = {
    desktop: { width: 1920, height: 1080 },
    'laptop-chrome': { width: 1214, height: 770 },
};
const outDir = path.resolve('deck-audit/_backend-check');
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
for (const [name, vp] of Object.entries(viewports)) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForSelector('#signal-cover');
    // Toggle to backend mode
    await page.click('[data-pitch-mode-button="backend"]');
    // Skip the typewriter animation so we audit the final state.
    await page.waitForSelector('#pitch-backend-view [data-pitch-skip]', { state: 'visible' });
    await page.click('#pitch-backend-view [data-pitch-skip]').catch(() => { });
    await page.waitForFunction(() => {
        const view = document.getElementById('pitch-backend-view');
        if (!view) return false;
        const txt = view.textContent || '';
        return txt.includes('Account Executive');
    }, { timeout: 15000 });
    await page.waitForTimeout(300);
    // Measure backend view + section
    const metrics = await page.evaluate(() => {
        const section = document.getElementById('signal-cover');
        const view = document.getElementById('pitch-backend-view');
        if (!section || !view) return { error: 'missing' };
        const sr = section.getBoundingClientRect();
        const vr = view.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const lines = [...view.querySelectorAll('.pitch-terminal-line, .terminal-line, [data-line], li, p, span')]
            .filter(el => el.textContent && el.textContent.trim());
        const lineInfo = lines.map(el => {
            const r = el.getBoundingClientRect();
            return {
                tag: el.tagName.toLowerCase(),
                cls: (el.className?.toString() || '').slice(0, 50),
                txt: el.textContent.trim().slice(0, 80),
                top: Math.round(r.top),
                bottom: Math.round(r.bottom),
                clipped: r.bottom > vh + 1 || r.bottom > sr.bottom + 1,
            };
        });
        return {
            section: { top: Math.round(sr.top), bottom: Math.round(sr.bottom), height: Math.round(sr.height) },
            view: {
                top: Math.round(vr.top), bottom: Math.round(vr.bottom), height: Math.round(vr.height),
                scrollH: view.scrollHeight, clientH: view.clientHeight,
                overflows: view.scrollHeight > view.clientHeight + 1
            },
            viewport: { vw, vh },
            lineInfo,
            lineCount: lines.length,
        };
    });
    const file = path.join(outDir, `${name}.png`);
    await page.screenshot({ path: file, fullPage: false });
    await writeFile(path.join(outDir, `${name}.json`), JSON.stringify(metrics, null, 2));
    console.log(`\n=== ${name} (${vp.width}x${vp.height}) ===`);
    console.log('section:', metrics.section, 'viewport:', metrics.viewport);
    console.log('backend view:', metrics.view);
    console.log('lines:', metrics.lineCount);
    const clipped = metrics.lineInfo.filter(l => l.clipped);
    if (clipped.length) {
        console.log('CLIPPED LINES:');
        clipped.forEach(l => console.log(' -', l.bottom, l.txt));
    } else {
        console.log('No clipped lines.');
    }
    await ctx.close();
}
await browser.close();
