import { Demo } from "@/components/site/demo"
import { Start } from "@/components/site/start"
import { FAQ } from "@/components/site/faq"
import { FeatureGrid } from "@/components/site/feature-grid"
import { Architecture } from "@/components/site/architecture"
import { SiteFooter } from "@/components/site/footer"
import { SiteHeader } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { IntentScroll } from "@/components/site/intent-scroll"
import { SITE } from "@/lib/site"

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}/niyatna-icon.png`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
  }

  return (
    <>
      <SiteHeader />
      <main className="relative">
        <Hero />
        <Demo />
        <div id="features">
          <IntentScroll />
        </div>
        <FeatureGrid />
        <Architecture />
        <FAQ />
        <Start />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
