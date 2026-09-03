export type RenderMode = 'standard' | 'inline' | 'breakout' | 'sequence' | 'presentation';

type VisualizationDefinition = {
  id: string;
  markers: readonly string[];
  renderMode: Exclude<RenderMode, 'standard'>;
};

const slides = Array.from({ length: 12 }, (_, index) => `SLIDE_${String(index + 3).padStart(2, '0')}`);

export const VISUALIZATION_DEFINITIONS = [
  { id: 'runtime-control-chart', markers: ['RUNTIME_CONTROL_CHART'], renderMode: 'inline' },
  { id: 'career-development-plan', markers: ['CAREER_DEV_PLAN'], renderMode: 'breakout' },
  { id: 'charlotte-arts-map', markers: ['CHARLOTTE_ARTS_MAP'], renderMode: 'inline' },
  { id: 'walking-deck', markers: ['WALKING_DECK'], renderMode: 'breakout' },
  { id: 'three-new-years', markers: ['THREE_NEW_YEARS'], renderMode: 'inline' },
  { id: 'performance-narrative', markers: ['PERFORMANCE_NARRATIVE'], renderMode: 'breakout' },
  { id: 'all-aboard', markers: ['ALL_ABOARD', ...slides], renderMode: 'sequence' },
  {
    id: 'github-workshop',
    markers: [
      'GH_WORKSHOP',
      'WHAT_IS_GITHUB',
      'GITHUB_FLOW',
      'YOUR_TOOLS',
      'AGENT_LOOP',
      'DIFF_PREVIEW',
      'SESSION_PLAN',
      'WORKSHOP_OBJECTIVES',
    ],
    renderMode: 'sequence',
  },
  { id: 'presentation-workflow-map', markers: ['PRESENTATION_WORKFLOW'], renderMode: 'inline' },
  {
    id: 'website-presentation',
    markers: [
      'PRESENTATION_WORKFLOW_ASK',
      'PRESENTATION_WORKFLOW_RULES',
      'PRESENTATION_WORKFLOW_TEAM',
      'PRESENTATION_WORKFLOW_PROOF',
      'PRESENTATION_WORKFLOW_GATE',
    ],
    renderMode: 'presentation',
  },
  { id: 'social-loop', markers: ['SOCIAL_LOOP'], renderMode: 'breakout' },
  { id: 'gateway-process-map', markers: ['GATEWAY_PROCESS_MAP'], renderMode: 'breakout' },
  { id: 'agent-harness-layers', markers: ['AGENT_HARNESS_LAYERS'], renderMode: 'inline' },
  { id: 'career-signal-map', markers: ['CAREER_SIGNAL_MAP'], renderMode: 'inline' },
  { id: 'token-silos', markers: ['TOKEN_SILOS'], renderMode: 'inline' },
] as const satisfies readonly VisualizationDefinition[];

export type VisualizationId = (typeof VISUALIZATION_DEFINITIONS)[number]['id'];

export const PRESENTATION_IDS = ['first-pull-request', 'website-presentation'] as const;
export type PresentationId = (typeof PRESENTATION_IDS)[number];

export interface PostExperience {
  visualizationIds: VisualizationId[];
  renderMode: RenderMode;
}

const markerOwners = new Map<string, (typeof VISUALIZATION_DEFINITIONS)[number]>();
for (const definition of VISUALIZATION_DEFINITIONS) {
  for (const marker of definition.markers) {
    if (markerOwners.has(marker)) {
      throw new Error(`Visualization marker ${marker} has more than one owner`);
    }
    markerOwners.set(marker, definition);
  }
}

export function extractVisualizationMarkers(markdown: string): string[] {
  const markers: string[] = [];
  let closingFence: RegExp | undefined;

  for (const line of markdown.split(/\r?\n/)) {
    if (closingFence) {
      if (closingFence.test(line)) closingFence = undefined;
      continue;
    }

    const fence = line.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (fence) {
      const character = fence[1][0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      closingFence = new RegExp(`^\\s{0,3}${character}{${fence[1].length},}\\s*$`);
      continue;
    }

    const marker = line.match(/^ {0,3}\[\[([A-Z][A-Z0-9_]*)\]\][ \t]*$/);
    if (marker) markers.push(marker[1]);
  }

  return markers;
}

export function validatePostExperience(
  markdown: string,
  presentation: string | undefined,
  source: string,
): PostExperience {
  const markers = extractVisualizationMarkers(markdown);
  const unknownMarkers = markers.filter((marker) => !markerOwners.has(marker));

  if (unknownMarkers.length > 0) {
    throw new Error(`${source} contains unknown visualization marker(s): ${[...new Set(unknownMarkers)].join(', ')}`);
  }

  if (presentation && !(PRESENTATION_IDS as readonly string[]).includes(presentation)) {
    throw new Error(`${source} contains unknown presentation identifier: ${presentation}`);
  }

  const visualizationIds: VisualizationId[] = [];
  for (const marker of markers) {
    const definition = markerOwners.get(marker);
    if (definition && !visualizationIds.includes(definition.id)) {
      visualizationIds.push(definition.id);
    }
  }

  if (visualizationIds.length > 1) {
    throw new Error(`${source} combines unsupported visualization owners: ${visualizationIds.join(', ')}`);
  }

  const modes = visualizationIds.map((id) => VISUALIZATION_DEFINITIONS.find((definition) => definition.id === id)?.renderMode);
  const renderMode = presentation
    ? 'presentation'
    : modes.length === 0
    ? 'standard'
    : modes.length === 1
      ? modes[0] ?? 'standard'
      : 'sequence';

  return { visualizationIds, renderMode };
}
