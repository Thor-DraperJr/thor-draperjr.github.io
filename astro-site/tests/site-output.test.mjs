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
    'tech/presentation-workflow/index.html',
    'tech/how-my-website-becomes-a-presentation/index.html',
    'tech/how-my-website-becomes-a-presentation/present/index.html',
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

test('website presentation article interleaves scenes and keeps one complete present view', async () => {
    const article = await readFile(path.join(distPath, 'tech/how-my-website-becomes-a-presentation/index.html'), 'utf8');
    const presentation = await readFile(path.join(distPath, 'tech/how-my-website-becomes-a-presentation/present/index.html'), 'utf8');
    const juneArticle = await readFile(path.join(distPath, 'tech/presentation-workflow/index.html'), 'utf8');
    const sectionPattern = /<section\b(?=[^>]*\bdata-presentation-section\b)[^>]*\bid="([^"]+)"[^>]*>/g;
    const articleSections = [...article.matchAll(sectionPattern)].map(match => match[1]);
    const presentationSections = [...presentation.matchAll(sectionPattern)].map(match => match[1]);
    const expectedSections = ['vw-ask', 'vw-rules', 'vw-team', 'vw-proof', 'vw-gate'];

    assert.doesNotMatch(article, /\[\[PRESENTATION_WORKFLOW_(?:ASK|RULES|TEAM|PROOF|GATE)\]\]/);
    assert.doesNotMatch(article, /data-presentation-deck/);
    assert.match(article, /aria-label="Presentation controls"/);
    assert.match(article, /href="\/tech\/how-my-website-becomes-a-presentation\/present\/"/);
    assert.equal((article.match(/vw-article-scene/g) || []).length, expectedSections.length);
    assert.match(article, /How I Build Presentations in the Browser with GitHub Copilot/);
    assert.deepEqual(articleSections, expectedSections);
    assert.equal(new Set(articleSections).size, expectedSections.length);
    assert.match(article, /I start with an article and ask Copilot/);
    assert.match(article, /copilot-instructions\.md/);
    assert.match(article, /visual-storytelling\.prompt\.md/);
    assert.match(article, /Visual Storytelling/);
    assert.match(article, /Presentation Reviewer/);
    assert.match(article, /fifth section of the Walking Deck/);
    assert.match(article, /gives each color a job and puts readability first/);
    assert.match(article, /laptop with browser chrome/);
    assert.match(article, /phone in landscape/);
    assert.match(article, /screenshots and measurements for all eight conditions/);
    assert.match(article, /Visual Storytelling fixes the problem/);
    assert.match(article, /same role doesn(?:'|&#39;)t build and approve the visual/);
    assert.match(article, /tool and approval settings still control what it can do/);
    assert.match(article, /handle the repeatable work while I stay responsible/);
    assert.match(article, /Before I publish, I can see what Copilot built/);
    const teachingSequence = [
        'aria-label="Presentation controls"',
        'I write this blog in VS Code',
        'id="vw-ask"',
        'What I configured once',
        'id="vw-rules"',
        'What happens after I ask',
        'id="vw-team"',
        'The build owner creates one shared visual',
        'id="vw-proof"',
        'The reviewer gets the results',
        'id="vw-gate"',
        'The repository pieces',
    ];
    let previousTeachingStep = -1;
    for (const step of teachingSequence) {
        const teachingStepIndex = article.indexOf(step);

        assert.ok(teachingStepIndex > previousTeachingStep, `${step} must appear in teaching order`);
        previousTeachingStep = teachingStepIndex;
    }
    assert.match(presentation, /REVISE/);
    assert.match(presentation, /ACCEPT/);
    assert.match(presentation, /VISUAL SYSTEM OUTPUT/);
    assert.match(presentation, /palette \+ composition \+ motion \+ interaction \+ access/);
    assert.match(presentation, /FIXES/);
    assert.match(presentation, /The problem goes back to the builder/);
    for (const viewportWidth of ['1920', '1440', '1366', '1214', '960', '720', '844L', '390P']) {
        assert.match(presentation, new RegExp(viewportWidth));
    }
    assert.match(presentation, /These actions require my approval/);
    assert.doesNotMatch(article, /npm create astro@latest|npm run dev|&lt;h1&gt;|Create Your Project|Save\. Refresh\. Test\. Revise\./);
    assert.doesNotMatch(article, /Clone Repository/);
    assert.doesNotMatch(article, /thor-draperjr\.github\.io\.git/);
    assert.doesNotMatch(article, /cd astro-site/);
    assert.match(juneArticle, /How I Turn Articles Into Presentations I Can Actually Teach From/);
    assert.doesNotMatch(juneArticle, /data-exit-href="\/tech\/how-my-website-becomes-a-presentation\//);
    for (const sectionId of expectedSections) {
        const section = article.match(new RegExp(`<section\\b(?=[^>]*\\bid="${sectionId}")[^>]*>`))?.[0];

        assert.ok(section);
        assert.match(section, /data-presentation-title="[^"]+"/);
        assert.match(section, /data-presentation-note="[^"]+"/);
        assert.match(section, /aria-labelledby="[^"]+"/);
    }
    assert.match(presentation, /data-present="true"/);
    assert.match(presentation, /data-exit-href="\/tech\/how-my-website-becomes-a-presentation\/"/);
    assert.deepEqual(presentationSections, expectedSections);
    assert.match(presentation, /<meta name="robots" content="noindex, nofollow">/);
    assert.match(presentation, /data-present-toggle/);
    for (const control of ['prev', 'next', 'cues', 'exit']) {
        assert.match(presentation, new RegExp(`data-present-${control}`));
    }
});