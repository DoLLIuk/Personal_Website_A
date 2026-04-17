# Portfolio App

Frontend application for Mykyta Holovko's personal portfolio website.

## What This App Includes

- hero section with profile summary
- about section with education, experience, languages, and interests
- projects grid with dedicated project detail pages
- contact section with social links
- responsive layout and motion effects

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Router

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

## Build

```bash
npm run build
npm run preview
```

## Important Files

- `src/data/portfolio.ts` - portfolio content and project data
- `src/components/` - reusable homepage sections and UI
- `src/pages/` - route-level pages
- `src/assets/` - profile images and local assets
- `vite.config.ts` - GitHub Pages base path and build config

## Content Updates

Most text and links can be updated in:

```ts
src/data/portfolio.ts
```

This is the best place to edit:

- name and title
- bio and education
- project descriptions
- GitHub and LinkedIn links
- phone and email

## GitHub Pages

This app is deployed from the repository root workflow:

- `../.github/workflows/deploy-pages.yml`

The current Vite base path is:

```ts
base: "/Personal_Website_A/"
```

If the repository name changes, update that value before deploying.
