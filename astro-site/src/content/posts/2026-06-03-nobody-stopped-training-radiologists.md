---
layout: post
title: "The Canary Got a Raise"
date: 2026-06-03
categories: [tech]
tags: [ai, agents, data, career, leadership]
draft: false
excerpt: "The loudest AI predictions keep getting the second move wrong. Radiologists were supposed to be gone by now; instead they are busier and better paid than ever. That same pattern shows up in two places nobody is watching closely enough: what happens to the value of data once a model is trained, and why the rush to put agents in charge of other agents is quietly admitting the limits of what we built."
---

In 2016, Geoffrey Hinton, one of the people most responsible for the deep learning era, told a room that we should stop training radiologists. The machine was already better at reading the scan, and within five years it would be better at all of it. Radiology was the obvious first domino. Digital inputs, clear benchmarks, a repeatable task. If any knowledge job was going to fall to a model, it was that one.

It is now a decade later. American radiology residency programs offered a [record 1,208 positions in 2025](https://www.nrmp.org/wp-content/uploads/2025/03/Advance_Data_Tables_2025.pdf), up four percent from the year before, with vacancy rates at all-time highs. Radiology was the [second-highest-paid medical specialty in the country](https://radiologybusiness.com/topics/healthcare-management/radiologist-salary/radiology-rises-no-2-highest-paid-specialty-surpassing-cardiology-and-plastic-surgery-medscape), averaging around $520,000, up almost half from where it sat in 2015. The canary in the coal mine got a raise.

This is the part of the AI conversation I keep coming back to. Not whether the model is good. The model is good. The model often beats the radiologist on the benchmark. The interesting question is what actually happened to the human after the machine got good, because the answer keeps being the opposite of the prediction.

I want to pull on that thread in three places. The first is jobs, where the radiologist story lives. The second is data, where I think the same surprise is coming and almost nobody is positioned for it. The third is agents, where the way we are building oversight is quietly telling us something about the limits of what we made.

## The replacement frame is the wrong frame

Better scan reading did not produce fewer radiologists. It produced more scans.

When the machine makes a task faster and cheaper, we do not bank the savings and walk away. We buy more of the task. Economists have a 160-year-old name for this, the [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox), born out of coal and the steam engine. Make coal go further and a country burns more of it, not less. Make a CT scan faster to turn around and a hospital orders more of them. When hospitals went filmless in the early 2000s, [radiologist productivity for CT jumped 98 percent](https://pmc.ncbi.nlm.nih.gov/articles/PMC3043948/) inside a year. Nobody got laid off. Imaging volume per patient went up instead, because a scan that used to take three days to come back now came back the same afternoon, and a faster answer is an answer you ask for more often.

There is a second reason the radiologist did not disappear, and it matters more for the rest of us. Reading the image was never the whole job. One study found radiologists spend [only about a third of their time](https://pubmed.ncbi.nlm.nih.gov/23763878/) actually interpreting scans. The rest is talking to the other doctors, talking to the patient, deciding which scan to order, carrying the malpractice risk, supervising the people running the machines. The model took the one piece it could measure cleanly and left the radiologist holding everything that does not fit on a benchmark.

That is the shape of the thing. AI is very good at the part of a job that looks like a benchmark and very bad at the part that looks like judgment, accountability, and showing up as a person. The benchmark part was usually the smaller part. We just talked about it the most because it was the easiest part to measure, which means it was the easiest part to be afraid of.

So when someone tells you a model now beats the expert at the task, the honest follow-up is not "how long until the expert is gone." It is "what was the task actually a fraction of, and who is going to want more of it now that it is cheap." Most of the time the expert ends up busier. The predictions that aged badly all made the same mistake. They confused being good at the task with being able to do the job.

## When the data stops being the moat

Here is the thread nobody is pulling on, and I think it is the bigger one.

Right now, data has a tangible, defensible value. We treat it like oil. We protect it, we hoard it, we put it on the balance sheet. There are companies in the Fortune 1000 whose entire valuation is really a bet that they own a pile of data nobody else can get. The whole posture of the enterprise right now is protect the data at all costs, which is funny when you notice that individuals have never shared more of themselves more freely than they do right now on social platforms.

But sit with what training actually does. A model is trained on data, and once it is trained, the thing of value is the model, not the data that made it. The data was the ore. The model is the metal. We are acting like the ore stays as precious as it was on the day we found it, and I do not think it does.

Once a model has effectively learned the general shape of a domain, what is the marginal value of one more general example of that domain? It falls. Not to zero, and not evenly. But the bulk of ordinary, general-purpose data, the kind that taught the model the basics and is now thoroughly represented inside it, becomes a fraction of what it was worth when it was scarce and the model was empty.

If that is right, it has consequences that should make a lot of executives uncomfortable:

- **The moat is temporary.** A data advantage protects you only while the model still needs your data to get good. After that, you are guarding a warehouse of something the world has already learned.
- **The value moves to the edges.** What stays valuable is the data that is genuinely rare, freshly generated, or proprietary in a way no general corpus can reproduce. Live signal, not the historical pile. Your unique slice, not the part that overlaps with everyone else's.
- **Protection and value stop being the same conversation.** Plenty of data will still need protecting for privacy, compliance, and trust reasons long after it stops being a competitive asset. We blur those two ideas together today. They are going to come apart.

I am not saying data becomes worthless. I am saying its value curve is not the flat line the balance sheet assumes. It looks more like the value of a specific skill in a labor market. Scarce and well paid when few have it, ordinary once everyone, including the machine, does. A company whose worth is wholly a pile of general data is holding an asset that depreciates the moment the model finishes reading it. That is a strange thing to have bet the company on, and a lot of companies have.

## Agents needing agents is an admission, not an architecture

The third thread is the one I find myself arguing about the most lately.

The current fashion is agents supervising agents. An agent does the work, another agent checks it, a third orchestrates, and they talk to each other over some agent-to-agent protocol. People describe this as the architecture of the agentic future. I think it is closer to an admission. When you need a second agent to watch the first one because you cannot trust the first one on its own, you are not describing a capability. You are describing a limitation, and building scaffolding around it.

Think about what we actually pictured when we imagined working with AI. It was never a committee of narrow tools negotiating handoffs. It was Tony Stark talking to JARVIS. It was the Master Chief talking to Cortana. One coherent intelligence that holds the whole context, understands intent, takes responsibility for the outcome, and tells you when it is unsure. We did not dream of a swarm of segmented services passing tickets to each other. We dreamed of one capable partner.

The multi-agent oversight pattern is the gap between those two pictures, made into a product. It exists because no single agent can yet be trusted to hold the whole job, so we decompose the job into pieces small enough to verify and then spend enormous effort re-assembling them. There is real engineering value in that today. I am not dismissing it. It is how you ship something reliable on top of components that are individually unreliable. But it is a stage, not a destination, and we should be honest about which one it is.

Here is the tell. Every layer of agent-watching-agent is a layer of distrust we have formalized. The number of oversight agents is roughly a measure of how far the underlying model still is from JARVIS. As the core gets genuinely more capable, that scaffolding should get thinner, not thicker. If five years from now we have more layers of agents supervising agents than we do today, that is not progress toward the vision. That is the vision quietly receding while we get better at managing its absence.

So the question I would ask any team selling me on a multi-agent control plane is simple. Is this getting us closer to one trustworthy partner, or is it a permanent toll booth on the fact that we never got there? The first is an honest bridge. The second is a business model built on a limitation we stopped trying to remove.

## The same mistake, three times

These three threads are the same mistake wearing different clothes.

With jobs, we confused the model being good at the task with the human being unnecessary, and the human got busier. With data, we are confusing the data being valuable now with it being valuable forever, and the value is going to move while we are still guarding the old pile. With agents, we are confusing the scaffolding we built around a limitation with the architecture we actually wanted, and calling the workaround the goal.

The fix is the same in all three. Stop reasoning about the first move and start reasoning about the second one. Not "the model is good at X," but "what happens to everyone and everything around X once it is good and cheap." That second-order question is where the radiologists kept their jobs, where the next data advantage is hiding, and where the difference between a real agentic future and an expensive imitation of one is going to be decided.

The loud version of the AI story is always about what gets replaced. The interesting version, the one that has actually been right so far, is about what gets pulled forward in demand, what quietly loses its scarcity, and what we are building to paper over the parts that still do not work. Nobody stopped training radiologists. It is worth asking what else we are about to be wrong about in exactly the same way.
