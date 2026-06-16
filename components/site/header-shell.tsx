"use client"

import { BookOpenIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/docs", label: "Docs" },
]

interface HeaderShellProps {
  stars: string | null
  rawStars: number | null
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  )
}

export function HeaderShell({ stars, rawStars }: HeaderShellProps) {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const headerRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    function handleClickOutside(event: Event) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("pointerdown", handleClickOutside)
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "mx-3 flex max-w-6xl items-center justify-between gap-4 px-4 sm:mx-auto sm:px-6",
          "rounded-full transition-all duration-300 w-full",
          (scrolled || mobileMenuOpen) &&
            "border border-white/10 bg-white/70 px-4 py-2 shadow-lg shadow-black/[0.04] backdrop-blur-xl dark:border-white/[0.08] dark:bg-zinc-950/60 dark:shadow-black/40"
        )}
      >
        <div className="flex-1 flex items-center justify-start gap-2.5">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold tracking-tight"
            aria-label={`${SITE.name} home`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/niyatna-icon.png"
              alt=""
              width={34}
              height={34}
              priority
              className="rounded-md"
            />
            <span className="text-base">{SITE.name}</span>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1 flex items-center justify-end gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex rounded-full gap-2">
            <Link href="/contact">
              <HugeiconsIcon icon={BookOpenIcon} strokeWidth={2} />
              Request Access
            </Link>
          </Button>
          
          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-8 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100/50 text-foreground md:hidden cursor-pointer hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon className="size-4" /> : <MenuIcon className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-3 right-3 top-16 rounded-3xl border border-zinc-200 bg-white/95 p-6 shadow-2xl backdrop-blur-xl md:hidden z-40 dark:border-white/[0.08] dark:bg-zinc-950/95"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <div className="my-1 border-t border-zinc-200 dark:border-white/[0.08]" />
              <Button asChild className="w-full rounded-full gap-2">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <HugeiconsIcon icon={BookOpenIcon} strokeWidth={2} />
                  Request Access
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
