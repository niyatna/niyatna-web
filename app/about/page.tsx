import { CodeIcon, Mail01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Metadata } from "next"
import Link from "next/link"

import { PageHero, PageShell, Prose } from "@/components/site/page-shell"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: `What ${SITE.name} is, who builds it, and how it's put together.`,
  alternates: { canonical: `${SITE.url}/about` },
}

const stack = [
  { label: "Intent", note: "the problem worth solving" },
  { label: "Dream", note: "the world after the problem" },
  { label: "Mission", note: "what you commit to doing" },
  { label: "Vision", note: "how it looks when it works" },
  { label: "Goals", note: "measurable delegated targets" },
  { label: "Agents", note: "specialized autonomous execution" },
]

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="About Niyatna"
        lead="Everything starts with intent. A company is not a collection of people or agents—it is a solution to a problem. Niyatna is the framework that makes this the standard."
        meta={
          <>
            <span>Empowering Human Intent</span>
          </>
        }
      />

      <Prose>
        <h2>The thesis</h2>
        <p>
          A company exists because civilization has a problem and someone decided to solve it. That decision is intent. Without intent, no amount of workforce—human or AI—produces a real company. It just produces noise.
        </p>
        <p>
          Niyatna is built around this truth. We do not start with agents, tools, or automation. We start with the problem. From that problem comes intent. With intent you get a dream. From the dream, a mission. From the mission, a vision. From the vision, goals. And only then—goals get delegated to specialized AI agents. That is what we call the Agentic Company.
        </p>

        <h2>What is an Agentic Company?</h2>
        <p>
          It is not a Kanban board with a chatbot. It is not "AI-powered productivity." An Agentic Company is a modern standard where every department—Finance, Marketing, Sales, Operations, Engineering—can be run by specialized AI agents. Each agent has its own personality, mission, goals, boundaries, responsibilities, targets, capabilities, specialization, knowledge base, tools, MCP skills, and slash commands.
        </p>
        <p>
          But none of that matters if the company itself has no intent. The agents are not the company. The intent is the company. The agents are the leverage.
        </p>

        <h2>Why this matters now</h2>
        <p>
          Traditional companies scale by hiring more people. That works, but it is slow, expensive, and creates operational drag. The Agentic Company scales by delegating goals to autonomous agents that execute within strict permission boundaries—while the human retains full strategic authority.
        </p>
        <p>
          Niyatna exists to make this the standard, not the exception. Not just for enterprises with existing teams, but for anyone with a real problem worth solving and the intent to build a solution around it.
        </p>

        <h2>Who we are</h2>
        <p>
          We are the team behind the Agentic Company framework. We design the systems, build the agent architectures, and define the standards that make autonomous delegation safe, verifiable, and anchored to human intent.
        </p>
        <p>
          For inquiries, partnerships, or to start building, reach us at{" "}
          <Link href="mailto:hello@niyatna.xyz">hello@niyatna.xyz</Link>.
        </p>
      </Prose>

      <section className="relative mt-16 px-4 sm:mt-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ul className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm">
            {stack.map((s) => (
              <li
                key={s.label}
                className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div className="flex items-center gap-3">
                  <HugeiconsIcon
                    icon={CodeIcon}
                    className="size-4 text-muted-foreground"
                    strokeWidth={1.8}
                  />
                  <span className="text-sm font-medium">{s.label}</span>
                </div>
                <span className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                  {s.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Prose className="mt-16">
        <h2>What it is not</h2>
        <ul>
          <li>
            It is not another assistant persona. The product is the bridge from
            intent to execution.
          </li>
          <li>
            It is not automation theatre. Delegated work must return proof, not
            confidence.
          </li>
          <li>
            It is not replacing people. It is compressing operational drag so
            people can reclaim time, judgment, and agency.
          </li>
        </ul>

        <h2>Engagement</h2>
        <p>
          We work with select partners to design, implement, and maintain custom agentic workflows that save operational hours. To read more about how our system operates under the hood, explore our <Link href="/docs">Documentation</Link>.
        </p>
      </Prose>

      <section className="relative mt-20 mb-24 px-4 sm:mt-24 sm:mb-32 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link href="/docs">
              <HugeiconsIcon icon={CodeIcon} strokeWidth={2} />
              Explore the Docs
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="rounded-full">
            <Link href="mailto:hello@niyatna.xyz">
              <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
              hello@niyatna.xyz
            </Link>
          </Button>
        </div>
      </section>
    </PageShell>
  )
}
