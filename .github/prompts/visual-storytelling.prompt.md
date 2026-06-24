---
description: "Create informative infographic-style visuals for Thor's blog from PowerPoint slides, images, article sections, notes, data, or raw ideas: native Astro graphics, animation, mobile and desktop QA, and visual storytelling polish."
mode: "agent"
---

# /visual-storytelling

Use this when Thor wants to create or revise a blog graphic, infographic, animated diagram, visual explainer, slide-inspired figure, or image that should make an article more educational and more entertaining.

The goal is not to decorate a post. The goal is to help readers understand and remember the idea. The default style is polished infographic storytelling: structured, visual, energetic, and clear enough to scan on mobile without losing sophistication on desktop.

## Input Modes

Accept any of these as source material:

- PowerPoint slides or slide exports.
- Screenshots, diagrams, images, or rough sketches.
- Article sections, transcripts, outlines, or bullet notes.
- A raw concept with enough context to infer the teaching point.
- Data, timelines, comparison points, process steps, architectures, or operating models.

If PowerPoint slides exist, treat them as source evidence, not a prison. Preserve the teaching intent, hierarchy, labels, and important visual relationships, then improve the native web version when animation, interaction, responsive layout, or better storytelling would help.

## Visual North Star

Every visual must answer four questions before implementation:

- What should the reader understand faster because this exists?
- What should move, change, reveal, or contrast to make the idea feel alive?
- What must remain readable and useful on a phone?
- What visual detail makes it feel like Thor's blog instead of a generic generated chart?

Prefer native Astro/HTML/CSS/JS components for visuals that need motion, responsiveness, reusable styling, real logos/assets, or tight integration with the article. Use static images only when the image itself is the source of truth or when a native recreation would add no value.

## Default Style

Use the repo's existing infographic language as the starting point:

- Editorial panels with crisp hierarchy, restrained depth, and clear labels.
- Microsoft-adjacent accessibility palette discipline without turning every graphic into a corporate slide.
- Strong contrast, readable typography, and real product or brand assets when brands are shown.
- Motion that teaches: reveal sequence, signal flow, lifecycle progression, comparison shift, train movement, changing states, or focus transitions.
- Prose and visual working together: the article sets up the concept, the graphic lands it, and the next paragraph pays it off.

Do not add decorative motion or abstract background effects that do not teach the point.

## Workflow

### 1. Intake

Identify:

- Source material and confidence level.
- Article path or destination page.
- Audience and teaching objective.
- Visual type: lifecycle, comparison, map, architecture, timeline, funnel, scorecard, operating model, concept metaphor, annotated image, or other.
- Required assets: logos, screenshots, icons, photos, data, citations, or slide exports.
- Output mode: `concept plan`, `build visual`, `revise visual`, or `QA existing visual`.

Ask only for missing information that blocks a sensible first version.

### 2. Visual Brief

Before building, produce a compact brief:

| Element | Decision |
|---|---|
| Teaching point | |
| Source evidence | |
| Visual form | |
| Motion/interaction | |
| Mobile strategy | |
| Assets needed | |
| Validation | |

If the user already asked to build, keep the brief short and proceed.

### 3. Build Or Revise

Implement in the smallest durable shape that fits the project:

- Put reusable or article-specific Astro components in `astro-site/src/components/` unless the repo has created a more specific component folder.
- Put public assets under `astro-site/public/assets/images/posts/<post-slug>/`.
- Put native asset crops and logo inputs under `astro-site/public/assets/images/posts/<post-slug>/native-assets/`.
- Keep generated screenshots and scratch output in ignored artifact folders.

For visuals based on slides or images, preserve important layout relationships first, then add web-native improvements. For visuals based on text or ideas, choose the visual model that teaches the point most directly.

### 4. Responsive And Accessibility Rules

The graphic must work on mobile and desktop:

- Use stable dimensions, aspect ratios, and container-aware sizing.
- Use fluid `clamp()` sizing where it prevents viewport cliffs.
- Ensure labels do not overlap, clip, or become too small.
- Support `prefers-reduced-motion` for meaningful animation.
- Do not rely on hover-only interactions for essential meaning.
- Preserve keyboard and screen-reader basics when controls are interactive.

### 5. Visual QA

Rendered proof is required before calling the visual done:

1. Build the site or confirm the existing dev server/build state is appropriate.
2. Render the target article or page.
3. Screenshot the visual on desktop, mobile, and the `laptop-chrome` viewport when layout is complex.
4. Inspect the screenshots for readability, proportions, overflow, clipping, placeholder assets, caption mismatch, and whether the visual teaches the intended point.
5. If a source slide or image exists, compare the native result to the source and state what was preserved, improved, or intentionally changed.

## Output

Return concise progress in this shape:

```markdown
# Visual storytelling pass

## Brief
<compact table>

## Built Or Changed
- Files and purpose.

## Visual QA
- Viewports checked.
- Screenshot evidence location.
- Issues found and fixed.

## Remaining Decisions
- Only items that need Thor's judgment.
```

## Boundaries

- Do not ship placeholder monograms, letter tiles, or fake logos as silent defaults.
- Do not turn every graphic into a slide deck. Some visuals should be compact figures inside prose.
- Do not make a landing page when the task is an article graphic.
- Do not use source inspection as a substitute for rendered screenshots.
- Do not over-agent the work. Use Site Reviewer or Presentation Reviewer only when the rendered surface needs external review.