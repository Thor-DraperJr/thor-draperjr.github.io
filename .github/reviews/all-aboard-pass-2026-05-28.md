# All Aboard — Nine-Agent Review Report

**Article under review:** `astro-site/src/content/posts/2026-05-28-all-aboard.md`
**Pipeline:** Research → Architect → Reconciliation → Anecdote Forge → HLS Reality Check → Conditional rework → Executive Value Auditor → Career Coach → Voice Editor + Copyeditor
**Status:** Review-only. No edits applied. Awaiting sign-off.

---

## 1. Research findings (E7 Research Analyst)

### HIGH-confidence citations (article holds up)
- Microsoft 2025 WTI: **Frontier Firm**, **human-agent ratio**, **agent boss** vocabulary — all verifiable.
- Microsoft **Entra Agent ID** — GA April 2026.
- **Conditional Access for Agents** — Public Preview, Nov 2025.
- **Lifecycle Workflows for sponsorship** — GA May 2026.
- **Dragon Copilot** — correct current product name (rebranded from DAX Copilot).
- HIPAA, Joint Commission credentialing standards — verifiable framings.

### UNVERIFIED / risky
- The exact Salesforce quote *"tools to manage the entire agent lifecycle"* could not be sourced — Salesforce pages redirect through tracking. **Recommend rewriting to a paraphrase or swapping the citation.**
- "HIPAA, the Joint Commission, and the state are already auditing that flow" — overreach. HIPAA is complaint-driven; Joint Commission audits credentialing not "lifecycle"; state audits are licensure-only. **HLS Reality Check confirmed this is wrong as written.**

### Major movement the article does not yet acknowledge (article is roughly a year behind)
1. **Microsoft Agent 365 GA May 1, 2026** in the new **M365 E7 "Frontier Suite"** SKU.
2. **Microsoft Foundry rebrand** (the companion post already uses Foundry; this post still implies older naming).
3. **Entra Agent Registry retired into Agent 365** on May 1.
4. **2026 WTI "Agents move into action"** — exists, not cited.
5. **Third-party integrations** (Figma, Sophos, Zendesk, Zoho, n8n, Nvidia) are direct, public proof of the "you don't have to be the IDP to be the control plane" thesis. Currently unused.
6. **Dragon Copilot 3.6 nurse preview, Epic-embedded** — current state.

### Outstanding research gap
- Okta / SailPoint / Saviynt / ServiceNow / AWS Bedrock AgentCore announcements not pulled.

---

## 2. Talk architecture (Talk Architect)

**Current spoken length:** ~29 minutes against a 60-minute target. **Article is roughly half the talk.**

### Slot-by-slot status (key items)
- **0–5 Cold open:** "The honest answer in the room" is the cold open, but it sits in the middle of the article. **Move it up.**
- **5–8 Thesis:** Epigraph carries the thesis; principle 3 ("Agents are users") reinforces.
- **8–18 Movement 1:** Four pillars + SOC kill-chain analogy. Currently under-built; needs the actual five-years-ago story with an ending.
- **18–30 Movement 2:** Grand Central + lifecycle walkthrough. Currently 3-4 min budgeted; needs 6-8 with one anecdote per station or cluster.
- **30–40 Peak — MISSING:** "You don't have to be the IDP to be the control plane" is currently one bullet. It should be a 10-minute movement with a cautionary story and federation detail.
- **40–50 Movement 3:** Provider lens. Needs four named starting positions (already in companion post — pull in) and three Monday actions, one per persona.
- **50–57 Three things:** Lines exist; the images/stories that make them portable do not.
- **57–60 Close — MISSING:** "Measure twice. Cut once." needs one sentence of setup before it.

### Architect cuts/reshapes
- C1 Move "honest answer" to top as cold open.
- C2 Break up three-principles list; promote principle 2 to its own 10-min peak movement.
- C3 Compress "What the field is already calling this" to a single line ("Four vendors, one shared premise — the disagreement is only about who runs it.").
- C4 Fold Frontier Firm into Movement 1 bridge, not its own section.
- C5 Stage Grand Central as one building reveal, not three sequential walks.
- C6 Hold "Measure twice. Cut once." for the close only (it currently appears in paragraph two and at the end — pick the end).

