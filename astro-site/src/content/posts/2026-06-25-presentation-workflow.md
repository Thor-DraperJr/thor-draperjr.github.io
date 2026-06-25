---
layout: post
title: "How I Turn Articles Into Presentations I Can Actually Teach From"
date: 2026-06-25
categories: [tech]
tags: [github-copilot, agents, presentations, workflow, content, astro]
draft: false
excerpt: "A copyable markdown workflow for building presentation-ready articles with Copilot agents, optional present mode, and screenshots that prove the layout works."
---

I used to think about presentations as files. Open PowerPoint, make the slides, rehearse, send it somewhere, hope the export did not do anything strange. That still has a place, but it is not how I want the best pieces on this site to work.

For the first-pull-request session, the deck is not separate from the article. The article teaches the idea in prose. The visuals give the room something to look at. The present view lets me stand in front of the same material and run it like a talk. Same source, different posture.

The lesson I keep coming back to is simple: Copilot can help put the pieces together, but I still have to own the call. The article needs to sound like me, the visuals need to teach something, and the browser needs to prove it works before I put my name on it.

[[PRESENTATION_WORKFLOW]]

I am not trying to win the speed-run deck contest here. I want something I can read, teach from, revise later, and trust on the screen I will actually use.

Here is the version I would copy if I were starting from scratch.

## 1. Write down what I am making first

Before I touch the code, I decide what I am actually making. Is this just an article? Is it a visual-heavy article? Is it something I may need to teach from live?

That decision keeps me from letting the tool wander. For the first-pull-request piece, the answer was article first, presentation second. The article still had to stand on its own. Present mode only earned a spot because I may need to teach the material live and move through it full-screen.

I usually start with a short markdown brief. This is not frontmatter yet. It is the working agreement for the agents.

```markdown
## Artifact Brief

- Artifact: presentation-ready article
- Audience: people opening their first pull request with Copilot in VS Code
- Reader outcome: they can explain branch, diff, pull request, and merge
	in their own words
- Live use: yes, I may teach from this
- Presentation mode: optional route, not the default article shape
- Visual need: show the workflow, the agent loop, and what a diff looks like
- Validation: build, render, screenshot laptop-chrome, mobile landscape,
	and mobile portrait
- Human gates: do not commit, push, publish, or spend money without my approval
```

That small block does a lot of work. It tells the agent what matters, what not to overbuild, and where the work has to prove itself.

## 2. Create the article shell in markdown

Then I make the markdown look like the artifact I want to read. The article should still work if the reader never opens present mode.

```markdown
---
layout: post
title: "Your Article Title"
date: YYYY-MM-DD
categories: [tech]
tags: [github-copilot, agents, presentations]
draft: true
excerpt: "One plain-English sentence about what the reader gets."
# Add this only when the article genuinely needs a present route.
presentation: first-pull-request
---

Open with the situation the reader recognizes.

Name the promise of the piece in plain language.

Set up why the first visual exists.

[[YOUR_VISUAL_MARKER]]

Pay off what the visual showed.

Move to the next idea.
```

That marker matters. I do not paste a pile of HTML into the markdown. The markdown stays readable. The component does the visual work. The prose sets it up and pays it off afterward.

If the article does not need a presentation route, I leave `presentation` out. That is the habit I want to keep.

## 3. Give each agent a job

The agents help most when I know what kind of judgment I want from them. If every agent is just another pass that says "make this better," the process gets noisy fast. The point is not to add more AI opinions. It is to separate the judgments: narrative shape, rendered presentation quality, voice, and public claims.

The first lane is discovery. I want a read-only pass that finds the nearby code path and likely files. I do not want edits yet.

```text
Run Explore, read-only.

Inspect how this site currently renders article visuals and presentation routes.
Find the route files, components, client scripts, audit scripts, and likely
files to touch.
Do not edit anything.
Return the smallest implementation surface and one cheap validation check.
```

The Narrative Strategist gets called when the shape is still flexible. I want that agent looking at audience, arc, what should be remembered, and where the piece is trying too hard. A good prompt is specific about the judgment I need.

