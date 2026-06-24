---
layout: post
title: "Your First Pull Request, No Commands Required"
date: 2026-06-23
categories: [tech]
tags: [github, copilot, agents, workshop, enablement, leadership]
draft: false
excerpt: "Missed the session? Read this and it's close to having been there. We add your name to a real project, let a coding agent run the Git mechanics out loud, and you walk away knowing what a branch, a commit, and a pull request actually are because you shipped one."
---

> **You're signed in, your editor is open, and we're all looking at the same practice repo. Before we touch anything, one rule: nothing the agent does is final until you've looked at it. It proposes, you approve. That's the whole reason you can drive real Git operations on your first day and not break a thing. Give me the next hour and you'll have your name merged into a shared project, and you'll be able to say why every step happened.**

Here's how this goes. You're not going to memorize commands. You're going to say what you want in plain language, watch a coding agent carry it out, and read everything it did before you approve it. Git is the thing you pick up along the way, almost by accident, while you ship something real.

There's a classic version of this exercise where you edit one line in a file and open your first pull request. We're going to do exactly that, except you won't be fighting a terminal to get there.

[[GH_WORKSHOP]]

## First, what GitHub actually is

Strip away the vocabulary and GitHub answers three questions a team always has. What's the current agreed-on version of our work? What is someone proposing to change about it? And who looked at that change before it became the new agreed-on version?

[[WHAT_IS_GITHUB]]

Hold onto those three questions, because every button you're about to touch answers one of them. Repository, branch, pull request, merge: four words and you've got the model. The rest is detail you can pick up later.

## The path your contribution takes

Before you do anything, look at where you're headed. Your one-line change travels through a handful of stops to get from your idea into the team's agreed version. Each stop is on the screen below, and the reason behind each one is the part worth keeping.

[[GITHUB_FLOW]]

None of those steps are there to test you. Branching keeps your half-finished idea off everyone else's work until it's ready. The commit message explains the change to a stranger six months from now. The pull request gives a second set of eyes a chance to catch what you missed. The merge turns "we agreed to this" into a recorded fact instead of a hallway memory. Once you see the reasons, the steps stop being trivia.

## Meet your two tools

You'll spend the hour in one editor, talking to one assistant, so here's each in a sentence before we lean on them.

[[YOUR_TOOLS]]

If you've never opened VS Code, don't worry about it. Today it's just the room where you ask for what you want and watch the agent do it.

## What's true before we start

Three things have to be set, and nothing past that. You're signed in to GitHub on the account you're meant to use. Copilot is turned on in your editor. And you've got the practice repo open in front of you. No command line, no SSH keys, nothing to install past your editor. If you can sign in, you can do everything else today by asking for it.

## Say what you want. Watch it happen.

We'll do the first one together, slowly. Pick the smallest change there is: add your name to a list in a markdown file. Nobody has to think about the content, so all of your attention goes to the workflow.

Type it the way you'd say it out loud:

> In the practice repo, add my name to the contributors list in alphabetical order, on its own branch, with a commit message that says what I changed, then open it for review.

Now watch your editor. The agent doesn't just do the work, it performs it, one labeled step at a time.

[[AGENT_LOOP]]

When it stops, slow down and read what just rolled past. There's the branch, separate from main. There's your name, one new line, highlighted green. There's the commit message underneath it. There's the pull request, waiting for review. Every one of those has a name you just learned, and now you've seen the name stuck to the real thing.

[[DIFF_PREVIEW]]

That green line is the diff, and reading it is the one habit worth building today. There's nothing to decode: a plus sign, your name, dropped exactly where you asked. If it matches what you wanted, you're good. If it doesn't, you caught it before anyone else saw it.

Then do the move that makes branching click. Click over to the version of the file on main. Your name isn't there. It won't be until the team says yes. That's a branch, and you just saw it without a sentence of theory.

## Watch, it just did something wrong

The first time the agent gets something wrong is the most useful minute you'll spend today, so let's make it happen. The agent is fast and it's literal. Ask for something vague and you get something confidently wrong.

Say it dropped your name at the top of the list instead of in alphabetical order. Don't reach for a command and don't panic. Tell it what you actually wanted: "That's not where my name goes, put it between the name above and the name below." Watch it move the line. Read the diff again. Now it's right.

Catching it and asking again is the skill, and it's smaller than it sounds. A clear person reading a clear diff catches the mistake every time. It's also why the prompt you typed was narrow on purpose: you knew what right looked like before you asked, so you could tell at a glance whether you got it. Vague intent in, vague result out.

Before you approve anything, stop and read it one more time. Does the change match what you asked for? If it does, approve it and merge it. Your name is on main now. Delete the branch, you're done with it.

Today you approve your own change so you can watch the whole loop end to end. On a real team, someone else reviews it before it merges, and you'll be the reviewer as often as the author. Same habit either way: read the diff before you say yes.

Step back and look at what you just did.

[[SESSION_PLAN]]

Notice the rhythm. Concept, then proof, then your own hands, every time. You never heard a thing explained that you didn't then watch happen, and you never watched a thing you didn't then do yourself. By the time you opened your own pull request, you'd already seen one open and heard why every step was there.

## Did it work?

Here's the finish line, and it isn't "you watched me."

[[WORKSHOP_OBJECTIVES]]

If you walked in today without a GitHub account and you're walking out with a merged pull request that has your name on it, and you can tell me in your own words why each step happened, you won. Quiet, but real.

## Your turn to say it back

Before you go, one ask: in your own words, what's a branch, and why did we make one before editing anything? If you can answer that, the hour worked and Git stopped being a wall.

Next time we point the same habit at heavier work: building a demo from scratch, fixing something in a shared repo, or untangling your first merge conflict when two people change the same line. The mechanics get bigger; the move doesn't change. Say the intent, watch the work, read the diff, approve.

That last part is what lasts. Tools change constantly, and the exact command you'd memorize today is deprecated by next year. What sticks around is being able to say clearly what you want and check that you got it. GitHub just happens to be the first place you practice it.
