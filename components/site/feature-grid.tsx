import {
  AiIdeaIcon,
  CheckListIcon,
  CodeFolderIcon,
  CommandIcon,
  CpuIcon,
  EnergyIcon,
  Layout02Icon,
  Notebook01Icon,
  PaintBrush02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Section, SectionEyebrow, SectionHeading } from "./section"

const items = [
  {
    icon: CpuIcon,
    title: "Sandbox Isolation",
    desc: "Every agent workforce execution is contained inside isolated, hardware-restricted secure containers.",
  },
  {
    icon: CommandIcon,
    title: "Security Gates",
    desc: "Granular access-control rules defining exactly what directories, paths, and API keys are reachable.",
  },
  {
    icon: AiIdeaIcon,
    title: "OpenIntent Packets",
    desc: "Rigorous schemas mapping your desired outcomes, constraints, and success standards under the OpenIntent protocol.",
  },
  {
    icon: Notebook01Icon,
    title: "Local Memory Contexts",
    desc: "Dynamic context assemblers that query historical memory profiles to keep runtimes aligned.",
  },
  {
    icon: CheckListIcon,
    title: "Verification Primitives",
    desc: "Dual-agent verification steps cross-checking outputs before staging for human validation.",
  },
  {
    icon: PaintBrush02Icon,
    title: "Niyatna HQ Panels",
    desc: "Clear visual Command Room workspaces showing inputs, execution logs, and output diffs in a unified layout.",
  },
  {
    icon: Layout02Icon,
    title: "Administrative Veto",
    desc: "You retain absolute veto power. Action logs, diffs, and outcomes require your approval.",
  },
  {
    icon: CodeFolderIcon,
    title: "Niyatna Agent Runtimes",
    desc: "Custom agentic scripts and tool integrations built specifically to execute tasks under Niyatna OS.",
  },
  {
    icon: EnergyIcon,
    title: "Proof Registry",
    desc: "Saved-hour metrics showing the continuous return on your investment, backed by inspectable evidence logs.",
  },
]

export function FeatureGrid() {
  return (
    <Section id="more">
      <div className="mx-auto max-w-3xl">
        <SectionEyebrow>Infrastructure</SectionEyebrow>
        <SectionHeading>Built for trust, verification, and control.</SectionHeading>
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
