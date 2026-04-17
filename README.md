# Mykyta Holovko Portfolio Website

Personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and GitHub Pages deployment.

## Overview

This repository contains a personal website for presenting:

- professional summary
- education and experience
- technologies and interests
- selected projects with detail pages
- contact and social links

The frontend app lives in `Personal-Website-main/`, while the repository root provides GitHub-friendly scripts and Pages deployment workflow.

## Highlights

- Responsive single-page portfolio with smooth section navigation
- Project detail pages powered by `react-router-dom`
- Data-driven content stored in one place for easy updates
- Motion and UI components built with `framer-motion` and shadcn/ui
- GitHub Pages workflow already configured in `.github/workflows/deploy-pages.yml`

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Router

## Project Structure

```text
.
|-- .github/workflows/deploy-pages.yml
|-- package.json
|-- README.md
|-- docs/
|   `-- CONTENT_GUIDE.md
`-- Personal-Website-main/
    |-- src/
    |   |-- components/
    |   |-- data/portfolio.ts
    |   `-- pages/
    |-- package.json
    `-- vite.config.ts
```

## Local Run

From the repository root:

```bash
npm install
npm run dev
```

Or from the app folder directly:

```bash
cd Personal-Website-main
npm install
npm run dev
```

Default local URL: [http://localhost:8080](http://localhost:8080)

## Build

```bash
npm run build
```

The production output is generated in `Personal-Website-main/dist/`.

## Deployment

GitHub Pages deployment is configured through GitHub Actions. On push to `main`, the workflow:

1. installs dependencies
2. builds the Vite app
3. uploads the `dist` folder
4. deploys the site to GitHub Pages

Important: `vite.config.ts` uses `base: "/Personal_Website_A/"`, so the repository name should stay `Personal_Website_A` unless you also update that value.

## Where To Edit Content

Most portfolio content is centralized in:

- `Personal-Website-main/src/data/portfolio.ts`

There you can update:

- personal bio
- skills and technologies
- education and experience
- project cards and project details
- social links

More detailed editing notes are in [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md).

## Good Next Improvements

- Add a real screenshot or GIF preview of the homepage to this README
- Replace placeholder projects with only final, production-ready work
- Connect the contact form to EmailJS, Formspree, or a backend endpoint
- Add a custom domain for a more polished portfolio URL
- Add SEO metadata and Open Graph preview image
- Add a license once you decide how others may reuse the code

## Author

Mykyta Holovko  
Software Engineering Student  
[GitHub](https://github.com/DoLLIuk)  
[LinkedIn](https://www.linkedin.com/in/mykyta-holovko/)
