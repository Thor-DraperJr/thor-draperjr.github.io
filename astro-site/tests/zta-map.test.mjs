import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const html = readFileSync(new URL('../public/visuals/m365-zta-map.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const model = script.slice(0, script.indexOf('const BRANCH_SVG'));
const states = script.slice(script.indexOf('function stateClasses'), script.indexOf('function setChrome'));
function evaluate(expression) {
  return vm.runInNewContext(`${model}\n${states}\n${expression}`);
}

test('ZTA step highlights distinguish improved coverage from added products', () => {
  assert.equal(evaluate('current = "E5"; stateClasses(COMP.human).includes("gained")'), true);
  assert.equal(evaluate('current = "E5"; stateClasses(COMP.agent).includes("added")'), false);
  assert.equal(evaluate('current = "E5"; stateClasses(COMP.workload).includes("added")'), true);
  assert.equal(evaluate('current = "E7"; stateClasses(COMP.strongauth).includes("added")'), true);
  assert.equal(evaluate('current = "E3"; stateClasses(COMP.human).includes("added")'), false);
  assert.match(html, /body\.only-new \.zc:not\(\.gained\):not\(\.added\)/);
});

test('2026 markers are cumulative and follow the tier that introduced them', () => {
  assert.equal(evaluate('current = "E3"; tiers26(COMP.corporate).join(",")'), 'E3');
  assert.equal(evaluate('current = "E5"; tiers26(COMP.corporate).join(",")'), 'E3,E5');
  assert.equal(evaluate('current = "E7"; tiers26(COMP.corporate).join(",")'), 'E3,E5');
  assert.match(evaluate('fmtItem(COMP.corporate.items.E5[2], "E5")'), /n26tag n26-E5/);
});

test('site ZTA map keeps pricing-free links, embed mode and unscaled controls', () => {
  assert.doesNotMatch(html, /\$\d|\bPRICE\b|🆕|—/u);
  assert.match(html, /params\.get\("embed"\)/);
  assert.match(html, /href="\/tech\/m365-e3-e5-e7-security-coverage\/"/);
  assert.doesNotMatch(html, /href="(?:coverage-matrix\.html|M365-E3-E5-E7-Step-Up-Map\.md)"/);
  assert.match(html.slice(html.indexOf('<header>'), html.indexOf('</header>')), /data-tier="E7"/);
  assert.match(html, /min-height: 44px/);
});
