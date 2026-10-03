import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden section-rule bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 mesh-hero opacity-70" />
      <div className="relative mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
        <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-6xl">
          Let&apos;s build systems that survive production
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Solution architecture, multi-tenant SaaS, production AI/LLM features, Laravel scaling, or an honest review
          before a rewrite. Available for remote work with teams anywhere. I reply within a working day, and I will say so
          plainly if I am not the right fit.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-deep"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[var(--line)] bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[var(--line)] bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent"
          >
            GitHub
          </a>
        </div>

        <p className="mt-8 font-mono text-xs text-muted">
          {profile.resumeNote} · Response usually &lt; 24h
        </p>
      </div>
    </section>
  );
}
