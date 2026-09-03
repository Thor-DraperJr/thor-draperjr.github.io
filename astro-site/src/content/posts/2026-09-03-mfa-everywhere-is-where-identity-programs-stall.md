---
layout: post
title: "MFA Everywhere Is Where Identity Programs Stall"
date: 2026-09-03
draft: true
categories: [tech]
tags: [technical, security, identity, zero-trust]
excerpt: "A year ago I wrote a nine-layer identity maturity framework. The part that still holds up is the ordering, and the four gates that tell you whether you have earned the next layer."
---

Programs announce "MFA everywhere" and then stop moving.

Not because anyone quit. The dashboard says 98% enrolled, the control is deployed, the compliance box is green. Meanwhile legacy protocols still accept a password, tokens issued this morning are good for eight hours no matter what happens to the device, and the admin accounts that were standing last year are still standing.

I wrote a framework about this in September 2025. Nine capability layers, a maturity ladder from L0 to L5, four pivot gates, and a list of the stall patterns I kept watching programs walk into. I am retiring the repository, so here is the part worth keeping.

## The mistake the framework was built to catch

Fragmented, control-by-control deployment. Basic MFA here, a few conditional access rules there, an access review every quarter. Each one is real work. Together they leave seams, because credential, session, privilege, and workload identity were never engineered as one stack.

The tell is what gets reported. Teams report control deployment counts. Coverage percentages, rules configured, reviews completed. Those numbers can all go up while revocation latency, resistant factor mix, privilege decay, and secret burn-down stay flat.

Deployment counts describe activity. The four numbers above describe blast radius.

## Nine layers, and why the order is the whole argument

The taxonomy starts at the credential core, human and workload, and works outward:

1. Credential core
2. Context and signals
3. Adaptive policy
4. Session and token binding
5. Continuous access evaluation
6. Authorization and least privilege
7. Privileged and just-in-time access
8. Workload and automation identity
9. Telemetry and posture

Anyone can produce a list of identity controls. The claim I was actually making is about sequence, and sequence is falsifiable.

Token binding and continuous access evaluation do not pay off until legacy suppression and device posture are already covered. That is not a preference. If a legacy protocol still accepts a password, an attacker downgrades to it and never encounters your bound token. You bought a control that the attack path routes around.

The interplay runs in both directions:

- Phishing-resistant authentication without continuous session validation still leaves replay and hijacked-token dwell time.
- Continuous session validation without least privilege means one compromised session still carries excessive standing entitlements.
- Least privilege without privileged and non-human identity management leaves static secrets and standing admin pathways intact.
- Telemetry-driven detection without the hardening layers beneath it produces noisy alerts and weak containment.

Sequencing does not mean you work one layer at a time. You advance several in parallel. It means prerequisites exist so later controls act on signal you can trust.

## The four gates

The ladder runs L0 legacy and static, L1 basic MFA, L2 contextual and conditional, L3 phishing-resistant and adaptive, L4 passwordless and continuous, L5 autonomous and integrated.

Between them sit four gates. Each one is a number, and each shrinks a different blast-radius vector:

| Gate | Threshold | What it buys |
| --- | --- | --- |
| Legacy suppression | Under 2% legacy auth | Downgrade surface nearly gone, telemetry unified |
| Resistant coverage | 70% or more phishing-resistant primary | Phishing and prompt-bombing collapse as reliable entry |
| Standing admin | Zero standing privileged accounts | Compromise stops inheriting permanent rights |
| Containment | Under 2 minutes to revoke | Session hijack stops being an all-day event |

Gates are the honest version of a maturity model. "We are at L3" is a narrative. "Legacy auth is at 1.4%" is a fact somebody can check.

Reaching a gate is also what makes the next investment worth funding. Once resistant coverage is past 70%, reducing friction elsewhere is a defensible decision rather than a gamble.

## The four ways it goes wrong

These are the patterns I kept seeing, with the correction for each.

**MFA plateau.** Broad OTP and TOTP enrollment masks low phishing-resistant adoption. The enrollment number looks finished. Track resistant success rate separately and set per-persona targets, because a developer and a call-center agent do not have the same achievable ceiling.

**Legacy protocol bypass.** Modern auth is deployed and legacy is still listening. Everything above it is theater until that path closes.

**Governance theater.** Quarterly bulk access reviews that produce very little entitlement reduction. Reviewers approve in batches because the volume makes real evaluation impossible. Shift to drift detection and delta-focused attestation so a human only sees what changed.

**Secret sprawl and standing admin.** Hard-coded and pipeline secrets accumulate faster than anyone retires them, and long-lived privileged accounts persist because removing them is disruptive. Central inventory plus managed identity issuance with a burn-down commitment for the first. Just-in-time elevation with time-bound break-glass and peer approval for the second.

Each of these fails the same way: the metric that is easy to move gets moved, and the metric that describes exposure does not.

## What I would keep and what I would drop

The layer ordering holds up. So do the gates, because they are checkable.

What I would cut is the deep-dive documentation I planned and never wrote. Five placeholder files sat in that repository for a year. The framework was complete as an argument and permanently incomplete as a product, and I left it public-adjacent anyway.

That is the actual reason it is being retired. A repository is a claim that something is maintained. This one made a claim I stopped backing in September 2025.

The argument does not need the repository. It needed a page like this one.

## The one thing to take

If you are running an identity program right now, pick the gate you are closest to and get the number. Not the maturity level. The number.

Legacy auth percentage, phishing-resistant primary coverage, count of standing admin accounts, minutes to revoke a session. If you cannot produce all four this week, that gap is the finding, and it is a more useful place to start than any framework someone hands you.

Thanks for reading.
