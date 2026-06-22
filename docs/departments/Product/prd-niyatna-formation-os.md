# PRD: Niyatna Agentic Company Formation OS

## Status

- **Status:** active product doctrine seed
- **Scope:** Niyatna as an agentic-company formation system, not only the website.
- **Related website PRD:** `docs/departments/Product/prd-niyatna-website.md`

---

## Problem Statement

AI makes problem-solving ability cheaper, faster, and more widely available. A team can now use models, agents, browser tools, workspace tools, memory, automation, and code systems to attempt work that previously needed a larger department.

But solving tasks with AI is not the same as forming and operating a company.

A company needs:

- intent and direction;
- people, agents, and responsibilities;
- role boundaries and permissions;
- operating memory and SOPs;
- tasks, schedules, follow-up, and ownership;
- standards for evaluation;
- evidence, proof, and auditability;
- communication channels and command surfaces;
- security boundaries around sensitive company context.

Without a formation system, AI adoption becomes scattered:

- requests disappear into chat;
- work lacks owner, due date, and review gate;
- company memory resets between sessions;
- agents behave like generic helpers instead of accountable workforce units;
- proof is weak;
- sensitive data boundaries are unclear;
- leaders, employees, partners, auditors, and selected clients cannot safely ask the company system through their own role scopes.

The bottleneck is no longer access to AI tools. The bottleneck is organizing AI capability into a trustworthy company operating layer.

---

## Solution

Niyatna is a **selective agentic-company formation system**.

It provides the operating stack, standards, gates, and interfaces that turn human intent into governed company work across people, agents, memory, tools, channels, schedules, and proof.

Niyatna does not sell a loose tool collection. It forms a company-wide, permissioned system where authorized people can:

- ask the company system;
- create assigned work;
- schedule follow-up;
- access remembered context;
- route work to the right human, agent, model, or tool;
- evaluate outputs against standards;
- receive report-back and proof.

Core transformation:

> A normal company becomes agentic when it becomes askable, assignable, remembered, automated, and proven.

---

## Product Architecture

### 1. Readiness Gate

A qualification mechanism that checks whether a company has enough clarity, context, and operational maturity to hold Niyatna.

Must evaluate:

- intent clarity;
- data readiness;
- operational risk;
- role boundaries;
- repetitive work candidates;
- leadership willingness to enforce standards.

### 2. OpenIntent

The standard for turning a request into a structured intent packet.

A packet should define:

- goal;
- requester;
- role/permission scope;
- constraints;
- allowed tools and data boundaries;
- assignee or agent routing;
- acceptance criteria;
- proof requirements;
- memory write-back rules.

### 3. Company Blueprint

The map of departments, roles, agents, humans, clients, partners, boundaries, SOPs, and ownership rules.

The blueprint should answer:

- who can ask what;
- who can assign work;
- who can approve or reject work;
- which agents exist;
- what each agent can access;
- which standards apply to each department.

### 4. Niyatna Agents

Company-specific agents with mission, memory, skills, tools, permissions, channels, and proof duties.

Agents are workforce units, not generic chat personalities.

### 5. Niyatna Route

The routing layer that decides which model, tool, workflow, or human/agent path should handle an intent.

Routing should account for:

- sensitivity;
- cost;
- latency;
- tool requirements;
- reasoning depth;
- approval risk;
- memory requirements;
- fallback behavior.

### 6. Niyatna Memory

The company memory layer combining human-readable notes/docs/SOPs with agent-usable memory and retrieval.

Memory should preserve:

- company canon;
- SOPs;
- decisions;
- customer/vendor context;
- department knowledge;
- prior proof logs;
- recurring workflow history.

### 7. Niyatna HQ / Command Room

The company command surface where intents become owned work.

It should show:

- active intents;
- assigned work;
- assignees;
- due dates;
- departments;
- review gates;
- proof requirements;
- status and report-back.

### 8. Niyatna OS / Channel Layer

The cross-channel operating layer across chat, web, mobile, and company surfaces.

The OS must support authorized company members, not only a single operator.

Example roles:

- executives;
- department leads;
- employees;
- auditors;
- partners;
- selected clients;
- agents operating inside scoped boundaries.

### 9. Niyatna Automations

Scheduled and event-driven workflows that keep recurring company work moving.

Examples:

- daily reports;
- weekly finance summaries;
- follow-up reminders;
- proof checks;
- inbox checks;
- knowledge-base maintenance;
- recurring evaluation tasks.

### 10. Proof of Intent

The verification primitive that links request, routing, execution, evidence, evaluation, memory update, and report-back.

Proof should include:

- original intent;
- requester and permission context;
- assigned human/agent;
- tools or route used;
- evidence artifacts;
- evaluation status;
- approval status;
- final report;
- memory update.

---

## User Stories

### Company-wide askability

As an authorized company member, I want to ask the company system for context or action so that I do not need a manager to re-explain the same operating knowledge.

### Owned work

As a department lead, I want a request to become an assigned task with owner, due date, review gate, and proof requirement so that work does not disappear into chat.

### Operating memory

As a team member, I want the system to remember SOPs, decisions, customers, and proof logs so that every new request starts with context.

### Repetitive work

As an operations user, I want recurring work to be scheduled and routed automatically so that follow-ups do not depend on human memory.

### Proof and report-back

As a requester or auditor, I want a final proof artifact showing what was requested, done, evaluated, remembered, and reported back.

---

## Website Translation

The public website should not lead with raw implementation proof.

Landing v1 should use the abstract/editorial six-image spine:

1. Hero / Intent Path;
2. OS / Askable company;
3. HQ / Owned work;
4. Memory / Remembered context;
5. Automations + Route / Work keeps moving;
6. Proof / Verified evidence.

Implementation views may be used later as supporting proof after the visual/copy spine is stable.

---

## Out of Scope

- Fully autonomous high-risk execution without approval gates.
- Publishing private company data, credentials, or internal configuration.
- Presenting future implementation proof as real customer proof before workflows and artifacts exist.
- Reducing Niyatna to generic SaaS, an AI agency, or a tool gallery.
