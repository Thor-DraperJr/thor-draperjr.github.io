---
layout: post
title: "Digital Sovereignty: A Three-Level Rubric"
date: 2026-09-22
categories: [tech]
tags: [ai, automation, ownership, home-assistant, open-source]
draft: false
excerpt: "My progression toward digital sovereignty: subscription and closed source, no subscription and closed source, then no subscription and open source."
---

I'm moving away from Blink and toward Reolink because I want more ownership of the cameras I buy.

The recurring bill is the first thing I want to remove. The longer-term question is how much control I have over the equipment after I buy it. Can I use another app? Keep it working without the vendor's cloud? Change the software if the company stops maintaining it?

**Digital sovereignty** is the direction I'm working toward. In my home, that means having practical control over the technology I depend on: how it runs, where the data lives, and what happens when I want to leave a vendor.

I'm getting there gradually. Home Assistant is already part of my setup. Some of the equipment connected to it still depends on proprietary software or cloud services. Reolink is a step I'm pursuing, with its own limitations. I don't have a fully open-source home, and replacing everything at once would miss the point.

AI makes the work more approachable. It can help me read documentation, configure integrations, and troubleshoot the parts that used to turn a small improvement into a weekend project. I want to use that help to move up a simple ladder.

## My digital sovereignty rubric

These are the three levels I'm using to evaluate a product or software layer. **No subscription** means no required recurring payment for the features I intend to keep. It doesn't mean hardware, electricity, storage, or maintenance are free.

<div role="region" aria-label="Digital sovereignty rubric" tabindex="0" style="overflow-x:auto; margin:1.5rem 0; border:1px solid var(--line); border-radius:var(--radius-md);">
<table style="width:100%; min-width:300px; border-collapse:collapse; margin:0; text-align:left; font-size:1rem; line-height:1.5;">
<caption style="text-align:left; padding:1rem; font-weight:700;">Three levels of digital sovereignty</caption>
<thead style="background:rgba(20,33,47,0.06);">
<tr><th scope="col" style="padding:0.75rem;">Level</th><th scope="col" style="padding:0.75rem;">Subscription</th><th scope="col" style="padding:0.75rem;">Source code</th></tr>
</thead>
<tbody>
<tr style="border-top:1px solid var(--line);"><th scope="row" style="padding:0.75rem;">Level 1</th><td style="padding:0.75rem;">Required</td><td style="padding:0.75rem;">Closed source</td></tr>
<tr style="border-top:1px solid var(--line);"><th scope="row" style="padding:0.75rem;">Level 2</th><td style="padding:0.75rem;">Not required</td><td style="padding:0.75rem;">Closed source</td></tr>
<tr style="border-top:1px solid var(--line);"><th scope="row" style="padding:0.75rem;">Level 3</th><td style="padding:0.75rem;">Not required</td><td style="padding:0.75rem;">Open source</td></tr>
</tbody>
</table>
</div>

**Level 1: subscription and closed source.** Keeping the required features means continuing to pay, and I don't have the software freedoms needed to maintain an alternative myself. My first question is whether I can keep those features without the subscription.

**Level 2: no subscription and closed source.** I've removed the recurring payment, but the vendor still controls the proprietary software. This can be a worthwhile place to stop, especially when the product works locally and lets me export my data.

**Level 3: no subscription and open source.** I can run the software without a required subscription, and its license gives me rights to inspect, modify, and redistribute it. I have more options for maintaining it myself or getting help from someone besides the original vendor.

This is my purchasing and migration rubric, rather than a universal certification. Open-source software can have paid hosting and support. A no-fee product can still depend on a vendor's cloud. I record those dependencies alongside the level instead of pretending the level answers every question.

I also name the layer I'm evaluating. **A Level 3 controller connected to a Level 2 camera doesn't turn the camera into Level 3 equipment.** The app, controller, device firmware, and hardware design can have different degrees of openness.

## What the FOSS movement is about

**FOSS means Free and Open Source Software.** The movement is about giving people the freedom to use, understand, change, and share the software they rely on. The community can improve it together, and the original developer doesn't have to be the only party capable of maintaining it.

