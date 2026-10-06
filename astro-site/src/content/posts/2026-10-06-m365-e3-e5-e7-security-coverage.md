---
layout: post
title: "E3, E5, E7: What Each Step Adds to Security"
date: 2026-10-06
draft: true
categories: [tech]
tags: [technical, security, microsoft-365, licensing, zero-trust, ai]
excerpt: "A one-screen visual of the security coverage Microsoft 365 E3, E5, and E7 each add, mapped to the Cyber Defense Matrix."
---

I wanted one picture that answers a simple question: what does each step from E3 to E5 to E7 add to security?

So I mapped the three suites onto Sounil Yu's [Cyber Defense Matrix](https://www.cyberdefensematrix.com/). The six NIST CSF 2.0 functions run across the top, and asset classes run down the side. I added a sixth row for AI agents, because agents are identities now and they need the same coverage as people.

Pick a tier and watch the grid fill. Select any cell to see the products behind it.

[[M365_COVERAGE]]

## What each step adds

**E3 is the floor, and it's a better floor than it was.** In 2026 Microsoft moved [Defender for Office 365 Plan 1 and Intune Plan 2 into E3](https://www.microsoft.com/en-us/copilot/blog/2025/12/04/advancing-microsoft-365-new-capabilities-and-pricing-update/). Prevention is solid: MFA, Conditional Access, device management, antivirus, and email protection. What E3 lacks is detection and response. Look at those two columns at E3 and they're mostly empty.

**E5 adds the security operations layer.** EDR, identity threat detection, cloud app security, exposure management, privileged access, Insider Risk, and the premium compliance tools. It also now includes [Security Copilot](https://learn.microsoft.com/en-us/copilot/security/security-copilot-inclusion), the rest of the Intune Suite, [Microsoft threat intelligence](https://techcommunity.microsoft.com/blog/microsoftthreatprotectionblog/mdti-convergence-in-microsoft-sentinel-and-defender-xdr-is-complete/4541279), and the [ISOC preview](https://learn.microsoft.com/en-us/defender-xdr/isoc-overview). On the grid, Devices, Apps and Email, and Data fill in almost completely.

**E7 adds two rows: Networks and AI Agents.** The [Frontier Suite](https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/) is E5 plus the Entra Suite, Microsoft 365 Copilot, and Agent 365. The Entra Suite brings network access controls that replace the VPN and filter web traffic. Agent 365 puts the same Entra, Defender, and Purview controls on agents that E5 puts on people.

## The one to watch

Every Entra tenant, E3 included, already gives agents an identity through [Entra Agent ID](https://learn.microsoft.com/en-us/entra/fundamentals/licensing). Securing those identities is a different story. Microsoft Learn says "Extending Microsoft Entra security features to agents requires Microsoft Agent 365," and since June 1, 2026, [new Agent 365 purchases need Microsoft 365 E5](https://learn.microsoft.com/en-us/partner-center/announcements/2026-july#new-licensing-prerequisite-for-agent-365).

If you're on E3 and building agents, that's the cell to look at first.

## How to read it

The ratings are mine. Full, partial, and none are a simplified call for discussion, and reasonable people could argue some cells either way. Microsoft 365 Backup is a separate purchase, so the Recover column stays thin at every tier. For a formal answer on what your agreement includes, ask your Microsoft account team or licensing partner.

Every acronym in the figure has a definition in the glossary at the bottom. It stays folded until you need it.

Thanks for reading!
