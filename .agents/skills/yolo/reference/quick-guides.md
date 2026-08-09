# YOLO Reference — Quick Guides

## Checklists

### Pre-Execution Checklist

Before invoking YOLO, ensure:

- [ ] You have a clear task description (not vague)
- [ ] The task has a measurable completion state
- [ ] You're ready for fast iteration and error fixing
- [ ] You're not expecting collaborative planning
- [ ] The project is in a safe state to modify
- [ ] You have version control set up (git)

### Decision-Making Checklist

For each ambiguity you encounter:

- [ ] Check project conventions first (do they already solve this?)
- [ ] Can I pick the simpler approach?
- [ ] Which approach has fewer failure modes?
- [ ] Which is faster?
- [ ] Which matches existing code style?
- [ ] Document the decision in .decisions/log.md
- [ ] Move on immediately

### Verification Checklist

Before calling a task done:

- [ ] Feature implemented and working
- [ ] Existing tests still pass
- [ ] Manual testing confirms the change
- [ ] No debug code remains
- [ ] .decisions/log.md is updated
- [ ] Commit message explains the why
- [ ] No known bugs remain

## Decision Log Examples

### Example 1: Framework Choice

```markdown
## Database: PostgreSQL vs SQLite — 2026-05-31

### Context
New feature needs data persistence. Two options in project scope.

### Decision: PostgreSQL
- **Reasoning:** Production app already uses PostgreSQL. Consistency wins.
- **Risk:** None. We're just using existing infrastructure.
```

### Example 2: API Design

```markdown
## New endpoint auth: API key vs JWT — 2026-05-31

### Context
Existing API uses JWT. New endpoint could use either.

### Decision: JWT (match existing)
- **Reasoning:** User can call with existing token. No new auth complexity.
- **Risk:** None if we follow existing token validation.
```

### Example 3: UI Library

```markdown
## Modal component: headless vs pre-built — 2026-05-31

### Context
Need a modal. React Query UI has prebuilt; can build custom in 2 hours.

### Decision: Headless (Headless UI)
- **Reasoning:** 30 minutes to integrate vs 2 hours to build. Ship faster.
- **Risk:** Must learn API. But it's small. Lower risk than custom.
```

## Error Recovery Patterns

### Pattern: Compilation Error

```
Error: Cannot find module 'x'
↓
Check imports in affected file
↓
Fix the import path
↓
Re-run build
↓
If still failing, try: npm install
```

### Pattern: Test Failure

```
Test: user auth failed
Error: "Expected true got false"
↓
Read test code to understand what it checks
↓
Read the implementation to see what changed
↓
Fix the implementation
↓
Re-run test
↓
Verify related tests still pass
```

### Pattern: Runtime Error

```
Error: Cannot read property 'x' of undefined
↓
Find the line number from stack trace
↓
Check what could be undefined (missing initialization?)
↓
Add a guard or fix the initialization
↓
Re-run to see if error moves or clears
↓
Repeat until green
```

## Ambiguity Resolution Flow

```
You encounter ambiguity
│
├─ Does the project already do this somewhere?
│  ├─ YES → Use the same pattern
│  └─ NO → Continue
│
├─ Can I pick the simplest approach?
│  ├─ YES → Use it
│  └─ NO → Continue
│
├─ Which has fewer failure modes?
│  ├─ Clear winner → Use it
│  └─ Unclear → Continue
│
├─ Which is faster to implement?
│  ├─ 10x difference → Use faster
│  └─ Similar → Continue
│
├─ Which matches project style?
│  ├─ Clear winner → Use it
│  └─ Either works → Flip a coin
│
└─ Document your choice and MOVE
```

## Timeboxing Guide

If you're taking too long, timebox:

- **Deciding ambiguity:** 2 minutes max. Pick and log.
- **First implementation attempt:** 15 minutes. If not working, reassess.
- **Debugging an error:** 10 minutes. If not fixed, try a different hypothesis.
- **Researching a pattern:** 5 minutes. Copy existing or use best guess.

Timeboxing forces good decisions. Open-ended deliberation is the enemy of shipping.

## Red Flags (When to Slow Down)

If you see these, pause and reassess:

- **Architecture confusion** — don't understand how modules connect
- **Data model uncertainty** — not sure what the schema should be
- **Security question** — might introduce a vulnerability
- **Performance concern** — might be 100x slower than needed
- **Conflicting requirements** — can't implement both

For these, spend 15 minutes exploring. If still unclear, ask the user or flag in .decisions/log.md.

## Green Lights (Proceed Full Speed)

You're safe to go fast if:

- Feature is isolated (no ripple effects)
- Tests already cover the area
- Project has clear conventions
- You've done similar work before
- There's a working example in the codebase
- The failure mode is easy to detect and fix

---

**Remember:** YOLO isn't reckless. It's disciplined speed. Explore enough to be confident, then move relentlessly.
