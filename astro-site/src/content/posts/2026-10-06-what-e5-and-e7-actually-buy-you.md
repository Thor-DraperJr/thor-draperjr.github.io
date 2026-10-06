---
layout: post
title: "What E5 and E7 Actually Buy You in Security"
date: 2026-10-06
draft: true
categories: [tech]
tags: [technical, security, microsoft-365, licensing, zero-trust, ai]
excerpt: "Licensing decks list sixty product names. Buyers think in categories like XDR, CTEM, ITDR, and SSE. I mapped Microsoft 365 E3, E5, and E7 onto a Cyber Defense Matrix so the step-up reads as coverage instead of a feature list."
---

Twenty-one dollars. That's the list-price gap between Microsoft 365 E3 and E5 per user per month after the July 2026 price update. Another thirty-nine gets you to E7.

Most conversations about that gap go badly in the same way. Someone opens a licensing deck, the deck shows sixty product boxes, and the room starts comparing product names. Defender for Endpoint P2. Entra ID P2. Purview Information Protection P2. Every one of them is real, and none of them answers the question the CISO actually asked: what can I stop paying for, and what am I still exposed to?

The CISO thinks in categories. XDR, ITDR, CTEM, CASB, DSPM, SSE. Those are the words in their RFPs, their Gartner reads, and their board decks. So I rebuilt the comparison around those words and put it on a grid.

## The grid

The frame is Sounil Yu's [Cyber Defense Matrix](https://www.cyberdefensematrix.com/): the six NIST CSF 2.0 functions across the top, asset classes down the side. I added a sixth row, AI Agents, because in 2026 non-human identities are an asset class you have to defend whether or not your licensing deck admits it.

Pick a tier and watch the grid fill. Select any cell to see which products cover it at each step.

[[M365_COVERAGE]]

A caveat before the numbers. Those ratings are mine. Full, partial, and none are a simplified judgment for discussion, and two reasonable engineers could argue a third of the cells either way. Use the grid to start a conversation. Your Microsoft account team or licensing partner still owns the formal answer.

With that said, here's what the scoring shows:

- **E3 at $39:** 42% of the matrix, 4 of 36 cells fully covered.
- **E5 at $60:** 71%, 20 cells full. That's 29 points for $21.
- **E7 at $99:** 92%, 31 cells full. Another 21 points for $39.

The two steps are buying different things, and pricing them the same way is where most step-up conversations go wrong.

## E3 is a better floor than it used to be

