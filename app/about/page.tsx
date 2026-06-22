import { CodeIcon, Mail01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Metadata } from "next"
import Link from "next/link"

import { PageHero, PageShell, Prose } from "@/components/site/page-shell"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: `What ${SITE.name} is and how it helps companies become agentic without losing control.`,
  alternates: { canonical: `${SITE.url}/about` },
}

const stack = [
  { label: "Intent", note: "what the company wants done" },
  { label: "Agents", note: "who executes within boundaries" },
  { label: "System", note: "where context, approval, and proof live" },
  { label: "Company", note: "the organization stays in control" },
]

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Niyatna"
        title="Empowering Human Intent"
        lead="Niyatna builds the operating system, standards, and gates for companies ready to become agentic—so human intent can become delegated work without losing ownership, context, or proof."
        meta={
          <>
            <span>Your Intent</span>
            <span className="size-1 rounded-full bg-muted-foreground/40" />
            <span>Your Agents</span>
            <span className="size-1 rounded-full bg-muted-foreground/40" />
            <span>Your System</span>
          </>
        }
      />

      <Prose>
        <h2>The thesis</h2>
        <p>
          AI agents are not the company. The intent is the company. Agents are leverage. Without an operating layer, agent work becomes scattered prompts, hidden context, unclear authority, and outputs nobody can fully trust.
        </p>
        <p>
          Niyatna exists to form the layer around agent work: goals, roles, memory, tools, channels, approval gates, and proof. The company stays the source of truth; agents become the execution surface.
        </p>

        <h2>What is an agentic company?</h2>
        <p>
          An agentic company is a company where authorized people can ask the company system, assign work, retrieve context, automate routines, and verify outcomes through shared governance instead of relying on scattered chats and manual follow-up.
        </p>
        <p>
          It is not a founder-only cockpit, and it is not a team of generic chatbot users. Department leads, operators, partners, auditors, and selected clients can interact with the company system according to role boundaries.
        </p>

        <h2>What Niyatna builds</h2>
        <p>
          Niyatna brings together the operating pieces required for that shift: Niyatna OS, Niyatna HQ, agent workforces, company memory, OpenIntent, approval rules, integrations, and Proof of Intent. The exact stack depends on the company, but the standard is the same: intent becomes owned, governed, verifiable work.
        </p>
        <p>
          We do not sell open self-serve automation. Access is qualified because agentic work needs real company readiness: clear owners, useful context, tool access, security boundaries, and agreement on what proof must come back.
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
            It is not just a chatbot. Chat is only one surface; the important layer is ownership, memory, approval, and proof.
          </li>
          <li>
            It is not an automation agency. Niyatna is not a pile of one-off workflows; it is a standard for how company work becomes delegated and governed.
          </li>
          <li>
            It is not a model wrapper. Models can change, but the company system—intent, authority, context, and proof—must remain stable.
          </li>
          <li>
            It is not a promise to replace people. It is a way to return time and leverage to the humans who own the company’s direction.
          </li>
        </ul>

        <h2>Qualification</h2>
        <p>
          Niyatna is for companies with enough operating clarity to benefit from agent work safely. To review readiness, start with qualification or read the <Link href="/docs">Documentation</Link>.
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
