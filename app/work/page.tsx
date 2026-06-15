import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, PageShell, Prose } from "@/components/site/page-shell"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"
import {
  Tick01Icon,
  Time02Icon,
  FolderCodeIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export const metadata: Metadata = {
  title: "Our Work",
  description: `Real problems solved with the Agentic Company framework by ${SITE.name}.`,
  alternates: { canonical: `${SITE.url}/work` },
}

const caseStudies = [
  {
    title: "Financial Operations Automation",
    client: "E-Commerce Enterprise",
    drag: "Finance teams spent 12 hours daily comparing payment logs against invoices, generating PDFs, and sorting mismatch cases. The problem was manual reconciliation at scale.",
    solution: "We mapped the intent: eliminate manual reconciliation drag. Built a Finance Agent that polls payment APIs, reconciles transactions, generates invoice logs, and isolates mismatches for human review. All within strict permission boundaries.",
    return: "12 Hours Reclaimed Daily",
    metricIcon: Time02Icon,
    features: [
      "99.8% auto-reconciliation rate",
      "Automated PDF invoice generation and archiving",
      "Verification layer validating net margins before commit",
    ],
  },
  {
    title: "Client Onboarding Coordination",
    client: "B2B Services Company",
    drag: "Operations teams spent 22 hours weekly syncing client stages, generating checklists, and triggering status alerts. The problem was repetitive coordination that blocked higher-value work.",
    solution: "We defined the intent: remove onboarding coordination drag. Built an Operations Agent that monitors CRM changes, provisions client records, and triggers team briefings automatically.",
    return: "22 Hours Reclaimed Weekly",
    metricIcon: FolderCodeIcon,
    features: [
      "End-to-end CRM-to-database synchronization",
      "Automated client workspace provisioning",
      "Team notification system for operational alignment",
    ],
  },
  {
    title: "Strategic Resource Planning",
    client: "Multi-Brand Retail Group",
    drag: "Executive leadership lost 15 hours weekly gathering department reports, compiling OKRs, and modeling resource budgets. The problem was manual aggregation blocking strategic thinking.",
    solution: "We identified the intent: free leadership from aggregation drag. Built a Strategy Agent that pulls department data, runs resource simulations, and compiles executive briefs under strict permission limits.",
    return: "15 Hours Reclaimed Weekly",
    metricIcon: Tick01Icon,
    features: [
      "Multi-department progress auditing",
      "Automated resource modeling and simulation",
      "Pre-formatted briefs requiring human sign-off",
    ],
  },
]

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Case Studies"
        title="Problems We Have Solved"
        lead="Every engagement started with a real problem. Here is how we applied the Agentic Company framework to solve them."
        meta={
          <>
            <span>Real Problems</span>
            <span className="size-1 rounded-full bg-muted-foreground/40" />
            <span>Measured Results</span>
          </>
        }
      />

      <Prose>
        <h2>Engagements</h2>
        <p>
          Each case started with a specific operational problem. We mapped the intent, built the agents, and verified the results.
        </p>

        <div className="mt-12 space-y-12">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-white/[0.06] pb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white !my-0">
                    {study.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">{study.client}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 font-mono text-xs text-emerald-400">
                  <HugeiconsIcon icon={study.metricIcon} className="size-3.5" strokeWidth={2} />
                  {study.return}
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">The Problem</h4>
                  <p className="mt-1.5 text-sm text-zinc-300 leading-relaxed">
                    {study.drag}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">The Solution</h4>
                  <p className="mt-1.5 text-sm text-zinc-300 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Key Features</h4>
                  <ul className="mt-2 space-y-1.5 pl-4 list-disc text-sm text-muted-foreground">
                    {study.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Prose>

      <section className="relative mt-20 mb-24 px-4 sm:mt-24 sm:mb-32 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link href="/contact">
              Start a conversation
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6">
            <Link href="/services">
              View Capabilities
            </Link>
          </Button>
        </div>
      </section>
    </PageShell>
  )
}
