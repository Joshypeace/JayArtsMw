import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LoadingAnimation } from "@/components/loading-animation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { FloatingCTA } from "@/components/floating-cta"
import { PageTransition } from "@/components/page-transition"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "JayArts Multimedia - Professional Creative Agency",
  description:
    "Premium photography, videography, and graphic design services for weddings, events, and corporate branding.",
  generator: "v0.app",
  keywords: [
    "photography",
    "videography",
    "graphic design",
    "wedding photography",
    "corporate video",
    "branding",
    "creative agency",
  ],
  authors: [{ name: "JayArts Multimedia" }],
  openGraph: {
    title: "JayArts Multimedia - Professional Creative Agency",
    description: "Premium photography, videography, and graphic design services",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LoadingAnimation />
        <PageTransition>
          <Suspense fallback={null}>{children}</Suspense>
        </PageTransition>
        <ScrollToTop />
        <FloatingCTA />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
