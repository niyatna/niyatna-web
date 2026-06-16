import { source } from "@/lib/source"
import { DocsBody, DocsPage } from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import defaultMdxComponents from "fumadocs-ui/mdx"
import { PageActions } from "@/components/docs/page-actions"
import { SITE } from "@/lib/site"

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) notFound()

  const MDX = page.data.body

  const rawMarkdown = await page.data.getText("processed")

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <h1 className="mb-2 text-3xl font-bold tracking-tight">
        {page.data.title}
      </h1>
      <p className="mb-4 text-muted-foreground">{page.data.description}</p>
      <PageActions
        rawMarkdown={rawMarkdown}
      />
      <hr />
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export const dynamicParams = false

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}): Promise<Metadata> {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) notFound()

  const ogUrl = `/og/docs/${params.slug?.join("/") ?? ""}`

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: `${SITE.url}${page.url}`,
    },
    openGraph: {
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: page.data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogUrl],
    },
  }
}
