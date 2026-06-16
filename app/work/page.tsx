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
  description: `Reference architectures demonstrating Niyatna OS and Niyatna Agent workforces in production.`,
  alternates: { canonical: `${SITE.url}/work` },
}

const deploymentsList = [
  {
    title: "Financial Operations & Ledger Reconciliation",
    profile: "CFO Agent Deployment Pattern",
    drag: "Finance teams spent 12 hours daily comparing billing ledgers against invoice databases and resolving discrepancies. The problem was manual reconciliation drag at scale.",
    solution: "Staged OpenIntent parameters to eliminate ledger comparison drag. Deployed a Niyatna CFO Agent utilizing LocalRoute to mount read-only billing scopes, auto-reconcile invoices via vLLM-compatible checking models, and isolate mismatches inside a secure workspace sandbox, routing verification results to Niyatna HQ.",
    return: "12 Hours Reclaimed Daily",
    metricIcon: Time02Icon,
    features: [
      "99.8% transaction auto-reconciliation rate",
      "Staged PDF invoice generation and secure archiving",
      "Proof of Intent checks validating bank ledger matches before write",
    ],
  },
  {
    title: "Client Onboarding & Customer Operations",
    profile: "COO Agent Deployment Pattern",
    drag: "Operations teams spent 22 hours weekly syncing client stages, generating checklists, and distributing updates. The problem was repetitive coordination drag blocking strategic work.",
    solution: "Configured intent boundaries to automate client workspace provisioning. Deployed a Niyatna COO Agent to monitor CRM milestones via LocalRoute, sync metadata records, and relay onboarding briefs to Discord and Slack channels automatically.",
    return: "22 Hours Reclaimed Weekly",
    metricIcon: FolderCodeIcon,
    features: [
      "Real-time CRM-to-database metadata synchronization",
      "Automated ephemeral workspace sandbox mounts",
      "High-signal alerts relayed to team channels",
    ],
  },
  {
    title: "Autonomous Software Lifecycle Management",
    profile: "Engineer Agent Deployment Pattern",
    drag: "Engineering leads spent 15 hours weekly verifying formatting, running manual test suites, compiling builds, and drafting PR reviews. The problem was coordination overhead blocking active development.",
    solution: "Provisioned an isolated workspace sandbox. Deployed Niyatna Engineer Agents to index codebase context via local memory, compile packages, run unit tests, and format changes. Code modifications are staged as Git patches requiring human veto/approval on Niyatna HQ.",
    return: "15 Hours Reclaimed Weekly",
    metricIcon: FolderCodeIcon,
    features: [
      "Zero-retention local code analysis inside isolated agent containers",
      "Automated test diagnostics and build verification gates",
      "Verification profiles requiring explicit strategic sign-off",
    ],
  },
  {
    title: "Executive Reporting & Business Intelligence",
    profile: "CEO Agent Deployment Pattern",
    drag: "Leadership lost 15 hours weekly aggregating department OKR data, generating briefs, and modeling budgets. The problem was manual report compilation blocking decision making.",
    solution: "Defined strategic planning goals and mounted read-only workspace access. Deployed a Niyatna CEO Agent to audit progress logs across departments, compute budget reallocation models via LocalRoute, and compile briefs for board review.",
    return: "15 Hours Reclaimed Weekly",
    metricIcon: Tick01Icon,
    features: [
      "Multi-workspace progress and audit logging",
      "Automated resource allocation modeling (12 scenarios)",
      "Executive briefs staged for administrative veto/approval on Niyatna HQ",
    ],
  },
  {
    title: "Marketing Campaign & Distribution Management",
    profile: "Growth Agent Deployment Pattern",
    drag: "Growth teams spent 18 hours weekly formatting product copy, scheduling multi-channel announcements, and checking brand alignment. The problem was repetitive layout and distribution overhead.",
    solution: "Configured intent packets detailing campaign assets and copy guidelines. Deployed a Niyatna Growth Agent to generate distribution drafts, cross-check against brand knowledge vaults, and queue drafts for validation.",
    return: "18 Hours Reclaimed Weekly",
    metricIcon: Tick01Icon,
    features: [
      "Asset formatting and alignment with brand specifications",
      "Draft scheduling and cross-channel staging integration",
      "Veto gates preventing external releases without human approval",
    ],
  },
]

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Reference Architectures"
        title="Production Patterns"
        lead="Every pattern started with a real business problem. Here is how Niyatna OS has been deployed to eliminate operational drag and establish the Agentic Company standard."
        meta={
          <>
            <span>Real Problems</span>
            <span className="size-1 rounded-full bg-muted-foreground/40" />
            <span>Measured Results</span>
          </>
        }
      />

      <Prose>
        <h2>Deployments</h2>
        <p>
          Each reference deployment demonstrates Niyatna OS solving a specific operational problem by mapping intent and auditing proof.
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
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">The Solution</h4>
                  <p className="mt-1.5 text-sm text-zinc-700 leading-relaxed dark:text-zinc-300">
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
