import { fitCards, firstThirtyDays } from "@/data/profile";

export function Fit() {
  return (
    <section id="fit" className="section-rule bg-paper-deep/50 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">How I can help you</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Three situations where I am a strong fit
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Whatever the job post says, the real question is what you need solved. Find yours below.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {fitCards.map((card) => (
            <article key={card.code} className="flex flex-col rounded-2xl border border-[var(--line)] bg-white/70 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {card.code} · {card.audience}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-ink">
                {card.headline}
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink-soft">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">If we work together: my first 30 days</p>
          <ol className="mt-5 grid gap-5 md:grid-cols-3">
            {firstThirtyDays.map((item, index) => (
              <li key={item.step} className="border-t-2 border-accent pt-4">
                <p className="font-mono text-xs text-muted">
                  {String(index + 1).padStart(2, "0")} · {item.step}
                </p>
                <p className="mt-2 font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
