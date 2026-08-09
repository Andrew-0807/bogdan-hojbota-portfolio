---
name: yolo
description: Execute decisively and autonomously without hesitation. Move fast, make calls, fix errors in flight, document decisions, and deliver. Use when you need unstoppable momentum and rapid iteration.
user-invocable: true
argument-hint: "[task description]"
---

# YOLO

No hesitation. No asking. No pausing. Ship it.

## Principles

- Decide everything yourself. Log choices in `.decisions/log.md`.
- Implement → verify → repair → loop until green.
- Solo for simple; subagents for complex.

## Modes

### `/yolo [task]` — Solo (default)
Direct execution: explore → decide → implement → verify → repair → done.

### `/yolo subagents [task]` — Subagent orchestration
Multi-phase work: explore & plan → orchestrate → monitor & integrate → verify → repair → done.

**Pick subagents when:** multi-area refactor, many unfamiliar modules, parallelizable work. Otherwise solo.

## Subagent Protocol (`/yolo subagents` only)

- Break into self-contained tasks with clear acceptance criteria.
- Spawn, let run. If a subagent errors: extract what it produced, respawn.
- Never fix a subagent's work inline. Your job is integration.

## Decision Heuristics

Simplest thing that matches project conventions. Never let ambiguity block you.

## Error Handling

Read error → fix immediately → re-run → move on.

## Decision Log (`.decisions/log.md`)

Log every non-trivial call: context, options, chosen, why.

## Done

Feature works. Tests pass. No debug code. Log updated. Matches conventions.
