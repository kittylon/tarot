# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build (outputs to /dist)
npm run preview   # Preview production build locally
```

No test runner or linter is configured.

## Architecture

React 18 + React Router 6 SPA built with Vite. No TypeScript. Entry point is `src/main.jsx` → `src/App.jsx` (router) → pages in `src/pages/`.

### Data layer (`src/data/`)

- **`cards.js`** — All 78 tarot cards (22 Major + 56 Minor Arcana) with multilingual meanings (upright/reversed in ES/EN/FR), Wikimedia Commons image URLs, and utility functions: `getCardById`, `drawRandom`, `drawMultiple`, `getMeaning`, `getCardName`.
- **`spreads.js`** — Spread definitions (Single, 3-Card, Celtic Cross, etc.) with position coordinates (x/y as percentages), rotation, multilingual labels, and per-position descriptions.

### State management

- **`src/context/LangContext.jsx`** — Global language state (ES/EN/FR), persisted to localStorage. Wrap with `useLang()` hook to access `{ lang, setLang }`.
- **`src/hooks/useJournal.js`** — All journal logic; persists to localStorage under a versioned key. Returns entries keyed by date.
- Page-level state (spread state, drawn cards, modal visibility) lives in the page components themselves via `useState`.

### Internationalization (`src/i18n/ui.js`)

~3000-line object with all UI strings keyed by component/page and language. Access via `UI[section][key][lang]`. All user-visible strings must use this system — do not hardcode text in components.

### Component patterns

- `src/components/Card.jsx` — Handles front/back flip animation and reversed card rendering. Loads images lazily from Wikimedia; falls back to a CSS placeholder if the image fails to load.
- `src/components/SpreadLayout.jsx` — Positions cards absolutely using percentage-based coordinates from `spreads.js`.
- `src/components/ReadingNotebook.jsx` — Sidebar showing revealed cards during a spread reading.
- `src/App.css` — All styles (~40KB); no CSS modules or styled-components.

### Routing

Four routes defined in `App.jsx`: `/` (Home), `/gallery`, `/spreads`, `/journal`. Client-side routing; `dist/_redirects` handles Vercel deployment.
