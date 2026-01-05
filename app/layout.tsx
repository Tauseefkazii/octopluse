import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Suspense } from "react"
import { NavigationSkeleton } from "@/components/loading-states"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Octopulse Digital - Leading Digital Marketing Agency",
  description:
    "Octopulse Digital is a full-service digital marketing agency helping brands grow online. We specialize in SEO, content marketing, social media management, web development, and more.",
  keywords:
    "Digital Marketing, SEO, Content Marketing, Social Media Marketing, Web Development, Online Marketing Agency, Octopulse Digital",
  authors: [{ name: "Octopulse Digital" }],
  creator: "Octopulse Digital",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://octopulse.digital", // change to your agency URL
    title: "Octopulse Digital - Full-Service Digital Marketing Agency",
    description:
      "Octopulse Digital helps brands grow online with expert SEO, content marketing, social media, and web development services.",
    siteName: "Octopulse Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octopulse Digital - Full-Service Digital Marketing Agency",
    description:
      "Expert digital marketing services including SEO, content marketing, social media, and web development to help your business grow.",
    creator: "@OctopulseDigital", // update with your social handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Octopulse Digital CMS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Suspense fallback={<NavigationSkeleton />}>
          <Navigation />
        </Suspense>

        <PageTransition>{children}</PageTransition>

        {/* <Suspense fallback={<div className="h-96 bg-gray-900" />}>
          <Footer />
        </Suspense> */}
      </body>
    </html>
  )
}
