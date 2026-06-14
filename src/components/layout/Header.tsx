import { useEffect, useState, type MouseEvent } from 'react';

import { Cancel01Icon, Menu01Icon, StarIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { EARLY_ACCESS_URL, OPEN_INTENT_URL, PROOF_OF_INTENT_URL, THESIS_URL } from '../../lib/links';
import { smoothScrollToHash } from '../../lib/smooth-scroll';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export type HeaderProps = {
  scrollTop?: number;
};

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: THESIS_URL, label: 'Thesis' },
  { href: PROOF_OF_INTENT_URL, label: 'Proof' },
  { href: OPEN_INTENT_URL, label: 'OpenIntent' },
] as const;

export const Header = ({ scrollTop: scrollTopProp }: HeaderProps) => {
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTop = scrollTopProp ?? windowScrollY;
  const isScrolled = scrollTop > 12;

  useEffect(() => {
    if (scrollTopProp !== undefined) return;
    const handleScroll = () => setWindowScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTopProp]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute('href') ?? '';
    if (!href.startsWith('#')) return;
    event.preventDefault();
    smoothScrollToHash(href);
    setMenuOpen(false);
  };

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', isScrolled ? 'py-2' : 'py-4')}>
      <div
        className={cn(
          'mx-3 flex max-w-6xl items-center justify-between gap-4 rounded-full px-4 transition-all duration-300 sm:mx-auto sm:px-6',
          isScrolled && 'border border-white/[0.08] bg-zinc-950/60 py-2 shadow-lg shadow-black/40 backdrop-blur-xl',
        )}
      >
        <div className="flex items-center gap-2.5">
          <Logo />
          <a
            href="#proof"
            onClick={handleAnchorClick}
            className="group ml-1 hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] tracking-tight text-white/80 backdrop-blur-md transition-colors hover:text-white sm:inline-flex"
          >
            <HugeiconsIcon icon={StarIcon} className="size-3.5 text-white/60 transition-colors group-hover:text-white" strokeWidth={2} />
            Proof-first
          </a>
        </div>

        <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleAnchorClick} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button as="a" href={EARLY_ACCESS_URL} size="sm" onClick={handleAnchorClick}>
            Early access
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08] md:hidden"
        >
          <HugeiconsIcon icon={menuOpen ? Cancel01Icon : Menu01Icon} className="size-5" strokeWidth={1.8} />
        </button>
      </div>

      {menuOpen && (
        <div className="mx-3 mt-2 rounded-3xl border border-white/[0.08] bg-zinc-950/88 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleAnchorClick} className="rounded-2xl px-4 py-3 text-sm text-zinc-300 hover:bg-white/[0.06] hover:text-white">
                {link.label}
              </a>
            ))}
            <Button as="a" href={EARLY_ACCESS_URL} onClick={handleAnchorClick} className="mt-2 w-full">
              Early access
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
