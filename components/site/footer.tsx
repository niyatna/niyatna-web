import Link from "next/link"
import Image from "next/image"

import { SITE } from "@/lib/site"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  GithubIcon,
  Linkedin01Icon,
  NewTwitterIcon,
  ThreadsIcon,
} from "@hugeicons/core-free-icons"

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Documentation", href: "/docs" },
]

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
]

const contactLinks = [
  { label: "Email Us", href: `mailto:${SITE.email}` },
  { label: "Begin Qualification", href: "/contact" },
]

const socialLinks = [
  { label: "X (Twitter)", href: "https://x.com/niyatna", icon: NewTwitterIcon },
  { label: "Threads", href: "https://threads.net/@niyatna", icon: ThreadsIcon },
  { label: "GitHub", href: "https://github.com/niyatna", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/company/niyatna", icon: Linkedin01Icon },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/50 bg-muted/20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image
              src="/niyatna-icon.png"
              alt=""
              width={34}
              height={34}
              className="rounded-md"
            />
            <span className="text-base font-semibold tracking-tight">
              {SITE.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
            {SITE.description}
          </p>
        </div>

        <FooterCol title="Navigation" links={navigationLinks} />
        <FooterCol title="Legal" links={legalLinks} />
        <div>
          <div className="text-sm font-semibold tracking-tight">Contact</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {contactLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2.5">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex size-8 items-center justify-center rounded-full border border-border/50 bg-background/30 text-muted-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-muted/60 hover:text-foreground"
                aria-label={s.label}
              >
                <HugeiconsIcon icon={s.icon} className="size-4" strokeWidth={1.8} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground/80">Empowering Human Intent</span>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden select-none border-t border-border/40 bg-muted/5 pb-6 pt-4 sm:pb-12 sm:pt-8">
        <div className="text-center font-bold tracking-tighter text-[14vw] leading-[0.8] text-foreground/[0.06]">
          Niyatna.
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}) {
  return (
    <div>
      <div className="text-sm font-semibold tracking-tight">{title}</div>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
