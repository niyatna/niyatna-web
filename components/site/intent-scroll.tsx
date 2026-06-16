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
    eyebrow: "OpenIntent Protocol",
    title: "Structured protocol for human intent capture.",
    description:
      "Instead of loose conversational chats, OpenIntent defines clear packets containing goals, constraints, resources, and explicit proof standards.",
    icon: CommandLineIcon,
    rows: ["goal constraints", "intent packets", "taste bounds"],
    bullets: [
      "Intent packets preserve absolute human intent constraints",
      "Translates business intentions into structured execution tasks",
      "Maintains clear alignment targets so runtimes never drift",
      "Ensures strategic instructions are readable and permanent",
    ],
    image: "/terminal.webp",
    caption: "intent://new-work · proof required",
  },
  {
    id: "02",
    eyebrow: "LocalRoute Gateways",
    title: "Secure local model and credential routing.",
    description:
      "LocalRoute manages key encryption and dynamically dispatches tasks to local vLLM nodes or cloud models under strict privacy boundaries.",
    icon: CpuIcon,
    rows: ["vLLM routes", "credential isolation", "key masking"],
    bullets: [
      "Routes data through private local or VPS vLLM models",
      "Prevents proprietary leaks to public third-party APIs",
      "Encrypts and injects scoped session tokens on compile",
      "Zero-knowledge runtime credentials prevent leaks",
    ],
    image: "/editor.webp",
    caption: "localroute://vllm-endpoint · active",
  },
  {
    id: "03",
    eyebrow: "Secure Agent Sandboxes",
    title: "Ephemeral hardware-isolated runtimes.",
    description:
      "Agents run inside secure, jailed virtual containers that mount only whitelisted directories and disable unauthorized actions.",
    icon: RecordIcon,
    rows: ["jailed execution", "path lockdowns", "ephemeral mounts"],
    bullets: [
      "Hardware-level isolation blocks container escapes",
      "Workspace mounts are locked to specific project subdirectories",
      "Destroys and scrubs sandbox environments upon completion",
      "Outbound network gates require explicit whitelist tokens",
    ],
    image: "/ai_workflow.webp",
    caption: "sandbox://cfo-agent · locked",
  },
  {
    id: "04",
    eyebrow: "Local Memory Provider",
    title: "Context mapping without task-context drift.",
    description:
      "Local memory context assembles durable contextual memory so agents understand historical decisions, while ensuring active OpenIntent parameters always override past data.",
    icon: GitBranchIcon,
    rows: ["durable context", "context query", "decision vaults"],
    bullets: [
      "Retrieves historical system states for relevant context",
      "Strict priority ensures active intent overrides past runs",
      "Prevents outdated assumptions from drifting intent targets",
      "Provides agents with searchable operational memory profiles",
    ],
    image: "/source-control.webp",
    caption: "memory://local-context · loaded",
  },
  {
    id: "05",
    eyebrow: "Proof of Intent Primitives",
    title: "Dual-agent validation and cryptographic receipts.",
    description:
      "Proof of Intent requires runtimes to generate inspectable verification primitives—including build logs, git diffs, and database check logs.",
    icon: Layout02Icon,
    rows: ["verification loops", "log checkpoints", "execution diffs"],
    bullets: [
      "Runtimes must return verifiable proof, not confidence scores",
      "Validates transaction matches and compile states",
      "Compares outputs against strict acceptance criteria",
      "Dual-agent consensus checking validates changes before staging",
    ],
    image: "/web_preview.webp",
    caption: "proof://reconciliation-check · passed",
  },
  {
    id: "06",
    eyebrow: "Niyatna HQ",
    title: "Absolute human veto control surface.",
    description:
      "Niyatna HQ is the visual Command Room where human operators inspect logs, review staged changes, and approve or veto commits.",
    icon: EnergyIcon,
    rows: ["decision gates", "administrative veto", "leverage reclaimed"],
    bullets: [
      "Unified dashboard displays intent side-by-side with proof",
      "Staging interface holds high-risk operations for sign-off",
      "One-click rollback cancels execution and purges changes",
      "Returns operational hours back to strategic leaders",
    ],
    image: "/themes.webp",
    caption: "niyatna-hq://ops-dashboard · online",
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
            <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[16/10] w-full flex flex-col lg:aspect-auto lg:flex-1 lg:min-h-[180px]">
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
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <div className="flex flex-col gap-10">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                The system
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl">
                From problem to intent to execution.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Every step in the Agentic Company system is designed to keep
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
