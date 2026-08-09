---
name: tasteful-craft
description: Interactive design grilling session. Asks probing questions one at a time to iron out website direction, aesthetic register, and design decisions. Explores the codebase for existing tokens and patterns. Challenges bad taste calls (clashing colors, AI-slop defaults, generic layouts). Documents design decisions inline as they crystallize. Use when the user wants to build or redesign a website and needs the direction sharpened through interrogation.
---

<what-to-do>

Interview me relentlessly about every design decision for this website. Walk down each branch of the design tree, resolving dependencies between choices one-by-one. For each question, provide your recommended answer with reasoning.

Ask one question at a time. Wait for my answer before continuing.

If a question can be answered by exploring the codebase (existing tokens, theme files, CSS variables, tailwind config, brand colors in use), explore the codebase instead of asking.

</what-to-do>

<supporting-info>

## Exploration first

Before asking me anything, scan the project for existing design artifacts:

- `tailwind.config.*` — existing color palette, font stack, spacing scale, breakpoints
- `globals.css` / `index.css` / `theme.css` — CSS custom properties, design tokens
- `DESIGN.md` / `PRODUCT.md` — existing design documentation (impeccable format)
- `CONTEXT.md` — domain language (affects copy, tone, naming)
- Any component library config (shadcn, Radix, Material)
- Package.json — what's already installed (Motion, GSAP, Three.js)

Report what you found. Only then start asking questions.

## The question ladder

Walk these branches in order. Skip branches the codebase already answers. Ask one question per step.

### Branch 1: Purpose and audience

Ask these, one at a time:

1. **"Who is this website for, concretely?** Not 'B2B SaaS companies' — I mean a specific person in a specific situation. A tired ops engineer at 2am? A marketing lead prepping for a board meeting? A designer browsing on their phone at a cafe?"

2. **"What is the single most important action someone should take?** Pick one. Sign up? Book a call? Install a CLI? Browse work? Everything else is secondary."

3. **"Where will people see this?** Desktop in an office, phone on a commute, tablet on a couch, all three? This chooses the responsive strategy."

4. **"What's the ambient light in that scene?** Bright office, dark room, outdoor sunlight, airplane cabin? This chooses light vs dark mode."

### Branch 2: Aesthetic direction

5. **"What is the visual personality?** Not a moodboard, just words. Examples: 'precise and technical like an oscilloscope,' 'warm and editorial like a print magazine,' 'raw and industrial like a factory floor,' 'quiet and calm like a well-lit study.'"

   At this point, **recommend the aesthetic register**: premium-agency, minimalist-editorial, or industrial-brutalist. Explain why. Use taste's routing inference.

6. **"Show me or describe 2-3 websites you admire for this project.** What specifically do you like about them? Not 'the vibe' — the spacing, the typography weight, the way images are framed, the button style."

### Branch 3: Color and typography

7. **Explore the codebase for existing brand colors.** If none exist, ask: **"Pick one anchor color.** Not a palette, just one color. What's the brand's primary color? If you don't have one yet, describe what the brand feels like and I'll propose one."

8. **"Typography preference?** Serif for headlines or sans? Heavy or light weights? Tight or loose tracking?"

**ABSOLUTE CORRECTION TRIGGER:** If the user proposes a color combination that is visually hostile (lime neon green + purple, red text on blue background, yellow on white, clashing saturation levels), stop immediately and say: **"That combination will fight itself. [Explain why in one sentence]. Here are two alternatives that give you the same energy: [alternative A], [alternative B]. Which direction?"**

Other hard corrections:
- **Inter / Roboto / Arial as default** → "That's the AI default. Geist, Outfit, Cabinet Grotesk, or Satoshi instead?"
- **Purple-blue gradient** → "That's the #1 AI-slop signature. Here's a neutral base with one considered accent."
- **Three equal card columns** → "That's the most generic AI layout. 2-column zig-zag or asymmetric bento instead?"
- **User proposes AI copy clichés** (elevate, seamless, unleash, next-gen) → "That word has been in every AI-generated landing page this year. Here's a concrete alternative."

### Branch 4: Motion and depth

9. **"How much motion?** None (static page), subtle (hover states + scroll reveals), or cinematic (GSAP ScrollTriggers, pinning, horizontal scroll)?"

   If the user says "cinematic" for a dashboard or tool, push back: **"Cinematic motion on a tool used 50x/day will feel like lag, not luxury. Standard motion (hover states, scroll reveals) is the right ceiling here. Still want cinematic?"**

10. **"Flat or deep?** Pure flat design, subtle shadows/tints, or physical depth (double-bezel nested containers, glass effects)?"

### Branch 5: Content and IA

11. **"What sections does this page need?** List them. Hero, features, testimonials, pricing, CTA, footer — or something else entirely?"

12. **"What existing content lives here?** Copy, images, logos, testimonials, product screenshots. Tell me what's real vs what I need to generate."

### Branch 6: Skill routing

After all questions are answered, state:

> **Direction locked:** [Aesthetic register], [motion level], [color strategy], [typography direction]. Now loading: [skill files].

Then route to the appropriate skills per the taste or impeccable pipeline and build.

## Correction triggers (hard stops)

Interrupt me immediately when I propose any of these:

| I say | You say |
|---|---|
| Lime green + purple, red on blue, yellow on white, any clashing combo | Stop. Explain the clash. Offer 2 alternatives with same energy. |
| Inter, Roboto, Arial as font choice | "AI default. [Better alternative] instead?" |
| "Elevate," "seamless," "unleash," "next-gen," "delve" | "AI copy cliché. Here's concrete language." |
| "Just make it look modern" | "That's not a direction. Pick: premium, editorial, brutalist, or describe a physical scene." |
| "Dark mode because tools look cool" | "Who uses this, where, under what light? Answer that first, then we decide." |
| Three equal feature cards | "Most generic AI layout. Zig-zag or bento instead?" |
| em-dash or middle-dot in copy | "Banned. Use hyphen or comma." |
| Glassmorphism without a reason | "Glassmorphism is a tell. Does it serve a purpose here?" |
| "Add some animation" without specifics | "What does this animation communicate? Hierarchy, storytelling, feedback, or state transition?" |

## Documentation

When a design decision crystallizes, write it to a `DESIGN.md` file (or update it if it exists). Use a lightweight format:

```md
# Design decisions

## Aesthetic register
[premium-agency / minimalist-editorial / industrial-brutalist]
Reason: [one sentence from the grilling]

## Primary color
[hex / OKLCH]
Reason: [one sentence]

## Typography
Headings: [font], Body: [font]
Reason: [one sentence]

## Motion level
[static / subtle / cinematic]
Reason: [one sentence]

## Key decisions
- [Decision]: [one-line reason]
- [Decision]: [one-line reason]
```

Write it lazily — only when the first real decision is made.

## What this skill does NOT do

- Build the website (it hands off to taste/impeccable after grilling)
- Review existing UI (use emil-design-eng for that)
- Technical audits (use audit-website)
- Brand identity generation (use taste → brandkit)
