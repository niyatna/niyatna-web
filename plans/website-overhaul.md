# Plan: Niyatna Website Landing Alignment

> Source PRD: [prd-niyatna-website.md](file:///home/galyarder/projects/Niyatna/docs/departments/Product/prd-niyatna-website.md)

## Architectural decisions

Durable decisions for the current landing implementation:

- **Route:** `/` is the primary public landing route.
- **CTA destination:** `/contact` is the qualification intake destination.
- **Top hero:** text-only; no image in the top hero.
- **Post-hero visual:** the first image section explains the hero abstract asset with concise public copy.
- **Visual spine:** landing v1 uses six abstract/editorial images before raw implementation proof.
- **Design DNA:** graphite / porcelain / satin silver, high negative space, no neon AI glow, no tool collage.
- **Access model:** company-wide permissioned operating layer, not a single-person command surface.

---

## Phase 1: Hero and qualification gate

### What to build

- Keep the hero centered, text-led, and category-defining.
- Use typing terms that reinforce the category: `Agentic Company`, `Agent Workforce`, `Operating System`, `Company Standard`.
- Keep CTAs selective: `Begin Qualification`, `Explore the system`, `Request Access`.
- Avoid generic SaaS acquisition language.

### Acceptance criteria

- [ ] Top hero contains no image.
- [ ] CTA routes to `/contact` where appropriate.
- [ ] Hero copy positions Niyatna as the operating system, standards, and gates for companies ready to become agentic.

---

## Phase 2: Hero visual explanation section

### What to build

- Use `components/site/demo.tsx` as the post-hero visual explanation section.
- Show concise copy above the image.
- Render `/brand/screenshots/hero-abstract.png` in a large contained frame.
- Keep the image unobstructed.

### Acceptance criteria

- [ ] Section headline: `From intent to verified company work.` or equivalent.
- [ ] Asset stays visible without fake chrome, overlays, chips, or crowded callouts.
- [ ] Section sits between `Hero` and `IntentScroll`.

---

## Phase 3: Five-chapter IntentScroll

### What to build

Use five public chapters:

1. **OS** — Ask the company system.
2. **HQ** — Every request becomes owned work.
3. **Memory** — Your company stops resetting.
4. **Automations** — Repetitive work keeps moving.
5. **Proof** — Every intent leaves proof.

### Acceptance criteria

- [ ] Image paths are:
  - `/brand/screenshots/os-askable.png`
  - `/brand/screenshots/hq-owned-work.png`
  - `/brand/screenshots/memory-vault-abstract.png`
  - `/brand/screenshots/automations-route.png`
  - `/brand/screenshots/proof-intent-abstract.png`
- [ ] Step text is outside/below the image frame.
- [ ] No duplicate numbering.
- [ ] Mobile tabs remain sticky and readable.

---

## Phase 4: Supporting sections

### What to build

- Align `FeatureGrid`, `Architecture`, `FAQ`, and `Start` with the same company-wide formation story.
- Keep architecture focused on OpenIntent, Proof of Intent, Niyatna OS, Niyatna Agents, and Niyatna HQ.
- Keep FAQ/security claims scoped and credible.

### Acceptance criteria

- [ ] Copy does not frame Niyatna as a generic AI agency, generic SaaS, or disconnected tool collection.
- [ ] Start/Gate section preserves scarcity and qualification.
- [ ] Supporting pages (`about`, `work`, `services`, `security`, `privacy`, `terms`, `contact`) do not contradict the landing story.

---

## Phase 5: Verification and push readiness

### Commands

```bash
pnpm typecheck
pnpm lint
pnpm build
```

### Acceptance criteria

- [ ] TypeScript exits 0.
- [ ] ESLint exits 0 errors.
- [ ] Build completes and prerenders expected routes.
- [ ] Search confirms deprecated labels and raw implementation-screen guidance are not present in public docs/source.
- [ ] Generated local tooling/deployment folders are not committed unless intentionally tracked.
