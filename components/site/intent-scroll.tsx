"use client"

import {
  CodeFolderIcon,
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
    eyebrow: "OS",
    title: "Ask the company system.",
    description:
      "Authorized people can ask, assign, and retrieve company context without waiting for every manager to re-explain the business.",
    icon: Layout02Icon,
    rows: ["authorized roles", "company context", "permission boundary"],
    bullets: [
      "Turns company questions into permissioned answers and next actions",
      "Keeps partner and team access scoped to the right context",
    ],
    image: "/brand/screenshots/os-askable.png",
    caption: "niyatna-os://askable-company · active",
  },
  {
    id: "02",
    eyebrow: "HQ",
    title: "Every request becomes owned work.",
    description:
      "Niyatna turns intent into tasks, assignees, deadlines, review gates, and operating rhythm.",
    icon: CodeFolderIcon,
    rows: ["owned task", "assignee set", "review gate"],
    bullets: [
      "Moves requests out of chat and into accountable work",
      "Attaches due dates, departments, review gates, and proof requirements",
    ],
    image: "/brand/screenshots/hq-owned-work.png",
    caption: "niyatna-hq://owned-work · scheduled",
  },
  {
    id: "03",
    eyebrow: "Memory",
    title: "Your company stops resetting.",
    description:
      "SOPs, decisions, departments, customers, and proof logs become memory the system can use.",
    icon: RecordIcon,
    rows: ["SOP memory", "decision log", "proof archive"],
    bullets: [
      "Recalls standards and previous decisions before work starts",
      "Connects departments, operating records, and proof history",
    ],
    image: "/brand/screenshots/memory-vault-abstract.png",
    caption: "niyatna-memory://context · recalled",
  },
  {
    id: "04",
    eyebrow: "Automations",
    title: "Repetitive work keeps moving.",
    description:
      "Niyatna schedules follow-ups, routes work to the right agent, and keeps recurring company routines alive.",
    icon: EnergyIcon,
    rows: ["schedule", "route", "report"],
    bullets: [
      "Keeps weekly reviews, follow-ups, and reports from depending on memory",
      "Routes routines through the right agent, tool, and boundary",
    ],
    image: "/brand/screenshots/automations-route.png",
    caption: "niyatna-automations://routine · alive",
  },
  {
    id: "05",
    eyebrow: "Proof",
    title: "Every intent leaves proof.",
    description:
      "Niyatna turns company requests into assigned work, evaluated output, memory, and verifiable evidence.",
    icon: GitBranchIcon,
    rows: ["evidence", "evaluation", "memory update"],
    bullets: [
      "Returns a proof artifact instead of another vague AI answer",
      "Links the original request to evidence, review status, and report-back",
    ],
    image: "/brand/screenshots/proof-intent-abstract.png",
    caption: "proof-of-intent://verified · stored",
  },
]

function IntentVisual({ active }: { active: (typeof steps)[number] }) {
  return (
    <div className="relative lg:min-h-[calc(100vh-10rem)]">
      <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.8)]">
        <Image
          src={active.image}
          alt={active.title}
          width={1672}
          height={941}
          priority
          sizes="(min-width: 1024px) 760px, 100vw"
          className="h-auto w-full object-cover opacity-95 saturate-[0.9] contrast-[1.04]"
        />
      </div>

      <div className="mt-6 max-w-2xl">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <HugeiconsIcon icon={active.icon} className="size-4" strokeWidth={1.8} />
          <span>{active.id}</span>
          <span>{active.eyebrow}</span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-balance text-foreground sm:text-3xl">
          {active.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {active.description}
        </p>
      </div>
    </div>
  )
}

export function IntentScroll() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const active = steps[activeIndex] ?? steps[0]
  
  const [activeMobileIndex, setActiveMobileIndex] = useState(0)
  const mobileTabsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const section = sectionRef.current
      if (!section) return
      
      // Desktop scroll detection
      const rect = section.getBoundingClientRect()
      const scrollable = Math.max(1, rect.height - window.innerHeight)
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable))
      const newActive = Math.min(steps.length - 1, Math.floor(progress * steps.length))
      setActiveIndex(newActive)

      // Mobile active index detection based on scroll position
      if (window.innerWidth < 1024) {
        let closestIndex = 0
        let minDistance = Infinity
        steps.forEach((step, idx) => {
          const el = document.getElementById(`step-card-${step.id}`)
          if (el) {
            const elRect = el.getBoundingClientRect()
            // Measure distance to the viewport top threshold (offset for header + tabs)
            const distance = Math.abs(elRect.top - 140)
            if (distance < minDistance) {
              minDistance = distance
              closestIndex = idx
            }
          }
        })
        setActiveMobileIndex(closestIndex)
      }
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

  // Auto-scroll the mobile tabs bar container to center the active button
  useEffect(() => {
    if (window.innerWidth >= 1024) return
    const container = mobileTabsRef.current
    if (!container) return
    const activeButton = container.children[activeMobileIndex] as HTMLElement
    if (!activeButton) return

    const containerWidth = container.offsetWidth
    const buttonLeft = activeButton.offsetLeft
    const buttonWidth = activeButton.offsetWidth

    container.scrollTo({
      left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
      behavior: "smooth",
    })
  }, [activeMobileIndex])

  return (
    <section
      ref={sectionRef}
      id="intent-scroll"
      className="relative px-4 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <div className="flex flex-col gap-10">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                Agentic Company System
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl">
                What makes a company agentic?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Niyatna makes your company askable, assignable, remembered, automated, and proven through one operating spine.
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

        <div className="lg:col-span-8 min-w-0">
          {/* Mobile Horizontal scrollable tabs, sticky to header on mobile scroll */}
          <div 
            ref={mobileTabsRef}
            className="sticky top-[58px] z-20 mb-6 flex flex-row flex-nowrap gap-2 overflow-x-auto w-full border-b border-border/40 bg-background/90 py-3.5 backdrop-blur-md lg:hidden scrollbar-none"
          >
            {steps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                onClick={() => {
                  const target = document.getElementById(`step-card-${step.id}`)
                  if (target) {
                    const elementPosition = target.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.scrollY - 130
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    })
                  }
                }}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-mono font-medium transition-all cursor-pointer whitespace-nowrap",
                  index === activeMobileIndex
                    ? "border-foreground bg-foreground text-background"
                    : "border-border/70 bg-background/50 text-muted-foreground hover:text-foreground"
                )}
              >
                <span>{step.id}</span>
                <span>{step.eyebrow}</span>
              </button>
            ))}
          </div>

          <div className="hidden lg:sticky lg:top-28 lg:block">
            <IntentVisual active={active} />
          </div>
          <div className="pointer-events-none hidden lg:block" aria-hidden="true">
            {steps.map((step) => (
              <div key={step.id} className="h-[76vh]" />
            ))}
          </div>
          <div className="grid gap-5 lg:hidden">
            {steps.map((step) => (
              <div key={step.id} id={`step-card-${step.id}`}>
                <IntentVisual active={step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
