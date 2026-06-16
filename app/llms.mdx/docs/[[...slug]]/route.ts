import { NextResponse } from "next/server"
import llmsIndex from "@/public/llms-index.json"

export const dynamic = 'force-dynamic'
export const runtime = 'edge'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await params
  let cleanSlug = slug || []
  if (cleanSlug.length > 0 && cleanSlug[cleanSlug.length - 1] === "index") {
    cleanSlug = cleanSlug.slice(0, -1)
  }
  
  const currentUrl = `/docs/${cleanSlug.join("/")}`
  const llmText = (llmsIndex as Record<string, string>)[currentUrl]
  
  if (!llmText) {
    return new Response("Not Found", { status: 404 })
  }

  return new Response(llmText, {
    headers: {
      "Content-Type": "text/markdown",
    },
  })
}
