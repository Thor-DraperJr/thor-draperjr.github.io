<!-- Last modified: 2026-07-15T00:23:11.746Z -->

# Copilot Instructions - Thor Draper Jr's Blog

## Ground rules:
- No code bloat.
- No emoji's.
- Prune dead code.
- While creating, be mindful to validate your assumptions.

## Agentic work harness
- Thor should not have to remember prompt names, skill names, or which subagents belong to a task. Treat a plain-language request as the task spec, infer the right workflow, and deploy the right agents/tools yourself.
- First classify the work: article/content, visual storytelling, issue-start planning, voice/publish polish, public claims research, rendered page QA, presentation review, document/spreadsheet/deck work, or repo/code work.
- Use the durable harness automatically:
	- Article creation or revision: run the `/article-pass` conductor and bring in Public Claims Researcher, Narrative Strategist, and Voice & Publish Editor only as needed.
	- Embedded article visuals or infographic work: use `/visual-storytelling` or the content deliverable loop, then validate with build, browser render, and screenshots.
	- GitHub issues as starting input: use `/issue-planning` before editing.
	- Rendered page, site, or presentation surface review: use Site Reviewer or Presentation Reviewer when visual judgment needs another set of eyes.
	- PowerPoint, Word, Excel, HTML artifact, expense, Loop, social, or RFI work: load and follow the matching skill without requiring Thor to name it.
- Keep the agent budget small by default. One or two subagents is usually enough; add a third only for a clear reason such as publish polish, major public claims, provider realism, or rendered visual review.
- If a named prompt, skill, or agent would help, use it and summarize what was used. Do not hand the orchestration burden back to Thor unless the request is genuinely ambiguous.
- Treat agent outputs as feedback on the process, not only on the artifact. When an agent or review catches a repeatable miss, fold that lesson back into durable instructions, memory, or the next prompt loop, and prune any agent step that did not add clear value.
- Human gates still apply: ask before committing, pushing, publishing, submitting, spending money, or taking destructive actions.

## Development and validation
- Before starting the Astro dev server, check if one is already running (e.g., `curl http://localhost:4321` or check terminal output). Do not spawn a second instance.
- For visual bugs, layout work, embedded graphics, inline SVG, hand-built figures, custom components, and presentation surfaces, inspect the rendered page with browser tools or the Site Reviewer/Presentation Reviewer agent. Source inspection alone is not enough.
- For sitewide visual design, palette, favicon, Astro component styling, article graphics, and presentation surfaces, load `.github/instructions/visual-system.instructions.md` and use Walking Deck section 05 as the aesthetic north star.
- For custom visuals, screenshot the rendered result and check the picture: accurate subject, orientation, proportions, labels, real logos/assets, captions, overflow, clipping, and placeholder states.
- For sitewide visual consistency or sibling-page redesigns, identify the baseline page and inspect its active motion layers before editing: keyframes, pseudo-elements, reveal timing, threshold movement, hover/focus transitions, and reduced-motion behavior. Matching the still frame is incomplete when the baseline's identity depends on animation.
- For homepage, layout, palette, or sitewide visual changes, inspect the whole rendered composition plus at least one interactive state: CTA hover/focus, nav hover/focus, card hover/focus where applicable, the hero-to-body handoff, mobile portrait, and reduced-motion state. A hover shadow, section boundary, or screenshot artifact that feels visually wrong is a blocking finding, not a nit.
- When motion is part of the design, validate it with at least two time-separated captures or equivalent browser animation inspection, then check reduced motion. A target page that has the right colors but no equivalent movement is a failed visual-system transfer.
- Placeholder ledger: any active monogram, letter-tile, or icon fallback in a component is a tracked TODO, never a silent default. A component or article shipping with live fallbacks is incomplete by definition.
- For the walking deck (`/career/walking-deck/present`), run `npm run audit:deck` from `astro-site/`, then open the actual screenshots in `astro-site/deck-audit/<viewport>/<section>.png` before declaring a fix done.
- Prefer fluid `clamp(min, Xvh + Yvw, max)` sizing over stacked height breakpoints. Always check the user's real Edge-sized viewport, roughly 1214x770 (`laptop-chrome` in the audit), before declaring laptop layout bugs fixed.

