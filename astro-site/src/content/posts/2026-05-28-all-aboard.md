---
layout: post
title: "All Aboard"
date: 2026-05-28
categories: [tech]
tags: [ai, cybersecurity, identity, agents, frontier-firm, healthcare]
draft: false
excerpt: "Your environment is already a platform. The agentic shift does not ask you to build a second one. It asks you to run agents across the same identity, data protection, investigation, and governance machinery your people already depend on."
---

> **Your environment is already a platform. The agentic shift does not ask you to build a second platform for a second workforce. It asks you to carry one thread of context across every domain an agent touches, from the first idea, through every day it runs, to the moment you retire it. Same identity, same data protection, same investigation, now connected end to end across the life of the agent.**

When I gave this talk, I did not want it to feel like another E7 overview. I positioned it as All Aboard because the picture that kept working in customer conversations was a train station.

A hospital is one of the clearest versions of what I mean. Each domain owns its turf: operations, development, the business, identity, security, networking. But they all share one record, one set of patients, one set of controls. That shared foundation is the platform. Agents do not get a new one. They ride the platform the hospital already operates.

That reframe changes the room. Left alone, the conversation turns into a vendor lineup: Microsoft, AWS, Palo Alto, whichever model shipped this week. The stronger move is to remind the leader that their environment is already the platform. The question stops being which vendor wins and becomes how they plan to keep their own platform current as agents arrive.

I learned that by being honest in a room. A CDIO interrupted before the title slide and asked, "Before you start, what data are you going to push into our other tools?" The honest answer was, "We do not know yet. We are building the answer as we go, and we would rather tell you that than guess." The room exhaled. The conversation moved from "name a problem, name a product" to the gap and the map.

That is the posture that works right now. The category is moving too quickly for anyone to pretend the answer is finished. What we can offer is a north star and a map. Microsoft is customer zero, governing our own agent workforce on the same platform we are asking customers to use. The pattern holds across every industry I see: the environment becomes the platform, and the controls you already trust have to cover a second workforce.

The station is the customer's environment: built by them, owned by them, run for their people every day. The trains are the domains: Ops, Dev, the business, Identity, Security, Networking. An agent is the passenger who crosses every one of those lines before lunch. A station works when three things line up: a passenger with one ticket, a departure board everyone reads from, and a station master who coordinates across the lines. Most enterprises already have the passengers and the trains. What the agent estate is missing is the board and the station master.

[[ALL_ABOARD]]

[[SLIDE_03]]

The Frontier Suite is a different kind of platform shift. The public Frontier Firm framing says the useful part plainly: this is not just software making people more productive. It is people and agents operating as one loop.

A loop that important is not one you want improvised on a platform you do not control. You run it on the one you already own.

This is where the conversation moves off generic interoperability and onto the real advantage: a security platform carrying signals from development, operations, identity, data, and productivity at the same time. Not just the productivity surface. One fabric across every domain the agent crosses.

Talking with customers, I hear the same two questions in every room. First: what is Microsoft doing? We are customer zero. We are living this on our own workforce before we ask anyone else to. Second: what are you seeing everywhere else? That answer changed. It used to be generic: the controls and platforms you could leverage, whatever was already on the truck. Frontier changed that. Now customers are sitting right next to the innovation, not waiting for it to ship and then figuring out the control story later.

[[SLIDE_04]]

The familiar starting slide still matters, but I do not spend much time arguing whose forecast is exact. The numbers all point the same direction. The hard part moved. Last year it was getting value out of your first agent. This year it is keeping control of your thousandth, and those agents are already in production, in regulated workflows, in front of customers.

That is why I will not let a room treat this as a straight-up tooling decision. It is an operating-model decision. A pilot that misbehaves embarrasses a team. An agent in a regulated workflow can become a reportable event. The blast radius moved the moment agents started touching real work.

[[SLIDE_05]]

This is the Frontier Firm with an operating model underneath it. The public phrase is human-led, agent-operated enterprise, and the line works because it keeps leadership where it belongs. Your people still lead. The operating extends to a second population you now have to run.

The part that sneaks up on leaders is the management load. The day one of your people starts directing three agents, they are managing a team. Most of them have never managed anyone. The agents do not show up in their span of control. Nobody told HR. The human-agent ratio everyone wants to treat as a productivity dial is also a management-load dial, and right now individual contributors are setting it on a Tuesday afternoon.

An HR officer can tell the CIO headcount was flat for the quarter while the console shows fourteen hundred agents, copilots, and service principals that went live against production in the last ninety days. None with a manager of record. None with a review date. Viewed as users, the company hired an entire department and never accounted for it.

