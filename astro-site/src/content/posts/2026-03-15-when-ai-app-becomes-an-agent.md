---
layout: post
title: "AI in the Enterprise Is Crossing a Control Boundary"
date: 2026-03-15
categories: [tech]
tags: [ai, cybersecurity, cloud]
excerpt: "The current enterprise AI conversation is full of category mistakes. This post starts a series on how to tell the difference between an AI-enhanced app, an assistive agent, an autonomous runtime, and the security controls that should change as authority increases."
---

# AI in the Enterprise Is Crossing a Control Boundary

I've noticed a common theme in the current enterprise AI conversation: it is confused in a very specific way.

We keep mixing together very different things:

- an application with an LLM feature
- a bounded assistant helping a user
- a runtime that can retrieve, decide, and act with real authority autonomously
- a user-like agent operating across collaboration systems

Those are not the same problem. They should not get the same identity model. They should not get the same permission model. And they definitely should not get the same security conversation.

My intention here is to document some questions I've heard in the field, share the mental model I keep coming back to when I try to answer them, and sketch out control boundaries, the things security teams should care about, and how to think about modernization going forward.

## Question 1: When does an AI workload become an agent?

An AI workload becomes an agent when it stops being just a feature inside an application and starts behaving like a separate runtime with a role, its own operating boundary, and some combination of approved-source retrieval, tool use, or action-taking.

It becomes an autonomous agent when it acts with less direct human steering and takes actions with meaningful authority across systems.

It becomes an agent user when it needs a user-like persistent identity boundary because it authenticates into collaboration or productivity systems in ways that resemble a human worker, such as requiring access to email, Teams, meetings, files, calendars, or similar organization-facing systems.

That distinction matters because it changes how I think about identity, permissions, Conditional Access, audit evidence, etc.

## Question 2: Permission structure is already a mess. Do I really need to add more agent-specific identities?

Typically, applications are created with a workload identity in mind. That workload identity is usually a service principal or a managed identity. The permissions are usually attached to the host app or the compute resource and contain standing permissions.

That means a service principal answers this question:

- what non-human application can authenticate?

Agent identities answer a different one:

- how is it governed across its lifecycle?
- how does that identity authenticate, and how is privilege escalation handled?
- what types of audit logs are generated?

That is the heart of the difference.

## Question 3: Agent Taxonomy is confusing. Where do I even start?

I typically find it easiest to reason about controls as a ladder:

[[RUNTIME_CONTROL_CHART]]

### Level 0: AI-enhanced application

The host app still owns the logic, permissions, and runtime. Least privilege on the host identity matters more than agent-specific governance. CASB and app controls are the right focus here. Apply these controls to the end-user experience, not the agent, because the agent is not really a separate runtime yet.

### Level 1: Assistive agent

These workloads are typically divided into two sub-levels: Narrow Assistive and Rich Assistive. These workloads are typically grounded in a constrained source and are mostly user-led, using permissions extended on behalf of (OBO) the user. The controls that matter here tend to be your regular RBAC controls. An agent that is only fetching content should only be able to read, no need to delete. An agent that can schedule meetings needs calendar write permissions, but only to the calendar app and not all SaaS.

**Narrow Assistive**: An example would be an FAQ bot that only retrieves from a single SharePoint site.

**Rich Assistive**: An example would be a sales support assistant that gathers approved internal content, drafts account messaging, and collects transcriptions to add summaries to opportunities. The runtime has a clearer role, retrieves from multiple approved sources, and may propose actions for human review instead of taking them directly. This is still human-led, but it now needs stronger ownership, evidence, and approval boundaries.

### Level 2: Autonomous agent

This is where the runtime begins acting without direct human steering. An event triggers actions. These can range from single directive tasks that may turn into more complex steps over time. Now that the runtime is taking more actions over time, the control model has to harden materially. The workload needs to be owned, the evidence needs to be clear, and the approval boundary needs to be stronger. A mix of authentication, privilege escalation, and time-bound access to toolsets needs to be on the table.

