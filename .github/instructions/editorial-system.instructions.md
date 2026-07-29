---
description: "Use when writing, revising, or reviewing Thor Draper Jr's public blog posts, talks, transcripts, deck-derived prose, or presentation copy. Defines audience, operator framing, public-safety boundaries, voice, and visual-article narrative standards."
applyTo:
  - "astro-site/src/content/**/*.md"
---

# Editorial System

This file owns the durable standards for Thor's public content. The article and visual workflows own execution, and the editorial agents own their specialist review methods.

## Audience And Positioning

- Frame Thor as a future technology and security executive. Write for the CIO, CISO, and VP audience he is moving toward.
- Use the operator's point of view: decisions, trade-offs, risk, continuity, and investment protection.
- Reframe seller coaching, competitive plays, account strategy, and product pitches into guidance a leader can use.
- Keep personal experience and practical judgment when they strengthen the argument. Avoid brochure language and SKU-led storytelling.
- Before publishing, ask whether the piece makes Thor someone an executive would want in the next strategic conversation. Rewrite passages that sound like someone running a sales motion.

## Public Safety And Evidence

- Never name customers, deal specifics, account-team strategy, internal Microsoft roadmap dates, unreleased SKUs, or confidential field signal.
- Use named public sources for factual claims. Prefer Microsoft Learn and official product pages for Microsoft claims, and primary public sources for competitors and the wider ecosystem.
- Route checkable or time-sensitive claims through the Public Claims Researcher. Cut or soften claims that cannot be supported publicly.

## Voice

- Favor direct, conversational, practical language with natural contractions and specific judgment.
- Prefer affirmative statements. Use negative contrast only when the contrast carries real meaning.
- Remove tidy synthetic setup lines, corporate thought-leadership theater, internal seller language, and vendor-heavy framing.
- Preserve Thor's lived phrasing when transcript or speaker-note evidence exists, unless factual accuracy, confidentiality, or public safety requires a change.

## Visual Article Narrative

- During every draft or revision, identify at least one place where a visual could improve understanding or memory. Decide explicitly whether to build it now or defer it.
- Around a visual marker or embedded component, prose should explain why the visual exists, name one or two things worth noticing, and pay off the takeaway afterward.
- Keep the prose useful when read aloud or when the visual does not render. Let the visual carry detailed labels, sequence, and spatial relationships instead of repeating all of them in paragraphs.
- Treat talk-derived and visual-heavy markdown as potential speaker notes. Run a transition pass across section boundaries, prose into a visual, the visual back into prose, and the payoff into the next heading.
- A bridge should teach necessary context, orient the learner's next action, or explain the visual's value. Replace stage directions and deferred-value phrasing with the useful idea itself.

## Workflow Ownership

- `.github/prompts/article-pass.prompt.md` conducts article creation and revision.
- `.github/prompts/visual-storytelling.prompt.md` conducts new or substantially revised article visuals.
- Narrative Strategist owns structure and executive framing.
- Voice & Publish Editor owns late voice, transitions, mechanics, and publish readiness.
- Public Claims Researcher owns public evidence and claim safety.
- HLS Provider Reality Check is conditional when healthcare-provider realism is load-bearing.