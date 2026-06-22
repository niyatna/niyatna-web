"use client"

import {
  AiIdeaIcon,
  Shield01Icon,
  CpuIcon,
  CodeFolderIcon,
  Layout02Icon,
  BookOpenIcon,
  GlobeIcon,
  Notebook01Icon,
  CommandIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Section, SectionEyebrow, SectionHeading, SectionLead } from "./section"

const layers = [
  {
    number: "01",
    name: "Readiness Gate",
    role: "Qualification Layer",
    desc: "Checks whether the company has clear goals, owners, data access, SOPs, and approval rules before agents are added.",
    icon: BookOpenIcon,
  },
  {
    number: "02",
    name: "OpenIntent",
    role: "Intent Layer",
    desc: "Turns a messy request into a structured intent: outcome, owner, constraints, authority, risk, and expected proof.",
    icon: AiIdeaIcon,
  },
  {
    number: "03",
    name: "Company Blueprint",
    role: "Operating Map",
    desc: "Maps departments, roles, tools, channels, memory sources, and agents into one governed company system.",
    icon: CodeFolderIcon,
  },
  {
    number: "04",
    name: "Niyatna OS",
    role: "Operating Surface",
    desc: "The askable layer where people request work, retrieve context, and trigger governed agent workflows.",
    icon: CommandIcon,
  },
  {
    number: "05",
    name: "Niyatna HQ",
    role: "Command Room",
    desc: "Tracks owned work, assignees, due dates, approvals, status, and report-back across the company.",
    icon: Layout02Icon,
  },
  {
    number: "06",
    name: "Agent Workforce",
    role: "Execution Layer",
    desc: "Specialized agents execute department work with role-scoped tools, memory, credentials, and boundaries.",
    icon: CpuIcon,
  },
  {
    number: "07",
    name: "Memory & Knowledge",
    role: "Context Layer",
    desc: "SOPs, decisions, docs, customers, and previous proof logs become context the system can reuse.",
    icon: Notebook01Icon,
  },
  {
    number: "08",
    name: "Channels & Integrations",
    role: "Tool Layer",
    desc: "Connects the work surfaces and business tools your company already uses without losing governance.",
    icon: GlobeIcon,
  },
  {
    number: "09",
    name: "Approval & Security Gates",
    role: "Control Layer",
    desc: "Sensitive actions are staged behind approvals, scopes, sandboxing, and veto windows before execution continues.",
    icon: Shield01Icon,
  },
  {
    number: "10",
    name: "Proof of Intent",
    role: "Verification Layer",
    desc: "Every completed action returns evidence: output, checks, logs, reviewer status, and what changed.",
    icon: Shield01Icon,
  },
]

export function Architecture() {
  return (
    <Section id="architecture" className="border-t border-border/40 bg-zinc-50/[0.02]">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>Architecture</SectionEyebrow>
        <SectionHeading>The Niyatna Stack</SectionHeading>
        <SectionLead className="mx-auto">
          A formation stack for turning company intent into governed agent execution without losing ownership, context, or proof.
        </SectionLead>
      </div>

      <div className="mx-auto mt-16 max-w-4xl space-y-4">
        {layers.map((layer) => (
          <div
            key={layer.number}
            className="group relative flex flex-col justify-between gap-6 rounded-2xl border border-zinc-200 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:bg-white dark:border-white/[0.06] dark:bg-zinc-950/40 dark:hover:border-white/10 dark:hover:bg-zinc-950 md:flex-row md:items-center md:p-8"
          >
            <div className="flex items-start gap-4 md:items-center">
              <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground/60">
                {layer.number}
              </span>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-foreground transition-colors group-hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-white/10">
                <HugeiconsIcon icon={layer.icon} className="size-6" strokeWidth={1.8} />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                    {layer.name}
                  </h3>
                  <span className="rounded-full border border-border bg-foreground/[0.03] px-2 py-0.5 font-mono text-[9px] tracking-wider text-muted-foreground uppercase">
                    {layer.role}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:max-w-2xl">
                  {layer.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
