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
  description: `Niyatna builds the systems, standards, and agent architectures that make the Agentic Company real.`,
  alternates: { canonical: `${SITE.url}/services` },
}

const servicesList = [
  {
    icon: BriefcaseIcon,
    title: "Agentic Company Architecture",
    desc: "We define the intent chain for your company—from problem to dream to mission to vision to goals. Then we design the agent architecture that executes each goal autonomously within strict permission boundaries.",
  },
  {
    icon: CodeIcon,
    title: "Specialized Agent Engineering",
    desc: "We build autonomous agents for every department—Finance, Marketing, Sales, Operations, Engineering. Each agent has its own personality, mission, goals, boundaries, knowledge base, tools, MCP skills, and slash commands.",
  },
  {
    icon: ShieldIcon,
    title: "Verification & Permission Systems",
    desc: "Every agent action passes through verification layers. High-risk operations require human approval. Sandbox isolation, consensus validation, and veto gates ensure nothing ships without proof.",
  },
  {
    icon: DatabaseIcon,
    title: "Continuous Agent Operations",
    desc: "We monitor, optimize, and evolve your agent workforce as your company grows. Performance analytics, identity updates, and goal recalibration keep the system aligned with your intent.",
  },
]

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="What We Build"
        lead="We do not sell software. We build the operational system that turns your company's intent into autonomous, verified execution."
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
          Every engagement starts with your problem—not our tools. We map the intent chain, design the agent roles, build the verification layers, and operate the system. You retain full strategic authority while the agents handle operational execution.
        </p>

        <div className="mt-12 space-y-10">
          {servicesList.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground">
                  <HugeiconsIcon icon={service.icon} className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-white !my-0">
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
          Our engagements are built around clear, measurable return on investment:
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
              Start a conversation
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
