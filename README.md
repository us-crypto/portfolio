# Maverick -- 3D Creator (portfolio landing page)

React + TypeScript + Tailwind CSS + Framer Motion + Vite.

## Run it

npm install
npm run dev

## Customize

Copy (name, tagline, about text, services, project names) lives in `src/content.ts`.

All imagery in this build is a placeholder gradient block -- the original brief pointed at
other services' own hosted demo assets (a template marketplace's preview clips, some
Figma/Higgsfield-rendered images), which aren't yours to hotlink. Swap in your own:

- **Hero portrait** -- `PlaceholderPortrait` inside `src/sections/HeroSection.tsx`
- **Marquee row images** -- `src/sections/MarqueeSection.tsx`
- **About section corner icons** -- `src/sections/AboutSection.tsx`
- **Project images** -- `src/sections/ProjectsSection.tsx`

Everywhere a placeholder shows up it's the `PlaceholderImage` component (`src/components/PlaceholderImage.tsx`)
-- easiest is to add your real files under `public/` and swap the placeholder for a plain `<img src="/yourfile.jpg" />`.

## Notes

The scroll-linked project card stacking (`ProjectsSection.tsx`) and the marquee scroll offset
(`MarqueeSection.tsx`) are the two trickiest bits of scroll physics in this spec -- they're built
to the described formulas, but scroll-driven motion is genuinely hard to get pixel-perfect without
a browser to iterate in, so give them a look once it's running and nudge the multipliers if the feel's off.
