"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database, Smartphone } from "lucide-react";
import Link from "next/link";
import Hero from "@/src/components/Hero";
import { AboutPreview, FeaturedProjects } from "@/src/components/HomePreviews";

const stats = [["6+", "Projects built"], ["2×", "First-place wins"], ["Full-Stack + AI", "Focus"], ["2026", "Graduating"]];
const expertise = [
  { title: "Frontend Development", text: "Responsive, accessible interfaces built with modern web technologies.", technologies: ["React", "TypeScript", "Tailwind"], icon: Code2 },
  { title: "Backend Development", text: "Reliable APIs, application logic, and structured data workflows.", technologies: ["Django", "REST APIs", "PostgreSQL"], icon: Database },
  { title: "Mobile & AI Products", text: "Practical mobile experiences enhanced with cloud services and AI.", technologies: ["React Native", "Firebase", "AI APIs"], icon: Smartphone },
];

export function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <FeaturedProjects />

      <section className="home-section !pb-8 !pt-6 sm:!pb-10" aria-label="Portfolio highlights">
        <div className="grid overflow-hidden rounded-2xl border border-borderSoft bg-bgCard/50 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="flex min-h-32 flex-col justify-center border-b border-borderSoft p-5 text-center last:border-0 sm:border-r sm:p-6 lg:border-b-0">
              <p className={`font-display font-semibold text-primary ${value.length > 6 ? "text-2xl md:text-3xl" : "text-4xl"}`}>{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-textMuted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section !pt-8 sm:!pt-10" aria-labelledby="expertise-title">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center"><p className="eyebrow">Core expertise</p><h2 id="expertise-title" className="section-title mt-4">How I turn ideas into products.</h2></div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {expertise.map(({ title, text, technologies, icon: Icon }) => (
              <article key={title} className="group rounded-2xl border border-borderSoft bg-bgCard/60 p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/25 sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon size={19} aria-hidden="true" /></div>
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-textBody">{text}</p>
                <p className="mt-5 border-t border-borderSoft pt-4 text-xs font-medium uppercase tracking-[0.1em] text-textMuted">{technologies.join(" · ")}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <AboutPreview />

      <section className="home-section !pt-10">
        <div className="rounded-3xl border border-primary/25 bg-primary/[0.07] px-7 py-12 text-center md:px-12 md:py-14">
          <p className="eyebrow">Let&apos;s build something together</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">Let&apos;s build something meaningful.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-textBody">I&apos;m open to internships, collaborations, and opportunities to build useful products and grow as a developer.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/contact-me" className="button-primary">Get in touch <ArrowUpRight size={17} /></Link><Link href="/projects" className="button-secondary">View projects</Link></div>
        </div>
        <footer className="mt-12 flex flex-col gap-3 border-t border-borderSoft pt-7 text-xs uppercase tracking-[0.14em] text-textMuted sm:flex-row sm:justify-between">
          <p>© 2026 Khin Myat Thu</p><p>Just a girl full of dreams, walking toward them one commit at a time. 🌱</p>
        </footer>
      </section>
    </main>
  );
}
