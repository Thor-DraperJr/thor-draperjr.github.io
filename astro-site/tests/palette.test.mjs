import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const source = new URL('../src/', import.meta.url);
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const name = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(name) : [name];
});
test('palette declarations do not invalidate inherited tokens through self-reference', () => {
  const cycles = walk(source.pathname).filter((file) => /\.(astro|css)$/.test(file)).flatMap((file) => {
    const text = fs.readFileSync(file, 'utf8');
    return [...text.matchAll(/(--[\w-]+)\s*:\s*var\(\s*\1\s*\)/g)].map(([declaration]) => ({ file, declaration }));
  });
  assert.deepEqual(cycles, [], 'inherit a global token or use a distinct local alias');
});