The Free Software Foundation's [definition](https://www.gnu.org/philosophy/free-sw.html) describes four essential freedoms:

- Run the program for any purpose.
- Study how it works and change it.
- Redistribute copies.
- Distribute modified versions so other people can benefit.

Here, *free* refers to freedom. FOSS can be sold, and people can charge for support or hosting. Paying a developer doesn't make software proprietary. Downloading an app for free doesn't make it FOSS.

The free-software and open-source traditions overlap heavily, with different philosophical emphasis. Free software emphasizes users' freedoms; the Open Source Initiative sets out [licensing requirements](https://opensource.org/osd) that include source availability, redistribution, and permission for derived works. A public code repository with restrictive terms doesn't automatically qualify.

That distinction explains why Level 3 matters to me. Someone other than the original company can legally study and improve the software. Whether anyone has the time and skill to do that is a separate question. Open source creates options; maintenance still takes work.

## Where my setup is today

I'm building on equipment I already own. The useful story is the movement between these levels, including the pieces that haven't moved yet.

### Home Assistant: Level 3 at the controller layer

[Home Assistant](https://www.home-assistant.io/) is open-source home automation focused on local control. I already run it as the common controller for devices that previously lived in separate systems.

That gives me an open foundation I can configure and maintain without a required controller subscription. It doesn't guarantee that every connected device works offline. Each integration still has its own requirements.

### LIFX and Lutron: keep useful hardware, improve the control path

My setup includes LIFX lights and Lutron Caséta lighting and fan controls. Home Assistant documents [LIFX as Local Polling](https://www.home-assistant.io/integrations/lifx/) and [Lutron Caséta as Local Push](https://www.home-assistant.io/integrations/lutron_caseta/).

Those are useful existing paths toward subscription-free local control. I'm treating the devices as Level 2 candidates, rather than claiming their firmware is FOSS because an open-source controller can operate them. Replacing working lights just to make the inventory look more open would need a better reason.

### Obsidian: Level 2 can still give me a useful exit

I already use Obsidian for notes. Its [core application is free to use](https://obsidian.md/license), but its [proprietary license](https://obsidian.md/terms) doesn't grant the freedoms of FOSS. Its optional paid services are separate from local editing.

The part I value is that my notes are [local Markdown files](https://help.obsidian.md/Files+and+folders/How+Obsidian+stores+data). Another editor can read them. For the core local-note workflow, this is a useful Level 2 example: proprietary software with a practical way to leave. Plugin-specific features would need their own migration check.

### Ecobee and Google: dependencies I still need to account for

My thermostat currently uses Home Assistant's [ecobee integration](https://www.home-assistant.io/integrations/ecobee/), which is classified as Cloud Polling. My manual [Google Assistant connection](https://www.home-assistant.io/integrations/google_assistant/) avoids requiring the optional Home Assistant Cloud subscription for that connection, but still uses Google's cloud.

Neither becomes independent of its vendor just because it appears in my dashboard. The configuration review wasn't a billing audit, so I'm leaving unverified subscription details unscored. The cloud dependencies are already clear enough to put on the improvement list.

These observations come from my current configuration. I haven't disconnected the house or completed an outage and recovery test for every device. Installed, documented, and tested are different states.

## Reolink: the Level 2 step I'm pursuing

Moving away from Blink gives me a concrete place to apply the rubric. I want useful recordings, viewing, and alerts without an ongoing camera subscription.

There is an important qualification: [Blink already supports subscription-free local clip storage](https://support.blinkforhome.com/using-your-camera/blink-storage-options) on compatible setups. A brand isn't permanently assigned to one level. A subscription-dependent Blink workflow fits Level 1; a suitable no-subscription configuration may already meet Level 2. Canceling a plan and replacing hardware are separate decisions.

Reolink interests me because Home Assistant documents a [local integration path without a cloud account or subscription](https://www.home-assistant.io/integrations/reolink/). I'm evaluating it as a Level 2 step. I haven't established an open, independently maintainable firmware path for the camera, and integrating it with Home Assistant wouldn't create one.

If Reolink disappeared, a working local connection would be valuable. Fixing future firmware vulnerabilities would remain a different problem. I want that limitation visible instead of claiming complete sovereignty because I removed a bill.

The Home Assistant inventory for this article didn't show a Reolink integration, so this remains a direction in progress rather than a completed migration. Before calling it successful, I'd test the exact camera and the features we use. The integration currently lacks two-way audio, and battery models and hub requirements need model-specific checks.

**Feature parity means keeping the jobs my household needs.** Moving up a level while losing a required feature needs an explicit trade-off.

## Even a TV antenna belongs here

An antenna is a useful reminder that more control can come from simpler equipment. A compatible TV and antenna can receive [free over-the-air broadcasts](https://www.fcc.gov/consumers/guides/antennas-and-digital-television) without a streaming subscription or internet connection.

The passive antenna itself has no software to classify as open or closed source. I'd apply the software question to the tuner or recorder, where relevant, and mark it not applicable for the antenna. Forcing every object into Level 3 would make the rubric less useful.

The practical test is whether I can receive the stations I actually watch. The [FCC's reception maps](https://www.fcc.gov/media/engineering/dtvmaps) are a starting point, not proof of reception inside my house. An antenna won't replace programming that isn't broadcast locally. Adding a network tuner or DVR also means checking for new app, guide-data, or subscription dependencies.

I haven't established an antenna installation in this inventory. It belongs in the decision framework without becoming an invented part of my setup.

## Two possible next steps toward Level 3

I don't need a catalog of applications to install. I'd start with two candidates close to what I'm already doing.

### 1. Frigate for the recording layer

[Frigate](https://docs.frigate.video/) provides local video recording and object detection and uses an [open-source MIT license](https://github.com/blakeblackshear/frigate/blob/dev/LICENSE). Its core self-hosted software is a possible Level 3 recording layer if the camera's own features don't meet my needs.

That would still leave the camera firmware as a separate dependency. It would also add storage, compute, and maintenance work. I'd test one supported camera first, then check recordings, alerts, playback, and recovery before expanding. This is a candidate, not an installed system I'm claiming to use.

### 2. An ESPHome-based sensor for the device-software layer

[ESPHome](https://esphome.io/) lets people build and configure devices that communicate locally with Home Assistant. Its own code is released under [GPLv3 and MIT licenses](https://github.com/esphome/esphome/blob/dev/LICENSE).

A simple, supported temperature sensor would be a reasonable experiment in controlling more of the device software. I'd check the exact board, dependencies, and ability to rebuild and reinstall the firmware. ESPHome's open code doesn't establish that every chip, vendor library, or hardware design is open.

I'd start with a low-voltage, noncritical sensor. Heating, locks, and safety equipment can wait. This is another target to evaluate, not something I've already added.

## Where AI earns its place

FOSS gives me permission to do more with software. AI can help me do some of the work that permission makes possible: understand a configuration, inspect code, write a small integration, or interpret a failure log.

For a migration, I'd give it a bounded assignment:

> Identify the product and software layer. Place it in Level 1, 2, or 3 using its required fees and license. Mark unknowns. List the features I use and the cloud dependencies that remain. Propose one reversible improvement, then help me test it and document recovery. Ask before purchasing, flashing firmware, deleting data, or canceling a subscription.

I'd keep the old arrangement until the replacement passes normal use, restart, and recovery checks. Someone else in the household should be able to use it without opening my AI conversation.

The savings also need to survive an honest cost comparison. Hardware, storage, power, backups, AI fees, and my maintenance time can exceed the subscription I removed. Sometimes the extra control is worth paying for. I want to know which decision I'm making.

My progression is straightforward: move from **subscription and closed source**, to **no subscription and closed source**, and toward **no subscription and open source** where it makes sense.

A Level 2 improvement is still progress. Level 3 is a direction, with the remaining dependencies written down. I want each addition to leave me with more control than I had before.
