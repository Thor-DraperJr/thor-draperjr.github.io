---
layout: post
title: "Digital Sovereignty: A Three-Level Rubric"
date: 2026-09-22
categories: [tech]
tags: [ai, automation, ownership, home-assistant, open-source]
draft: false
excerpt: "A three-level rubric for taking more control of the technology I own, with Reolink as a stepping stone and AI helping with the work."
---

My Reolink camera is a Level 2 resource. I'm good with that.

Moving away from Blink is part of a bigger effort to take more ownership of the technology in my house. I want fewer required subscriptions, more local control, and a way to keep things working without depending entirely on the company that sold them.

**Digital sovereignty** is the direction I'm working toward: practical control over how my technology runs, where my data lives, and what happens when I want to leave a vendor.

AI makes the work more approachable. Reading documentation, configuring Home Assistant, and troubleshooting an integration take effort. Having help with that work makes alternatives worth considering that I might have passed over before.

## The three levels

I use this rubric for the product or software layer I'm evaluating.

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

At **Level 1**, I have to keep paying for the features I need, and the vendor controls the proprietary software. At **Level 2**, I've removed that payment requirement. At **Level 3**, I also gain the rights to inspect, modify, and redistribute the software.

**Required** matters. Choosing to pay for support, hosting, or development shouldn't lower a product's standing when I can still operate it independently. Hardware, power, backups, and my time still cost something.

These levels measure payment dependence and software freedom. A subscription-free product can still depend on a cloud service that disappears. Alongside each level, I want two short notes:

- **Remaining dependency:** What still requires the vendor?
- **Exit path:** What can I keep using, export, or replace?

Level 2 is legitimate progress. Level 3 is the preferred direction when it meets my needs and I can sustain it.

## What FOSS means

**FOSS means Free and Open Source Software.** The movement is about giving people the freedom to use, understand, change, and share the software they rely on.

The Free Software Foundation's [definition](https://www.gnu.org/philosophy/free-sw.html) describes four essential freedoms: run the program for any purpose, study and change it, redistribute copies, and share modified versions.

Here, *free* refers to freedom. FOSS can be sold. A free download can still be proprietary. The free-software and open-source traditions have different emphases, but overlap heavily; the Open Source Initiative's [definition](https://opensource.org/osd) also requires rights beyond simply viewing the code.

That's what makes Level 3 valuable. Someone besides the original company can legally maintain and improve the software. Those rights give me options, even when I hire someone else to do the work.

## Reolink is a useful stepping stone

Home Assistant documents a [local Reolink integration without a required cloud account or subscription](https://www.home-assistant.io/integrations/reolink/). That fits the Level 2 direction I want. The camera's proprietary firmware remains a limitation.

- **Remaining dependency:** Vendor firmware and future security updates.
- **Exit path:** Supported local recording, viewing, and alternative clients, verified against the exact model and the features I use.

Connecting it to Home Assistant doesn't make the camera open source. A Level 3 controller and a Level 2 camera can be a perfectly reasonable combination.

If Reolink disappeared, keeping a local video feed would be useful. Fixing a future firmware vulnerability would be a different challenge. I'm accepting that limit while improving on the arrangement I had before.

The integration still needs testing in my setup. Two-way audio isn't supported through the Home Assistant integration, and battery models and hub requirements need checking. **Feature parity means preserving the jobs my household needs**, rather than declaring success because the new dashboard looks good.

One qualification: [compatible Blink setups already offer subscription-free local storage](https://support.blinkforhome.com/using-your-camera/blink-storage-options). Score the configuration, not the brand. Someone else may reach Level 2 without buying another camera.

## What I've already put in place

**Home Assistant: Level 3 at the controller layer.** I already run this [open-source controller](https://www.home-assistant.io/). It gives me a common place to manage devices without a required controller subscription. The connected equipment keeps its own dependencies.

**LIFX and Lutron: keep the useful hardware.** My lights and fan controls have documented local paths through [LIFX](https://www.home-assistant.io/integrations/lifx/) and [Lutron Caséta](https://www.home-assistant.io/integrations/lutron_caseta/). That's worth using before replacing working equipment. Local control alone doesn't establish open-source firmware.

**Obsidian: Level 2 for local notes.** The editor is [free to use](https://obsidian.md/license) under a [proprietary license](https://obsidian.md/terms). My [Markdown files stay local](https://help.obsidian.md/Files+and+folders/How+Obsidian+stores+data) and can open in another editor. The remaining dependency is the app; the exit path is ordinary files. Optional paid services and plugin-specific features need separate consideration.

**Ecobee and Google: cloud dependencies remain.** My [ecobee integration](https://www.home-assistant.io/integrations/ecobee/) uses cloud polling. My manual [Google Assistant connection](https://www.home-assistant.io/integrations/google_assistant/) still uses Google's cloud. Putting everything in one dashboard doesn't remove those dependencies. I haven't completed an offline and recovery test for every device.

## Even a TV antenna counts

A compatible TV and antenna can receive [free over-the-air broadcasts](https://www.fcc.gov/consumers/guides/antennas-and-digital-television) without a streaming subscription or internet connection. Sometimes the useful improvement is simpler hardware.

The antenna itself has no software to classify. Apply that question to the tuner or recorder, where relevant. Check reception and the channels you actually watch before canceling anything. A network tuner or DVR can introduce new app or guide-data dependencies.

It belongs in the same conversation: what job am I paying for, and can something I own do it?

## Two targets I'd consider next

These are possibilities, not installations I've already completed.

**Frigate for the recording layer.** [Frigate](https://docs.frigate.video/) offers local recording and object detection under an [MIT license](https://github.com/blakeblackshear/frigate/blob/dev/LICENSE). Its core self-hosted software could be a Level 3 addition if I need more than the camera provides. It would also add storage, compute, and maintenance work. The camera firmware would remain separate.

**An ESPHome-based sensor.** [ESPHome](https://esphome.io/) supports locally controlled devices with its own code under [GPLv3 and MIT licenses](https://github.com/esphome/esphome/blob/dev/LICENSE). I'd start with a supported, low-voltage temperature sensor and verify that I can rebuild and reinstall its firmware. The board and any proprietary dependencies still need checking. Heating and locks can wait.

## Put AI to work on one move

I'd start with one subscription or device and give AI a bounded assignment:

> Identify its level, remaining dependency, and exit path. List the features I use. Propose one reversible improvement, help me configure it, and test the result. Ask before buying equipment, flashing firmware, deleting data, or canceling a subscription.

Keep the old arrangement until the replacement survives normal use, a restart, and a recovery test. Someone else in the household should be able to use it without opening my AI conversation.

Count hardware, power, storage, backups, AI fees, and maintenance time before claiming savings. More control may be worth an extra cost, but I want to make that decision deliberately.

I'm building this gradually. Reolink can be Level 2. Home Assistant can be Level 3. Useful equipment can stay while I improve how I control it.

Pick one thing you depend on, identify its level, and work out the next reasonable step. That's how I'm approaching digital sovereignty.