---

## 3. Reconciled gap list

| ID | Tag | Gap |
|---|---|---|
| R1 | RESEARCH+ANECDOTE | Microsoft Agent 365 GA + M365 E7 SKU not mentioned |
| R2 | RESEARCH | Foundry rebrand naming consistency vs companion post |
| R3 | RESEARCH | Entra Agent Registry retirement into Agent 365 |
| R4 | RESEARCH | 2026 WTI ("Agents move into action") not cited |
| R5 | RESEARCH | 3rd-party integrations (Figma/Sophos/etc) — perfect peak-beat proof |
| R6 | RESEARCH | Dragon Copilot 3.6 nurse preview |
| R7 | RESEARCH | Conditional Access for Agents (Nov 2025 PP) |
| R8 | RESEARCH | Lifecycle Workflows for sponsorship (May 2026 GA) |
| R9 | RESEARCH-RISK | Salesforce quote unverified — paraphrase or replace |
| R10 | RESEARCH-RISK | Joint Commission claim overreach — soften to internal-compliance framing |
| A1 | ANECDOTE | Cold open scene (CIO leaning forward) — forged below |
| A2 | ANECDOTE | "Every company runs two workforces" image — forged below |
| A3 | ANECDOTE | SOC five-years-ago story — forged below |
| A4 | ANECDOTE | Six-station lifecycle narrated — forged below |
| A5 | ANECDOTE | JML worked example (hospitalist + her docs agent) — forged below |
| A6 | ANECDOTE | PEAK BEAT cautionary story (IDP replacement) — forged below |
| A7 | STRUCTURE | Four starting positions for providers — pull from companion post |
| A8 | RESEARCH | Monday-morning actions per persona (CMIO/CIO/CISO) |
| A9 | ANECDOTE | Three portable artifacts — forged below |
| A10 | WRITE | Close — one sentence of setup before "Measure twice. Cut once." |

---

## 4. Forged anecdotes (final, post-revision)

### A1 — The honest answer in the room (cold open)
**Line.** You earn the room by naming what you don't know, not by pretending the deck already answered it.
**Image.** The question that arrives before the first slide. A CIO leans forward an inch before the projector warms up — that inch is the whole meeting.
**Anecdote.** A CIO interrupted before the title slide: "Before you start — what data are you going to push into our other tools?" The honest answer was, "We don't know yet. We are flying the plane as we build it, and we'd rather tell you that than guess." The room exhaled. A VP across the table nodded once. Forty-five minutes later the same CIO was sketching her identity diagram on the whiteboard. The deck never opened past slide three. The meeting earned a second meeting because nobody pretended.

### A2 — Every company runs two workforces
**Line.** Every enterprise now runs two workforces, and only one of them shows up on the org chart.
**Image.** A second shift that clocks in at midnight and never clocks out — same building, same badge reader, same supervisor on call, just a population the org chart has not drawn yet.
**Anecdote.** A CHRO told her CIO at a Tuesday staff meeting that headcount was flat for the quarter. The CIO pulled up a console and showed her 1,400 service principals, agents, and copilots that had been provisioned against production systems in the last ninety days. None had a manager of record. None had a review date. "So we hired a department," she said, "and nobody told payroll." That was the first conversation. The second one, two weeks later, was about who owned the org chart for the second workforce.

### A3 — We have seen this picture before (SOC kill chain)
**Line.** We are building the same Frankenstein the SOC spent five years dismantling — different logo on each limb.
**Image.** Four dashboards, four colors, four different definitions of "the agent" — and the gaps between them are where the next incident is going to live.
**Anecdote.** A CISO walked into a review with four dashboards open on four monitors — one for the AI platform, one for identity, one for data loss, one for the SOC. Asked which one told her how many agents were running in production, all four gave a different number. She closed three of them. "Pick whichever one is wrong the least," she said, "and the other three teams report into that one by Friday." It was not elegant. It was the same call her predecessor had made about endpoint tools five years earlier, and she remembered how that ended.

