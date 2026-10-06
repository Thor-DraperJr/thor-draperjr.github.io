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

## The floor is better than it was

The [2026 packaging update](https://www.microsoft.com/en-us/copilot/blog/2025/12/04/advancing-microsoft-365-new-capabilities-and-pricing-update/) moved real security down into E3. Defender for Office 365 Plan 1 now protects every mailbox with Safe Links, Safe Attachments, and anti-phishing. Intune Plan 2, Remote Help, and Advanced Analytics fill out device management. And every Entra tenant gets [Entra Agent ID](https://learn.microsoft.com/en-us/entra/fundamentals/licensing), so your agents have identities from day one.

E5 got stronger in the same update. [Security Copilot](https://learn.microsoft.com/en-us/copilot/security/security-copilot-inclusion) comes with 400 SCUs a month for every 1,000 users. The rest of the Intune Suite is in now: Endpoint Privilege Management, Enterprise App Management, and Cloud PKI. [Microsoft threat intelligence](https://techcommunity.microsoft.com/blog/microsoftthreatprotectionblog/mdti-convergence-in-microsoft-sentinel-and-defender-xdr-is-complete/4541279), which used to be a separate MDTI Premium license, is built into Defender. And the [ISOC preview](https://learn.microsoft.com/en-us/defender-xdr/isoc-overview) brings SIEM features into the Defender portal for teams that don't run Sentinel.

That's on top of what E5 already did best: EDR, identity threat detection, cloud app security, exposure management, privileged access, and Insider Risk. Click E5 on the grid and Devices, Apps and Email, and Data fill in almost completely.

## E7 covers networks and agents

The [Frontier Suite](https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/) brings together the Entra Suite, Microsoft 365 Copilot, and Agent 365. Watch the bottom of the grid when you click it. The Networks and AI Agents rows finally fill in.

The Entra Suite replaces the VPN with Private Access and filters web traffic with Internet Access. Agent 365 gives agents the same Entra, Defender, and Purview controls that people already have.

That second part matters more than it looks. Agent ID gives an agent an identity, but Microsoft Learn is clear that "Extending Microsoft Entra security features to agents requires Microsoft Agent 365." Since June 1, 2026, [new Agent 365 purchases need Microsoft 365 E5](https://learn.microsoft.com/en-us/partner-center/announcements/2026-july#new-licensing-prerequisite-for-agent-365). If you're on E3 and building agents, start with that row.

Thanks for reading!
