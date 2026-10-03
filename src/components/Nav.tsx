"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#fit", label: "Fit" },
  { href: "#stack", label: "Problems" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_88%,transparent)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-ink">
          Umar<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-ink px-3.5 py-2 text-sm font-medium text-paper transition hover:bg-accent-deep"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
