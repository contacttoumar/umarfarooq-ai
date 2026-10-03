import { experience } from "@/data/profile";

export function Experience() {
  return (
    <section id="experience" className="section-rule bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Experience</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Recent track
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Eight years, mostly on systems that were already in production when I arrived—Hello World through
            Wanological.
          </p>
        </div>

        <div className="mt-12">
          {experience.map((item) => (
            <div
              key={`${item.org}-${item.period}`}
              className="grid gap-2 border-t border-[var(--line)] py-6 md:grid-cols-[220px_1fr_1.2fr] md:gap-8"
            >
              <div className="font-mono text-xs text-muted md:text-sm">{item.period}</div>
              <div>
                <div className="font-semibold text-ink">{item.role}</div>
                <div className="mt-1 text-sm text-ink-soft">
                  {item.org}
                </div>
              </div>
              <div className="text-sm leading-relaxed text-muted">{item.focus}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
