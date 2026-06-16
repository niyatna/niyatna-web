"use client"

import {
  AiIdeaIcon,
  Shield01Icon,
  CpuIcon,
  CodeFolderIcon,
  Layout02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Section, SectionEyebrow, SectionHeading, SectionLead } from "./section"

const layers = [
  {
    number: "05",
    name: "Niyatna HQ",
    role: "Control Surface",
    desc: "A unified dashboard and control surface for humans and agents to inspect work in progress, check system status, review proofs, and make decisions.",
    icon: Layout02Icon,
  },
  {
    number: "04",
    name: "Niyatna Agents",
    role: "Execution Layer",
    desc: "Specialized, goal-oriented agents equipped with secure identities, dedicated missions, customized skills, specific tools, and clear authority boundaries.",
    icon: CodeFolderIcon,
  },
  {
    number: "03",
    name: "Niyatna OS",
    role: "Operating Layer",
    desc: "The company-level runtime connecting agents, memory, tools, dashboards, credential vaults, communication channels, and proof systems.",
    icon: CpuIcon,
  },
  {
    number: "02",
    name: "Proof of Intent",
    role: "Verification Primitive",
    desc: "Our verification engine producing cryptographic proof that delegated execution matches human-defined intent. Veto gates and consensus loops ensure compliance.",
    icon: Shield01Icon,
  },
  {
    number: "01",
    name: "OpenIntent",
    role: "Protocol Standard",
    desc: "An open protocol and specification layer defining structured intent packets, interoperable goal structures, and secure message routing rules.",
    icon: AiIdeaIcon,
  },
]

export function Architecture() {
  return (
    <Section id="architecture" className="border-t border-border/40 bg-zinc-50/[0.02]">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>Architecture</SectionEyebrow>
        <SectionHeading>The Niyatna Stack</SectionHeading>
        <SectionLead className="mx-auto">
          An integrated company-making architecture built to organize intent, scale execution, and guarantee control.
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
