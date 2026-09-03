import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const root = process.cwd();

test('all deck types delegate navigation to the shared presentation controller', async () => {
  const walkingClient = await readFile(path.join(root, 'src/scripts/walkingDeck.client.ts'), 'utf8');
  const sharedClient = await readFile(path.join(root, 'src/scripts/presentationDeck.client.ts'), 'utf8');
  const walkingPage = await readFile(path.join(root, 'dist/career/walking-deck/index.html'), 'utf8');

  assert.doesNotMatch(walkingClient, /querySelector<[^>]+>\('\[data-present-toggle\]'/);
  assert.doesNotMatch(sharedClient, /decks\.some\(initDeck\)/);
  assert.match(sharedClient, /decks\.map\(initDeck\)/);
  assert.match(sharedClient, /isolateSurroundings/);
  assert.match(walkingPage, /data-presentation-deck/);
  assert.match(walkingPage, /data-present-body-class="walking-presenting"/);
  assert.match(walkingPage, /data-section-selector="\[data-signal-section\]"/);
});

test('mobile presentation modes provide legible controls and explorable diagrams', async () => {
  const [walkingComponent, allAboardSlide, presentationRoute] = await Promise.all([
    readFile(path.join(root, 'src/components/WalkingDeck.astro'), 'utf8'),
    readFile(path.join(root, 'src/components/AllAboardSlide.astro'), 'utf8'),
    readFile(path.join(root, 'src/pages/[category]/[slug]/present.astro'), 'utf8'),
  ]);

  assert.match(walkingComponent, /min-height: 44px/);
  assert.match(walkingComponent, /overflow-y: auto/);
  assert.match(allAboardSlide, /data-mobile-visual-cue/);
  assert.match(allAboardSlide, /scroll-snap-type: x mandatory/);
  assert.match(presentationRoute, /min-height: 44px/);
});

test('presentation routes derive their allowlist from the typed registry', async () => {
  const presentationRoute = await readFile(
    path.join(root, 'src/pages/[category]/[slug]/present.astro'),
    'utf8',
  );

  assert.match(presentationRoute, /import \{ PRESENTATION_IDS \} from/);
  assert.match(presentationRoute, /PRESENTATION_IDS\.includes\(post\.presentation\)/);
  assert.doesNotMatch(presentationRoute, /\['first-pull-request', 'website-presentation'\]/);
});