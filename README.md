<div align="center">
  <br />
  <img src="public/niyatna-icon.png" width="80" height="80" alt="Niyatna" />
  <br />
  <br />
  <h3>Niyatna Website</h3>
  <p>The codebase for <a href="https://niyatna.xyz">niyatna.xyz</a></p>
  <br />
</div>

---

This repository contains the source code for the public website and developer documentation of **Niyatna**—the agentic-company formation system.

The product runtime and AI agent framework live in a separate repository. This codebase is strictly the public web presence, custom WebGL animations, and technical guides.

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
npx wrangler pages deploy .vercel/output/static --project-name niyatna-landing
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


