import type { Metadata } from "next"
import Link from "next/link"

import { PageHero, PageShell, Prose } from "@/components/site/page-shell"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms",
  description: `The terms of service that apply to your engagement with Niyatna.`,
  alternates: { canonical: `${SITE.url}/terms` },
}

const updated = "June 2026"

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Terms"
        title="Terms of Service"
        lead="Plain-language terms for visiting our site, entering the standard, and deploying Niyatna OS."
        meta={<span>Last updated · {updated}</span>}
      />

      <Prose>
        <h2>The short version</h2>
        <ul>
          <li>Niyatna provides the operating stack and architecture standards for running the Agentic Company.</li>
          <li>We translate your intent into verified agent execution; you retain ultimate ownership of your goals and rules.</li>
          <li>Any code or integration delivered to you during paid engagements is yours upon completion.</li>
          <li>We handle data with strict isolation; you are responsible for any credentials you provide.</li>
        </ul>

        <h2>1. Services & Engagements</h2>
        <p>
          Niyatna provisions the operating stack, standards, and gates for companies ready to become agentic. The specific configurations, implementations, and licensing terms for any system deployment will be defined in a separate, mutually signed system agreement. These Terms govern all such deployments unless explicitly superseded by a signed agreement.
        </p>

        <h2>2. Client Responsibilities & Data Access</h2>
        <p>
          To implement and operate agentic runtimes under Niyatna OS, you may need to grant access to your codebases, database environments, APIs, or third-party tools. You are solely responsible for:
        </p>
        <ul>
          <li>Ensuring you have all necessary rights, licenses, and permissions to grant us access to these environments.</li>
          <li>The parameters, motives, rules, and guidelines you provide for training or configuring AI agents.</li>
          <li>Implementing appropriate access control and rotating credentials upon project completion.</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <p>
          Unless otherwise agreed in a separate Statement of Work, all custom code, automation setups, schemas, and configurations delivered to you as part of a paid engagement become your sole intellectual property upon full payment of the agreed fees. Niyatna retains ownership of its pre-existing tools, open-source libraries, protocols, and standard operating blueprints.
        </p>

        <h2>4. Third-Party AI Services</h2>
        <p>
          The Niyatna OS environment and agent runtimes integrate with third-party artificial intelligence providers (such as Anthropic, OpenAI, or Google Cloud Vertex AI). These providers operate under their own terms of service and data privacy agreements. You agree to comply with the terms of these third-party providers when utilizing integrations that connect to their APIs. Niyatna is not responsible for any modifications, outages, or policy changes made by third-party providers.
        </p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>
          While the system executes and verifies agent actions to high operational standards, AI agent outputs are generated probabilistically by neural networks. We implement extensive verification layers, but all deliverables, code, and systems are provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis, without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, Niyatna, its directors, employees, or agents, shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, goodwill, or other intangible losses, arising out of or relating to:
        </p>
        <ul>
          <li>The operation or outputs of Niyatna OS or agent runtimes.</li>
          <li>Any unauthorized access to or alteration of your transmissions or data.</li>
          <li>Service interruptions or failures of third-party integrations.</li>
        </ul>
        <p>
          In no event shall our total aggregate liability exceed the greater of one hundred US dollars ($100 USD) or the total fees paid by you to Niyatna in the twelve (12) months preceding the claim.
        </p>

        <h2>7. Governing Law & Dispute Resolution</h2>
        <p>
          These Terms and any dispute arising out of or related to them shall be governed by and construed in accordance with the laws of the <strong>Republic of Indonesia</strong>. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts located in <strong>Bogor, West Java, Indonesia</strong>, and you hereby consent to the personal jurisdiction and venue of such courts.
        </p>

        <h2>8. Contact</h2>
        <p>
          Questions about these terms can be directed to{" "}
          <Link href="mailto:hello@niyatna.xyz">hello@niyatna.xyz</Link>.
        </p>
      </Prose>

      <div className="h-24 sm:h-32" />
    </PageShell>
  )
}
