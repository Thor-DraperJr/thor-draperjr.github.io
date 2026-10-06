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

**E3 is a better floor than it used to be.** The [2026 packaging update](https://www.microsoft.com/en-us/copilot/blog/2025/12/04/advancing-microsoft-365-new-capabilities-and-pricing-update/) moved real security down into E3. Defender for Office 365 Plan 1 brings Safe Links, Safe Attachments, and anti-phishing to every mailbox. Intune Plan 2, Remote Help, and Advanced Analytics round out device management. Every Entra tenant also gets [Entra Agent ID](https://learn.microsoft.com/en-us/entra/fundamentals/licensing), so agents have identities from day one. Prevention is strong. Detection and response are still mostly empty.

**E5 got more valuable this year too.** It was already the security operations tier: EDR, identity threat detection, cloud app security, exposure management, privileged access, Insider Risk, and premium compliance. In 2026 it added [Security Copilot](https://learn.microsoft.com/en-us/copilot/security/security-copilot-inclusion) with 400 SCUs a month for every 1,000 users, the rest of the Intune Suite (Endpoint Privilege Management, Enterprise App Management, Cloud PKI), [Microsoft threat intelligence](https://techcommunity.microsoft.com/blog/microsoftthreatprotectionblog/mdti-convergence-in-microsoft-sentinel-and-defender-xdr-is-complete/4541279) that used to be a separate MDTI Premium license, and the [ISOC preview](https://learn.microsoft.com/en-us/defender-xdr/isoc-overview) for SIEM features inside Defender. On the grid, Devices, Apps and Email, and Data fill in almost completely.

**E7 adds two rows: Networks and AI Agents.** The [Frontier Suite](https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/) is E5 plus the Entra Suite, Microsoft 365 Copilot, and Agent 365. The Entra Suite brings network access controls that replace the VPN and filter web traffic. Agent 365 puts the same Entra, Defender, and Purview controls on agents that E5 puts on people.

## The one to watch

Agent ID gives your agents an identity. Securing those identities is a different story. Microsoft Learn says "Extending Microsoft Entra security features to agents requires Microsoft Agent 365," and since June 1, 2026, [new Agent 365 purchases need Microsoft 365 E5](https://learn.microsoft.com/en-us/partner-center/announcements/2026-july#new-licensing-prerequisite-for-agent-365).

If you're on E3 and building agents, that's the cell to look at first.

Thanks for reading!
