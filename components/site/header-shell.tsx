"use client"

import { BookOpenIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
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

export function HeaderShell({ stars, rawStars }: HeaderShellProps) {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "mx-3 flex max-w-6xl items-center justify-between gap-4 px-4 sm:mx-auto sm:px-6",
          "rounded-full transition-all duration-300",
          scrolled &&
            "border border-white/10 bg-white/70 px-4 py-2 shadow-lg shadow-black/[0.04] backdrop-blur-xl dark:border-white/[0.08] dark:bg-zinc-950/60 dark:shadow-black/40"
        )}
      >
        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold tracking-tight"
            aria-label={`${SITE.name} home`}
          >
            <Image
              src="/niyatna_icon_256.png"
              alt=""
              width={28}
              height={28}
              priority
              className="rounded-md"
            />
            <span className="text-base">{SITE.name}</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
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

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-full">
            <Link href="/docs">
              <HugeiconsIcon icon={BookOpenIcon} strokeWidth={2} />
              Docs
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
