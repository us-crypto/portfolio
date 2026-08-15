# Maverick -- Software Developer (portfolio landing page)

React + TypeScript + Tailwind CSS + Framer Motion + Vite.

## Run it

npm install
npm run dev

## Customize

Copy lives in `src/content.ts` -- tagline, about text, services, featured projects, and the
lighter "other work" list.

- **Portrait** -- add your photo as `public/me.jpg`. Falls back to a plain gradient block if missing.
- **About section icons** -- original SVGs in `src/components/DevIcons.tsx`, swap anytime.
- **Featured project thumbnails** -- abstract gradient tiles (`src/components/ProjectThumbnail.tsx`),
  not real screenshots -- swap for real images under `public/` if you want.
- **Marquee row images** -- still generic placeholder blocks.

## Deploying

Base path is set to `/portfolio/` in `vite.config.ts` to match `us-crypto.github.io/portfolio/`.
The GitHub Actions workflow builds and deploys on every push to `main` -- just make sure
Settings -> Pages -> Source is set to "GitHub Actions".