### A4 — What an agent's first week actually looks like *(revised after HLS check)*
**Line.** An agent's first week looks exactly like a new hire's, except nobody scheduled the orientation.
**Image.** Six desks down a hallway — badge desk, IT desk, manager's desk, the floor, the review room, the exit interview. Every agent walks the same hallway. Most enterprises have only built the first two desks.
**Anecdote.** A documentation agent gets stood up Tuesday — the pilot charter was signed Monday, which is why Friday was possible. By Friday it has a sponsor (the hospital medicine service line chief, with the CMIO as governance owner), an identity from the platform team, entitlements (read scope on progress notes in the pilot service line), and is drafting notes for forty clinicians. What it does not have is a review date, a named owner for when the service line chief rotates, or a retirement plan for the next model. Three of six stations got built. The other three got assumed. The first incident lives in one nobody built.

### A5 — Same flow, different population *(revised after HLS check)*
**Line.** If your hospital can onboard a hospitalist on a Monday, it already owns the engine that governs her agent.
**Image.** Same locker, two badges. The clinician's badge is plastic; the agent's is a token. Both get issued by the same desk, both get revoked by the same desk, both show up in the same Friday review.
**Anecdote.** A hospitalist starts Monday — sponsor is her section chief, identity flows from HR through the medical staff office into Epic, entitlements get scoped to her unit, her notes get reviewed at the ninety-day OPPE checkpoint, and when she rotates the access follows her or gets revoked. Her documentation agent, stood up the same Tuesday, went through none of that. Different ticket, different team, different review — or none. The fix was not new technology. The fix was running the agent through the same six gates the hospitalist already walked through, with the same section chief as sponsor. Same engine. The hospital had owned it for a decade.

### A6 — You don't have to be the IDP to be the control plane (PEAK)
**Line.** You don't have to be the IDP to be the control plane.
**Image.** The control tower does not own the runway. It does not need to. It just needs to see every plane, talk to every pilot, and have the authority to ground one. The IDP is the runway. The control plane is the tower.
**Anecdote.** An enterprise spent nine months and a seven-figure budget standing up a second identity provider — the pitch was that governing agents required owning the directory. Month ten, the help desk was fielding tickets from clinicians whose SSO had silently moved. The CIO called it off. They went back to the IDP they had trusted for twelve years and put federation and observability in front of it instead. The agents got governed. The clinicians stopped calling. The nine months were not wasted — they were the proof the board needed that the land grab was the wrong fight.

### A9 — Three portable artifacts
**7a — Agents are users**
- Line. If it can act on your data, it is a user — name it, manage it, end it.
- Image. A name badge with no face. The badge still opens the same doors, hits the same systems, and shows up in the same audit log.
- Anecdote. A compliance lead asked her team to print the access report she ran every quarter for human users — but to run it for agents this time. The report came back with 2,200 rows and no manager column, because the field did not exist in the agent registry. She filed a ticket to add the column. Six weeks later the same report ran clean for both populations. The auditor in Q3 did not ask why agents had managers. He asked why it had taken until now. That was the cheapest audit finding the team ever closed.

**7b — Demand trust before granting control**
- Line. The team that wins the land grab loses the customer; the team that earns the trust gets asked back.
- Image. Two vendors at the customer's door. One is holding a contract. The other is holding a coffee.
- Anecdote. A platform team showed up with a deck titled "Our Path to Becoming Your Control Plane." The CISO let them finish, then said, "I don't need another control plane. I need someone who will tell me when my current one is wrong." The deck did not get a second meeting. The team that did get the second meeting was the one that had spent the first hour mapping what the CISO already owned and writing down what was missing. They asked for nothing on slide one. They got asked back on slide twelve.

**7c — Sell the board** *(revised after HLS check)*
- Line. The board will fund a control plane. The board will not fund replacing the IDP it bought last cycle.
- Image. A one-page board memo with two columns — "what we keep" on the left, "what we add" on the right. The left column is longer. That is why it gets funded.
- Anecdote. A CIO walked into a board meeting with two options. Option A: replace the identity platform to govern agents — eighteen months, high seven figures plus the clinician productivity hit, which was the bigger number. Option B: keep the platform, add a governance layer that sees every agent and every human in one pane — six months, seven figures, no clinician disruption. The Technology Committee recommended Option B that afternoon and the full board ratified it the next month. The CIO told her team later that the win was not the architecture. The win was that she had not asked the board to undo a decision they had made three years earlier.

