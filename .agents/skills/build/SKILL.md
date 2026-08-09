---
name: build
description: Turn a rough idea — usually a discussion you've already been having, or a doc you hand it — into a stress-tested plan with no unchallenged assumptions. Takes the existing conversation or file as raw material, lays it onto the seven layers of product design (via the Layers skill) to expose where the thinking is solid and where it's full of holes, then uses Grilling to interrogate every hole and weak assumption one at a time until they're closed. Use after you've kicked an idea around with Claude and want to harden it before building, or when you say "run build on this", "turn our discussion into a real plan", "think this through properly", "pressure-test this", or "find the holes in this". Not for visual-only frontend work (use taste) or quick tweaks.
version: 1.0.0
---
This is a skill/ workflow to invoke other skills.

# Rule 0:
- Questions are to be proposed based on the `grill-with-docs` skill. One by one, relentlessly until everything is solved and with each question you offer your recmmandation


# Build — Structure, then Stress

`build` almost never starts from a blank page. The user has usually been kicking an idea around with you already — a conversation or a doc. **That discussion is your raw material.** Your job is to give it a spine and find what's missing. Two skills, run against each other:

- **Layers** is *structural*. It lays the discussion onto the seven layers — observed behaviour, domain, user needs, strategy, conceptual model, flows, surface — exposing where the thinking is deep and where it's thin or never touched. Real discussions are lopsided (deep on backend, silent on how a user moves through it). Layers makes that visible. Thin spots are **holes**.
- **Grilling** is *adversarial*. It walks holes and soft decisions one at a time, asking "why" until each closes or gets named as an explicit deferral. No quiet assumptions left standing.

Layers without Grilling = a tidy map hiding guesses. Grilling without Layers = nothing solid to bite into. Together: Layers finds the bones, Grilling tests them. Don't skip either side.

The output is a plan with no unchallenged assumptions. You stop there — `build` does not write code or design visuals. Once the plan holds, hand off to `taste` (frontend) or normal implementation.

---

## How to operate the two skills

### Step 0 — Take in what's already been discussed

Gather the raw material from one of:

- **The conversation so far** (default) — that history *is* the input. Don't make them repeat it.
- **A file they point to** — spec, notes, brief, transcript. Read it.
- **Both** — doc plus live discussion.

If it's genuinely thin ("build me X" with nothing else), ask a few quick questions — don't run a full interview. The interview is what Grilling is for, aimed precisely at the holes.

Then write a **short read-back**: the idea in one sentence, and the handful of things already decided.

### Step 1 — Lay the discussion onto the layers (Layers)

Invoke **`layers`** skill. It loads its own framework intro and routes to the right sub-layer internally. Your job is **mapping, not inventing**. Take what the discussion already contains and place each piece on the layer it belongs to. As you do, sort every decision the layers care about into three states:
look at the layers intro file to see whats its all about.
- **Decided** — the discussion actually settled this, for a reason.
- **Assumed** — the discussion glossed it: stated as if settled, but really a guess. *Mark it.*
- **Hole** — the discussion never touched this layer at all. *Mark it.*

The map will be lopsided, and that's the point — it shows you exactly where the thinking ran deep and where it ran out. Use the layers' **orient** diagnostic to name the **bottleneck**: the lowest layer that's mostly Assumed or Hole. Foundations first — a shaky lower layer poisons everything above it, so a hole in user needs matters more than a polished surface.

Give the **conceptual model** (layer 5) extra attention. It's the most neglected load-bearing layer, and it's the one a backend-heavy discussion most often leaves implicit; weak object models leak upward into confused flows and surfaces.

Don't manufacture work on layers the discussion legitimately doesn't need — say "this layer is fine because X" and move on. The map's value is the holes it reveals, not filling every box.

### Step 2 — Grill the holes (Grilling)

Invoke the **`grill-with-docs`** skill (via the Skill tool). This variant captures resolved terminology in `CONTEXT.md` and hard-to-reverse decisions as ADRs — since `build`'s whole point is producing a plan that survives beyond the chat, use the documentation-producing grilling skill.

This is where the map turns into a hardened plan. Walk the **Holes and Assumeds from Step 1** — in bottleneck-first order — one at a time. For each:

1. State what the discussion left open, in your own words.
2. Offer your recommended answer — don't just ask an open question, take a position the user can push against.
3. Ask **one question at a time** and wait. A wall of questions is bewildering and gets shallow answers.
4. Don't move on until it resolves — either into a **decision**, or into an **explicit open question** the user consciously chooses to defer (deferral is fine; a silent assumption is not).

