import type { Metadata } from "next";
import { Figtree, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://contactumar.com"),
  title: "Umar Farooq · AI Engineer & Solution Architect",
  description:
    "AI Engineer and Solution Architect. I put LLM features inside live products and design the multi-tenant, high-traffic systems underneath: RAG, Laravel, Redis, Elasticsearch, AWS.",
  keywords: [
    "Umar Farooq",
    "Solution Architect",
    "Senior Software Engineer",
    "AI",
    "LLM",
    "RAG",
    "Laravel",
    "Multi-tenancy",
    "SaaS",
    "contacttoumar",
    "umarfarooq-ai",
  ],
  authors: [{ name: "Umar Farooq", url: "https://contactumar.com" }],
  icons: {
    icon: [{ url: "/images/favicon.svg", type: "image/svg+xml" }],
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title: "Umar Farooq · AI Engineer & Solution Architect",
    description:
      "Production AI/LLM features, solution architecture and multi-tenant SaaS that holds up under real traffic.",
    url: "https://contactumar.com",
    siteName: "Umar Farooq",
    type: "website",
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: "Umar Farooq" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
