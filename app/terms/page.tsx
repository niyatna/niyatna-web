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
        lead="Plain-language terms for visiting our site and engaging with Niyatna's operational services."
        meta={<span>Last updated · {updated}</span>}
      />

      <Prose>
        <h2>The short version</h2>
        <ul>
          <li>Niyatna provides Agentic Company framework design and specialized AI agent architecture services.</li>
          <li>We translate your intent into verified workflows; you retain ultimate ownership of your goals and rules.</li>
          <li>Any code or integration delivered to you during paid engagements is yours upon completion.</li>
          <li>We handle data with strict isolation; you are responsible for any credentials you provide.</li>
        </ul>

        <h2>1. Engagement & Services</h2>
        <p>
          Niyatna designs, implements, and maintains custom agentic workflows that delegate operational business tasks to AI systems. Scope of work, deliverables, and fees are defined in separate, signed Statement of Work (SOW) documents.
        </p>

        <h2>2. Client Responsibilities & Data</h2>
        <p>
          You are responsible for the business parameters, motives, rules, and guidelines you provide. You must ensure you have the appropriate rights and authorization to grant us access to any codebase, API, database, or tool integrations required for the task.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          Unless otherwise agreed in a separate Statement of Work, all custom code, automation setups, schemas, and configurations delivered to you as part of a paid engagement become your intellectual property upon full payment of the agreed fees.
        </p>

        <h2>4. Third-Party AI Services</h2>
        <p>
          Our integrations connect to third-party providers (such as Anthropic, OpenAI, or Google Cloud). These providers have their own terms of service and data retention policies. You agree to comply with their respective terms when using integrations that connect to their APIs.
        </p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>
          While we build and verify workflows to the highest standard, AI agent outputs are generated probabilistically by neural networks. We implement extensive validation layers, but all deliverables and systems are provided "as-is" without warranty of any kind.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Niyatna shall not be liable for any indirect, incidental, or consequential damages arising from the operation of custom agentic systems, data transit, or execution outputs.
        </p>

        <h2>7. Trademarks</h2>
        <p>
          &ldquo;Niyatna&rdquo; and the Niyatna logo are trademarks of Niyatna.
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
