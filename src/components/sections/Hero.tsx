import { ProductCta } from '../ui/ProductCta';

const pipelineSteps = [
  'Intent',
  'Delegation',
  'Execution',
  'Proof',
  'Time returned',
] as const;

export const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-36 text-porcelain sm:pt-44">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_18%,rgba(177,128,66,0.26),transparent_28%),radial-gradient(circle_at_12%_22%,rgba(72,95,72,0.20),transparent_25%),linear-gradient(135deg,#090807_0%,#10100d_44%,#050505_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex rounded-full border border-porcelain/10 bg-porcelain/[0.04] px-4 py-2 text-[11px] font-mono uppercase tracking-[0.24em] text-light-steel/80 animate-in delay-100">
            Niyatna — empowering human intent
          </div>

          <h1 className="max-w-4xl text-5xl font-medium leading-[0.92] tracking-[-0.075em] text-balance animate-in delay-200 sm:text-6xl md:text-8xl">
            Human intent,
            <span className="block text-[#d8b37c]">made executable.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-light-steel/78 animate-in delay-300 md:text-xl">
            Niyatna turns a clear human intention into trusted delegation, coordinated AI-agent execution, and proof you can review — so time, leverage, and agency return to the human.
          </p>

          <div className="mt-10 animate-in delay-400">
            <ProductCta variant="hero" />
          </div>
        </div>

        <div className="relative animate-in delay-400">
          <div className="rounded-[2.25rem] border border-porcelain/10 bg-porcelain/[0.035] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="rounded-[1.8rem] border border-porcelain/10 bg-[#0d0d0a]/90 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] sm:p-8">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.22em] text-light-steel/45">Intent packet</p>
                  <p className="mt-2 text-xl font-medium text-porcelain">Build an agentic company surface</p>
                </div>
                <div className="rounded-full border border-[#d8b37c]/30 bg-[#d8b37c]/10 px-3 py-1 text-xs font-mono text-[#e7c996]">Proof required</div>
              </div>

              <div className="space-y-3">
                {pipelineSteps.map((step, index) => (
                  <div
                    key={step}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-porcelain/8 bg-porcelain/[0.035] px-4 py-3"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#d8b37c]/12 text-xs font-mono text-[#e7c996]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-light-steel">{step}</span>
                    <span className="h-2 w-2 rounded-full bg-[#d8b37c] shadow-[0_0_24px_rgba(216,179,124,0.65)]" />
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-porcelain/10 bg-pitch-black/60 p-5">
                <p className="text-sm leading-6 text-light-steel/70">
                  OpenIntent describes the protocol. Proof of Intent verifies the delegation. Niyatna is the public layer that makes the primitive understandable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
