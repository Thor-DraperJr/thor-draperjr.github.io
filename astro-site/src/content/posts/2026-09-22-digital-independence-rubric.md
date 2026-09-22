---
layout: post
title: "The Digital Independence Rubric"
date: 2026-09-22
categories: [tech]
tags: [ai, automation, ownership, home-assistant]
draft: false
excerpt: "A practical rubric for using AI to replace recurring subscriptions, keep the features you use, and take more ownership of your digital life."
---

I'm moving away from Blink and toward Reolink because I want more ownership of the cameras I buy.

I want to record video, see what's happening, and keep useful footage without another recurring bill. I'm willing to put in some work to get there. With AI helping me read documentation, configure software, and troubleshoot, that work looks more reasonable than it used to.

Reolink is an imperfect example, which makes it a useful one. Connecting a camera to Home Assistant doesn't give me control over its firmware. If the manufacturer disappears, keeping today's features working and fixing tomorrow's security problems are different challenges.

I'm comfortable making progress before I solve all of that.

My first step is to replace subscriptions with products I can run, while keeping the features my household actually uses. Then I want to reduce the dependencies that remain.

Start with one recurring bill, list the jobs it buys you, and check whether equipment you already own can do them without the plan. Subscription exit is the first objective. Cancellation comes after testing.

Here's the rubric I'm using to separate a useful improvement from an expensive new hobby.

## Start with the bill and the job

Before buying replacement hardware, write down what you're paying for.

For a camera, that might be recorded clips, person detection, remote viewing, or enough history to find something that happened yesterday. A product comparison won't tell you which of those your family will miss.

**Feature parity means preserving your required jobs.** It doesn't require duplicating every button in the old app. A missing feature still needs an explicit decision, rather than disappearing from the comparison because the new setup is more interesting.

There's a correction worth making in my own camera example: Blink already offers subscription-free local clip storage with compatible cameras and a Sync Module 2 or XR. Its [storage documentation](https://support.blinkforhome.com/using-your-camera/blink-storage-options) explains those options. Leaving Blink and canceling a subscription are separate decisions. Someone whose needs are met by that configuration may not need a new camera at all.

