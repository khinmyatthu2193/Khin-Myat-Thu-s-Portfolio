<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio project guide

Khin Myat Thu's portfolio is a frontend-only, statically generated Next.js 16 App Router application using React 19, strict TypeScript, Tailwind CSS 3, and Framer Motion.

## Map

- `app/`: routes, metadata, sitemap/robots, and the root layout/template.
- `features/`: page-level compositions and the global portfolio shell.
- `src/components/`: reusable and section-level client components.
- `src/data/`: typed portfolio content; project and achievement slugs drive static detail routes.
- `src/assets/` and `public/`: imported media and directly served files.
- `lib/`: shared asset and SEO helpers.
- `src/index.css` and `tailwind.config.ts`: theme tokens and shared styling primitives.

## Rules

- Preserve the route -> feature -> component/data layering. Put metadata and `generateStaticParams` in `app/`; put interactive page UI outside route files.
- Follow nearby import and naming conventions. Use `@/` across directories and relative imports for nearby files.
- Add `"use client"` only when client behavior requires it.
- Reuse existing components, styling primitives, and typed content models before adding alternatives.
- Preserve the established visual identity and accessibility behavior unless the user requests a redesign.
- When adding a route, use `createPageMetadata`; update `app/sitemap.ts` when the route should be indexed.
- Before changing site-wide shells, SEO, tokens, content schemas, or configuration, inspect their downstream consumers.
- Do not edit `.next/`, `node_modules/`, or other generated output. Add dependencies only when the task requires them.

## Validation

- `npm run lint`
- `npm run build`

Choose proportional checks using [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md).

## Load context progressively

Read only what the current task needs:

- Product/content intent: [`docs/PROJECT.md`](docs/PROJECT.md)
- Routing, boundaries, and data flow: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- UI, responsive, animation, theme, or accessibility facts: [`docs/UI_GUIDELINES.md`](docs/UI_GUIDELINES.md)
- Setup, builds, environment, or deployment: [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md)
- Frontend implementation workflow: [`.codex/skills/frontend/SKILL.md`](.codex/skills/frontend/SKILL.md)
- Debugging workflow: [`.codex/skills/debugging/SKILL.md`](.codex/skills/debugging/SKILL.md)
- Code-review workflow: [`.codex/skills/code-review/SKILL.md`](.codex/skills/code-review/SKILL.md)
