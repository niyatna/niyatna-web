import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { ProductCta } from '../ui/ProductCta';

const stats = [
  { value: 'Human-in-loop', label: 'Control model' },
  { value: 'Proof required', label: 'Every output' },
  { value: 'OpenIntent', label: 'Protocol lane' },
  { value: 'No blind autonomy', label: 'Trust rule' },
] as const;

const consoleRows = [
  { key: 'intent', value: 'launch public agentic-company surface' },
  { key: 'constraints', value: 'keep human approval + private context intact' },
  { key: 'delegate', value: 'workers run, reviewers inspect, verifier returns proof' },
  { key: 'receipt', value: 'diffs, screenshots, checks, links' },
] as const;

export const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[62vh] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <a
          href="#proof"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-400 backdrop-blur-md transition-colors hover:text-white animate-rise"
        >
          <span className="size-1.5 rounded-full bg-white/70" />
          <span>v0.1 — intent layer</span>
          <HugeiconsIcon icon={ArrowRight01Icon} className="size-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        </a>

        <h1 className="mt-7 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl animate-rise delay-100">
          <span className="text-foreground/55">The intent-native</span>
          <br />
          <span className="text-foreground">execution layer</span>
          <span className="ml-1 inline-block h-[0.9em] w-px translate-y-[0.12em] bg-foreground/80" aria-hidden />
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg animate-rise delay-200">
          Niyatna turns human intent into trusted delegation, coordinated agent work, and reviewable proof — so the human gets leverage without giving up judgment.
        </p>

        <div className="mt-9 animate-rise delay-300">
          <ProductCta variant="hero" />
        </div>

        <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500 animate-rise delay-400">
          Human intent · Agent delegation · Proof of Intent
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 animate-rise delay-500">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background/88 px-5 py-7 text-center backdrop-blur-sm sm:px-6 sm:py-8">
              <div className="font-mono text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs uppercase tracking-wide text-zinc-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div id="thesis" className="mt-14 overflow-hidden rounded-2xl window-frame">
          <div className="flex items-center gap-1.5 border-b border-white/[0.08] bg-zinc-950/90 px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-white/22" />
            <span className="size-2.5 rounded-full bg-white/14" />
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">niyatna.intent</span>
          </div>

          <div className="grid gap-px bg-white/[0.08] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="bg-zinc-950/86 p-6 sm:p-8 lg:p-10">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">Intent packet preview</div>
              <h2 className="mt-5 max-w-xl text-2xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                A single handoff that keeps goal, taste, limits, and proof attached.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                A dark canvas, white light-trail atmosphere, centered confidence, and window-like proof surface — adapted for Niyatna’s intent/delegation thesis.
              </p>
            </div>

            <div className="bg-black/70 p-4 sm:p-6">
              <div className="rounded-xl border border-white/[0.08] bg-black/70 p-4 font-mono text-xs text-zinc-300 shadow-inner sm:p-5">
                {consoleRows.map((row) => (
                  <div key={row.key} className="grid grid-cols-[7.5rem_1fr] gap-3 border-b border-white/[0.06] py-3 last:border-b-0">
                    <span className="text-zinc-600">{row.key}</span>
                    <span className="text-zinc-300">{row.value}</span>
                  </div>
                ))}
                <div className="mt-5 flex items-center gap-2 text-white">
                  <span className="text-zinc-600">$</span>
                  <span>return proof --human-readable</span>
                  <span className="h-4 w-px animate-pulse bg-white/70" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