That is when the talk gets practical. After I walked through the station analogy, I asked other security architects what they were seeing in the field. One observation sharpened the whole room: an organization already had hundreds of agents running, and the question from leadership was not about features. It was, what happens when an attorney and someone on the front line use the same agent but need completely different information back? How do we make sure there is no crossover in what the agent returns?

That question is the whole shift. The problem is no longer whether someone can build one useful agent. The problem is whether the system behind it can produce the right information, enforce the right boundary, and name the person who owns the outcome.

[[SLIDE_06]]

## Same lifecycle, two populations

We need to talk about what this lifecycle looks like, because enterprises already know how to do this for people. They bring people in, scope what they can touch, review them on a schedule, and walk them out when they leave. They do it without thinking. The move is pointing that same engine at agents.

The cleanest way to picture it is hiring a person. Before they start, they clear a background check. That is the template. They get a job code that says what the role can and cannot touch. That is least privilege. They get a manager who answers for them. That is the sponsor. They belong to a department that owns them on the org chart. That is the owner.

An agent needs those same four things, granted the same way. Nobody stands up a second HR department to do it. You use the engine you already run.

A new doctor never gets the keys to the whole hospital on her first day, and that restraint is the exact engine that should govern her agent. Someone senior vouches for her. She gets access to precisely what her role needs, not the whole record. Her work gets reviewed. The day she moves on, the access moves with her.

Now look at the documentation agent that starts drafting notes on the unit. If nobody vouched for it, nobody scoped what it could touch, nobody set a review date, and nobody planned for the day its job ends, the agent did not need a new governance system. It needed to walk through the same door the clinician already walks through.

[[SLIDE_07]]

To unlock the potential of agentic AI, we have to start with trust. And trust starts with security. I keep this one short on purpose because it is the hinge the whole talk turns on.

Every executive nods at that sentence and then quietly asks the harder version: trust based on what? The answer is four plain questions about any agent. What is it? What can it touch? What did it do? Who is on the hook for it?

[[SLIDE_08]]

This slide is the receipts: established security leadership across the threat surface. I read it as one thing. The security estate you would extend to agents is already mature. You are not betting on a newcomer.

What I would add to this picture is the agent control plane, because that is the piece most enterprises do not have yet.

Right now a CISO cannot answer, "what agents are running in my environment this week?" because the answer lives in four places owned by four teams. I have watched a CISO walk into a review with four dashboards open: AI platform, identity, data loss, SOC. She asked which one told her how many agents were running in production. All four gave a different number. She closed three and said, "Pick whichever one is wrong the least."

If you came up in security, you have seen this movie. Detection lived in silos: endpoint in one tool, email in another, identity in a third. An attacker walked across all three while three teams each saw a third of the story. The fix was XDR: pull the signal into one timeline everyone trusted, add the context no single tool had, and act at the speed of signal instead of the speed of the next status meeting.

[[SLIDE_09]]

The same consolidation is happening again, one level up. The seam no longer sits inside security. It runs across the org chart. Ops, Dev, the business, Identity, Security, every one of them is standing up agents, and the agent does not respect the line between them. We are not theorizing about this consolidation. We have seen this pattern before. XDR pulled a whole company's signal out of four silos into one timeline everyone trusted. That same pattern is what the agent estate now needs.

That same security chief cut straight to it: "How many agents do you think are running in our environment right now? Do we even have a sense, or do we need a tool to tell us?" The honest state of the shop was somewhere around eight hundred lightweight agents people had spun up, and fewer than ten were actually governed. Not because the team was careless. The count lived nowhere.

Every time we run that count, the number comes back bigger than the room guessed. Three to five times bigger is the usual result, and I have watched it hit ten. The agents you remembered to write down are never the whole population.

Notice what he was really asking for. Not a dashboard. A registry. The reason "how many agents do we have" is hard is not math. It is that the inventory was never built to include non-humans. Microsoft's public answer to that gap is the [Agent 365 registry](https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry), designed to surface shadow agents in the tenant, not just the ones someone remembered to log.

Two things then carry the bridge. [Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/whats-new-agent-id) gives agents first-class identity in the directory that already holds your people. Agent 365 registry sync can pull agents running on other platforms into one inventory without moving them off where they run. The directory stays where it is. What changes is what you can see and govern from one place.

[[SLIDE_10]]

## The six-step trip

Once you have the number, the next question is obvious: see them, and then do what?

What I have been working on is the end-to-end agent story, concept to production, and I think it comes down to six steps. We have shipped software for decades, but never like this. Building an app used to be a project with a team, a budget, and a place on next year's roadmap. Now a board member, a clinician, or someone in finance can have an idea on Tuesday and stand an agent up before lunch.

That is the moment I say it out loud: all aboard. The platforms are converging onto one trip, and leaders are being asked to run the route as one connected operating model.

