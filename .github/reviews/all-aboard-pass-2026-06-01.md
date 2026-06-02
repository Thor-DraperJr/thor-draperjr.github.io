# All Aboard Pass — Public-Publishable Rerun

**Date:** 2026-06-01
**Article:** `astro-site/src/content/posts/2026-05-28-all-aboard.md`
**Target audience:** Microsoft HLS Account Technology Strategists (with Austin Walsh and Kate Huey in the room). Doubles as 60-minute HLS executive keynote spine.
**Two new constraints this pass:** publish publicly (no internal sources), expand toward 60 minutes spoken length, add graphics where useful.

---

## Pre-pipeline work (already applied)

1. **Public-source scrub.** Internal E7 wiki was login-gated and is off-limits regardless. Every product claim in the article is now grounded in Microsoft Learn or the public Microsoft Security blog. Specific corrections:
   - Removed unverifiable "Entra Agent Registry retired into Agent 365" claim.
   - Removed fabricated dates ("Conditional Access for Agents Public Preview Nov 2025", "Lifecycle Workflows GA May 2026"). Replaced with public framing.
   - Confirmed Microsoft Foundry as the current public AI-platform name.
   - Added confirmed ecosystem partners (Genspark, Zensai, Egnyte, Kasisto, Kore) to the existing list.
   - Added Agent 365 Registry sync (AWS Bedrock + Google Cloud) as the multi-cloud receipt.

2. **New "Why E5 is the floor, and why E7 is the executive conversation" subsection** added inside "What the field is already calling this." Grounded in public Entra ID Governance docs (CA = P1, ID Protection = P2, ID Governance = Entra ID Governance), Partner Center E7 announcement, and the May 1 2026 Microsoft Security blog.

3. **Two new SVG figures** added inline:
   - Three operating modes (OBO GA / behind-the-scenes own access GA / team-flow own access Preview).
   - The E5 → Copilot → Entra Suite → Agent 365 → E7 stack.

## Surgical fixes already applied this pass

(Copyeditor + Voice Editor + HLS Reality Check all aligned.)

- Heading: "What a CMIO, CIO, and CISO **do** Monday" (subject-verb agreement).
- Dangling modifier fixed in the four-dashboards CISO anecdote.
- Hospitalist anecdote: **OPPE → FPPE** (FPPE is the 90-day checkpoint for a new hire; OPPE kicks in after).
- Hospitalist anecdote: identity from HR into Epic; privileges in parallel from medical staff office (HLS flagged the original collapsed two distinct workstreams).
- WTI bullet: "Work Trend Index **reports**" (matches plural usage earlier in article).
- Preview capitalization standardized to "Public Preview" across prose and SVG pill.
- Voice cleanup on the new modes paragraph and SVG caption: dropped "It also helps to be precise," changed caption to "Three operating modes. One control plane."
- Voice cleanup on the new E5/E7 subsection: removed "not free-standing" (banned "not X, it's Y" cadence), removed "uncomfortable but clean" and "pulled up one altitude" metaphors, removed "human-led, agent-operated enterprise" (vendor poetry), rewrote the absolutist "the security baseline for those agents is E5" line into Career Coach's operator phrasing ("Entra ID P2 plus Entra ID Governance, which most enterprises consume as E5"), added A5/nonprofit-equivalence clause (HLS-flagged), replaced the "wall to wall on E5 or E7" sentence with the inheritance question.
- Provider lens: "exist for **two** reasons" (clinician evenings + CFO/quality committee documentation gaps).
- E7 stack figcaption tightened: "E7 bundles E5, Copilot, Entra Suite, and Agent 365."

---

## Items needing your sign-off

### A. Structural reshapes (Talk Architect + Executive Value Auditor agree)

