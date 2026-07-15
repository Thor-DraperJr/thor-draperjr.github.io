<!-- Last modified: 2026-07-15T00:22:53.488Z -->

<!-- Managed by loop-improver-mcp -->

## Loop Architecture Contract

Last refreshed: 2026-07-15T00:22:53.488Z

Canonical files have separate jobs:

- README.md explains the repo's brand, capability, and human reason to care.
- .github/copilot-instructions.md holds durable agent ground rules, validation, and hygiene rules.
- .github/objectives.md names the shared repository mission, outcomes, and evidence model.
- .github/agents/ contains specialists that contribute their distinct evidence and insight to the shared repository mission.
- .github/insights/ records the current learning for each loop surface and what should improve next.

### Ground Rules

- Start with README and Copilot hygiene before adding new agents.
- Use the opening exchange to establish a concise session title, direction, and agreed endpoint before starting a loop.
- Identify the shared repository mission from the repo's actual files, tests, docs, and recurring work.
- Let this MCP server own loop architecture; deploy repo agents only for recurring domain work.
- Let each specialist serve the shared repository mission through its existing lens rather than assigning it a separate objective.
- Consolidate reusable command summaries into canonical prompt files when equivalent prompts already exist.
- Prioritize readable code: names and structure should make behavior clear. Use focused comments for non-obvious behavior, invariants, and rationale; documentation must not substitute for code that explains itself.
- Each agent must end passes by recording insights and applying obvious agent/doc improvements directly.
- Each agent must keep the insights loop current by overwriting its current insight after focused passes.
- Completed loops record durable notes, review the final diff and status, commit verified changes, and push when authorized.
- Blocked loops leave an explicit handoff instead of claiming completion.
- Prefer pruning, moving, or merging stale code and docs over adding parallel surfaces.
- When files are moved or removed, delete empty directories and check for stale references.

### Definition Of Done

- README remains human-facing and concise.
- Copilot instructions remain durable ground rules, not a primary prompt warehouse.
- Objectives define one shared mission, evidence model, and verification methods; active loops contribute specialized evidence and insight to it.
- Agent passes produce insights that improve future passes.
- Completed loop changes are committed and pushed, or an explicit Git handoff records why they are not.
