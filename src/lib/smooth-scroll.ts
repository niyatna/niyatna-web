/** Ease-out cubic — decelerates into the target (premium landing feel). */
function easeOutCubic(progress: number): number {
  return 1 - (1 - progress) ** 3;
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export const HEADER_SCROLL_OFFSET = 96;

/** Nearest scrollable ancestor; falls back to the document scroller. */
export function resolveScrollElement(from: HTMLElement): HTMLElement | Window {
  let node: HTMLElement | null = from.parentElement;

  while (node) {
    const { overflowY } = getComputedStyle(node);
    const canScroll =
      node.scrollHeight > node.clientHeight + 1 &&
      (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay');

    if (canScroll) return node;
    node = node.parentElement;
  }

  return window;
}

function isWindowScroll(scrollEl: HTMLElement | Window): scrollEl is Window {
  return scrollEl === window;
}

function getScrollTop(scrollEl: HTMLElement | Window): number {
  if (isWindowScroll(scrollEl)) {
    return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  return scrollEl.scrollTop;
}

function setScrollTop(scrollEl: HTMLElement | Window, value: number): void {
  if (isWindowScroll(scrollEl)) {
    window.scrollTo(0, value);
    return;
  }
  scrollEl.scrollTop = value;
}

function getMaxScroll(scrollEl: HTMLElement | Window): number {
  if (isWindowScroll(scrollEl)) {
    const doc = document.documentElement;
    return Math.max(0, doc.scrollHeight - window.innerHeight);
  }
  return Math.max(0, scrollEl.scrollHeight - scrollEl.clientHeight);
}

function getScrollViewportTop(scrollEl: HTMLElement | Window): number {
  if (isWindowScroll(scrollEl)) return 0;
  return scrollEl.getBoundingClientRect().top;
}

function getTargetScrollTop(
  target: HTMLElement,
  scrollEl: HTMLElement | Window,
  offset: number,
): number {
  const targetRect = target.getBoundingClientRect();
  const viewportTop = getScrollViewportTop(scrollEl);
  const next = getScrollTop(scrollEl) + (targetRect.top - viewportTop) - offset;
  return Math.max(0, Math.min(next, getMaxScroll(scrollEl)));
}

let activeScrollCancel: (() => void) | null = null;

export type SmoothScrollOptions = {
  /** Pixels from top of scrollport (e.g. fixed header). */
  offset?: number;
};

export function smoothScrollToElement(
  target: HTMLElement,
  { offset = HEADER_SCROLL_OFFSET }: SmoothScrollOptions = {},
): void {
  activeScrollCancel?.();

  const scrollEl = resolveScrollElement(target);
  const start = getScrollTop(scrollEl);
  const end = getTargetScrollTop(target, scrollEl, offset);

  if (prefersReducedMotion()) {
    setScrollTop(scrollEl, end);
    return;
  }

  const distance = end - start;
  const duration = Math.min(850, Math.max(280, Math.abs(distance) * 0.35));
  const startedAt = performance.now();
  let cancelled = false;

  activeScrollCancel = () => {
    cancelled = true;
  };

  function step(now: number) {
    if (cancelled) return;

    const progress = Math.min(1, (now - startedAt) / duration);
    setScrollTop(scrollEl, start + distance * easeOutCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
      return;
    }

    activeScrollCancel = null;
  }

  requestAnimationFrame(step);
}

export function smoothScrollToHash(
  hash: string,
  options?: SmoothScrollOptions,
): boolean {
  const id = hash.startsWith('#') ? hash.slice(1) : hash;
  const target = document.getElementById(id);

  if (!target) return false;

  smoothScrollToElement(target, options);
  history.pushState(null, '', `#${id}`);
  return true;
}