As the agent receives a signal there may be scenarios where they can take an action with default permissions, but if they need to access a more sensitive source, we'll want to have a clear approval flow that can be audited and monitored. By nature the agent may be ephemeral, so speed of request, approval become more important.

### Level 3: Agent user

Here the workload either starts looking like a worker identity in systems such as mail, Teams, meetings, calendars, and documents, or multiple higher-authority runtimes coordinate across systems. The more they resemble a user, the more your full security estate controls should be applied.

## Question 4: Whose permissions are actually in play?

That is usually the lower-concern pattern for assistive flows because the effective permission is bounded by both app consent and user rights.

It is still not harmless. A high-privilege user plus high-privilege delegated scopes can still create meaningful risk. But the boundary is clearer.

### App-only or workload-identity access

This is the higher-concern pattern.

In the app-only model, there is no signed-in user in the access decision. The runtime acts under its own standing authority by using application permissions, app roles, RBAC, or another workload identity path.

That is appropriate in some scenarios. It is also exactly where blast radius grows.

Once the system can still act when no user is sitting there, the control model has to get stronger.

## Question 5: When RBAC and Conditional Access Need to Step Up

I keep the rule simple:

- RBAC answers: what is this thing allowed to do?
- Conditional Access answers: under what conditions is it allowed to get in?

RBAC matters as soon as the workload can touch anything important.

Conditional Access matters as soon as sign-in context or runtime risk should influence whether access is allowed.

The Microsoft docs now make an important distinction here too:

- Conditional Access for workload identities applies to service principals requesting tokens
- Conditional Access for Agent ID applies to agent identities and agent users requesting tokens for resources

That matters because service principal policies and agent policies are not exactly the same control surface.

For lower-authority assistive scenarios, delegated or OBO access plus user-scoped controls is often the cleaner design. For higher-authority runtimes that act as themselves, you need to start thinking about runtime-identity-specific Conditional Access, stronger lifecycle review, and faster disable paths.

## Question 6: What is the Difference in Governance

Service principals can absolutely be governed. But the governance is generic:

- app permissions
- RBAC assignments
- credentials
- ownership
- reviews

That still leaves a lot of questions unanswered.

Does this identity represent:

- a development-time agent?
- a published runtime?
- a blueprint artifact?
- a user-like agent identity?
- a generic application that happens to call an LLM?

Agent ID starts to answer those questions directly.

The governance overview for Agent ID is useful because it frames the problem correctly. Agent identities can be governed with sponsorship, entitlement management, access packages, lifecycle decisions, and accountability models that are meant for agents as agents, not just apps as apps.

That is the difference I think people miss. Agent ID is trying to solve agent governance, not just authentication.

## Question 7: How Is Audit Evidence Layered?

Agent-aware identity does not remove the need for runtime telemetry.

I think about four evidence layers separately:

1. Azure control-plane activity
2. Entra sign-in and token evidence
3. tool and connector telemetry
4. application-level runtime and retrieval telemetry

Both a service-principal-based workload and an Agent ID-native runtime can produce Entra and Azure evidence. But identity evidence is not the same thing as runtime evidence. When an agent calls tools through MCP servers, each server sits between the agent runtime and the downstream system. The MCP protocol defines a standard logging capability, so every connected server can produce its own audit trail. If the only evidence you have is the identity token and the application log, you have a gap between "the agent decided to act" and "the downstream system was affected."

Even with Agent ID and tool-level telemetry, you still need application-side logs to understand:

- what the agent retrieved
- which tools it called and what those servers did downstream
- why it took an action
- whether a proposed or completed action was user-approved or self-initiated

That distinction becomes even more important as the workload moves from assistive to autonomous behavior.

## Question 8: How and When Should You Modernize?

If the workload is still best understood as an AI-enhanced application, I would not modernize just to adopt a new label.

Keeping the service principal or managed identity model is reasonable when:

