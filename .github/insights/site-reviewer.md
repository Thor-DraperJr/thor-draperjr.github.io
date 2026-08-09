<!-- Last modified: 2026-08-09T17:44:59.000Z -->
<!-- Managed by loop-improver-mcp -->

# site-reviewer insight

## 2026-08-09T17:44:59.000Z - Shared links preserve page context
**Mission:** Make the site's writing useful and easy to share with technology and security leaders, builders, and career learners.
**Improved:** The shared layout now emits canonical, Open Graph, and Twitter metadata. Article routes identify themselves as articles and use each post's title, excerpt, and permalink. `npm run build` produced 49 pages, and generated homepage and article HTML contained the expected absolute URLs and content types.
**Prune candidates:** None in this bounded scope.
**Reusable learnings:** Social metadata belongs in the shared layout because every standard page uses it. Route-specific props should supply content type while existing title, description, and path values remain the source of truth.
**Agent self-improvement:** During sitewide reviews, inspect document metadata with navigation, layout, accessibility, and rendered visuals. Link previews are part of the reader experience even though they do not appear in the page body.
