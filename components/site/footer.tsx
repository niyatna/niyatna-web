import Link from "next/link"
import Image from "next/image"

import { SITE } from "@/lib/site"

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Framework Docs", href: "/docs" },
]

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
]

const contactLinks = [
  { label: "Email Us", href: `mailto:${SITE.email}` },
  { label: "Get Consultation", href: "/contact" },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/50 bg-muted/20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image
              src="/niyatna_icon_256.png"
              alt=""
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="text-base font-semibold tracking-tight">
              {SITE.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {SITE.tagline}
          </p>
          <p className="mt-6 font-mono text-xs text-muted-foreground/70">
            Agentic Company Framework · Preview
          </p>
        </div>

        <FooterCol title="Navigation" links={navigationLinks} />
        <FooterCol title="Legal" links={legalLinks} />
        <FooterCol title="Contact" links={contactLinks} />
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6">
          <span>
            © {new Date().getFullYear()} {SITE.name}. Built for human-owned
            agentic work.
          </span>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground/80">Empowering Human Intent</span>
          </div>
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
