import { services } from "@/data/profile";

export function Services() {
  return (
    <section id="services" className="section-rule bg-paper-deep/40 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">How I help</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Four ways teams bring me in
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Most engagements start with a look at the code that already exists—and the operators who depend on it.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.code} className="border-t border-[var(--line)] pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <span className="font-mono text-sm text-accent">{service.code}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{service.blurb}</p>
              <ul className="mt-5 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-[var(--line)] bg-white/70 px-2 py-1 font-mono text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
