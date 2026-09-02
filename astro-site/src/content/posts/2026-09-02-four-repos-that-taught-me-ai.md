---
layout: post
title: "Four Repos I Deleted Around, and What They Taught Me About Working With AI"
date: 2026-09-02
draft: true
categories: [tech]
tags: [technical, ai, cloud, career]
excerpt: "An ARM template from 2021, two wedding apps from 2025, and an identity framework. Four repos that mark the points where my relationship with AI actually changed."
---

I spent an afternoon pruning my GitHub account down from 32 repositories to 15. Most of the deletions were easy. A fork I made to demo a first pull request. A bootcamp exercise. A workshop that Microsoft shipped into the product a year later.

Four survived the pass, and they survived for the same reason: each one marks a point where the way I work with AI changed. Not the way I talk about AI at work. The way I actually sit down and build something.

## 2021: I typed every line

[IaC-Pipeline](https://github.com/Thor-DraperJr/IaC-Pipeline) is four commits. An `azuredeploy.json`, a parameters file, and a GitHub Actions workflow I updated three times to get it green. There is no README. The [walkthrough I wrote about it](/tech/iac/) is longer than the repository.

That post opens with "I have a sneaking suspicion that Infrastructure as Code will become increasingly important as time goes on." I was a gym owner teaching myself Azure. The whole method was transcription. Read the Microsoft doc, type the JSON, watch the deploy fail, read the error, type it again.

The learning was slow and it stuck. I still know what an ARM template does, because I hand-typed a broken one until it worked.

## June 2025: the model typed, and I still had to know what broke

Nine days before the wedding, I decided our reception needed a board game app. Twenty games, a live view of which ones were in play, YouTube links for rules, updating across every guest's phone.

[BoardGameWebAppWedding2025](https://github.com/Thor-DraperJr/BoardGameWebAppWedding2025) went from empty to deployed in a single day. Twelve commits, all on June 23. The README says it plainly: "some serious collaborative coding between Thor and Claude."

Read the commit titles in order and you can see exactly where the model helped and where it did not.

```
Initial commit: Board Game Web App for Wedding Reception
Fix TypeScript build error - remove unused React import
Fix Bicep template - add GitHub repository URL
Fix Vite config for static web app deployment - add base path
Fix favicon reference and Bicep syntax issue
Add GitHub Actions workflow for Azure Static Web Apps
Fix Azure Static Web App deployment - add proper config and use SWA CLI
```

The app came out fast. Every single deployment problem was mine to diagnose. The model wrote a Vite config that was correct in general and wrong for a Static Web App base path. It wrote a Bicep template missing the repository URL that Azure needs to wire up the Actions workflow. Neither of those is a code quality failure. They are environment failures, and the model could not see my environment.

That is the first thing these repos taught me. AI collapsed the time between idea and running code, and it did nothing to the time between running code and *deployed* code. The 2021 method was still what got me through the second half.

## July 2025: the deploy loop is the real skill

Two weeks later I built [WeddingTimeline](https://github.com/Thor-DraperJr/WeddingTimeline), a Next.js site so guests could see what was happening and when. This one got a custom domain, `thorandlina.love`, bought from Namecheap with a CNAME into Azure Static Web Apps.

Five of the pull requests on that repo are deployment fixes in a row.

```
Add basic GitHub Actions deployment workflow (#1)
Implement production-ready GitHub Actions workflow (#2)
Fix production deployment by generating package-lock.json (#3)
Fix GitHub Actions deployment failures by removing Google Fonts dependency (#4)
Fix Azure Static Web Apps deployment by letting Azure handle the build (#5)
```

Number five is the one worth keeping. The fix was to stop building the site in the workflow and let Azure do it. Four attempts to make my pipeline smarter, and the answer was to take work out of it.

There is also a commit called "Remove deployment secret from README and improve security guidance." I put a deployment token in a README on a public repository. I caught it and rotated it, and I am leaving the commit in the history because pretending I have never done that would be worse than the mistake.

Both of those are lessons the model cannot hand you. It will happily generate a README with your token in it, because you pasted your token into the conversation.

## September 2025: the part AI could not do

[identity-defense-in-depth](https://github.com/Thor-DraperJr/identity-defense-in-depth) is different from the other three. Nothing in it deploys. It is a maturity framework: nine capability layers from credential core out to telemetry and posture, an L0 through L5 ladder, and a set of stall patterns I kept seeing in real conversations. MFA plateau. Legacy protocol bypass. Static secret sprawl. Standing privilege nobody wants to own.

AI was all over the production of that repo. Mermaid diagrams, a render script, PNG and SVG in dark and light, an executive brief converted to PDF. The build tooling took an afternoon instead of a week.

The taxonomy was mine. The ordering was mine, and the ordering is the entire value of the thing. Anyone can list identity controls. Saying that token binding and continuous access evaluation do not pay off until legacy suppression and device posture are already covered is a claim about sequencing, and I only had it because I had sat in the rooms where the sequence went wrong.

The model made me faster at everything downstream of the idea. It contributed nothing to the idea.

## What I actually carry forward

Four repos, five years, one pattern.

| Repo | Year | What AI did | What it could not do |
| --- | --- | --- | --- |
| IaC-Pipeline | 2021 | Nothing, it was not there | All of it |
| BoardGameWebApp | 2025 | Wrote the app in a day | See my Azure environment |
| WeddingTimeline | 2025 | Wrote the site and the workflow | Know when to remove work |
| identity-defense-in-depth | 2025 | Rendered and published the artifacts | Decide what order the layers go in |

The rule I use now is boring, and I trust it: let the model do the work you could do but do not need to learn, and do the work yourself when the point is the judgment.

The board game app was the right call for a model to write. I did not need to learn Vite the week of my wedding. The identity framework was the wrong call for a model to write, because the sequencing was the deliverable.

Deleting seventeen repositories was not painful, and the four I kept are not my best code. They are the four I can still explain.

Thanks for reading. If your own account has a repo you would not delete, it is probably worth writing down why.
