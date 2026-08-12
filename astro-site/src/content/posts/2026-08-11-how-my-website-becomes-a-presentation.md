---
layout: post
title: "How I Build Presentations in the Browser with GitHub Copilot"
date: 2026-08-11
categories: [tech]
tags: [technical, ai, software-development, leadership]
draft: false
presentation: website-presentation
excerpt: "How I use GitHub Copilot, saved instructions, and browser checks to turn an article into a visual presentation."
---

I write this blog in VS Code. Lately, I've been using GitHub Copilot to create visual aids for my articles and turn them into full-screen presentations.

I start with an article and ask Copilot to create a visual that helps me tell the story. The files in this repository guide the build, the browser checks the result, and I make the final call.

A typical request sounds like this:

> Read this article. Find the idea readers need to remember. Create a visual that makes it easier to understand.

That request starts a process I set up for this site. One role builds the visual, another checks it in the browser, and I decide whether it's ready to publish.

The five scenes throughout this article follow that process from my request to my final approval.

[[PRESENTATION_WORKFLOW_ASK]]

## What I configured once

I set up most of this process once in Markdown files under `.github`. Each request starts with the same rules, roles, and approval boundaries.

I configured three types of Markdown files:

- **Instructions** are rules Copilot follows each time it works on the site.
- **Prompts** are saved directions for jobs I do more than once, such as revising an article or building a visual.
- **Agents** are focused roles. One can build the visual while another checks the result.

I split the work on purpose. The same role doesn't build and approve the visual. Here is what that looks like in the files.

The root instructions route new visual work to its owner and require an independent acceptance gate:

```markdown
- Work as the conductor and accountability owner for the full request.
- A subagent report is evidence, not task completion.

For a substantial new or revised visualization,
use Presentation Reviewer as an independent acceptance gate.
```

The reusable prompt gives Visual Storytelling its job:

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

The root file, `.github/copilot-instructions.md`, is the starting point. It tells Copilot how the repository is organized and where to find the right directions for each job.

For visual work, two instruction files supply the durable standards:

- `.github/instructions/editorial-system.instructions.md` defines the public audience, voice, evidence, and safety boundaries.
- `.github/instructions/visual-system.instructions.md` defines the visual language, concept gate, responsive behavior, motion, interaction, and accessibility rules.

The Visual System is the design reference. I based it on the site's existing look and the fifth section of the Walking Deck. It gives each color a job and puts readability first.

For a visual request, the repository instructions point Copilot to `.github/prompts/visual-storytelling.prompt.md`. That saved prompt covers the brief, design choice, build, browser checks, and independent review.

Copilot uses only the roles needed for the request. My tool and approval settings still control what it can do.

[[PRESENTATION_WORKFLOW_RULES]]

## What happens after I ask

### 1. Copilot reads the article

Copilot starts by reading the article. It identifies the audience, the main argument, and the idea the visual should make easier to understand or remember.

When the story itself needs work, Copilot can ask the **Narrative Strategist** for help with the structure or framing. Visual Storytelling still handles the visual.

### 2. Visual Storytelling writes the brief

Before writing code, **Visual Storytelling** defines:

- the teaching point;
- the information it will use;
- the kind of visual and where the reader should look first;
- what the reader sees first, what changes, and where the scene ends;
- how it will work on a phone and with reduced motion;
- the checks it must pass before review.

The brief gives the visual one job: help the reader understand the idea faster.

Visual Storytelling then uses the design rules to choose the colors, type, spacing, motion, keyboard focus, and layout for different screen sizes.

If the right design isn't clear, the **Presentation Reviewer** checks the brief before the build and returns `ACCEPT`, `REVISE`, or `BLOCKED`.

[[PRESENTATION_WORKFLOW_TEAM]]

### 3. The build owner creates one shared visual

The brief becomes one Astro component that both pages reuse. The article contains a marker that tells Astro where to place it:

```text
[[PRESENTATION_WORKFLOW]]
```

The configuration block at the top of the article also contains:

```yaml
presentation: website-presentation
```

The article places the component between sections of prose. The presentation page loads the same component full screen. I only have one visual to maintain.

A shared controller adds the section counter, arrow buttons, keyboard navigation, speaker cues, and Exit button.

### 4. The browser supplies evidence

A successful build proves that the source is valid. It does not prove that the visual works.

Visual Storytelling renders the result at the screen sizes I support:

- desktop at `1920x1080`;
- large and standard laptops at `1440x900` and `1366x768`;
- a laptop with browser chrome at `1214x770`;
- snapped windows at `960x1080` and `720x900`;
- a phone in landscape at `844x390`;
- a phone in portrait at `390x844`.

Each medium asks a different question. Desktop reveals weak hierarchy and stranded space. Laptop chrome exposes height assumptions. Snapped windows test whether the composition can narrow without collapsing. Phone layouts prove that labels, controls, and the teaching sequence still work when the visual changes shape.

The checks look for clipped content, unreadable labels, broken controls, keyboard focus problems, and motion that gets in the way. Interactive scenes must work with a mouse, keyboard, touch, and reduced motion.

The screenshots and audit reports show what happened in the browser. Reading the source code can't prove that the visual works.

[[PRESENTATION_WORKFLOW_PROOF]]

### 5. The reviewer gets the results

Visual Storytelling sends the reviewer the teaching point, screenshots and measurements for all eight conditions, test results, and any known limitations.

The reviewer compares those results with the brief, the Visual System, and the rendered page. It reviews the work but doesn't edit it.

This distinction has mattered in practice. A section-level audit can report clean dimensions while a child panel still spills outside its frame or one layer covers another. The workflow measures the page and inspects the pixels.

### 6. Independent review closes the loop

A `REVISE` verdict says where the visual failed, what must change, and what the reviewer needs to see next. The problem might be a clipped label on a phone in landscape, a weak layout below the browser controls, or a keyboard focus state that covers a button.

Visual Storytelling fixes the problem, reruns the affected viewport and nearby sizes, and sends fresh evidence. Presentation Reviewer then checks the repair and the layouts it could have disturbed instead of reopening work that already passed.

`ACCEPT` means the visual met the brief at every supported size and the screenshots support that decision. The result then comes back to me for the final call.

## What stays under my control

My repository gives Copilot the process and boundaries for the job.

With the required tools available and approved, Copilot can edit files, run the build, check the site in a browser, and repair problems. I still approve the decisions that carry consequences:

- whether the visual explains the story I intended;
- whether a proposed scope should expand;
- whether customer, internal, or sensitive information is public-safe;
- whether changes can be committed or pushed;
- whether the article can be published.

I let Copilot handle the repeatable work while I stay responsible for what goes public.

[[PRESENTATION_WORKFLOW_GATE]]

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

This setup lets me stay focused on the story. Before I publish, I can see what Copilot built, how it worked in the browser, and what the reviewer found.

## Sources

- [Customize AI in VS Code](https://code.visualstudio.com/docs/agents/concepts/customization)
- [Use custom instructions in VS Code](https://code.visualstudio.com/docs/agent-customization/custom-instructions)
- [Create and use prompt files in VS Code](https://code.visualstudio.com/docs/agent-customization/prompt-files)
- [Create custom agents in VS Code](https://code.visualstudio.com/docs/agent-customization/custom-agents)
- [Manage approvals and permissions in VS Code](https://code.visualstudio.com/docs/agents/run/approvals)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Markdown in Astro](https://docs.astro.build/en/guides/markdown-content/)
