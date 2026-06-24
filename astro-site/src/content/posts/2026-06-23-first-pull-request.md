---
layout: post
title: "Your First Pull Request, No Commands Required"
date: 2026-06-23
categories: [tech]
tags: [github, copilot, agents, workshop, enablement, leadership]
draft: false
excerpt: "Missed the session? This is the walkthrough version: add your name to a real project, let a coding agent handle the Git mechanics in the open, and practice the part that matters most: understanding the change before you approve it."
---

> **You're signed in, your editor is open, and we're all looking at the same practice repo. Before we touch anything, one rule: nothing the agent does is final until you've looked at it. It proposes, you approve. That's the whole reason you can drive real Git operations on your first day and not break a thing. Give me the next hour and you'll have your name merged into a shared project, and you'll be able to say why every step happened.**

Here's how this goes. You're not here to memorize commands. You're going to say what you want in plain language, watch a coding agent carry it out, and read what changed before you approve it. Git is the thing you pick up along the way, almost by accident, because every step is attached to something you can see.

There's a classic version of this exercise where you edit one line in a file and open your first pull request. We're going to do exactly that, except you won't be fighting a terminal to get there. Copilot can handle the mechanics, but you still need a clear picture of the room you're standing in and the loop you're about to run.

I want you to see the whole hour first, because Git gets easier when you know where each move fits.

[[GH_WORKSHOP]]

## First, what GitHub actually is

Before we ask the agent to touch a file, here are the table stakes. GitHub is where a team keeps shared work and the record of how that work changes. The shared project is called a repository. Inside that repository, `main` is the version the team treats as current.

When you want to change something, you do not edit `main` directly. You make a branch, which is a temporary path for your change. The pull request is where that branch becomes visible for review: here is what changed, here is why, and here is the diff. If the team approves it, the merge brings that branch back into `main` and records who changed what, when, and why.

[[WHAT_IS_GITHUB]]

That is the picture on the slide: the current version, your proposed change off to the side, and the moment that change gets merged back in. When the agent says it made a branch or opened a pull request, don't treat those as magic words. Listen for the job the step is doing: keeping the experiment separate, making the change visible, or recording the team's yes.

## The path your contribution takes

Now that the nouns have jobs, look at the path your contribution takes. Your first change only adds one line, but it still follows the same shape professional teams use: get a copy, branch off, edit, save the change, send it back up, ask for review, then merge after approval. Don't try to memorize every stop. Notice why each stop exists.

[[GITHUB_FLOW]]

None of those steps are there to test you. Forking and cloning get the project into a place where work can happen. Branching keeps your half-finished idea off everyone else's work until it's ready. Editing is the actual change. Committing saves that change with a message. Pushing sends your branch back to GitHub so other people can see it. The pull request gives someone else a clean place to ask, "Does this do what we meant?" The merge turns agreement into history the project can point back to. Once you know why the stops exist, the workflow stops feeling like trivia.

## Meet your two tools

You have the map. The next question is who does what while we run it. You'll spend the hour in one editor, talking to one assistant, but your judgment stays in the loop the whole time. The editor is where the work becomes visible. The assistant handles the mechanics out loud. Your job is still the important one: describe the change, inspect what came back, and decide whether it matches what you asked for.

[[YOUR_TOOLS]]

If you've never opened VS Code, don't worry about mastering the whole tool today. Treat it as the room where your request, the file, the diff, and the pull request all sit close enough together that you can keep your bearings. The relationship is simple: you talk to Copilot inside VS Code, and Copilot does the work on GitHub where the project lives. Once that room is open, the checklist is short.

## What's true before we start

Three things have to be set, and nothing past that. You're signed in to GitHub on the account you're meant to use. Copilot is turned on in your editor. And you've got the practice repo open in front of you.

A lot of people lose confidence before the work even starts. They hear command line, SSH keys, remotes, branches, and suddenly a first pull request sounds like a certification exam. For this exercise, the setup stays small so your attention can stay on the part you are actually learning: make a change, inspect it, ask for review, approve only what you understand.

With those three things in place, you can make the first request.

## Say what you want. Watch it happen.

