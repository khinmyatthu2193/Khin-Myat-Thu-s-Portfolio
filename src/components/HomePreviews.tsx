import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { projects } from "../data/projects";
import { achievements } from "../data/achievements";
import { ProjectPreview } from "./ProjectCard";

const featuredSlugs = ["brancy", "climbio", "joyhub"];
const featuredProjects = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

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
    <section className="home-section border-t border-borderSoft" aria-labelledby="featured-projects-title">
      <div className="grid gap-5 md:grid-cols-[1fr_0.8fr] md:items-end">
        <div><p className="eyebrow">Featured work</p><h2 id="featured-projects-title" className="section-title mt-4">Projects I&apos;ve built.</h2></div>
        <p className="max-w-xl leading-relaxed text-textBody md:justify-self-end">A selection of practical products shaped through learning, experimentation, and real project work.</p>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <motion.article key={project.slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="group flex h-full flex-col">
            <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`} className="project-media block aspect-[16/10] overflow-hidden rounded-2xl border border-borderSoft bg-bgCard"><ProjectPreview project={project} index={index} /></Link>
            <div className="flex flex-1 flex-col pt-5">
              <p className="label-sm text-primary">{project.category}</p>
              <h3 className="mt-2 font-display text-2xl font-medium leading-tight"><Link href={`/projects/${project.slug}`} className="transition-colors hover:text-primary">{project.title}</Link></h3>
              <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-textBody">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{project.technologies.slice(0, 4).map((technology) => <span key={technology} className="label-tag">{technology}</span>)}</div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <Link href={`/projects/${project.slug}`} className="text-link">Case study <ArrowUpRight size={15} /></Link>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link" aria-label={`Open ${project.title} live demo`}>Live demo <ArrowUpRight size={15} /></a>}
                {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-link" aria-label={`Open ${project.title} on GitHub`}><FaGithub size={14} /> GitHub</a>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-10 flex justify-end"><Link href="/projects" className="button-secondary">View all projects <ArrowUpRight size={17} /></Link></div>
    </section>
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
