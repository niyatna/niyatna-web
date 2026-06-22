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
  title: "Reference Architectures",
  description: `Reference patterns for how Niyatna turns company intent into governed agent work, approval, memory, and proof.`,
  alternates: { canonical: `${SITE.url}/work` },
}

const deploymentsList = [
  {
    title: "Finance Review & Reconciliation",
    profile: "Finance Agent Pattern",
    drag: "Finance teams often lose time gathering statements, invoices, spreadsheets, and prior decisions before a person can even review what changed.",
    solution: "Niyatna maps the finance intent, scopes read-only sources where possible, assigns the review to finance agents, stages exceptions for approval, and returns proof for human sign-off.",
    return: "Review loop shortened",
    metricIcon: Time02Icon,
    features: [
      "Role-scoped access to finance context and source documents",
      "Exceptions staged for review instead of silently acted on",
      "Proof trail linking the original request to checked outputs",
    ],
  },
  {
    title: "Client Onboarding & Operations",
    profile: "Operations Agent Pattern",
    drag: "New client work often spreads across messages, folders, CRM notes, checklists, and manager memory.",
    solution: "Niyatna turns the onboarding intent into owned work: tasks, assignees, required context, approval points, and report-back inside the company operating layer.",
    return: "Handoff clarity improved",
    metricIcon: FolderCodeIcon,
    features: [
      "Workspace and task setup guided by approved company context",
      "Clear ownership for follow-ups, blockers, and due dates",
      "Report-back loop so status does not disappear into chat",
    ],
  },
  {
    title: "Engineering Review & Release Support",
    profile: "Engineering Agent Pattern",
    drag: "Engineering work can stall when context, tests, reviews, and deployment decisions live in different places.",
    solution: "Niyatna can route engineering intent into agent-assisted review, test evidence, change summaries, and approval gates before sensitive actions move forward.",
    return: "Review evidence centralized",
    metricIcon: FolderCodeIcon,
    features: [
      "Code and task context gathered before agent work begins",
      "Test/build evidence attached to the proof record",
      "Human approval required for sensitive release steps",
    ],
  },
  {
    title: "Sales & Partner Follow-up",
    profile: "Sales Ops Agent Pattern",
    drag: "Follow-ups, partner requests, account notes, and outreach drafts become inconsistent when every person reconstructs context manually.",
    solution: "Niyatna gives authorized roles a way to ask for customer context, assign next actions, prepare drafts, and require approval before external sends.",
    return: "Follow-up ownership clarified",
    metricIcon: Tick01Icon,
    features: [
      "Approved context retrieval for customer and partner work",
      "Drafts staged for review before external communication",
      "Next actions assigned with owner, due date, and proof trail",
    ],
  },
  {
    title: "Marketing & Distribution Rhythm",
    profile: "Growth Agent Pattern",
    drag: "Campaign work breaks down when messaging, assets, schedule, approval, and results are managed in separate places.",
    solution: "Niyatna turns campaign intent into coordinated work: asset preparation, channel scheduling, brand checks, approvals, and proof of what shipped.",
    return: "Campaign loop governed",
    metricIcon: Tick01Icon,
    features: [
      "Brand and campaign context attached before work starts",
      "Draft and schedule steps staged for approval",
      "Report-back closes the loop with evidence of what changed",
    ],
  },
]

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Reference Architectures"
        title="Deployment Patterns"
        lead="Examples of how the Niyatna standard can be shaped around real company functions: finance, operations, engineering, sales, and distribution."
        meta={
          <>
            <span>Intent</span>
            <span className="size-1 rounded-full bg-muted-foreground/40" />
            <span>Ownership</span>
            <span className="size-1 rounded-full bg-muted-foreground/40" />
            <span>Proof</span>
          </>
        }
      />

      <Prose>
        <h2>Reference patterns</h2>
        <p>
          These are architecture patterns, not fabricated case studies. They show where an agentic-company system can enter a company function, what it should control, and what proof should come back.
        </p>

        <div className="mt-12 space-y-12">
          {deploymentsList.map((study) => (
            <div
              key={study.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 backdrop-blur-sm sm:p-8 dark:border-white/[0.08] dark:bg-zinc-950/40"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-zinc-200 pb-4 dark:border-white/[0.06]">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 !my-0 dark:text-white">
                    {study.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">{study.profile}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 font-mono text-xs text-emerald-400">
                  <HugeiconsIcon icon={study.metricIcon} className="size-3.5" strokeWidth={2} />
                  {study.return}
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">The Problem</h4>
                  <p className="mt-1.5 text-sm text-zinc-700 leading-relaxed dark:text-zinc-300">
                    {study.drag}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">The Pattern</h4>
                  <p className="mt-1.5 text-sm text-zinc-700 leading-relaxed dark:text-zinc-300">
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">What must be true</h4>
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
              Begin Qualification
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
