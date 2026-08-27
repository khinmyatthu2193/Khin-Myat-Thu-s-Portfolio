import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import type { Project } from "../data/projects";
import { ProjectPreview } from "./ProjectCard";

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="featured-project group rounded-[1.75rem] border border-borderMedium bg-bgCard/70 p-4 sm:p-6 lg:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[1.22fr_1fr] lg:items-center lg:gap-10 xl:gap-14">
        <div className="min-w-0">
          <Link
            href={`/projects/${project.slug}`}
            className="featured-project-frame block overflow-hidden rounded-2xl border border-borderMedium bg-bgSoft/70 p-2.5 sm:p-4"
            aria-label={`View ${project.title} project details`}
          >
            <span className="mb-3 flex items-center gap-1.5 px-1" aria-hidden="true">
              <i className="h-2.5 w-2.5 rounded-full bg-primary/55" />
              <i className="h-2.5 w-2.5 rounded-full bg-accent/45" />
              <i className="h-2.5 w-2.5 rounded-full bg-borderMedium" />
              <i className="ml-2 h-1.5 w-24 rounded-full bg-borderMedium sm:w-36" />
            </span>
            <span className="relative block aspect-[16/9] overflow-hidden rounded-xl bg-[#eef3e8]">
              <ProjectPreview project={project} index={0} fit="contain" />
            </span>
          </Link>

          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-3">
              {project.gallery.slice(0, 2).map((media, index) => (
                <div key={media.alt} className="relative aspect-[16/9] overflow-hidden rounded-xl border border-borderSoft bg-bgSoft/70 p-1.5">
                  <ProjectPreview project={{ ...project, media }} index={index + 1} fit="contain" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="min-w-0 py-1 sm:py-3">
          <p className="eyebrow !text-[0.6875rem]">Featured project</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="project-meta-pill">{project.category}</span>
            <span className="project-meta-pill">{project.status}</span>
          </div>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,calc(1.55rem+0.9vw),2rem)] font-medium leading-[1.08] tracking-[-0.03em]">
            {project.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-textBody sm:text-lg">{project.description}</p>

          <dl className="mt-6 grid gap-4 border-y border-borderSoft py-5 sm:grid-cols-2">
            {project.projectType && <div><dt className="text-xs font-semibold uppercase tracking-[0.13em] text-textMuted">Project type</dt><dd className="mt-1.5 text-sm font-medium text-textMain">{project.projectType}</dd></div>}
            {project.role && <div><dt className="text-xs font-semibold uppercase tracking-[0.13em] text-textMuted">My role</dt><dd className="mt-1.5 text-sm font-medium text-textMain">{project.role}</dd></div>}
          </dl>

          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.13em] text-textMain">Tech stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => <span key={technology} className="project-tech-chip">{technology}</span>)}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href={`/projects/${project.slug}`} className="button-primary featured-action">
              View details <ArrowRight size={17} aria-hidden="true" />
            </Link>
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-secondary">Live demo <ArrowUpRight size={16} aria-hidden="true" /></a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="social-button"><FaGithub size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
