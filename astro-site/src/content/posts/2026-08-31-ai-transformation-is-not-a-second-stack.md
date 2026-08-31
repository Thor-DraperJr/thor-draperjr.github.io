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

Sit with it. The company is paying for a CRM. It is now also paying an engineering team to build, and forever maintain, a second interface whose value proposition is that nobody has to use the first one. The demo is impressive and the arithmetic is upside down.

The pattern generalizes past sales. Sometimes it is a chat interface over the ticketing system. Sometimes it is a summarizer that duplicates a reporting feature sitting one tab over, unused, because nobody knew it shipped. The work is real, the demo lands, and the outcome is that the enterprise pays twice, once for the SaaS contract and again in tokens, to get less than the original product already does.

For an individual, that is fine. Building your own version is how you learn what the category actually is. I do it constantly. I have written here about turning my own posting workflow into an MCP server and auditing my own agent workbench, and both were me rebuilding something I could have bought.

At enterprise scale it stops being fine. I do not want to spend tokens avoiding the CRM.

## Why the failures cluster where they do

MIT's Project NANDA put a number on this that got quoted everywhere for the wrong reason. Their [State of AI in Business 2025 report](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf) found that roughly 95 percent of generative AI pilots delivered no measurable impact on P&L, against thirty to forty billion dollars of enterprise spend. The headline got read as "AI does not work."

Read the diagnosis instead of the number. The report's lead author told [Fortune](https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/) that almost everywhere they went, enterprises were trying to build their own tool, and that purchased solutions delivered more reliable results. More than half of the budgets went to sales and marketing surfaces while the measurable return sat in back-office work nobody wanted to demo.

That is not a model problem. That is a portfolio problem, and the portfolio was already in trouble before anyone bought a model. Zylo's [2026 SaaS Management Index](https://zylo.com/saas-management-index/) has the average organization spending $55.7 million a year across 305 applications, with app counts flat and costs still climbing 8 percent because vendors are layering AI tiers and consumption pricing into contracts that used to be predictable. The bill goes up without a single new tool appearing on the list.

Meanwhile the governance side is chasing the same sprawl. Gartner's 2025 survey of cybersecurity leaders found [69 percent have evidence or suspicion](https://www.infosecurity-magazine.com/news/gartner-40-firms-hit-shadow-ai/) that employees are using public generative AI at work, and Gartner predicts more than 40 percent of organizations will hit a security or compliance incident from unauthorized AI tools by 2030. Same analyst, same piece, second prediction worth sitting with: half of enterprises will face delayed upgrades or rising maintenance costs from unmanaged technical debt in AI-generated artifacts.

Every bespoke internal tool you ship is a small deposit into that second number. You own it now. You maintain it, you patch it, you explain it to the auditor.

So here is the order I would run instead. It is deliberately unexciting.

## One: make the way you do things faster

Mission one is acceleration of the work as it exists today. No new process. No reorg. No transformation office.

The reason to start here is that it is the only step where you can measure honestly. The process already has a cycle time, an error rate, and a person who can tell you where it hurts. Put AI against that and the before and after are real numbers instead of a satisfaction survey.

There is a distinction I want to be careful about, because people collapse it. AI is not automation. Automation is a deterministic path somebody designed on purpose, and it has been available for decades. What changed is that the person who owns the process can now build the automation themselves, in language, without filing a ticket and waiting a quarter for a developer who does not know the work.

That is the real shift, and it points somewhere specific. The most valuable thing AI does in this phase is not doing the task. It is finding the task. Ask it to sit with a workflow and tell you which steps are repetitive, low-judgment, and high-volume, and it will hand you an offload list that the people doing the work were too close to see. Then you automate those steps, and quite often the thing you build is a deterministic script rather than a model call, which is a good outcome and a cheap one.

If your first AI initiative changed how the business runs, you skipped a step. Make today faster first.

## Two: get the rest of what you already bought

There is a longstanding claim in software that customers use something like 20 percent of what they purchased. I have not found a clean primary source for that exact number, and I would not put it in a business case. The measurable version is worse: Zylo's data has license utilization sitting under half, with organizations wasting real money on seats nobody opened.

The reason is not that buyers are careless. It is that they are running a business. Nobody has an afternoon to read release notes, evaluate a new configuration, understand a feature they never asked for, and shepherd it through change control. So the platform keeps shipping capability and the customer keeps using the same eight screens they learned during onboarding.

This is the highest-return AI work available in most enterprises, and almost nobody frames it as AI work. Point the model at the documentation, the release notes, and your actual configuration and tenancy, and ask what you are entitled to that you have not turned on. Ask what you configured in 2022 that the vendor has since replaced with something better. Ask which of the six overlapping tools in a category is the one your contract already makes free.

The answer to "we need a tool that does X" is very often "you have four, and one of them is good."

That step costs a conversation. Building X costs a roadmap.

## Three: buy more precisely

Only now does the money conversation get interesting, and I want to be clear about what I am arguing. I am not saying kill SaaS. The MIT data points the other direction, and so does my own experience: buying the platform beats building the platform almost every time.

What I am arguing against is t-shirt sizing your commitments. The traditional cycle is that you estimate high, buy a tier, true up at renewal, and carry the slack for three years because visibility into actual consumption was too expensive to obtain. That was a reasonable trade when measuring usage per feature per team was a research project.

It is not a research project anymore. When you can see which capabilities are actually load-bearing, which seats are dormant, and which of your five overlapping contracts is doing the real work, your purchase stops being a size and becomes a specification. Bespoke, in the sense of tailored to observed consumption rather than to a forecast you made under uncertainty.

The savings show up in three places. You stop paying for shelfware. You stop paying twice for the same capability in two contracts. And you stop paying a third time in tokens and engineering salary to rebuild a capability you were already entitled to.

## The order is the whole argument

| Move | What it costs | How you know it worked |
|---|---|---|
| Make today faster | A workflow and a week | Cycle time and error rate on a process that already had both |
| Get the rest of what you bought | A conversation with your own contracts | Features turned on, tools retired, tickets that stop being filed |
| Buy more precisely | A renewal cycle with real usage data | Commitments that match consumption instead of a forecast |

Each step funds the next one. Acceleration proves the capability is real to people who were skeptical. Utilization work retires overlapping spend and shows you where the genuine gaps are. Only then do you know enough to negotiate, and only then do you know which gap is worth building for, because by that point the list of things you actually have to build yourself is short and specific and defensible.

Skip to step three and you are cost-cutting blind. Skip to building and you join the 95 percent.

The uncomfortable version of this philosophy is that a successful first year of AI transformation should look boring from the outside. Same org chart, same systems of record, same vendors. Faster cycle times, higher utilization on what you own, and a renewal where you knew more than the vendor did.

The demo is worse. The P&L is better.

Thanks for reading. If your AI roadmap has a line item that recreates something already in your contract, that is the first place I would look.
