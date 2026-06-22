import type { Metadata } from "next"
import Link from "next/link"

import { PageHero, PageShell, Prose } from "@/components/site/page-shell"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How Niyatna handles site, contact, qualification, and engagement data.`,
  alternates: { canonical: `${SITE.url}/privacy` },
}

const updated = "June 2026"

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Privacy"
        title="Privacy & Data Governance"
        lead="Niyatna is designed for scoped, private deployments. This policy explains what data we collect on the site, during qualification, and during any approved engagement."
        meta={<span>Last updated · {updated}</span>}
      />

      <Prose>
        <h2>The short version</h2>
        <ul>
          <li><strong>We collect only what is needed</strong> to operate the site, respond to inquiries, qualify companies, and deliver approved work.</li>
          <li><strong>We do not sell personal data.</strong> We do not use your company data to train public models.</li>
          <li><strong>Engagement data is scoped.</strong> Access to tools, repositories, documents, credentials, and memory sources is defined by the deployment or signed agreement.</li>
          <li><strong>Model and API providers vary by setup.</strong> The exact providers and retention settings depend on the architecture approved for your company.</li>
        </ul>

        <h2>1. Scope</h2>
        <p>
          This policy covers the Niyatna website, contact and qualification flows, documentation, and professional engagements for Niyatna systems. A signed agreement may add more specific data-processing terms for a particular company deployment.
        </p>

        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Site and hosting data:</strong> Standard request metadata such as IP address, browser type, device information, referring page, requested pages, and timestamps may be processed by hosting and analytics providers to operate, secure, and improve the site.</li>
          <li><strong>Contact data:</strong> If you contact us, we collect your email address, name, company details, and anything you choose to include in your message.</li>
          <li><strong>Qualification data:</strong> If you apply for readiness mapping, we may collect information about your company structure, workflows, tools, pain points, data readiness, and approval requirements.</li>
          <li><strong>Engagement data:</strong> During an approved deployment, we may process the repositories, documents, SOPs, tool access, credentials, prompts, logs, outputs, and proof artifacts needed to perform the agreed work.</li>
        </ul>

        <h2>3. How We Use Information</h2>
        <p>
          We use information to operate the site, respond to inquiries, evaluate readiness, design agentic-company architecture, configure approved systems, provide support, secure the service, and maintain proof and audit trails where required by the engagement.
        </p>

        <h2>4. Providers and Integrations</h2>
        <p>
          We may use trusted service providers to host the site, process messages, measure site usage, operate approved model/API calls, and connect company tools. These may include hosting providers, analytics providers, email providers, AI model providers, cloud platforms, collaboration tools, code hosting, payment processors, and other integrations approved for a deployment.
        </p>
        <p>
          We configure providers according to the needs and constraints of each engagement. Where sensitive company data is involved, provider choice, data retention, and access boundaries should be documented in the deployment agreement or operating plan.
        </p>

        <h2>5. Credentials and Secrets</h2>
        <p>
          Credentials should be shared only through approved channels and with the narrowest scope necessary. We prefer least-privilege access, scoped service accounts, rotation after work is complete, and redaction of secrets from logs and proof artifacts where possible. You remain responsible for granting access only to systems you are authorized to control.
        </p>

        <h2>6. Retention</h2>
        <p>
          We keep contact, qualification, and engagement records only as long as needed for the purposes described above, legal requirements, security, dispute resolution, or active support. Deployment-specific retention rules may be defined in a separate agreement.
        </p>

        <h2>7. Security</h2>
        <p>
          We use administrative and technical safeguards designed to protect data, including scoped access, approval gates, sandboxing where configured, and review of sensitive outputs. No internet-connected system can be guaranteed 100% secure, and no policy should be read as a promise of absolute security.
        </p>

        <h2>8. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have rights to access, correct, delete, export, or restrict processing of your personal information. To exercise these rights, contact us using the details below.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have privacy questions or data requests, contact us at <Link href="mailto:hello@niyatna.xyz">hello@niyatna.xyz</Link>. For security issues, contact <Link href="mailto:security@niyatna.xyz">security@niyatna.xyz</Link>.
        </p>
      </Prose>

      <div className="h-24 sm:h-32" />
    </PageShell>
  )
}
