<!-- Last modified: 2026-07-15T00:25:35.920Z -->
<!-- Managed by loop-improver-mcp -->

# Repository Objectives

Use this file for the shared repository mission: what the repo is trying to become, what quality means here, and how specialized loops contribute to that mission.

## Working Profile

- Detected profile: blog
- Suggested specialist: Voice and editor specialist

## Aspirational Objectives

1. Publish useful articles with a consistent voice and clear audience value.
2. Keep article visuals, layouts, and navigation effective across supported viewports.
3. Verify the site build and rendered experience before publishing.
4. Keep collaboration guidance concise and route recurring editorial work through existing specialists.

## Agent Map

- loop-improver-mcp: owns README/Copilot/objectives hygiene and decides which managed surfaces should exist.
- Existing specialist agents (narrative-strategist, voice-publish-editor): serve the shared repository mission through recurring domain expertise for the detected profile.
- Existing agent loops (hls-provider-reality-check, narrative-strategist, presentation-reviewer, public-claims-researcher, site-reviewer, voice-publish-editor): preserve each agent's mission, contribute specialized evidence to the shared repository mission, and maintain a matching current insight.

## Outcome Expectations

- README.md
  - Names what the repository is and who it serves in the first screen.
  - Explains capabilities and outcomes without carrying operational runbooks or agent rules.
  - Points to deeper docs only when those docs are durable entry points.
- .github/copilot-instructions.md
  - Contains durable rules, validation expectations, safety boundaries, and canonical file ownership.
  - Prunes legacy session-management, tool-ordering, setup, and prompt-command boilerplate.
  - Separates broad repo rules from specialist-agent instructions and temporary troubleshooting notes.
- .github/objectives.md
  - States the shared repository mission and the outcomes that define success.
  - Names specialized loops that contribute evidence and learning to that mission.
  - Defines evidence or verification that shows the mission is advancing.
- Last modified hygiene
  - Surfaces text files without a Last modified timestamp as attention candidates.
  - Surfaces text files with timestamps older than the configured stale threshold, defaulting to 30 days.
  - Uses timestamp age to help the session choose a mission-serving focus and folder, not as proof that a file is wrong.
- Existing specialist agents
  - Collectively serve the shared repository mission for the detected blog profile.
  - Remain user-owned while their specialized lenses contribute to the shared improvement loop.
  - Read their own current insight and overwrite it directly or return a ready-to-write record to their conductor.
  - Prevent generation of a redundant generic repo specialist.
- .github/insights/
  - Keeps one current insight per MCP or specialist surface instead of growing forever.
  - Records verified improvements, prune candidates, reusable learnings, and self-improvement notes.
  - Turns one-off discoveries into better future repo guidance instead of scattered chat memory.

## Verification

Each loop pass should name the changed behavior, run the cheapest relevant check, capture evidence, and record what improved in .github/insights/.

Detected commands:

- `cd astro-site && npm run build`
