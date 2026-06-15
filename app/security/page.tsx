import { Mail01Icon, ShieldUserIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Metadata } from "next"
import Link from "next/link"

import { PageHero, PageShell, Prose } from "@/components/site/page-shell"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Security",
  description: `How Niyatna ensures the safety, compliance, and isolation of agentic workflows.`,
  alternates: { canonical: `${SITE.url}/security` },
}

export default function SecurityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Security"
        title="Security & Isolation"
        lead="We design agentic systems that run under strict security guardrails, ensuring client environments, credentials, and data remain safe."
        meta={
          <>
            <span>Operational Safety Standard</span>
          </>
        }
      />

      <div className="mx-auto mb-10 flex max-w-3xl items-center justify-center px-4 sm:px-6">
        <Button asChild size="sm" className="rounded-full">
          <Link href="mailto:security@niyatna.xyz">
            <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
            security@niyatna.xyz
          </Link>
        </Button>
      </div>

      <Prose>
        <h2>Security Under the Hood</h2>
        <p>
          Executing AI-agent operations requires interacting with codebases, terminals, and third-party APIs. We structure every agent workflow with multi-layered containment.
        </p>

        <h2>1. Sandbox Containment</h2>
        <ul>
          <li>
            <strong>Isolated Containers:</strong> Agents run inside ephemeral, hardware-isolated containers. They cannot escape to our host servers or access sibling workspaces.
          </li>
          <li>
            <strong>Network Restrictions:</strong> Outbound internet access is disabled by default. If a task requires fetching external packages, the agent operates in an approval-restricted network gateway.
          </li>
          <li>
            <strong>Directory Locks:</strong> File access is restricted strictly to the workspace assigned to the task. Agents cannot traverse directories outside their root project path.
          </li>
        </ul>

        <h2>2. Human-in-the-Loop Validation</h2>
        <ul>
          <li>
            <strong>Permission Gates:</strong> We configure agent workflows with specific policy templates. High-risk actions (such as deploying code, database writes, or running external shell scripts) are staged and require human approval.
          </li>
          <li>
            <strong>Verification Layer:</strong> Every output undergoes validation check gates. We review diffs, screenshots, terminal scrollbacks, and source citations before accepting a task as complete.
          </li>
        </ul>

        <h2>3. Credentials & API Governance</h2>
        <ul>
          <li>
            <strong>No Plaintext Storage:</strong> Client API keys and service accounts are managed via secure secrets engines. They are never written to disk, committed to source repositories, or logged in transcripts.
          </li>
          <li>
            <strong>Least-Privilege Roles:</strong> When granting agents access to cloud providers (e.g. AWS, GCP) or SaaS tools (e.g. GitHub, Slack), we configure IAM roles with the narrowest scope possible.
          </li>
        </ul>

        <h2>Vulnerability Reporting</h2>
        <p>
          If you find a security vulnerability or have concerns about how an integration is structured, please write to us directly at{" "}
          <Link href="mailto:security@niyatna.xyz">security@niyatna.xyz</Link> so we can address it immediately.
        </p>
      </Prose>

      <section className="relative mt-16 mb-24 px-4 sm:mt-20 sm:mb-32 sm:px-6">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 text-sm text-muted-foreground">
          <HugeiconsIcon
            icon={ShieldUserIcon}
            className="size-4"
            strokeWidth={1.8}
          />
          <span>
            PGP key available on request. Email{" "}
            <Link
              href="mailto:security@niyatna.xyz"
              className="text-foreground underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
            >
              security@niyatna.xyz
            </Link>
            .
          </span>
        </div>
      </section>
    </PageShell>
  )
}