1. **Move the entire "Why E5 is the floor" subsection out of "What the field is already calling this" and into the peak section ("You don't have to replace your IDP to get a control plane"),** immediately after the third-party receipt paragraph and before the three-modes figure. The E5/E7 framing is the executive-architecture payoff for the peak claim; it currently reads as a license-stack appendix after the peak has already closed.

2. **Demote the four-vendor "What the field is already calling this" bullet list from a full section to a 60-second bridge paragraph at the top of Movement 3 (the provider lens).** It is vocabulary alignment, not a movement.

3. **Trim the product roll-call in the peak section.** Auditor flagged: five SKU names in one paragraph trips the five-item rule and edges into pitch energy. Recommendation: keep Entra Agent ID and Agent 365 Registry sync (multi-cloud is the real proof); drop Conditional Access, Identity governance, and Foundry name-drops from that paragraph (they reappear in the E5/E7 subsection where they actually decide something).

4. **Trim the third-party list to three names + "and others across design, security, support, finance, and workflow."** Career Coach and Auditor agree the eleven-vendor roll call reads as partner-marketing.

5. **Rename the closing heading.** Career Coach flagged "One question to take into your next account" as the single most field-seller-coded phrase in the article. Recommended rewrite: **"The question every CIO should be able to answer this quarter"** with the body paragraph rewritten to address the CIO directly (operator), not the ATS walking into the CIO's office.

6. **Consider cutting one of the two new SVG figures.** Executive Value Auditor: together, the three-modes figure plus the E7 stack push the middle of the piece into product-deck territory. Auditor recommends cutting the E7 stack (the E5-floor bullets above already carry the decision); Architect wants both for length. **Recommendation: keep both, but reframe the E7 stack figcaption to architectural ("Four control surfaces. One operating posture. Buy them however you buy them.") rather than bundle-description.**

### B. Content additions for 60-minute length (Talk Architect: currently ~33 minutes, target ~60)

Talk Architect mapped 12 specific gaps totaling ~27 minutes. The high-leverage additions:

7. **Cold-open extension (+2 min).** One WTI 2026 number on a single visual before the CIO-interrupts moment. Need to pick the most defensible WTI 2026 stat.
8. **Movement 1 second anecdote (+3 min).** *Cost of the four-silo posture.* Anecdote Forge delivered: a 600-bed system, scheduling agent drift cascades into 800 mis-mapped prior auth submissions, $400K rework. See Anecdote 1 below.
9. **Movement 2 third anecdote (+3 min).** *The reassign gate.* Both current anecdotes are joiner stories. Forge delivered: a documentation agent outlasts its sponsor by six months. See Anecdote 2 below.
10. **Peak counterfactual extension (+3 min).** What the control-plane-in-front-of-IDP posture actually buys the CISO in week one. A named "what you see on day one with the control plane lit up" list of 3-4 items. (Needs a small additional paragraph; can ground in public Entra Agent ID + Registry sync capabilities.)
11. **Movement 3 named-archetype provider story (+5 min).** Replace the current category-description provider lens with a Monday/Friday/board walk. Forge delivered: a four-hospital Mid-Atlantic system on starting position two (one IDP, separate governance tool) ratifying the co-existence model. See Anecdote 3 below.
12. **Four starting positions on stage (+2 min).** Pull the map up from the companion link to a 90-second walk on one slide.
13. **Persona Monday-moves expanded (+2 min).** Each persona bullet gets one supporting sentence naming the artifact produced by end of week.
14. **Audience activity (+1 min).** Right after the peak: *"Which of the four starting positions is the account on your screen?"* and 60 seconds of silence.
15. **Add a CNIO line to the Monday section.** HLS Reality Check: nursing informatics is the most-skipped chair in this conversation; naming the CNIO once is the easiest credibility win in the article.

### C. The three composite anecdotes (ready to paste)

**Anecdote 1 — Cost of the four-silo posture.**

