import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://anuj-gupta-dev.vercel.app";
const description =
  "Backend engineer building fintech infrastructure with Django and Django REST Framework — payment gateway integrations, invoicing, automated payouts and reconciliation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anuj Gupta — Backend Engineer",
    template: "%s — Anuj Gupta",
  },
  description,
  keywords: [
    "Anuj Gupta",
    "Backend Engineer",
    "Django",
    "Django REST Framework",
    "Fintech",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Web Development",
  ],
  authors: [{ name: "Anuj Gupta", url: siteUrl }],
  creator: "Anuj Gupta",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Anuj Gupta",
    title: "Anuj Gupta — Backend Engineer",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Gupta — Backend Engineer",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0b0d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans">
        <a
          href="#profile"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-full focus:bg-bone focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
