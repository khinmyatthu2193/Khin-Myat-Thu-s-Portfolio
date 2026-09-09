import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import type { Project } from "../data/projects";
import { ProjectPreview } from "./ProjectCard";

export default function FeaturedProject({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const technologies = project.technologies.slice(0, 4);
  const remainingTechnologyCount = project.technologies.length - technologies.length;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      animate={reduceMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="featured-project group relative isolate rounded-[1.75rem] border border-borderSoft bg-bgCard/70 p-4 sm:p-6 lg:p-7"
    >
      <div className="grid gap-6 lg:min-h-[344px] lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-8">
        <div className="min-w-0">
          <Link
            href={`/projects/${project.slug}`}
            className="featured-project-frame block overflow-hidden rounded-2xl border border-borderMedium bg-bgSoft/70 p-1.5"
            aria-label={`View ${project.title} project details`}
          >
            <span className="relative block aspect-[16/9] overflow-hidden rounded-xl bg-bgSoft">
              <ProjectPreview project={project} index={0} fit="contain" />
            </span>
          </Link>
        </div>

        <div className="min-w-0 py-1">
          <p className="eyebrow !text-[0.6875rem]">Featured project</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,calc(1.65rem+1vw),2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em]">
            {project.title}
          </h2>
          {project.subtitle && <p className="mt-2 text-sm font-medium leading-relaxed text-textDim">{project.subtitle}</p>}
          <p className="mt-3 text-base leading-relaxed text-textBody">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5" aria-label={`${project.title} technology stack`}>
            {technologies.map((technology) => <span key={technology} className="project-tech-chip">{technology}</span>)}
            {remainingTechnologyCount > 0 && <span className="project-tech-chip project-tech-chip-more" aria-label={`${remainingTechnologyCount} more technologies`}>+{remainingTechnologyCount}</span>}
          </div>

          {project.role && <p className="mt-4 text-sm leading-relaxed text-textBody"><span className="font-semibold text-textMain">Role:</span> {project.role}</p>}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-textDim">{project.category}</span>
            {project.status && <span className="project-meta-pill">{project.status}</span>}
            {project.date && <span className="text-sm font-medium tabular-nums text-textDim">{project.date}</span>}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Link href={`/projects/${project.slug}`} className="button-primary featured-action !px-4 !py-2.5 !text-sm">
              View project <ArrowRight size={17} aria-hidden="true" />
            </Link>
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-secondary !px-3 !py-2.5 !text-sm">Live demo <ArrowUpRight size={16} aria-hidden="true" /></a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="social-button !px-3 !py-2.5 !text-sm"><FaGithub size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
