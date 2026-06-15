import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, PageShell } from "@/components/site/page-shell"
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
  description: `Get in touch with Niyatna. Tell us the problem you are solving.`,
  alternates: { canonical: `${SITE.url}/contact` },
}

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Start a Conversation"
        lead="Tell us the problem your company exists to solve. We will map the intent chain and show you what an Agentic Company looks like for your specific case."
      />

      <section className="relative mx-auto max-w-5xl px-4 pb-28 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left Column: Glassmorphic Contact Form */}
          <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-6 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-semibold text-white tracking-tight">Send an Inquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about the problem you are solving and the operational drag holding you back.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-white/[0.08] bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-white/20 focus:bg-zinc-950"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Company Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-white/[0.08] bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-white/20 focus:bg-zinc-950"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Acme Corp"
                    className="w-full rounded-xl border border-white/[0.08] bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-white/20 focus:bg-zinc-950"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="drag" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Current Team Size
                  </label>
                  <select
                    id="drag"
                    name="drag"
                    required
                    className="w-full rounded-xl border border-white/[0.08] bg-zinc-950/60 px-4 py-3 text-sm text-zinc-300 outline-none transition-colors focus:border-white/20 focus:bg-zinc-950"
                  >
                    <option value="solo">Solo Founder</option>
                    <option value="2-5">2 - 5 People</option>
                    <option value="6-20">6 - 20 People</option>
                    <option value="20-plus">20+ People</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  The Problem & Your Intent
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What problem is your company solving? What operational tasks drain your time? What would you delegate if you could?"
                  className="w-full rounded-xl border border-white/[0.08] bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-white/20 focus:bg-zinc-950 resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl">
                Submit Inquiry
              </Button>
            </form>
          </div>

          {/* Right Column: Other Info Card */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-6 backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white tracking-tight">Direct Channels</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <HugeiconsIcon icon={Mail01Icon} className="size-4.5 mt-0.5 text-zinc-400" strokeWidth={1.8} />
                  <div>
                    <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Email Us</div>
                    <Link href={`mailto:${SITE.email}`} className="mt-1 block text-sm text-zinc-200 hover:text-white underline decoration-zinc-800 underline-offset-4">
                      {SITE.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HugeiconsIcon icon={GlobalIcon} className="size-4.5 mt-0.5 text-zinc-400" strokeWidth={1.8} />
                  <div>
                    <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Operations Center</div>
                    <div className="mt-1 text-sm text-zinc-200">Jakarta, ID / Remote</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HugeiconsIcon icon={Clock01Icon} className="size-4.5 mt-0.5 text-zinc-400" strokeWidth={1.8} />
                  <div>
                    <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Response Time</div>
                    <div className="mt-1 text-sm text-zinc-200">Typically under 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={HelpCircleIcon} className="size-4.5 text-blue-400" strokeWidth={1.8} />
                <h3 className="text-base font-semibold text-white tracking-tight">Need technical details?</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                If you are looking for framework specifications, execution variables, or security rules, browse our documentation.
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
