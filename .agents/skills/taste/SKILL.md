---
name: taste
description: Master orchestrator for all taste-skill frontend design work. Use for building landing pages, portfolios, websites, brand kits, redesigns, and any UI/UX task that needs premium visual craft. Routes to the right specialized sub-skill based on task intent, aesthetic register, and process mode. Covers premium agency design, minimalist editorial, industrial brutalism, GSAP cinematic motion, image-to-code workflows, brand identity generation, and full-output enforcement. Trigger when the user wants to design, build, create, redesign, upgrade, brand, animate, or polish any frontend interface. Not for backend-only or non-UI tasks.
version: 1.0.0
---

# Taste — Unified Frontend Design Orchestrator

> **Architecture rule:** The nine sub-skills in this directory (`design-taste-frontend/`, `brandkit/`, `gpt-taste/`, etc.) are separate loadable files by design. This orchestrator routes to one at a time. Do NOT merge them into a single file — that would defeat the routing architecture and force every invocation to load all sub-skills. Each file is a tool grabbed when needed, not an encyclopedia to lug around.

Single entry point for all taste-skill work. Routes to the right sub-skill, combines capabilities when needed, and enforces cross-skill quality bars.

## Setup (Every Invocation)

Before doing anything, read the user's request and run this inference. One line per axis. Do not ask the user unless genuinely ambiguous.

### 1. Task Intent (pick one)

| Signal | Intent | Route |
|---|---|---|
| "brand kit", "logo", "brand identity", "brand guidelines", "visual world" | Brand Identity | `brandkit` |
| "redesign", "upgrade existing", "improve this site", "audit and fix" | Redesign | `redesign-existing-projects` |
| "image-to-code", "generate and code", "visual reference first", "design image then code" | Image-First | `image-to-code` |
| "animate", "motion", "GSAP", "cinematic", "scroll-triggered" | Motion (overlay) | `gpt-taste` (motion patterns only) |
| "audit", "critique", "review this design", "find problems" | Audit | `redesign-existing-projects` (audit section) |
| Everything else: "build", "create", "make me a", "design a", "landing page", "portfolio", "website", "hero", "section" | New Build | Core build pipeline (step 3) |

### 2. Aesthetic Register (pick one — overrides visual direction)

| Signal | Register | Overlay |
|---|---|---|
| "brutalist", "industrial", "terminal", "CRT", "HUD", "military", "blueprint", "Swiss" | Brutalist | `industrial-brutalist-ui` |
| "minimalist", "clean", "editorial", "warm", "quiet", "document-style", "workspace" | Minimalist | `minimalist-ui` |
| "premium", "agency", "dark", "luxury", "expensive", "Awwwards" (or no signal) | Premium (default) | `design-taste-frontend` + `high-end-visual-design` |

### 3. Motion Level (pick one)

| Signal | Level | Overlay |
|---|---|---|
| "cinematic", "GSAP", "scroll-triggered", "Awwwards", "animated", "motion-rich" | High | `gpt-taste` motion patterns |
| (default, no signal) | Standard | `design-taste-frontend` motion defaults |
| "static", "no animation", "still", "no motion" | None | Skip all motion |

### 4. Process Flags

| Signal | Flag | Effect |
|---|---|---|
| "--full", "full output", "no truncation" | Full Output | Load `full-output-enforcement` rules |
| "--image-first" | Force Image-First | Override to `image-to-code` workflow |

### 5. Output

State a one-line readback before proceeding:

> **Reading this as: `<Intent>` for `<Audience>`, `<Aesthetic>` register, `<Motion>` motion. Loading: `<skill-files>`.**

Example: *Reading this as: New Build for B2B SaaS, Premium register, Standard motion. Loading: design-taste-frontend, high-end-visual-design.*

---

## Routing Execution

After inference, load the routed skill files. Load order matters:

### For New Build (default)
1. **Always:** `design-taste-frontend/SKILL.md` (framework, dials, anti-slop rules)
2. **Always:** `high-end-visual-design/SKILL.md` (component patterns, double-bezel, motion)
3. **If Brutalist:** replace #2 with `industrial-brutalist-ui/SKILL.md`
4. **If Minimalist:** replace #2 with `minimalist-ui/SKILL.md`
5. **If High motion:** also load `gpt-taste/SKILL.md` (GSAP patterns, AIDA structure)
6. **If --full:** also load `full-output-enforcement/SKILL.md`

### For Redesign
1. Load `redesign-existing-projects/SKILL.md` (audit → fix pipeline)

