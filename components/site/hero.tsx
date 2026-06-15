"use client"

import {
  ArrowRight01Icon,
  Mail01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion } from "motion/react"
import Link from "next/link"

import { TypingAnimation } from "@/components/text-typing"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/docs"
            className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase backdrop-blur-md transition-colors hover:text-foreground"
          >
            <span className="size-1.5 rounded-full bg-foreground/70" />
            <span>Agentic Company Framework · Read more</span>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="size-3 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-7 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-foreground/55">Build the</span>
          <br className="inline" />{" "}
          <TypingAnimation
            words={["Agentic Company.", "Intent-Led Standard.", "Autonomous Workforce.", "Future of Business."]}
            loop
            typeSpeed={70}
            deleteSpeed={40}
            pauseDelay={1700}
            className="text-white"
            cursorStyle="line"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-7 max-w-2xl text-base text-balance text-foreground/70 sm:text-lg"
        >
          Every real company starts with a problem worth solving. From that problem comes intent, then mission, then goals—and those goals get delegated to specialized AI agents. That is the Agentic Company. Niyatna is the framework to build it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="rounded-full px-5">
            <Link href="#features">
              <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} />
              Explore the framework
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-5"
          >
            <Link href={`mailto:${SITE.email}`}>
              <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
              Start a conversation
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 flex items-center gap-2 border rounded-xl bg-background/60 px-3 py-1 font-mono text-[11px] tracking-[0.08em] text-foreground/65"
        >
          <span className="size-1.5 rounded-full bg-foreground/50" />
          <span>Problem → Intent → Dream → Mission → Vision → Goals → Agents</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] tracking-[0.12em] text-foreground/60 uppercase"
        >
          <span>Problem-First</span>
          <span className="size-1 rounded-full bg-muted-foreground/40" />
          <span>Intent-Driven</span>
          <span className="size-1 rounded-full bg-muted-foreground/40" />
          <span>Agent-Delegated</span>
        </motion.div>
      </div>
    </section>
  )
}
