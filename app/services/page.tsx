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
  title: "The Niyatna Standard",
  description: `Niyatna builds the operating system, standards, and gates for companies ready to become agentic.`,
  alternates: { canonical: `${SITE.url}/services` },
}

const servicesList = [
  {
    icon: BriefcaseIcon,
    title: "Agentic Company Architecture",
    desc: "Mapping the intent chain—from problem to dream, mission, vision, and goals—and configuring permission boundaries for secure agent delegation.",
  },
  {
    icon: CodeIcon,
    title: "Specialized Agent Workforce",
    desc: "Provisioning specialized Niyatna Agents across departments (Finance, Operations, Sales, Engineering) with unique profiles, local memory, and MCP tool permissions.",
  },
  {
    icon: ShieldIcon,
    title: "Verification & Veto Gates",
    desc: "Operating strict Proof of Intent validation layers, sandboxed runtimes (Niyatna Agent), consensus checks, and administrative veto approvals.",
  },
  {
    icon: DatabaseIcon,
    title: "Continuous Stack Operations",
    desc: "Upgrading agent identities, adjusting model routing rules via LocalRoute, and scaling database scopes to align with evolving intent.",
  },
]

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Capabilities"
        title="The Niyatna Standard"
        lead="We do not sell loose tools. We build the integrated formation system that turns human intent into autonomous, verified company execution."
        meta={
          <>
            <span>Problem-First Design</span>
            <span className="size-1 rounded-full bg-muted-foreground/40" />
            <span>Agent-Delegated Execution</span>
          </>
        }
      />

      <Prose>
        <h2>Our Approach</h2>
        <p>
          The Niyatna standard anchors company formation to a real problem. By adopting Niyatna OS, organizations map the intent chain, deploy secure agent runtimes, and establish validation protocols, retaining strategic authority while agents scale execution.
        </p>

        <div className="mt-12 space-y-10">
          {servicesList.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 backdrop-blur-sm sm:p-8 dark:border-white/[0.08] dark:bg-zinc-950/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100/50 text-foreground dark:border-white/10 dark:bg-white/5">
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
          Implementing the Niyatna standard yields clear, structural leverage:
        </p>
        <ul>
          <li><strong>Reclaimed Leverage:</strong> We target the processes draining 10-40+ hours per week and compress them to minutes of human review.</li>
          <li><strong>Verified Execution:</strong> Every agent action is verified before it ships. No hallucinations, no rogue outputs, no unreviewed changes.</li>
          <li><strong>Transparent Proofs:</strong> Every operation produces execution diffs, system logs, and evidence trails. You see exactly what happened and why.</li>
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