---

## 5. HLS Provider Reality Check verdicts

| Item | Verdict | Required action |
|---|---|---|
| A4 first week | REVISE | Applied. Sponsor = service line chief w/ CMIO as governance owner; "read scope on progress notes"; pilot-charter caveat. |
| A5 hospitalist | REVISE | Applied. Section chief (not "her chief"); HR→medical staff office→Epic; OPPE checkpoint. |
| A6 IDP cautionary | NOD | No change. |
| A9c board memo | REVISE | Applied. Technology Committee → board ratification; "high seven figures plus productivity hit"; closing sentence kept verbatim. |
| Article provider lens § | REVISE | **Rewrite the audit sentence:** "Their internal compliance program audits that flow continuously because HIPAA, the Joint Commission's credentialing standards, and state licensure all depend on it being clean." Add "with a human still in the loop on anything that touches the chart" after "outnumber the humans on some of those workflows." |

---

## 6. Executive Value sweep (green / yellow / red)

**Red (cut as written)**
- "That is the whole idea. The rest of this post is how I got there." — throat-clearing.
- "Don't win the land grab. There's nothing to secure if the customer doesn't trust you to be in the room." — seller-coaching voice. Rewrite from buyer side.
- "What I can do is be specific... learn-it-all, not a know-it-all." — seller-posture coaching.

**Yellow (tighten)**
- 2025 WTI intro — strike "I keep borrowing because it lands in customer rooms"; lead with the three terms.
- "Picture a hospital, a bank, an airline..." — compress to one sentence.
- CIO-meeting anecdote — open with the CIO's question; cut the meeting-room staging.
- "Fair question. The honest answer..." — strike "flying the plane as we are building it" (cliché).
- "One note before the next section..." — fold the buy/live distinction into the next section's opener.
- "The clearest way I have found to describe the gap..." — one sentence.
- "That is what *measure twice, cut once* means in practice..." — collapse into prior paragraph.
- "And the part that earns the next meeting:" — strike the seller framing; keep the content.
- "None of this framing is mine alone..." — drop the disclaimer; open the bullets directly.
- "The clearest version of this conversation I have is with hospital CIOs..." — one sentence.
- Provider lens: replace Dragon Copilot SKU read with "ambient documentation" workflow noun.
- "That makes the pitch to a provider CIO the easiest..." — strike "pitch"; lead with the standalone line.
- Third closing bullet: reframe "land grab" so the CIO is the actor, not the seller.

**Green (keep)** — epigraph, brownfield opener, "enterprise itself is the platform," "you don't have to be the IDP to be the control plane," "Measure twice, cut once. Agents are users," the four-decisions block, the SOC analogy, "passenger / ticket / platforms / board / station master," "no board and no station master," the JML-is-30-years section, the citation list, "agents are about to outnumber the humans on some of those workflows," the get-ahead-or-get-audited line, "Measure twice. Cut once." closer.

**Adverb/hedge sweep:** strike *actually* (3x), *honestly/honest* doubled, *interesting* in "the interesting question," *clearest* in two section openers, *simply/simple*, *the part that earns the next meeting*.

**Spoken-length impact:** ~12 min as written → ~9 min after cuts. The 530-word Grand Central zone walkthrough still needs its own audit pass.

---

## 7. Career Coach — upward forwardability

**Verdict:** Mostly leader altitude with three seller-voice slips. Topic selection is at the right altitude — slightly ahead of where most ATSes are framing it.

**Three slips to fix**
1. **"Don't win the land grab. Trust before control. (Reframe to buyer voice: demand trust before granting control.)"** — The parenthetical is stage direction for sellers. Cut it. Keep only the buyer version: "Demand trust before granting control."
2. **"You don't have to be the IDP to be the control plane."** — Microsoft positioning language. Operator version: *"You don't have to replace your IDP to get a control plane. The board can sit in front of what you already trust."*
3. **"The board is what the customer buys; the bundle underneath makes the board possible."** — Seller framing. Operator version: *"The board is what the business sees. The bundle underneath is what makes the board honest."*

