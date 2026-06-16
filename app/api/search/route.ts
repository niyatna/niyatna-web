import { NextResponse } from "next/server"
import searchIndex from "@/public/search-index.json"

export const runtime = "edge"

export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query")?.toLowerCase() || ""

  if (!query) {
    return NextResponse.json([])
  }

  const filtered = searchIndex.filter(
    (page) =>
      page.title.toLowerCase().includes(query) ||
      page.content.toLowerCase().includes(query)
  )

  return NextResponse.json(filtered)
}
