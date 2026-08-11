<!-- Last modified: 2026-08-10 -->
<!-- Managed by loop-improver-mcp -->

# presentation-reviewer insight

## Current learning

Presentation quality needs separate gates for composition, concept strength, scene progression, interaction, and stage readiness. A static deck could pass the old scored rubric because motion and presenter behavior appeared only as advisory principles.

## Improved

The reviewer now supports brief, figure, and deck modes and remains independent from implementation. It requires real-navigation evidence for entry and hold states, reduced-motion proof, changed interaction states when applicable, and an `ACCEPT`, `REVISE`, or `BLOCKED` verdict. It discovers sections from the artifact instead of assuming a fixed count.

## Reusable learning

Animation count is not evidence of dynamism. A presentation feels alive when state changes carry the teaching sequence, the presenter controls the pace where sequence matters, the scene reaches a clear hold frame, and the handoff to the next idea is intentional. A justified static scene remains valid.

## Next evidence

The current deck audit forces active classes and captures one settled frame, so it cannot prove real navigation, one-shot scene replay, keyboard behavior, or reduced-motion behavior. Add a focused Playwright presentation behavior test before making those checks a build gate. Classify existing `scrollOverflow` measurements before failing audits on that field.
