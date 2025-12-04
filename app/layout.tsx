import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Anuj Gupta | Full-Stack Developer",
  description:
    "Building scalable web experiences with Next.js, React, and AI integrations. Explore my portfolio of modern web applications.",
  keywords: ["Full-Stack Developer", "Next.js", "React", "TypeScript", "AI", "Web Development"],
  authors: [{ name: "Anuj Gupta" }],
  openGraph: {
    title: "Anuj Gupta | Full-Stack Developer",
    description: "Building scalable web experiences with Next.js, React, and AI integrations.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
