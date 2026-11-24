# samueljuma.com

Personal portfolio of Samuel Juma, Android Engineer. Built with [Astro](https://astro.build) and Tailwind CSS v4, served by the Astro Node adapter on Railway.

Design source of truth: Figma file **"Samuel Juma — Portfolio"** (`fm6I0DZC08BnDHex2Ucq06`): foundations, desktop and mobile home, case study and social graphics.

## Develop

Requires Node 22.12+.

```sh
npm install
npm run dev          # http://localhost:4321
```

| Script             | What it does                               |
| ------------------ | ------------------------------------------ |
| `npm run build`    | Production build into `dist/`              |
| `npm start`        | Serve the build (`dist/server/entry.mjs`)  |
| `npm run check`    | Astro + TypeScript diagnostics             |
| `npm run lint`     | ESLint                                     |
| `npm run format`   | Prettier (with Astro and Tailwind plugins) |
| `npm run test:e2e` | Playwright smoke tests against the build   |

Quality gate before a PR: `npm run format:check && npm run lint && npm run check && npm run build && npm run test:e2e`.

## Editing content

- **All copy** lives in `src/data/site.ts`: hero, projects, experience, skills, services, contact. Components never hard-code text.
- **Projects**: add an entry to `projects` with a screenshot in `src/assets/projects/`. Add a `caseStudy` object only when there's a real story to tell; it then gets a page at `/work/<slug>`.
- **Résumé**: replace `public/resume.pdf`.
- **Colours and fonts** are tokens in `src/styles/global.css`; use them through Tailwind utilities, never raw hex values.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co), which forwards messages to the inbox and redirects to `/thanks`. No backend or secrets are needed.

## Deploy

Railway builds and deploys every push to `main` (see `railway.json`). Work on a branch and open a pull request; merging to `main` publishes the site.
