import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden mesh-hero noise">
      <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full bg-[url('/hero-plane.svg')] bg-cover bg-right-top bg-no-repeat opacity-[0.55] md:w-[58%]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 top-28 h-72 w-72 rounded-full bg-[var(--glow)] blur-3xl animate-drift md:h-96 md:w-96" />
      <div className="pointer-events-none absolute -left-16 bottom-24 h-56 w-56 rounded-full bg-[rgba(217,119,6,0.12)] blur-3xl" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-20 pt-28 md:px-8 md:pb-24 md:pt-32">
        <div className="max-w-3xl">
          <p className="animate-rise mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-bright animate-pulse-dot" />
            {profile.availability}
          </p>

          <h1 className="animate-rise-delay-1 font-[family-name:var(--font-display)] text-[clamp(3.2rem,10vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-ink">
            {profile.name}
          </h1>

          <p className="animate-rise-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {profile.tagline}
          </p>

          <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(15,118,110,0.25)] transition hover:bg-accent-deep"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="rounded-md border border-[var(--line)] bg-white/50 px-5 py-3 text-sm font-semibold text-ink backdrop-blur transition hover:border-accent hover:text-accent"
            >
              See selected work
            </a>
          </div>
        </div>

        <p className="mt-16 font-mono text-xs text-muted md:absolute md:bottom-10 md:right-8">
          {profile.title} · {profile.location}
        </p>
      </div>
    </section>
  );
}
