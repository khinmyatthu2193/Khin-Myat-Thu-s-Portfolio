---
name: debugging
description: Diagnose faults in this portfolio's rendering, routes, interactions, responsive behavior, build, lint, metadata, or content-driven pages and apply the smallest verified fix when requested. Use for bug reports and regressions, not general UI polishing or broad refactoring.
---

# Portfolio debugging workflow

Load only the context tied to the failure: `docs/ARCHITECTURE.md` for routes/data flow, `docs/UI_GUIDELINES.md` for UI behavior, or `docs/DEVELOPMENT.md` for tooling and deployment.

Establish the failing behavior and expected behavior from available evidence. Reproduce it when practical with the narrowest relevant command or code path. Trace across the repository's actual boundaries: route metadata/params, feature adapter, component state/effects, typed local data, asset resolution, and global tokens.

Identify root cause before editing. Prefer a local correction over restructuring or speculative defensive code. Depending on the failing path, inspect client/server boundaries, dynamic-route params, effect cleanup, optional media, slug/data coupling, theme classes, and reduced-motion branches.

Verify the corrected behavior directly, then choose proportional checks from `docs/DEVELOPMENT.md`. Explain the cause, fix, and evidence without claiming a scenario was tested if it was only inspected.