**Three forwardable moves (any one makes this share-upward material for Austin/Kate)**
1. **Add this sentence near the top:** *"The CISO who can answer 'what agents are running in my environment this week?' in 2026 is the one whose JML program already covered them in 2025."*
2. **Add this slide:** the same JML swim lane twice — top labeled "Humans (since 1995)," bottom labeled "Agents (starting now)" — same boxes (Sponsor → Provision → Review → Reassign → Retire → Audit). No logos.
3. **End on a verb, not a proverb:** *"Walk into your top three provider accounts this quarter and ask the CIO one question: 'Who owns the JML flow for your agents?' If they don't have an answer, you have your next twelve months of work."*

**HLS-specific gap:** the provider lens is the only HLS-specific content in a 60-min HLS keynote. Add one line each on **payer** (producer licensure, CMS Interoperability, prior-auth agents) and **life sciences** (21 CFR Part 11 audit expectations on GxP-validated systems).

---

## 8. Voice + Copyedit

### Voice — hard-rule violations (must-fix)
- **Every `--` in the file is a flag** (rule: no mdashes). Re-punctuate every instance with periods, commas, parens, or rewrite.
- **Negative clarifications ("not X, it's Y")** to rewrite:
  - "The conversation I keep having is not 'rip this out and replace it with ours.'" → "The conversation I keep having sounds more like the line at the top of this post."
  - "It is not moving. That does not disqualify you from governing agents — it just changes the wedge." → "It is staying put. You can still govern agents around it."
  - "Not stand up a second flow. Not pick a brand-new platform..." → "Extend the flow they already trust."

### Voice — seller cadence to strip
- "These three are the ones that survive contact with real customers." → "...hold up in real meetings."
- "Trust is the foundation. Everything else is the receipt." → cut.
- "And the part that earns the next meeting:" → "And here is the part most customers grab onto:"
- "the pitch to a provider CIO" → "the conversation with a provider CIO"
- "The visual answer to 'how do we sell agent governance?' is 'sell the board.'" → "...how do we govern agents? Build the board."
- "Anyone telling the customer they need an entirely separate platform..." → "Standing up a separate platform to govern agents is cutting twice."
- "The line that has worked for me in those rooms:" → "The version that lands:" (or drop the setup entirely).

### Voice — ornate/deck rhythm
- "we are all flying the plane as we are building it" → "nobody has a finished answer yet, including us."
- "be a learn-it-all, not a know-it-all" → "stay curious instead of trying to sound finished."
- "a Frankenstein the customer cannot govern" → "a stack the customer cannot actually govern."
- **Grand Central three-zone cinematic walkthrough** — compress to one paragraph. (Same flag from Executive Value Auditor on the 530-word block.)
- "Four buying cycles. No board overhead. The CISO cannot answer the question." → fold into surrounding paragraph.
- "Same four platforms. One ticket. One board. One CISO conversation." → "Same four platforms, but now one ticket and one board to read from."

### Voice — pattern
- Three back-to-back `**Bold lead.** Explanation.` blocks in "Three principles" and again in "Three sentences" reads as a slide build. Vary the second principle: drop the bolded lead.

### Voice — citation cadence
- "The lifecycle conversation has a product behind it now." → "There is now a product wired to the lifecycle conversation."
- "Salesforce markets Agentforce with the explicit promise of..." → "Salesforce pitches Agentforce as..." **AND** swap the unverified quote (R9) for a paraphrase or different citation.

### Copyedit — mechanical
1. Frontmatter `excerpt` uses Unicode em-dashes (`—`); body uses spaced double-hyphens (`--`). Conform the excerpt to body convention (and per voice rule both will be re-punctuated anyway).
2. Optional: "Four pillars **is** how customers buy. Six stations **is** how an agent lives." — flagged for subject-verb but reads as deliberate. Leave unless you want strict agreement.
3. Optional: "a long list of vendors **are** trying to own" — strict subject is `list` (singular). Leave or fix per preference.
4. Minor: contraction inconsistency between "There's nothing to secure" (principle 1) and "There is nothing to secure" (closing bullet). Pick one.

No misspellings, no doubled words.

---

## 9. Sign-off

Numbered action items (reply with the numbers you want applied, or `all`, or `none`):