### For Brand Identity
1. Load `brandkit/SKILL.md` (image generation for brand kits)

### For Image-First
1. Load `image-to-code/SKILL.md` (generate → analyze → implement)
2. Apply aesthetic register as visual direction during generation

### For Audit
1. Load `redesign-existing-projects/SKILL.md`, run audit section only

### For Motion-Only
1. Load `gpt-taste/SKILL.md`, apply motion patterns to existing code

---

## Cross-Skill Absolute Bans

These are hard-fail patterns — all sub-skills agree. If you are about to write any of these, stop and rewrite:

- **Inter, Roboto, Arial as default sans** — use Geist, Outfit, Cabinet Grotesk, Satoshi, or brand-appropriate
- **Purple/blue AI gradients as default** — neutral bases with one considered accent
- **Three equal card columns repeated** — vary layout, use asymmetric grids
- **Centered hero with dark mesh gradient** — vary alignment, use real visuals
- **Lucide/Feather as default icons** — Phosphor, Radix, or Tabler instead
- **Generic drop shadows (`shadow-md`, `shadow-lg`)** — tint shadows to background hue, or use none
- **`height: 100vh` for sections** — always `min-h-[100dvh]`
- **`window.addEventListener('scroll')`** — use IntersectionObserver, Motion's `useScroll`, or GSAP ScrollTrigger
- **Fake brand names** (Acme, Nexus, Flowbit, NovaCore) — invent believable, contextual names
- **AI copy clichés** (elevate, seamless, unleash, next-gen, delve) — plain, specific language
- **Emojis in code or visible text** — use icon-library glyphs or SVG primitives
- **Gradient text (`background-clip: text`)** — solid color emphasis via weight or size
- **Glassmorphism as default** — rare and purposeful, or nothing
- **Side-stripe borders** (`border-left` > 1px as accent) — full borders, background tints, or nothing
- **Tiny uppercase tracked eyebrow above every section** — max 1 per 3 sections

---

## Commands (Shortcut Aliases)

If the first word of the user's request matches one of these, route accordingly:

| Command | Routes To | Shortcut For |
|---|---|---|
| `craft [description]` | New Build pipeline | Build a page/site from scratch |
| `redesign [target]` | redesign-existing-projects | Upgrade existing project |
| `brand [name]` | brandkit | Generate brand identity |
| `brutalist [target]` | New Build + industrial-brutalist-ui | Build with brutalist aesthetic |
| `minimal [target]` | New Build + minimalist-ui | Build with minimalist aesthetic |
| `motion [target]` | gpt-taste (motion only) | Add cinematic motion |
| `image-first [target]` | image-to-code | Generate references then code |
| `audit [target]` | redesign-existing-projects (audit) | Design quality audit |
| `full` | Toggle full-output-enforcement | No truncation mode |

---

## Sub-Skill Reference

All sub-skills live in sub-directories of this skill. Load by reading their SKILL.md relative to this file:

| Sub-skill | File | Domain |
|---|---|---|
| design-taste-frontend | `design-taste-frontend/SKILL.md` | Dials, anti-slop, layout, typography, dark mode |
| high-end-visual-design | `high-end-visual-design/SKILL.md` | Double-bezel, button-in-button, spring physics |
| gpt-taste | `gpt-taste/SKILL.md` | GSAP ScrollTrigger, AIDA, Python randomization |
| industrial-brutalist-ui | `industrial-brutalist-ui/SKILL.md` | Swiss print, CRT terminal, rigid grids |
| minimalist-ui | `minimalist-ui/SKILL.md` | Warm monochrome, editorial, bento grids |
| redesign-existing-projects | `redesign-existing-projects/SKILL.md` | Audit → diagnose → fix pipeline |
| brandkit | `brandkit/SKILL.md` | Brand identity image generation |
| image-to-code | `image-to-code/SKILL.md` | Generate → analyze → implement workflow |
| full-output-enforcement | `full-output-enforcement/SKILL.md` | Anti-truncation, complete output |

---

## Quick Reference: When to Use What

```
User says:                              → Route:
─────────────────────────────────────────────────
"Build me a landing page for..."        → New Build (Premium default)
"Build a brutalist dashboard"           → New Build + Brutalist
"Make a clean minimalist portfolio"     → New Build + Minimalist
"Redesign my existing site"             → Redesign
"Create a brand kit for X"             → Brand
"Add cinematic GSAP motion to..."       → Motion overlay
"Generate a design image then code it"  → Image-First
"Audit this page's design quality"      → Audit
"Build me a landing page --full"        → New Build + Full Output
```
