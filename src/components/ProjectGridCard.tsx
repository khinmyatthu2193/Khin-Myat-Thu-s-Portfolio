import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import type { Project } from "../data/projects";
import { ProjectPreview } from "./ProjectCard";

const MAX_VISIBLE_TECHNOLOGIES = 4;

export default function ProjectGridCard({ project, index }: { project: Project; index: number }) {
  const technologies = project.technologies.slice(0, MAX_VISIBLE_TECHNOLOGIES);
  const remainingTechnologyCount = project.technologies.length - technologies.length;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.28, delay: Math.min(index * 0.035, 0.18) }}
      className="project-archive-card group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-borderSoft bg-bgCard/65"
    >
      <Link href={`/projects/${project.slug}`} className="project-card-media relative block aspect-[16/10] overflow-hidden bg-bgSoft" aria-label={`View ${project.title} project details`}>
        <ProjectPreview project={project} index={index} />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          <span className="project-meta-pill">{project.category}</span>
          <span className="project-meta-pill">{project.status}</span>
          {project.date && <span className="project-meta-pill">{project.date}</span>}
        </div>

        <h2 className="mt-4 break-words font-display text-[clamp(1.3125rem,calc(1.25rem+0.25vw),1.375rem)] font-medium leading-[1.15] tracking-[-0.02em] transition-colors group-hover:text-primary">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h2>
        <p className="mt-3 line-clamp-3 leading-relaxed text-textBody">{project.description}</p>

        {technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
            {technologies.map((technology) => <span key={technology} className="project-tech-chip">{technology}</span>)}
            {remainingTechnologyCount > 0 && <span className="project-tech-chip" aria-label={`${remainingTechnologyCount} more technologies`}>+{remainingTechnologyCount}</span>}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-borderSoft pt-5 text-sm font-semibold">
          <Link href={`/projects/${project.slug}`} className="project-card-action inline-flex items-center gap-2 text-textMain transition-colors hover:text-primary">
            View details <ArrowRight size={16} aria-hidden="true" />
          </Link>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-textDim transition-colors hover:text-primary">Live demo <ArrowUpRight size={15} aria-hidden="true" /></a>}
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-textDim transition-colors hover:text-primary"><FaGithub size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>}
        </div>
      </div>
    </motion.article>
  );
}
