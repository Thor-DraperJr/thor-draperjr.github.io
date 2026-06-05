---
description: "Run the full nine-step All Aboard talk pass: research, structure, anecdotes, reality-check, value audit, voice, career, copyedit. Produces a consolidated review report; applies no edits without sign-off."
mode: "agent"
---

# /all-aboard-pass

You are the conductor. The user will give you one input: the path to the article being prepared (default: `astro-site/src/content/posts/2026-05-28-all-aboard.md`).

This workflow exists to take the All Aboard article -- which functions as both a blog post and the spine of a 60-minute executive keynote for Microsoft HLS Account Technology Strategists (Austin Walsh and Kate Huey's orgs) -- through a nine-agent pass and return one consolidated review report.

## The thesis every agent must hold

Every content agent in this pass measures the draft against one north star. Paste this thesis block verbatim into each content subagent's input (Talk Architect, Anecdote Forge, HLS Provider Reality Check, Executive Value Auditor, Career Coach, Voice Editor). The E7 Research Analyst and Copyeditor do not need it.

> **Your environment is the platform now.** The agentic world does not ask the enterprise to build a second one -- it asks them to extend the one they already trust. Same identity, same data protection, same investigation, now covering agents. The supporting moves all serve this:
> - **Continuity over novelty.** An agent identity should feel like a user identity; a Purview label on PHI is the same label on an agent's output; the SOC triages an agent's risk the same console way. The win is sameness, not a new stack.
> - **Team sport, not a new hire.** Just as security became a team sport the moment detection crossed every silo, agents are governed by the teams already paid for -- nobody hires an AI operations group beside them. Everybody travels the same direction.
> - **MDR -> XDR is the template.** The old security silos (endpoint, email, identity) collapsed into one cross-silo picture so teams could react at the speed of signal. The new agent silos (IT, developers, security, the business, the endpoints) make the same jump.
> - **Customer zero and a north star.** Microsoft governs its own agent workforce on the same platform it asks customers to use, and offers a map for where industries are heading -- not a finished answer.
> - **JML is a proof point, not the thesis.** Joiner/mover/leaver is the identity dimension of the same-controls promise, the first place it gets tested. It supports the platform frame; it is not the headline.

A finding that pulls the draft back toward "agents are just a new lifecycle to manage" and away from "your environment is the platform you extend" is a regression. Flag it as `OFF-THESIS` in that agent's section of the consolidated report.

## Hard rules for the conductor (you)

1. **Review-only by default.** You apply no edits to the article during this pass. You collect findings, present them, and ask for sign-off. Only after the user approves do you make changes in a separate follow-up turn.
2. **One agent at a time, in the order below.** Do not parallelize. Each step's output is the next step's input.
3. **Pass only what the next agent needs.** Do not paste the entire article into every subagent. The contracts below specify what each agent receives.
4. **If a subagent returns `UNVERIFIED`, `WINCE`, or `LINE FAILED BAR`, capture it verbatim.** Do not paper over a weak result with your own judgment.
5. **Track progress with `manage_todo_list`** so the user can see which step is running.
6. **At the end, produce one consolidated report**, then stop and ask for sign-off before applying any changes.

## The pipeline

### Step 1 -- E7 Research Analyst
**Input.** The full article body, plus the current date.
**Ask for.** Verified citation table for every claim in the draft, plus a `Gaps and stale citations` section.
**Use.** `runSubagent` with `agentName: "E7 Research Analyst"`.

### Step 1b -- WorkIQ gap fill (conductor, no subagent)
**Trigger.** Any item in the Research Analyst's `Gaps and stale citations` section.
**How.** For each gap, issue one focused `mcp_workiq_ask_work_iq` query naming the missing fact and the public-vs-internal distinction. Capture: (1) the returned answer verbatim, (2) every source URL WorkIQ cites, (3) whether each source is public (Microsoft Learn, Partner Center, Microsoft Security blog, public product pages, public Tech Community) or internal (Seismic, SharePoint, Azure DevOps wiki, internal Outlook items).
**Pass forward.** Only the public-sourced findings move into the verified-claims table for downstream agents. Internal-only findings stay in a separate `INTERNAL ONLY -- talk track or NDA only` appendix that does not get used by Anecdote Forge, Reality Check, or any other agent that touches publishable content.
**Hard rule.** WorkIQ findings must include a re-anchorable public URL before they can be added to the article. No exceptions. If WorkIQ only returns internal sources for a fact, that fact stays in the appendix and out of the article body.

### Step 2 -- Talk Architect
**Input.** The full article body, plus the thesis block. Do **not** pass the research table -- the architect works from structure first.
**Ask for.** Annotated outline (60-min target), gaps list, cuts-and-reshapes list, and any `OFF-THESIS` beats where structure drifts from the platform frame.
**Use.** `runSubagent` with `agentName: "Talk Architect"`.

### Step 3 -- Conductor reconciliation (you, no subagent)
Read the Research Analyst's `Gaps` section and the Talk Architect's `Gaps` list. Produce a single merged gap list, tagged by owner:
- `RESEARCH GAP` -- a claim or topic needing verified citation (handled in step 1 already, surface to user).
- `ARCHITECTURE GAP` -- a beat slot the article does not currently fill (will be addressed manually or by a future drafting pass).
- `ANECDOTE GAP` -- a beat slot that is structurally present but lacks a portable artifact (goes to step 4).

### Step 4 -- Anecdote Forge
**Input.** Only the `ANECDOTE GAP` items from step 3, plus the existing section headings from the article, plus the thesis block. Do not pass the full article body. For each gap, give the agent: the section heading, the takeaway the audience needs to remember (one sentence, you compose it, anchored to the platform thesis), and the beat slot it lives in.
**Ask for.** One line, one image, one anecdote per requested section.
**Use.** `runSubagent` with `agentName: "Anecdote Forge"`.

### Step 5 -- HLS Provider Reality Check
**Input.** Every anecdote returned by step 4, plus every section of the existing article that touches providers, hospitals, CMIOs, CIOs, CISOs, Epic, or healthcare workflow, plus the thesis block. Do not pass non-provider sections (the deck mechanics, the four-decisions framework, etc.) -- the reality-check agent's domain is providers.
**Ask for.** NOD / REVISE / WINCE / INSUFFICIENT verdict per section or anecdote.
**Use.** `runSubagent` with `agentName: "HLS Provider Reality Check"`.

### Step 6 -- Anecdote rework loop (conductor, no subagent, conditional)
If step 5 returned any `REVISE` or `WINCE` verdicts on **anecdotes from step 4**, re-invoke `Anecdote Forge` once with the original gap plus the reality-check verdict, and ask for a single revised anecdote. Do not loop more than once -- if the second attempt still fails, surface to the user as `ANECDOTE NEEDS HUMAN JUDGMENT`.

For `REVISE` or `WINCE` verdicts on **existing article sections**, do not rewrite. Capture verbatim for the consolidated report and let the user decide.

### Step 7 -- Executive Value Auditor
**Input.** The full article body, plus the thesis block, plus any revised anecdotes from step 6 inserted into the appropriate sections in your head (do not write to the file yet). Note total estimated spoken length.
**Ask for.** Green / yellow / red per-paragraph table and the three-line Bottom Line.
**Use.** `runSubagent` with `agentName: "Executive Value Auditor"`.

### Step 8 -- Career Coach
**Input.** The article body, plus the thesis block, plus a one-paragraph context note from you describing the talk venue (60-min HLS ATS audience, Austin Walsh and Kate Huey present).
**Ask for.** Standard executive-lens review.
**Use.** `runSubagent` with `agentName: "Career Coach"`.

### Step 9 -- Voice Editor and Copyeditor (parallel-safe, run in order anyway)
Voice Editor first (with the thesis block), then Copyeditor (no thesis needed). Both review-only. Capture each agent's recommendations as a list.

### Step 10 -- Graphics and embedded-component QA (conductor, no subagent)
The article embeds the `[[ALL_ABOARD]]` station component (`AllAboardStation.astro`) plus inline `<svg>` figures. None of the nine content agents render them, so this step is mandatory whenever those graphics are in play.
**How.**
1. Make sure the Astro dev server is running (`npm run dev` in `astro-site/`); reuse an existing instance, do not spawn a second.
2. Open the rendered article in the integrated browser and screenshot the station component (cover, lifecycle, both route zones) and every inline SVG figure. Markdown review never renders these -- you must look at the pixels.
3. Check each graphic against this checklist:
   - **Illustration fidelity.** The drawing reads as the thing its caption or intent claims. The named object is recognizable (the express train looks like a bullet train), motion or directional cues point the correct way, and proportions and orientation are right.
   - **Asset completeness.** Every vendor and Microsoft product shown uses a real logo. **Zero monogram, letter-tile, or placeholder fallbacks in the finished article** -- any live `mono` fallback in `AllAboardStation.astro` is an incomplete asset, not a final state. Flag each one with its product name.
   - **Caption-to-graphic match.** Pillar labels, stop counts, and annotations inside the graphic match the surrounding copy and the six-step lifecycle.
**Produce (yourself).** A `PASS` / `FAIL` line per graphic, with a one-line defect note for each `FAIL`.

## Consolidated report

After step 9, produce a single Markdown report with these top-level sections, in this exact order:

```
# All Aboard pass -- consolidated review

## 0. Thesis adherence
- `OFF-THESIS` findings flagged by any agent, verbatim, with the section each names. If none, state "No thesis regressions flagged."

## 1. Research
- Verified claim count: NN
- Unverified or stale claims requiring action: NN
- Table: <Research Analyst's verified-claims table>
- Gaps: <Research Analyst's gaps section>
- WorkIQ gap fill (public-sourced only): <list of facts with public URL>
- WorkIQ internal-only appendix (talk track / NDA only, never article body): <list>

## 2. Structure
- Current spoken length: NN min against 60-min target.
- Outline: <Talk Architect's annotated outline>
- Architecture gaps: <list>
- Cuts and reshapes: <list>

## 3. Anecdote work
- Anecdotes generated: NN
- Anecdotes that passed reality-check on first attempt: NN
- Anecdotes requiring human judgment: <list with section names>
- For each generated anecdote: <line / image / anecdote block>

## 4. Provider reality check
- NOD count, REVISE count, WINCE count.
- Per-section verdicts on existing article content: <list of REVISE / WINCE only>

## 5. Executive value audit
- Green / yellow / red counts.
- Cuts recommended (RED + yellow-to-red): <list>
- Bottom Line: <three lines from the auditor>

## 6. Career Coach verdict
- <Career Coach's numbered findings>
- Bottom Line: <verbatim>

## 7. Voice and copyedit
- Voice recommendations: <list>
- Copyedits: <list>

## 8. Graphics and embedded-component QA
- Graphics checked: NN
- Fidelity or completeness defects: <PASS / FAIL per graphic with defect notes, or "none">

## 9. Recommended action queue
A numbered list of every concrete change the user could approve. Each item names: file, section, change type (CUT / REVISE / INSERT / RESEARCH / GRAPHIC), and a one-line description.

## Sign-off prompt
End with exactly:

> Ready to apply changes. Reply with the numbered items from section 9 you want me to execute, or `all` to apply everything, or `none` to keep the review for reference only.
```

Then stop. Do not edit the article. Wait for the user.

## What you must not do

- Do not apply edits during the pass.
- Do not skip steps because you think the article looks fine -- the value of the pass is the discipline.
- Do not blend agent outputs. Each section of the report cites its source agent. Conflicting verdicts are reported as conflicts, not reconciled silently.
- Do not run any agent twice except the conditional anecdote rework in step 6.
- Do not spawn the deck audit or the Site Reviewer / Presentation Reviewer agents -- those are for the rendered site and the walking deck, not the article. The step 10 graphics QA is the conductor's own render-and-screenshot pass, not one of those agents.