- the workload is still mostly an application feature
- it is predictable and tightly bounded
- managed identity already solves the real problem cleanly
- there is no meaningful need for agent-aware lifecycle governance yet

Modernization becomes more compelling when the workload starts acting like a true managed runtime.

The signs are usually obvious:

- it has a distinct purpose-built agent role
- it retrieves from governed sources across systems
- it uses tools or connectors with meaningful authority
- it needs separation between dev and published runtime identities
- it needs independent auditability from the host app
- it needs sponsorship, entitlement, or broader estate governance
- it is becoming one more hard-to-understand service principal that carries agentic behavior nobody can classify cleanly

That is the point where Agent ID stops looking like plumbing and starts looking like a governance boundary.

### A Practical Decision Rule

If I had to compress the whole argument into one rule, it would be this:

- If the workload is still primarily an application feature with generic workload identity needs, service principal or managed identity is often enough.
- If the workload is becoming a real managed agent runtime with distinct authority, lifecycle, and estate-governance needs, Agent ID is the better long-term model.

That rule is intentionally boring. It is also the one I trust most.

## Question 9: How I Would Modernize Older AI Estates

For environments that started before Agent ID and Foundry blueprints were available, I would treat modernization as a sequencing problem.

Not every old AI workload needs a blueprint tomorrow.

The better order is:

1. inventory the estate honestly
2. classify workloads by actual behavior, not marketing labels
3. identify the current identity path for each workload
4. reduce broad standing permissions on the host identity
5. separate the agent runtime from the host app where that boundary is now meaningful
6. introduce blueprints and distinct agent identities when the workload is ready to be managed as a class of agents

That last point matters.

A blueprint is not just metadata. In the current Foundry and Agent ID model, the blueprint is part of the governing template and identity creation authority for a class of agents. That becomes useful when the workload has crossed from “host app with LLM calls” into “managed runtime with its own lifecycle and control requirements.”

## Final Take

Assigning identities to AI workloads hopefully gives security teams confidence that they can apply their existing identity controls and policies to their agentic estate. We still need to deploy defense in depth because the nature of AI has dramatically increased the scale and range of AI-empowered actions available to bad actors. It has also raised the visibility and urgency of risks that already existed in the environment. The more an agent acts like a user, the more the signals that indicate user compromise become relevant. The more our reaction time needs to operate at the speed of signal rather than the speed of human review or even API control.

What I'm hoping for in the next iterations:
1. A clear way to tag agent classes. I'd like to see at a glance whether an agent is assistive, autonomous, or an agent user.
2. A way to tag agent identities as production or development. That would help separate the noise from a risk acceptance perspective and make it easier to understand which identities are actually representing risk that can affect the organization.
3. Unifying the way identities are represented. A single logical agent should have a single identity. Separating our blueprints and project identities - if you think of these as templates for onboarding, a blueprint is more similar to a job role/id from an HR SOA than it is to a specific agent runtime. So it's important to keep the identity account list for the actual runtimes separate from the templates and blueprints that help us create them.

You can only begin at the beginning. I hope this was a useful sketch of how to think about the problem and where to start when you are ready to modernize.

## References

- [Agent identity concepts in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/agent-identity)
- [Publish and share agents in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/publish-agent)
- [Security for AI agents with Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/identity-professional/security-for-ai#types-of-ai-agents)
- [Governing Agent Identities (Preview)](https://learn.microsoft.com/en-us/entra/id-governance/agent-id-governance-overview)
- [Overview of permissions and consent in the Microsoft identity platform](https://learn.microsoft.com/en-us/entra/identity-platform/permissions-consent-overview)
- [Microsoft identity platform and OAuth 2.0 On-Behalf-Of flow](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-on-behalf-of-flow)
- [Conditional Access for workload identities](https://learn.microsoft.com/en-us/entra/identity/conditional-access/workload-identity)
- [Conditional Access for Agent ID (Preview)](https://learn.microsoft.com/en-us/entra/identity/conditional-access/agent-id)