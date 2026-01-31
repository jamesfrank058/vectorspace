import type React from "react"
// <CHANGE> Update metadata and remove existing theme setup
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import WhatsApp from "../components/whatsapp"

export const metadata: Metadata = {
  title: "VectorSpace | Engineering, Precision & Innovation",
  description:
    "Delivering innovative, sustainable, and cost-effective infrastructure across East Africa. Multidisciplinary engineering, construction, and consultancy firm.",
  generator: "v0.app",
  icons: {
    icon: {
      url: "/icon.svg",
      type: "image/svg+xml",
    },
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsApp />
        <Analytics />
      </body>
    </html>
  )
}
