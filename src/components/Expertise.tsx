import { expertise } from "@/data/profile";

export function Expertise() {
  return (
    <section id="expertise" className="section-rule bg-paper-deep/50 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Where I go deep</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Architecture, AI, and the failures in between
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            The three areas my work keeps returning to, with the concrete things I build in each.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {expertise.map((card) => (
            <article key={card.code} className="flex flex-col rounded-2xl border border-[var(--line)] bg-white/70 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {card.code} · {card.area}
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
      </div>
    </section>
  );
}
