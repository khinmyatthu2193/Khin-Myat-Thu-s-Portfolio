# Skills page evidence review

Reviewed on 2026-11-09 using public repositories from [khinmyatthu2193](https://github.com/khinmyatthu2193).

## Review boundaries

Repository code demonstrates examples of technology use. It does not establish individual authorship, independent ability, or a proficiency percentage. Forks, generated assets, dependency lists alone, and profile language statistics were not used to assign proficiency levels. Links used by the page are pinned to the reviewed commits.

Previously approved self-assessments remain unchanged. TypeScript and Next.js move into Core Technologies at their existing Basic / 35 assessment because they appear in current application implementations. They are removed from additional pills to avoid duplication. No technology is assigned Advanced.

Firebase and Supabase have implementation evidence, but both entries were removed from Core Technologies at the user's request on 2026-11-10. Their names, icons and empty proficiency tracks are no longer rendered as skill items. The implementation evidence below remains as review context. C#, PHP, and Laravel remain in Currently Exploring without assessed levels. Existing user-supplied technologies without a linked example are retained; absence from this review is not evidence that the user lacks those skills.

## Implementation examples

| Area | Evidence | What was observed |
| --- | --- | --- |
| React, Next.js, TypeScript, semantic HTML, Tailwind CSS | [Snapora](https://github.com/khinmyatthu2193/photo-studio-booking-system/blob/fc0810596efd1c1b3503cdd293313e890a60966a/src/app/(public)/page.tsx) | A typed App Router page with reusable components, data loading, responsive utility classes, headings, links, and image composition. The package manifest and global CSS also declare Next.js, TypeScript and Tailwind CSS. |
| JavaScript and React | [MayMay’s Latt Swal](https://github.com/khinmyatthu2193/May_Mays_Latt_Swal-Cooking-Assistant-Web-App/blob/299360e71cc3c2a8d65a4b1a4b9a5f2a7a19a226/src/App.jsx) | Stateful components, filtering, recipe rendering and local application logic. |
| Python and Django | [University Laptop Rental](https://github.com/khinmyatthu2193/university-laptop-rental-management-system/blob/900acb57f4aaabe413ae51ed9ca1bb2cd73b7c05/rental_system/services/inventory.py) | Inventory state transitions, assignments, returns, repair flows and Django ORM operations. |
| Real-time backend capability | [RecycleLink](https://github.com/khinmyatthu2193/RecycleLink-EcoCommerce-Platform/blob/1da1cc5bc0ade1744ca9198b48834b82ddbc1c31/link/consumers.py) | A Django Channels WebSocket consumer for supplier notifications. This supports the capability description without adding a new proficiency rating. |
| React Native and Expo | [Climbio Mobile](https://github.com/khinmyatthu2193/Climbio-MSME-Smart-Business-Toolkit/blob/bf781c146c0a7ff7090b8575051e05399769ccb6/app/(tabs)/minicatalog/add-product.tsx) | A product-entry screen with mobile UI, Expo image picking, routing and Firebase authentication / document writes. |
| Firebase usage | [Climbio Mobile](https://github.com/khinmyatthu2193/Climbio-MSME-Smart-Business-Toolkit/blob/bf781c146c0a7ff7090b8575051e05399769ccb6/firebase/orders.ts) | Firestore order persistence and reminder read, create, update and delete operations. Usage verified; level pending. |
| API integration and Supabase usage | [Snapora](https://github.com/khinmyatthu2193/photo-studio-booking-system/blob/fc0810596efd1c1b3503cdd293313e890a60966a/src/app/api/booking/submit/route.ts) | A POST handler validates booking input and calls a Supabase database procedure. Usage verified; level pending. |
| Supabase / PostgreSQL schema | [Snapora](https://github.com/khinmyatthu2193/photo-studio-booking-system/blob/fc0810596efd1c1b3503cdd293313e890a60966a/supabase/migrations/20260927050000_initial_snapora_schema.sql) | Tables, foreign-key relationships and row-level security policies for a studio booking application. |
| PostgreSQL and Prisma | [Climbio 2.0](https://github.com/khinmyatthu2193/Climbio-2.0/blob/0896e8cb22f787ef66314cdfafb8bfbee58f10e2/backend/prisma/schema.prisma) | A PostgreSQL datasource and related models for products, customers and invoices. Product service code also performs Prisma queries and mutations. |
| AI-assisted workflow context | [MayMay’s Latt Swal](https://github.com/khinmyatthu2193/May_Mays_Latt_Swal-Cooking-Assistant-Web-App/blob/299360e71cc3c2a8d65a4b1a4b9a5f2a7a19a226/.claude/agents/meal-planner.md) | Structured agent instructions for a recipe decision workflow. This is workflow documentation, not proof of a deployed model integration or quantified tool expertise. |
| PHP learning | [PHP Learning Journey](https://github.com/khinmyatthu2193/php-learning-journey/blob/b3334cbee45f084b9f6d1278dd688146cd0428f0/README.md) | Explicit learning goals, notes and exercises. Laravel is listed as a learning goal, not an established proficiency. |

## Content decisions

- Capability descriptions now refer to concrete work: booking interfaces, inventory and rental workflows, mobile catalog screens, database operations and API validation.
- Capability cards and selected technology names link directly to public source examples. These links illustrate use; they do not claim sole authorship.
- AI development tools remain a separate, previously user-approved list. The review does not independently verify usage of every assistant.
- Earlier exclusions and approval requirements remain in force. Node.js, Express.js, FastAPI, MongoDB, Qdrant, RAG, Gemini API, OpenRouter API, Framer Motion and Flutter are not added to the public skills dataset.
- The cooking assistant's reviewed browser agent uses deterministic matching with a future-AI placeholder. Its README wording was not treated as proof of a working external model API integration.
- Public repository content is an editable snapshot, not live-fetched page data. Re-review source changes before replacing pinned evidence links or changing skill claims.
