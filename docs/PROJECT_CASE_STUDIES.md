# Project case studies

All ten project detail routes use `features/projects/project-detail-page.tsx` and
`src/components/ProjectDetails.tsx`. The route continues to own static parameters,
metadata, and not-found handling. The case-study styles are scoped to
`src/components/ProjectDetails.module.css`; listing cards and other pages do not use them.

To add a project, add its typed record and imported media in `src/data/projects.ts`.
No new route or copied JSX is needed. Supply factual content only:

- `responsibilities` describes personal work, while `role` and `projectType` provide ownership context. Omit unverified responsibilities.
- `technologies` is grouped for display; optional `stack` provides explicit groups.
- `features` supplies short titles and descriptions. Legacy feature arrays remain supported.
- `featuredWorkflows` pairs a title and short explanation with media. Curate the strongest screens here.
- `gallery` contains additional screens. Screens already featured are automatically excluded from the gallery by source URL.
- `technicalHighlights`, `challenges`, `learnings`, and `outcome` render only when supplied.
- `overviewTitle` can override the overview heading.

Missing links and empty optional arrays do not render controls or sections. A single
showcase image appears once. Imported image dimensions preserve aspect ratios and
identify portrait screenshots. Videos retain native controls. The native screenshot
dialog supports Escape, modal keyboard focus, focus return, and body scroll locking.

Check every project after shared layout changes, including 390, 768, 1024, 1200,
and 1440 pixel viewports in both themes. Run lint and a production build as described
in `DEVELOPMENT.md`.
