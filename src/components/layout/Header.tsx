import { useEffect, useState, type MouseEvent } from 'react';

import { Cancel01Icon, Menu01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { THESIS_URL, OPEN_INTENT_URL, PROOF_OF_INTENT_URL, EARLY_ACCESS_URL } from '../../lib/links';
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
  { href: THESIS_URL, label: 'Thesis' },
  { href: '#feature-02', label: 'Delegation' },
  { href: PROOF_OF_INTENT_URL, label: 'Proof' },
  { href: OPEN_INTENT_URL, label: 'OpenIntent' },
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

  const linkClassName = cn(
    'transition-[color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97]',
    isScrolled ? 'hover:text-white' : 'hover:text-[#d8b37c]',
  );

  const navTextClassName = cn(
    'transition-colors duration-200 ease-[var(--ease-out)]',
    isScrolled ? 'text-gray-300' : 'text-porcelain/72',
  );

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b px-6 py-4 transition-[background-color,border-color,backdrop-filter] duration-200 ease-[var(--ease-out)] md:grid md:grid-cols-[1fr_auto_1fr]',
          isScrolled
            ? 'border-border-subtle bg-background/80 backdrop-blur-md'
            : 'border-transparent bg-background/0',
        )}
      >
        <div className="min-w-0 md:col-start-1 md:justify-self-start">
          <Logo
            textClassName="text-porcelain"
            iconClassName={cn('text-porcelain', isScrolled ? '' : 'border-porcelain/20')}
          />
        </div>

        <nav
          className={cn(
            'hidden items-center justify-center gap-8 text-sm md:col-start-2 md:flex md:justify-self-center',
            navTextClassName,
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
              className={linkClassName}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex min-w-0 items-center gap-3 text-sm md:col-start-3 md:justify-self-end">
          <Button as="a" href={EARLY_ACCESS_URL} size="sm" className="hidden sm:inline-flex">
            Early access
          </Button>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-porcelain transition-[color,background-color,transform] duration-150 ease-[var(--ease-out)] hover:bg-white/10 active:scale-[0.97] md:hidden"
          >
            <HugeiconsIcon icon={menuOpen ? Cancel01Icon : Menu01Icon} className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={cn('fixed inset-0 z-40 md:hidden', menuOpen ? 'pointer-events-auto' : 'pointer-events-none')}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
          className={cn(
            'absolute inset-0 bg-pitch-black/70 backdrop-blur-sm transition-opacity duration-200 ease-[var(--ease-out)]',
            menuOpen ? 'opacity-100' : 'opacity-0',
          )}
        />
        <nav
          className={cn(
            'absolute left-4 right-4 top-[72px] rounded-2xl border border-border-subtle bg-graphite/95 p-2 shadow-2xl shadow-pitch-black/50 backdrop-blur-xl',
            'transition-[opacity,transform] duration-200 ease-[var(--ease-out)]',
            menuOpen ? 'translate-y-0 opacity-100' : cn('opacity-0', reducedMotion ? 'translate-y-0' : '-translate-y-2'),
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base text-gray-200 transition-[color,background-color,transform] duration-150 ease-[var(--ease-out)] hover:bg-white/5 active:scale-[0.97]"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 border-t border-white/10 p-2 pt-4">
            <Button as="a" href={EARLY_ACCESS_URL} size="md" className="w-full" onClick={closeMenu}>
              Early access
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};
