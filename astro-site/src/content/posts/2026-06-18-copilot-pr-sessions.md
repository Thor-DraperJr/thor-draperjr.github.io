---
layout: post
title: "Learning to Let Copilot Work My GitHub Queue"
date: 2026-06-18
categories: [tech]
tags: [ai, github, copilot, agents, software-development]
draft: true
excerpt: "A real session taught me the difference between using Copilot as a coding helper and using it as an operator inside GitHub. The lesson wasn't more automation. It was better judgment around issues, proof, and ownership."
---

The first real lesson from this session was uncomfortable: I let Copilot trust a GitHub issue more than it trusted reality.

That's not a Copilot problem. That's an operator problem. The tool did what the queue appeared to ask. I hadn't taught the session to slow down and check whether the queue was still true.

I started with a simpler goal. I wanted a cleaner way to use GitHub Copilot with pull requests.

I had created a few PRs, I was still new enough to GitHub that some of the mechanics felt slippery, and I had been reading Peter Steinberger's [`maintainer-orchestrator`](https://github.com/steipete/agent-scripts/blob/main/skills/maintainer-orchestrator/SKILL.md) skill. That thing isn't written for someone casually updating a personal blog. It's built for serious maintainers: review queues, worker sessions, proof gates, labels, release decisions, all of it.

But buried inside that advanced workflow was what I actually needed.

I didn't need Copilot to be faster. I needed it to stop treating every GitHub issue like the truth.

Copilot shouldn't just change files. It should help me understand the state of the work, decide what is real, prove what changed, and leave the project cleaner than it found it.

That sounds obvious right up until you run a real session and watch the agent confidently do the wrong thing.

## Where I Got Ahead of Myself

The beginner version of AI-assisted GitHub work is pretty simple.

1. Ask Copilot to fix something.
2. Watch it edit files.
3. Run the build.
4. Push if the terminal looks happy.

That's fine for a tiny local change. It isn't enough once the work lives in GitHub.

GitHub adds a different kind of accountability. Issues are not just reminders. Pull requests are not just diffs. Actions are not just a green badge. They are the public record of what was requested, what changed, what was proven, and who decided it was done.

That's the muscle I'm trying to build. Not "can I get AI to write code faster?" I already know it can. The question I actually care about is: can I use it without outsourcing my judgment?

## My First Mistake Was Trusting the Issue

We started working through open issues in this repo. That felt like the right move. Instead of giving Copilot a vague prompt, I wanted it to read the GitHub queue and help turn those issues into bounded work.

Then I ran straight into the trap.

One issue said my LinkedIn URL and email were wrong. Copilot treated the issue as the source of truth and started correcting files around that assumption. The problem was that the issue itself was stale. My real LinkedIn is `https://www.linkedin.com/in/thor-draperjr/`, and my real email is `thordraper2@outlook.com`.

The issue wasn't a command. It was a claim. And that claim was wrong.

That's the difference between a coding assistant and an operator. A coding assistant can apply the requested edit. An operator has to ask whether the request is still true.

I ended up writing the lesson back into the repo instructions: when using issues as a starting point, read them as reference material first. Compare them against current code, owner-known facts, and the actual state of the site. Identify what is stale, wrong, ambiguous, already satisfied, or ready to implement. Then make a plan.

That one rule would have saved the mistake.

```text
For each open issue, compare the request to the current repo state. Tell me whether it is still real, already satisfied, partially satisfied, stale, or needs an owner decision. Do not edit files yet.
```

That prompt isn't flashy. It's probably the most important one in the whole workflow.

## GitHub Should Keep the Record

The session also helped me clarify where I want the work to live.

GitHub should be the official record. Issues, PRs, Actions, comments, branch history, and Pages settings are where the project remembers what happened after the chat window is gone.

An agentic workflow should sit around that record, not replace it.

It's tempting to let the agent become the private backlog. A chat session can hold a lot of context. It can feel smarter than an issue. But if the decision never makes it back to GitHub, future-me has to reconstruct the story from memory. Future-me doesn't deserve that kind of paperwork ambush.

Issues should hold the request and acceptance criteria. Pull requests should hold the reviewable change. Actions should hold repeatable proof. VS Code Copilot should help me do the local thinking and implementation. Scout, or any coordinator like it, should move work through that loop and write the result back to GitHub.

That's the split I want. GitHub holds the record. Copilot does the work with me. A coordinator can keep things moving, but it shouldn't become a side notebook that only exists on my machine.

## Proof Got Real Fast

