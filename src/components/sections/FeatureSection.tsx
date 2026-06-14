import { useEffect, useRef, useState } from 'react';

import { HugeiconsIcon } from '@hugeicons/react';

import type { Feature, FeatureId } from '../../data/features';
import { features } from '../../data/features';
import { HEADER_SCROLL_OFFSET, smoothScrollToElement } from '../../lib/smooth-scroll';
import { useReducedMotion } from '../../lib/useReducedMotion';

function FeatureTerminal({ feature }: { feature: Feature }) {
  return (
    <div className="relative h-full min-h-[24rem] overflow-hidden bg-zinc-950/90 p-4 sm:min-h-[30rem] sm:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-8 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-black/70 shadow-2xl shadow-black/60">
        <div className="flex items-center gap-1.5 border-b border-white/[0.08] bg-zinc-950/95 px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-white/22" />
          <span className="size-2.5 rounded-full bg-white/14" />
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="ml-3 truncate font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">{feature.visualTitle}</span>
        </div>

        <div className="grid flex-1 gap-px bg-white/[0.07] md:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-black/78 p-5 font-mono text-xs text-zinc-400">
            <div className="mb-4 flex items-center gap-2 text-zinc-500">
              <HugeiconsIcon icon={feature.icon} className="size-4" strokeWidth={1.7} />
              <span>{feature.eyebrow.toLowerCase()}.layer</span>
            </div>
            {feature.visualRows.map((row) => (
              <div key={row} className="border-b border-white/[0.06] py-3 last:border-b-0">
                {row}
              </div>
            ))}
          </div>

          <div className="bg-zinc-950/90 p-5">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">Proof channel</div>
            <div className="space-y-3">
              {feature.bullets.map((bullet, index) => (
                <div key={bullet} className="flex items-start gap-3 rounded-lg border border-white/[0.08] bg-white/[0.035] p-3 text-sm text-zinc-300">
                  <span className="mt-0.5 font-mono text-xs text-zinc-600">0{index + 1}</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-white/[0.08] bg-black/55 p-4 font-mono text-xs text-zinc-500">
              <span className="text-zinc-600">$</span> verify intent --return-receipts
              <span className="ml-1 inline-block h-3 w-px translate-y-0.5 animate-pulse bg-white/70" />
            </div>
          </div>
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
    let frame = 0;

    const updateActiveFeature = () => {
      frame = 0;
      const focusY = HEADER_SCROLL_OFFSET + window.innerHeight * 0.28;
      let nextFeature = features[0]?.id ?? '01';
      let nearestDistance = Number.POSITIVE_INFINITY;

      observerRefs.current.forEach((element) => {
        if (!element) return;
        const id = element.getAttribute('data-id') as FeatureId | null;
        if (!id) return;

        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - focusY);
        const isPastTop = rect.top <= focusY;

        if (isPastTop && distance < nearestDistance) {
          nearestDistance = distance;
          nextFeature = id;
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        nextFeature = features[features.length - 1]?.id ?? nextFeature;
      }

      setActiveFeature(nextFeature);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateActiveFeature);
    };

    updateActiveFeature();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  const scrollToFeature = (id: FeatureId) => {
    const target = document.getElementById(`feature-${id}`);
    if (target) smoothScrollToElement(target, { offset: HEADER_SCROLL_OFFSET });
  };

  const activeIndex = features.findIndex((feature) => feature.id === activeFeature);

  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
      <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-24">
        <div className="flex w-full flex-col gap-12 lg:sticky lg:top-32 lg:w-1/3">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              <span className="text-white/40">01</span>
              <span className="h-px w-8 bg-white/14" />
              <span>Scrollable features</span>
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-balance text-white sm:text-4xl lg:text-5xl">
              Intent work, section by section.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
              A sticky rail tracks the active layer while the right side scrolls through feature frames, so the page teaches the system instead of dumping cards.
            </p>
          </div>

          <div className="lg:hidden -mx-2 overflow-x-auto pb-1 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-2 px-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => scrollToFeature(feature.id)}
                  className={`snap-center rounded-full px-4 py-2 font-mono text-xs tracking-wide whitespace-nowrap transition-[color,background-color,transform,border-color] duration-150 ease-[var(--ease-out)] active:scale-[0.97]
                    ${activeFeature === feature.id
                      ? 'border border-white/18 bg-white/10 text-white'
                      : 'border border-transparent text-zinc-500 hover:bg-white/[0.06] hover:text-zinc-300'
                    }`}
                >
                  <span className={activeFeature === feature.id ? 'text-white' : 'text-zinc-600'}>{feature.id}</span>{' '}
                  {feature.navTitle}
                </button>
              ))}
            </div>
          </div>

          <div className="relative hidden max-h-[calc(100vh-12rem)] flex-col gap-1 overflow-y-auto [scrollbar-width:thin] lg:flex">
            <div
              className="pointer-events-none absolute left-0 right-0 rounded-lg bg-white/10"
              style={{
                height: '44px',
                transform: `translateY(${activeIndex * 48}px)`,
                transition: reducedMotion ? 'none' : 'transform 250ms var(--ease-in-out)',
              }}
              data-active-indicator
            />
            {features.map((feature) => (
              <a
                key={feature.id}
                href={`#feature-${feature.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToFeature(feature.id);
                }}
                data-active={activeFeature === feature.id ? 'true' : 'false'}
                className={`relative z-10 flex items-center gap-4 rounded-lg px-4 py-3 font-mono text-sm tracking-wide transition-[color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97]
                  ${activeFeature === feature.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <span className={activeFeature === feature.id ? 'text-white' : 'text-zinc-600'}>{feature.id}</span>
                {feature.navTitle}
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-12 lg:w-2/3 lg:gap-24">
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
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/[0.08] bg-black/40">
                  <FeatureTerminal feature={feature} />
                </div>
                <div className="relative overflow-hidden p-8 sm:p-12">
                  <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl" />
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    <span className="text-white/40">{feature.id}</span>
                    <span className="h-px w-8 bg-white/14" />
                    <span>{feature.eyebrow}</span>
                  </div>
                  <h3 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-balance text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.05]">
                    {feature.title}
                  </h3>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400 sm:text-[17px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
