import type { Metadata } from "next"
import Link from "next/link"

import { PageHero, PageShell, Prose } from "@/components/site/page-shell"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How Niyatna handles client data and ensures confidentiality.`,
  alternates: { canonical: `${SITE.url}/privacy` },
}

const updated = "June 2026"

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Privacy"
        title="Privacy & Data Governance"
        lead="Niyatna operates on a strict zero-retention, client-first data policy. Here is exactly how we protect your information."
        meta={<span>Last updated · {updated}</span>}
      />

      <Prose>
        <h2>The short version</h2>
        <ul>
          <li><strong>Confidentiality First:</strong> We do not log, retain, or train models on client operational data.</li>
          <li><strong>Client-Owned Access:</strong> All AI requests are run using client-approved API endpoints with zero training retention.</li>
          <li><strong>Strict Runtime Isolation:</strong> Task execution is conducted in isolated sandbox containers.</li>
          <li><strong>No Telemetry:</strong> Our landing page and documentation do not use tracking cookies or analytics scripts.</li>
        </ul>

        <h2>Secrets and Credentials</h2>
        <p>
          To delegate work to AI workforces, credentials and API keys must be handled with care:
        </p>
        <ul>
          <li>
            <strong>Encrypted Vaults:</strong> Any keys provided during active engagements are stored in encrypted vaults and injected dynamically into execution environments.
          </li>
          <li>
            <strong>No Log Leaks:</strong> We strip sensitive variables, access tokens, and credentials from all execution audit logs.
          </li>
          <li>
            <strong>Rotation Policies:</strong> We recommend rotating all credentials used in integrations upon the completion of project delivery.
          </li>
        </ul>

        <h2>Data Isolation & Transit</h2>
        <p>
          AI agents require access to files and execution runtimes to perform tasks. We ensure:
        </p>
        <ul>
          <li>
            <strong>Ephemeral Workspaces:</strong> File reads and writes occur inside sandboxed virtual environments that are destroyed immediately after task completion.
          </li>
          <li>
            <strong>Model Routing:</strong> We route tasks only to enterprise API endpoints (like Anthropic, OpenAI, or Google Cloud Vertex AI) that explicitly guarantee data is not used for model training.
          </li>
          <li>
            <strong>Local Models:</strong> For highly sensitive operations, we can set up fully offline local model execution.
          </li>
        </ul>

        <h2>What we collect</h2>
        <p>
          Since we run a landing page and documentation site, we do not require user accounts or logins:
        </p>
        <ul>
          <li>
            <strong>Web Server Logs:</strong> Standard HTTP request logs (IP address, user agent, requested paths) are temporarily processed to protect the website from abuse.
          </li>
          <li>
            <strong>Email Communication:</strong> If you write to us at{" "}
            <Link href="mailto:hello@niyatna.xyz">hello@niyatna.xyz</Link> or{" "}
            <Link href="mailto:security@niyatna.xyz">security@niyatna.xyz</Link>, we store your emails to assist you.
          </li>
        </ul>

        <h2>Changes</h2>
        <p>
          If our operational privacy policies change, we will update the &ldquo;Last updated&rdquo; date at the top of this page and note the changes in our Milestones timeline.
        </p>

        <h2>Contact</h2>
        <p>
          Privacy queries can be sent to{" "}
          <Link href="mailto:hello@niyatna.xyz">hello@niyatna.xyz</Link>. Security issues go directly to{" "}
          <Link href="mailto:security@niyatna.xyz">security@niyatna.xyz</Link>.
        </p>
      </Prose>

      <div className="h-24 sm:h-32" />
    </PageShell>
  )
}
