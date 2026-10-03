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
  title: "Umar Farooq · Senior Software Engineer, Laravel and AI",
  description:
    "Senior software engineer in Lahore. Eight years on Laravel systems—one holding 50,000 concurrent users—plus production LLM and RAG features.",
  keywords: [
    "Umar Farooq",
    "Senior Software Engineer",
    "Laravel",
    "PHP",
    "AI",
    "RAG",
    "Lahore",
    "contactumar",
  ],
  authors: [{ name: "Umar Farooq", url: "https://contactumar.com" }],
  icons: {
    icon: [{ url: "/images/favicon.svg", type: "image/svg+xml" }],
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title: "Umar Farooq · Senior Software Engineer, Laravel and AI",
    description:
      "Eight years on Laravel systems and production AI features. Based in Lahore, open to senior and lead roles.",
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
