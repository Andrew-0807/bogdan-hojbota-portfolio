# AGENTS.md — Project Scope & Instructions

## Project Overview
Official portfolio and commission website for **Prof. Univ. Dr. Bogdan Severin Hojbotă** (born 1954), master Romanian metal sculptor, former UNArte professor, and President of the UAPR Decorative Arts Branch.

* **Primary Objective**: Drive inbound phone calls (`tel:+40722000000`) and email commission inquiries (`mailto:contact@bogdanhojbota.ro`) for monumental public sculptures, bronze portraits/busts, studio pieces, and metal trophies.

---

## Tech Stack
* **Framework**: Next.js 16 (App Router, Static Site Generation / SSG).
* **Styling**: Tailwind CSS v4, CSS variables, `tw-animate-css`.
* **Fonts**: `Cormorant Garamond` (display serif), `Outfit` (sans body), `JetBrains Mono` (specs/dimensions).
* **Motion**: Motion (`framer-motion`), hardware-accelerated transforms.
* **Data Source**: Centralized typed dataset in `lib/data/artist-data.ts`.

---

## Design System (Architectural Light Gallery)
* **Background**: `#fafaf9` (Alabaster paper white).
* **Text**: `#0f172a` (Obsidian ink, WCAG AA contrast ≥ 4.5:1).
* **Accents**: `#d97706` / `#b45309` (Burnished bronze / amber gold).
* **Card Frame**: `.gallery-card` (1px `border-slate-200/90`, soft ambient shadow, hover lift).
* **Buttons**: Black pill buttons (`bg-slate-900`) with burnished bronze trailing icon circles.
* **Micro-Animations**:
  * Entrance: `220ms` custom ease-out (`cubic-bezier(0.23, 1, 0.32, 1)`), initial scale `0.96`, `y: 12px`.
  * Tactile Feedback: `transform: scale(0.97)` on `:active`.
  * No kickers/eyebrows above headings; no gradient text; no `transition: all`.

---

## Key Site Routes
* `/` — Homepage (Hero, Quote, Featured Masterworks, Commission Services, Metrics, CTAs).
* `/profil` — Academic biography, UNArte history, visual philosophy, awards.
* `/galerie` & `/galerie/[id]` — Portfolio catalog with category filters + SSG detail pages for all 12 cataloged works.
* `/cronologie` — Exhibition timeline & list view (1981–2025).
* `/contact` — Direct phone click-to-call + mailto email submission form.

---

## Core Data Maintenance
All artist data (artworks, exhibitions, awards, contacts) resides in:
`file:///C:/Users/Andrew/Desktop/alex/lib/data/artist-data.ts`

To verify builds:
```bash
npm run build
```

## Production Deployment
* **Official Production URL**: `https://bogdan-hojbota.vercel.app` (Always use this exact URL for production deployment references).

