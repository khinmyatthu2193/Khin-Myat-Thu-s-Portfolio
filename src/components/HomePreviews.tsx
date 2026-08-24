"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { projects } from "../data/projects";
import { achievements } from "../data/achievements";
import { ProjectPreview } from "./ProjectCard";

const featuredSlugs = ["brancy", "climbio", "joyhub"];
const featuredProjects = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

const featuredCategories: Record<string, string> = {
  brancy: "Full-Stack Web · E-Commerce",
  climbio: "Full-Stack Web · Business Management",
  joyhub: "Frontend Web · EdTech",
};

function TechnologyTags({ technologies, projectTitle }: { technologies: string[]; projectTitle: string }) {
  const [expanded, setExpanded] = useState(false);
  const visible = technologies.slice(0, 5);
  const remaining = technologies.slice(5);
  const tagClass = "rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 text-[13px] font-semibold leading-none text-primary";

  return (
    <div className="flex flex-wrap content-start gap-2.5">
      {visible.map((technology) => <span key={technology} className={tagClass}>{technology}</span>)}
      {expanded && remaining.map((technology) => <span key={technology} className={tagClass}>{technology}</span>)}
      {remaining.length > 0 && <button type="button" onClick={() => setExpanded((current) => !current)} className={`${tagClass} cursor-pointer transition-colors hover:border-primary hover:bg-primary/20`} aria-expanded={expanded} aria-label={`${expanded ? "Hide" : "Show"} ${remaining.length} more technologies for ${projectTitle}`}>{expanded ? "Show less" : `+${remaining.length} more`}</button>}
    </div>
  );
}

function SectionHeader({ eyebrow, title, description, titleId }: { eyebrow: string; title: string; description?: string; titleId: string }) {
  return (
    <div className="grid gap-5 md:grid-cols-[1fr_0.8fr] md:items-end">
      <div><p className="eyebrow">{eyebrow}</p><h2 id={titleId} className="section-title mt-4">{title}</h2></div>
      {description && <p className="max-w-xl leading-relaxed text-textBody md:justify-self-end">{description}</p>}
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <motion.section initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="home-section scroll-mt-24 border-t border-borderSoft !pt-20 md:!pt-24 lg:!pt-28" aria-labelledby="featured-projects-title">
      <header className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(280px,2fr)] md:items-end md:gap-12 lg:gap-16">
        <div className="min-w-0">
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className="eyebrow">Featured work</motion.p>
          <h2 id="featured-projects-title" className="mt-4 font-display text-[clamp(2.6rem,12vw,4rem)] font-medium leading-[0.98] tracking-[-0.035em] text-textMain md:mt-5 md:text-[clamp(3rem,5vw,5rem)]">
            <motion.span className="block" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>Projects I&apos;ve built.</motion.span>
          </h2>
        </div>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }} className="max-w-[460px] leading-relaxed text-textBody md:justify-self-start md:pb-2">A selection of practical products shaped through learning, experimentation, and real project work.</motion.p>
      </header>
      <div className="mt-10 grid auto-rows-fr gap-5 md:mt-12 md:grid-cols-2 lg:mt-14 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <motion.article key={project.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.18 + index * 0.08, ease: [0.22, 1, 0.36, 1] }} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-borderSoft bg-bgCard/45 p-3 shadow-[0_14px_35px_rgb(0_0_0/0.06)] transition-[border-color,box-shadow] duration-300 hover:border-primary/25 hover:shadow-[0_18px_38px_rgb(0_0_0/0.09)] sm:p-4">
            <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`} className="project-media block aspect-[16/10] shrink-0 overflow-hidden rounded-xl border border-borderSoft bg-bgCard"><ProjectPreview project={project} index={index} /></Link>
            <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
              <p className="label-sm min-h-8 text-primary">{featuredCategories[project.slug]}</p>
              <h3 className="mt-2 min-h-14 font-display text-2xl font-medium leading-tight"><Link href={`/projects/${project.slug}`} className="transition-colors hover:text-primary">{project.title}</Link></h3>
              <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-textBody">{project.description}</p>
              <div className="mt-4 min-h-[7.25rem]">
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-textDim">Tech stack</p>
                <TechnologyTags technologies={project.technologies} projectTitle={project.title} />
              </div>
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-borderSoft pt-4 text-sm">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-primary min-h-10 px-4 py-2" aria-label={`Open ${project.title} live project`}>View project <ArrowUpRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>}
                <a href={project.github} target="_blank" rel="noreferrer" className="button-secondary min-h-10 px-4 py-2" aria-label={`Open ${project.title} on GitHub`}><FaGithub size={15} aria-hidden="true" /> GitHub</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.38 }} className="mt-9 flex justify-center"><Link href="/projects" className="button-secondary">View all projects</Link></motion.div>
    </motion.section>
  );
}

export function AchievementsPreview() {
  const selected = achievements.filter((achievement) => achievement.featured).slice(0, 3);
  return (
    <section className="home-section border-t border-borderSoft" aria-labelledby="achievements-preview-title">
      <SectionHeader titleId="achievements-preview-title" eyebrow="Selected achievements" title="Milestones worth sharing." description="A few moments that reflect persistence, teamwork, and continued learning." />
      <div className="mt-9 border-y border-borderSoft">
        {selected.map((achievement) => (
          <Link key={achievement.slug} href={`/achievements/${achievement.slug}`} className="group grid gap-3 border-b border-borderSoft py-5 last:border-0 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Award size={17} aria-hidden="true" /></span>
            <span><span className="block font-display text-xl font-medium transition-colors group-hover:text-primary">{achievement.title}</span><span className="mt-1 block text-sm text-textMuted">{achievement.issuer} · {achievement.date}</span></span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold">View <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </div>
      <div className="mt-8 flex justify-end"><Link href="/achievements" className="button-secondary">View all achievements <ArrowUpRight size={17} /></Link></div>
    </section>
  );
}
