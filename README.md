<div align="center">
  <br />
  <img src="public/niyatna-icon.png" width="128" height="128" alt="Niyatna" />
  <br />
  <br />
  <h3>Niyatna</h3>
  <p>The website and landing page for <a href="https://niyatna.xyz">Niyatna</a></p>
  <br />
  <a href="https://github.com/niyatna/niyatna-web/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License" /></a>
  <img src="https://img.shields.io/badge/Next.js-v16.1.7-000000?logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-v19.2.4-20232A?logo=react&logoColor=61DAFB" alt="React" />
  <br />
  <br />
  <img src="public/niyatna-web.png" width="100%" alt="Niyatna Web" />
</div>

---

This repository contains the source code for the website and landing page of [Niyatna](https://niyatna.xyz).

## What is Niyatna?

Niyatna is the **agentic-company formation system**—the integrated operating stack, standards, rules, gates, and interfaces for forming and running agentic companies.

We build the operating layers, boundaries, and command rooms that turn human intent into coordinated, autonomous, and verified agent workforces. 

> **The agents are not the company. The intent is the company. The agents are the leverage.**

When anyone can solve problems with AI, the scarce asset becomes the system that organizes intent, workforces, memory, permissions, channels, and proof into an operating business. Niyatna coordinates these primitives into a unified execution standard.

[Explore Niyatna](https://niyatna.xyz) · [Begin Qualification](https://niyatna.xyz/contact)

---

## WebGL Hero Waves

The hero background features real-time WebGL line waves compiled from custom GLSL shaders (not videos or Lottie animations):
* [`components/site/background-waves.tsx`](components/site/background-waves.tsx) mounts the HTML5 Canvas and initialises parameters.
* [`components/line-waves.tsx`](components/line-waves.tsx) implements the [OGL](https://github.com/oframe/ogl) WebGL state-machine wrapper and runs the fragment shader rendering the waves.

## Technical Stack

* **Framework:** Next.js 16 (App Router) & React 19
* **Styles:** Tailwind CSS v4 (CSS-first variables & directives)
* **Documentation:** Fumadocs MDX documentation engine
* **Animations:** Motion (smooth transitions & scrolls)
* **Assets:** Hugeicons icon set

## Local Development

Ensure you have [pnpm](https://pnpm.io) installed:

```bash
# 1. Install dependencies
pnpm install

# 2. Start local development server
pnpm dev
```

## Production Build & Deploy (Cloudflare Pages)

The project compiles static pages using Vercel CLI and runs Edge bindings on Cloudflare Pages via `@cloudflare/next-on-pages`. Due to custom overrides needed for dynamic route mapping, use this exact deployment pipeline:

```bash
pnpm dlx vercel build && \
node scripts/copy-prerenders.js && \
node scripts/clean-functions.js && \
node scripts/fix-prerenders.js && \
node scripts/fix-config-overrides.js && \
pnpm exec next-on-pages --skip-build && \
npx wrangler pages deploy .vercel/output/static
```

## Directory Structure

```text
app/                Next.js App Router paths (Hero, services, work, about, terms, privacy, security)
components/site/    Page layout modules (Showcase Demo, Feature Grid, Scrolling system outline)
components/ui/      Primitive shadcn interface components
content/            MDX source files for developer documentation & reference configuration guides
lib/site.ts         Public configuration file (names, URLs, metadata properties)
scripts/            Custom build-time page-repair and prerender patching scripts
```

---

<div align="center">
  <sub>Licensed under the Apache-2.0 License.</sub>
</div>


