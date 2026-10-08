import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'posts');
const posts = fs.readdirSync(postsDirectory).filter((file) => /\.mdx?$/.test(file));
const withoutFences = (source) => source.replace(/^(```|~~~)[\s\S]*?^\1/gm, '');

test('no post uses legacy [[MARKER]] placeholders', () => {
  for (const file of posts) {
    const source = withoutFences(fs.readFileSync(path.join(postsDirectory, file), 'utf8'));
    assert.doesNotMatch(source, /^ {0,3}\[\[[A-Z][A-Z0-9_]*\]\][ \t]*$/m, `${file} still uses a [[MARKER]]`);
  }
});

test('every embedded visual is placed on the article grid through <Figure>', () => {
  for (const file of posts.filter((name) => name.endsWith('.mdx'))) {
    const source = fs.readFileSync(path.join(postsDirectory, file), 'utf8');
    const imported = [...source.matchAll(/^import (\w+) from '\.\.\/\.\.\/components\/\w+\.astro';$/gm)].map((match) => match[1]).filter((name) => name !== 'Figure');
    assert.ok(imported.length > 0, `${file} is MDX without a visual; keep it as .md`);
    for (const name of imported) {
      assert.match(source, new RegExp(`<Figure size="(text|feature|wide|full)"><${name}\\b`), `${file} renders ${name} outside <Figure>`);
    }
  }
});
