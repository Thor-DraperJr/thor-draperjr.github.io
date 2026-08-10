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

test('resume leads with hybrid positioning and distinct commercial experience', async () => {
    const html = await readFile(path.join(distPath, 'resume/index.html'), 'utf8');

    assert.ok(html.includes('Sales and Security Leader | Enterprise Solution Selling | Cloud, AI, and Cybersecurity'));
    assert.ok(html.includes('40-plus-person branch with P&amp;L responsibility'));
    assert.match(html, /<span class="rt-era-org">Enterprise Rent-A-Car<\/span>/);
    assert.match(html, /<span class="rt-era-org">G-Net Solutions<\/span>/);
    assert.match(html, /<span class="rt-era-org">Paychex<\/span>/);
    assert.match(html, /<span class="rt-era-org">Stay Fit CLT<\/span>/);
});

test('resume article renders a complete public-safe before-and-after review', async () => {
    const html = await readFile(path.join(distPath, 'career/my-resume-forgot-i-could-sell/index.html'), 'utf8');
    const review = html.match(/<figure class="review" data-resume-review[\s\S]*?<\/figure>/)?.[0];

    assert.doesNotMatch(html, /\[\[CAREER_SIGNAL_MAP\]\]/);
    assert.ok(review);
    assert.equal((review.match(/data-resume-version="old"/g) ?? []).length, 3);
    assert.equal((review.match(/data-resume-version="new"/g) ?? []).length, 2);
    assert.equal((review.match(/data-new-role=/g) ?? []).length, 10);
    assert.equal((review.match(/Internal (?:performance recognition|culture recognition|development program|event recognition) withheld from public transcription\./g) ?? []).length, 4);
    assert.ok(review.includes('Cybersecurity professional with a dynamic career trajectory'));
    assert.ok(review.includes('Education &amp; Certifications'));
    assert.ok(review.includes('All 20') || review.includes('all 20'));
    assert.ok(review.includes('Other Experience'));
    assert.ok(review.includes('None of this is “other.”'));
    assert.ok(review.includes('Sales and Security Leader'));
    assert.ok(review.includes('SC-900'));
    assert.ok(review.includes('AI-900'));
    assert.ok(review.includes('Enterprise Rent-A-Car'));
    assert.ok(review.includes('Army National Guard'));
    assert.doesNotMatch(review, /decepticon-emblem\.svg/);
    const setupIndex = html.indexOf('Once I marked up all three old pages');
    const markupIndex = html.indexOf('data-resume-review');
    const decepticonIndex = html.indexOf('class="decepticon-word"');
    const payoffIndex = html.indexOf('The shoe is still on the other foot');

    assert.ok(setupIndex >= 0);
    assert.ok(markupIndex >= 0);
    assert.ok(decepticonIndex >= 0);
    assert.ok(payoffIndex >= 0);
    assert.ok(setupIndex < markupIndex);
    assert.ok(markupIndex < decepticonIndex);
    assert.ok(decepticonIndex < payoffIndex);
    assert.match(html, /<h2[^>]*>What I can actually say about the <span class="decepticon-word">Decepticon <img[^>]+decepticon-emblem\.svg[^>]+alt="Decepticon emblem"/);
    assert.doesNotMatch(html, /\{\.decepticon-heading-emblem/);
    assert.match(html, /This does not promise an interview/i);
    assert.match(html, /Eightfold AI/);
    assert.match(html, /human oversight and judgment/);
    assert.match(html, /Security Solution Area Specialist/);
    assert.match(html, /Account Executive/);
    assert.doesNotMatch(html, /deceptecon/i);
    assert.doesNotMatch(review, /thor\.draper@gmail\.com|Attainment|Hackathon|Momentum Program/);
    const emblem = await readFile(path.join(distPath, 'assets/images/posts/2026-08-09-my-resume-forgot-i-could-sell/decepticon-emblem.svg'), 'utf8');
    assert.match(emblem, /<title id="title">Decepticon emblem<\/title>/);
});

test('RSS output identifies the public site', async () => {
    const xml = await readFile(path.join(distPath, 'rss.xml'), 'utf8');

    assert.match(xml, /<title>Thor Draper Jr<\/title>/);
    assert.match(xml, /<link>https:\/\/thor-draperjr\.github\.io<\/link>/);
});