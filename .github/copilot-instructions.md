<!-- Last modified: 2026-07-29 -->

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
| New or substantially revised article visual | `.github/prompts/visual-storytelling.prompt.md`, governed by `.github/instructions/visual-system.instructions.md` |
| Rendered page, layout, or sitewide UX review | Site Reviewer |
| Web-native presentation or Walking Deck review | Presentation Reviewer |
| Narrative, voice, claims, or provider realism | The specialist selected by the article workflow; invoke only the lenses that are load-bearing |
| Broad repository discovery | Explore, with a specific read-only question and expected evidence |

The workflow and specialist files own their execution details. Keep those methods out of this root contract so they can evolve without creating competing instructions.

## Public Boundaries

- Treat `.github/instructions/editorial-system.instructions.md` as the canonical standard for public audience, positioning, voice, evidence, and visual-article prose.
- Public work should build Thor's credibility as a future technology and security executive with CIO, CISO, and VP audiences.
- Never publish named customers, deal specifics, account-team strategy, confidential field signal, internal Microsoft roadmap dates, or unreleased SKUs.
- Ground factual claims in named public sources and route uncertain or time-sensitive claims to the Public Claims Researcher.

## My Background
Thor Draper Jr is a Senior Security Solution Engineer at Microsoft.
