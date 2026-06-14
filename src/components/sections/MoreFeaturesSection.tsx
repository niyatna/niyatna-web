import { HugeiconsIcon } from '@hugeicons/react';

import { moreFeatures } from '../../data/more-features';

export const MoreFeaturesSection = () => {
  return (
    <section id="openintent" className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">02 — Primitive layer</div>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
            More than a brand. A clean handoff system.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            A restrained product-site rhythm: simple sections, technical proof cards, and no decorative noise — applied to intent, delegation, and evidence.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {moreFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-background/80 p-6 backdrop-blur-sm transition-colors hover:bg-zinc-950"
            >
              <div className="inline-flex size-8 items-center justify-center text-zinc-400 transition-colors group-hover:text-white">
                <HugeiconsIcon icon={feature.icon} className="size-5" strokeWidth={1.6} />
              </div>
              <div className="mt-5 text-[15px] font-medium tracking-tight text-white">
                {feature.title}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
