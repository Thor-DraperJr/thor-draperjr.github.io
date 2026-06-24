# Copilot Instructions - Thor Draper Jr's Blog

## Ground rules:
- No code bloat.
- No emoji's.
- Prune dead code.
- While creating, be mindful to validate your assumptions.

## Development and validation
- Before starting the Astro dev server, check if one is already running (e.g., `curl http://localhost:4321` or check terminal output). Do not spawn a second instance.
- For visual bugs, layout work, embedded graphics, inline SVG, hand-built figures, custom components, and presentation surfaces, inspect the rendered page with browser tools or the Site Reviewer/Presentation Reviewer agent. Source inspection alone is not enough.
- For custom visuals, screenshot the rendered result and check the picture: accurate subject, orientation, proportions, labels, real logos/assets, captions, overflow, clipping, and placeholder states.
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
- Never name customers, deal specifics, internal Microsoft roadmap dates, or unreleased SKUs. Public Microsoft sources (WTI, official product pages, Microsoft Learn) and public competitor material are fair game and should be cited when a claim leans on them.
- Before publishing anything that could read as internal-sounding, ask: does this position Thor as someone an executive would want in the room, or does it position him as someone running a sales motion? If the answer is the second, rewrite.
- For post creation or revision, prefer the general `/article-pass` workflow over one-off post-specific prompt commands. Use durable agents as needed: Public Claims Researcher for public claims, Narrative Strategist for structure and executive framing, Voice & Publish Editor for late-stage voice and mechanics, and conditional specialists only when their domain is load-bearing.
- For article graphics, prefer the `/visual-storytelling` workflow. The default style is informative, polished infographic storytelling that educates and entertains, uses native Astro/HTML/CSS/JS where useful, and makes images, diagrams, and concepts feel alive on both mobile and desktop.

## Project Overview
This is a personal blog for Thor Draper Jr, a Senior Security Solution Engineer at Microsoft and a former cybersecurity instructor. My goals for this are to highlight my experience and interests in multiple facets of technology and leadership to hopefully help advertise me for the next step in my career. The blog should be a reflection of my expertise and personality, while also providing value to readers interested in technology, cybersecurity, and career development.

## Reusable prompt commands

### /issue-planning
Pull relevant GitHub issues, compare them against current repo state and owner-confirmed facts, classify each item, then present a firm plan before editing. Use this when issues are the starting point for a session.

### /visual-storytelling
Create or revise informative blog graphics from PowerPoint slides, screenshots/images, source notes, article sections, or raw ideas. Use this for animated infographic-style visuals that need to teach, look good, and work across mobile and desktop.

### /end-session
1. Summarize the key points of the chat session, including any decisions made about the blog's content, style, or structure.
2. Git commit the changes made during the session with a message that reflects the updates (e.g., "Updated blog content and structure based on session discussion").
3. Push the changes to the remote repository to ensure that all updates are saved and accessible for future reference.
