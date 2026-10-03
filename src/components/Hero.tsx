import Image from "next/image";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden mesh-hero noise">
      <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden />

      {/* Full-bleed portrait plane */}
      <div className="pointer-events-none absolute inset-0 md:left-[42%]" aria-hidden>
        <Image
          src={profile.photo}
          alt=""
          fill
          priority
          className="object-cover object-[center_18%] opacity-90 md:opacity-100"
          sizes="(max-width: 768px) 100vw, 58vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--paper)] via-[color-mix(in_srgb,var(--paper)_78%,transparent)] to-transparent md:via-[color-mix(in_srgb,var(--paper)_55%,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--paper)] via-transparent to-[color-mix(in_srgb,var(--paper)_40%,transparent)] md:bg-gradient-to-t md:from-transparent" />
      </div>

      <div className="pointer-events-none absolute -left-16 bottom-24 h-56 w-56 rounded-full bg-[rgba(20,184,166,0.14)] blur-3xl animate-drift" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-32">
        <div className="max-w-xl md:max-w-lg">
          <p className="animate-rise mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-bright animate-pulse-dot" />
            {profile.availability}
          </p>

          <h1 className="animate-rise-delay-1 font-[family-name:var(--font-display)] text-[clamp(3.2rem,10vw,6.2rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-ink">
            {profile.name}
          </h1>

          <p className="animate-rise-delay-2 mt-5 text-lg leading-relaxed text-ink-soft md:text-xl">
            {profile.tagline}
          </p>

          <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(15,118,110,0.25)] transition hover:bg-accent-deep"
            >
              Start a conversation
            </a>
            <a
              href="#work"
              className="rounded-md border border-[var(--line)] bg-white/70 px-5 py-3 text-sm font-semibold text-ink backdrop-blur transition hover:border-accent hover:text-accent"
            >
              Selected work
            </a>
          </div>
        </div>

        <p className="mt-14 font-mono text-xs text-muted md:absolute md:bottom-10 md:left-8">
          {profile.title} · {profile.location}
        </p>
      </div>
    </section>
  );
}
