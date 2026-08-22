# Khin Myat Thu — Portfolio

Personal portfolio for Khin Myat Thu, a full-stack developer and product builder focused on accessible web, mobile, and AI-powered products.

## Technology

- React 19 and TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide and React Icons

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

The project uses the Next.js App Router. Vercel detects the Next.js framework and manages the `.next` production output automatically; do not configure a custom `dist` output directory.

## Updating portfolio content

- Project content and links: `src/data/projects.ts`
- Learning notes: `src/data/posts.ts`
- Skills: `src/components/Skills.tsx`
- Contact information: `src/components/Contact.tsx`
- Main introduction and profile image: `src/components/Hero.tsx`
- Theme and global styles: `src/index.css`

Before publishing a new project, add its direct repository or live-demo URL instead of linking to the general GitHub profile.
