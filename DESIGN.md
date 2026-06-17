# Design System: Niyatna

## 1. Visual Theme & Atmosphere

Niyatna's website is a silent-premium identity surface — a cool slate-black canvas (`oklch(0.148 0.004 228.8)`) where content emerges from darkness through carefully calibrated luminance stacking. The overall impression is one of sculptural restraint: matte porcelain white text (`oklch(0.987 0.002 197.1)`) against graphite depths, with structure communicated through semi-transparent white borders (`border-white/10`, `border-white/[0.08]`) rather than color variation. This is not a dark theme applied to a light design — it is darkness as the native medium, where depth is managed through subtle gradations of OKLCH lightness rather than traditional shadows.

The typography system is built on Inter (variable weight 100–900) for all headings and body, paired with Geist Mono (variable weight 100–900) for technical metadata, status markers, and ritual labels. At display sizes (72px hero down to 36px section titles), Inter runs aggressive negative letter-spacing (`-0.04em` to `-0.02em`), creating compressed, authoritative headlines that feel engineered rather than designed. Geist Mono appears exclusively in uppercase metadata contexts — eyebrow labels, marquee brand tickers, terminal displays, and architecture role tags — always at small sizes (9–12px) with wide tracking (`0.12em` to `0.20em`), functioning as the system's technical ritual voice.

The color system is entirely achromatic — no brand accent color exists. The palette moves through a single OKLCH hue channel (~214–228°, a cool slate-blue undertone) at different lightness values, from the deepest background (`0.148`) through elevated surfaces (`0.218`, `0.275`) to matte porcelain text (`0.987`). There is no indigo, no violet, no chromatic accent — only the luminance stacking of cool grays. Status indicators use emerald green (`emerald-500`) sparingly for "active/online" states, and destructive red for error states. All interactive surfaces — buttons, cards, inputs — use pill-shaped (`rounded-full` / `rounded-4xl`) borders with translucent white edges, like porcelain forms drawn in moonlight.

A flowing WebGL line-wave animation (`ogl` shader) runs behind the hero section — 40 inner lines and 15 outer lines, white on dark, with sin-wave displacement at speed 0.35, creating an atmospheric sense of flowing intent-paths. This is the only decorative motion on the page. All other animation is functional: staggered fade-in entrances (0.5–0.6s, y: 6–10px), a typewriter cycling through brand phrases, and scroll-linked perspective tilts on screenshots.

**Key Characteristics:**
- Dark-mode-default: `oklch(0.148 0.004 228.8)` page background, `oklch(0.218 0.008 223.9)` card surface, `oklch(0.275 0.011 216.9)` elevated muted
- Inter (variable 100–900) for all headings/body; Geist Mono (variable 100–900) for technical labels
- Semibold 600 as the primary heading weight; regular 400 for body
- Aggressive negative letter-spacing at display sizes (`-0.04em` at 72px, `-0.03em` at section titles)
- Entirely achromatic — no brand accent color. Cool slate-blue OKLCH undertone only
- Semi-transparent white borders: `border-white/10` (light) to `border-white/[0.08]` (dark)
- Pill-shaped interactive elements: `rounded-full` buttons, `rounded-4xl` cards, `rounded-3xl` badges/inputs
- OKLCH color space throughout for perceptually uniform luminance stacking
- WebGL line-wave shader for hero atmosphere; staggered motion entrances; typewriter animation
- Glassmorphism via `backdrop-blur-xl` + inset white shadows on elevated panels

### Logo & Mark

The visual identity centers on a white 3D satin/porcelain ribbon mark representing the path of human intent being verified:

| Asset | File | Dimensions | Usage |
|-------|------|------------|-------|
| **App Icon** | `public/niyatna-icon.png` | 1024×1024 | Header (34×34), Footer (34×34), Docs sidebar (30×30), Apple icon |
| **Logo Mark** | `public/niyatna-logo.png` | 1024×1024 | Standalone branding, social assets |
| **Favicon** | `app/favicon.ico` | Multi-res (16–256px) | Browser tab icon |