**A. Research updates**
1. Add a paragraph (or footnote) acknowledging Microsoft Agent 365 GA (May 1, 2026), the M365 E7 "Frontier Suite" SKU, Entra Agent Registry retirement into Agent 365, and the Foundry rebrand. Update the post to be consistent with the companion post's naming.
2. Cite 2026 WTI ("Agents move into action") alongside 2025 WTI.
3. Add the third-party integration list (Figma, Sophos, Zendesk, Zoho, n8n, Nvidia) as public proof of the peak beat.
4. Replace Dragon Copilot with workflow nouns ("ambient documentation"), then mention Dragon Copilot 3.6 nurse preview once in the provider section as a current example.
5. Add Conditional Access for Agents (Nov 2025 PP) and Lifecycle Workflows for sponsorship (May 2026 GA) as concrete proof of "extend the foundation."
6. **Risk fix (R9):** paraphrase the Salesforce quote or swap the citation — exact quote is unverified.
7. **Risk fix (R10 + HLS check):** rewrite the audit sentence to "Their internal compliance program audits that flow continuously because HIPAA, the Joint Commission's credentialing standards, and state licensure all depend on it being clean." Add "with a human still in the loop on anything that touches the chart" after the "outnumber the humans" line.

**B. Structural cuts/reshapes (architect + voice)**
8. Move "The honest answer in the room" to the top as the cold open.
9. Break up "Three principles I keep coming back to." Promote principle 2 to its own section; integrate principles 1 and 3 into the close and thesis respectively.
10. Compress "What the field is already calling this" to a single line: "Four vendors, one shared premise — the disagreement is only about who runs it."
11. Fold the Frontier Firm framing into the Movement 1 bridge instead of its own section.
12. Compress the Grand Central three-zone walkthrough to one paragraph (passengers, platforms, ticket, board, station master; today the board and station master are missing).
13. Hold "Measure twice. Cut once." for the close only — remove the early instance.

**C. Voice (hard rules)**
14. Re-punctuate every `--` in the file (no mdashes rule).
15. Rewrite every "not X, it's Y" construction listed in section 8.
16. Strip every seller-coaching phrase listed in section 8 (pitch, land grab, wedge, sell the board, earns the next meeting, etc.).
17. Replace ornate clichés (flying the plane / learn-it-all / Frankenstein).
18. Vary the repeated `**Bold lead.** Explanation.` rhythm.
19. Strike adverb/hedge filler: *actually* (3x), *honestly/honest* doubled, *interesting*, *clearest* (2x), *simply*.

**D. Anecdote insertions (replace bullet-list assertions with stories)**
20. Add A1 (CIO cold open) at the top.
21. Add A2 ("two workforces") in the Movement 1 bridge.
22. Add A3 (SOC five-years-ago) inside the four-decisions section.
23. Add A4 (agent's first week) at the top of the lifecycle section.
24. Add A5 (hospitalist + her docs agent) inside the provider lens.
25. Add A6 (IDP cautionary) under the peak beat.
26. Replace the three closing bullets with the three triples in A9 (line + image + anecdote per takeaway).

**E. Forwardability adds (Career Coach)**
27. Add the sentence: *"The CISO who can answer 'what agents are running in my environment this week?' in 2026 is the one whose JML program already covered them in 2025."*
28. Add the two-swim-lane image description (Humans since 1995 / Agents starting now, same boxes, no logos) — likely as a new component or static SVG.
29. Add the field-action close: *"Walk into your top three provider accounts this quarter and ask the CIO one question..."*
30. Add one line each on payer (CMS Interoperability, producer licensure, prior-auth agents) and life sciences (21 CFR Part 11 on GxP systems).

**F. Mechanical**
31. Fix the frontmatter excerpt dash style (matches voice rewrites in C14).
32. Pick one of "There's"/"There is" between the two occurrences.

**G. Research follow-up (not blocking this pass)**
33. Pull Okta / SailPoint / Saviynt / ServiceNow / AWS Bedrock AgentCore current announcements before this becomes the keynote — gap flagged by Research Analyst.

Ready to apply changes. Reply with the numbered items from section 9 you want me to execute, or `all` to apply everything, or `none` to keep the review for reference only.
