import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import matter from 'gray-matter';

const posts = path.resolve('src/content/posts');

test('unpublished drafts stay out of production discovery and article outputs', async () => {
  const files = (await readdir(posts)).filter(file => /\.mdx?$/.test(file));
  for (const file of files) {
    const { data } = matter(await readFile(path.join(posts, file), 'utf8'));
    if (!data.draft) continue;
    const slug = file.replace(/\.mdx?$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
    const route = `${data.categories[0]}/${slug}`;
    for (const output of [`${route}/index.html`, `social/${route}.png`]) {
      await assert.rejects(access(path.resolve('dist', output)), { code: 'ENOENT' });
    }
    for (const output of ['index.html', 'archive/index.html', 'archive-search.json', 'rss.xml']) {
      const built = await readFile(path.resolve('dist', output), 'utf8');
      assert.ok(!built.includes(`/${route}/`), `${route} leaked into ${output}`);
      assert.ok(!built.includes(data.title), `${data.title} leaked into ${output}`);
    }
  }
});
