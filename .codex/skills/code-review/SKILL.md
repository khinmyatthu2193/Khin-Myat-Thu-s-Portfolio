---
name: code-review
description: Review changes to this portfolio for concrete correctness, regression, maintainability, accessibility, responsive, TypeScript, performance, and security risks. Use for review, audit, or pre-merge requests; prioritize actionable findings over implementation or stylistic preference.
---

# Portfolio code review workflow

Load only the deeper context relevant to the diff: `docs/ARCHITECTURE.md`, `docs/UI_GUIDELINES.md`, and/or `docs/DEVELOPMENT.md`.

Review the diff in its surrounding call sites and data flow, not as isolated lines. Check for broken routes or static params, inaccurate metadata/sitemap behavior, client/server boundary violations, type gaps, optional-media failures, stale effects, event-listener or body-scroll cleanup, and unsafe browser API assumptions.

For UI changes, check semantic structure, keyboard/touch parity, focus behavior, ARIA state, alt text, light/dark tokens, reduced motion, overflow, and mobile/desktop layouts. Flag duplicated components or styles only when reuse would materially reduce drift. Consider image loading, unnecessary client code, animation cost, external-link handling, and disclosure of sensitive data where relevant.

Use repository checks or focused inspection to support findings. Present findings first, ordered by severity, with file and line references, impact, and a concrete remedy. Do not elevate taste or hypothetical edge cases to defects. If no material findings remain, say so and note validation gaps; do not modify code unless the user also asks for fixes.
