---
layout: post
title: "I Audited My VS Code Agent Setup"
date: 2026-07-30
categories: [tech]
tags: [technical, ai, software-development, leadership]
draft: false
excerpt: "A review of VS Code's newer agent features changed how I think about instructions, portable skills, Agent Host sessions, subagents, hooks, and approval boundaries."
---

I had strong agent workflows inside individual repositories. Each `.github` folder held its own team: instructions, prompts, and specialists tuned for that codebase. This site has editorial, visual, and claims roles that belong here.

The missing piece was the workbench around those repositories. A new project did not inherit how I wanted assumptions handled, changes scoped, evidence gathered, or consequential actions approved. My global setup had reach: tools, MCP servers, and personal skills. It did not yet have a portable operating model.

Modernizing the coding workbench means building that model around the chat surface. The model still matters. So do the guidance it inherits, the workflows it can reuse, the context it keeps separate, the checks it runs, and the decisions it returns to me.

[[AGENT_HARNESS_LAYERS]]

The layers answer different workbench questions. Instructions establish defaults. Skills make a good workflow reusable. Agents and subagents separate roles and context. Hooks can make a check deterministic. Sessions and worktrees isolate changes. Approvals preserve a visible owner for consequential actions.

## Four Changes That Modernized My Workbench

### 1. I made operating defaults portable

The useful distinction is between profile instructions and workspace instructions. My user-level file travels with me: read the repository rules first, state uncertain assumptions, preserve unrelated changes, make a scoped edit, run the narrowest meaningful validation, and report remaining uncertainty. Workspace instructions describe the codebase in front of the agent: architecture, framework conventions, commands, domain boundaries, and specialist roles.

The two layers reinforce each other. Every new repository starts with a baseline for evidence and scope. The repository can then be specific without trying to restate how I work in every `.github` folder. That gives the agent both continuity across projects and the local context required to make a correct change.

### 2. I turned successful work into portable skills

[Agent Skills](https://code.visualstudio.com/docs/agent-customization/agent-skills) load on demand and travel across VS Code, Copilot CLI, and Copilot cloud agent. I migrated `/close-loop` and `/graph-loop` into personal skills. One completes a change with focused validation. The other adds bounded research, implementation, and review handoffs only when a task earns the coordination cost.

I also added `session-to-playbook`, a manual skill for preserving a hard-won command or repeated correction in the right durable place. The benefit is less prompt recreation and fewer good practices trapped in one chat transcript.

### 3. I separated discovery, implementation, and review

[Subagents](https://code.visualstudio.com/docs/agents/subagents) keep broad investigation out of the active implementation context. My global reviewer is read-only, while this repository keeps its editorial and visual specialists where their domain knowledge belongs.

I also enabled Agent Host sessions and its docked review surface. For independent substantial work, I can use a dedicated session or worktree, inspect its changes, and keep the main thread focused. One agent still owns the write path; extra agents earn their place through better research, independent judgment, or safer isolation.

### 4. I treated context and authority as workbench resources

Prompt caching rewards stable instructions, model choices, tools, and MCP servers. I start only the MCP tools a task needs, keep the working configuration steady during a session, and use isolated exploration for broad research. That keeps the active conversation quicker and easier to reason about.

I also turned off blanket tool auto-approval. Worktree isolation separates changes; it does not make an action safe. On native Windows, where agent and MCP sandboxing are unavailable, approvals are part of the operating design. I want the agent to move quickly through understood work and pause at publishing, deployment, deletion, cloud changes, and paid actions.

## What To Look For In Your Own Workbench

If your agent feels capable but inconsistent, check the layer around the model before changing models again:

1. Do new repositories inherit your operating defaults?
2. Does each workspace provide the architecture, commands, and boundaries that only it can know?
3. Can a good workflow become a portable skill instead of another long prompt?
4. Can research and review stay out of the implementation thread?
5. Are checks and approvals clear enough to support speed without hiding risk?

That is the workbench upgrade I was overlooking. VS Code already had much of the capability. The work was connecting it into a system that travels, keeps evidence close to the edit, and makes the operator more effective across projects.

## Sources

- [Use custom instructions in VS Code](https://code.visualstudio.com/docs/agent-customization/custom-instructions)
- [Use Agent Skills in VS Code](https://code.visualstudio.com/docs/agent-customization/agent-skills)
- [Custom agents in VS Code](https://code.visualstudio.com/docs/agent-customization/custom-agents)
- [Subagents in VS Code](https://code.visualstudio.com/docs/agents/subagents)
- [Diagnose prompt caching with the Cache Explorer](https://code.visualstudio.com/docs/agents/agent-troubleshooting/cache-explorer)
- [Agent hooks in VS Code](https://code.visualstudio.com/docs/agent-customization/hooks)
- [Use MCP servers in VS Code](https://code.visualstudio.com/docs/agent-customization/mcp-servers)
- [Manage approvals and permissions](https://code.visualstudio.com/docs/agents/approvals)
- [Security for AI agents](https://code.visualstudio.com/docs/agents/security)
- [Copilot CLI sessions in VS Code](https://code.visualstudio.com/docs/agents/agent-types/copilot-cli)
- [Use the Agents window](https://code.visualstudio.com/docs/agents/agents-window)
- [Agent Host architecture](https://code.visualstudio.com/docs/agents/concepts/agent-host)
