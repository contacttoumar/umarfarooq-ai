import { principles, profile, skills, stats } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="section-rule bg-ink px-5 py-20 text-paper md:px-8 md:py-28">
      <div className="mx-auto mb-14 grid max-w-6xl grid-cols-2 gap-6 border-b border-white/10 pb-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-paper md:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-bright">About</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-5xl">
            Full-stack when the product needs it. PHP when the business depends on it.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">{profile.bio}</p>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5 font-mono text-sm leading-relaxed text-white/80">
            <p>
              <span className="text-accent-bright">$</span> whoami
            </p>
            <p className="mt-2 text-white/55">
              umar farooq · senior full stack & php · laravel / next.js / ai · riyadh · open to global remote
            </p>
            <p className="mt-4">
              <span className="text-accent-bright">$</span> stack --daily
            </p>
            <p className="mt-2 text-white/55">{profile.focus.join(" · ")}</p>
            <p className="mt-4">
              <span className="text-accent-bright">$</span> links
            </p>
            <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-white/55">
              <a className="hover:text-accent-bright" href={profile.github} target="_blank" rel="noopener noreferrer">
                github/Umar-444
              </a>
              <a className="hover:text-accent-bright" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                linkedin/umarfarooq-ai
              </a>
              <a className="hover:text-accent-bright" href={profile.website} target="_blank" rel="noopener noreferrer">
                itsumarfarooq.com
              </a>
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white/45">Toolkit</h3>
            <div className="mt-4 space-y-4">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <div className="text-sm font-semibold capitalize text-accent-bright">{group}</div>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">{items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white/45">How I think</h3>
            <div className="mt-4 space-y-4">
              {principles.map((item) => (
                <div key={item.code} className="border-t border-white/10 pt-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent-bright">{item.code}</span>
                    <h4 className="font-semibold text-paper">{item.title}</h4>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
