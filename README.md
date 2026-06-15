<div align="center">
  <img src="public/niyatna_icon_256.png" width="120" height="120" alt="Niyatna" />
  <h1>Niyatna Website</h1>

  <p><strong>The website and landing page for <a href="https://niyatna.xyz">Niyatna</a>.</strong></p>
  
  <p>
    <img src="https://img.shields.io/badge/Next.js-16-black" alt="next.js" />
    <img src="https://img.shields.io/badge/React-19-149eca" alt="react" />
  </p>

  <p><a href="https://niyatna.xyz">niyatna.xyz</a></p>
</div>

---

<p align="center">
  <img src="niyatna-website-demo.png" alt="Niyatna website" width="820" />
</p>

The source code for the [niyatna.xyz](https://niyatna.xyz) company profile website.

## The animated background

The flowing line waves in the hero are the part most people ask about. It is a real-time WebGL shader, not a video or a Lottie file:

- [`components/site/background-waves.tsx`](components/site/background-waves.tsx) mounts the canvas and wires it into the page.
- [`components/line-waves.tsx`](components/line-waves.tsx) holds the [OGL](https://github.com/oframe/ogl) setup and the GLSL fragment shader that draws the lines.

Everything is plain GLSL on top of a tiny WebGL wrapper, so it is easy to read and tweak.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** components
- **[OGL](https://github.com/oframe/ogl)** for the WebGL shader background
- **[Motion](https://motion.dev)** for animations
- **[Hugeicons](https://hugeicons.com)** icon set
- Deployed on **Vercel**

## Run locally

**Prerequisites:** Node 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev          # http://localhost:4175
```

## Structure

```
app/                Next.js routes (home, about, privacy, terms, security)
components/site/    Page sections (hero, demo, feature grid, footer, ...)
components/ui/       shadcn/ui primitives
lib/site.ts         Single source of truth: config, links
```

Want to change config or metadata? It all lives in [`lib/site.ts`](lib/site.ts).

## License

Licensed under the [Apache-2.0 License](LICENSE).
