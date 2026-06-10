---
layout: post
title: "Building an Agentic Tool the Agent Can Actually Carry"
date: 2026-06-09
categories: [tech]
tags: [ai, agents, vscode, github, product, leadership]
draft: false
excerpt: "I set out to build a social-promotion helper in VS Code and learned a more useful lesson about agentic tooling: where a capability lives decides whether it travels. The first version worked and went nowhere. The second one snaps into any session."
---

I wanted one thing. When I finish a blog post, keeping a consistent social presence should not mean spinning up a separate workflow. So I built a helper that reads my latest post, learns my writing voice from older posts, drafts a few variants, and puts a cost checkpoint in front of anything that spends money on the X API.

The first version was a VS Code extension. It worked. It also taught me why most "I built an agent" projects quietly die: the capability was trapped in the wrong container. The more interesting work was moving it.

## The First Version Worked and Still Failed

The extension did everything I asked. It parsed my posts, sampled tone, generated launch, insight, conversation, and follow-up drafts, and required explicit confirmation before any paid post.

Then I tried to answer two simple questions and the design fell over.

Could I use it in my next project, in a different repo, without reinstalling and reconfiguring it? Not really. Could I tell another person "do this in your own VS Code" in one step? Also no. The publish path lived as a script inside one blog repo. To share the capability, I would have to share the repo.

That is a capability locked inside a content project. Useful to me, in one place, on one machine. For something I wanted to carry from session to session and hand to other people, that is the wrong shape.

## The Distinction I Was Missing

I had collapsed two different things into one tool.

One is context. The voice rules, the posting cadence, the playbook for how a good post should read. This is knowledge. It grounds an answer.

The other is capability. Finding the post, linting the draft against my rules, pricing the post, sending it. This is action. It does something in the world.

Those belong in different homes, and forcing them into a single extension is what made the result hard to move.

| Layer | What it is | How it travels | Can it act |
|---|---|---|---|
| Context | Voice rules, cadence, playbook | Skill files, shared context | No, it grounds answers |
| Capability | Discover, lint, price, publish | A server the agent calls | Yes, it executes |

## Where Each Piece Should Live

The capability became a small server that speaks the Model Context Protocol. It exposes four tools: find the latest post and sample tone, lint a draft against my voice rules, estimate the posting cost, and publish behind an approval gate. Configure it once and any agent session in any repo can call it. Other people adopt it by adding one config snippet. That is the "do this in your own editor" story the extension could never tell.

The behavior became a skill. It holds the voice rules and the workflow order, and it tells the agent how to sequence those tools. It travels with me across every workspace, with no repo required.

Distribution is where a feature I had been calling "Canvas" actually fits. It is GitHub Copilot Spaces, and the useful surprise was learning what it is not. Spaces groups repositories, files, and notes into shared context so answers are grounded, and you can share that publicly or with a team. It is a context layer, not an execution layer. It will not run my posting logic. So Spaces is the right place to publish the playbook and make it discoverable, and the wrong place to do the posting. Knowing that boundary kept me from building on the wrong primitive.

The original extension did not go in the trash. It became an optional graphical front end over the same capability, instead of being the whole product.

## The Guardrail That Still Matters Most

Posting on an API looks cheap until scale and links show up. The cost rules are explicit and they sit at the moment of decision.

- Text-only estimate: `$0.015`
- Post with a link: `$0.200`
- Default behavior: draft standalone text without a link unless the author explicitly asks to include one.

Drafting is local and free. Publishing is the only step that spends money, and it never fires without a confirmed go-ahead on the exact text. If a link is included, the post still has to read as a complete standalone message before the URL. The model writes the draft. I own the decision to spend and to send.

## The Voice Rules Are Code Now

The most valuable tool in the set is the least glamorous. It is the linter that checks a draft against how I actually write. No emoji. No em-dashes. No banned filler like "the goal is simple" or "game changer." No tidy "it is not this, it is that" constructions that give away a machine wrote the line.

I learned this the direct way. An early run of my own tool produced drafts with em-dashes and a clean little flourish about being human-approved rather than autopilot. Both break my own rules. Encoding those rules as a deterministic check, rather than hoping the model remembers them, is what makes the output sound like me instead of like a competent stranger.

## FF7-Style Artifact Scorecard

I like scoreboards that force tradeoffs. Here is the one for the second version.

| Stat | Score | Notes |
|---|---:|---|
| Portability | 9/10 | Configure the server once, use it in any repo and session. |
| Teachability | 9/10 | One config snippet to adopt. Real "do this in your editor" story. |
| Safety | 9/10 | Approval gate, explicit cost at decision time, dry run when credentials are absent. |
| Separation of concerns | 8/10 | Capability, behavior, and distribution each live in the right layer. |
| Operator UX | 7/10 | Tools are clean. A one-call end-to-end flow is the next polish. |
| Business readiness | 8/10 | Server builds and runs, and live text-only publishing was validated. API credits and limits still matter at scale. |

**LIMIT BREAK Meter:** 49 / 60

Translation: this is no longer a clever script. It is a portable capability with a clear distribution path.

## What I Actually Learned

The hard part was never the API. It was deciding where each piece lives so the whole thing can move.

Context grounds. Capability acts. When you mix them, you get something that works once, in one place, for one person. When you separate them, the model can carry the behavior, the server can carry the capability, and a Space can carry the distribution.

If you are building in this space, start with one question before you write code. When this works, who can use it, and where. If the honest answer is "only me, only here," you have built the demo, not the tool.
