---
layout: post
title: "How I Build Presentations in the Browser with GitHub Copilot"
date: 2026-08-11
categories: [tech]
tags: [technical, ai, software-development, leadership]
draft: false
presentation: website-presentation
excerpt: "How I configured instructions, playbooks, specialist agents, browser evidence, and approval gates so one request can become a reviewed article visual."
---

My dad asked me how I make the presentations on this website.

I start with the article and ask GitHub Copilot to create a visual that helps me tell the story. From there, the configured workflow handles the component work and browser checks.

A typical request sounds like this:

> Read this article. Find the idea readers need to remember. Create a visual that makes it easier to understand.

That request starts the workflow I configured in this repository. The repository tells Copilot which instructions and specialist roles apply. Visual Storytelling owns the build and browser evidence, Presentation Reviewer checks the result, and I decide whether anything is ready to commit or publish.

The five scenes below show that workflow from my request to my final approval.

[[PRESENTATION_WORKFLOW]]

The prompt is simple. The operating model around it does the real work.

## What I configured once

Most of the workflow lives in Markdown files under `.github`. They give Copilot durable context before it changes the website.

I configured three types of Markdown files:

- **Instructions** are the standing rules. They define audience, visual standards, safety boundaries, ownership, validation, and approval requirements.
- **Prompts** are reusable playbooks that the repository instructions direct the conductor to read for recurring work, such as revising an article or building a visual.
- **Agents** are specialists with defined jobs and output contracts. A builder and an independent reviewer do not share ownership.

Here is how those roles appear in the files themselves.

The root instructions route new visual work to its owner and require an independent acceptance gate:

```markdown
- Work as the conductor and accountability owner for the full request.
- A subagent report is evidence, not task completion.

For a substantial new or revised visualization,
use Presentation Reviewer as an independent acceptance gate.
```

The reusable prompt gives Visual Storytelling its operating contract:

```markdown
You are **Visual Storytelling (build owner)**.

You own the brief, implementation, internal QA,
reviewer repairs, and rendered evidence.
Presentation Reviewer owns independent acceptance
and does not share write ownership.
```

The reviewer agent defines the other side of that boundary:

```markdown
You are **Presentation Reviewer (acceptance owner)**.

Review concepts and rendered work. Do not edit implementation files
or audit scripts, and do not manually alter acceptance evidence.

Return `ACCEPT` only when every applicable gating score is at least 90
and the rendered evidence supports the score.
```

The root file, `.github/copilot-instructions.md`, acts as the entry point. It tells Copilot how this repository is organized and which workflow owns each kind of request.

For visual work, two instruction files supply the durable standards:

- `.github/instructions/editorial-system.instructions.md` defines the public audience, voice, evidence, and safety boundaries.
- `.github/instructions/visual-system.instructions.md` defines the visual language, concept gate, responsive behavior, motion, interaction, and accessibility rules.

That Visual System file is where the design starts. Based on the site's existing identity and the Walking Deck's fifth section, it defines deep ink and blue-black for structure, warm paper for editorial surfaces, blue for interaction, gold for key moments, and periwinkle and mint for depth and success states. Visual Storytelling applies those roles before it chooses the details of a new component, and readability wins whenever mood and clarity compete.

For a visual request, the repository instructions direct the conductor to `.github/prompts/visual-storytelling.prompt.md`. That playbook turns the standards into an execution loop with a brief, a concept decision, implementation, rendered proof, and independent acceptance.

For each request, the conductor selects only the roles needed to build and verify the visual. These files guide Copilot's choices, while tool availability and my approval settings determine what it can do.

## What happens after I ask

### 1. Copilot reads the article

The article is the source material. Copilot identifies the audience, the core argument, and the idea a visual should make easier to understand or remember.

When the narrative itself needs work, the conductor can ask the **Narrative Strategist** a focused question. That role returns structure and framing evidence, while Visual Storytelling keeps ownership of the visual build.

### 2. Visual Storytelling creates the contract

**Visual Storytelling** is the build owner. Before writing the component, it defines:

- the teaching point;
- the source evidence;
- the visual form and focal path;
- the scene's entry, build, hold, and exit states;
- the mobile and reduced-motion behavior;
- the proof required before review.

That brief gives the visual one job: help the reader understand something faster.

The build owner then translates the Visual System into the component. It chooses the palette tokens, type hierarchy, spacing, motion, focus states, and responsive composition from those standing rules.

If the form is ambiguous, the **Presentation Reviewer** checks the brief before implementation and returns `ACCEPT`, `REVISE`, or `BLOCKED`. Visual Storytelling keeps build ownership.

### 3. The build owner creates one shared visual

The brief becomes a native Astro component. The article contains a marker where the visual belongs:

```text
[[PRESENTATION_WORKFLOW]]
```

The article frontmatter also contains:

```yaml
presentation: website-presentation
```

