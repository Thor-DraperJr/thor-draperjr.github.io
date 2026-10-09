import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const expected = ['signal-human', 'signal-cover', 'signal-strengths', 'signal-impact', 'signal-voices', 'signal-ask'];
test('Walking Deck source contains no merge-conflict markers', () => {
  const source = fs.readFileSync(new URL('../src/components/WalkingDeck.astro', import.meta.url), 'utf8');
  assert.ok(!/^(?:<{7}|={7}|>{7})(?:\s|$)/m.test(source));
});
for (const route of ['career/walking-deck', 'career/walking-deck/present']) {
  test(`${route} preserves the approved six-slide navy deck`, () => {
    const html = fs.readFileSync(new URL(`../dist/${route}/index.html`, import.meta.url), 'utf8');
    const slides = [...html.matchAll(/<section\b[^>]*\sdata-signal-section(?=[\s=>])[^>]*>/g)].map(([tag]) => ({
      id: tag.match(/\bid="([^"]+)"/)?.[1],
      className: tag.match(/\bclass="([^"]+)"/)?.[1],
    }));
    assert.deepEqual(slides.map(({ id }) => id), expected);
    assert.ok(slides.every(({ className }) => className.includes('is-dark')));
    assert.ok(html.includes('Section 01 / 06'));
    assert.ok(html.includes('wd-recognized'));
    assert.ok(!html.includes('signal-recognition'));
    const range = html.slice(html.indexOf('id="signal-strengths"'), html.indexOf('id="signal-impact"'));
    assert.ok(range.includes('wd-recognized'), 'recognition belongs on the Range slide');
  });
}
