import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

import {
  PRESENTATION_IDS,
  VISUALIZATION_DEFINITIONS,
  extractVisualizationMarkers,
  validatePostExperience,
} from '../src/lib/visualizations.ts';

const knownMarkers = VISUALIZATION_DEFINITIONS.flatMap((definition) => definition.markers);

test('visualization registry owns each marker exactly once', () => {
  assert.equal(knownMarkers.length, 38);
  assert.equal(new Set(knownMarkers).size, knownMarkers.length);
  assert.ok(knownMarkers.includes('RUNTIME_CONTROL_CHART'));
  assert.ok(knownMarkers.includes('SLIDE_14'));
  assert.ok(knownMarkers.includes('PRESENTATION_WORKFLOW_GATE'));
});

test('marker extraction ignores fenced and inline authoring examples', () => {
  const markdown = `Before\n\n[[TOKEN_SILOS]]\n\n\`\`\`text\n[[YOUR_VISUAL_MARKER]]\n\`\`\`\n\n~~~text\n[[RUNTIME_CONTROL_CHART]]\n~~~\n\nInline \`[[SOCIAL_LOOP]]\``;

  assert.deepEqual(extractVisualizationMarkers(markdown), ['TOKEN_SILOS']);
});

test('marker extraction ignores indented Markdown code', () => {
  assert.deepEqual(extractVisualizationMarkers('    [[TOKEN_SILOS]]'), []);
});

test('registry covers every standalone visualization marker in the post corpus', () => {
  const postsDirectory = path.join(process.cwd(), 'src', 'content', 'posts');
  const corpusMarkers = fs.readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .flatMap((fileName) => extractVisualizationMarkers(fs.readFileSync(path.join(postsDirectory, fileName), 'utf8')));

  assert.equal(corpusMarkers.length, 38);
  assert.deepEqual([...new Set(corpusMarkers)].sort(), [...knownMarkers].sort());
});

test('post experience validation rejects unknown live markers with source context', () => {
  assert.throws(
    () => validatePostExperience('Before\n\n[[UNKNOWN_VISUAL]]', undefined, 'example.md'),
    /example\.md.*UNKNOWN_VISUAL/,
  );
});

test('post experience validation rejects unsupported owner combinations', () => {
  assert.throws(
    () => validatePostExperience('[[TOKEN_SILOS]]\n[[SOCIAL_LOOP]]', undefined, 'mixed.md'),
    /mixed\.md combines unsupported visualization owners: token-silos, social-loop/,
  );
});

test('post experience validation rejects unknown presentation identifiers', () => {
  assert.throws(
    () => validatePostExperience('Plain article', 'unknown-deck', 'example.md'),
    /example\.md.*unknown-deck/,
  );
});

test('post experience validation resolves registered experiences', () => {
  const experience = validatePostExperience('Before\n\n[[ALL_ABOARD]]\n\n[[SLIDE_03]]', undefined, 'all-aboard.md');

  assert.deepEqual(experience.visualizationIds, ['all-aboard']);
  assert.equal(experience.renderMode, 'sequence');
  assert.deepEqual(PRESENTATION_IDS, ['first-pull-request', 'website-presentation']);
});

test('explicit presentation metadata takes precedence over marker render modes', () => {
  const experience = validatePostExperience(
    '[[PRESENTATION_WORKFLOW_ASK]]',
    'website-presentation',
    'presentation.md',
  );

  assert.equal(experience.renderMode, 'presentation');
});
