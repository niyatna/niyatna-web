"use client"

import {
  ArrowRight01Icon,
  BookOpenIcon,
  CheckListIcon,
  CodeFolderIcon,
  GlobeIcon,
  Shield01Icon,
} from "@hugeicons/core-free-icons"
import type { IconSvgElement } from "@hugeicons/react"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Section, SectionEyebrow, SectionHeading } from "./section"

interface ReadinessCheck {
  icon: IconSvgElement
  title: string
  desc: string
}

const readinessChecks: ReadinessCheck[] = [
  {
    icon: BookOpenIcon,
    title: "Intent chain",
    desc: "Which company outcomes should become delegated agent work first.",
  },
  {
    icon: CodeFolderIcon,
    title: "Company context",
    desc: "The SOPs, tools, docs, owners, channels, and data access agents need.",
  },
  {
    icon: Shield01Icon,
    title: "Authority boundaries",
    desc: "Who can approve, what agents may touch, and what must stay human-controlled.",
  },
  {
    icon: CheckListIcon,
    title: "Proof loop",
    desc: "What evidence must return before work is accepted or remembered.",
  },
]

const readinessSignals = [
  { value: "Intent", label: "Outcome" },
  { value: "Context", label: "Memory" },
  { value: "Authority", label: "Control" },
  { value: "Proof", label: "Evidence" },
]

export function Start() {
  const recommended = {
    label: "Begin Qualification",
    url: "/contact",
    sub: "Apply for readiness mapping. We identify where agents should enter, what needs approval, and what proof the system must return.",
  }

  return (
    <Section
      id="start"
      className="overflow-hidden border-t border-border/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-foreground/[0.025] [mask-image:radial-gradient(ellipse_55%_60%_at_50%_0%,black,transparent_70%)]"
      />

      <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="min-w-0">
          <SectionEyebrow>The Gate</SectionEyebrow>
          <SectionHeading className="mt-3">
            Access opens when the company is ready.
          </SectionHeading>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            Niyatna is not an open chatbot login. We map your intent, company context, authority boundaries, and proof loop before deploying agent work.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
            {readinessSignals.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border/60 bg-background/55 px-4 py-4 backdrop-blur-sm"
              >
                <div className="font-mono text-sm font-semibold tracking-tight text-foreground">
                  {s.value}
                </div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-border/60 bg-background/60 p-5 backdrop-blur-sm sm:p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Qualified access
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
              {recommended.sub}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="rounded-full sm:w-auto">
                <Link href={recommended.url}>
                  <HugeiconsIcon icon={BookOpenIcon} strokeWidth={2} />
                  {recommended.label}
                </Link>
              </Button>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground sm:justify-start"
              >
                Read the standard
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="size-3"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="min-w-0 rounded-3xl border border-border/60 bg-background/55 p-4 backdrop-blur-sm sm:p-5 lg:p-6">
          <div className="flex items-start gap-3 border-b border-border/50 pb-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-foreground/[0.03] text-foreground/75">
              <HugeiconsIcon icon={GlobeIcon} className="size-5" strokeWidth={1.8} />
            </span>
            <div className="min-w-0">
              <div className="text-base font-semibold tracking-tight text-foreground">
                What the gate checks
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                The gate protects the company from adding agents before the system can control them.
              </p>
            </div>
          </div>

          <div className="divide-y divide-border/45">
            {readinessChecks.map((check) => (
              <div key={check.title} className="grid grid-cols-[2.25rem_1fr] gap-4 py-5">
                <span className="mt-0.5 flex size-9 items-center justify-center rounded-xl border border-border/55 bg-foreground/[0.025] text-foreground/70">
                  <HugeiconsIcon icon={check.icon} className="size-4.5" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-medium tracking-tight text-foreground">
                    {check.title}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {check.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
