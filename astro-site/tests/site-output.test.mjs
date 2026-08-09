import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const distPath = path.resolve('dist');
const siteDescription = 'A working library of ideas, experiments, and operator notes on technology, leadership, AI, and career development from Thor Draper Jr.';
const articleDescription = 'Your environment is already a platform. The agentic shift does not ask you to build a second one. It asks you to run agents across the same identity, data protection, investigation, and governance machinery your people already depend on.';

const criticalOutputs = [
    '404.html',
    'index.html',
    'rss.xml',
    'career/walking-deck/present/index.html',
    'tech/all-aboard/index.html',
    'tech/first-pull-request/present/index.html',
];

for (const outputPath of criticalOutputs) {
    test(`build emits ${outputPath}`, async () => {
        const output = await readFile(path.join(distPath, outputPath), 'utf8');

        assert.ok(output.length > 0);
    });
}

test('homepage emits canonical social metadata', async () => {
    const html = await readFile(path.join(distPath, 'index.html'), 'utf8');

    assert.match(html, /<link rel="canonical" href="https:\/\/thor-draperjr\.github\.io\/">/);
    assert.match(html, /<meta property="og:type" content="website">/);
    assert.match(html, /<meta property="og:title" content="Home \| Thor Draper Jr">/);
    assert.ok(html.includes(`<meta property="og:description" content="${siteDescription}">`));
    assert.match(html, /<meta name="twitter:card" content="summary">/);
    assert.match(html, /<meta name="twitter:title" content="Home \| Thor Draper Jr">/);
    assert.ok(html.includes(`<meta name="twitter:description" content="${siteDescription}">`));
});

test('article emits article-specific social metadata', async () => {
    const html = await readFile(path.join(distPath, 'tech/all-aboard/index.html'), 'utf8');

    assert.match(html, /<link rel="canonical" href="https:\/\/thor-draperjr\.github\.io\/tech\/all-aboard\/">/);
    assert.match(html, /<meta property="og:type" content="article">/);
    assert.match(html, /<meta property="og:title" content="All Aboard \| Thor Draper Jr">/);
    assert.ok(html.includes(`<meta property="og:description" content="${articleDescription}">`));
    assert.match(html, /<meta property="og:url" content="https:\/\/thor-draperjr\.github\.io\/tech\/all-aboard\/">/);
    assert.match(html, /<meta name="twitter:title" content="All Aboard \| Thor Draper Jr">/);
    assert.ok(html.includes(`<meta name="twitter:description" content="${articleDescription}">`));
});

test('RSS output identifies the public site', async () => {
    const xml = await readFile(path.join(distPath, 'rss.xml'), 'utf8');

    assert.match(xml, /<title>Thor Draper Jr<\/title>/);
    assert.match(xml, /<link>https:\/\/thor-draperjr\.github\.io<\/link>/);
});