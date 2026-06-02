---
layout: post
title: "All Aboard"
date: 2026-05-28
categories: [tech]
tags: [ai, cybersecurity, identity, agents, frontier-firm, healthcare]
draft: false
excerpt: "Your environment is the platform now, and the agentic world doesn't ask you to build a second one. The same identity, data protection, and investigation you already trust for your people extend to your agents. A field-tested way to talk about the Frontier Firm without dragging customers, especially providers, into a re-platform."
---

# All Aboard

> **Your environment is the platform now. The agentic world doesn't ask you to build a second one. It asks you to extend the one you already trust. Same identity, same data protection, same investigation, now covering your agents.**

Microsoft's [2026 Work Trend Index](https://news.microsoft.com/annual-work-trend-index-2026/) makes the call plainly: agents stopped being a pilot conversation this year. They're operating in production, in regulated workflows, in front of customers. The shift underneath that headline is bigger than any single agent. Every enterprise is being pushed to treat its own environment as a platform, and the ones that win extend the controls they already run for their people to their agents instead of standing up a separate world beside them.

A CIO interrupted before the title slide. "Before you start, what data are you going to push into our other tools?" The honest answer was, "We don't know yet. We are building the answer as we go, and we'd rather tell you that than guess." The room exhaled. A VP across the table nodded once. Forty-five minutes later the same CIO was sketching her identity diagram on the whiteboard. The deck never opened past slide three. She picked up the marker because nobody pretended.

That posture is the only one that works right now. You earn the room by naming what you don't know, because the category is months old and nobody, including us, has a finished answer yet. What we can offer is a north star and a map. We're running this on ourselves first. Microsoft is customer zero, governing our own agent workforce on the same platform we're asking you to use. The pattern holds across every industry we watch: the environment becomes the platform, and the controls you already trust extend to cover a second workforce.

## Two workforces, one org chart

Microsoft's [2025](https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born) and [2026](https://news.microsoft.com/annual-work-trend-index-2026/) Work Trend Index reports name the shift. The **Frontier Firm** is a company where agents are part of the workforce. The **human-agent ratio** is the new dial leaders set per role, per function, per project. The **agent boss** is what every human becomes the day they start managing agents instead of just using AI. The 2026 update puts numbers behind it.

Here is what the report does not solve. The minute every employee becomes an agent boss, a second population shows up inside your environment, and the workforce engine you already run for your people was never pointed at it. Hiring, identity, entitlement, supervision, audit, retirement: the same machinery that governs your humans has to reach your agents too. Not a new machine. The one you already own, aimed at one more population.

A CHRO told her CIO at a Tuesday staff meeting that headcount was flat for the quarter. The CIO pulled up a console showing 1,400 agents, copilots, and service principals provisioned against production in the last ninety days. None with a manager of record. None with a review date. The company had not hired a department so much as discovered one the existing engine had never been pointed at. Two weeks later the second conversation was about pointing it there.

## Four decisions every enterprise is making right now

The enterprise itself is the platform now, and agents cross every silo (IT, developers, security, the business, the endpoints) whether anyone sanctioned them or not. The real question is *who has the control plane that spans every silo as agents walk across them?* Enterprises organize this in pillars. Agents actually operate across stations. Both views matter, but the station view is where the work gets done.

The four decisions every enterprise is making right now:

- **Productivity.** Where work happens: email, files, meetings, tickets.
- **AI platform.** Where the most important agents get built and run: models, tools, orchestration.
- **Agent control plane.** How agents are governed across their lifecycle: identity, entitlement, observability.
- **Security.** Identity protection, data protection, threat protection, now extending to cover agents.

The agent control plane is the new pillar, and the one everyone is racing to own.

Most enterprises are making these four decisions across a dozen vendors with no shared view. The CISO can't answer *"what agents are running in my environment this week?"* because the answer lives in four pillars owned by four teams.

A CISO walked into a review with four dashboards open on four monitors: one for the AI platform, one for identity, one for data loss, one for the SOC. When she asked which one told her how many agents were running in production, all four gave a different number. She closed three of them. "Pick whichever one is wrong the least," she said, "and the other three teams report into that one by Friday." The end state has to be one view every team reads from.

