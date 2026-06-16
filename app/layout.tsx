import type { Metadata, Viewport } from "next"

import { BackgroundWaves } from "@/components/site/background-waves"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} - ${SITE.tagline}`,
    template: `%s - ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "agentic company",
    "agentic company formation",
    "Niyatna OS",
    "OpenIntent",
    "Proof of Intent",
    "AI agent workforce",
    "intent-driven business",
    "autonomous business operations",
    "AI delegation",
    "agent verification",
    "problem-first company",
    "specialized AI agents",
    "business automation standard",
  ],
  authors: [{ name: "Niyatna", url: SITE.url }],
  creator: "Niyatna",
  publisher: "Niyatna",
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
    siteName: SITE.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
  },
  icons: {
    icon: [
      { url: "/niyatna-icon.png", sizes: "1024x1024", type: "image/png" },
    ],
    apple: [{ url: "/niyatna-icon.png", sizes: "1024x1024" }],
    shortcut: ["/favicon.ico"],
  },
  category: "technology",
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased font-sans"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Geist+Mono:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark">
          <BackgroundWaves />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