Start with a change so small that the workflow has nowhere to hide: add your name to a list in a markdown file. The content is intentionally plain. You should be able to tell immediately whether the agent did the right thing, because today you are practicing how a change moves from your idea to a reviewed update in the shared project.

Type it the way you'd say it out loud:

> In the practice repo, add my name to the contributors list in alphabetical order, on its own branch, with a commit message that says what I changed, then open it for review.

Now watch your editor. The loop should stay visible: you state the intent, the agent plans the Git steps, it makes the edit, it shows the diff, and you decide whether to approve. The agent can move quickly, but the checkpoints keep you in control.

[[AGENT_LOOP]]

When it stops, slow down and read what just rolled past. There's the branch, separate from main. There's your name, one new line, highlighted green. There's the commit message underneath it. There's the pull request, waiting for review. That is the loop in real life: intent in, work shown back, judgment still yours.

Now zoom in on the part you should never skip: the diff.

[[DIFF_PREVIEW]]

That green line is the diff, and reading it is the habit worth building today. There's nothing mystical to decode: a plus sign, your name, dropped exactly where you asked. If it matches what you wanted, you have evidence. If it doesn't, you caught it before anyone else saw it.

Then do the move that makes branching click. Look at the version of the file on main. Your name is not there. It will not be there until the team says yes. That's a branch doing its job: letting you work in public without changing the shared version before the work is ready.

Once that clicks, practice the uncomfortable part while the stakes are still low: the agent making a small mistake.

## When the agent gets it wrong

Practice this part on purpose. Copilot can move fast, but fast is not the same thing as correct. If you ask for something vague, it may give you a confident answer that still misses what you meant. That does not break the exercise. It gives you a chance to stay in control while the mistake is still small.

Say it dropped your name at the top of the list instead of in alphabetical order. Do not reach for a command and do not panic. Tell it what you actually wanted: "That's not where my name goes, put it between the name above and the name below." Watch it move the line. Read the diff again. Now you are checking the work, not just hoping the tool is right.

The habit is smaller and more durable than the command sequence: make the request narrow, know what right should look like, and read the diff before you approve anything. If the line is in the wrong place, you do not need to know a Git command to fix it. You need to be clear about the outcome and willing to check the work.

Before you approve anything, stop and read it one more time. Does the change match what you asked for? If it does, approve it and merge it. Your name is on main now. Delete the branch, because the branch was a workspace for this change, not a souvenir.

Today you approve your own change so you can watch the whole loop end to end. On a real team, someone else reviews it before it merges, and you'll be the reviewer as often as the author. Same habit either way: read the diff before you say yes.

Before we call the exercise finished, replay the loop in order. You got your bearings, agreed that nothing ships unseen, watched one example, made your own contribution, read the diff, merged it, and said the idea back. If you can point to those stops without help, you understand the workflow, not just the instructions.

[[SESSION_PLAN]]

At this point, you have done more than follow along. You have seen main stay clean while work happens on a branch. You have read a diff before approving it. You have watched a pull request turn a proposed edit into a reviewed change. Those are the pieces people talk around for months, and you just used them in one small loop.

## Did it work?

The finish line is whether you can describe the workflow without copying my words. You should be able to explain what GitHub is for, why each step exists, how to state intent clearly, and how to read a diff before approving. That is the scoreboard: what you can now explain, not just what you clicked.

[[WORKSHOP_OBJECTIVES]]

If you walked in today without a GitHub account and you're walking out with a merged pull request that has your name on it, the visible win is your name in the file. The more useful win is being able to explain why the branch existed, what the diff showed you, and why the pull request came before the merge.

## Your turn to say it back

Before you go, one ask: in your own words, what's a branch, and why did we make one before editing anything? If you can answer that without reaching for jargon, the hour worked and Git stopped being a wall.

That answer matters because the workflow is no longer a set of clicks. It is a mental model you can reuse.

Next time we point the same habit at heavier work: building a demo from scratch, fixing something in a shared repo, or untangling your first merge conflict when two people change the same line. The mechanics get bigger; the move doesn't change. Say the intent, watch the work, read the diff, approve.

Carry the habit past this repo. Say what you want clearly. Keep the first change small enough to inspect. Read the diff like your name is going on the work, because it is. Tools will change, and the commands will keep shifting, but that loop will still matter.