**Don't rubber-stamp.** You're built to agree and treat "yeah, that's fine" as closure. Resist it. Only accept an answer when you can restate it *and* name what must be true for it to hold:

- **Play it back:** "So you're saying X. That only works if Y is true — is it?" If you can't name Y, you don't understand yet.
- **Confidence is not evidence.** Tempted to accept because the user sounds sure or the conversation is getting long? That's the moment to push once more.
- **"We'll handle that somehow" is a deferral, not a decision.** Log it. Don't launder hand-waving into a checkmark.

Example to internalise: the discussion went deep on backend architecture but never said how a user reaches it. That's a hole at interaction flow. Grilling drives at it — "When a user wants to do X, where do they start, what do they see?" — until the path exists, not just the engine.

Then pressure-test the decisions that only *look* solid:

- **User needs** — the real needs, or what's convenient to build? What's the evidence?
- **Strategy** — the right bet? What's the single riskiest assumption it rests on?
- **Conceptual model** — does every object earn its place? Is one object secretly two?
- **Flow** — does every path have a destination? What happens on the failure / empty / edge cases?

If a question can be answered by reading the codebase or the doc the user gave you, go look instead of asking them.

### The loop

Default to **incremental**: grill after each layer while decisions are fresh, before building the next layer on top. Batch only when layers are tightly coupled and you can't judge one without the others.

When grilling cracks a decision — it rested on a hole you missed — go back to Layers for that piece: re-map, re-mark, re-grill. Loop until no Assumed-and-unexamined remain.

**Stop grilling a layer** when the next question would only produce build-time detail (exact copy, pixel spacing, which library) rather than a decision that changes the shape of what gets built. Surface that as "the rest is build-time detail" and move on. Over-grilling trains the user to hand-wave to make it stop — defeats the point.

---

## Step 3 — The handoff (only if the build happens elsewhere)

The common workflow: think it through with `build` in one chat, build the app in a *fresh* chat. That split stops the model lunging at code before the plan holds. But it only works if the handoff is built for a reader with **zero memory of this conversation** — anything left in the chat is gone.

**Write one `BUILD-SPEC.md`, not one file per layer.** The seven layers are a *thinking* scaffold — they found the holes, they aren't how someone builds. A builder doesn't want eight files; cross-file consistency is a known weak spot. One coherent spec beats eight fragments. (At most, split off a data-model file if the spec gets unwieldy — never eight.)

Structure it so the builder reads top-down and can't miss what matters:

```
# BUILD-SPEC: <one-line idea>

## Open questions — READ FIRST, do not silently resolve
<every deferred question, loud, at the very top. If the builder hits one,
 it must STOP and ask — not invent an answer. This section is the whole
 reason the spec exists; bury it and the build re-introduces every
 assumption you just spent the session killing.>

## What we're building & why   <- layers 1–4 compressed to a short paragraph of rationale, not transcripts>
## Conceptual model            <- objects, relationships, states, vocabulary (layer 5) — the load-bearing section>
## Flows                       <- key paths incl. failure/empty/edge (layer 6)>
## Surface notes               <- only decisions that constrain the build (layer 7); leave pixel/copy detail to build-time>
```

Why: open questions go first because a cold LLM's default is to fill gaps with confident guesses — putting them top and telling it to stop is the only reliable guard. Conceptual model gets its own section because it's load-bearing and most often implicit. Problem-space layers collapse to a paragraph because the builder needs the *what*, not the thinking that produced it.

If the build will happen **in this same chat**, skip the file — just keep the decisions and open questions in the conversation. The spec file earns its weight only when context won't carry over.

## When you're done

`build` exits when:

- Every layer from bottleneck to surface is addressed (worked or explicitly skipped with a reason).
- Every Hole and Assumed is a decision or a consciously deferred open question. Nothing silently assumed.
- The user confirms shared understanding — and, if building elsewhere, has `BUILD-SPEC.md` in hand.

---

## When to use what

| Situation | Use |
|---|---|
| "Turn our discussion into a hardened plan" | **build** |
| "Find the holes in this idea/doc before I build" | **build** |
| "I have a vague idea, help me figure it out" | **build** |
| "I just need to map my domain model" / one specific layer | **layers** directly |
| "Grill me on this plan" — structure already exists | **grilling** directly |
| "Build me a landing page, I know what I want" | **taste** directly |
| Quick visual tweak, or backend-only work | none of these |

The shortest version: if the thinking is the hard part, use `build`. If you already know what you want, skip straight to building.
