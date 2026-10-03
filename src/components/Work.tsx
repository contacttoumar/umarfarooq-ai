import Image from "next/image";
import { projects, type Project } from "@/data/profile";

function Block({ label, children, tone = "default" }: { label: string; children: React.ReactNode; tone?: "default" | "ai" }) {
  return (
    <div>
      <p
        className={`font-mono text-[11px] uppercase tracking-[0.16em] ${
          tone === "ai" ? "text-sky-800" : "text-accent"
        }`}
      >
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-ink-soft md:text-[15px]">{children}</p>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="group grid gap-6 border-t border-[var(--line)] py-9 md:grid-cols-[240px_1fr] md:gap-10">
      <div className="space-y-4">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-[16/10] overflow-hidden rounded-xl border border-[var(--line)] shadow-[0_12px_30px_rgba(18,24,31,0.08)]"
        >
          <Image
            src={project.image}
            alt={`${project.title} cover`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="240px"
          />
        </a>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded border border-[var(--line)] px-2 py-1 font-mono text-[11px] text-ink-soft">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-muted">
          {project.id} · {project.role} · {project.company}
        </p>
        <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-ink transition group-hover:text-accent">
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Block label="Problem">{project.problem}</Block>
          <Block label="Fix">{project.fix}</Block>
          {project.ai ? (
            <div className="rounded-lg border border-sky-500/25 bg-sky-500/8 p-3 md:col-span-2">
              <Block label="AI layer" tone="ai">
                {project.ai}
              </Block>
            </div>
          ) : null}
          {project.hard ? (
            <div className="md:col-span-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Hard problems solved</p>
              <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-ink-soft md:text-[15px]">
                {project.hard.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {project.architecture ? (
            <details className="md:col-span-2 rounded-lg border border-[var(--line)] bg-white/60 p-3">
              <summary className="cursor-pointer font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                Architecture sketch
              </summary>
              <pre className="mt-3 overflow-x-auto font-mono text-[11px] leading-relaxed text-ink-soft">{project.architecture}</pre>
            </details>
          ) : null}
          <div className="md:col-span-2">
            <Block label="Outcome">{project.outcome}</Block>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const core = projects.filter((p) => p.group === "core");
  const recent = projects.filter((p) => p.group === "recent");

  return (
    <section id="work" className="section-rule bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Selected work</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Each project: the problem, the fix, the result
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Eight platforms, written the way I would explain them in a design review. Outcomes marked as client-reported
            or staging benchmarks say so; where there is no published number, I describe the result instead of inventing one.
          </p>
        </div>

        <div className="mt-12">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">Established platforms</p>
          {core.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-14">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
            Recent builds, with AI in the pipeline
          </p>
          {recent.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
