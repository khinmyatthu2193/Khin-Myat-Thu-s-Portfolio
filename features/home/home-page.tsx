"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Hero from "@/src/components/Hero";
import { FeaturedProjects } from "@/src/components/HomePreviews";

const stats = [["6+", "Projects Built"], ["Full-Stack + AI", "Focus"], ["2027", "Graduating"]];
const expertise = [
  {
    title: "Frontend",
    text: "Building responsive and interactive web interfaces.",
    technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite"],
    projects: [{ name: "Climbio 2.0", slug: "climbio" }, { name: "JoyHub", slug: "joyhub" }],
  },
  {
    title: "Backend & Application Logic",
    text: "Developing server-side features, business logic, and application workflows.",
    technologies: ["Python", "Django", "Node.js", "Express", "Prisma"],
    projects: [{ name: "Brancy", slug: "brancy" }, { name: "Climbio 2.0", slug: "climbio" }],
  },
  {
    title: "Data & Web Services",
    text: "Managing application data, authentication, persistence, and browser-based functionality.",
    technologies: ["PostgreSQL", "Supabase", "SQLite", "Local Storage", "Web Audio API"],
    projects: [{ name: "Brancy", slug: "brancy" }, { name: "Climbio 2.0", slug: "climbio" }, { name: "JoyHub", slug: "joyhub" }],
  },
];

export function HomePage() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? undefined : { opacity: 0.35, y: 28 };

  return (
    <main id="main-content">
      <Hero />
      <FeaturedProjects />

      <section className="home-section !pb-8 !pt-6 sm:!pb-10" aria-label="Portfolio highlights">
        <div className="grid overflow-hidden rounded-2xl border border-borderSoft bg-bgCard/50 sm:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label} className="flex min-h-28 flex-col justify-center border-b border-borderSoft p-5 text-center last:border-0 sm:min-h-32 sm:border-b-0 sm:border-r sm:p-6">
              <p className={`font-display font-semibold text-primary ${value.length > 6 ? "text-2xl md:text-3xl" : "text-4xl"}`}>{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-textMuted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section !pt-8 sm:!pt-10" aria-labelledby="expertise-title">
        <motion.div initial={reduceMotion ? false : { opacity: 0.35, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }} className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div><p className="eyebrow">Technical capabilities</p><h2 id="expertise-title" className="section-title mt-4">Technologies I use to build real products.</h2></div>
          <p className="max-w-2xl leading-relaxed text-textBody lg:justify-self-end">A practical stack developed through building full-stack, business management, e-commerce, and interactive web applications.</p>
        </motion.div>

        <div className="mt-10 border-y border-borderMedium">
          {expertise.map(({ title, text, technologies, projects }, index) => (
            <motion.article
              key={title}
              initial={reveal}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.58, delay: reduceMotion ? 0 : 0.16 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-6 border-b border-borderSoft py-8 last:border-b-0 lg:grid-cols-[0.8fr_1.15fr_0.75fr] lg:items-start lg:gap-10 lg:py-9"
            >
              <div>
                <h3 className="font-display text-2xl font-medium text-textMain">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-textBody">{text}</p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {technologies.map((technology) => <span key={technology} className="rounded-full border border-primary/35 bg-primary/15 px-3.5 py-1.5 text-[13px] font-semibold text-primary">{technology}</span>)}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textMuted">Project evidence</p>
                <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm leading-relaxed text-textDim">
                  <span>Used in</span>
                  {projects.map((project, projectIndex) => (
                    <span key={project.slug} className="inline-flex items-center gap-2">
                      {projectIndex > 0 && <span>{projectIndex === projects.length - 1 ? "and" : ","}</span>}
                      <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 font-semibold text-textMain transition-colors hover:text-primary">{project.name}<ExternalLink size={12} aria-hidden="true" /></Link>
                    </span>
                  ))}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="home-section !pb-5 !pt-10 md:!pb-6">
        <div className="rounded-3xl border border-primary/25 bg-primary/[0.07] px-7 py-12 text-center md:px-12 md:py-14">
          <p className="eyebrow">Let&apos;s build something together</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">Let&apos;s build something meaningful.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-textBody">I&apos;m open to internships, collaborations, and opportunities to build useful products and grow as a developer.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/contact-me" className="button-primary">Get in touch <ArrowUpRight size={17} /></Link><Link href="/projects" className="button-secondary">View projects</Link></div>
        </div>
        <footer className="mt-10 flex flex-col items-center gap-4 border-t border-borderSoft pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="text-textMuted">
            <p className="text-xs font-semibold uppercase tracking-[0.14em]">© 2026 Khin Myat Thu</p>
            <p className="mt-1.5 font-display text-sm italic tracking-wide text-textDim">Learning. Building. Growing.</p>
          </div>
          <div className="flex items-center gap-2" aria-label="Contact links">
            <a href="https://github.com/khinmyatthu2193" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderMedium text-textMuted transition-colors hover:border-primary hover:text-primary"><FaGithub size={15} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/khin-myat-thu-837892352" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderMedium text-textMuted transition-colors hover:border-primary hover:text-primary"><FaLinkedin size={15} aria-hidden="true" /></a>
            <Link href="/contact-me" aria-label="Email Khin Myat Thu" title="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderMedium text-textMuted transition-colors hover:border-primary hover:text-primary"><Mail size={15} aria-hidden="true" /></Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
