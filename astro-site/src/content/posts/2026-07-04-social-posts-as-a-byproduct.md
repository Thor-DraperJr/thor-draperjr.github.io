---
layout: post
title: "Let the Session Write the Post"
date: 2026-07-04
categories: [tech]
tags: [ai, agents, mcp, social-media, workflow, leadership]
draft: false
excerpt: "Staying present on social media usually dies as a separate chore. If the drafting capability lives inside the same agent session that ships the work, and the risky parts are deterministic guardrails, the post becomes a byproduct instead of a second job."
---

I finished a real piece of work today. I redesigned the visual system on this site, closed the issue that tracked it, and pushed it live. Right after that, in the same session, I asked the agent to turn the most interesting thing I had done into a social post. A few minutes later a text-only post was on X, in my voice, priced before it sent, and approved by me on the exact words.

That second part used to be the part that never happened. The work would ship and the post would not, because promoting it was a separate workflow I had to go start on purpose.

## The chore that kills consistency

Most people who fall off social media do not fall off because they run out of ideas. They fall off because sharing is a context switch. You close the editor, open a different tab, try to remember what you did, try to make it sound like you, worry about whether you are posting too much, and then decide to do it later. Later does not come.

The fix I care about removes the context switch instead of asking me to try harder. The session that produced the work already holds everything a good post needs: what I built, why it mattered, and what I would tell someone about it. If the drafting capability lives inside that session, the post can be a byproduct of the work instead of a second job.

That is what the social-promoter tool is for. I wrote about [where that capability should live](/tech/agentic-tool-the-agent-can-carry/) when I first built it. This piece is about the workflow it makes possible once it is in place.

## Split the creative part from the risky part

The design rule that makes this safe is simple to say. The model does the creative work. A small server does the parts a model should not be trusted to do alone.

Drafting in my voice is a creative job, so the agent owns it. Finding the right source post, checking a draft against my hard rules, pricing the post, and standing in front of the publish button are jobs that need to be deterministic, so a Model Context Protocol server owns those. The agent proposes. The server enforces. I decide.

Because the capability is an MCP server and not a script buried in one repo, it is available in every workspace and session, and anyone can adopt it with one config snippet. Portability is what turns a clever demo into something I actually use, and something I can hand to someone else.

## The loop, in order

When I say "post the most interesting thing we did," the agent runs a fixed sequence. It starts by loading my voice profile and sampling the full text of recent posts, so the drafts calibrate on how I actually write instead of a generic tone. From there the run is the same every time. Watch where the work changes hands.

[[SOCIAL_LOOP]]

The handoff is the point. The model owns the words. The server owns the rules, the cost, and the publish button. Generating options is free. Spending money and speaking in public is gated, and the gate is me.

## The guardrails that make it safe to run in a work session

Running this inside a normal work session only feels safe because of three checks that do not depend on the model remembering to behave.

The voice lint is code. It rejects em-dashes used as punctuation, rejects emoji, enforces the character limit, flags the "not this, it's that" construction that gives away a machine, and blocks a list of AI-accent phrases like "game changer," "unlock," and "the goal is simple." I learned to encode these the hard way, when an early run of my own tool produced a draft with an em-dash and a tidy little flourish about being human-approved. Both broke my own rules. Hoping the model remembers your rules only works until it doesn't. A deterministic check runs every time.

The cost sits at the moment of decision. Text-only posts are cheap and posts with a link cost more, so the estimate is shown before I approve, every time. Drafting never costs anything. Publishing is the only step that spends money, and it will not fire without a confirmed go-ahead on the exact words.

Credentials never travel through the model. In this prototype, I connect my X account once with a terminal command, the keys stay in a local user-level store outside the repo, and they are read in every workspace without a per-project secrets file. That is good enough to prove the workflow and much better than pasting secrets into chat, but the right hardening path is OS-backed credential storage such as Windows Credential Manager, macOS Keychain, or Linux Secret Service. The agent can ask to post. It never sees the keys.

## What today actually proved

I want to be honest about how it went, because the failure is part of the point.

The first two times I asked for the tool this session, the server would not start. If the whole thing had been creative guesswork, I might not have noticed something was wrong. Because the workflow has deterministic steps, the failure was obvious and contained. Nothing drafted, nothing priced, nothing posted.

Then the server came up, and the full loop ran the way it should. Voice profile loaded, real posts sampled, four drafts written, each linted clean, each scored, the cost shown at a penny and a half for text only. I picked one, approved the exact text, and it posted. One approval, one post, one known cost.

## Why this is bigger than social media

The social post is the small win. The pattern is the real one.

An agentic session should be able to produce more than the primary artifact. When I ship work, the session already knows enough to draft the changelog, the standup note, the internal update, and yes, the public post. The model can obviously write all of those. The question a leader should ask is which of those actions are safe to let it take, and how you build the guardrails so the answer can be yes more often.

The tools that will matter are the ones that are portable, teachable, and safe by default. Portable, so the capability follows you instead of living in one repo. Teachable, so a teammate adopts it in one step instead of cloning your setup. Safe by default, so the risky actions are gated by code and not by a prompt you hope the model honors.

Get those three right and presence stops being a chore you keep failing to start. It becomes a byproduct of the work you were already doing.

What is the next thing you do by hand right after you finish real work, only because kicking off the separate workflow feels heavier than the task itself?
