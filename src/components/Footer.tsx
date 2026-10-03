import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-ink px-5 py-8 text-white/55 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built as a portfolio template.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={profile.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent-bright">
            Website
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-bright">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-bright">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