Three ideas ride along with these six steps. Trust before control: you earn the right to govern by earning trust first. Control plane, not IDP: you do not have to own the directory to run the control plane. Agents are users: if they can act on your data, they need to be named, managed, reviewed, and retired.

[[SLIDE_11]]

Build: someone in the business decides they want an agent. Identify: the agent needs a name and a credential. Entitle: it gets the keys to do its job. Run: it does the work. Observe: someone has to know what it did, what it tried to do, what it cost, and when it started behaving differently. Govern: when the project ends, the team rotates, or the model retires, the agent gets turned off and evidenced like any other user.

Walk those six steps with a hospital in mind and the gaps jump out. Build happens when a clinician asks for help with a workflow nobody in IT has heard of yet. Identify and Entitle are where it gets dangerous, because the fastest path is often to hand the agent a human's credentials. Run is where it quietly starts mattering to patient care. Observe and Govern are the steps that get skipped under pressure, and they are the exact two a regulator, or a bad day, will ask about first.

So what does good look like? The agent shows up in a registry on day one. Every agent has its own identity. You assign least privilege and review access like anything else. Every action is traceable. One signal graph across the board. Agents look like users, and they are auditable.

Two details from Entra Agent ID are worth saying plainly. First, every agent gets a human sponsor and owner, a named person accountable for what it does. If that sponsor leaves, sponsorship rolls instead of leaving an orphaned agent quietly running. Second, access is handed out the way you would hand it to a contractor: time-bound, reviewed, set to expire, through the same entitlement workflows your people already go through. Measure twice, cut once.

The piece that makes this survivable at scale is the blueprint. Instead of policing a thousand agents one at a time, you define a class once: the policy, the permissions, the guardrails. Every agent minted from that blueprint inherits it. That is what turns "we have eight hundred agents" from a panic into a Tuesday.

I want to be honest about traceability because it is boring until it is the only thing that matters. The day an agent sends the wrong file, touches the wrong record, or makes a call no one expected, the first question is not "how smart was the model." It is "what exactly did it do, on whose authority, and can you prove it." If every action ties back to one agent identity with one accountable human, that is a fifteen-minute investigation. If it ran on a borrowed credential with no owner, that is a very bad week with counsel, regulators, and auditors in the room.

[[SLIDE_12]]

Now watch the same six steps play out the way they do in most environments today. Same trip, Build, Identify, Entitle, Run, Observe, Govern, but a different operator at every stop. A model vendor at Build. An identity vendor at Identify. A different tool at Entitle, another at Run, another for Observe, another for Govern. Six stops, six different operators. You are riding the local.

None of those are bad products. Each one is real, and somebody bought it on purpose. But notice who stands in the gap between them. Six vendors means six buying cycles, six contracts, six dashboards, and one team, yours, stitching them together by hand every time someone asks what one agent did end to end. The trip already has an operator. It is you. You did not buy six tools. You signed up to be the integrator across all six, for free, every week.

That is where the room stops arguing about features and starts seeing the seam. It is not a missing tool, every box is filled. It is a missing platform. And the platform is not a seventh logo. It is the day you stop doing that integration by hand.

[[SLIDE_13]]

Now look at those same stops when one control plane carries the route.

The lifecycle did not change. The platform underneath it did. Instead of six operators, one control plane runs the route. Build on Foundry or Copilot Studio. Identity comes from Entra Agent ID. Entitlement runs through the same governance and Conditional Access you already use for people. Agent 365 carries the runtime and the watching. Defender and Purview handle govern. Six stops, one operator, one signal graph.

Being the IDP makes life easier, but it is not a prerequisite. The identity provider a customer picked a decade ago does not move on a dime, and they should not have to wait through a migration to govern agents already running this week. The control plane can sit in front of what they have, govern agents now, and give them a path to converge at their own pace. It is a bridge, not a hostage note.

[[SLIDE_14]]

The same controls, the same teams. Identities, endpoints, cloud, data, and apps feed one signal graph, with a shared foundation underneath: registry, access control, observability, runtime protection. None of that is new architecture. It is the picture you already run for your people.

The whole point is that the agentic world should feel like that world, not a second one bolted on beside it. The admin who writes a Conditional Access policy for a clinician writes the same kind of policy for the agent. The officer who applies a Purview label to PHI applies that same discipline to the file an agent generated. The analyst who triages a clinician's sign-in risk triages the agent's risk the same way.

That is how the Frontier Firm loop actually closes: people and agents on one platform, one set of controls, one picture. Your environment is the platform. The station is already yours. The trains are already running. All that is left is to decide they run off one board, and to build it before the agents need it instead of after.

All aboard.
