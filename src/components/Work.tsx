import { projects } from "@/data/profile";

export function Work() {
  return (
    <section id="work" className="section-rule bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Selected work</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Systems that had to keep running
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Manufacturing ERPs, multi-system ops, agency products, and AI roadmap work—drawn from live roles and public
            repos.
          </p>
        </div>

        <div className="mt-12 space-y-0">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group grid gap-4 border-t border-[var(--line)] py-8 md:grid-cols-[80px_1fr_220px] md:gap-8"
            >
              <div className="font-mono text-sm text-accent">{project.id}</div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  {project.year} · {project.role} · {project.company}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-ink transition group-hover:text-accent">
                  {"href" in project && project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
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
