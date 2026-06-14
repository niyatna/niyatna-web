import { HugeiconsIcon } from '@hugeicons/react';

import { moreFeatures } from '../../data/more-features';
import { SectionHeader } from '../ui/SectionHeader';

export const MoreFeaturesSection = () => {
  return (
    <section id="openintent" className="mx-auto max-w-7xl px-6 py-32">
      <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <SectionHeader
          eyebrow="OpenIntent / Proof of Intent"
          title="A brand that can become a primitive."
          description="Niyatna is the public face. OpenIntent can become the specification for intent handoff. Proof of Intent can become the mechanism that keeps agentic work accountable."
          className="max-w-2xl"
          descriptionClassName="mt-4"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {moreFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-border-subtle bg-porcelain/[0.02] p-7 shadow-2xl shadow-pitch-black/20 transition-[transform,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-out)] hover:-translate-y-1 hover:border-[#d8b37c]/30 hover:bg-porcelain/[0.035]"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#d8b37c]/10 opacity-0 blur-[50px] transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border-subtle bg-porcelain/[0.03] text-[#e7c996] shadow-inner transition-[border-color,background-color,transform,color] duration-300 ease-[var(--ease-out)] group-hover:scale-105 group-hover:border-[#d8b37c]/30 group-hover:bg-[#d8b37c]/10">
                <HugeiconsIcon icon={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="relative z-10 mb-3 text-lg font-medium tracking-tight text-foreground">{feature.title}</h3>
              <p className="relative z-10 text-sm leading-relaxed text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
