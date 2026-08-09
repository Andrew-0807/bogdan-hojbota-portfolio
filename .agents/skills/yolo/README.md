# YOLO Skill — Unstoppable Execution

A skill that embodies decisive, autonomous, relentless execution. When you invoke YOLO, there is no planning phase, no approval step, no hesitation. Only delivery.

## When to Use

Invoke `/yolo` when:

- You need unstoppable momentum
- Time-to-value matters more than perfect planning
- You're confident in your problem domain
- You can move fast and fix errors in flight
- You need to ship a feature end-to-end
- You want to test a bold idea quickly
- You're dealing with technical debt that needs to be cleared now
- You need to make rapid decisions under ambiguity

## What Makes YOLO Different

| Aspect | YOLO | Other Skills |
|--------|------|-------------|
| **Decision-making** | Autonomous; documented | Collaborative; approved |
| **Speed** | Move fast, fix errors | Plan thoroughly first |
| **Ambiguity** | Decide and proceed | Ask clarifying questions |
| **Sub-agents** | Delegate; don't duplicate | Do it inline if needed |
| **Pausing** | Only when done | After each phase |
| **Documentation** | Decisions logged as you go | Written at the end |

## Core Workflow

1. **Explore** the codebase systematically
2. **Decide** every ambiguity autonomously (log it)
3. **Implement** end-to-end, preferring edits to new files
4. **Verify** with tests and manual checks
5. **Repair** any errors immediately and re-run
6. **Ship** when complete

## Example Tasks

### "Add a new API endpoint for exporting data"
→ Explore existing endpoints → Decide on format (JSON, CSV? OpenAPI? Auth?) → Implement end-to-end → Test → Ship

### "Refactor the user auth module to use a new JWT library"
→ Map current dependencies → Decide migration strategy → Replace and test all call sites → Verify auth still works → Done

### "Implement dark mode for the app"
→ Study current theme system → Decide on tokens/CSS approach → Apply to all pages → Test toggle and persistence → Ship

### "Debug the mysterious 500 error in production"
→ Examine logs and error patterns → Hypothesize root cause → Fix it → Deploy → Verify in prod

## Decision Log Template

Create `.decisions/log.md` in your project root to track every decision:

```markdown
# Decision Log

## Dark Mode Implementation — 2026-05-31 09:15

### Decision: Use CSS custom properties for dark mode tokens
**Context:** App has no theme system. Need dark mode ASAP.
**Options:** 
- CSS classes + SCSS variables (heavy)
- CSS custom properties (lightweight)
- Tailwind dark mode (requires upgrade)

**Chosen:** CSS custom properties
**Reasoning:** Fastest to implement, no refactoring required, matches modern standards
**Risk:** Older browser support (mitigated: we support 2022+ browsers)

---

## Auth Migration to new-jwt-lib — 2026-05-30 14:22

### Decision: Migrate all auth middleware in single pass
**Context:** 5 auth middleware functions, 3 services use them. New library has breaking changes.
**Options:**
- Dual-support period (complex)
- Single migration (risky but fast)

**Chosen:** Single migration
**Reasoning:** Auth is tested well. Test coverage is high. Risk is low. Speed wins.

---
```

## Invoking YOLO

```bash
# From pi command line:
/yolo [task description]

# With full task:
/yolo Implement user profile endpoint with validation and tests
```

The skill will:
1. Explore the project
2. Make autonomous decisions (logging them)
3. Implement end-to-end
4. Verify and fix errors
5. Ship the feature
6. Never pause for approval

## Constraints

- Only stops when the feature is complete and working
- Prefers editing existing code over creating new files
- Documents all decisions in `.decisions/log.md`
- Respects project conventions and patterns
- Cleans up temporary code before finishing

## What You Should Do

- **Monitor progress** — watch the build output
- **Capture errors** — YOLO will fix them, but you can see them
- **Provide domain context** — if YOLO seems to be going wrong, tell it
- **Review decisions** — read `.decisions/log.md` after for insights
- **Trust the loop** — YOLO is built to self-correct

## What You Should NOT Do

- Don't ask YOLO to pause and wait for approval
- Don't expect YOLO to ask clarifying questions mid-execution
- Don't interrupt the flow with "but what about..."
- Don't expect YOLO to be conservative — it's aggressive by design
- Don't use YOLO for speculative work — use it for known tasks only

---

**In YOLO mode, there is only ship. And shipping happens now.**
