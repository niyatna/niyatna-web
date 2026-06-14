# Niyatna

**Niyatna — empowering human intent.**

This repository is the first landing-page surface for Niyatna: a public brand for turning human intent into trusted delegation, coordinated AI-agent execution, and reviewable proof.

## Brand thesis

```text
human intent -> trusted delegation -> agentic execution -> proof -> time/leverage/agency returned
```

Niyatna is the public parent brand. OpenIntent can become the protocol/specification lane. Proof of Intent can become the mechanism language for proving that delegated work remained aligned with the original human intent.

## Development

```bash
bun install
bun run dev
```

## Production build

```bash
bun run build
bun run verify:prerender
bun run preview
```

The build uses Vite + React SSG and outputs static files to `dist/`.

## Deploy target

Initial domain territory secured in Cloudflare:

- `niyatna.xyz` — primary early public landing candidate
- `niyatna.biz.id` — local/defensive hold or redirect candidate

No deploy has been performed by this repository setup.
