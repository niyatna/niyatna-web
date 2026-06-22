"use client"

import { motion } from "motion/react"
import Image from "next/image"

export function Demo() {
  return (
    <section
      id="demo"
      className="relative w-full px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-20 lg:pt-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl">
            From intent to verified company work.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/66 sm:text-[17px]">
            Niyatna turns a team decision into owned-agent execution: routed through private memory, approved at risk points, and returned with proof your company can audit.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, delay: 0.08 }}
        className="mx-auto mt-12 max-w-7xl overflow-hidden rounded-[2rem] sm:mt-16"
      >
        <Image
          src="/brand/screenshots/hero-abstract.png"
          alt="Niyatna turns company intent into proof-backed agentic execution"
          width={1672}
          height={941}
          priority
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="h-auto w-full object-cover opacity-95 saturate-[0.9] contrast-[1.04]"
        />
      </motion.div>
    </section>
  )
}