The article route resolves the marker and places the component between sections of prose. The presentation route renders the same component full screen. One source therefore serves both reading and presenting.

The shared presentation controller adds the section counter, arrow buttons, keyboard navigation, speaker cues, and Exit behavior. Those implementation details stay backstage while Copilot works.

### 4. The browser supplies evidence

A successful build proves that the source is valid. It does not prove that the visual works.

Visual Storytelling renders the result across the actual presentation matrix:

- desktop at `1920x1080`;
- large and standard laptops at `1440x900` and `1366x768`;
- a laptop with browser chrome at `1214x770`;
- snapped windows at `960x1080` and `720x900`;
- a phone in landscape at `844x390`;
- a phone in portrait at `390x844`.

Each medium asks a different question. Desktop reveals weak hierarchy and stranded space. Laptop chrome exposes height assumptions. Snapped windows test whether the composition can narrow without collapsing. Phone layouts prove that labels, controls, and the teaching sequence still work when the visual changes shape.

The checks look for clipping, overflow, unreadable labels, broken controls, weak focus states, reduced-motion problems, and visual relationships that no longer teach the intended point. Interactive scenes also need a useful initial HTML state, a changed state reached through real controls, an equivalent keyboard path, and a reduced-motion result that keeps the meaning intact.

The screenshots and audit reports form an evidence package. Source code alone cannot substitute for that rendered proof.

### 5. Visual Storytelling hands off a review package

The handoff to Presentation Reviewer is structured around three things: intent, rendered proof, and the verification record. It includes the teaching point and source evidence, captures and measurements from all eight viewport and media conditions, and the results of applicable interaction, accessibility, build, and audit checks. Known limitations travel with the package.

Presentation Reviewer receives evidence, not a request to make the design better. Its job is to judge the result against the brief, the Visual System, and the rendered page.

This distinction has mattered in practice. A section-level audit can report clean dimensions while a child panel still spills outside its frame or one layer covers another. The workflow measures the page and inspects the pixels.

### 6. Independent review closes the loop

A `REVISE` verdict says exactly where the visual failed, what must change, and what proof the reviewer needs next. The problem might be a clipped label on a phone in landscape, weak hierarchy below the browser chrome, or a focus state that obscures a control.

Visual Storytelling fixes the problem, reruns the affected viewport and nearby sizes, and sends fresh evidence. Presentation Reviewer then checks the repair and the layouts it could have disturbed instead of reopening work that already passed.

`ACCEPT` means the visual met the brief across the full matrix and the screenshots support that decision. The accepted result then comes back to me for the final call.

Visual Storytelling owns execution. Presentation Reviewer owns acceptance. I own the final decision.

## What stays under my control

When I make a request, the Markdown files give Copilot the workflow and boundaries for the job.

With the required tools available and approved, Copilot can edit files, run the build, collect browser evidence, and repair failed surfaces. I still own the decisions that carry consequences:

- whether the visual explains the story I intended;
- whether a proposed scope should expand;
- whether customer, internal, or sensitive information is public-safe;
- whether changes can be committed or pushed;
- whether the article can be published.

That boundary is part of the design. I delegate the mechanics and keep accountability.

## The repository pieces

The implementation for this article is small because the reusable system sits around it:

```text
.github/
|-- copilot-instructions.md
|-- instructions/
|   |-- editorial-system.instructions.md
|   `-- visual-system.instructions.md
|-- prompts/
|   |-- article-pass.prompt.md
|   `-- visual-storytelling.prompt.md
`-- agents/
    |-- narrative-strategist.agent.md
    `-- presentation-reviewer.agent.md

astro-site/
|-- src/content/posts/2026-08-11-how-my-website-becomes-a-presentation.md
|-- src/components/CopilotVisualWorkflow.astro
|-- src/pages/[category]/[slug].astro
|-- src/pages/[category]/[slug]/present.astro
|-- src/scripts/presentationDeck.client.ts
|-- scripts/deck-audit.mjs
`-- tests/site-output.test.mjs
```

The standing specialist roster defines the roles that are available. Each request uses only the roles that earn their place in that run.

I bring the article and one request. The result comes back to me with evidence.

**Copilot runs the loop. The browser shows the evidence. I make the call.**

## Sources

- [Customize AI in VS Code](https://code.visualstudio.com/docs/agents/concepts/customization)
- [Use custom instructions in VS Code](https://code.visualstudio.com/docs/agent-customization/custom-instructions)
- [Create and use prompt files in VS Code](https://code.visualstudio.com/docs/agent-customization/prompt-files)
- [Create custom agents in VS Code](https://code.visualstudio.com/docs/agent-customization/custom-agents)
- [Manage approvals and permissions in VS Code](https://code.visualstudio.com/docs/agents/run/approvals)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Markdown in Astro](https://docs.astro.build/en/guides/markdown-content/)
