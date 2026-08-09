---
name: layers
description: Master orchestrator for the Layers of Product Design framework. Use for product design, UX architecture, domain modeling, user research, strategy, interaction flow, and surface design. Routes to the right specialized sub-skill based on which layer has live decisions. Covers all seven layers across problem space (observed behaviour, domain, user needs) and solution space (strategy, conceptual model, interaction flow, surface), plus cross-layer diagnostics. Trigger when the user wants to think through, design, model, audit, or plan any product — not for visual-only frontend tasks (use taste for that). Not for backend-only or non-product tasks.
version: 1.0.0
---

# Layers — Unified Product Design Orchestrator

Single entry point for all Layers of Product Design work. Always loads the framework context first, then routes to the right sub-skill based on which layer the designer needs to work.

## Setup (Every Invocation)

**Step 1 — Always:** Load `intro/SKILL.md` for the framework context. Every sub-skill depends on it. Skip only if you've already loaded it in this session.

**Step 2 — Infer the live layer.** Read what the user said and identify which layer has decisions that need making. Don't guess — route by keyword match. If ambiguous, offer `/layers orient` as the default.

### Routing Table

| User says / needs | Layer | Load |
|---|---|---|
| "orient", "where to start", "diagnostic", "bottleneck", "audit the layers", "what layer am I at" | Cross-layer diagnostic | `orient/SKILL.md` |
| "observe", "user research", "what users do", "behavior", "shadowing", "diary study", "usability test" | 1. Observed Behaviour | `observed-behaviour/SKILL.md` |
| "domain", "terminology", "concept map", "bounded context", "how the world works", "what do people call this" | 2. Domain | `domain/SKILL.md` |
| "user needs", "pains", "desires", "jobs to be done", "JTBD", "what users want", "personas" | 3. User Needs | `user-needs/SKILL.md` |
| "strategy", "business", "outcomes", "bets", "which needs to serve", "product strategy", "hypothesis", "assumptions" | 4. Product Strategy | `product-strategy/SKILL.md` |
| "objects", "model", "conceptual model", "relationships", "states", "transitions", "vocabulary", "OOUX", "noun harvest", "ubiquitous language" | 5. Conceptual Model | `conceptual-model/SKILL.md` |
| "flow", "interaction", "navigation", "places", "breadboard", "affordances", "edge cases", "empty states" | 6. Interaction Flow | `interaction-flow/SKILL.md` |
| "surface", "UI review", "words on screen", "visual hierarchy", "feedback", "accessibility audit", "the actual interface" | 7. Surface | `surface/SKILL.md` |
| General: "design this product", "think through X", "plan the UX", "help me figure out" | Unknown — start with orient | `orient/SKILL.md` |

**Step 3 — State the readback:**

> **Working at layer: `<N>. <Name>`. Loading: `<skill-file>`.**

Example: *Working at layer: 5. Conceptual Model. Loading: layers-conceptual-model.*

---

## Routing Execution

After inference, load the routed skill file. All paths relative to this skill's directory:

### If orient
1. Load `intro/SKILL.md` (if not already loaded)
2. Load `orient/SKILL.md` — it will diagnose all seven layers and recommend

### If a specific layer (1-7)
1. Load `intro/SKILL.md` (if not already loaded)
2. Load the layer's skill file (see table below)
3. **Check foundations.** Before working the layer, audit the layer below. Flag instability. The sub-skill itself may remind you, but it's your job to verify.

### If general / unknown
1. Load `intro/SKILL.md`
2. Load `orient/SKILL.md` — run the diagnostic
3. Recommend the bottleneck layer with a one-line reason

---

## The Seven Layers

```
Solution Space
  7. Surface              → surface/SKILL.md
  6. Interaction Flow     → interaction-flow/SKILL.md
  5. Conceptual Model     → conceptual-model/SKILL.md
  4. Product Strategy     → product-strategy/SKILL.md

Problem Space
  3. User Needs           → user-needs/SKILL.md
  2. Domain               → domain/SKILL.md
  1. Observed Behaviour   → observed-behaviour/SKILL.md

Diagnostic
     Orient               → orient/SKILL.md
```

The layers have logical dependency: lower layers are foundations for upper ones. Weak lower layers create UX debt that propagates upward. Always check the layer below before working on a layer.

---

## Commands (Shortcut Aliases)

| Command | Loads | For |
|---|---|---|
| `orient` | intro + orient | Diagnostic — find the bottleneck layer |
| `observe [target]` | intro + observed-behaviour | User research planning & synthesis |
| `domain [target]` | intro + domain | Domain mapping & terminology |
| `needs [target]` | intro + user-needs | User needs elicitation & prioritisation |
| `strategy [target]` | intro + product-strategy | Product strategy & bets |
| `model [target]` | intro + conceptual-model | Objects, relationships, states, vocabulary |
| `flow [target]` | intro + interaction-flow | Places, affordances, edge cases |
| `surface [target]` | intro + surface | UI audit against lower layers |

---

## Core Principles (from layers-intro — apply across all sessions)

1. **Decisions, not outputs.** Artefacts serve decisions, not the other way around.
2. **Uncover before you resolve.** Surfacing unmade decisions is often more valuable than answering made ones.
3. **Work at one layer at a time.** Don't conflate problem space and solution space.
4. **Check foundations before building upward.** Flag instability in the layer below.
5. **The conceptual model is the most neglected load-bearing layer.** Give it more attention than feels comfortable.
6. **Capture decisions, not transcripts.** A few lines the designer will reread beats pages they'll skim once.
7. **Push forward, pull back.** Probe upward to learn what a lower layer needs, then come back down and do that work.

---

## Quick Reference

```
User says:                                    → Route:
───────────────────────────────────────────────────────
"I need to figure out where to start"         → orient
"What do users actually do?"                  → observe (layer 1)
"Map the domain terminology"                  → domain (layer 2)
"What are the user needs here?"               → needs (layer 3)
"Which needs should we serve?"                → strategy (layer 4)
"Define the object model"                     → model (layer 5)
"Design the interaction flow"                 → flow (layer 6)
"Review this screen against the model"        → surface (layer 7)
"Help me design this product"                 → orient → recommend
```
