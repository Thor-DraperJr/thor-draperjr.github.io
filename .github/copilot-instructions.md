# Copilot Instructions - Thor Draper Jr's Blog

Ground rules:
- No code bloat.
- No emoji's.
- Prune dead code.
- While creating, be mindful to validate your assumptions.
- Before starting the Astro dev server, check if one is already running (e.g., `curl http://localhost:4321` or check terminal output). Do not spawn a second instance.
- For visual bugs (color, layout, spacing), use `open_browser_page` or the Site Reviewer agent to visually inspect the page. Do not rely solely on HTML source inspection -- rendered appearance depends on content length, viewport, and stacking context.

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