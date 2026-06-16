"use client"

import * as React from "react"
import Image, { type ImageProps } from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { cn } from "@/lib/utils"

interface ScreenshotFrameProps {
  src: ImageProps["src"]
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  caption?: string
}

export function ScreenshotFrame({
  src,
  alt,
  width,
  height,
  priority,
  className,
  caption,
}: ScreenshotFrameProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const tilt = useTransform(scrollYProgress, [0, 0.5, 1], [4, 0, -2])
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.9, 1], [0, 1, 1, 0.7])

  return (
    <motion.div
      ref={ref}
      style={
        reduceMotion
          ? undefined
          : { rotateX: tilt, opacity, transformPerspective: 1400 }
      }
      className={cn("relative w-full", className)}
    >
      {/* Soft monochrome halo */}
      <div
        className="pointer-events-none absolute -inset-12 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03),transparent_65%)] blur-2xl dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_65%)]"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100/90 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur dark:border-white/[0.08] dark:bg-zinc-950/80 dark:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] dark:ring-black/10">
        <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-zinc-200/50 px-4 py-2.5 dark:border-white/[0.06] dark:bg-zinc-950/90">
          <span className="size-2.5 rounded-full bg-zinc-300 ring-1 ring-inset ring-black/5 dark:bg-zinc-700/90 dark:ring-white/5" />
          <span className="size-2.5 rounded-full bg-zinc-300 ring-1 ring-inset ring-black/5 dark:bg-zinc-700/90 dark:ring-white/5" />
          <span className="size-2.5 rounded-full bg-zinc-300 ring-1 ring-inset ring-black/5 dark:bg-zinc-700/90 dark:ring-white/5" />
          {caption && (
            <span className="ml-3 truncate font-mono text-[11px] tracking-wide text-zinc-500">
              {caption}
            </span>
          )}
        </div>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          quality={92}
          sizes="(min-width: 1280px) 1100px, (min-width: 1024px) 900px, 100vw"
          className="h-auto w-full select-none"
        />
      </div>
    </motion.div>
  )
}