If you came up in security, you've seen this movie. A decade ago detection lived in silos. Endpoint in one tool, email in another, identity in a third, each screaming in its own language. An attacker walked across all three while three teams each saw a third of the story. The fix wasn't a bigger silo. It was XDR: pull the signal out of every silo into one place, add the context the individual tools were missing, and react at the speed of signal instead of the speed of the next status meeting. The teams that made that jump stopped chasing alerts and started seeing incidents. If you didn't live that transition, it's the whole template for what comes next.

Agents force the same jump, with new silos. This time the walls are IT, developers, security, the business, and the endpoints, each standing up agents on its own, each sure its corner is fine. The over-scoped agent, or the attacker riding it, crosses all five. The XDR lesson holds exactly: you don't win by giving each silo a better agent dashboard. You win by pulling every silo's agents into one picture, adding the context no single team has, and acting before the blast radius spreads.

Four dashboards is a budget line you pay every quarter, and nobody puts it on the invoice. A 600-bed regional system ran agent oversight out of those same four teams. In Q2 a scheduling agent's entitlement drifted on a Tuesday. Because the prior auth agent downstream drew from the same role group, it inherited the wider scope on Wednesday. By the following Monday, roughly two hundred prior auth submissions had run against the wrong payer mapping. Rework took the revenue cycle team three weeks and cost roughly four hundred thousand dollars in delayed reimbursement. The drift had been sitting in a log nobody owned. At the post-mortem the CFO asked which of the four teams owned that log. None of them raised a hand. That is what the four-silo posture costs in one quarter when the silos cannot see each other.

## The agentic Grand Central

A real station works because four things line up. A **passenger** with **one ticket**. **Platforms** where trains depart. A **departure board** everyone reads from. A **station master** who controls which train leaves which platform, when, and who is allowed on it. The station is your environment. You already own it. You already run it for your people. The agent estate inside it has the passengers and the platforms. **It has no board and no station master.** That gap is the whole conversation.

You do not build a second station for the agents. You give the one you already run a departure board every team reads from and a station master with the authority to hold a train. The hospital owns the operating model; the outside platforms ride inside it.

A scheduling copilot in a regional system pulled a no-show list on a Tuesday, queued outreach through the patient messaging platform, refilled the slots against the EHR, and posted the recovered revenue to a finance dashboard before lunch. Four systems, four owners, zero approvals. The CIO found out from the CFO, who was thrilled. The CISO found out from a security review weeks later. That is what running without a station master looks like on a good day.

[[ALL_ABOARD]]

## Same lifecycle, two populations

Start with identity, because it's the first place the same-controls promise gets tested. The lifecycle isn't new. Every enterprise has been running joiner/mover/leaver for humans for thirty years. Sponsor, role, access policy, review, retire. They run this in their sleep. The whole move is pointing that same engine at agents, so an agent identity gets governed the way a user identity already is.

