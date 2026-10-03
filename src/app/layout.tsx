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
  title: "Umar Farooq | Senior Full Stack & PHP Developer",
  description:
    "Senior Full Stack and PHP developer in Riyadh. Laravel ERPs, Next.js SaaS, and production AI features. Open to remote roles worldwide.",
  keywords: [
    "Umar Farooq",
    "Senior Full Stack Developer",
    "Senior PHP Developer",
    "Laravel",
    "Next.js",
    "ERP",
    "AI Engineer",
    "Riyadh",
  ],
  authors: [{ name: "Umar Farooq", url: "https://itsumarfarooq.com" }],
  openGraph: {
    title: "Umar Farooq | Senior Full Stack & PHP Developer",
    description:
      "Laravel ERPs, Next.js SaaS, and AI-backed products. Portfolio template for Umar Farooq.",
    url: "https://itsumarfarooq.com",
    siteName: "Umar Farooq",
    type: "website",
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
