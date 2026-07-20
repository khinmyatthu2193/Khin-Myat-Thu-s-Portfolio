import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project { title: string; date: string; description: string; github: string; technologies?: string[]; }

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.25) }}
      className="project-row group grid gap-5 border-b border-borderMedium py-9 md:grid-cols-[80px_1fr_1fr_48px] md:items-start md:gap-8"
    >
      <span className="font-display text-xl italic text-textMuted">0{index + 1}</span>
      <div>
        <p className="mb-2 text-xs uppercase tracking-[0.15em] text-primary">{project.date}</p>
        <h3 className="font-display text-2xl font-medium leading-tight transition-colors group-hover:text-primary md:text-3xl">{project.title}</h3>
      </div>
      <div>
        <p className="leading-relaxed text-textDim">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies?.map((tech) => <span key={tech} className="rounded-full border border-borderSoft px-3 py-1 text-[11px] uppercase tracking-wider text-textMuted">{tech}</span>)}
        </div>
      </div>
      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`} className="flex h-11 w-11 items-center justify-center rounded-full border border-borderMedium text-textDim transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-bg">
        <ArrowUpRight size={19} />
      </a>
    </motion.article>
  );
}