```text
Review this first-pull-request deck/article for narrative shape.
Audience: adults who may be new to GitHub and VS Code.
Tell me where the sequence gets confusing, where the learner may lose confidence,
and what one idea should survive after the session ends.
Do not copyedit yet.
```

After that, the coding agent builds against the brief instead of inventing a new plan every few minutes.

```text
Build this as a native Astro article/visual/presentation artifact.

Use the existing marker pattern for visuals.
If presentation mode is needed, add it as an optional route derived from
the article.
Keep the article readable without present mode.
Add motion only when it teaches the idea.
After the first edit, run the narrowest build or audit that can disconfirm
the change.
```

I call the Presentation Reviewer after there is something real to look at. That timing matters. A slide layout cannot be judged from intent alone. You need the rendered page, in present mode, at the actual viewport sizes. For my site, that includes the laptop-chrome viewport that matches the Edge window I actually use.

```text
Review /tech/first-pull-request/present/ slide by slide.
Judge it as a live presentation surface, not source code.
Look for cramped slides, weak hierarchy, unreadable text, awkward motion,
dead space, clipping, and moments where the room would not know where to look.
```

I call the Voice & Publish Editor late. That agent is not there to invent the piece. It is there to catch the phrases that sound too manufactured, flatten anything that got too vendor-ish, and make sure the final read sounds like something I would say out loud.

```text
Review this draft in Thor's voice.
Preserve the first-person operator tone.
Cut synthetic setup lines, tidy slogans, and anything that sounds like
internal seller coaching.
Return specific edits, not generic praise.
```

Public Claims Researcher is conditional. If I make claims about products, public numbers, competitors, healthcare, regulations, or Microsoft architecture, I bring that agent in. If the post is mostly about my workflow and my repo, I do not add a research pass just to feel official.

## 4. Write the deck contract before the slides

The most useful thing I took from looking at a Reveal.js deck generator was not the slide framework. It was the idea of writing down the deal before building the deck: topic, audience, arc, notes, constraints, and proof that the deck fits.

For my site, the contract belongs inside the workflow, not inside a disposable generated HTML file.

If the piece does need present mode, I give the deck its own contract before I care about colors or animation.

```markdown
## Deck Contract

- Route: /tech/your-slug/present/
- Audience in the room: who is watching live
- Promise: what they can do when the talk ends
- Sections:
	1. Cover / why this matters
	2. First mental model
	3. Workflow or map
	4. Tool/action loop
	5. Review/checkpoint
	6. Recap / question they can answer
- Speaker cues: what I would actually say, not stage directions
- Motion rule: every animation must clarify the idea on screen
- Fit rule: no hidden overflow, no unreadable text, no raw markers
- Validation: build, render, screenshot, inspect
```

That contract keeps the deck honest. If a slide does not serve the promise, it gets cut or rewritten. If a visual repeats the paragraph before it, one of them has to change. If the layout only works in my head, the screenshot will say so.

## 5. Build in the repo where the artifact will live

I do not want two versions of the same story. If the article lives in Astro, the presentation should live there too. The first-pull-request article already has custom visuals for the GitHub mental model, the contribution path, the tools, the agent loop, the diff, the run of show, and the finish line. Rebuilding those in a separate slide tool would create two sources of truth.

Instead, the deck route reuses the site. The article is `/tech/first-pull-request/`. The presentation is `/tech/first-pull-request/present/`. The post frontmatter marks that it has a presentation option. The route opens full-screen and hides the article chrome.

That lets the same idea move through three forms:

- Prose when someone is reading alone.
- Visuals when the article needs to teach spatially.
- Present mode when I am guiding a room through it.

The code matters less than the boundary. The presentation is optional. The article is still the source of truth.

## 6. Tune the visual where it lives

This is the part I like most about building these as HTML and CSS. The visual is not locked inside a screenshot or a slide export. If the motion is confusing, I can change the motion. If a label is doing the wrong job, I can rewrite the label. If the layout collapses at laptop-chrome, I can tune that exact viewport.

