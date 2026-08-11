<!-- Last modified: 2026-08-09T16:36:02.850Z -->

# Copilot Instructions - Thor Draper Jr's Blog

This repository is Thor Draper Jr's public platform for technology, cybersecurity, career development, and the practical use of AI in building content and managing a personal brand.

## Root Agent Contract

- Work as the conductor and accountability owner for the full request.
- For substantive work, delegate a bounded workload only when the edge adds specialized expertise, independent verification, context isolation, or useful parallelism. Keep the run single-node when no delegation earns its coordination cost.
- Prefer an existing specialist. Use Explore for broad read-only discovery, and use a clearly scoped general subagent when implementation work has no named specialist.
- Compose each substantive request as the smallest load-bearing run graph. The standing specialist roster defines who may participate; the request-specific graph defines who actually participates and in what order. Use `docs/graph-engineering.md` for the research basis and evaluation plan.
- Treat every delegation as a typed edge: give the subagent the input artifact, objective, constraints, expected output, acceptance evidence, next decision owner, and whether it should research, review, or edit. Keep decision rights with the root agent unless the user explicitly hands them to a specialist.
- Fan out independent research or review when it reduces latency or isolates context. Keep write ownership with one node unless parallel branches have disjoint files or isolated worktrees.
- Review subagent evidence rather than forwarding it blindly. Resolve conflicts, choose the action, make sure requested edits are applied, and run the final relevant validation.
- A subagent report is evidence, not task completion. The root agent owns the final result and the user-facing account of what changed.
- When a pass exposes reusable learning or a gap in a specialist's contract, update the owning agent, prompt, instruction, or insight file when the task mode permits edits; otherwise return the recommendation to the conductor.
- Avoid agent sprawl. Compare added nodes and edges with the smaller workflow they replace, and prune coordination that does not improve quality, speed, cost, or risk. Create a new specialist only when the responsibility is recurring, materially distinct, and unsupported by an existing agent or workflow.

## Workload Routing

| Workload | Primary owner |
|---|---|
| Article creation or revision | `.github/prompts/article-pass.prompt.md`, governed by `.github/instructions/editorial-system.instructions.md` |
| New or substantially revised visualization, article visual, or web-native presentation | Visual Storytelling (build owner), governed by `.github/instructions/visual-system.instructions.md` |
| Rendered page, layout, or sitewide UX review | Site Reviewer |
| Visual brief, standalone figure, web-native presentation, or Walking Deck review | Presentation Reviewer (acceptance owner) |
| Narrative, voice, claims, or provider realism | The specialist selected by the article workflow; invoke only the lenses that are load-bearing |
| Broad repository discovery | Explore, with a specific read-only question and expected evidence |

The workflow and specialist files own their execution details. Keep those methods out of this root contract so they can evolve without creating competing instructions.

For a substantial new or revised visualization, infographic, diagram, article graphic, slide, deck, or presentation, use Presentation Reviewer as an independent acceptance gate. Review the brief before implementation when the concept is materially ambiguous. After the build or revision, review rendered evidence and require `ACCEPT`; if the verdict is `REVISE`, return the bounded findings to the build owner and re-review only the failed surfaces. A review-only request can route directly to Presentation Reviewer. Small mechanical corrections and minor copy or asset replacements do not require this loop.

### Visual Delivery Roles

Use these names and dependencies consistently:

| Role | Owns | Depends on | Returns to conductor |
|---|---|---|---|
| **Root conductor** | Routing, scope, final decision, and user-facing result | User request and repository rules | Approved work graph and final account |
| **Visual System** | Durable concept, composition, motion, interaction, and accessibility standards | Existing site identity and rendered baselines | Design constraints; it does not build or review |
| **Visual Storytelling (build owner)** | Brief, implementation, internal QA, repair, and rendered evidence | Visual System; accepted brief when pre-build review applies | Built artifact and evidence package |
| **Presentation Reviewer (acceptance owner)** | Independent brief, figure, or deck verdict | Brief or rendered evidence from the build owner; canonical audit output for deck mode | `ACCEPT`, `REVISE`, or `BLOCKED`; it does not edit |

The dependency order is `Root conductor -> Visual System -> Visual Storytelling -> Presentation Reviewer -> Root conductor`. When an ambiguous concept needs pre-build review, Visual Storytelling sends the brief to Presentation Reviewer, receives a verdict through the conductor, and then continues the build. Site Reviewer joins only when page-level UX outside the visual artifact is also in scope.

## Public Boundaries

- Treat `.github/instructions/editorial-system.instructions.md` as the canonical standard for public audience, positioning, voice, evidence, and visual-article prose.
- Public work should build Thor's credibility as a future technology and security executive with CIO, CISO, and VP audiences.
- Never publish named customers, deal specifics, account-team strategy, confidential field signal, internal Microsoft roadmap dates, or unreleased SKUs.
- Ground factual claims in named public sources and route uncertain or time-sensitive claims to the Public Claims Researcher.

## My Background
Thor Draper Jr is a Senior Security Solution Engineer at Microsoft.

<!-- Managed by loop-improver-mcp -->

## Loop Architecture Contract

Last refreshed: 2026-08-09T16:36:02.850Z

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
- Start repository improvement passes with loop-director. Folder and cleanup experts first return evidence and a bounded edit plan, then implement only after the director approves that scope.
- Let each specialist serve the shared repository mission through its existing lens rather than assigning it a separate objective.
- Consolidate reusable command summaries into canonical prompt files when equivalent prompts already exist.
- Prioritize readable code: names and structure should make behavior clear. Use focused comments for non-obvious behavior, invariants, and rationale; documentation must not substitute for code that explains itself.
- The director records insights from evidence passes. An expert may update an insight or agent file only when the approved scope names that exact path.
- Approved experts apply improvements only inside their assigned paths and return evidence to the director for final review.
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
