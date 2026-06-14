import type { ReactNode } from 'react';

import { ProductCta } from '../components/ui/ProductCta';
import { ecosystem, intentAnatomy, manifesto, pipeline } from '../data/landing';

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-clay/70">
      {children}
    </p>
  );
}

function SectionShell({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-[1480px] px-5 py-28 sm:px-8 md:py-40 ${className}`}>
      {children}
    </section>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden px-5 pb-24 pt-32 sm:px-8 md:pt-40">
      <div className="absolute inset-0 -z-20 bg-earth" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(196,130,81,0.20),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(114,93,63,0.24),transparent_30%),linear-gradient(145deg,rgba(10,9,7,0.10),rgba(10,9,7,0.92)_70%)]" />
      <div className="grain pointer-events-none fixed inset-0 z-[1]" />

      <div className="mx-auto grid min-h-[calc(100dvh-10rem)] max-w-[1480px] items-end gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10 pb-8">
          <div className="mb-8 inline-flex rounded-full border border-porcelain/10 bg-porcelain/[0.035] px-4 py-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
            <Eyebrow>Niyatna — empowering human intent</Eyebrow>
          </div>

          <h1 className="max-w-6xl text-balance text-[clamp(4.1rem,10vw,11.5rem)] font-semibold leading-[0.78] tracking-[-0.105em] text-porcelain">
            Intent becomes leverage.
          </h1>

          <div className="mt-10 grid max-w-5xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <p className="text-xl leading-8 text-porcelain/70 md:text-2xl md:leading-9">
              Niyatna turns human intention into delegated AI-agent execution with proof you can review.
            </p>
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-porcelain/38">
                human intent → trusted delegation → agentic execution → proof → time returned
              </p>
              <ProductCta variant="hero" />
            </div>
          </div>
        </div>

        <div className="relative z-10 pb-6 lg:pb-16">
          <div className="rotate-[-1.5deg] rounded-[2.5rem] border border-porcelain/10 bg-porcelain/[0.04] p-2 shadow-[0_40px_140px_rgba(0,0,0,0.52)] backdrop-blur-md">
            <div className="rounded-[2rem] border border-porcelain/10 bg-ink/88 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] sm:p-8">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <Eyebrow>Intent packet</Eyebrow>
                  <h2 className="mt-3 max-w-sm text-3xl font-medium tracking-tight text-porcelain sm:text-4xl">
                    A reviewable contract for agentic work.
                  </h2>
                </div>
                <div className="rounded-full border border-clay/30 bg-clay/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-clay">
                  v0.1
                </div>
              </div>

              <div className="space-y-3">
                {intentAnatomy.slice(0, 4).map(([label, description], index) => (
                  <div key={label} className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-porcelain/8 bg-porcelain/[0.035] p-4">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-clay/12 font-mono text-xs text-clay">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.20em] text-porcelain/42">{label}</p>
                      <p className="mt-1 text-sm leading-6 text-porcelain/68">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-3xl border border-clay/20 bg-clay/[0.07] p-5">
                <p className="text-sm leading-6 text-porcelain/68">
                  If a system cannot return proof, it has not earned the right to call the intent complete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <SectionShell id="manifesto" className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div className="lg:sticky lg:top-32">
        <Eyebrow>Manifesto</Eyebrow>
        <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-none tracking-[-0.055em] text-porcelain sm:text-6xl">
          AI should extend the human, not erase them.
        </h2>
      </div>
      <div className="space-y-8">
        {manifesto.map((paragraph) => (
          <p key={paragraph} className="max-w-4xl text-2xl leading-[1.35] tracking-[-0.035em] text-porcelain/78 sm:text-4xl">
            {paragraph}
          </p>
        ))}
      </div>
    </SectionShell>
  );
}

function Pipeline() {
  return (
    <SectionShell id="pipeline">
      <div className="mb-14 max-w-4xl">
        <Eyebrow>Execution pipeline</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.055em] text-porcelain sm:text-6xl">
          From one human signal to a verified result.
        </h2>
      </div>

      <div className="grid grid-flow-dense gap-4 lg:grid-cols-12">
        {pipeline.map((step, index) => (
          <article
            key={step.title}
            className={`group min-h-[260px] rounded-[2rem] border border-porcelain/10 bg-porcelain/[0.025] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.055)] transition-[transform,border-color,background-color] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 hover:border-clay/35 hover:bg-porcelain/[0.04] ${
              index === 0 || index === 3 ? 'lg:col-span-5' : index === 1 ? 'lg:col-span-7' : index === 2 ? 'lg:col-span-4' : 'lg:col-span-8'
            }`}
          >
            <div className="mb-12 flex items-center justify-between gap-6">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-clay/70">{step.eyebrow}</span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-porcelain/[0.045] font-mono text-xs text-porcelain/45">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-3xl font-semibold tracking-[-0.045em] text-porcelain sm:text-5xl">{step.title}</h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-porcelain/58">{step.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function IntentAnatomy() {
  return (
    <SectionShell id="intent-anatomy" className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <Eyebrow>Anatomy of intent</Eyebrow>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-none tracking-[-0.055em] text-porcelain sm:text-6xl">
          A prompt asks. An intent packet governs.
        </h2>
        <p className="mt-8 max-w-2xl text-xl leading-8 text-porcelain/62">
          The primitive Niyatna cares about is not the chat message. It is the structured handoff that lets a person delegate without losing taste, consent, or review power.
        </p>
      </div>

      <div className="rounded-[2.5rem] border border-porcelain/10 bg-porcelain/[0.035] p-2 shadow-[0_34px_120px_rgba(0,0,0,0.44)]">
        <div className="rounded-[2rem] border border-porcelain/10 bg-[#0d0b08] p-5 sm:p-7">
          <div className="mb-6 flex items-center justify-between border-b border-porcelain/10 pb-5">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-porcelain/45">intent.schema</p>
            <p className="font-mono text-xs text-clay">requires proof</p>
          </div>
          <div className="space-y-3">
            {intentAnatomy.map(([label, description]) => (
              <div key={label} className="grid gap-3 rounded-2xl border border-porcelain/8 bg-porcelain/[0.025] p-4 sm:grid-cols-[130px_1fr]">
                <p className="font-mono text-xs uppercase tracking-[0.20em] text-clay">{label}</p>
                <p className="text-sm leading-6 text-porcelain/66">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Ecosystem() {
  return (
    <SectionShell id="openintent">
      <div className="mb-14 max-w-4xl">
        <Eyebrow>Architecture</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.055em] text-porcelain sm:text-6xl">
          Brand, protocol, mechanism.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {ecosystem.map((item) => (
          <article key={item.name} className="rounded-[2.35rem] border border-porcelain/10 bg-porcelain/[0.03] p-2">
            <div className="flex min-h-[390px] flex-col justify-between rounded-[1.8rem] border border-porcelain/10 bg-ink/70 p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-clay/75">{item.role}</p>
                <h3 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-porcelain">{item.name}</h3>
              </div>
              <p className="text-lg leading-8 text-porcelain/62">{item.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function Closing() {
  return (
    <section id="early-access" className="px-5 py-28 sm:px-8 md:py-44">
      <div className="mx-auto max-w-[1480px] overflow-hidden rounded-[3rem] border border-porcelain/10 bg-[radial-gradient(circle_at_20%_20%,rgba(196,130,81,0.16),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-8 shadow-[0_40px_140px_rgba(0,0,0,0.45)] sm:p-12 md:p-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Eyebrow>The return</Eyebrow>
            <h2 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.88] tracking-[-0.075em] text-porcelain sm:text-7xl md:text-8xl">
              More time for the human who had the intent.
            </h2>
          </div>
          <div>
            <p className="mb-8 text-xl leading-8 text-porcelain/66">
              Niyatna starts as a landing page, but the direction is larger: an intent layer for agentic companies and humans who need leverage without surrendering judgment.
            </p>
            <ProductCta variant="footer" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <main id="main-content" className="w-full max-w-full overflow-x-hidden">
      <Hero />
      <Manifesto />
      <Pipeline />
      <IntentAnatomy />
      <Ecosystem />
      <Closing />
    </main>
  );
}
