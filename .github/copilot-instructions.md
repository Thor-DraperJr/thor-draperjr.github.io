# Copilot Instructions - Thor Draper Jr's Blog

Ground rules:
- No code bloat.
- No emoji's.
- Prune dead code.
- While creating, be mindful to validate your assumptions.
- Before starting the Astro dev server, check if one is already running (e.g., `curl http://localhost:4321` or check terminal output). Do not spawn a second instance.
- For visual bugs (color, layout, spacing) and any embedded graphic, use `open_browser_page` or the Site Reviewer agent to visually inspect the rendered page. Do not rely solely on HTML or markdown source inspection -- rendered appearance depends on content length, viewport, and stacking context. For any post or page that embeds a custom component, inline SVG, or hand-built `<figure>` illustration, render it and screenshot it; review the picture, not just the markup. Check illustration accuracy (the drawing reads as the thing its caption claims, with correct orientation and proportions) and asset completeness (every brand or product shown uses a real logo), not only layout and spacing.
- Placeholder ledger: any active monogram, letter-tile, or icon fallback in a component is a tracked TODO, never a silent default. A component or article shipping with live fallbacks is incomplete by definition. Before publishing anything that embeds a custom graphic or component, render it and confirm zero placeholder states remain.
- For the walking deck (`/career/walking-deck/present`), run `npm run audit:deck` from `astro-site/` to sweep all viewports, then **open the actual screenshots** in `astro-site/deck-audit/<viewport>/<section>.png` before declaring a fix done. Audit numbers (overflow, clip, fillRatio) can read clean while the layout still has dead space, covered captions, or other visual defects.
- Prefer fluid `clamp(min, Xvh + Yvw, max)` sizing over stacked `@media (max-height: ...)` breakpoints. Three height media queries always leave a gap where some browser chrome falls between thresholds and content clips. Fluid clamps have no cliffs.
- The user's real Edge window is ~1214x770 (laptop-chrome viewport in the audit). Always check this size before declaring laptop bugs fixed; the integrated browser is locked to a single effective size and cannot truly resize.

Content & voice rules:
- All public content must frame Thor as a future leader in the tech/executive space. When in doubt, write for the CIO/CISO/VP audience he is moving toward, not the role he is in today.
- Avoid framing that reads as sales tactics, internal seller coaching, or competitive plays ("how I sell against X," "the wedge," "what I tell sellers"). Reframe the same insight from the operator/leader perspective: what should the leader do next, what trade-off are they making, what investment are they protecting.
- Operator voice over vendor voice. Personal POV and lived experience are good; product pitches and SKU-talk are not.
- Never name customers, deal specifics, internal Microsoft roadmap dates, or unreleased SKUs. Public Microsoft sources (WTI, official product pages, Microsoft Learn) and public competitor material are fair game and should be cited when a claim leans on them.
- Before publishing anything that could read as internal-sounding, ask: does this position Thor as someone an executive would want in the room, or does it position him as someone running a sales motion? If the answer is the second, rewrite.

## Project Overview
This is a personal blog for Thor Draper Jr, a Senior Security Solution Engineer at Microsoft and a former cybersecurity instructor. My goals for this are to highlight my experience and interests in multiple facets of technology and leadership to hopefully help advertise me for the next step in my career. The blog should be a reflection of my expertise and personality, while also providing value to readers interested in technology, cybersecurity, and career development.

## /prompt commands

### /new-session
1. Review the content of copilot-instructions.md and README.md to understand the context and tone of the blog.
2. Check for open PRs in `thor-draperjr/thor-draperjr.github.io` using the GitHub MCP tools. For each open PR, review the changes and present a summary table:
   - PR number, title, and author
   - Files changed
   - Quick assessment: approve, request changes, or needs discussion
3. Present the PR review table and ask which PRs to approve, request changes on, or discuss further before moving on to other work.

### /end-session
1. Summarize the key points of the chat session, including any decisions made about the blog's content, style, or structure.
2. Git commit the changes made during the session with a message that reflects the updates (e.g., "Updated blog content and structure based on session discussion").
3. Push the changes to the remote repository to ensure that all updates are saved and accessible for future reference.

### /all-aboard-pass
Runs the full nine-agent review pipeline for the All Aboard article and its 60-minute HLS executive keynote derivative. Sequence: E7 Research Analyst → Talk Architect → conductor reconciliation → Anecdote Forge → HLS Provider Reality Check → conditional anecdote rework → Executive Value Auditor → Career Coach → Voice Editor → Copyeditor → conductor graphics & embedded-component QA. Produces one consolidated review report. Applies no edits without explicit sign-off. See `.github/prompts/all-aboard-pass.prompt.md` for the full contract between agents.