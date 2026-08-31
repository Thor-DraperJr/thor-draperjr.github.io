---
layout: post
title: "Stop Rebuilding the CRM You Already Pay For"
date: 2026-08-31
categories: [tech]
tags: [technical, ai, leadership, business]
draft: false
excerpt: "Most enterprise AI projects I see are a new front door onto software the company already owns. My philosophy for AI transformation is three moves in order: make today faster, get the rest of what you bought, then buy more precisely."
---

Someone walks you through an agent they built. It is genuinely good work. It pulls up account context, drafts the follow-up, and summarizes where the deal stands, all without the seller opening the CRM.

That last part is said as the feature.

Sit with the economics. The company already pays for a CRM. Somebody just spent real time building a second interface whose entire value proposition is that nobody has to open the first one.

If a platform team had done that, it would be an old, familiar problem. Companies have paid engineering teams to build and maintain internal wrappers for decades. That was the siloed method: one team owns it, it has a budget line, somebody's name is on the maintenance, and when they leave you know which team to ask.

That is not what is happening now. We decided the company should be agentic, so we gave tokens to everybody. Which is the right instinct. But look at what it produced: we took a siloed organization and turned every individual employee into their own silo.

The CRM is plumbing. So are the dashboards, the ticketing system, the data warehouse. Those are the pipes the business runs through, and I am genuinely in favor of modernizing them. Putting an agent in front of plumbing so nobody has to touch it is not modernization. It is spending money on avoidance.

Then it gets worse. Say the agent is good. Say it legitimately saves four hours a week. There is no avenue to share it. It lives in one person's chat history, wired to their credentials and their idea of a good answer. The old silo was at least a team. This one is a single person, and the solution dies with their next role change.

So the failure mode is not just duplicated spend. It is duplicated spend that cannot compound. Two hundred people can independently solve the same problem, at full cost each time, and the organization learns nothing.

For an individual, building your own version is fine. It is how you learn what the category actually is, and I do it constantly. I have turned my own posting workflow into an MCP server and audited my own agent workbench, and both were me rebuilding something I could have bought.

At enterprise scale it stops being fine. I do not want to spend tokens avoiding the CRM.

[[TOKEN_SILOS]]

## Why the failures cluster where they do

MIT's Project NANDA put a number on this that got quoted everywhere for the wrong reason. Their [State of AI in Business 2025 report](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf) found roughly 95 percent of generative AI pilots delivered no measurable P&L impact, against thirty to forty billion dollars of spend. The headline got read as "AI does not work."

Read the diagnosis instead of the number. The report's lead author told [Fortune](https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/) that almost everywhere they went, enterprises were trying to build their own tool, and purchased solutions delivered more reliable results. Over half of budgets went to sales and marketing while the measurable return sat in back-office work nobody wanted to demo.

That is not a model problem. It is a portfolio problem, and the portfolio was in trouble before anyone bought a model. Zylo's [2026 SaaS Management Index](https://zylo.com/saas-management-index/) has the average organization spending $55.7 million a year across 305 applications, app counts flat, costs climbing 8 percent as vendors layer AI tiers into contracts that used to be predictable. The bill rises without one new tool on the list.