> Four dashboards is a budget line you pay every quarter, and nobody puts it on the invoice. A 600-bed regional system ran agent oversight out of four teams: AI platform, identity, data loss, SOC. In Q2 a scheduling agent's entitlement drifted on a Tuesday. The prior auth agent downstream inherited the wider scope on Wednesday. By the following Monday, eight hundred prior auth submissions had run against the wrong payer mapping. Rework took the revenue cycle team three weeks and cost roughly four hundred thousand dollars in delayed reimbursement. The drift had been sitting in a log nobody owned. At the post-mortem the CFO asked which of the four teams owned that log. None of them raised a hand.

**Anecdote 2 — The reassign gate.**

> The agent outlasted its sponsor by six months, and nobody caught it until the auditor did. A documentation agent went live under the hospital medicine service line chief who sponsored it. Eleven months later he rotated into a quality role. His clinical access transferred cleanly. The agent kept running on the old scope, with his name still listed as governance owner in a registry the incoming chief had never seen. The next FPPE/OPPE cycle reviewed the new chief's clinicians on schedule. The agent did not get reviewed at all. Internal audit flagged the gap five months later. The technical fix took twenty minutes. The trust hit took two governance committee meetings to walk back.

**Anecdote 3 — Monday, Friday, board (Position two: one IDP, a different governance tool).**

> The governance tool you spent eighteen months rolling out is the same governance tool that earns you the agent story. A four-hospital regional system in the Mid-Atlantic ran one identity provider and a separate governance tool the audit team had trusted for the last three Joint Commission cycles. On Monday the CMIO put her name on the charter for the documentation agent already drafting notes in two service lines, then named each section chief as sponsor of record for every agent running under their team. On Tuesday the platform team wired the agent registry into the governance tool's existing access review workflow, no new vendor in the picture. On Friday the CISO pulled the inventory and counted 340 agents and copilots provisioned against production in the last ninety days, with 90 of them showing no sponsor. She walked into the governance committee that afternoon with one slide showing the gap and one slide showing the close plan. At the next board meeting the Technology Committee approved the co-existence model: the governance tool kept running the human lifecycle, an agent control plane sat next to it, and both fed one operating picture for the CISO and the CMIO to share. The full board ratified it the following month. The CMIO told her team afterward that the win was that nobody had been asked to throw away the eighteen months they had already spent.

---

## Pipeline scores (this pass)

| Stage | Score | Notes |
|---|---|---|
| Research Analyst | Pass | All claims grounded in public Microsoft Learn / Partner Center / Security blog. |
| Talk Architect | Half-built | ~33 min against 60-min target. 12 gaps, ~27 min to close. No bloat to cut. |
| Anecdote Forge | Pass | Three composite anecdotes delivered, ready to paste. |
| HLS Provider Reality Check | Nod-with-edits | Five specific edits required; four already applied this pass. Remaining: the closing reframe (item 5 above). |
| Executive Value Auditor | ~80% publish-as-is | Cuts and reshapes concentrated in the middle (peak → E5/E7). Opening, lifecycle, provider lens, Monday moves, three-things close all GREEN. |
| Career Coach | Forward-looking, with two surgical fixes | Closing heading reframe is the single highest-leverage change to raise the article one altitude. |
| Voice Editor | Six edits, all applied | Banned patterns scrubbed from new sections. |
| Copyeditor | Four issues, all applied | OPPE→FPPE, dangling modifier, "Index reports," Public Preview consistency, "do" Monday. |

---

## Sign-off prompt

Reply with one of:

- **"all"** — apply every remaining item (A.1-A.6 structural reshapes, B.7-B.15 content additions including the three anecdotes verbatim, C anecdotes inserted at the architect's recommended slots).
- **"surgical only"** — keep the article where it is now; do not apply the 60-min expansion items. (Current state is publishable as the blog post; talk version stays ~35 min.)
- **specific numbers** — e.g. "A.5, B.8, B.9, C.1, C.2, C.3" to cherry-pick.
- **"hold for review"** — leave the article as is; you'll come back to it.
