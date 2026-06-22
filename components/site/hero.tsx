"use client"

import {
  ArrowRight01Icon,
  AttachmentIcon,
  ChatGptIcon,
  ClaudeIcon,
  Database01Icon,
  DiscordIcon,
  GithubIcon,
  GoogleGeminiIcon,
  GoogleIcon,
  SlackIcon,
  StripeIcon,
  TelegramIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

import { TypingAnimation } from "@/components/text-typing"
import { Button } from "@/components/ui/button"

type Brand = {
  name: string
  icon?: IconSvgElement
  image?: string
}

const brands: Brand[] = [
  { name: "Hermes Agent", image: "/brand/logos/hermes-agent.png" },
  { name: "Paperclip", icon: AttachmentIcon },
  { name: "Discord", icon: DiscordIcon },
  { name: "Telegram", icon: TelegramIcon },
  { name: "WhatsApp", icon: WhatsappIcon },
  { name: "Google Workspace", icon: GoogleIcon },
  { name: "GitHub", icon: GithubIcon },
  { name: "Slack", icon: SlackIcon },
  { name: "Stripe", icon: StripeIcon },
  { name: "Obsidian", icon: Database01Icon },
  { name: "OpenAI", icon: ChatGptIcon },
  { name: "Gemini", icon: GoogleGeminiIcon },
  { name: "Claude", icon: ClaudeIcon },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 sm:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 pb-16 sm:pb-20">
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
            <span>Agentic Company Systems · Read more</span>
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
          <span className="text-foreground/55">The future of your</span>
          <br className="inline" />{" "}
          <TypingAnimation
            words={["Agentic Company.", "Agent Workforce.", "Operating System.", "Company Standard."]}
            loop
            typeSpeed={70}
            deleteSpeed={40}
            pauseDelay={1700}
            className="text-zinc-900 dark:text-white"
            cursorStyle="line"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-7 max-w-2xl text-base text-balance text-foreground/70 sm:text-lg"
        >
          Niyatna is the operating system, standards, and gates for companies ready to become agentic—turning human intent into controlled agent work and proof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="rounded-full px-5">
            <Link href="/contact">
              Begin Qualification
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-5"
          >
            <Link href="#features">
              Explore the system
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] tracking-[0.12em] text-foreground/60 uppercase"
        >
          <span>Your Intent</span>
          <span className="size-1 rounded-full bg-muted-foreground/40" />
          <span>Your Agents</span>
          <span className="size-1 rounded-full bg-muted-foreground/40" />
          <span>Your System</span>
          <span className="size-1 rounded-full bg-muted-foreground/40" />
          <span>Your Company</span>
        </motion.div>
      </div>

      {/* Infinite scrolling logo marquee */}
      <div className="relative w-full overflow-hidden py-6 mt-16 border-t border-b border-border/40 bg-foreground/[0.01]">
        {/* Fade overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee flex gap-12 sm:gap-16 items-center">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 shrink-0 text-foreground/45 hover:text-foreground transition-colors cursor-pointer select-none"
            >
              {brand.image ? (
                <Image
                  src={brand.image}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 shrink-0 rounded-[0.35rem] object-cover opacity-80 grayscale"
                />
              ) : (
                <HugeiconsIcon
                  icon={brand.icon ?? AttachmentIcon}
                  className="size-4 shrink-0"
                  strokeWidth={1.8}
                />
              )}
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase shrink-0">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
