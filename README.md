# Portfolio

A personal portfolio site built with Next.js, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Editing content

All content is hardcoded in typed data files under `src/data/` — edit these directly, no CMS or backend required:

- `src/data/profile.ts` — name, tagline, bio, contact links
- `src/data/projects.ts` — project list (each project also gets its own detail page at `/projects/[slug]`)
- `src/data/skills.ts` — grouped skills
- `src/data/experience.ts` — work experience timeline

Shared types for this data live in `src/types/index.ts`.

## Structure

- `src/app/page.tsx` — home page, composed of section components in `src/components/sections/`
- `src/app/projects/[slug]/page.tsx` — individual project detail pages
- `src/components/` — shared UI (Header, Footer, ProjectCard, Timeline, SectionHeading)

## Deploying

This project is ready to deploy on [Vercel](https://vercel.com/new) — connect the repo and it will build automatically with no configuration or environment variables needed.