<figure class="lifecycle-lanes" aria-label="Same lifecycle, two populations: humans since 1995 and agents starting now share the same six gates.">
  <svg viewBox="0 0 720 220" role="img" xmlns="http://www.w3.org/2000/svg">
    <title>Same lifecycle, two populations</title>
    <style>
      .lane-label { font: 600 14px system-ui, sans-serif; fill: #2a2a2a; }
      .gate-label { font: 500 13px system-ui, sans-serif; fill: #2a2a2a; }
      .lane-bg-h { fill: #f3f4f6; }
      .lane-bg-a { fill: #eef2ff; }
      .gate { fill: #fff; stroke: #2a2a2a; stroke-width: 1.25; }
      .arrow { stroke: #2a2a2a; stroke-width: 1.25; fill: none; }
    </style>
    <rect class="lane-bg-h" x="0" y="40" width="720" height="70" rx="6"/>
    <rect class="lane-bg-a" x="0" y="125" width="720" height="70" rx="6"/>
    <text class="lane-label" x="12" y="30">Humans, since 1995</text>
    <text class="lane-label" x="12" y="215">Agents, starting now</text>
    <g>
      <rect class="gate" x="20"  y="58" width="100" height="34" rx="4"/><text class="gate-label" x="70"  y="80" text-anchor="middle">Sponsor</text>
      <rect class="gate" x="135" y="58" width="100" height="34" rx="4"/><text class="gate-label" x="185" y="80" text-anchor="middle">Provision</text>
      <rect class="gate" x="250" y="58" width="100" height="34" rx="4"/><text class="gate-label" x="300" y="80" text-anchor="middle">Review</text>
      <rect class="gate" x="365" y="58" width="100" height="34" rx="4"/><text class="gate-label" x="415" y="80" text-anchor="middle">Reassign</text>
      <rect class="gate" x="480" y="58" width="100" height="34" rx="4"/><text class="gate-label" x="530" y="80" text-anchor="middle">Retire</text>
      <rect class="gate" x="595" y="58" width="100" height="34" rx="4"/><text class="gate-label" x="645" y="80" text-anchor="middle">Audit</text>
    </g>
    <g>
      <rect class="gate" x="20"  y="143" width="100" height="34" rx="4"/><text class="gate-label" x="70"  y="165" text-anchor="middle">Sponsor</text>
      <rect class="gate" x="135" y="143" width="100" height="34" rx="4"/><text class="gate-label" x="185" y="165" text-anchor="middle">Provision</text>
      <rect class="gate" x="250" y="143" width="100" height="34" rx="4"/><text class="gate-label" x="300" y="165" text-anchor="middle">Review</text>
      <rect class="gate" x="365" y="143" width="100" height="34" rx="4"/><text class="gate-label" x="415" y="165" text-anchor="middle">Reassign</text>
      <rect class="gate" x="480" y="143" width="100" height="34" rx="4"/><text class="gate-label" x="530" y="165" text-anchor="middle">Retire</text>
      <rect class="gate" x="595" y="143" width="100" height="34" rx="4"/><text class="gate-label" x="645" y="165" text-anchor="middle">Audit</text>
    </g>
  </svg>
  <figcaption>Same six gates. Two populations.</figcaption>
</figure>

Same sponsor, same review cadence, same engine. The only thing that changes is what sits on the receiving end.

**If your hospital can onboard a hospitalist on a Monday, it already owns the engine that governs her agent.** A hospitalist starts Monday. Sponsor is her section chief. Identity flows from HR into Epic; privileges flow in parallel from the medical staff office. Entitlements get scoped to her unit. Her practice gets reviewed at the ninety-day FPPE checkpoint. When she rotates, the access follows her or gets revoked. Her documentation agent, stood up the same Tuesday, went through none of that. Different ticket, different team, different review, or none. The fix was running the agent through the same six gates the hospitalist already walked through, with the same section chief as sponsor. Same engine. The hospital had owned it for a decade.

The hardest gate in practice is reassign. **The agent outlasted its sponsor by six months, and nobody caught it until the auditor did.** A documentation agent went live under the hospital medicine service line chief who sponsored it. Eleven months later he rotated into a quality role. His clinical access transferred cleanly. The agent kept running on the old scope, with his name still listed as governance owner in a registry the incoming chief had never seen. The next FPPE cycle reviewed the new chief's clinicians on schedule. The agent didn't get reviewed at all. Internal audit flagged the gap five months later. The technical fix took twenty minutes. The trust hit took two governance committee meetings to walk back. Movers are the gate that breaks first. Same reason in both populations: nobody owns the handoff.

Start with observability. The customer keeps the existing IDP, the existing governance tool, and the existing EHR or ERP. Light up the board where the agents already are, including the ones running on a third-party AI platform, and the silos line up because all that telemetry finally has somewhere to land.

## You don't have to replace your IDP to get a control plane

Most enterprises picked an identity provider a decade ago. It's staying put. The control plane for agents can sit in front of it. Federation, observability, and a clean way to issue agent identities work without unwinding the directory the company already trusts. The control tower doesn't own the runway. It just needs to see every plane, talk to every pilot, and have the authority to ground one.

An enterprise spent nine months and a seven-figure budget standing up a second identity provider. The pitch was that governing agents required owning the directory. Month ten, the help desk was fielding tickets from clinicians whose SSO had silently moved, and the CMIO was getting paged because two of those clinicians were mid-shift on the floor. The CIO called it off. They went back to the IDP they had trusted for twelve years and put federation and observability in front of it instead. The agents got governed. The clinicians stopped calling. The nine months were the proof the board needed that owning the directory was the wrong fight.

Two capabilities carry most of the weight of that posture. [**Microsoft Entra Agent ID**](https://learn.microsoft.com/en-us/entra/agent-id/whats-new-agent-id) gives agents first-class identity in the directory that already holds humans. [**Agent 365 Registry sync**](https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry) (preview) brings agents running on Amazon Bedrock, Google Vertex AI, Salesforce Agentforce, and Databricks Genie into the same inventory without moving them. The directory stays where it is. What changes is what you can see.

The same control plane already sees [agents from outside the directory it sits in front of](https://learn.microsoft.com/microsoft-agent-365/third-party-agents): design, security, support, finance, and workflow partners plugging in without replacing anyone's IDP.

What changes on day one is concrete. With the control plane lit up in front of the existing IDP, the CISO who couldn't answer the inventory question yesterday can answer four questions by the end of the first week:

- **Who is running.** A single roster of agents, copilots, and service principals across Microsoft, third-party SaaS, and AWS or Google clouds.
- **Under whose name.** Sponsor of record per agent, with the empty cells visible at a glance.
- **On what scope.** The resources each agent is authorized to touch, anchored to the same policy engine the humans run on.
- **With what blast radius.** The downstream systems an over-scoped agent would actually reach, before it does.

None of that requires moving the directory. All of it requires a control plane in front of it.

### The same controls, the same teams

Here's the whole thing in one line: the agentic world should feel like the world you already run, not a second one bolted on beside it. Start with identity. The admin who writes a Conditional Access policy for a clinician writes the same one for the agent. Same with data: the officer who applies a Purview label to PHI puts that same label on the file an agent just generated. Same with the SOC: the analyst who triages a clinician's sign-in risk triages the agent's the exact same way.

So someone pushes back: "we already have Entra, Defender, Purview, Intune. Are you asking us to stand up a fourth team for agents?" No. The teams you already pay for extend what they already do to cover the second workforce. You don't hire an AI operations group to sit beside them. Security already taught this lesson: the moment detection had to cross every silo, defending the company stopped being one team's job and became a team sport. Same people, pointed at one shared picture. Agents are the same move. Everybody travels in the same direction: identity, data, the SOC, the business, all covering one more population instead of standing up a new department next to the old ones. That's what "platform, not product list" actually buys you.

### Why E5 is the floor, and why E7 is the executive conversation

The executive conversation isn't the SKU. It's the continuity above it: same identity, same data protection, same investigation, now covering agents. E7 just puts that continuity on one line instead of a dozen separate add-ons. The detail below is just the floor that makes it real.

Practically, the security baseline for running agents safely is [Conditional Access and ID Governance (Entra ID P1), ID Protection (Entra ID P2), and Entra Internet Access](https://learn.microsoft.com/security/security-for-ai/agent-365-security). Most enterprises already buy that as Microsoft 365 E5 (A5 for academic and nonprofit). Below E5, running these controls across the full agent population means stitching together a stack of separate add-on purchases.

A system stood up an ambient documentation rollout on their existing Microsoft 365 tier and assumed the platform's lifecycle workflows would handle sponsor handoff when a clinician moved service lines. Six months in, they were running a SharePoint intake list, a weekly ticket review, and a quarterly access attestation, with two FTEs in IAM holding it together. Annualized, the workaround ran north of what the upgrade to the governance-grade tier would have cost across the affected population, and the compliance officer still would not sign the audit trail. If the platform cannot govern the agent, the org rebuilds the platform in spreadsheets and tickets.

One licensing fact most procurement teams get wrong: **Agent 365 is licensed per user, not per agent.** Every agent managed or owned by a licensed user is covered under that user's Agent 365 or Microsoft 365 E7 license. Agents don't require their own license. Because you license the workforce, wall-to-wall agent coverage is actually affordable.

E7 packages E5, Copilot, Agent 365, and Entra Suite into [one SKU](https://learn.microsoft.com/partner-center/announcements/2026-may), with [Work IQ](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq) underneath it across three layers: **Data** (signals from files, emails, meetings, chats, business systems), **Context** (persistent understanding of how people and teams work), and **Skills + Tools** (models, skills, MCP tools). [Security Copilot is included](https://learn.microsoft.com/en-us/copilot/security/security-copilot-inclusion) with capacity of 400 SCUs per 1,000 users per month, capped at 10,000 SCUs per tenant; when usage exceeds included capacity, tenants [add overage capacity or provision additional SCUs](https://learn.microsoft.com/en-us/copilot/security/security-compute-units-capacity). E7 went generally available May 1, 2026, through standard commercial channels. For most regulated buyers, that turns a procurement argument into an architecture decision. The real call is whether you turn those same human controls on for the second workforce.

<figure class="e7-stack" aria-label="Microsoft 365 E7 stack: E5 baseline, Microsoft 365 Copilot, Microsoft Entra Suite, and Microsoft Agent 365.">
  <svg viewBox="0 0 720 260" role="img" xmlns="http://www.w3.org/2000/svg">
    <title>The Microsoft 365 E7 stack</title>
    <style>
      .stack-label { font: 600 14px system-ui, sans-serif; fill: #2a2a2a; }
      .stack-sub { font: 500 12px system-ui, sans-serif; fill: #4b5563; }
      .layer { stroke: #2a2a2a; stroke-width: 1.25; }
      .layer-1 { fill: #f3f4f6; }
      .layer-2 { fill: #e5e7eb; }
      .layer-3 { fill: #dbeafe; }
      .layer-4 { fill: #eef2ff; }
      .layer-5 { fill: #fff7ed; }
      .ribbon { font: 600 12px system-ui, sans-serif; fill: #6b7280; }
    </style>
    <g>
      <rect class="layer layer-1" x="40" y="200" width="640" height="40" rx="6"/>
      <text class="stack-label" x="60" y="218">Microsoft 365 E5</text>
      <text class="stack-sub" x="60" y="234">Productivity, security, compliance baseline</text>
    </g>
    <g>
      <rect class="layer layer-2" x="80" y="155" width="560" height="40" rx="6"/>
      <text class="stack-label" x="100" y="173">Microsoft 365 Copilot</text>
      <text class="stack-sub" x="100" y="189">Copilot for every licensed user</text>
    </g>
    <g>
      <rect class="layer layer-3" x="120" y="110" width="480" height="40" rx="6"/>
      <text class="stack-label" x="140" y="128">Microsoft Entra Suite</text>
      <text class="stack-sub" x="140" y="144">Identity governance, Conditional Access, ID protection</text>
    </g>
    <g>
      <rect class="layer layer-4" x="160" y="65" width="400" height="40" rx="6"/>
      <text class="stack-label" x="180" y="83">Microsoft Agent 365</text>
      <text class="stack-sub" x="180" y="99">Observe, govern, secure agents</text>
    </g>
    <g>
      <rect class="layer layer-5" x="200" y="20" width="320" height="40" rx="6"/>
      <text class="stack-label" x="220" y="38">Microsoft 365 E7 (Frontier Suite)</text>
      <text class="stack-sub" x="220" y="54">Powered by Work IQ</text>
    </g>
    <text class="ribbon" x="40" y="14">Stack reads top down. E7 is the bundle of everything beneath.</text>
  </svg>
  <figcaption>Four control surfaces. One operating posture. Buy them however you buy them.</figcaption>
</figure>

The controls that apply depend on how the agent is operating. Microsoft's [taxonomy names three modes](https://learn.microsoft.com/microsoft-agent-365/share): agents acting on behalf of a user with delegated access, agents running behind the scenes with their own credentials, and agents participating in team workflows with their own identity. The first two are generally available today. The third is in Microsoft's [Frontier preview program](https://learn.microsoft.com/microsoft-agent-365/frontier). All three land in the same control plane.

<figure class="agent-modes" aria-label="Three operating modes for agents in Agent 365.">
  <svg viewBox="0 0 720 200" role="img" xmlns="http://www.w3.org/2000/svg">
    <title>Three operating modes for agents</title>
    <style>
      .mode-title { font: 600 14px system-ui, sans-serif; fill: #2a2a2a; }
      .mode-sub { font: 500 12px system-ui, sans-serif; fill: #4b5563; }
      .mode-card { fill: #fff; stroke: #2a2a2a; stroke-width: 1.25; }
      .pill-ga { fill: #d1fae5; }
      .pill-pp { fill: #fef3c7; }
      .pill-text { font: 600 11px system-ui, sans-serif; fill: #1f2937; }
    </style>
    <g>
      <rect class="mode-card" x="20" y="30" width="210" height="140" rx="6"/>
      <text class="mode-title" x="38" y="58">On-behalf-of a user</text>
      <text class="mode-sub" x="38" y="80">Delegated access</text>
      <text class="mode-sub" x="38" y="100">Agent acts as the user</text>
      <text class="mode-sub" x="38" y="120">User's policies apply</text>
      <rect class="pill-ga" x="38" y="135" width="60" height="20" rx="10"/>
      <text class="pill-text" x="68" y="149" text-anchor="middle">GA</text>
    </g>
    <g>
      <rect class="mode-card" x="255" y="30" width="210" height="140" rx="6"/>
      <text class="mode-title" x="273" y="58">Own access, behind scenes</text>
      <text class="mode-sub" x="273" y="80">Service-style identity</text>
      <text class="mode-sub" x="273" y="100">Agent has its own scope</text>
      <text class="mode-sub" x="273" y="120">Agent policies apply</text>
      <rect class="pill-ga" x="273" y="135" width="60" height="20" rx="10"/>
      <text class="pill-text" x="303" y="149" text-anchor="middle">GA</text>
    </g>
    <g>
      <rect class="mode-card" x="490" y="30" width="210" height="140" rx="6"/>
      <text class="mode-title" x="508" y="58">Own access in team flow</text>
      <text class="mode-sub" x="508" y="80">First-class teammate</text>
      <text class="mode-sub" x="508" y="100">Joins channels and chats</text>
      <text class="mode-sub" x="508" y="120">Full agent governance</text>
      <rect class="pill-pp" x="508" y="135" width="140" height="20" rx="10"/>
      <text class="pill-text" x="578" y="149" text-anchor="middle">Frontier preview</text>
    </g>
  </svg>
  <figcaption>Three operating modes. One control plane.</figcaption>
</figure>

If you cannot name the operating mode and the sponsor of record for an agent already running in your environment, that is the gap. Close it before anything else.

## The provider lens: where this gets real

Everybody's landed on the same vocabulary now. That part's settled. The fight that's left is operational: who actually runs it. That's where the provider lens makes it real. Swap hospital for bank or airline and the operating model still holds; providers just make the consequences easier to see.

Providers are the group the Work Trend Index data hits hardest. Leaders say productivity has to keep going up. The workforce says they're already running on fumes. For a clinician, that capacity gap is just the job: documentation burden, after-hours charting, message-basket fatigue. Ambient documentation tools exist for two reasons: give clinicians back their evenings, and close the documentation gaps the CFO and the quality committee are already chasing. The providers furthest along are already past pilot on ambient documentation ([Dragon Copilot's experience now includes a nurse-facing preview embedded in Epic Rover](https://learn.microsoft.com/en-us/industry/healthcare/dragon-admin-center/nursing/)), prior auth, scheduling, and revenue-cycle agents, and they're trying to pull all of it into one source of truth.

The lifecycle conversation lands hard with providers because they already do this for humans, and they have to. Joiner/mover/leaver isn't optional in a hospital. Clinicians rotate. Residents cycle every year. Travel nurses come in for thirteen weeks. Contractors, vendors, and EHR support staff get scoped access to PHI and lose it the day the contract ends. Their internal compliance program audits that flow continuously because HIPAA, the Joint Commission's credentialing standards, and state licensure all depend on it being clean. This is reflex for them.

The agents are about to outnumber the humans on some of those workflows, with a human still in the loop on anything that touches the chart. The version that lands: **your compliance program is going to treat agents like users whether you plan for it or not. The only question is whether you get ahead of it or get audited into it.**

The shape of the right week looks like this. A four-hospital regional system in the Mid-Atlantic ran one identity provider and a separate governance tool the audit team had trusted for the last three Joint Commission cycles. On Monday the CMIO put her name on the charter for the documentation agent already drafting notes in two service lines, and named each section chief as sponsor of record for the agents running under their team. By Friday the CISO had pulled the inventory and counted 340 agents, copilots, and automation accounts across the last twelve months, with 90 of them showing no sponsor. She walked into the governance committee that afternoon with one slide on the gap and one slide on the close plan. The board's Technology Committee ratified the co-existence model the next month: the governance tool kept running the human lifecycle, an agent control plane sat next to it, and both fed one operating picture for the CISO and the CMIO to share.

The payer and life sciences versions read the same way, with the audit surfaces swapped in: producer licensure and CMS Interoperability for payers, GxP and 21 CFR Part 11 for life sciences. Same lifecycle, different evidence.

## Four starting positions

Most providers land in one of four starting positions, set by what they already bought for identity and governance. The destination is the same in every case. The first ninety days are not.

- **Position one. Unified identity and governance stack.** Extend the human lifecycle to cover agents. Same sponsor, same review cadence, same engine. The trap here is using agents as cover to re-platform what already works.
- **Position two. One IDP, a separate governance tool.** Co-existence. The governance tool keeps doing the human lifecycle. The agent control plane sits next to it and covers the population the governance tool was never designed for. Both feed one view.
- **Position three. A different identity provider entirely.** Federate, and move on. The company that runs your identity doesn't have to be the company that runs your agent control plane.
- **Position four. Agents being built on a third-party AI platform.** Visibility before standardization. Auto-registration first. You don't get to have the standardization conversation credibly until you can answer the inventory question.

## What a CMIO, CIO, CISO, and CNIO do Monday

- **CMIO.** Name a single governance owner for the agents already drafting notes in your environment. Put their name on the pilot charter and the rotation plan. The artifact by Friday: a one-page agent charter with sponsor and rotation owner per service line. If the answer is "we don't have a charter," you have your Monday.
- **CIO.** Pull the inventory. Service principals, copilots, and third-party agents provisioned against production in the last ninety days. Sort by sponsor of record. The empty cells are the program. The artifact by Friday: the inventory itself, with the unsponsored agents flagged. Then run the coverage map. If agent governance is going wall to wall, every agent has to inherit the same Conditional Access, ID protection, and governance posture as your humans. Name the gap before you name the purchase order.
- **CISO.** Pick the dashboard that is wrong the least, route the other three teams into it, and tell the board what you can answer and what you can't. The artifact by Friday: a one-page dashboard-consolidation memo to the board naming the single source and the gaps it doesn't yet close. The honest answer earns more credit than the hopeful one.
- **CNIO.** Give nursing informatics a standing seat on the agent pilot review board before the first workflow change hits the bedside. It is the most-skipped chair in this conversation, and not an invite you send late; the chief who sits in it is the one who decides whether agents get adopted.

Those four moves set the next twelve months of the program. Three things worth carrying into the next conversation, regardless of which side of the table you sit on.

## Three things to take with you

**Agents are users.** If they can act on your data, they are users: name them, manage them, end them.

A compliance lead asked her team to print the access report she ran every quarter for human users, but to run it for agents this time. The report came back with 2,200 rows and no manager column, because the field didn't exist in the agent registry. She filed a ticket to add the column. Six weeks later the same report ran clean for both populations. The auditor in Q3 didn't ask why agents had managers. He asked why it had taken until now. That was the cheapest audit finding the team ever closed.

**Demand trust before granting control.** The team that maps what the customer already owns is the one she trusts with the control-plane question.

A platform team showed up with a deck full of slides about their own roadmap. The CISO let them finish, then said, "I don't need another control plane. I need someone who'll tell me when my current one is wrong." That is the bar every leader should set for a vendor: earn the hard question by mapping what they already own first. The team that cleared it had spent the first hour writing down what the CISO had and what was missing, and asked for nothing on slide one.

**You don't have to be the IDP to be the control plane.** The board is what the business sees. The bundle underneath is what makes the board honest.

A CIO weighed two paths for governing agents. Replacing the identity platform would have taken eighteen months, high seven figures, and a clinician productivity hit that was a bigger number than the license cost. Keeping the platform and adding a governance layer that saw every agent and every human in one pane took six months, seven figures, and no clinician disruption. She brought both to the Technology Committee, recommended the second, and the full board ratified it the next month. The real win was that she hadn't asked the board to undo a decision they had made three years earlier.

## The question every CIO should be able to answer this quarter

Here is the north star. Your environment is the platform, and the agentic world doesn't ask you to build a second one. It asks you to extend the one you have. Same identity, same data protection, same investigation, now pointed at a second workforce. One question tells you whether you have started: *"Are our agents governed by the same platform as our people, or by a pile of spreadsheets next to it?"* If it is the spreadsheets, that is the program for the next twelve months. The control plane is the tower. The platform is the engine. The hospital, the bank, and the airline already own it.

Measure twice. Cut once.
