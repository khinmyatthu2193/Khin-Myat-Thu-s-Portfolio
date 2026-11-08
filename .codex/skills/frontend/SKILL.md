---
name: frontend
description: Modify or polish this portfolio's pages and components, including responsive behavior, accessibility, animation, and visual details, while preserving its established design language. Use for implementation work in app/, features/, src/components/, or src/index.css; not for review-only or bug-diagnosis-only requests.
---

# Portfolio frontend workflow

Read `docs/UI_GUIDELINES.md`. Read `docs/ARCHITECTURE.md` only when the task changes route boundaries, data flow, or shared structure.

Before editing, inspect the target, nearby implementations, relevant styling primitives, and any content model it consumes. Identify the existing responsive and interactive behavior that the change must preserve.

Make the smallest cohesive change that fulfills the request. Avoid unrelated visual or structural changes.

For interactive work, verify keyboard and touch operation, semantic elements, focus visibility, ARIA state, Escape/scroll-lock cleanup where applicable, and reduced-motion behavior. Check mobile-first layout at narrow and wide sizes and both token-driven themes.

Choose validation from `docs/DEVELOPMENT.md`, including manual responsive and interaction checks relevant to the change. Report what was verified and any remaining gaps.

## Visual redesign and portfolio content

For visual redesign tasks:

- Identify the user's visual references and non-negotiable preferences before implementation.
- Preserve the existing design system, semantic color tokens, typography, and theme behavior.
- Establish the intended layout structure, content hierarchy, and responsive behavior before editing.
- Prefer consistent card dimensions, spacing, and alignment when the design calls for symmetry.
- Avoid unnecessary decorative containers, excessive empty space, and duplicated content.
- Verify light and dark modes independently rather than assuming one theme will translate correctly.
- Do not introduce proficiency scores, experience claims, or skill descriptions without user-approved evidence.
- If progress indicators represent self-assessed proficiency, label them clearly and avoid presenting percentages as objective measurements.
- Compare the completed interface against the supplied reference and the user's stated preferences.
- Report any compromises between compactness, readability, and responsive behavior.