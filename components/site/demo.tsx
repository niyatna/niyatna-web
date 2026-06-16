"use client"

import {
  CodeIcon,
  Briefcase01Icon,
  Database01Icon,
  Tick01Icon,
  Key01Icon,
  Time02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion, AnimatePresence } from "motion/react"
import * as React from "react"
import { cn } from "@/lib/utils"

interface Capability {
  id: string
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  intent: string
  timeSaved: string
  status: string
  logs: string[]
  verification: {
    rule: string
    status: string
  }[]
}

const capabilities: Capability[] = [
  {
    id: "ceo",
    title: "Niyatna CEO Agent",
    icon: Briefcase01Icon,
    intent: "Align Q3 strategic roadmap, verify budget resource boundaries, and compile the executive brief.",
    timeSaved: "8 Hours",
    status: "Completed & Verified",
    logs: [
      "[STAGED] Staged OpenIntent packet: 'align strategic roadmap Q3'",
      "[IDENTITY] Loaded Niyatna CEO Agent profile (Strategic Catalyst, Role: Strategic Alignment)",
      "[AGENT] Audited current quarterly OKRs and department progress indicators",
      "[AGENT] Ran resource modeling simulations via LocalRoute (12 scenarios computed)",
      "[GATE] Action 'Request executive sign-off on resource reallocation' ... Approved.",
      "[VERIFY] Proof of Intent layer verified alignment with core company vision and budget ceiling.",
      "[OUTCOME] Q3 Roadmap brief compiled and dispatched to Niyatna HQ.",
    ],
    verification: [
      { rule: "Alignment with core company vision and metrics", status: "passed" },
      { rule: "Resource reallocation maps to budget constraints", status: "passed" },
      { rule: "Roadmap draft formatted for executive review", status: "passed" },
    ],
  },
  {
    id: "coo",
    title: "Niyatna COO Agent",
    icon: CodeIcon,
    intent: "Streamline customer onboarding: sync HubSpot CRM deals to internal databases and trigger Slack briefings.",
    timeSaved: "14 Hours",
    status: "Completed & Verified",
    logs: [
      "[STAGED] Staged OpenIntent packet: 'automate customer onboarding sync'",
      "[IDENTITY] Loaded Niyatna COO Agent profile (Execution Engine, Role: Process Optimization)",
      "[AGENT] Established read-only connection to HubSpot CRM API via LocalRoute",
      "[AGENT] Detected 84 new signed contracts in pipeline",
      "[AGENT] Synced account metadata and initialized database records for each account",
      "[GATE] Action 'Send onboarding package to all 84 accounts' ... Approved.",
      "[VERIFY] Proof of Intent layer checked contact validation, SLA checks, and database write integrity.",
      "[OUTCOME] Client accounts ready. Onboarding briefing sent to Slack channel #ops-alerts.",
    ],
    verification: [
      { rule: "HubSpot API authentication and rate-limiting checks", status: "passed" },
      { rule: "Account details verified against security clearance", status: "passed" },
      { rule: "Database write confirmations and Slack webhook validation", status: "passed" },
    ],
  },
  {
    id: "cfo",
    title: "Niyatna CFO Agent",
    icon: Database01Icon,
    intent: "Reconcile daily Stripe billing logs against invoice database and flag margin discrepancies.",
    timeSaved: "10 Hours",
    status: "Completed & Verified",
    logs: [
      "[STAGED] Staged OpenIntent packet: 'reconcile Stripe vs invoice logs'",
      "[IDENTITY] Loaded Niyatna CFO Agent profile (Financial Guardrail, Role: Margin Guardrail)",
      "[AGENT] Fetched 1,248 daily Stripe transactions via LocalRoute",
      "[AGENT] Matched 1,245 invoices successfully based on metadata checksums",
      "[AGENT] Flagged 3 mismatched accounts for manual finance audit",
      "[GATE] Action 'Initiate chargeback inquiry for anomalies' ... Approved.",
      "[VERIFY] Proof of Intent layer cross-checked deposits vs bank ledger APIs.",
      "[OUTCOME] Discrepancies isolated and report sent to Niyatna HQ.",
    ],
    verification: [
      { rule: "Transaction checksum matching validated", status: "passed" },
      { rule: "Net margin calculation verified within 0.01% error limit", status: "passed" },
      { rule: "Anomaly logs isolated and encrypted in workspace", status: "passed" },
    ],
  },
]

