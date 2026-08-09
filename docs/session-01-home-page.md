# Session 01 — Home page, intentional design pass

**Date:** 2026-08-09
**Scope:** `/` only. One page at a time; sibling routes deliberately untouched.
**Surface mode:** Experience (the visitor is inside the work itself; the artifact leads, the interface recedes).

---

## 1. Starting complaint

> "the scaling of the image is off"

The hero image. Two independent bugs, both real:

1. `-mr-[calc((100vw-80rem)/2)]` assumed the container caps at `80rem`. Tailwind v4's `container` caps at `96rem`. Above ~1280px the image bled *past* the viewport edge, overflowing and triggering horizontal scroll.
2. `lg:aspect-[4/5]` on a column that is wider than half the screen produced a ~930px-tall image against a ~700px text column. The image dwarfed the page.

First fix: bleed constant corrected, `overflow-x-clip` on the section to absorb the scrollbar overshoot in `100vw`, and `lg:items-stretch` + `lg:aspect-auto lg:flex-1` so image height is driven by the text column instead of a fixed crop.

**That first fix was itself incomplete.** See §4.

---

## 2. Critique run

`$impeccable critique` on `app/page.tsx`, dual-agent (Assessment A design review, Assessment B detector/build/asset evidence), run in isolation from each other.

**Design health: 21/40.** Band: Acceptable, significant improvements needed.

Weakest heuristics: Visibility of system status (1/4, `galerie/loading.tsx` returns `null`), Error prevention (1/4, placeholder phone shipped as a live `tel:` five times).

**Design specificity verdict:** the authorship lives in `globals.css`, not in `page.tsx`. The palette is a genuine material argument (amber/slate ramps replaced with measured patinated-bronze and forged-inox oklch values, every text pair clearing WCAG AA, several AAA). `--radius: 0rem` is held with zero exceptions and the focus ring was designed to match. The commissions block refuses the four-tile reflex and renders a `<dl>` register instead, declining the icons the data file hands it.

But the *composition* is the canonical 2021 marketing skeleton in canonical order: hero split, quote band, card grid, service list, CTA bar, stat strip, mega-footer. For an Experience surface the composition should have been driven by the artifacts' scale and sequence, not by a conversion funnel.

**Detector:** 1 finding, `gray-on-color` at `page.tsx:20`. Established as a **false positive** — the rule is a naive same-line regex with no variant-prefix awareness; it matched `selection:bg-amber-700`, which is a `::selection` background already correctly paired with `selection:text-white`. The element's actual background is `bg-slate-50`.

---

## 3. Fixed this session (P0 + P1)

### P0 — Featured grid shipped duplicate and mismatched images
`lib/data/artist-data.ts`. The featured six rendered five files:

- `influorescenta` and `moment-de-zbor` shared `/abstract-metal-sculpture-ascension-stainless-steel.jpg`, landing in the **same grid column one row apart** at `lg:grid-cols-3`.
- `influorescenta` is declared `materials: "Marmură cioplită și șlefuită"` and was illustrated with stainless steel.
- `strajer-al-apelor` repeated the hero file 1.5 screens later.

Re-flagged `featured`:

| Artwork | Was | Now | Why |
|---|---|---|---|
| `strajer-al-apelor` | true | **false** | It *is* the hero plate |
| `influorescenta` | true | **false** | Marble work, metal photograph |
| `monumentul-romania-100` | false | **true** | Unique file |
| `sculptura-zbor-sangeorz-bai` | false | **true** | Unique file |

Verified on the running dev server: **7 images render, 7 unique.**

Added a dev-only guard at the bottom of `artist-data.ts` that throws if two featured works ever share an `image_url`. Production builds are unaffected — a placeholder asset should not fail a build.

### P0 — Placeholder phone shipped as a live `tel:`
`ARTIST_INFO.phone` is `+40 722 000 000`. It was live on the home page five times (header desktop, header mobile, hero, commissions bar, footer). **User decision: remove the `tel:` links for now**, leaving email and the `/contact` form as the only routes in. All five replaced with the email. Verified: no `tel:` in the rendered HTML of `/`.

