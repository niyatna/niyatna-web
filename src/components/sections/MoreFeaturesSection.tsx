import { HugeiconsIcon } from '@hugeicons/react';

import { moreFeatures } from '../../data/more-features';
import { SectionHeader } from '../ui/SectionHeader';

export const MoreFeaturesSection = () => {
  return (
    <section id="openintent" className="mx-auto max-w-7xl px-5 py-28 sm:px-6 sm:py-36">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <SectionHeader
            eyebrow="OpenIntent / Proof of Intent"
            title="A brand that can become a primitive."
            description="Niyatna is the public face. OpenIntent can become the specification for intent handoff. Proof of Intent can become the mechanism that keeps agentic work accountable."
            className="max-w-2xl"
            descriptionClassName="mt-4"
          />
        </div>

        <div className="grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-6">
          {moreFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-[1.7rem] border border-border-subtle bg-porcelain/[0.025] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-[transform,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-out)] hover:-translate-y-1 hover:border-clay/30 hover:bg-porcelain/[0.04] ${index === 2 || index === 4 ? 'sm:col-span-4' : 'sm:col-span-3'} ${index === 0 ? 'sm:row-span-2' : ''}`}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-clay/10 opacity-0 blur-[50px] transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 mb-8 inline-flex h-12 w-12 items-center justify-center rounded-[1.05rem] border border-border-subtle bg-porcelain/[0.035] text-clay-bright shadow-inner transition-[border-color,background-color,transform,color] duration-300 ease-[var(--ease-out)] group-hover:scale-105 group-hover:border-clay/30 group-hover:bg-clay/10">
                <HugeiconsIcon icon={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="relative z-10 mb-3 text-xl font-semibold tracking-[-0.025em] text-foreground">{feature.title}</h3>
              <p className="relative z-10 text-sm leading-7 text-light-steel/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
