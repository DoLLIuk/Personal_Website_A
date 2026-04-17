# Content Guide

This project is already structured so that most portfolio updates can be made without touching the UI components.

## Main Content File

Edit:

`Personal-Website-main/src/data/portfolio.ts`

This file controls:

- `personalInfo` for the hero section and contact details
- `skills` for skill levels
- `technologies` for the technologies badge list
- `about` for biography, experience, education, languages, and interests
- `projects` for project cards and project detail pages
- `socialLinks` for GitHub, LinkedIn, email, and phone buttons

## Images

Profile images are stored in:

- `Personal-Website-main/src/assets/`

The current hero image is imported in:

- `Personal-Website-main/src/components/Hero.tsx`

If you replace the image, keep the filename consistent or update the import path.

## Sections

Main landing page sections are assembled in:

- `Personal-Website-main/src/pages/Index.tsx`

Core UI sections:

- `Personal-Website-main/src/components/Hero.tsx`
- `Personal-Website-main/src/components/About.tsx`
- `Personal-Website-main/src/components/Projects.tsx`
- `Personal-Website-main/src/components/Contact.tsx`
- `Personal-Website-main/src/components/Footer.tsx`

## Deployment Note

For GitHub Pages, the app uses:

- `Personal-Website-main/vite.config.ts`

If the repository name changes, update the `base` field there.

## Recommended Cleanup

Before using this as a final public portfolio, it would be worth:

- removing placeholder demo links
- removing unfinished or generic sample projects
- replacing generic project descriptions with measurable outcomes
- connecting the contact form to a real submission service
