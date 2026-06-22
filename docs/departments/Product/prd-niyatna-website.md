# PRD: Niyatna Website Landing Alignment

## Status

- **Status:** active implementation PRD
- **Last updated:** 2026-06-21
- **Scope:** public Niyatna website homepage, supporting public pages, docs-facing website copy, and landing visual asset placement.

## Source of Truth

This PRD follows the current Niyatna product/brand direction:

- Niyatna is a **selective agentic-company formation system**.
- Niyatna is not an AI automation agency, not generic SaaS, and not a loose tool gallery.
- Niyatna is a **company-wide permissioned operating layer** for authorized employees, leads, partners, auditors, clients, humans, and agents working within role boundaries.
- The website should make a normal company understand the transition into an agentic company: **askable, assignable, remembered, automated, and proven**.
- Public visuals should use a premium abstract/editorial spine first; real software views remain later proof inventory, not the primary landing spine.

Obsidian continuity references:

- `/home/galyarder/Documents/Obsidian Vault/galyarder/galyarder-labs/product/niyatna-agentic-company-formation-system-prd.md`
- `/home/galyarder/Documents/Obsidian Vault/galyarder/galyarder-labs/product/niyatna-website-image-assets-proof-plan.md`
- `/home/galyarder/Documents/Obsidian Vault/galyarder/galyarder-labs/product/niyatna-landing-abstract-visual-spine-plan.md`

---

## Problem Statement

The website direction must avoid becoming a technical implementation tour. First-contact visitors need to understand the category before seeing under-the-hood machinery.

Current risks this PRD prevents:

- **Too technical too early:** raw config, protocol, code, and implementation screens explain the machinery before the visitor understands the company transformation.
- **Single-person control framing:** the visual system must show a permissioned company layer, not only one operator controlling everything.
- **Tool-collage risk:** Hermes, Paperclip, OmniRoute, Obsidian, Discord, cron, and related tools must appear as one formation system when shown, not as disconnected logos or screens.
- **Visual rhythm risk:** dense overlays, fake app chrome, noisy chips, and accidental full-bleed collisions make the landing feel cluttered instead of premium.
- **Current site alignment:** the implemented homepage uses a hero visual explanation section followed by a five-step scroll story; product docs must match that structure.

---

## Product Goal

Make the Niyatna website communicate one clear transformation:

> A normal company becomes agentic when authorized people can ask the company system, turn intent into owned work, reuse operating memory, keep recurring work moving, and receive proof.

The page should feel selective, calm, premium, and evidence-backed without pretending abstract landing assets are final product screenshots.

---

## Target Homepage Flow

```txt
SiteHeader
Hero text-only
Hero visual explanation section
  - concise public copy
  - unobstructed hero abstract image
IntentScroll / sticky storytelling section
  - OS: company becomes askable
  - HQ: intent becomes owned work
  - Memory: company stops resetting
  - Automations + Route: work keeps moving
  - Proof: every intent leaves proof
FeatureGrid
Architecture
FAQ
Start / Begin Qualification
SiteFooter
```

### 1. Hero (`components/site/hero.tsx`)

**Role:** category-defining premise and gated entry.

- Keep the top hero text-only.
- Do not place the hero image in the top hero.
- Primary copy should frame Niyatna as the operating system, standards, and gates for companies ready to become agentic.
- Typing terms should stay category-level, e.g. `Agentic Company`, `Agent Workforce`, `Operating System`, `Company Standard`.
- Microline should include the system layer: `Your Intent · Your Agents · Your System · Your Company`.
- Primary CTA: `Begin Qualification`.
- Secondary CTA may route to the system explanation section.

### 2. Hero Visual Explanation Section (`components/site/demo.tsx`)

**Role:** the first visual proof moment after the text-only hero.

Correct pattern:

- Use the post-hero visual slot as the hero visual explanation section.
- Include short public copy above the image.
- Keep the hero abstract image visible and unobstructed.
- Use a normal contained max-width image container.
- Avoid fake app/window chrome unless a future approved visual specifically requires it.
- Avoid covering the image with overlays, dense cards, chips, long callouts, or internal labels.
- Do not turn this section into role tabs or implementation logs.
- Use the asset to explain the transformation from human/company intent into governed agentic execution and proof.

Current asset:

- `/brand/screenshots/hero-abstract.png`

Current copy direction:

- Headline: `From intent to verified company work.`
- Body: Niyatna turns a team decision into owned-agent execution: routed through private memory, approved at risk points, and returned with proof the company can audit.

### 3. Intent Scroll (`components/site/intent-scroll.tsx`)

