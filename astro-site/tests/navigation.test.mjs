import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

test('native multi-page transitions remain a progressive enhancement', async () => {
  const [css, layout] = await Promise.all([
    readFile(path.join(process.cwd(), 'src/styles/global.css'), 'utf8'),
    readFile(path.join(process.cwd(), 'src/layouts/Layout.astro'), 'utf8'),
  ]);

  assert.match(css, /@view-transition\s*{\s*navigation:\s*auto/);
  assert.match(css, /view-transition-name:\s*site-header/);
  assert.match(css, /view-transition-name:\s*site-footer/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.doesNotMatch(layout, /ClientRouter/);
});
