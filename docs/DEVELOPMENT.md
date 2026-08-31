# Development

## Requirements and setup

The repository does not pin a Node.js version. Use a version supported by the installed Next.js release. For a clean install from `package-lock.json`, run:

```bash
npm ci
```

Use `npm install` only when intentionally updating dependencies or the lockfile.

No required local environment file is present. For correct canonical URLs outside Vercel, set `SITE_URL` (preferred) or `NEXT_PUBLIC_SITE_URL`. On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` or `VERCEL_URL` is used automatically; local fallback is `http://localhost:3000`.

## Commands

```bash
npm run dev    # Next.js development server
npm run lint   # ESLint over the repository
npm run build  # optimized production build plus TypeScript validation
npm run start  # serve an existing production build
```

There is no test runner, automated test suite, or dedicated `typecheck` script. `npm run build` is the confirmed type/build gate. Compare lint output with the starting baseline so a change does not introduce new errors or warnings.

## Build and deployment

Next.js generates `.next/`; it and TypeScript build metadata are ignored. Do not edit generated output. `vercel.json` identifies the framework as Next.js and intentionally leaves `outputDirectory` unset so Vercel manages the build output.

`next.config.ts` enables AVIF and WebP image output. Tailwind scans application TypeScript/TSX paths, and PostCSS runs Tailwind and Autoprefixer.

## Change checks

- Content-only data edit: lint, then build when it affects slugs, imported media, or typed shapes.
- UI/component edit: lint and build; manually check narrow and wide layouts, keyboard use, both themes, and reduced motion when relevant.
- Route, metadata, data-model, dependency, or configuration edit: always run both lint and build.
