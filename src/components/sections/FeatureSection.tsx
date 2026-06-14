import { useEffect, useRef, useState } from 'react';

import type { FeatureId } from '../../data/features';
import { features } from '../../data/features';
import { HEADER_SCROLL_OFFSET, smoothScrollToElement } from '../../lib/smooth-scroll';
import { useReducedMotion } from '../../lib/useReducedMotion';
import { SectionHeader } from '../ui/SectionHeader';

const visualLabels: Record<FeatureId, string[]> = {
  '01': ['goal', 'constraints', 'taste', 'deadline'],
  '02': ['allowed', 'approval', 'private', 'blocked'],
  '03': ['worker', 'reviewer', 'verifier', 'handoff'],
  '04': ['diff', 'check', 'screenshot', 'receipt'],
  '05': ['schema', 'context', 'permissions', 'proof'],
  '06': ['rest', 'think', 'build', 'decide'],
};

function IntentVisual({ id }: { id: FeatureId }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_26%_24%,rgba(216,179,124,0.22),transparent_30%),linear-gradient(145deg,#11110d,#070706)] p-6 sm:p-8">
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.65)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative flex h-full flex-col justify-between rounded-[1.6rem] border border-porcelain/10 bg-pitch-black/50 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-light-steel/50">Niyatna layer {id}</span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#d8b37c] shadow-[0_0_24px_rgba(216,179,124,0.75)]" />
        </div>

        <div className="my-8 grid gap-3">
          {visualLabels[id].map((label, index) => (
            <div
              key={label}
              className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-2xl border border-porcelain/10 bg-porcelain/[0.035] p-4"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#d8b37c]/12 font-mono text-xs text-[#e7c996]">
                {index + 1}
              </span>
              <div>
                <div className="h-2 w-2/3 rounded-full bg-light-steel/35" />
                <p className="mt-2 text-sm capitalize text-light-steel/72">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-[#d8b37c]/20 bg-[#d8b37c]/8 px-4 py-3 text-sm text-[#e7c996]">
          <span>proof returned</span>
          <span className="font-mono">verified</span>
        </div>
      </div>
    </div>
  );
}

export const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState<FeatureId>('01');
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveFeature((entry.target.getAttribute('data-id') || '01') as FeatureId);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToFeature = (id: FeatureId) => {
    const target = document.getElementById(`feature-${id}`);
    if (target) smoothScrollToElement(target, { offset: HEADER_SCROLL_OFFSET });
  };

  const activeIndex = features.findIndex((feature) => feature.id === activeFeature);

  return (
    <section id="thesis" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-24">
        <div className="flex w-full flex-col gap-12 lg:sticky lg:top-32 lg:w-1/3">
          <SectionHeader
            eyebrow="Niyatna thesis"
            title="From intent to verified execution."
            description="The primitive is not another chatbot. It is a cleaner handoff between human intention, agentic labor, and reviewable proof."
          />

          <div className="lg:hidden -mx-2 overflow-x-auto pb-1 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-2 px-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => scrollToFeature(feature.id)}
                  className={`snap-center rounded-full px-4 py-2 font-mono text-xs tracking-wide whitespace-nowrap transition-[color,background-color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97]
                    ${activeFeature === feature.id
                      ? 'border border-[#d8b37c]/30 bg-[#d8b37c]/10 text-[#e7c996]'
                      : 'border border-transparent text-text-muted hover:bg-porcelain/5 hover:text-text-muted-hover'
                    }`}
                >
                  {feature.id} {feature.navTitle}
                </button>
              ))}
            </div>
          </div>

          <div className="relative hidden flex-col gap-1 lg:flex">
            <div
              className="pointer-events-none absolute left-0 right-0 rounded-lg bg-[#d8b37c]/10"
              style={{
                height: '44px',
                transform: `translateY(${activeIndex * 48}px)`,
                transition: reducedMotion ? 'none' : 'transform 250ms var(--ease-in-out)',
              }}
            />
            {features.map((feature) => (
              <a
                key={feature.id}
                href={`#feature-${feature.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToFeature(feature.id);
                }}
                className={`relative z-10 flex items-center gap-4 rounded-lg px-4 py-3 font-mono text-sm tracking-wide transition-[color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97]
                  ${activeFeature === feature.id ? 'text-foreground' : 'text-text-muted hover:text-text-muted-hover'}`}
              >
                <span className={activeFeature === feature.id ? 'text-[#e7c996]' : ''}>{feature.id}</span>
                {feature.navTitle}
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-12 lg:w-2/3 lg:gap-20">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              id={`feature-${feature.id}`}
              data-id={feature.id}
              ref={(element) => {
                observerRefs.current[index] = element;
              }}
              className="scroll-mt-32"
            >
              <div className="overflow-hidden rounded-[2rem] border border-border-subtle bg-porcelain/[0.02]">
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-border-subtle bg-pitch-black/40">
                  <IntentVisual id={feature.id} />
                </div>
                <div className="relative overflow-hidden p-8 sm:p-12">
                  <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#d8b37c]/10 blur-3xl" />
                  <h3 className="mb-4 text-2xl font-medium text-foreground sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
