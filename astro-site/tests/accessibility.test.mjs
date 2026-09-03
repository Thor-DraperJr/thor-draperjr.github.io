import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const dist = path.resolve('dist');

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => entry.isDirectory() ? htmlFiles(path.join(directory, entry.name)) : [path.join(directory, entry.name)]));
  return nested.flat().filter((file) => file.endsWith('.html'));
}

test('the static route manifest remains complete', async () => {
  const contentDirectory = path.resolve('src/content/posts');
  const postFiles = (await readdir(contentDirectory)).filter((file) => file.endsWith('.md'));
  const postRoutes = await Promise.all(postFiles.map(async (file) => {
    const source = await readFile(path.join(contentDirectory, file), 'utf8');
    const category = source.match(/^categories:\s*\[([^,\]]+)/m)?.[1]?.trim();
    assert.ok(category, `missing category in ${file}`);
    const slug = file.replace(/\.md$/i, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
    return `${category}/${slug}/index.html`;
  }));
  const staticRoutes = [
    '404.html',
    'index.html',
    'about/index.html',
    'archive/index.html',
    'privacy/index.html',
    'resume/index.html',
    'career/walking-deck/present/index.html',
    'tech/first-pull-request/present/index.html',
    'tech/how-my-website-becomes-a-presentation/present/index.html',
  ];
  const actual = (await htmlFiles(dist)).map((file) => path.relative(dist, file).split(path.sep).join('/')).sort();
  assert.deepEqual(actual, [...staticRoutes, ...postRoutes].sort());
});

test('the shared shell exposes keyboard-first navigation', async () => {
  const html = await readFile(path.join(dist, 'index.html'), 'utf8');
  assert.match(html, /class="skip-link" href="#main-content"/);
  assert.match(html, /<main id="main-content"/);
});

test('archive filtering announces changes and preserves no-JavaScript content', async () => {
  const html = await readFile(path.join(dist, 'archive/index.html'), 'utf8');
  assert.match(html, /data-archive-count[^>]+role="status"[^>]+aria-live="polite"/);
  assert.match(html, /data-mobile-archive-toggle/);
  assert.match(html, /Show .* more in/);
});