export function Demo() {
  const [activeTab, setActiveTab] = React.useState("ceo")
  const currentCap = capabilities.find((c) => c.id === activeTab) || capabilities[0]

  return (
    <section id="demo" className="relative w-full px-4 py-24 sm:px-6 sm:py-32 bg-zinc-50/50 dark:bg-zinc-950/20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            <span className="h-px w-8 bg-border" />
            <span>System Operations Preview</span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-4xl lg:text-5xl">
            Intent translates to verified operations.
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-[17px]">
            When intent is mapped, Niyatna OS orchestrates execution, secure runtimes, local memory contexts, and multi-layer verification checks.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {capabilities.map((c) => {
            const isActive = c.id === activeTab
            return (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={cn(
                  "flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-zinc-900/10 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/20 shadow-lg"
                    : "text-muted-foreground border border-transparent hover:text-foreground hover:bg-zinc-900/5 dark:hover:bg-white/5"
                )}
              >
                <HugeiconsIcon icon={c.icon} className="size-4" strokeWidth={2} />
                {c.title}
              </button>
            )
          })}
        </div>

        {/* Tab Panel / Sandbox Terminal */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] backdrop-blur dark:border-white/[0.08] dark:bg-zinc-950/70 dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-100/90 px-4 py-3 dark:border-white/[0.06] dark:bg-zinc-950/90">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-zinc-300 ring-1 ring-black/5 ring-inset dark:bg-zinc-700/90 dark:ring-white/5" />
              <span className="size-2.5 rounded-full bg-zinc-300 ring-1 ring-black/5 ring-inset dark:bg-zinc-700/90 dark:ring-white/5" />
              <span className="size-2.5 rounded-full bg-zinc-300 ring-1 ring-black/5 ring-inset dark:bg-zinc-700/90 dark:ring-white/5" />
              <span className="ml-3 font-mono text-[10px] tracking-wide text-zinc-500">
                sandbox://workforce-{currentCap.id}
              </span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-0.5 font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              {currentCap.status}
            </div>
          </div>

          {/* Terminal Body */}
          <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
            {/* Left Column: Input and Execution Logs */}
            <div className="flex flex-col gap-4 font-mono text-[12px] leading-relaxed">
              <div className="rounded-lg border border-zinc-200 bg-zinc-100/50 p-4 dark:border-white/[0.05] dark:bg-zinc-950/90">
                <div className="flex items-center gap-2 text-zinc-500 font-semibold mb-2 uppercase text-[10px] tracking-wider">
                  <HugeiconsIcon icon={Key01Icon} className="size-3.5 text-zinc-500" />
                  Intent Input
                </div>
                <div className="text-zinc-800 dark:text-zinc-200">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">$ </span>
                  {currentCap.intent}
                </div>
              </div>

              {/* Logs */}
              <div className="flex-grow rounded-lg border border-zinc-200 bg-zinc-100/50 p-4 text-zinc-600 h-[260px] overflow-y-auto dark:border-white/[0.05] dark:bg-zinc-950/90 dark:text-zinc-400">
                <div className="flex items-center gap-2 text-zinc-500 font-semibold mb-2.5 uppercase text-[10px] tracking-wider">
                  <span className="size-1.5 rounded-full bg-zinc-500" />
                  Execution Logs
                </div>
                <div className="space-y-1.5 font-mono">
                  <AnimatePresence mode="popLayout">
                    {currentCap.logs.map((log, index) => (
                      <motion.div
                        key={log}
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className={cn(
                          log.startsWith("[GATE]")
                            ? "text-amber-600 dark:text-amber-400 font-semibold"
                            : log.startsWith("[STAGED]")
                              ? "text-blue-600 dark:text-blue-400"
                              : log.startsWith("[VERIFY]")
                                ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                                : "text-zinc-600 dark:text-zinc-400"
                        )}
                      >
                        {log}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Column: Verification layer card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-lg border border-zinc-200 bg-zinc-100/50 p-4 dark:border-white/[0.05] dark:bg-zinc-950/90">
                <div className="flex items-center gap-2 text-zinc-500 font-semibold mb-3.5 uppercase text-[10px] tracking-wider">
                  <HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                  Verification Layer Rules
                </div>
                <div className="space-y-3">
                  {currentCap.verification.map((v) => (
                    <div key={v.rule} className="flex items-center justify-between gap-3 text-sm">
                      <span className="text-zinc-700 dark:text-zinc-300">{v.rule}</span>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 rounded dark:text-emerald-400">
                        ✓ OK
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-zinc-200 bg-zinc-100/50 p-4 dark:border-white/[0.05] dark:bg-zinc-950/90">
                <div className="flex items-center gap-2 text-zinc-500 font-semibold mb-3 uppercase text-[10px] tracking-wider">
                  <HugeiconsIcon icon={Time02Icon} className="size-3.5 text-blue-600 dark:text-blue-400" />
                  Efficiency Return
                </div>
                <div className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {currentCap.timeSaved}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Reclaimed for high-leverage decision making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
