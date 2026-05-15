# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server (HMR)
pnpm build      # production build → dist/
pnpm preview    # serve the dist/ build locally
pnpm lint       # ESLint check
```

No test suite exists in this project.

## Architecture

Single-page marketing site for a social media specialist (KAIRUXS). Built with React 19 + Vite, deployed on Vercel.

**Page structure** (`App.jsx`): Header → Hero → Services → Principles → Pricing → ImpactCases → ContentLibrary → Contact → Footer. All sections below Hero are lazy-loaded via `React.Suspense`.

**i18n** (`src/i18n.js`): Custom translation system — no external library. `App` holds `lang` state and passes a `t(key)` lookup function down as a prop to every component. Supported languages: EN, SK, DE, RU. All UI strings live in `src/i18n.js`; add a key to all four locale objects when adding new text. `src/data/site.js` holds nav item config (IDs and i18n key references).

**Animations** (`src/lib/animations.js`): Shared Framer Motion presets (`sectionRevealProps`, `sharedSectionVariants`, `sharedCardVariants`, `createStaggerRevealProps`). Use these instead of inline motion props to keep animation timing consistent. `src/components/ui/AnimatedSection.jsx` exports `RevealSection` and `VariantSection` — wrappers around `motion.section` that apply the shared presets. Most sections use one of these two wrappers.

**Content data** (`src/data/contentLibrary.js`): Static media manifest for the Content Library section (Visual / Stories / Reels tabs). Each entry references files served from `public/` (`/visual/`, `/stories/`, `/reels/`).

**Styling**: No CSS-in-JS. All styles are plain CSS files in `src/styles/` (one file per concern: `base.css`, `hero.css`, `pricing.css`, `shared.css`, etc.) plus a top-level `src/styles.css`. Design tokens (colors, radii, transitions) are CSS custom properties defined in `src/styles/base.css` under `:root`, all prefixed `--brndz-`. The design language is soft pink / "futuristic luxe" — `--brndz-bg: #F6E6EB`, `--brndz-pink: #E9A6B5`. Font: Orbitron (Google Fonts, loaded in `base.css`).

**Contact form**: Handled by Formspree (`https://formspree.io/f/mlggerzp`). No backend in this repo.

**Analytics**: `@vercel/analytics` and `@vercel/speed-insights` are wired in (see `src/main.jsx`).
