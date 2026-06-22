import { Mail01Icon, ShieldUserIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Metadata } from "next"
import Link from "next/link"

import { PageHero, PageShell, Prose } from "@/components/site/page-shell"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Security",
  description: `How Niyatna approaches access control, approvals, isolation, and proof for agentic-company deployments.`,
  alternates: { canonical: `${SITE.url}/security` },
}

export default function SecurityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Security"
        title="Security & Control"
        lead="Niyatna is designed around least-privilege access, approval gates, scoped tools, and proof trails. The exact controls depend on the deployment architecture approved for each company."
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
        <h2>Security posture</h2>
        <p>
          Agentic work can touch documents, tools, repositories, credentials, communications, and business decisions. Niyatna treats that as an operating-system problem: every deployment should define who can ask, what agents can access, which actions need approval, and what evidence must return.
        </p>

        <h2>1. Access Control</h2>
        <ul>
          <li><strong>Role-scoped access:</strong> People and agents should receive only the context and tool access required for their role.</li>
          <li><strong>Company-approved sources:</strong> Documents, SOPs, channels, repositories, and memory systems are connected only when approved for the deployment.</li>
          <li><strong>Credential boundaries:</strong> Credentials should use least-privilege scopes, service accounts where possible, and rotation after sensitive work is complete.</li>
        </ul>

        <h2>2. Approval Gates</h2>
        <ul>
          <li><strong>Human review:</strong> High-risk actions such as external sends, production writes, deployments, billing actions, or broad data access can be staged for review before execution.</li>
          <li><strong>Veto windows:</strong> Workflows can include a waiting period or review state before an agent completes a sensitive step.</li>
          <li><strong>Policy by workflow:</strong> Approval requirements should be defined per department, tool, task type, and risk level.</li>
        </ul>

        <h2>3. Runtime Isolation</h2>
        <p>
          Where configured, agent work can run inside isolated workspaces or sandboxes with scoped file access, controlled network access, and limited credential exposure. Isolation details vary by company environment and should be documented in the deployment plan.
        </p>

        <h2>4. Proof and Audit Trails</h2>
        <p>
          Niyatna uses Proof of Intent to make agent work inspectable. Meaningful actions should return evidence such as outputs, logs, screenshots, source references, test results, review status, and a summary of what changed.
        </p>

        <h2>5. Third-Party Providers</h2>
        <p>
          Niyatna may integrate with model providers, cloud platforms, collaboration tools, code hosts, payment processors, and company systems. Each provider has its own security model and terms. Sensitive deployments should document provider choice, data retention settings, and access boundaries before going live.
        </p>

        <h2>Vulnerability Reporting</h2>
        <p>
          If you find a security issue or have concerns about an integration, write to us at <Link href="mailto:security@niyatna.xyz">security@niyatna.xyz</Link>. Include enough detail to reproduce or assess the issue, but do not send secrets or private credentials by email.
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
            Security contact: {" "}
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
