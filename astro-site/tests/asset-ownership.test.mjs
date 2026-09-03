import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

function linkedCss(route) {
  const html = fs.readFileSync(path.join(process.cwd(), 'dist', route, 'index.html'), 'utf8');
  const hrefs = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map((match) => match[1]);
  const chunks = hrefs.map((href) => fs.readFileSync(path.join(process.cwd(), 'dist', href.replace(/^\//, '')), 'utf8'));
  return { bytes: chunks.reduce((total, css) => total + Buffer.byteLength(css), 0), content: chunks.join('\n') };
}

test('ordinary articles do not load specialist experience styles', () => {
  const css = linkedCss(path.join('tech', 'coding'));
  assert.ok(css.bytes < 90_000, `ordinary article CSS is ${css.bytes} bytes`);
  assert.doesNotMatch(css.content, /\.walking-signal/);
  assert.doesNotMatch(css.content, /\.arts-map-shell/);
  assert.doesNotMatch(css.content, /\.vw-rail/);
});

test('specialist articles retain their owned styles', () => {
  const walking = fs.readFileSync(path.join(process.cwd(), 'dist', 'career', 'walking-deck', 'index.html'), 'utf8');
  const charlotte = fs.readFileSync(path.join(process.cwd(), 'dist', 'life', 'charlotte-arts-things-to-do', 'index.html'), 'utf8');
  const presentation = fs.readFileSync(path.join(process.cwd(), 'dist', 'tech', 'how-my-website-becomes-a-presentation', 'index.html'), 'utf8');

  assert.match(`${walking}${linkedCss(path.join('career', 'walking-deck')).content}`, /\.walking-signal/);
  assert.match(`${charlotte}${linkedCss(path.join('life', 'charlotte-arts-things-to-do')).content}`, /\.arts-map-shell/);
  assert.match(`${presentation}${linkedCss(path.join('tech', 'how-my-website-becomes-a-presentation')).content}`, /\.vw-rail/);
});

test('publication images stay within the optimized media budget', () => {
  const pending = [path.join(process.cwd(), 'public', 'assets', 'images')];
  let bytes = 0;

  while (pending.length > 0) {
    const directory = pending.pop();
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) pending.push(target);
      else bytes += fs.statSync(target).size;
    }
  }

  assert.ok(bytes <= 15_831_602, `image corpus is ${bytes} bytes; expected no more than 15,831,602`);
});
