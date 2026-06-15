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
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Section, SectionEyebrow, SectionHeading } from "./section"

interface ActivityRow {
  label: string
  detail: string
  href: string
}

interface EngagementBlock {
  id: string
  icon: IconSvgElement
  name: string
  activities: ActivityRow[]
  note?: string
}

const tracks: EngagementBlock[] = [
  {
    id: "framework",
    icon: CodeFolderIcon,
    name: "Framework",
    activities: [
      { label: "Intent packets", detail: "How we define your goals and taste bounds", href: "/docs" },
      { label: "Permission gates", detail: "Guarantees on what agents can do automatically", href: "/docs/ai/security" },
    ],
  },
  {
    id: "methodology",
    icon: GlobeIcon,
    name: "Methodology",
    note: "core architecture",
    activities: [
      { label: "Agentic Company Design", detail: "Map your intent chain and agent architecture", href: "/docs/getting-started" },
      { label: "Proof standard", detail: "Verifiable logs, screenshots, and diffs", href: "/docs/reference/data" },
    ],
  },
  {
    id: "engagement",
    icon: Shield01Icon,
    name: "Engagement",
    activities: [
      { label: "Operational safety", detail: "Human-in-the-loop review guidelines", href: "/security" },
      { label: "Project kickoff", detail: "Establish your agency workforce boundaries", href: "/docs/getting-started" },
    ],
  },
]

const statsList = [
  { value: "Problem", label: "The starting point" },
  { value: "Intent", label: "The human decision" },
  { value: "Goals", label: "Delegated targets" },
  { value: "Agents", label: "Autonomous execution" },
]

export function Start() {
  const recommended = {
    label: "Start a conversation",
    url: `mailto:${SITE.email}`,
    sub: "Tell us the problem you are solving.",
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
      <div className="relative grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-between">
          <div>
            <SectionEyebrow>Get started</SectionEyebrow>
            <SectionHeading className="mt-3">
              Start with the problem, not the tools.
            </SectionHeading>
            <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-[17px]">
              The Agentic Company framework begins with your intent. Define the problem, map the goals, and let specialized agents handle the execution within strict boundaries.
            </p>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 mt-6 backdrop-blur-sm">
              {statsList.map((s) => (
                <div key={s.label} className="bg-background/60 px-4 py-5 text-center">
                  <div className="font-mono text-lg font-semibold tracking-tight text-foreground">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[9px] tracking-wider text-muted-foreground uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          <div className="mt-8 rounded-2xl border border-border/60 bg-background/60 p-5 backdrop-blur-sm">
            <div className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Get in touch
            </div>
            <div className="mt-2 text-sm text-foreground/85">
              {recommended.sub}
            </div>
            <Button asChild size="lg" className="mt-4 w-full rounded-full">
              <Link href={recommended.url}>
                <HugeiconsIcon icon={BookOpenIcon} strokeWidth={2} />
                {recommended.label}
              </Link>
            </Button>
            <Link
              href="/docs"
              className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              Explore our documentation
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="size-3"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/60 backdrop-blur-sm">
            {tracks.map((t, i) => (
              <div
                key={t.id}
                className={cn(
                  "px-6 py-6",
                  i !== tracks.length - 1 && "border-b border-border/60"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-9 items-center justify-center text-foreground/80">
                      <HugeiconsIcon
                        icon={t.icon}
                        className="size-5"
                        strokeWidth={1.8}
                      />
                    </span>
                    <div>
                      <div className="text-base font-medium tracking-tight">
                        {t.name}
                      </div>
                      {t.note && (
                        <div className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
                          {t.note}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <ul className="mt-5 divide-y divide-border/40">
                  {t.activities.map((act) => (
                    <li
                      key={act.label + act.detail}
                      className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="min-w-0">
                        <div className="text-sm text-foreground/85">
                          {act.label}
                        </div>
                        <div className="mt-0.5 truncate font-mono text-[11px] text-muted-foreground/80">
                          {act.detail}
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="shrink-0 rounded-full"
                      >
                        <Link href={act.href} target={act.href.startsWith("http") ? "_blank" : undefined} rel={act.href.startsWith("http") ? "noreferrer" : undefined}>
                          <HugeiconsIcon icon={CheckListIcon} strokeWidth={2} />
                          Open
                        </Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