The most useful part of the session wasn't a code edit. It was a settings check.

One issue was about repo structure and pruning discipline for this visual blog workflow. Part of that was making sure GitHub Pages was publishing through GitHub Actions instead of the old branch-based Pages setup.

The API said the repo was still on `build_type: legacy`.

So we tried to fix it with `gh api`. That failed with a `404`. At first, that looked like permissions. Then we opened the actual GitHub Settings page in the integrated browser, I logged in, and the answer was sitting right there: Source was still set to "Deploy from a branch." The page exposed the "GitHub Actions" option. We clicked it. GitHub said the source was saved. Then `gh api` confirmed `build_type: workflow`.

The agent had partial visibility. The browser had the truth. The API had the verification.

For this kind of work, proof isn't one command. It's the closest real check for the thing you changed.

For this repo, that means:

- build the Astro site;
- use syntax checks for scripts;
- open visual pages when the change is visual;
- screenshot custom graphics instead of trusting markup;
- verify GitHub settings through the UI or authenticated API when the issue is about GitHub settings;
- write the result back to the issue before calling it done.

I had closed the issue too early, reopened it when the Pages setting was still wrong, fixed the setting in the UI, verified it by API, and then closed it again with the actual evidence.

That's messier than a clean demo. It's also much closer to real work.

## The `gh` Problem Wasn't Really About `gh`

There was another small lesson hiding in the middle of this: sometimes the agent is only as capable as the shell it inherited.

I thought GitHub CLI kept disappearing. I had installed it more than once, but `gh` wasn't resolving in the VS Code terminal. The binary was there. Winget knew it was installed. Machine PATH included the folder. The live VS Code terminal just had a stale environment and hadn't picked up the PATH change.

The temporary fix was boring:

```powershell
$ghPath = 'C:\Program Files\GitHub CLI'
if (($env:Path -split ';') -notcontains $ghPath) {
  $env:Path = "$ghPath;$env:Path"
}
```

The real fix is probably restarting VS Code so the integrated terminal gets the updated machine PATH. Once `gh` worked, we could check auth, read Pages settings, reopen and close issues, and verify the final state. The agent didn't need magic. It needed the local toolchain to be available in the process it was actually running in.

## Bloat Is Still Bloat When an Agent Writes It

One of the more useful corrections came near the end.

I had let Copilot create an issue-specific completion report under `.github/reviews/`. It sounded official. It had a date in the filename. It summarized what happened.

It also wasn't a durable repo document.

The real policy belonged in `docs/repo-structure-policy.md`. The GitHub issue needed a comment with evidence. The extra review markdown was just session residue wearing a blazer.

So we deleted it.

That's another habit I want in the workflow: agents should prune their own paperwork. Not every thought deserves a file. Not every issue needs a report. Documentation should either guide future work or preserve a decision that would otherwise be hard to recover. If it does neither, it's clutter.

## So, Do I Need an Agentic Workflow?

Yes, but not the dramatic version.

I don't need ten agents passing a ticket around so they can all agree the site still builds. I need a small loop that forces the right order of thinking.

For normal GitHub work, the loop is:

1. Read the issue or PR.
2. Compare it to current reality.
3. Separate stale claims, owner decisions, and bounded implementation.
4. Make a plan.
5. Change the smallest useful thing.
6. Run the closest real proof.
7. Write the result back to GitHub.
8. Let me make the final owner decision.

For visual work on this site, the loop gets one extra requirement: render the page and look at it. A build can pass while the design still feels wrong. For posts with custom components, inline figures, or presentation-style visuals, the agent has to screenshot the real page and judge the result against the intended reader experience.

That's where a coordinator like Scout could become useful. Not as a replacement for GitHub. Not as a private to-do list. As the thing that keeps the loop moving from issue, to local session, to proof, to comment, to decision.

## What I'm Taking Forward

I'm not taking away "use Copilot to close more issues."

I need Copilot to slow down at the moments where judgment matters.

Before editing, ask what is true. Before closing, ask what is proven. Before documenting, ask whether the file will help future work. Before building a bigger agentic workflow, ask where the source of truth lives.

That's the shift I'm trying to make. Local coding is where the work starts. GitHub is where the work becomes accountable. Copilot is most useful when it helps me move between those two places without losing ownership of the decision.

I'm still new enough to GitHub that some of this feels like learning the instrument while playing in public. That's fine. I'm not trying to look like a perfect maintainer on day one.

I want the next session to be cleaner than this one.

GitHub can hold the record. Copilot can bring the leverage. I still own the call.
