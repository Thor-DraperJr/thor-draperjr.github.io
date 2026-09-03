import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const contentSource = fs.readFileSync(path.join(process.cwd(), 'src', 'lib', 'content.ts'), 'utf8');
const contentConfig = fs.readFileSync(path.join(process.cwd(), 'src', 'content.config.ts'), 'utf8');

test('post loading is owned by the typed Astro collection', () => {
  assert.match(contentSource, /getCollection\('posts'\)/);
  assert.doesNotMatch(contentSource, /readdirSync\(postsDirectory\)/);
  assert.match(contentConfig, /schema:\s*z\.strictObject/);
  assert.match(contentConfig, /generateId:/);
});
