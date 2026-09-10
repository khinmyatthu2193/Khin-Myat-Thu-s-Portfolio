import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import type { Project } from "../data/projects";
import { ProjectPreview } from "./ProjectCard";

const MAX_VISIBLE_TECHNOLOGIES = 3;

export default function ProjectGridCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();
  const [revealed, setRevealed] = useState(false);
  const technologies = project.technologies.slice(0, MAX_VISIBLE_TECHNOLOGIES);
  const remainingTechnologyCount = project.technologies.length - technologies.length;

  return (
    <motion.article
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      animate={revealed || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      viewport={{ once: true, amount: 0.12 }}
      onViewportEnter={() => setRevealed(true)}
      onFocusCapture={() => setRevealed(true)}
      style={{ pointerEvents: revealed || reduceMotion ? "auto" : "none" }}
      exit={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="project-archive-card group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-borderSoft bg-bgCard/65"
    >
      <div className="project-card-media relative block aspect-[16/9] shrink-0 overflow-hidden bg-bgSoft">
        <ProjectPreview project={project} index={index} fit="cover" sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 420px" />
        <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          {project.status === "In Development" && <span className="project-image-badge">In development</span>}
          <span className="project-image-badge ml-auto">{project.category}</span>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-[22px] sm:p-6">
        <h3 className="min-h-[2.4em] break-words font-display text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.02em] transition-colors group-hover:text-primary">
          <span>{project.title}</span>
          {project.subtitle && <span className="mt-1 block font-sans text-sm font-medium leading-5 tracking-normal text-textDim">{project.subtitle}</span>}
        </h3>
        <p className="mt-2 min-h-12 line-clamp-2 text-[15px] leading-6 text-textBody">{project.description}</p>

        {technologies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5" aria-label={`${project.title} technology stack`}>
            {technologies.map((technology) => <span key={technology} className="project-tech-chip">{technology}</span>)}
            {remainingTechnologyCount > 0 && <span className="project-tech-chip project-tech-chip-more" aria-label={`${remainingTechnologyCount} more technologies`}>+{remainingTechnologyCount}</span>}
          </div>
        )}

        <div className="mt-auto pt-5">
          {project.date && <p className="text-sm font-medium leading-5 tabular-nums text-textDim">{project.date}</p>}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-borderSoft pt-2 text-sm font-semibold">
            <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} project details`} className="project-card-action inline-flex min-h-11 items-center gap-2 text-textMain transition-colors hover:text-primary">
              View project <ArrowRight size={16} aria-hidden="true" />
            </Link>
            {(project.liveUrl || project.github) && (
              <div className="ml-auto flex items-center gap-3 text-xs">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-card-external relative z-20 inline-flex min-h-11 items-center gap-1.5 text-textDim transition-colors hover:text-primary">Live <ArrowUpRight size={15} aria-hidden="true" /></a>}
                {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="project-card-external relative z-20 inline-flex min-h-11 items-center gap-1.5 text-textDim transition-colors hover:text-primary"><FaGithub size={15} aria-hidden="true" /> GitHub</a>}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
