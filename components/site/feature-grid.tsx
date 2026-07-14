import {
  CodeFolderIcon,
  CommandIcon,
  CpuIcon,
  Layout02Icon,
  Notebook01Icon,
  PaintBrush02Icon,
  AiIdeaIcon,
  GlobeIcon,
  Shield01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Section, SectionEyebrow, SectionHeading } from "./section"

const items = [
  {
    icon: CommandIcon,
    title: "Niyatna OS",
    desc: "The operating layer where authorized people ask the company, route requests, and see what agents are allowed to do.",
  },
  {
    icon: PaintBrush02Icon,
    title: "Niyatna HQ",
    desc: "A command room for owned work: tasks, assignees, due dates, approvals, status, and report-back.",
  },
  {
    icon: CodeFolderIcon,
    title: "Niyatna Agents",
    desc: "Role-based agent workforces that execute department work under scoped permissions and human rules.",
  },
  {
    icon: Notebook01Icon,
    title: "Company Memory",
    desc: "SOPs, decisions, docs, customer context, and proof logs stored as context the system can reuse.",
  },
  {
    icon: GlobeIcon,
    title: "Channel Layer",
    desc: "Discord, Telegram, WhatsApp, Slack, and email surfaces where work can be requested without losing governance.",
  },
  {
    icon: CpuIcon,
    title: "Tool Integrations",
    desc: "Google Workspace, GitHub, Stripe, and company tools connected only to the scopes each role needs.",
  },
  {
    icon: AiIdeaIcon,
    title: "OpenIntent",
    desc: "The intent format that turns a messy request into a goal, owner, constraints, approval path, and expected proof.",
  },
  {
    icon: Layout02Icon,
    title: "Proof of Intent",
    desc: "Every completed action returns evidence: output, logs, review status, and what changed.",
  },
  {
    icon: Shield01Icon,
    title: "Security Gates",
    desc: "Approval rules, role boundaries, sandboxing, and veto windows keep sensitive actions controlled.",
  },
]

export function FeatureGrid() {
  return (
    <Section id="more">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>Infrastructure</SectionEyebrow>
        <SectionHeading>The infrastructure behind an agentic company.</SectionHeading>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="group relative bg-background/70 p-6 backdrop-blur-sm transition-colors hover:bg-background"
          >
            <div className="inline-flex size-8 items-center justify-center text-foreground/70 transition-colors group-hover:text-foreground">
              <HugeiconsIcon
                icon={it.icon}
                className="size-5"
                strokeWidth={1.6}
              />
            </div>
            <div className="mt-5 text-[15px] font-medium tracking-tight">
              {it.title}
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
