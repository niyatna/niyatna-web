import { useEffect, useState, type MouseEvent } from 'react';

import { Cancel01Icon, Menu01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import {
  EARLY_ACCESS_URL,
  INTENT_ANATOMY_URL,
  MANIFESTO_URL,
  OPEN_INTENT_URL,
  PIPELINE_URL,
} from '../../lib/links';
import { HEADER_SCROLL_OFFSET, smoothScrollToHash } from '../../lib/smooth-scroll';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../lib/useReducedMotion';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export type HeaderProps = {
  /** Scroll offset of the real scroll container (e.g. OverlayScrollbars viewport). When omitted, uses `window`. */
  scrollTop?: number;
};

const SCROLLED_PX = 50;

const navLinks = [
  { href: MANIFESTO_URL, label: 'Manifesto' },
  { href: PIPELINE_URL, label: 'Pipeline' },
  { href: INTENT_ANATOMY_URL, label: 'Intent' },
  { href: OPEN_INTENT_URL, label: 'Architecture' },
] as const;

export const Header = ({ scrollTop: scrollTopProp }: HeaderProps) => {
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const isControlled = scrollTopProp !== undefined;
  const scrollTop = scrollTopProp ?? windowScrollY;
  const isScrolled = scrollTop > SCROLLED_PX;

  useEffect(() => {
    if (isControlled) return;

    const handleScroll = () => setWindowScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isControlled]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;

    event.preventDefault();
    closeMenu();

    if (smoothScrollToHash(href, { offset: HEADER_SCROLL_OFFSET })) {
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 sm:px-6">
        <div
          className={cn(
            'mx-auto grid max-w-[1480px] grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full border px-3 py-2 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
            isScrolled
              ? 'border-porcelain/12 bg-earth/76 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl'
              : 'border-porcelain/8 bg-porcelain/[0.025] backdrop-blur-md',
          )}
        >
          <Logo textClassName="text-porcelain" iconClassName="text-porcelain" />

          <nav className="hidden justify-self-center rounded-full border border-porcelain/8 bg-porcelain/[0.03] px-2 py-1 text-sm text-porcelain/66 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => handleAnchorClick(event, link.href)}
                className="rounded-full px-4 py-2 transition-[color,background-color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-porcelain/[0.07] hover:text-porcelain active:scale-[0.98]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex justify-self-end">
            <Button as="a" href={EARLY_ACCESS_URL} size="sm" className="hidden sm:inline-flex">
              Early access
            </Button>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-porcelain transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/10 active:scale-[0.98] lg:hidden"
            >
              <HugeiconsIcon icon={menuOpen ? Cancel01Icon : Menu01Icon} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={cn('fixed inset-0 z-30 lg:hidden', menuOpen ? 'pointer-events-auto' : 'pointer-events-none')}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
          className={cn(
            'absolute inset-0 bg-earth/82 backdrop-blur-xl transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]',
            menuOpen ? 'opacity-100' : 'opacity-0',
          )}
        />
        <nav
          className={cn(
            'absolute left-4 right-4 top-24 rounded-[2rem] border border-porcelain/10 bg-ink/94 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.55)]',
            'transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
            menuOpen ? 'translate-y-0 opacity-100' : cn('opacity-0', reducedMotion ? 'translate-y-0' : '-translate-y-4'),
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
              className="block rounded-2xl px-4 py-4 text-lg text-porcelain/82 transition-[background-color,color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-porcelain/[0.06] hover:text-porcelain active:scale-[0.98]"
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-porcelain/10 p-3 pt-5">
            <Button as="a" href={EARLY_ACCESS_URL} size="md" className="w-full" onClick={closeMenu}>
              Early access
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};