### P1 — Header overflowed its container from 1024px to 1535px
Nav budget computed at ~1246px into 976px of content at `lg`. The Romanian labels compressed and wrapped inside an `h-16` rail across the two most common laptop widths.

- Labels shortened: "Profil & Biografie" → "Profil", "Portofoliu Sculptură" → "Portofoliu", "Comisii & Proiecte" → "Comisii".
- Nav and hamburger breakpoint moved `lg` → `xl`.
- Contact line moved `xl` → `2xl`.
- Added `aria-label="Principal"` — there are two `<nav>` landmarks in the header.

### P1 — h1 sized to the viewport instead of its column
`clamp(2.75rem,8vw,5.5rem)` sizes to the viewport, but the h1 lives in a `lg:col-span-6` column (456px at 1024, 584px at 1440). Combined with the hard `<br/>`, this produced three ragged lines with an orphaned "metalul" — and the `<br/>` also rendered the global `text-wrap: balance` inert, so the heading could never self-correct.

Now `@container` on the column with `clamp(2.5rem,12cqw,5.5rem)`, break removed.

### P1 — Artifact buried on mobile, inert on desktop
`grid-cols-1 lg:grid-cols-12` with the text column first in source order meant that below 1024px the visitor scrolled **767px of typography** before the artwork's top edge appeared. The file's own comment reads "the work first, the claim second"; it did the exact opposite on every viewport under `lg`. Separately, the `<Image>` was not inside a `Link` — only 24px of caption text navigated.

- `order-1 lg:order-2` on the figure, `order-2 lg:order-1` on the text.
- Whole plate wrapped in one `<Link>`; figcaption title demoted to a `<span>` to avoid nested links.
- Hero `alt` rewritten from a caption echo to an actual visual description, drawn from the narrative already sitting unused in `artist-data.ts`.

### Also corrected: the §1 fix was still wrong
Caught by the stress-tester pass. The bleed offset ignored the container's `px-6` (24px), so a sliver of white always sat between the sculpture and the page edge. Worse, it **no-op'd entirely from 1280–1535px**: `max(0px, (1440px − 96rem)/2)` clamps to `0` while the container is capped at 1280, leaving 80px of dead gutter.

Tailwind's container caps at 64/80/96rem *per breakpoint*, not a flat 96rem. Now three per-breakpoint offsets:

```
lg:-mr-[calc((100vw-64rem)/2+1.5rem)]
xl:-mr-[calc((100vw-80rem)/2+1.5rem)]
2xl:-mr-[calc((100vw-96rem)/2+1.5rem)]
```

### Also: WCAG 1.4.11
`border-slate-300` computes to 1.63:1 on white and was the *only* visual boundary of three outlined buttons. Raised to `border-slate-400` (~3.3:1), clearing the 3:1 non-text contrast minimum.

---

## 4. Verification

| Check | Result |
|---|---|
| `npx tsc --noEmit` | 1 error, **pre-existing and unrelated** (below) |
| `npx next build` | Compiled successfully, 22/22 static pages |
| Home page on dev server | 200, 7 images, 7 unique, no `tel:` |
| Impeccable detector | 1 finding, same as before changes, known false positive |
| Featured-uniqueness guard | Does not false-fire on current data |

**Pre-existing failure, not introduced here:** `lib/supabase/client.ts(2,31): TS2307: Cannot find module './database.types'`. Outside the home page's import graph. Note `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so the build does not surface it.

**Not verified:** the guard's throw path was never exercised. Injecting a deliberate duplicate would have broken the dev server running on :3000, so only the non-firing path was confirmed.

---

## 5. Open — carried to the next iteration

