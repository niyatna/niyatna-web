import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, PageShell } from "@/components/site/page-shell"
import { ContactForm } from "@/components/site/contact-form"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"
import {
  Mail01Icon,
  GlobalIcon,
  HelpCircleIcon,
  Clock01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export const metadata: Metadata = {
  title: "Contact",
  description: `Begin qualification with Niyatna and map whether your company is ready for agentic work.`,
  alternates: { canonical: `${SITE.url}/contact` },
}

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Begin Qualification"
        lead="Tell us what your company is trying to delegate. We will map the intent chain, context, authority boundaries, and proof requirements before recommending a Niyatna setup."
      />

      <section className="relative mx-auto max-w-5xl px-4 pb-28 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 backdrop-blur-sm sm:p-8 dark:border-white/[0.08] dark:bg-zinc-950/40">
            <h2 className="text-xl font-semibold text-zinc-900 tracking-tight dark:text-white">Send an Inquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Share the company work you want to make askable, assignable, approved, and proven.
            </p>

            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 backdrop-blur-sm dark:border-white/[0.08] dark:bg-zinc-950/40">
              <h3 className="text-base font-semibold text-zinc-900 tracking-tight dark:text-white">Direct Channels</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <HugeiconsIcon icon={Mail01Icon} className="size-4.5 mt-0.5 text-zinc-500 dark:text-zinc-400" strokeWidth={1.8} />
                  <div>
                    <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Email</div>
                    <Link href={`mailto:${SITE.email}`} className="mt-1 block text-sm text-zinc-800 hover:text-zinc-900 underline decoration-zinc-200 underline-offset-4 dark:text-zinc-200 dark:hover:text-white dark:decoration-zinc-800">
                      {SITE.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HugeiconsIcon icon={GlobalIcon} className="size-4.5 mt-0.5 text-zinc-500 dark:text-zinc-400" strokeWidth={1.8} />
                  <div>
                    <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Base</div>
                    <div className="mt-1 text-sm text-zinc-800 dark:text-zinc-200">Bogor, ID / Remote</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HugeiconsIcon icon={Clock01Icon} className="size-4.5 mt-0.5 text-zinc-500 dark:text-zinc-400" strokeWidth={1.8} />
                  <div>
                    <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Response</div>
                    <div className="mt-1 text-sm text-zinc-800 dark:text-zinc-200">Usually within 1-2 business days</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 backdrop-blur-sm dark:border-white/[0.08] dark:bg-zinc-950/40">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={HelpCircleIcon} className="size-4.5 text-zinc-400" strokeWidth={1.8} />
                <h3 className="text-base font-semibold text-zinc-900 tracking-tight dark:text-white">Need the standard first?</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                If you want the architecture before applying, read the docs and reference pages first.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-4 w-full rounded-xl">
                <Link href="/docs">Read the Docs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
