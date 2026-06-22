"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { SentIcon } from "@hugeicons/core-free-icons"

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setErrorMessage(null)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      drag: formData.get("drag"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.")
      }

      setStatus("success")
    } catch (error: unknown) {
      console.error("Form submission error:", error)
      setStatus("error")
      const err = error as { message?: string }
      setErrorMessage(err.message || "Failed to submit. Please try again later.")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-green-500/10 text-green-500 dark:bg-green-500/15">
          <HugeiconsIcon icon={SentIcon} className="size-6" strokeWidth={1.8} />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-zinc-900 dark:text-white">Inquiry Received</h3>
        <p className="mt-2.5 max-w-sm text-sm text-muted-foreground leading-relaxed">
          Thank you. We received your details and will review whether the problem is a fit for Niyatna readiness mapping.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          variant="outline"
          className="mt-6 rounded-xl"
        >
          Send another inquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-medium text-zinc-500 uppercase tracking-wider dark:text-zinc-400">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Jane Doe"
            disabled={status === "submitting"}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-100/50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-500 outline-none transition-colors focus:border-zinc-300 focus:bg-white dark:border-white/[0.08] dark:bg-zinc-950/60 dark:text-white dark:placeholder-zinc-600 dark:focus:border-white/20 dark:focus:bg-zinc-950 disabled:opacity-50"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-medium text-zinc-500 uppercase tracking-wider dark:text-zinc-400">
            Company Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="jane@company.com"
            disabled={status === "submitting"}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-100/50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-500 outline-none transition-colors focus:border-zinc-300 focus:bg-white dark:border-white/[0.08] dark:bg-zinc-950/60 dark:text-white dark:placeholder-zinc-600 dark:focus:border-white/20 dark:focus:bg-zinc-950 disabled:opacity-50"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-xs font-medium text-zinc-500 uppercase tracking-wider dark:text-zinc-400">
            Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            placeholder="Acme Corp"
            disabled={status === "submitting"}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-100/50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-500 outline-none transition-colors focus:border-zinc-300 focus:bg-white dark:border-white/[0.08] dark:bg-zinc-950/60 dark:text-white dark:placeholder-zinc-600 dark:focus:border-white/20 dark:focus:bg-zinc-950 disabled:opacity-50"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="drag" className="text-xs font-medium text-zinc-500 uppercase tracking-wider dark:text-zinc-400">
            Company Stage
          </label>
          <select
            id="drag"
            name="drag"
            required
            disabled={status === "submitting"}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-100/50 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors focus:border-zinc-300 focus:bg-white dark:border-white/[0.08] dark:bg-zinc-950/60 dark:text-zinc-300 dark:focus:border-white/20 dark:focus:bg-zinc-950 disabled:opacity-50"
          >
            <option value="exploring">Exploring agentic operations</option>
            <option value="small-team">Small team with recurring workflows</option>
            <option value="growing-company">Growing company with departments</option>
            <option value="established">Established company with approval needs</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-medium text-zinc-500 uppercase tracking-wider dark:text-zinc-400">
          Intent to Map
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={status === "submitting"}
          placeholder="What company work should become askable, assignable, approved, or proven? What context and approvals does it need?"
          className="w-full rounded-xl border border-zinc-200 bg-zinc-100/50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-500 outline-none transition-colors focus:border-zinc-300 focus:bg-white dark:border-white/[0.08] dark:bg-zinc-950/60 dark:text-white dark:placeholder-zinc-600 dark:focus:border-white/20 dark:focus:bg-zinc-950 disabled:opacity-50 resize-none"
        />
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-red-500/10 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full rounded-xl"
      >
        {status === "submitting" ? "Sending..." : "Begin Qualification"}
      </Button>
    </form>
  )
}