### Blocking launch, not code-fixable
- **All 12 images in `public/` are 1024×1024 AI placeholders** with v0 prompt-slug filenames (`metal-sculpture-de-semn-...` is a mangled "design"). Every source is a perfect square; no rendered box on the page is. `object-cover` therefore crops on every instance — the `sm` hero breakpoint discards **31% of image height**, the gallery cards **25%**. For tall monumental works, tops and bases are being amputated. Real photography is the blocker.
- **`images.unoptimized: true`** in `next.config.mjs` disables the Next image pipeline entirely. Both `sizes` props on the home page are dead code: no srcset, no WebP/AVIF, no resizing. Every card downloads a full 1024×1024 JPEG into a 395px box.
- **Contact data is unverified.** Phone is a placeholder; `contact@bogdanhojbota.ro` is equally unconfirmed. `tel:` with the fake number **still ships on `/contact`, `/profil`, `/comisii`, `/galerie/[id]`.**

### P2, deferred by scope
- **`RECORD` stat bar** (`page.tsx:9-14`) is the loudest type on the page (`text-5xl`, larger than every `h2`) and the least substantiated. Against the site's own data: `AWARDS.length === 8` vs "8+"; 5 symposium-typed events vs "20+"; 21 total events vs "100+ expoziții". A curator will check `/cronologie` and find the arithmetic doesn't close. It is also the closing note, poisoning the end half of peak-end.
- **`ScrollReveal` ships 14 blocks at `opacity: 0`** with no `prefers-reduced-motion` escape, while `globals.css` carefully honours it for `.specular`. On a slow connection the first viewport is blank until Framer Motion hydrates — on a page whose thesis is "the work first". `framer-motion` is also pinned to `"latest"`.
- **`app/galerie/loading.tsx` returns `null`.** The two most-clicked links on the home page navigate to a white screen.

### Accessibility, unaddressed
- **Card alt text is `alt={art.title}`, ×6**, immediately repeated by the adjacent `<h3>`. A blind visitor to a monumental-sculpture portfolio receives no sculpture — despite `artist-data.ts` already containing excellent visual descriptions.
- **No skip link exists anywhere in the project.** Fails 2.4.1.
- **Mobile menu** has no Escape handler, no focus trap, no body-scroll lock.
- **`border-slate-200` hairlines** compute to 1.35:1 on white. The whole "register, not tiles" idea rests on a divider that low-vision users cannot see.
- **`ScrollReveal` is nested *inside* the commissions `<dl>`**, putting two `<div>`s between `dl` and its `dt`/`dd`. HTML permits one; the term/definition association is not reliably exposed.

### Structural
- **Dead routes shipped.** `app/gallery/` and `app/timeline/` are unlinked Supabase-backed duplicates of `/galerie` and `/cronologie`, publicly routable, and will throw for anyone who finds the URL.
- **"Solicită o comisie" is arguably a mistranslation.** In Romanian *comisie* = committee. A commissioned work is *lucrare de comandă*. Affects the primary CTA, the nav label, and the `/comisii` route. **Needs a native-speaker ruling before changing.**
- `globals.css` defines `.gallery-card`, `.artwork-plate`, `.btn-forged` — none used on the home page, which inlines equivalents. The design system exists and is being bypassed.
- `layout.tsx` loads 12 font files; roughly half the weights are unused.

---

## 6. Open questions from the critique

1. The comment on `page.tsx:24` says "the work first, the claim second." What would this page be if the hero text column were deleted entirely and `Străjer al Apelor` opened full-bleed at 100vh, with the h1 as a plate in the lower-left? The quote band already proves this author can land a full-bleed single-object composition — why is that treatment reserved for a sentence rather than for the sculpture?
2. Should the home page show six works at all, or **one**, at full scale, with the catalogue as a link? A curator forms a judgement from one plate seen properly, not six seen small.
3. Hojbotă's own quote describes a compositional principle — "liniile de forță, plinul și golul generează o continuitate muzicală." Why is it quoted rather than obeyed? What is this page's *gol*?
4. Which is the site's actual evidence: the number, or the list? If the list, why is the number the largest type on the page and the last thing anyone reads?
5. Which decisions here get reversed when real photographs arrive? `aspect-[4/3]`, `aspect-[4/5]`, and centre-cropping are all tuned to squares that will never exist again.
