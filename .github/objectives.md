<!-- Last modified: 2026-08-09T17:42:35.615Z -->
<!-- Managed by loop-improver-mcp -->

# Repository Objectives

Use this file for the shared repository mission: what the repo is trying to become, what quality means here, and how specialized loops contribute to that mission.

## Product Mission

I write here for technology and security leaders, builders, and people growing their careers. I share practical lessons from security, cloud, AI, and leadership that readers can use in their own work. The site also gives me one place to keep my writing and resume current.

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
- loop-director: coordinates evidence from agents/file-practices.agent.md, agents/repo-cleanup.agent.md, agents/folder-github.agent.md, agents/folder-src.agent.md, agents/folder-tests.agent.md, approves bounded edits, and keeps final accountability for validation and closeout.
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
- .github/prompts/goal.prompt.md
  - Provides one generic entry point for evidence-driven repository improvement.
  - Explains the repository benefit and proof for each recommended change.
  - Continues through safe local work and asks only when material risk or ambiguity requires a decision.
- Last modified hygiene
  - Surfaces text files without a Last modified timestamp as attention candidates.
  - Surfaces text files with timestamps older than the configured stale threshold, defaulting to 30 days.
  - Uses timestamp age to help the session choose a mission-serving focus and folder, not as proof that a file is wrong.
- .github/agents/loop-director.agent.md
  - Owns routing, bounded implementation, final validation, insight updates, and reporting.
  - Runs independent folder and file-practice research in parallel when their evidence can change the implementation.
  - Approves bounded edits and delegates implementation to the expert that owns the affected scope.
- Scoped worker agents
  - Give each standard top-level folder a bounded ownership and behavior review.
  - Ground file-extension advice in repository configuration, nearby examples, and authoritative sources when needed.
  - Propose edits first, then implement only the scope that loop-director approves.
  - Remove verified stale, duplicated, generated, and orphaned material within a safe bounded scope without reverting unrelated user work.
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

- `cd astro-site && npm run check`
