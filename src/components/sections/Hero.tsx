import { ProductCta } from '../ui/ProductCta';

const pipelineSteps = [
  { label: 'Intent packet', meta: 'goal + taste + boundary' },
  { label: 'Trust gate', meta: 'allowed + approval + private' },
  { label: 'Agent loop', meta: 'worker + reviewer + verifier' },
  { label: 'Proof return', meta: 'diff + receipt + decision trail' },
] as const;

const signalWords = ['intent', 'delegation', 'proof', 'agency'];

export const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-24 pt-32 text-porcelain sm:px-6 sm:pb-32 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_18%,rgba(199,131,82,0.28),transparent_29%),radial-gradient(circle_at_8%_22%,rgba(61,77,53,0.28),transparent_24%),linear-gradient(135deg,#090907_0%,#15110c_47%,#070705_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(244,239,229,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(244,239,229,.7)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 overflow-hidden lg:min-h-[calc(100dvh-9rem)] lg:grid-cols-[1.14fr_0.86fr]">
        <div className="max-w-5xl">
          <p className="mb-8 max-w-xl font-mono text-xs uppercase tracking-[0.28em] text-clay-bright/80 animate-in delay-100">
            Niyatna — empowering human intent
          </p>

          <h1 className="max-w-5xl text-balance text-[clamp(3.25rem,14vw,5.2rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-porcelain animate-in delay-200 sm:text-[clamp(4rem,6.3vw,5.2rem)] sm:leading-[0.86] sm:tracking-[-0.065em] lg:text-[clamp(5rem,6.6vw,5.9rem)]">
            <span className="block whitespace-nowrap">Human intent,</span>
            <span className="block whitespace-nowrap text-clay">made executable.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-light-steel/80 animate-in delay-300 md:text-xl">
            Niyatna keeps the human signal intact: intent becomes a structured packet, delegation passes through trust gates, agentic work runs in loops, and every outcome returns with proof.
          </p>

          <div className="mt-10 animate-in delay-400">
            <ProductCta variant="hero" />
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 animate-in delay-500 sm:grid-cols-4">
            {signalWords.map((word) => (
              <div key={word} className="border-t border-porcelain/12 pt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-storm-cloud">
                {word}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-w-0 overflow-hidden animate-in delay-400">
          <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full border border-clay/25 lg:block" />
          <div className="absolute -right-6 bottom-12 hidden h-20 w-20 rounded-[2rem] border border-porcelain/10 bg-porcelain/[0.035] rotate-6 lg:block" />

          <div className="double-bezel w-full max-w-full overflow-hidden rounded-[2.35rem] p-2">
            <div className="relative overflow-hidden rounded-[1.85rem] border border-porcelain/10 bg-[linear-gradient(150deg,#17130e,#0b0b08_58%,#1c130d)] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] sm:p-7">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-clay/18 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,rgba(244,239,229,.9)_1px,transparent_1.5px)] [background-size:22px_22px]" />

              <div className="relative mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-light-steel/45">Intent packet</p>
                  <p className="mt-3 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.035em] text-porcelain">
                    Build an agentic company surface without losing the human thesis.
                  </p>
                </div>
                <div className="rounded-full border border-clay/30 bg-clay/10 px-3 py-1 font-mono text-[11px] text-clay-bright">
                  proof required
                </div>
              </div>

              <div className="relative space-y-3">
                {pipelineSteps.map((step, index) => (
                  <div
                    key={step.label}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[1.35rem] border border-porcelain/10 bg-porcelain/[0.035] px-4 py-3 transition-[transform,border-color,background-color] duration-300 ease-[var(--ease-out)] hover:border-clay/30 hover:bg-clay/[0.07]"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-clay/12 font-mono text-xs text-clay-bright">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-porcelain">{step.label}</span>
                      <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.14em] text-storm-cloud">{step.meta}</span>
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-clay shadow-[0_0_24px_rgba(199,131,82,0.7)]" />
                  </div>
                ))}
              </div>

              <div className="relative mt-7 rounded-[1.6rem] border border-porcelain/10 bg-pitch-black/62 p-5">
                <p className="text-sm leading-6 text-light-steel/75">
                  OpenIntent names the handoff. Proof of Intent verifies the work. Niyatna makes the bridge legible enough for humans to trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