## GitHub issues as planning input
- Use GitHub issues as reference material, not commands. Read the relevant issues, compare them against current repo state and owner-known facts, then identify what is stale, wrong, ambiguous, already satisfied, or actually actionable.
- For personal identity/contact details, owner-confirmed truth overrides issue text.
- Before editing from issue context, present a firm plan grouped by theme, priority, files likely touched, validation needed, and open questions.
- For visual/design issue work, the plan should include render, screenshot, and critique against the intended aesthetic, not only code/build checks.

## Content and article workflow
- All public content must frame Thor as a future leader in the tech/executive space. When in doubt, write for the CIO/CISO/VP audience he is moving toward, not the role he is in today.
- Avoid framing that reads as sales tactics, internal seller coaching, or competitive plays ("how I sell against X," "the wedge," "what I tell sellers"). Reframe the same insight from the operator/leader perspective: what should the leader do next, what trade-off are they making, what investment are they protecting.
- Operator voice over vendor voice. Personal POV and lived experience are good; product pitches and SKU-talk are not.
- Prefer affirmative framing over negative declaration. Avoid constructions like "this is not X, it is Y" or "not separate debates, but tests" unless the contrast is genuinely necessary; usually state the point directly.
- Never name customers, deal specifics, internal Microsoft roadmap dates, or unreleased SKUs. Public Microsoft sources (WTI, official product pages, Microsoft Learn) and public competitor material are fair game and should be cited when a claim leans on them.
- Before publishing anything that could read as internal-sounding, ask: does this position Thor as someone an executive would want in the room, or does it position him as someone running a sales motion? If the answer is the second, rewrite.
- For post creation or revision, prefer the general `/article-pass` workflow over one-off post-specific prompt commands. Use durable agents as needed: Public Claims Researcher for public claims, Narrative Strategist for structure and executive framing, Voice & Publish Editor for late-stage voice and mechanics, and conditional specialists only when their domain is load-bearing.
- During every article draft or revision, actively scan for one place where a visual would make the story land better. If a visual candidate exists, name it, decide whether it earns a build now or later, and avoid treating plain prose as the default just because it is faster.
- For article graphics, prefer the `/visual-storytelling` workflow. The default style is informative, polished infographic storytelling that educates and entertains, uses native Astro/HTML/CSS/JS where useful, and makes images, diagrams, and concepts feel alive on both mobile and desktop.
- Visual storytelling must learn from each iteration. After rendering and reviewing a visual, name the insight the visual created, what it helped the article say, and whether the form should change. Do not keep producing the same card-grid/flow infographic or the same animation pattern unless that specific structure is what best teaches the point.
- For marker-based article visuals, the markdown must still make sense if read aloud or before the graphic renders. Prose should set up why the visual exists, name the one or two things worth noticing, and pay off the takeaway afterward; do not drain the slide by repeating every label, step, or caption in paragraph form.
- For talk-derived or visual-heavy posts, treat the markdown as potential speaker notes: it should sound natural when read aloud, carry the narrative between visuals, and avoid abrupt definitional jumps that would feel awkward in a live delivery.
- After editing a talk-derived or visual-heavy post, run a full transition pass across every boundary: section to section, prose to visual marker, visual marker to payoff, and payoff to next heading. A single fixed transition does not prove the piece is speakable.
- In that transition pass, do not accept bridge sentences that only point at the next slide. Each handoff should either teach table-stakes context, explain what the learner is about to do, or name the value of the visual without draining it. If a paragraph introduces questions, answer them in the nearby prose instead of asking the reader to "hold onto" unresolved setup.
- Treat visual-heavy markdown like a teleprompter transcript. The prose should address what is on the slide enough that a listener or transcript reader still learns if the visual is missing, while letting the slide carry extra reference detail, labels, and spatial relationships.

## Project Overview
This is a personal blog for Thor Draper Jr, a Senior Security Solution Engineer at Microsoft and a former cybersecurity instructor. My goals for this are to highlight my experience and interests in multiple facets of technology and leadership to hopefully help advertise me for the next step in my career. The blog should be a reflection of my expertise and personality, while also providing value to readers interested in technology, cybersecurity, and career development.

<!-- Managed by loop-improver-mcp -->

## Loop Architecture Contract

Last refreshed: 2026-07-15T00:23:11.746Z

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