**Role:** explain what makes a company agentic.

Use five public chapters:

| Step | Public label | Meaning | Current asset |
|---|---|---|---|
| 01 | OS | Ask the company system | `/brand/screenshots/os-askable.png` |
| 02 | HQ | Every request becomes owned work | `/brand/screenshots/hq-owned-work.png` |
| 03 | Memory | Your company stops resetting | `/brand/screenshots/memory-vault-abstract.png` |
| 04 | Automations | Repetitive work keeps moving | `/brand/screenshots/automations-route.png` |
| 05 | Proof | Every intent leaves proof | `/brand/screenshots/proof-intent-abstract.png` |

Visual/copy rules:

- Keep the Termul-style storytelling rhythm: sticky narrative, changing proof visual, step text separated from the image.
- Render the step number once only, e.g. `01 OS`, not duplicate numbering.
- Avoid code/config visuals, crowded fake dashboards, screenshot collages, robots, brains, sparkles, neon AI purple/blue, and random internal tool names.
- The OS chapter must communicate company-wide permissioned access.
- The HQ chapter must show requests becoming assigned, trackable work.
- The Memory chapter must show continuity: SOPs, decisions, departments, customers, proof logs.
- The Automations chapter must show recurring work, schedules, routing, and follow-up moving without manual babysitting.
- The Proof chapter must show evidence/report-back, not vague AI output.

### 4. Feature Grid (`components/site/feature-grid.tsx`)

**Role:** support the core system promise without turning into a card dump.

- Keep copy tied to operating standards, permissions, proof, memory, routing, and agentic-company formation.
- Avoid feature-list language that sounds like generic automation tooling.
- Avoid excessive card density; use spacing, hierarchy, and concise copy.

### 5. Architecture (`components/site/architecture.tsx`)

**Role:** explain the structured standard behind Niyatna.

Core layers may include:

- OpenIntent
- Proof of Intent
- Niyatna OS
- Niyatna Agents
- Niyatna HQ / Command Room

The architecture section should explain how the pieces work as one company formation system, not as disconnected integrations.

### 6. FAQ (`components/site/faq.tsx`)

**Role:** handle objections.

FAQ should clarify:

- Niyatna is not generic AI automation.
- Access is qualified/selective.
- The system is company-wide and permissioned.
- Security and privacy claims are scoped, not absolute.
- Proof means evidence tied back to intent, not a magical truth guarantee.

### 7. Start / Gate (`components/site/start.tsx`)

**Role:** close with scarcity and qualification.

- Use `Begin Qualification`, `Request Access`, or similar qualified CTA language.
- Do not use generic SaaS CTAs as primary copy.
- Mobile layout must stay clean: no nested tiny buttons, dense chips, or cramped lists.

---

## Visual Asset Plan

Current landing spine uses **6 images total**:

1. Hero image — overall transformation / Intent Path.
2. Niyatna OS — company becomes askable.
3. Niyatna HQ — intent becomes owned work.
4. Niyatna Memory — company stops resetting.
5. Niyatna Automations + Route — work keeps moving.
6. Proof of Intent — every action returns proof.

Later proof inventory may include sanitized software views, but they must support the story rather than replace the abstract/editorial landing spine.

---

## Acceptance Criteria

- Top hero remains text-only.
- Post-hero visual section contains copy plus the hero abstract image.
- `IntentScroll` remains below the hero visual section.
- `IntentScroll` uses five public chapters: OS, HQ, Memory, Automations, Proof.
- Landing assets are contained and unobstructed; no accidental full-bleed collisions.
- No fake app chrome, dense overlays, chips, or implementation screens as primary landing visuals.
- CTA language stays selective and qualified.
- Public copy frames Niyatna as an agentic-company formation system, not an AI agency or tool gallery.
- Build/typecheck/lint pass before calling implementation done.

---

## Verification Plan

For website implementation changes:

1. Search public source for deprecated role-tab labels, old preview labels, raw implementation-screen guidance, and generic SaaS CTA language.
2. Verify homepage order in `app/page.tsx`.
3. Verify image paths used by `components/site/demo.tsx` and `components/site/intent-scroll.tsx`.
4. Run:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

5. For visual QA, inspect mobile and desktop screenshots for spacing, image collisions, and public-copy quality.

---

## Out of Scope

- Backend routing logic.
- Intake scoring engine.
- Publishing private configuration files or credentials.
- Claiming real customer proof before actual workflows and proof artifacts exist.
- Replacing the current abstract landing spine with raw software views unless Galih explicitly changes the direction.
