import { motion } from "framer-motion";
import { ArrowUpRight, Image as ImageIcon, Play } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../data/projects";

export function ProjectPreview({ project, index, fit = "cover" }: { project: Project; index: number; fit?: "cover" | "contain" }) {
  const { media } = project;

  if (media.type === "video" && media.src) {
    return (
      <video
        className="h-full w-full object-cover"
        controls
        preload="metadata"
        poster={media.poster}
        aria-label={media.alt}
      >
        <source src={media.src} />
      </video>
    );
  }

  if (media.type === "image" && media.src) {
    return (
      <img
        className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
        src={media.src}
        alt={media.alt}
        loading="lazy"
      />
    );
  }

  return (
    <div className={`project-preview project-preview-${(index % 3) + 1}`} role="img" aria-label={media.alt}>
      <div className="project-browser">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <i /><i /><i />
          <span className="ml-2 h-1.5 w-24 rounded-full bg-white/10" />
        </div>
        <div className="grid flex-1 grid-cols-[0.32fr_1fr] gap-2 p-3">
          <div className="rounded-md bg-white/[0.055] p-2">
            <span className="mb-2 block h-2 w-3/4 rounded-full bg-white/15" />
            <span className="mb-1 block h-1.5 rounded-full bg-white/[0.08]" />
            <span className="block h-1.5 w-4/5 rounded-full bg-white/[0.08]" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md bg-primary/20" />
            <div className="rounded-md bg-white/[0.07]" />
            <div className="col-span-2 rounded-md bg-white/[0.055]" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
        {media.type === "video" ? <Play size={13} fill="currentColor" /> : <ImageIcon size={13} />}
        {media.type === "video" ? "Demo video" : "Product preview"}
      </div>
      {media.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white shadow-2xl backdrop-blur-md">
            <Play className="ml-1" size={23} fill="currentColor" />
          </span>
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.5 }}
      className="group grid gap-7 border-t border-borderMedium py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:py-16"
    >
      <div className={index % 2 ? "lg:order-2" : ""}>
        <a href={`#/projects/${project.slug}`} className="project-media block aspect-[16/10] overflow-hidden rounded-2xl border border-borderSoft bg-bgCard" aria-label={`View ${project.title} case study`}>
          <ProjectPreview project={project} index={index} />
        </a>
      </div>

      <div className={index % 2 ? "lg:order-1" : ""}>
        <div className="mb-5 flex items-center gap-4">
          <span className="font-display text-xl italic text-textMuted">0{index + 1}</span>
          <span className="h-px flex-1 bg-borderSoft" />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {project.category}
          </span>
        </div>
        <p className="mb-3 text-xs uppercase tracking-[0.15em] text-primary">{project.date}</p>
        <h3 className="font-display text-3xl font-medium leading-tight transition-colors group-hover:text-primary md:text-4xl">
          <a href={`#/projects/${project.slug}`}>{project.title}</a>
        </h3>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-textBody">{project.description}</p>
        <dl className="mt-6 grid gap-4 border-y border-borderSoft py-5 sm:grid-cols-2">
          <div>
            <dt className="label-sm text-primary">Problem</dt>
            <dd className="mt-2 line-clamp-2 text-sm leading-relaxed text-textDim">{project.challenge}</dd>
          </div>
          <div>
            <dt className="label-sm text-primary">What I built</dt>
            <dd className="mt-2 line-clamp-2 text-sm leading-relaxed text-textDim">{project.solution}</dd>
          </div>
          {project.role && (
            <div className="sm:col-span-2">
              <dt className="label-sm text-primary">My contribution</dt>
              <dd className="mt-2 text-sm text-textMain">{project.role}</dd>
            </div>
          )}
        </dl>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => <span key={tech} className="label-tag">{tech}</span>)}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href={`#/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-textMain transition-colors hover:text-primary">
            View case study <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link text-sm">Live demo <ArrowUpRight size={15} /></a>}
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-link text-sm"><FaGithub size={15} /> GitHub <ArrowUpRight size={14} /></a>}
        </div>
      </div>
    </motion.article>
  );
}
