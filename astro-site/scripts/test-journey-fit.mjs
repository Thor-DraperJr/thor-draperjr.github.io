import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

// After npm run build, this test serves dist on an isolated loopback port.
// DECK_URL=https://thordraperjr.com runs the same assertions on production.
let baseURL = process.env.DECK_URL;
let server;
let browser;
try {
  if (!baseURL) {
    const root = fileURLToPath(new URL('../dist/', import.meta.url));
    const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
    server = createServer(async (request, response) => {
      try {
        let file = path.resolve(root, `.${decodeURIComponent(new URL(request.url, 'http://localhost').pathname)}`);
        if (!file.startsWith(root)) throw new Error('outside dist');
        if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
        response.setHeader('Content-Type', types[path.extname(file).toLowerCase()] || 'application/octet-stream');
        response.end(await readFile(file));
      } catch {
        response.writeHead(404).end();
      }
    });
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    baseURL = `http://127.0.0.1:${server.address().port}`;
  }
  browser = await chromium.launch({ headless: true });
  for (const [width, height] of [[1920, 1080], [1440, 900], [1366, 768], [1214, 770], [1024, 768], [820, 1180]]) {
    const page = await browser.newPage({ viewport: { width, height }, reducedMotion: 'reduce' });
    await page.goto(`${baseURL}/career/walking-deck/present/`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    const tabs = page.locator('[data-node-button]');
    for (let chapter = 0; chapter < await tabs.count(); chapter++) {
      await tabs.nth(chapter).click();
      const result = await page.locator('#signal-impact').evaluate((slide) => {
        const panel = slide.querySelector('.wd-chapter:not([hidden])');
        const pattern = slide.querySelector('.wd-pattern').getBoundingClientRect();
        const hud = document.querySelector('.wd-hud').getBoundingClientRect();
        return { chapter: panel.id, scrollHeight: slide.scrollHeight, clientHeight: slide.clientHeight, patternBottom: pattern.bottom, hudTop: hud.top, horizontal: document.documentElement.scrollWidth > innerWidth + 1 };
      });
      console.log(width, height, result);
      assert.ok(result.scrollHeight <= result.clientHeight + 1, `${width}x${height}: ${result.chapter} requires scrolling`);
      assert.ok(result.patternBottom <= result.hudTop, 'closing line must remain above presentation controls');
      assert.equal(result.horizontal, false);
    }
    await page.close();
  }
} finally {
  await browser?.close();
  if (server) await new Promise((resolve) => server.close(resolve));
}
