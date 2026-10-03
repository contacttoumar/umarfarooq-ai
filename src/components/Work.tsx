import Image from "next/image";
import { projects } from "@/data/profile";

export function Work() {
  return (
    <section id="work" className="section-rule bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Selected work</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Systems in production, with numbers that moved
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Featured: <span className="font-semibold text-ink">LuckyCharmGold</span>,{" "}
            <span className="font-semibold text-ink">Direct To You Tickets</span>,{" "}
            <span className="font-semibold text-ink">Greencard</span> — plus TheTutor.me, EventBuizz, ParkFlow,
            Doocado, and DineHome.
          </p>
        </div>

        <div className="mt-12 space-y-0">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group grid gap-5 border-t border-[var(--line)] py-8 md:grid-cols-[220px_1fr_180px] md:items-start md:gap-8"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--line)] shadow-[0_12px_30px_rgba(18,24,31,0.08)]"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} cover`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="220px"
                />
              </a>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  {project.id} · {project.role} · {project.company}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-ink transition group-hover:text-accent">
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{project.summary}</p>
              </div>
              <div className="flex flex-wrap content-start gap-2 md:justify-end">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="h-fit rounded border border-[var(--line)] px-2 py-1 font-mono text-[11px] text-ink-soft"
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
