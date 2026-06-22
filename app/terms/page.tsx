import type { Metadata } from "next"
import Link from "next/link"

import { PageHero, PageShell, Prose } from "@/components/site/page-shell"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms",
  description: `The terms that apply to visiting Niyatna and engaging us for agentic-company systems.`,
  alternates: { canonical: `${SITE.url}/terms` },
}

const updated = "June 2026"

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Terms"
        title="Terms of Service"
        lead="Plain-language terms for using this site, contacting Niyatna, and engaging us to design or deploy agentic-company systems."
        meta={<span>Last updated · {updated}</span>}
      />

      <Prose>
        <h2>The short version</h2>
        <ul>
          <li>Niyatna provides operating standards, architecture, and implementation support for companies ready to become agentic.</li>
          <li>You keep ownership of your company goals, data, rules, approvals, and final decisions.</li>
          <li>Any deployment details, deliverables, pricing, confidentiality terms, and support commitments should be defined in a separate signed agreement.</li>
          <li>Agent outputs require review. Niyatna provides systems and proof trails, not a guarantee that every AI-generated output is correct or risk-free.</li>
        </ul>

        <h2>1. Scope</h2>
        <p>
          These Terms govern your use of the Niyatna website, documentation, contact forms, qualification process, and any engagement with Niyatna unless a separate signed agreement says otherwise. If a signed agreement conflicts with these Terms, the signed agreement controls for that engagement.
        </p>

        <h2>2. Services and Engagements</h2>
        <p>
          Niyatna designs and supports agentic-company systems: operating layers, standards, approval gates, memory/context structures, agent workflows, integrations, and proof practices. The exact scope, deliverables, timeline, pricing, access, and deployment model must be agreed separately for each company.
        </p>

        <h2>3. Qualification</h2>
        <p>
          Access to Niyatna may be gated. We may decline or delay an engagement if a company does not yet have the operational clarity, data readiness, ownership structure, or approval discipline required to safely delegate work to agents.
        </p>

        <h2>4. Client Responsibilities</h2>
        <p>
          You are responsible for ensuring you have the rights to provide any data, credentials, repositories, documents, tools, instructions, or third-party accounts used in an engagement. You are also responsible for reviewing agent outputs, approving high-risk actions, maintaining your own internal policies, and rotating or revoking credentials when appropriate.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          Niyatna systems may connect to model providers, cloud platforms, collaboration tools, code hosts, payment processors, messaging platforms, and other company systems. Those providers operate under their own terms and privacy policies. Niyatna is not responsible for their outages, pricing changes, policy changes, or independent security practices.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          Unless a separate agreement says otherwise, custom deliverables created specifically for you in a paid engagement become yours after full payment. Niyatna retains ownership of its pre-existing tools, frameworks, templates, methods, protocols, know-how, and reusable operating standards.
        </p>

        <h2>7. Confidentiality and Data</h2>
        <p>
          Confidentiality, data handling, provider choices, access boundaries, and retention rules may be defined in a separate agreement or deployment plan. You should not send secrets, credentials, or sensitive data through unapproved channels.
        </p>

        <h2>8. Disclaimers</h2>
        <p>
          Niyatna systems are designed to improve control, delegation, and verification, but no AI or software system can guarantee perfect outputs, uninterrupted service, complete security, or a specific business result. Services and materials are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis unless a signed agreement states otherwise.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Niyatna is not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, including lost profits, lost data, business interruption, or loss of goodwill. Unless a signed agreement states otherwise, our total liability is limited to the greater of one hundred US dollars ($100 USD) or the fees you paid to Niyatna for the relevant engagement in the twelve months before the claim.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the <strong>Republic of Indonesia</strong>, unless a separate signed agreement specifies another governing law or venue.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions about these Terms can be directed to <Link href="mailto:hello@niyatna.xyz">hello@niyatna.xyz</Link>.
        </p>
      </Prose>

      <div className="h-24 sm:h-32" />
    </PageShell>
  )
}