For the first-pull-request cover, the first version had moving color, but it did not explain itself. The better version was not a bigger rewrite. It was a tighter visual brief:

```markdown
## Visual Brief

- Teaching point: main stays stable while the proposed change moves off main,
  gets reviewed, then merges back after approval
- Stable element: blue main line is always visible
- Motion element: blue orb travels along main to show the normal path
- Branch element: yellow curve appears when work leaves main
- Review motion: yellow orbs travel the branch, not random decoration
- Labels: only name what helps the viewer understand the workflow
- Test: screenshot the slide and ask, "Can I tell what moved and why?"
```

That last question is the useful one. "Does it look cool?" is not enough. I want cool, but I want cool in service of the idea. HTML and CSS make that possible because the visual can keep changing until the screenshot teaches the same thing I would say out loud.

The visual pass has its own prompt:

```text
Review this visual as a teaching aid, not as code.
What is moving?
What is stable?
What should the viewer understand after five seconds?
Which labels are helping, and which are just decoration?
If the motion is unclear, suggest the smallest HTML/CSS change that would make it teach.
```

That prompt keeps the critique practical. It does not ask for a prettier slide in the abstract. It asks whether the visual is doing its job.

## 7. Let the browser be the judge

The browser is where intention becomes evidence. Source code can look clean while the slide is wrong. A heading can be perfect in markup and still get clipped at 1214 by 770. A component can pass metrics and still feel empty. That is why the workflow has a rendered QA step.

The validation loop is blunt on purpose:

```powershell
npm run build
npm run audit:first-pr
```

Then I open the screenshots and inspect laptop-chrome, mobile landscape, and mobile portrait. If something is cramped, clipped, or confusing, I fix the smallest visible problem and run the check again.

The screenshot is where the work stops negotiating with me. Either the slide reads, or it does not. Either the animation helps, or it distracts. Either the controls are usable, or they are in the way.

That is also why I like building native web presentations for this kind of work. I get motion, layout, routing, data, and audit in the same place. It is slower than generating a quick deck, but it compounds.

## 8. Keep the human gates boring

The workflow has a few actions the agents do not get to take on their own: commit, push, publish, submit, spend money, or destroy work. Those gates are intentionally plain because plain gates are easier to honor under pressure.

I am not using agents to avoid judgment. I am using them to get the mechanical work close enough that I can make better calls. The agent can draft the article, build the route, run the audit, and suggest fixes. I still decide whether the artifact is right for my name.

That is the same lesson inside the first-pull-request workshop. The agent proposes. You inspect. You approve. Different artifact, same habit.

## The copyable version

If someone wanted to copy the workflow, I would not start by copying my components. I would copy the checkpoints.

Here is the short version I would put at the top of a new session:

```markdown
## Presentation-Ready Article Workflow

### Brief
- Artifact:
- Audience:
- Reader outcome:
- Live use: yes/no
- Presentation mode: optional route only if live use is real
- Visual need:
- Validation:
- Human gates:

### Agent Lanes
1. Explore: find the local implementation surface, no edits.
2. Narrative Strategist: shape the arc and memory point, no copyedit.
3. Coding agent: build the article, visuals, route, and audit profile.
4. Visual review: tune HTML/CSS motion, labels, and fit from screenshots.
5. Presentation Reviewer or Site Reviewer: judge rendered screenshots
	and present mode.
6. Voice & Publish Editor: polish after the structure works.
7. Public Claims Researcher: only if public claims need sourcing.

### Build Rules
- Markdown must still read without the visual.
- Visual markers go on their own line.
- Present mode is opt-in frontmatter, not a default.
- Motion must explain something.
- Visuals are HTML/CSS components so they can be tuned after screenshots.
- Build, render, screenshot, inspect.
```

That is the part I would reuse. Name what you are making. Separate the judgments. Make the work visible. Then look at the thing people will actually see before you put your name on it.