// Presentation routes are the only registry left: embedded visuals are imported
// directly by each MDX post, so Astro bundles only the CSS a page actually uses.
export const PRESENTATION_IDS = ['first-pull-request', 'website-presentation'] as const;
export type PresentationId = (typeof PRESENTATION_IDS)[number];
