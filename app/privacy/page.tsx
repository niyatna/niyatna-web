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
        lead="Niyatna operates on a strict zero-retention data standard. Here is how we enforce isolation and protect system information under the Niyatna standard."
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

        <h2>1. Zero-Retention Client Data Policy</h2>
        <p>
          Niyatna operates under a strict, client-first confidentiality model. When provisioning agentic runtimes and deploying Niyatna OS for your organization:
        </p>
        <ul>
          <li><strong>Zero Model Training:</strong> We route all tasks through enterprise API endpoints that guarantee client data is not logged or used for model training.</li>
          <li><strong>Runtime Isolation:</strong> Task executions occur in isolated, sandboxed virtual environments that are immediately destroyed upon task completion.</li>
          <li><strong>No Telemetry:</strong> Our Site and documentation do not use tracking cookies, marketing pixels, or analytics scripts.</li>
        </ul>

        <h2>2. Information We Collect</h2>
        <p>
          Because our Site is primarily informational and does not require user accounts, we collect minimal data:
        </p>
        <ul>
          <li><strong>Web Server Logs:</strong> When you visit our Site, standard HTTP request metadata (such as IP address, browser type, requested pages, and timestamp) is temporarily logged to detect and prevent abuse.</li>
          <li><strong>Communications:</strong> If you contact us via email (e.g., at <Link href="mailto:hello@niyatna.xyz">hello@niyatna.xyz</Link> or <Link href="mailto:security@niyatna.xyz">security@niyatna.xyz</Link>), we collect your email address and any information you choose to provide in your message to assist you.</li>
        </ul>

        <h2>3. Credentials and Secrets Governance</h2>
        <p>
          To delegate tasks to AI workforces, we manage credentials with extreme care:
        </p>
        <ul>
          <li><strong>Encrypted Vaults:</strong> Any API keys or credentials shared during active engagements are stored in encrypted vaults and injected dynamically into execution runtimes.</li>
          <li><strong>Log Redaction:</strong> We automatically strip sensitive variables, access tokens, and passwords from all execution audit logs.</li>
        </ul>

        <h2>4. Third-Party Service Providers</h2>
        <p>
          We do not sell, rent, or trade your personal data. We may share information with trusted third-party processors only as necessary to provide our services, including:
        </p>
        <ul>
          <li><strong>Hosting Providers:</strong> Hosting services for our Site and documentation.</li>
          <li><strong>API Providers:</strong> Enterprise AI models (e.g., Anthropic, OpenAI, Google Cloud Vertex AI) under secure, zero-retention API contracts.</li>
        </ul>

        <h2>5. Security</h2>
        <p>
          We implement industry-standard administrative, technical, and physical safeguards designed to protect the confidentiality and integrity of your data. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of any personal information we hold about you. To exercise these rights, please contact us using the details below.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy or our data handling practices, please contact us:
        </p>
        <ul>
          <li>For general privacy inquiries: <Link href="mailto:hello@niyatna.xyz">hello@niyatna.xyz</Link></li>
          <li>For security-related issues: <Link href="mailto:security@niyatna.xyz">security@niyatna.xyz</Link></li>
        </ul>
      </Prose>

      <div className="h-24 sm:h-32" />
    </PageShell>
  )
}
