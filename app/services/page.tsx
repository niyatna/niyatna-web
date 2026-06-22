import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, PageShell, Prose } from "@/components/site/page-shell"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"
import {
  CodeIcon,
  BriefcaseIcon,
  DatabaseIcon,
  ShieldIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export const metadata: Metadata = {
  title: "Services",
  description: `How Niyatna helps companies become agentic through intent mapping, agent workforces, company memory, approval gates, and proof.`,
  alternates: { canonical: `${SITE.url}/services` },
}

const servicesList = [
  {
    icon: BriefcaseIcon,
    title: "Agentic Company Architecture",
    desc: "Map how intent should move through the company: who can ask, what agents can do, which tools they may use, and where approval is required.",
  },
  {
    icon: CodeIcon,
    title: "Niyatna OS & HQ Setup",
    desc: "Create the operating surface where teams can ask the company system, assign work, review status, approve sensitive steps, and receive report-back.",
  },
  {
    icon: DatabaseIcon,
    title: "Company Memory & Integrations",
    desc: "Connect SOPs, documents, decisions, channels, repositories, and business tools so agents work from approved company context instead of loose prompts.",
  },
  {
    icon: ShieldIcon,
    title: "Proof & Governance Gates",
    desc: "Define the proof loop: what evidence must return, what needs human review, and how agent work becomes auditable before it is trusted.",
  },
]

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="The Niyatna Standard"
        lead="We help companies become agentic by turning human intent into governed agent work: mapped, assigned, approved, remembered, and proven."
        meta={
          <>
            <span>Intent Mapping</span>
            <span className="size-1 rounded-full bg-muted-foreground/40" />
            <span>Agent Workforce</span>
            <span className="size-1 rounded-full bg-muted-foreground/40" />
            <span>Proof Loop</span>
          </>
        }
      />

      <Prose>
        <h2>Our Approach</h2>
        <p>
          Niyatna is not a chatbot login or a pile of one-off automations. We design the operating layer around your company: intent, roles, memory, channels, tools, approval gates, and proof. The result is a system where people can ask, assign, and verify agent work without losing control of the business.
        </p>

        <div className="mt-12 space-y-6">
          {servicesList.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 backdrop-blur-sm sm:p-8 dark:border-white/[0.08] dark:bg-zinc-950/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100/50 text-foreground dark:border-white/10 dark:bg-white/5">
                  <HugeiconsIcon icon={service.icon} className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900 !my-0 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mt-16">What You Get</h2>
        <p>
          The work is not measured by how many agents exist. It is measured by whether your company gains a controlled system for delegation.
        </p>
        <ul>
          <li><strong>An askable company:</strong> authorized people can retrieve context and request work from the company system.</li>
          <li><strong>Owned agent work:</strong> requests become assigned tasks with owners, boundaries, and review states.</li>
          <li><strong>Company memory:</strong> SOPs, decisions, docs, and proof history become reusable context.</li>
          <li><strong>Approval control:</strong> sensitive steps can pause for human review before they affect the outside world.</li>
          <li><strong>Proof of Intent:</strong> completed work returns evidence your team can inspect, accept, reject, or remember.</li>
        </ul>
      </Prose>

      <section className="relative mt-20 mb-24 px-4 sm:mt-24 sm:mb-32 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link href="/contact">
              Begin Qualification
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6">
            <Link href="/work">
              View Our Work
            </Link>
          </Button>
        </div>
      </section>
    </PageShell>
  )
}