The mark is a continuous, flowing satin/porcelain ribbon that subtly suggests "N" through motion — not a literal typographic N. Visual direction: matte porcelain / satin white / soft brushed silver on dark graphite backgrounds. No AI-purple/blue glow, no robot/brain/sparkle iconography.

---

## 2. Color Palette & Roles

All colors use the OKLCH color space for perceptually uniform luminance steps. The palette is defined via CSS custom properties in [globals.css](file:///home/galyarder/projects/Niyatna/app/globals.css) and consumed through Tailwind v4 `@theme inline` token mapping.

### Background Surfaces

| Role | Dark Mode | Light Mode | Notes |
|------|-----------|------------|-------|
| **Page Background** | `oklch(0.148 0.004 228.8)` | `oklch(1 0 0)` | Deepest canvas. Cool slate black / pure white. |
| **Card / Elevated Surface** | `oklch(0.218 0.008 223.9)` | `oklch(1 0 0)` | One luminance step up from page. |
| **Muted / Secondary Surface** | `oklch(0.275 0.011 216.9)` | `oklch(0.963 0.002 197.1)` | Hover states, accordion open states, secondary panels. |
| **Sidebar** | `oklch(0.218 0.008 223.9)` | `oklch(0.987 0.002 197.1)` | Docs sidebar background. |

### Text & Content

| Role | Dark Mode | Light Mode | Notes |
|------|-----------|------------|-------|
| **Primary Text** | `oklch(0.987 0.002 197.1)` | `oklch(0.148 0.004 228.8)` | Matte porcelain white / slate black. Not pure white — prevents eye strain. |
| **Secondary Text / Body** | `oklch(0.723 0.014 214.4)` | `oklch(0.56 0.021 213.5)` | Cool silver-gray for body, descriptions. Used via `text-muted-foreground`. |
| **Muted Text / Metadata** | `oklch(0.56 0.021 213.5)` | `oklch(0.56 0.021 213.5)` | Subtle slate for timestamps, placeholders. Used via `ring` token in dark. |
| **Subdued Text** | `text-foreground/70` | `text-foreground/70` | Hero body text, prose paragraphs. Opacity-based rather than separate token. |
| **Ghost Text** | `text-foreground/[0.06]` | `text-foreground/[0.06]` | Footer giant decorative text. Barely visible. |

### Interactive & Accent

| Role | Dark Mode | Light Mode | Notes |
|------|-----------|------------|-------|
| **Primary Interactive** | `oklch(0.925 0.005 214.3)` | `oklch(0.218 0.008 223.9)` | Brushed silver / dark slate. Button backgrounds, CTA fills. |
| **Primary Interactive Text** | `oklch(0.218 0.008 223.9)` | `oklch(0.987 0.002 197.1)` | Contrast text on primary buttons. |

### Status Colors

| Role | Value | Notes |
|------|-------|-------|
| **Active / Online** | `emerald-500` (`#10b981`) | Status pills: `border-emerald-500/20 bg-emerald-500/5 text-emerald-600` |
| **Destructive** | `oklch(0.704 0.191 22.216)` (dark) / `oklch(0.577 0.245 27.325)` (light) | Error states, destructive actions. |

### Border & Divider

| Role | Dark Mode | Light Mode | Notes |
|------|-----------|------------|-------|
| **Border Primary** | `oklch(1 0 0 / 10%)` | `oklch(0.925 0.005 214.3)` | 10% opacity white / solid light gray. Standard container edges. |
| **Input Border** | `oklch(1 0 0 / 15%)` | `oklch(0.925 0.005 214.3)` | Slightly more visible for form inputs. |
| **Glassmorphism Border** | `rgba(255,255,255,0.08)` | `rgba(255,255,255,0.10)` | Ultra-subtle semi-transparent for glass panels. |
| **Subtle Divider** | `border-border/50` | `border-border/50` | Footer top border, section separators. |
| **Dot Separator** | `bg-muted-foreground/40` at `size-1 rounded-full` | Same | Inline item separators. |

### Chart Scale (5-step grayscale)

| Token | Value | Lightness |
|-------|-------|-----------|
| `chart-1` | `oklch(0.872 0.007 219.6)` | Lightest |
| `chart-2` | `oklch(0.56 0.021 213.5)` | |
| `chart-3` | `oklch(0.45 0.017 213.2)` | |
| `chart-4` | `oklch(0.378 0.015 216)` | |
| `chart-5` | `oklch(0.275 0.011 216.9)` | Darkest |

---

## 3. Typography Rules

### Font Families

| Family | Stack | Usage |
|--------|-------|-------|
| **Sans (Primary)** | `"Inter", system-ui, -apple-system, sans-serif` | All headings, body text, navigation, buttons |
| **Mono (Technical)** | `"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` | Eyebrow labels, marquee tickers, terminal displays, metadata tags, architecture roles |
| **Heading** | `var(--font-sans)` | Alias — resolves to Inter |

Fonts loaded via Google Fonts `<link>` tags (not `next/font`) with `display=swap`. Both are variable-weight (100–900).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Inter | 72px (`text-7xl`) | 600 (semibold) | tight | `-0.04em` | Hero h1. Responsive: `text-4xl` → `text-5xl` → `text-6xl` → `text-7xl`. |
| Section Display | Inter | 48px (`text-5xl`) | 600 | tight | `-0.02em` to `-0.03em` | Section headings. Responsive: `text-3xl` → `text-4xl` → `text-5xl`. |
| Page Hero | Inter | 60px (`text-6xl`) | 600 | tight | `-0.04em` | Legal/docs page hero. Responsive: `text-4xl` → `text-5xl` → `text-6xl`. |
| Architecture Title | Inter | 18px (`text-lg`) | 600 | tight | `tracking-tight` | Layer names in the architecture stack. |
| Card Title | Inter | 15px | 500 (medium) | default | `tracking-tight` | Feature grid card titles. |
| Body Lead | Inter | 18px (`text-lg`) | 400 | relaxed (1.6) | normal | Hero subtitles, section lead paragraphs. Via `text-muted-foreground`. |
| Body Text | Inter | 16px (`text-base`) | 400 | default (1.5) | normal | General descriptions, nav brand text. |
| Navigation Link | Inter | 14px (`text-sm`) | 400 | default | normal | Header/footer links. Via `text-muted-foreground`. |
| Footer Column Title | Inter | 14px (`text-sm`) | 600 | default | `tracking-tight` | Footer section headers. |
| Contact Label | Inter | 12px (`text-xs`) | 500 | default | `tracking-wider` | Uppercase form field labels. |
| Mono Eyebrow | Geist Mono | 11px | 400 | default | `0.12em`–`0.20em` | Uppercase. Hero pill, section eyebrow, page hero eyebrow. |
| Mono Marquee | Geist Mono | 10px | 400 | default | `0.20em` | Uppercase. Brand marquee ticker labels. |
| Mono Role Tag | Geist Mono | 9px | 400 | default | `tracking-wider` | Uppercase. Architecture layer role labels. |
| Mono Terminal | Geist Mono | 12px | 400 | relaxed | normal | Demo terminal output text. |
| Mono Section Eyebrow | Geist Mono | 12px (`text-xs`) | 400 | default | `0.20em` | Uppercase. Section component eyebrow. |
| Decorative Giant | Inter | `14vw` | 700 (bold) | 0.8 | `tracking-tighter` | Footer giant text at 6% opacity. |
| Prose h2 | Inter | 30px (`text-3xl`) | 600 | default | `-0.02em` | Legal/docs page subheadings. Responsive: `text-2xl` → `text-3xl`. |
| Prose h3 | Inter | 18px (`text-lg`) | 600 | default | `-0.01em` | Legal/docs page tertiary headings. |
| Prose Body | Inter | 16px | 400 | relaxed | normal | Legal/docs paragraph text at 75% foreground opacity. |

### Principles
- **Semibold is the heading weight**: Niyatna uses Inter at weight 600 for all headings — section titles, card titles, footer column headers. Medium (500) appears only on feature card titles and form labels.
- **Compression at scale**: Display sizes use progressively tighter letter-spacing — `-0.04em` at hero (72px), `-0.03em` at demo headings, `-0.02em` at section headings. Below 18px, spacing relaxes to normal or `tracking-tight`.
- **Mono is ritual, not decoration**: Geist Mono always appears uppercase with wide tracking, marking content as metadata, status, or technical ritual — never for body text or headings.
- **Opacity as hierarchy**: Body text uses `text-foreground/70` and `text-muted-foreground` rather than separate color tokens, creating hierarchy through transparency layering against the dark background.

---

## 4. Component Stylings

### Buttons

**Primary CTA (Pill)**
- Base: `rounded-4xl border border-transparent bg-clip-padding text-sm font-medium`
- Dark: `bg-primary text-primary-foreground` → brushed silver background, dark slate text
- Light: `bg-primary text-primary-foreground` → dark slate background, porcelain text
- Size default: `h-9 px-4 py-2`
- Size lg: `h-10 rounded-4xl px-6`
- Override: In practice, CTAs use `rounded-full` for full pill shape
- CTA text: "Request Access" (primary), "Learn More" (secondary)
- Source: [button.tsx](file:///home/galyarder/projects/Niyatna/components/ui/button.tsx)

**Outline / Ghost Button (Pill)**
- Outline: `border-input bg-background hover:bg-accent hover:text-accent-foreground`
- Ghost: `hover:bg-accent hover:text-accent-foreground`
- Both inherit `rounded-4xl` base
- Use: Navigation items, secondary actions

**Icon Button**
- Sizes: `icon (size-9)`, `icon-xs (size-6)`, `icon-sm (size-8)`, `icon-lg (size-10)`
- Shape: inherits `rounded-4xl`
- Use: Theme toggle, mobile menu, social links

**Navigation Link Button**
- `rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground`
- Transition on hover
- Source: [header-shell.tsx](file:///home/galyarder/projects/Niyatna/components/site/header-shell.tsx)

**Social Icon Button (Footer)**
- `size-8 rounded-full border border-border/50 bg-background/30`
- Source: [footer.tsx](file:///home/galyarder/projects/Niyatna/components/site/footer.tsx)

### Cards & Glassmorphism

**Standard Card**
- `rounded-4xl bg-card py-6 shadow-md ring-1 ring-foreground/5 dark:ring-foreground/10`
- Source: [card.tsx](file:///home/galyarder/projects/Niyatna/components/ui/card.tsx)

**Glass Panel (`.glass`)**
- Light: `rounded-2xl border border-white/10 bg-white/60 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45)]`
- Dark: `border-white/[0.08] bg-white/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]`
- Use: Hero pill container, floating header (scrolled state), elevated panels
- Source: [glass.tsx](file:///home/galyarder/projects/Niyatna/components/site/glass.tsx), [globals.css](file:///home/galyarder/projects/Niyatna/app/globals.css)

**Feature Grid Card**
- Container: `gap-px` grid with border separators (1px gaps create visible grid lines)
- Cell: `bg-background p-6` with `group-hover` effects
- Title: `text-[15px] font-medium tracking-tight`
- Description: `text-sm leading-relaxed text-muted-foreground`
- Source: [feature-grid.tsx](file:///home/galyarder/projects/Niyatna/components/site/feature-grid.tsx)

### Inputs & Forms

**Text Input**
- `h-9 rounded-3xl border border-transparent bg-input/50 px-3 py-1 text-base md:text-sm`
- Focus: `border-ring ring-ring/50 ring-[3px]`
- Source: [input.tsx](file:///home/galyarder/projects/Niyatna/components/ui/input.tsx)

**Contact Form Input**
- `text-sm rounded-xl` with `bg-input/50`
- Labels: `text-xs font-medium uppercase tracking-wider`
- Source: [contact-form.tsx](file:///home/galyarder/projects/Niyatna/components/site/contact-form.tsx)

### Badges & Pills

**Badge**
- `h-5 rounded-3xl px-2 py-0.5 text-xs font-medium`
- Variants: `default`, `secondary`, `destructive`, `outline`, `ghost`, `link`
- Source: [badge.tsx](file:///home/galyarder/projects/Niyatna/components/ui/badge.tsx)

**Status Pill (Active)**
- `rounded-full border border-emerald-500/20 bg-emerald-500/5 font-mono text-[10px] text-emerald-600`
- Use: "SYSTEM ACTIVE" status indicator in hero

**Role Pill**
- `rounded-full border border-border bg-foreground/[0.03] px-2 py-0.5 font-mono text-[9px] tracking-wider uppercase`
- Use: Architecture layer role tags

**Hero Sub-pill**
- Glass container with `font-mono text-[11px] tracking-[0.12em] uppercase`
- Use: "Agentic Company Formation" label above hero heading

### Navigation

**Header (Fixed Floating)**
- Default state: `fixed inset-x-0 top-0 z-50 py-4`
- Container: `mx-3 max-w-6xl sm:mx-auto rounded-full`
- Scrolled state: `border border-white/10 bg-white/70 px-4 py-2 shadow-lg shadow-black/[0.04] backdrop-blur-xl dark:border-white/[0.08] dark:bg-zinc-950/60 dark:shadow-black/40`
- Transition: `py-4` → `py-2` on scroll detection
- Logo: `niyatna-icon.png` at 34×34px, `rounded-md`
- Nav links: `rounded-full px-3 py-1.5 text-sm text-muted-foreground`
- CTA: `rounded-full` "Request Access" primary button
- Source: [header-shell.tsx](file:///home/galyarder/projects/Niyatna/components/site/header-shell.tsx)

**Mobile Menu**
- Trigger: `size-8 rounded-full border border-zinc-200 bg-zinc-100/50 dark:border-white/10 dark:bg-white/5`
- Drawer: `rounded-3xl border bg-white/95 p-6 shadow-2xl backdrop-blur-xl dark:border-white/[0.08] dark:bg-zinc-950/95`
- Motion: `AnimatePresence` → `opacity: 0→1, y: -10→0, duration: 0.2s`

### Accordion (FAQ)

- Container: `rounded-2xl border`
- Items: `not-last:border-b data-open:bg-muted/50`
- Source: [accordion.tsx](file:///home/galyarder/projects/Niyatna/components/ui/accordion.tsx)

### Terminal Chrome (Demo)

- Frame: 3 dots (`size-2.5 rounded-full`) in `bg-zinc-300` (light) / `bg-zinc-700` (dark)
- Caption: monospace uppercase `text-[10px] tracking-wider`
- Body: `font-mono text-[12px] leading-relaxed`
- Log entries: `motion.div` with `opacity: 0→1, x: -4→0, stagger: index * 0.05s`
- Source: [demo.tsx](file:///home/galyarder/projects/Niyatna/components/site/demo.tsx)

### Background Grid

- Structure: `linear-gradient` dividers at `32px × 32px` spacing
- Color: `color-mix(in srgb, var(--border) 60%, transparent)`
- Mask: `radial-gradient(ellipse at center, black 30%, transparent 75%)` — draws focus inward
- Source: [globals.css `.bg-grid`](file:///home/galyarder/projects/Niyatna/app/globals.css)

### Infinite Marquee

- CSS animation: `marquee 35s linear infinite` → `translateX(0)` to `translateX(-50%)`
- Display: `flex; width: max-content` with duplicated content for seamless loop
- Pauses on hover (`:hover { animation-play-state: paused }`)
- Edge masks: left/right `linear-gradient(to-r/to-l, from-background to-transparent)` fade
- Source: [globals.css `.animate-marquee`](file:///home/galyarder/projects/Niyatna/app/globals.css)

### Prose Styles (Content Pages)

| Element | Classes |
|---------|---------|
| h2 | `mt-12 mb-4 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl` |
| h3 | `mt-8 mb-3 text-lg font-semibold tracking-[-0.01em]` |
| p | `mt-4 leading-relaxed text-foreground/75` |
| ul | `mt-4 space-y-2 pl-5 list-disc marker:text-muted-foreground/50` |
| ol | `mt-4 space-y-2 pl-5 list-decimal marker:text-muted-foreground/50` |
| li | `text-foreground/75 leading-relaxed` |
| a | `underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground` |
| code | `rounded-md border border-border/60 bg-muted/40 px-1.5 py-0.5 font-mono text-[0.85em]` |
| strong | `text-foreground font-semibold` |
| hr | `my-12 border-border/60` |

Source: [page-shell.tsx Prose component](file:///home/galyarder/projects/Niyatna/components/site/page-shell.tsx)

---

## 5. Layout Principles

### Spacing System

Tailwind v4 default scale (4px base unit). Key recurring values:

| Context | Padding / Gap | Notes |
|---------|---------------|-------|
| Section vertical | `py-20 sm:py-28` (80px → 112px) | Standard section rhythm |
| Hero top | `pt-36 sm:pt-44` (144px → 176px) | Clears fixed header + breathing room |
| Hero bottom | `pb-20 sm:pb-28` (80px → 112px) | Transition into first content section |
| Page Hero | `pt-36 pb-12 sm:pt-44 sm:pb-16` | Docs/legal page hero |
| Section horizontal | `px-4 sm:px-6` (16px → 24px) | Mobile gutter protection |
| Feature grid gap | `gap-px` | 1px gaps create visible grid dividers |
| Footer grid gap | `gap-10` (40px) | Column spacing |
| Demo grid gap | `gap-6 md:p-8` (24px gap, 32px padding) | Terminal showcase |
| Intent scroll gap | `lg:gap-14` (56px) | Between sidebar and content |
| Contact form gap | `gap-6` (24px) | Form field spacing |

### Grid & Container

| Container | Max Width | Usage |
|-----------|-----------|-------|
| **Standard** | `max-w-6xl` (1152px) | Header, sections, footer |
| **Wide** | `max-w-7xl` (1280px) | IntentScroll feature walkthrough |
| **Hero Text** | `max-w-5xl` (1024px) | Hero heading constraint |
| **Hero Body** | `max-w-2xl` (672px) | Hero subtitle constraint |
| **Architecture** | `max-w-4xl` (896px) | Architecture stack diagram |
| **Section Text** | `max-w-3xl` (768px) | FAQ, section body text |

**Grid Patterns:**
- Feature grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` — 3-column on desktop, 2 on tablet, stack on mobile
- Footer: `md:grid-cols-[1.5fr_1fr_1fr_1fr]` — wider brand column + 3 equal link columns
- Demo: `md:grid-cols-[1.2fr_0.8fr]` — wider terminal + narrower log panel
- IntentScroll: `lg:grid-cols-12 lg:gap-14` — 4-column sidebar + 8-column content (sticky)
- Start section: `lg:grid-cols-12` — 5-column text + 7-column cards
- Contact form: `sm:grid-cols-2` — 2-column field layout

### Sticky Positions

| Element | Position | Z-index |
|---------|----------|---------|
| Header | `fixed inset-x-0 top-0` | `z-50` |
| IntentScroll sidebar | `lg:sticky lg:top-28` | Default |
| IntentScroll visual | `lg:sticky lg:top-28` | Default |
| Mobile IntentScroll tabs | `sticky top-[58px]` | `z-20` |

### Responsive Breakpoints

Standard Tailwind v4: `sm:` (640px), `md:` (768px), `lg:` (1024px).

**Responsive collapse behavior:**
- Hero title: `text-4xl` → `sm:text-5xl` → `md:text-6xl` → `lg:text-7xl`
- Section title: `text-3xl` → `sm:text-4xl` → `md:text-5xl`
- 3-column grids collapse: 3 → 2 → 1 column
- Marquee logos: `size-5` → `size-4` on mobile
- Header padding: `py-4` → `py-2` on scroll

### Whitespace Philosophy

- **Darkness as space**: On the slate-black canvas, empty space isn't white — it's absence. The `oklch(0.148)` background IS the whitespace, and content emerges from it through luminance.
- **Compressed headlines, expanded surroundings**: Display text at 72px with `-0.04em` tracking is dense and compressed, but sits within vast dark padding (144–176px hero top). The contrast between typographic density and spatial generosity creates tension.
- **Section isolation**: Each section is separated by generous vertical padding (`py-20` / `py-28`) with no visible dividers — the dark background provides natural separation.
- **Inward masking**: The `.bg-grid` pattern uses `radial-gradient` masking to fade content edges, drawing focus toward the center of each section.

---

## 6. Depth & Elevation

Niyatna rejects traditional dark-mode shadows (dark on dark is invisible). Depth is communicated through luminance stacking and translucent borders.

| Level | Treatment | OKLCH Lightness | Use |
|-------|-----------|-----------------|-----|
| **Canvas (Level 0)** | Page background, no shadow | `0.148` | Deepest surface — hero, page body |
| **Surface (Level 1)** | `bg-card` + `ring-1 ring-foreground/10` | `0.218` | Cards, popover backgrounds, sidebar |
| **Muted (Level 2)** | `bg-muted` / `bg-secondary` | `0.275` | Accordion open states, hover fills, secondary panels |
| **Glass (Level 3)** | `bg-white/[0.04]` + `backdrop-blur-xl` + `border-white/[0.08]` + `inset 1px white shadow` | Translucent | Floating header (scrolled), glass panels, hero pill |
| **Elevated (Level 4)** | `shadow-lg shadow-black/40` + `backdrop-blur-xl` | Translucent | Scrolled header, mobile drawer |
| **Overlay (Level 5)** | `bg-white/95 dark:bg-zinc-950/95` + `shadow-2xl backdrop-blur-xl` | Near-opaque | Mobile menu drawer |

**Depth Techniques:**
- **Luminance stacking**: Each container level steps up in OKLCH lightness: `0.148` → `0.218` → `0.275`. The progression is subtle and uniform.
- **Translucent borders**: `border-white/10` or `border-white/[0.08]` outlines edges on dark surfaces, creating visible structure without heaviness.
- **Inset highlights**: A `1px` inner white shadow (`shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]`) mimics light reflections on the top edge of glass panels.
- **Ring borders**: Cards use `ring-1 ring-foreground/5` (light) / `ring-foreground/10` (dark) — shadow-as-border technique for softer containment than solid borders.
- **Backdrop blur**: `backdrop-blur-xl` on glass elements creates frosted-glass depth without opaque backgrounds.

---

## 7. Do's and Don'ts

### Do
- Use `rounded-full` for all buttons, CTAs, navigation links, and status pills
- Use `rounded-4xl` (26px) for card containers and `rounded-3xl` (22px) for badges/inputs
- Layer panels using `.glass` class with `backdrop-blur-xl` + inset white shadow
- Use Geist Mono exclusively for technical strings — always uppercase with wide tracking (`0.12em`–`0.20em`)
- Keep display headlines tight with negative letter-spacing (`tracking-[-0.04em]` at hero scale)
- Write CTAs matching the qualified-access posture: "Request Access", "Begin Qualification", "Apply for Readiness"
- Use `text-muted-foreground` and `text-foreground/70` for secondary text — opacity as hierarchy
- Communicate depth through luminance stacking (lighter = more elevated), never through drop shadows on dark
- Use OKLCH values for all color definitions — not hex, not rgb
- Keep the color system entirely achromatic — cool slate-blue undertone only

### Don't
- Never inject purple, neon blue, green, or any chromatic AI glows/gradients
- Don't use pure white (`oklch(1 0 0)`) as text on dark — use `oklch(0.987 0.002 197.1)` (matte porcelain)
- Don't use solid colored backgrounds for interactive elements — translucency is the system
- Don't use heavy drop-shadows on dark-mode cards — they're invisible and muddy
- Don't write CTAs begging for signups: "free trials", "book a demo", "get started free"
- Don't use Geist Mono for body text, headings, or inline content — it is strictly for metadata and ritual labels
- Don't mix font-families inside a single content block
- Don't use sharp rectangular corners for buttons or interactive elements
- Don't add a brand accent color — the system is deliberately achromatic
- Don't use `border-solid` dark borders on dark backgrounds — use semi-transparent white borders instead

---

## 8. Animation & Motion

### Entry Animations (Motion library v12)

**Hero entrance** — 5 staggered elements:
- `opacity: 0→1, y: 6–10px→0`
- Delays: `0s, 0.05s, 0.12s, 0.18s, 0.32s`
- Duration: `0.5–0.6s`
- Easing: default spring
- Source: [hero.tsx](file:///home/galyarder/projects/Niyatna/components/site/hero.tsx)

**Mobile menu** — `AnimatePresence`:
- `opacity: 0→1, y: -10→0`
- Duration: `0.2s`
- Source: [header-shell.tsx](file:///home/galyarder/projects/Niyatna/components/site/header-shell.tsx)

**Demo log entries** — staggered list:
- `opacity: 0→1, x: -4→0`
- Duration: `0.2s`, stagger: `index * 0.05s`
- Source: [demo.tsx](file:///home/galyarder/projects/Niyatna/components/site/demo.tsx)

### Typewriter Animation

- Words: `["Agentic Company.", "Intent-Led Standard.", "Autonomous Workforce.", "Future of Business."]`
- Type speed: `70ms`, delete speed: `40ms`, pause delay: `1700ms`
- Cursor: blinking line (`animate-blink-cursor`)
- Source: [text-typing.tsx](file:///home/galyarder/projects/Niyatna/components/site/text-typing.tsx)

### Scroll-linked Motion

**Screenshot frame tilt:**
- `rotateX: [4°, 0°, -2°]` based on scroll progress via `useScroll`/`useTransform`
- Opacity: `[0, 1, 1, 0.7]` scroll-mapped
- Perspective: `1400px`
- Source: [screenshot-frame.tsx](file:///home/galyarder/projects/Niyatna/components/site/screenshot-frame.tsx)

**IntentScroll step transitions:**
- Step indicator slides via `transform: translateY(${activeIndex * 54}px)` with `transition-transform duration-300`
- Scroll detection: `requestAnimationFrame` + `getBoundingClientRect` (not Intersection Observer)
- Step spacers: `h-[76vh]` per step on desktop
- Source: [intent-scroll.tsx](file:///home/galyarder/projects/Niyatna/components/site/intent-scroll.tsx)

### Background Atmosphere

**WebGL Line Waves:**
- Library: `ogl` (WebGL)
- GLSL fragment shader with sin-wave displacement
- Parameters: `rotation=-38, speed=0.35, warpIntensity=0.3, innerLineCount=40, outerLineCount=15`
- Brightness: `0.16` (dark) / `0.32` (light)
- Colors: `#ffffff` (all channels)
- Mouse influence: `1.6`
- Visibility: Intersection Observer pauses when off-screen
- Accessibility: `prefers-reduced-motion` → static radial gradient fallback
- Source: [line-waves.tsx](file:///home/galyarder/projects/Niyatna/components/site/line-waves.tsx), [background-waves.tsx](file:///home/galyarder/projects/Niyatna/components/site/background-waves.tsx)

---

## 9. Border Radius Scale

| Token | Value | Computed | Usage |
|-------|-------|----------|-------|
| `radius-sm` | `calc(var(--radius) * 0.6)` | ~6px | Mini status tags, inline badges |
| `radius-md` | `calc(var(--radius) * 0.8)` | ~8px | Card contents, prose code blocks |
| `radius-lg` | `var(--radius)` | 10px | Section panels, header logo, small image cards |
| `radius-xl` | `calc(var(--radius) * 1.4)` | ~14px | Custom containers, popup menus |
| `radius-2xl` | `calc(var(--radius) * 1.8)` | ~18px | Glass panels, accordion containers, contact inputs |
| `radius-3xl` | `calc(var(--radius) * 2.2)` | ~22px | Badges, inputs, mobile drawer |
| `radius-4xl` | `calc(var(--radius) * 2.6)` | ~26px | Cards, buttons (base radius before pill override) |
| `rounded-full` | `9999px` | Pill | Buttons (CTA), nav links, marquee tags, social icons, status pills |
