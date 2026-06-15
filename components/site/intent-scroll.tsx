"use client"

import {
  CommandLineIcon,
  CpuIcon,
  EnergyIcon,
  GitBranchIcon,
  Layout02Icon,
  RecordIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

const steps: Array<{
  id: string
  eyebrow: string
  title: string
  description: string
  icon: IconSvgElement
  rows: string[]
  bullets: string[]
  image: string
  caption: string
}> = [
  {
    id: "01",
    eyebrow: "Intent Primitive",
    title: "A primitive for translating human will into agent work.",
    description:
      "Niyatna starts where chat is too weak: it captures the person’s intent, turns it into executable delegation, and keeps the original meaning alive through the whole agent loop.",
    icon: CommandLineIcon,
    rows: ["will", "outcome", "meaning"],
    bullets: [
      "Intent packets preserve will, outcome, constraints, and proof standard",
      "Human direction, agent execution, and review stay connected",
      "Context stays attached so delegated work does not drift",
      "Previous decisions and proof remain searchable",
    ],
    image: "/terminal.webp",
    caption: "intent://new-work · proof required",
  },
  {
    id: "02",
    eyebrow: "Verification Layer",
    title: "Verification makes delegation trustworthy.",
    description:
      "AI agents can move fast, but speed only matters if humans can verify the output. Niyatna makes proof part of the work, not an afterthought.",
    icon: RecordIcon,
    rows: ["evidence", "receipts", "approval"],
    bullets: [
      "Agent output returns with inspectable evidence",
      "Decisions and acceptance criteria stay visible",
      "Readable surfaces for serious verification sessions",
      "Low-friction handoff from execution to approval",
    ],
    image: "/editor.webp",
    caption: "proof review · intent packet",
  },
  {
    id: "03",
    eyebrow: "Delegation Trail",
    title: "Delegation needs memory of what happened.",
    description:
      "Niyatna keeps the history of delegated work visible: what the agent did, why it did it, what evidence came back, and what decision still belongs to the human.",
    icon: GitBranchIcon,
    rows: ["changed", "verified", "still-open"],
    bullets: [
      "Reviewable trail for agent and human changes",
      "Decision-aware execution notes",
      "Timeline of runs, approvals, and proof",
      "Search prior choices and evidence fast",
    ],
    image: "/source-control.webp",
    caption: "change control · proof trail",
  },
  {
    id: "04",
    eyebrow: "Agent Workflow",
    title: "Agents execute; humans remain the source of authority.",
    description:
      "Niyatna treats AI agents as a delegated workforce: useful for acceleration, bounded by permission, and judged by verified output.",
    icon: CpuIcon,
    rows: ["worker", "reviewer", "verifier"],
    bullets: [
      "Proof bundles for every material agent action",
      "Persistent context for human intent and project direction",
      "Flexible model routing without changing intent",
      "Voice-to-intent capture while staying human-owned",
    ],
    image: "/ai_workflow.webp",
    caption: "agent loop · approval gate",
  },
  {
    id: "05",
    eyebrow: "Outcome Preview",
    title: "Inspect what the delegation produced.",
    description:
      "The outcome should be visible beside the original intent so the human can see whether the delegated work actually returned the promised leverage.",
    icon: Layout02Icon,
    rows: ["preview", "evidence", "checks"],
    bullets: [
      "Open result surfaces and verification URLs",
      "Outcome preview beside evidence and approval state",
      "Plans, tasks, and acceptance checks stay in one flow",
      "Fast loop from delegation to inspection to decision",
    ],
    image: "/web_preview.webp",
    caption: "proof preview · verified route",
  },
  {
    id: "06",
    eyebrow: "Human Agency",
    title: "The interface exists to return time, not consume it.",
    description:
      "Niyatna keeps the original visual DNA intact, but the meaning is sharper: a calm surface for turning human intent into agentic leverage and time returned.",
    icon: EnergyIcon,
    rows: ["noise reduced", "proof returned", "decision remains human"],
    bullets: [
      "Visual calm for long-running delegation and review",
      "Atmosphere supports focus without stealing attention",
      "Design tokens keep product, docs, and pages aligned",
      "The product language stays intent-first everywhere",
    ],
    image: "/themes.webp",
    caption: "settings · workspace feel",
  },
]

function IntentVisual({ active }: { active: (typeof steps)[number] }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.75)] backdrop-blur-xl lg:h-[calc(100vh-14rem)] lg:min-h-[620px] flex flex-col">
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-background/70 px-4 py-3 shrink-0">
        <span className="size-2.5 rounded-full bg-foreground/25" />
        <span className="size-2.5 rounded-full bg-foreground/18" />
        <span className="size-2.5 rounded-full bg-foreground/12" />
        <span className="ml-3 truncate font-mono text-[11px] tracking-wide text-muted-foreground">
          niyatna://intent/{active.id}
        </span>
      </div>

      <div className="relative p-6 sm:p-8 flex-1 flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(255,255,255,0.06),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.04),transparent_28%)] pointer-events-none" />

        <div className="relative flex flex-col justify-between h-full gap-6 md:gap-8 flex-1">
          {/* Visual Screenshot display on top */}
          <div className="w-full flex-1 min-h-0 relative flex flex-col justify-center">
            <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex-1 min-h-[180px] flex flex-col">
              <div className="flex items-center gap-1 border-b border-border/40 bg-background/60 px-3 py-1.5 shrink-0">
                <span className="size-1.5 rounded-full bg-foreground/20" />
                <span className="size-1.5 rounded-full bg-foreground/15" />
                <span className="size-1.5 rounded-full bg-foreground/10" />
              </div>
              <div className="relative w-full flex-1 overflow-hidden">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 800px, 100vw"
                  className="object-cover opacity-85 saturate-[0.85] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/40" />
              </div>
            </div>
            <div className="mt-2 text-center font-mono text-[10px] tracking-wider text-muted-foreground shrink-0">
              {active.caption}
            </div>
          </div>

          {/* Narrative detail & Checkpoints below image */}
          <div className="grid gap-6 md:grid-cols-12 md:gap-8 shrink-0">
            <div className="md:col-span-7 flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background/50 text-muted-foreground">
                  <HugeiconsIcon icon={active.icon} className="size-4" strokeWidth={1.8} />
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  {active.eyebrow}
                </div>
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.035em] text-balance text-foreground leading-snug sm:text-xl">
                {active.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {active.description}
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col justify-center">
              <ul className="space-y-1.5 border-l border-border/60 pl-4 py-0.5">
                {active.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-xs leading-relaxed text-foreground/80"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground/50" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function IntentScroll() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const active = steps[activeIndex] ?? steps[0]

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const scrollable = Math.max(1, rect.height - window.innerHeight)
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable))
      setActiveIndex(Math.min(steps.length - 1, Math.floor(progress * steps.length)))
    }
    const request = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", request, { passive: true })
    window.addEventListener("resize", request)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener("scroll", request)
      window.removeEventListener("resize", request)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="intent-scroll"
      className="relative px-4 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <div className="flex flex-col gap-10">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                The framework
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl">
                From problem to intent to execution.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Every step in the Agentic Company framework is designed to keep
                human intent connected to agent execution.
              </p>
            </div>

            <div className="relative hidden flex-col gap-1.5 lg:flex">
              <div
                className="absolute inset-x-0 rounded-xl border border-border/70 bg-foreground/[0.055] backdrop-blur-md transition-transform duration-300"
                style={{ height: 48, transform: `translateY(${activeIndex * 54}px)` }}
              />
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => {
                    const section = sectionRef.current
                    if (!section) return
                    const start = section.offsetTop
                    const travel = section.offsetHeight - window.innerHeight
                    window.scrollTo({
                      top: start + (travel * index) / steps.length,
                      behavior: "smooth",
                    })
                  }}
                  className={cn(
                    "relative z-10 flex h-12 items-center gap-4 rounded-xl px-4 text-left font-mono text-sm transition-colors active:scale-[0.98]",
                    index === activeIndex
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground/80"
                  )}
                >
                  <span className="text-foreground/45">{step.id}</span>
                  <span>{step.eyebrow}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="lg:sticky lg:top-28">
            <IntentVisual active={active} />
          </div>
          <div className="pointer-events-none hidden lg:block" aria-hidden="true">
            {steps.map((step) => (
              <div key={step.id} className="h-[76vh]" />
            ))}
          </div>
          <div className="grid gap-5 lg:hidden">
            {steps.map((step) => (
              <IntentVisual key={step.id} active={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
