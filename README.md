# umarfarooq-ai

**Umar Farooq** — AI Engineer & Solution Architect  
GitHub: [contacttoumar](https://github.com/contacttoumar) · Repo: [umarfarooq-ai](https://github.com/contacttoumar/umarfarooq-ai)

A portfolio site plus a GitHub profile README. Both lead with production AI and solution architecture, show each project as problem → fix → outcome, and spell out how Umar can help a hiring team.

## Contents

| Path | Purpose |
|---|---|
| `src/` | Next.js portfolio site (Next 16, React 19, Tailwind 4) |
| `src/data/profile.ts` | All copy: profile, fit cards, problem → fix scenarios, projects, skills, experience |
| `github-profile/README.md` | Copy into `contacttoumar/contacttoumar` for the GitHub profile home |

## Run

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

```bash
npm run build && npm start
```

## Publish

With a GitHub token that can create repositories (`repo` scope), one command creates both public repos and pushes:

```bash
GITHUB_TOKEN=ghp_xxx ./scripts/publish-to-github.sh
```

- `contacttoumar/umarfarooq-ai` gets this project.
- `contacttoumar/contacttoumar` gets `github-profile/README.md`, which is what shows on the front page of github.com/contacttoumar.

Manual alternative: create both repos as public on GitHub, then

```bash
git remote add github https://github.com/contacttoumar/umarfarooq-ai.git
git push -u github main
```

and paste `github-profile/README.md` into `README.md` of the `contacttoumar/contacttoumar` repo.

## Content notes

- Location (Lahore, Pakistan · UTC+5) is set once in `src/data/profile.ts` and reused across the site.
- Metrics are limited to numbers published on contactumar.com, client-reported figures, or staging benchmarks, and are labelled as such. Projects 06 to 08 describe results qualitatively until measured numbers exist (the dossier's growth figures were labelled targets, so they are not published); add them in `src/data/profile.ts` when you have them.
