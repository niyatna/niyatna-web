"use client"

import * as React from "react"
import {
  Copy01Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@/components/ui/button"

interface PageActionsProps {
  rawMarkdown: string
}

export function PageActions({
  rawMarkdown,
}: PageActionsProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(rawMarkdown)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy markdown", err)
    }
  }, [rawMarkdown])

  return (
    <div className="mb-4 flex items-center gap-2">
      {/* Copy Markdown Button */}
      <Button
        variant="outline"
        onClick={handleCopy}
        type="button"
        size="sm"
        className="cursor-pointer rounded-lg"
      >
        <HugeiconsIcon
          icon={copied ? Tick01Icon : Copy01Icon}
          className="size-3.5"
          strokeWidth={2}
        />
        {copied ? "Copied!" : "Copy Page Markdown"}
      </Button>
    </div>
  )
}
