# Project

This is Khin Myat Thu's personal developer portfolio. It presents her profile, education, technical skills, selected projects, achievements, learning notes, availability, CV, and contact links to prospective employers and collaborators.

## Visitor experience

- `/` introduces Khin, highlights featured projects, summarizes her focus, and links visitors toward project and contact pages.
- `/about-me` presents education, development journey, interests, goals, and selected recognition.
- `/skills` groups current skills across frontend, backend, mobile, databases, tools, and related areas.
- `/projects` provides a filterable archive. `/projects/[slug]` renders typed case-study content and optional screenshots, repository links, and live links.
- `/achievements` provides a filterable archive. `/achievements/[slug]` renders supporting images, galleries, and credential links when present.
- `/blogs` currently presents in-page learning notes from local data; it is not a CMS or dynamic blog backend.
- `/contact-me` presents location, email, phone, GitHub, and LinkedIn details with copy-to-clipboard interactions.

The site also supplies canonical metadata, Open Graph imagery, structured person/site data, a generated sitemap, robots rules, a custom not-found page, theme switching, responsive navigation, and a downloadable PDF CV.

## Content sources

- Projects and their detail pages: `src/data/projects.ts`
- Achievements and their detail pages: `src/data/achievements.ts`
- Learning notes: `src/data/posts.ts`
- About-page narrative: `features/about-me/about-page.tsx`
- Skills and contact content: `src/components/Skills.tsx` and `src/components/Contact.tsx`
- Primary introduction and CV link: `src/components/Hero.tsx`

Keep claims accurate. Several content records deliberately say that details are unconfirmed; do not turn those placeholders into factual claims without user-provided evidence.