The 2026 packaging changes moved real security down into E3. [Microsoft's announcement](https://www.microsoft.com/en-us/copilot/blog/2025/12/04/advancing-microsoft-365-new-capabilities-and-pricing-update/) and the [licensing FAQ](https://www.microsoft.com/en-us/licensing/news/2026-M365-Packaging-Pricing-Updates-FAQ) put Defender for Office 365 Plan 1 into E3, along with Intune Plan 2, Remote Help, and Advanced Analytics.

That matters for the email row. E3 now has a secure email gateway and integrated cloud email security: Safe Links, Safe Attachments, and anti-impersonation. The E3 to E5 email argument used to be "you need this to stop phishing." Now it's "you need this to investigate phishing and train people against it." That's a smaller, more honest argument, and it's the one I'd make.

E3 also carries a few things people forget it has. Every Entra tenant gets the [Entra Agent ID platform](https://learn.microsoft.com/en-us/entra/fundamentals/licensing), so your agents already have identities. Basic Verified ID is free. DSPM for AI exists in a basic form.

What E3 doesn't have is a security operations story. Look at the Detect and Respond columns at E3. It's antivirus alerts, manual resets, and zero-hour auto purge. You can prevent a lot with E3. You can't see much when prevention fails.

## E3 to E5 buys you a SOC

The cleanest way I've found to explain the first step is five lanes:

| Lane | Industry name | What E5 adds |
|---|---|---|
| Detect and respond | XDR | EDR, Defender for Identity, full CASB, email investigation, automatic attack disruption |
| Reduce exposure | CTEM | Exposure Management, attack paths, RBVM, SSPM, App Governance |
| Protect identity | PAM + risk-based access | ID Protection, PIM, Access Reviews, Entitlement Management |
| Protect data | DSPM + DLP + Insider Risk | Auto-labeling, Endpoint and Teams DLP, Insider Risk, Customer Key, DKE |
| Prove compliance | eDiscovery, audit, surveillance | Premium eDiscovery, one-year audit, Communication Compliance, Records Management |

Every lane names a category somebody already has a budget line for. That's the point of the exercise. When a buyer hears "Microsoft Security Exposure Management," they hear a new product to learn. When they hear CTEM, they hear the line item they were about to send to an attack-path vendor.

Then 2026 piled on. E5 now includes:

- **Security Copilot**, at 400 SCUs per month for every 1,000 users, capped at 10,000 ([Microsoft Learn](https://learn.microsoft.com/en-us/copilot/security/security-copilot-inclusion)).
- **The rest of the Intune Suite**: Endpoint Privilege Management, Enterprise Application Management, and Cloud PKI. Before this year those were a separate add-on.
- **Threat intelligence**, formerly MDTI Premium, now in Defender XDR and Sentinel at no added cost after the [convergence finished in August](https://techcommunity.microsoft.com/blog/microsoftthreatprotectionblog/mdti-convergence-in-microsoft-sentinel-and-defender-xdr-is-complete/4541279).
- **ISOC**, the integrated security operations center in Defender, in preview since September 23 for E5 and E7 customers that don't run a Sentinel workspace ([Microsoft Learn](https://learn.microsoft.com/en-us/defender-xdr/isoc-overview)).

Watch the Devices row when you click E5. It goes to 100%. Apps and Email and Data both land at 92%. That's the "full XDR" claim made visible: every column from Identify through Respond lights up for the three asset classes attackers touch most.

The rule I trust here is boring. Before anyone argues about E5, list what the customer pays for today in EDR, phishing simulation, vulnerability management, privileged access, threat intel, and endpoint privilege. If that list is short, E5 is a security upgrade. If that list is long, E5 is a consolidation project, and the math usually does itself.

## E5 to E7 buys you two new rows

The second step is smaller in points and bigger in shape. Click E7 and look at which rows move.

Devices, Apps and Email, and Data barely change. Users ticks up. The movement is in **Networks**, from 33% to 83%, and **AI Agents**, from 25% to 92%.

That's the clearest single read of what E7 is. It's E5 plus three things, per [Microsoft's Frontier Suite announcement](https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/):

1. **Microsoft Entra Suite.** Private Access is ZTNA, the VPN replacement. Internet Access is the secure web gateway. Together they're Microsoft's SSE. You also get full ID Governance with lifecycle workflows, Verified ID Face Check, and Universal Continuous Access Evaluation.
2. **Microsoft 365 Copilot.** Which also means SharePoint Advanced Management comes along, because [SAM turns on for the tenant once any user has a Copilot license](https://learn.microsoft.com/en-us/sharepoint/sharepoint-advanced-management-prerequisites). Oversharing reports, Restricted Access Control, and Restricted Content Discovery are what make Copilot safe to turn on.
3. **Microsoft Agent 365.** The control plane for agents: registry, Conditional Access and ID Protection for agents, inline DLP on agent prompts, and Defender detection for agent compromise.

The value test is simple arithmetic. E5 at $60, Copilot at $30, Agent 365 at $15, and the Entra Suite at $12 add up to $117 bought separately. E7 lists at $99.

## The trap in the AI Agents row

This is the part I'd want every E3 customer to hear before they plan an agent rollout.

Entra Agent ID is in E3. Your agents get identities. But Microsoft Learn is direct about the rest: "Extending Microsoft Entra security features to agents requires Microsoft Agent 365." The platform gives you a registry of identities. It doesn't give you Conditional Access, risk detection, or governance on them.

And as of June 1, 2026, [new Agent 365 purchases need an E5-level prerequisite](https://learn.microsoft.com/en-us/partner-center/announcements/2026-july#new-licensing-prerequisite-for-agent-365): Microsoft 365 E5, A5, Business Premium, or Defender Suite plus Purview Suite. E3 alone no longer qualifies. Some older Learn pages still say otherwise, which is how people get caught.

So an E3 customer that builds fifty Copilot Studio agents this year has fifty identities and no way to put policy on them without moving tiers. The paths are E3 to E5 plus the Agent 365 add-on, or E3 to E7.

That's why the AI Agents row sits mostly empty through E5. The products exist. The gap is in what most organizations have bought, and it opens at the exact moment they start scaling agents.

## What I couldn't fit on the grid

A few honest limits.

**Recover is thin everywhere.** Retention isn't backup. Microsoft 365 Backup is a separate purchase, and the Recover column reflects that at every tier. Network recovery is out of scope entirely.

**Platform capabilities don't live in a cell.** XDR, Exposure Management, Security Copilot, and Agent 365 make every cell work together. I put them in a band under the grid because forcing them into one cell would undersell them.

**Partial is doing a lot of work.** A cell marked partial at E3 might be 20% or 70% of what a mature program needs. The grid is a map, and maps flatten terrain.

**Prices are US list, with Teams, from July 1, 2026.** Your agreement, region, and renewal date all change the number. Features change too; three items on this grid didn't exist in E5 a year ago.

## How I'd use this

Start with the cells, not the SKUs. Put the grid in front of a security leader, set it to the tier they own, and ask which dashed cells keep them up at night. Then click one tier up.

If the cells that light up match the answer, you have a licensing conversation. If they don't, you just saved everybody an hour.

If you need a translator in the room, the glossary at the bottom of the figure covers every acronym on the page. It stays folded until you want it.

Thanks for reading!
