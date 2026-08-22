import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { ProjectPreview } from "./ProjectCard";

export default function ProjectGridCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.25) }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block" aria-label={`Open ${project.title} case study`}>
        <div className="project-media aspect-[16/10] overflow-hidden rounded-2xl border border-borderSoft bg-bgCard">
          <ProjectPreview project={project} index={index} />
        </div>
        <div className="pt-5">
          <div className="mb-2 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <span>{project.category}</span>
            <span className="text-textMuted">{project.date.split("–").pop()?.trim()}</span>
          </div>
          <h2 className="font-display text-2xl font-medium leading-tight transition-colors group-hover:text-primary">
            {project.title}
          </h2>
          <p className="mt-3 line-clamp-2 leading-relaxed text-textBody">{project.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
            View case study <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
