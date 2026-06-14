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

const visualCaption: Record<FeatureId, string> = {
  '01': 'Intent packet',
  '02': 'Trust gate',
  '03': 'Agent loop',
  '04': 'Proof return',
  '05': 'OpenIntent schema',
  '06': 'Agency returned',
};

function IntentVisual({ id }: { id: FeatureId }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_24%_20%,rgba(199,131,82,0.22),transparent_29%),radial-gradient(circle_at_82%_70%,rgba(55,70,46,0.24),transparent_31%),linear-gradient(145deg,#18130e,#070706)] p-5 sm:p-7">
      <div className="absolute inset-0 opacity-[0.075] [background-image:linear-gradient(rgba(244,239,229,.72)_1px,transparent_1px),linear-gradient(90deg,rgba(244,239,229,.72)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-clay/50 to-transparent" />
      <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-transparent via-porcelain/12 to-transparent" />

      <div className="relative flex h-full min-h-[28rem] flex-col justify-between rounded-[1.55rem] border border-porcelain/10 bg-pitch-black/50 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-light-steel/50">{visualCaption[id]}</span>
          <span className="h-2.5 w-2.5 rounded-full bg-clay shadow-[0_0_24px_rgba(199,131,82,0.72)]" />
        </div>

        <div className="my-8 grid gap-3">
          {visualLabels[id].map((label, index) => (
            <div
              key={label}
              className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-[1.2rem] border border-porcelain/10 bg-porcelain/[0.035] p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.035)]"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-clay/12 font-mono text-xs text-clay-bright">
                {index + 1}
              </span>
              <div>
                <div className="h-2 w-2/3 rounded-full bg-light-steel/35" />
                <p className="mt-2 text-sm capitalize text-light-steel/72">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-[1.2rem] border border-clay/22 bg-clay/8 px-4 py-3 text-sm text-clay-bright">
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
    <section id="thesis" className="relative mx-auto max-w-7xl overflow-hidden px-5 py-28 sm:px-6 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-12 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-clay/8 blur-3xl" />

      <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-24">
        <div className="flex w-full flex-col gap-12 lg:sticky lg:top-32 lg:w-[34%]">
          <SectionHeader
            eyebrow="Niyatna thesis"
            title="The handoff needs a shape."
            description="A sticky thesis rail orients the story while each scroll frame explains one layer of human intent becoming trusted execution."
          />

          <div className="lg:hidden -mx-2 overflow-x-auto pb-1 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-2 px-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => scrollToFeature(feature.id)}
                  className={`snap-center rounded-full px-4 py-2 font-mono text-xs tracking-wide whitespace-nowrap transition-[color,background-color,transform,border-color] duration-150 ease-[var(--ease-out)] active:scale-[0.97]
                    ${activeFeature === feature.id
                      ? 'border border-clay/34 bg-clay/12 text-clay-bright'
                      : 'border border-porcelain/8 text-text-muted hover:bg-porcelain/5 hover:text-text-muted-hover'
                    }`}
                >
                  {feature.id} {feature.navTitle}
                </button>
              ))}
            </div>
          </div>

          <div className="relative hidden flex-col gap-1 lg:flex">
            <div
              className="pointer-events-none absolute left-0 right-0 rounded-xl border border-clay/18 bg-clay/10"
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
                className={`relative z-10 flex items-center gap-4 rounded-xl px-4 py-3 font-mono text-sm tracking-wide transition-[color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97]
                  ${activeFeature === feature.id ? 'text-porcelain' : 'text-text-muted hover:text-text-muted-hover'}`}
              >
                <span className={activeFeature === feature.id ? 'text-clay-bright' : ''}>{feature.id}</span>
                {feature.navTitle}
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-12 lg:w-[66%] lg:gap-20">
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
              <div className="double-bezel overflow-hidden rounded-[2rem] p-2 hover-lift">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[1.55rem] border border-border-subtle bg-pitch-black/40">
                  <IntentVisual id={feature.id} />
                </div>
                <div className="relative overflow-hidden px-6 py-7 sm:px-10 sm:py-9">
                  <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-clay/10 blur-3xl" />
                  <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-clay-bright/65">{feature.id} / {feature.navTitle}</p>
                      <h3 className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                        {feature.title}
                      </h3>
                    </div>
                    <span className="mt-1 h-px w-full bg-gradient-to-r from-clay/50 to-transparent sm:w-28" />
                  </div>
                  <p className="relative z-10 mt-5 max-w-3xl text-base leading-8 text-light-steel/72 sm:text-lg">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
