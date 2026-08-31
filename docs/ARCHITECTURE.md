# Architecture

## Runtime shape

The repository is a frontend-only Next.js 16 App Router application. It has no route handlers, database, authentication, server actions, or external API client. Portfolio records are imported TypeScript data, and project/achievement detail pages are statically generated at build time.

## Layers and data flow

```text
app route
  -> feature page or global shell
    -> reusable/section component
      -> typed local data + imported assets
```

- `app/` owns URL structure, metadata, static parameter generation, the root document, page transitions, SEO endpoints, and 404 behavior.
- `features/` owns page compositions. Most are thin adapters around established components; the home and about features contain their page-specific interactive layouts.
- `src/components/` owns global navigation/footer, home sections, archive/detail views, cards, skills, blog notes, and contact UI.
- `src/data/` exports typed arrays. `slug` values are both record identifiers and URL segments.
- `lib/seo.ts` centralizes site URL resolution and per-page metadata. `lib/asset-url.ts` normalizes imported image data and string URLs for components that use native image elements.

The root layout imports `src/index.css`, emits global metadata and JSON-LD, and wraps every route in `PortfolioShell`. The shell supplies navigation, footer, skip link, background decoration, and the Framer Motion reduced-motion policy. `app/template.tsx` adds route-transition animation.

## Route conventions

Static pages live at `/`, `/about-me`, `/skills`, `/projects`, `/achievements`, `/blogs`, and `/contact-me`. The `projects/[slug]` and `achievements/[slug]` routes derive `generateStaticParams` and metadata from their respective arrays, resolve promised Next.js 16 `params`, and call `notFound()` for unknown records.

Route files are currently server components, while interactive UI is delegated to client components in `features/` and `src/components/`. New indexable routes should use `createPageMetadata` and be represented in `app/sitemap.ts`.

## State and browser behavior

There is no global state library. UI state is local React state for filters, active panels, mobile navigation, lightboxes, clipboard feedback, and interactive highlights. Browser effects handle scroll state, keyboard dismissal, body scroll locking, pointer movement, and clipboard access. Theme state is implemented by `Navbar` toggling the root `light` class; the default root layout starts in light mode.

## Media and rendering

Portfolio screenshots are statically imported from `src/assets/`; the CV and public icons live under `public/`. Components support absent project/achievement images through designed placeholders. Media rendering currently mixes `next/image` with native `<img>` elements normalized through `assetUrl`.

## High-impact modules

- `app/layout.tsx`: site-wide document, metadata, viewport, and structured data.
- `features/site/portfolio-shell.tsx`: site-wide UI wrapper and accessibility entry point.
- `src/index.css` plus `tailwind.config.ts`: theme contract and shared visual primitives.
- `src/data/projects.ts` and `src/data/achievements.ts`: typed content schemas coupled to routes and sitemap generation.
- `lib/seo.ts`: canonical and social metadata behavior, including deployment URL environment variables.