Reolink interests me because of the local integration path. Home Assistant documents [local operation without a cloud subscription or account](https://www.home-assistant.io/integrations/reolink/), with support that depends on the model and configuration.

That distinction matters. Removing a bill is the first improvement. Removing a required vendor service is another.

## Six tests for digital independence

I want to know what I can keep doing when something outside my control changes.

For each test, record **failed, unknown, documented, or tested**. Documented means a credible source says the capability exists. Tested means it worked in your setup, with the date and result recorded. Don't turn a promising specification into a completed migration.

1. **Payment: can I stop paying and keep my must-have features?**

   Test those features without a paid plan or temporary trial.

2. **Local operation: what works when the internet is unavailable?**

   Run core tasks on the local network during a controlled outage test. Identify which jobs deliberately require internet access.

3. **Replaceable software: can I use another client or controller?**

   Try an alternative through a documented protocol or interface. Name the features it can't provide.

4. **Portable data: can I take my records somewhere else?**

   Export files, metadata, and configuration, then open or import them in another system. A download button alone doesn't establish portability.

5. **Recovery: can the household recover when my setup breaks?**

   Restore a backup. Then have another person follow the operating instructions and use the fallback. These are separate checks.

6. **Long-term support: what happens when updates stop?**

   Check whether source code, build instructions, and a credible maintainer exist for the software and firmware you depend on. Where they don't, document how you'll contain or replace unsupported equipment. Today's working connection can't prove indefinite security support.

I wouldn't add these into a single score. A camera that exports beautiful files but misses required recordings still fails its job. An open-source application without a recoverable backup can still lose the only copy of your data.

The first test sets my starting point. The remaining tests show how much independence I've actually gained. I can accept a known limitation. I don't want to mistake it for a solved problem.

## Put the camera through the tests

For the Blink-to-Reolink move, I'd write the acceptance list before choosing a model. For each item, specify where it must work: the vendor app, Home Assistant, another local client, or a remote connection.

- Can everyone who needs access open the live view?
- Are daytime and nighttime recordings useful?
- Do the detection events I care about trigger reliable alerts?
- Can I find yesterday's clip and export it to an ordinary file?
- Does local recording continue without internet access?
- Do viewing and notifications work away from home through the remote-access arrangement I've chosen?
- If I need two-way talk, where does it work?
- After a restart or storage failure, can I recover without rebuilding the setup from memory?

That two-way-talk question is consequential. The current [Reolink integration documentation](https://www.home-assistant.io/integrations/reolink/) says Home Assistant does **not** support two-way audio through this integration. Battery cameras, hub requirements, hardware revisions, and unsupported models also need checking. An always-open live view can keep a battery camera awake and consume its battery.

"Works with Home Assistant" needs more detail before it becomes "replaces my current experience."

I would start with the camera's supported recording and detection features. If I later need a separate recorder or local object detection, [Frigate](https://docs.frigate.video/) is an option designed for that job. It also brings compute, storage, configuration, and maintenance requirements. Installing it before I know I need it would make the migration harder to judge.

The vendor-disappearance test stays separate. A working local camera gives me a useful continuation path. Proprietary firmware leaves a limit on what I can maintain myself. I would document that limit, restrict unnecessary network access, and plan for eventual replacement. Continuing to produce video isn't sufficient evidence that an unsupported device remains safe to use indefinitely.

## What my Home Assistant setup says about the rubric

My current setup is a mixture of local control and cloud dependencies.

A read-only inventory for this article found LIFX lights, Lutron Caséta lighting and fan controls, an ecobee thermostat and sensor, a Roomba, and Google integrations. It did not show an installed Reolink integration. The camera move is the direction I'm taking, rather than a finished migration I'm claiming to have tested.

The existing equipment is a better starting point than a shopping list:

- **Keep and integrate the local-capable hardware.** Home Assistant classifies [LIFX](https://www.home-assistant.io/integrations/lifx/) as Local Polling and [Lutron Caséta](https://www.home-assistant.io/integrations/lutron_caseta/) as Local Push. These are documented local-control paths. Replacing working lights just to make the hardware list look more open would need a better justification.
- **Name the cloud dependency that remains.** My thermostat is using the [ecobee integration](https://www.home-assistant.io/integrations/ecobee/), which Home Assistant classifies as Cloud Polling. Putting its controls beside my lights doesn't make that connection local. I'd investigate a supported local path for the exact thermostat before considering replacement.
- **Separate local operation from onboarding.** The [Roomba integration](https://www.home-assistant.io/integrations/roomba/) describes local control, but setup requires device credentials and has model-specific limitations. Initial setup, everyday operation, and recovery after a reset deserve separate checks.
- **Keep convenience dependencies visible.** My Google Home connection uses the manual [Google Assistant integration](https://www.home-assistant.io/integrations/google_assistant/). That offers a route without the optional Home Assistant Cloud subscription. It still uses Google's cloud and requires setup and maintenance.

These are observations about configuration and documented capabilities. I didn't disconnect the house or run recovery tests for this article. Those boxes remain untested.

The useful lesson is that ownership can improve while the hardware stays the same. Home Assistant gives me a place to bring controls together. Each integration still needs its own dependency check.

## Even a TV antenna counts

A digital TV antenna belongs in this conversation. If the job is watching local broadcast television, an antenna connected to a compatible TV can provide it without a streaming subscription or an internet connection. The [FCC's antenna guide](https://www.fcc.gov/consumers/guides/antennas-and-digital-television) explains free over-the-air reception and the equipment considerations.

That's a useful check on my instinct to solve everything with another application. Sometimes more independence comes from a simpler piece of hardware.

Apply the same feature-parity test. Which local stations do you actually receive? Are they reliable from the room where you watch? Does the household need recording, playback on several TVs, or programming that isn't broadcast locally? An antenna won't replace a paid service whose must-have content is elsewhere. If you add a network tuner or recorder, check its app, guide-data, and subscription dependencies separately.

**Give AI the research work:** help interpret the [FCC's reception maps](https://www.fcc.gov/media/engineering/dtvmaps), compare antenna requirements, and build a channel-by-channel test list. Those maps predict reception; they don't establish what works inside your house. Placement, terrain, buildings, and equipment still matter.

Direct reception removes the streaming account from that viewing path. You still depend on broadcasters, reception, and working equipment. That's a meaningful improvement with clearly defined limits, which is exactly what this rubric is meant to recognize.

## The common apps I'd examine next

The same rubric applies beyond the smart home. These are candidates to evaluate, not a claim that I've installed them all or that every paid service has a drop-in replacement.

### Personal notes: local Markdown

If a Notion or Evernote subscription mainly buys you personal text notes, look at ordinary Markdown files. I already use Obsidian; its [storage model](https://help.obsidian.md/Files+and+folders/How+Obsidian+stores+data) keeps notes as local files that other editors can read.

The durable asset is the folder of notes. Don't make portability depend on a complicated collection of plugins. Shared workspaces, database behavior, and collaboration need their own comparison; [Obsidian Sync and Publish](https://obsidian.md/pricing) are optional paid services.

**Give AI the migration work:** plan the export, map folders, propose link repairs, and compare note and attachment counts. Preserve the untouched export. Start here if you want a relatively small, reversible project.

### Scanned documents: Paperless-ngx

If you're paying to make household documents searchable, [Paperless-ngx](https://docs.paperless-ngx.com/) offers local document storage, OCR, tagging, and searchable archives while retaining originals.

That can replace a specific scanning or archiving expense. It doesn't automatically replace your scanner, electronic-signature workflow, or every PDF editing feature.

**Give AI the setup work:** configure a scan-to-folder process, select OCR languages, and draft organization rules for a small test batch. Check important dates and amounts yourself. Keep sensitive documents out of an external AI service unless you've deliberately chosen to send them there.

### Photo storage: Immich

[Immich](https://docs.immich.app/features/mobile-backup) is worth evaluating for the photo-library portion of Google Photos or iCloud Photos. Test uploads, browsing, family access, and representative videos on your actual phones.

Don't count it as a replacement for a full iPhone backup. [Apple's device backup](https://support.apple.com/en-us/108770) also covers settings and app data. Immich's [backup instructions](https://docs.immich.app/administration/backup-and-restore) require attention to both media files and the database; a database backup contains no photos or videos.

**Give AI the verification work:** prepare import checks, compare inventories, and document a restoration procedure. Family photos are a reason to keep the old service longer, not to rush the cancellation.

### Household budgeting: Actual Budget

[Actual Budget](https://actualbudget.org/docs/transactions/importing/) supports transaction-file imports, including common formats such as CSV, OFX, and QFX. That makes it a candidate for replacing a budgeting subscription if its workflow fits.

Bank connections deserve a separate cost check. For example, Actual's [SimpleFIN integration](https://actualbudget.org/docs/advanced/bank-sync/simplefin/) requires a SimpleFIN subscription. "Self-hosted" doesn't mean every dependency is free.

**Give AI the reconciliation work:** map file columns, identify date-format problems, and propose category rules. Use redacted samples and keep bank credentials out of prompts. Verify balances against statements before trusting the result.

### Files: Syncthing or Nextcloud

For syncing folders between your own devices, [Syncthing](https://docs.syncthing.net/users/faq.html) is worth a look. For a central file service, [Nextcloud](https://docs.nextcloud.com/server/stable/user_manual/en/files/access_webdav.html) is another candidate.

Choose based on the job, including which phones and computers must participate. Neither option creates free storage somewhere outside your house. Syncthing propagates deletions and explicitly warns that it isn't a good backup application. Nextcloud has its own [data, database, and configuration backup requirements](https://docs.nextcloud.com/server/stable/admin_manual/maintenance/backup.html).

**Give AI the test work:** configure disposable folders, demonstrate conflict and deletion behavior, and help verify an independent backup before moving important files.

### Owned media: Jellyfin

[Jellyfin](https://jellyfin.org/) can serve a collection you already own without a media-server software subscription. It doesn't provide the Netflix, Disney+, or Spotify catalog.

Playback on the household's actual devices is the acceptance test. [Transcoding](https://jellyfin.org/docs/general/post-install/transcoding/) can introduce hardware requirements when those devices can't directly play a file.

**Give AI the troubleshooting work:** inventory formats, organize filenames, and interpret playback logs. If the TV becomes harder to use, the replacement hasn't passed yet.

## Count the work before calling it savings

I haven't established a savings total for my camera move. A subscription price alone wouldn't be enough to calculate one.

Here's the comparison I'd make over a chosen ownership period:

**Net cash savings = avoided subscription charges − new hardware, storage, power, backup, hosting, and AI costs.**

Then account for setup and maintenance time separately. Use incremental costs: running another small service on equipment you already have is different from buying a server for one app. Count shared costs once, and check whether canceling one feature actually reduces a bundled bill.

For a break-even estimate, divide the up-front migration cost by the monthly savings after new recurring expenses. If those monthly savings are zero or negative, there isn't a cash break-even under those assumptions. More control might still justify the move. Call it that.

Paying for dependable off-site backup or convenient remote access can be a reasonable choice. I want the payment to be a choice with an exit path.

## Give AI a bounded migration

AI can help with the work that used to make these projects feel unreasonable: reading several sets of documentation, translating configuration, writing a small import script, and explaining a failure log.

I want it to leave behind a system I can operate without reopening the conversation.

Here's the assignment I'd give it:

> Help me replace this subscription. First identify my must-have features, exact devices, and current cost. Use official documentation to compare a replacement. Propose a reversible pilot, including backup, security, total cost, and recovery. Show me the tests and their results. Ask before deleting data, canceling service, buying hardware, or exposing anything to the internet. Leave instructions another person can follow.

Start with one service. Keep the old one during the pilot. Test normal use, then test the failures you care about. Restore a backup. Have someone else in the household try the replacement. Cancel only after the required jobs pass and the remaining limitations are accepted.

I'd leave self-hosted email, password-vault infrastructure, and safety-critical home controls out of a beginner's first round. That's my risk judgment: the cost of getting recovery wrong is too high for a starter project.

I also don't want a paid AI agent required every time a light turns on or a camera records. Use AI to help build and maintain the system. Keep routine functions in dependable software, and keep credentials out of the chat.

Pick one recurring bill. Write down the job it buys you. See whether AI can help you keep that job while taking more ownership of the system behind it.

That's where I'm starting.