Governance is chasing the same sprawl. Gartner found [69 percent of security leaders](https://www.infosecurity-magazine.com/news/gartner-40-firms-hit-shadow-ai/) suspect employees use public generative AI at work, and predicts over 40 percent of organizations will hit a compliance incident from unauthorized AI by 2030. Same piece: half will face delayed upgrades or rising maintenance costs from AI-generated technical debt.

Every bespoke internal tool you ship is a small deposit into that second number. You own it now. You maintain it, you patch it, you explain it to the auditor.

So here is the order I would run instead. It is deliberately unexciting.

## One: make the way you do things faster

Mission one is acceleration of the work as it exists today. No new process. No reorg. No transformation office.

Start here because it is the only step you can measure honestly. The process already has a cycle time, an error rate, and someone who can tell you where it hurts. Put AI against that and the before and after are real numbers instead of a satisfaction survey.

One distinction people collapse: AI is not automation. Automation is a deterministic path somebody designed on purpose, available for decades. What changed is that the person who owns the process can now build it themselves, in language, without filing a ticket and waiting a quarter for a developer who does not know the work.

The most valuable thing AI does here is not doing the task. It is finding the task. Ask it to sit with a workflow and name the steps that are repetitive, low-judgment, and high-volume, and it hands you an offload list the people doing the work were too close to see. Often what you build is a deterministic script rather than a model call, which is the cheap outcome and the right one.

Here is what gets missed when this becomes a headcount conversation. Offload 40 percent of a role and you have not removed 40 percent of a person. You have concentrated them into the 60 percent that always needed judgment, relationships, and accountability. That 60 percent holds the leverage, and it was the part getting squeezed by the other 40.

So the honest outcome is usually more demand for that work, not less. When sellers stop spending Thursday on data entry, you do not need fewer sellers. You find out how much selling was not happening on Thursdays. When analysts stop assembling the report, the questions get harder. Acceleration raises the ceiling on the human part of the job before it touches the floor.

If your first AI initiative changed how the business runs, you skipped a step. Make today faster first.

## Two: get the rest of what you already bought

There is a longstanding claim that customers use about 20 percent of what they purchased. I have not found a clean primary source for it, and I would not put it in a business case. The measurable version is worse: Zylo has license utilization under half, with real money going to seats nobody opened.

Not because buyers are careless. Because they are running a business. Nobody has an afternoon to read release notes, evaluate a config, and shepherd it through change control. So the platform keeps shipping capability and the customer keeps using the same eight screens they learned at onboarding.

This is the highest-return AI work in most enterprises, and nobody frames it as AI work. Point the model at the docs, the release notes, and your own configuration, and ask what you are entitled to that you have not turned on. Ask what you configured in 2022 that the vendor has since replaced. Ask which of six overlapping tools your contract already makes free.

The answer to "we need a tool that does X" is very often "you have four, and one of them is good."

That step costs a conversation. Building X costs a roadmap.

## Three: buy more precisely

Only now does the money conversation get interesting, and I want to be clear what I am arguing. I am not saying kill SaaS. The MIT data points the other direction, and so does my own experience: buying the platform beats building the platform almost every time.

What I am arguing against is t-shirt sizing your commitments. You estimate high, buy a tier, true up at renewal, and carry the slack for three years because visibility into real consumption was too expensive to get. That was a reasonable trade when measuring usage per feature per team was a research project.

It is not a research project anymore. When you can see which capabilities are load-bearing, which seats are dormant, and which of five overlapping contracts does the real work, your purchase stops being a size and becomes a specification. Tailored to observed consumption rather than a forecast made under uncertainty.

The savings show up in three places:

- You stop paying for shelfware.
- You stop paying twice for the same capability in two contracts.
- You stop paying a third time, in tokens and engineering salary, to rebuild a capability you were already entitled to.

## The order is the whole argument

| Move | What it costs | How you know it worked |
|---|---|---|
| Make today faster | A workflow and a week | Cycle time and error rate on a process that already had both |
| Get the rest of what you bought | A conversation with your own contracts | Features turned on, tools retired, tickets that stop being filed |
| Buy more precisely | A renewal cycle with real usage data | Commitments that match consumption instead of a forecast |

Each step funds the next. Acceleration proves the capability is real to skeptics. Utilization work retires overlapping spend and exposes the genuine gaps. Only then do you know enough to negotiate, and only then do you know which gap is worth building for, because by that point the build list is short, specific, and defensible.

Skip to step three and you are cost-cutting blind. Skip to building and you join the 95 percent.

The uncomfortable version is that a successful first year of AI transformation looks boring from the outside. Same org chart, same systems of record, same vendors. Faster cycle times, higher utilization on what you own, and a renewal where you knew more than the vendor did.

The demo is worse. The P&L is better.

Thanks for reading. If your AI roadmap has a line item that recreates something already in your contract, that is the first place I would look.
