import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";
import { assetUrl } from "@/lib/asset-url";

export function ProjectPreview({ project, index, fit }: { project: Project; index: number; fit?: "cover" | "contain" }) {
  const { media } = project;
  const imageFit = fit ?? media.fit ?? "cover";

  if (media.type === "video" && media.src) {
    return (
      <video
        className="h-full w-full object-cover"
        controls
        preload="metadata"
        poster={media.poster ? assetUrl(media.poster) : undefined}
        aria-label={media.alt}
      >
        <source src={assetUrl(media.src)} />
      </video>
    );
  }

  if (media.type === "image" && media.src) {
    return (
      <Image
        className={imageFit === "contain" ? "object-contain" : "object-cover"}
        src={media.src}
        alt={media.alt}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 700px"
        placeholder={typeof media.src === "string" ? "empty" : "blur"}
      />
    );
  }

  return (
    <div className={`project-cover project-cover-${(index % 4) + 1}`} role="img" aria-label={media.alt}>
      <div className="project-cover-orbit" aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
        <span className="w-fit rounded-full border border-white/15 bg-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
          {project.category}
        </span>
        <div>
          <span className="mb-3 block h-px w-12 bg-white/45" />
          <span className="block max-w-[85%] font-display text-2xl font-medium leading-tight text-white sm:text-3xl">
            {project.title}
          </span>
        </div>
      </div>
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
        <Link href={`/projects/${project.slug}`} className="project-media block aspect-[16/10] overflow-hidden rounded-2xl border border-borderSoft bg-bgCard" aria-label={`View ${project.title} case study`}>
          <ProjectPreview project={project} index={index} />
        </Link>
      </div>

      <div className={index % 2 ? "lg:order-1" : ""}>
        <div className="mb-5 flex items-center gap-4">
          <span className="font-display text-xl italic text-textMuted">0{index + 1}</span>
          <span className="h-px flex-1 bg-borderSoft" />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {project.category}
          </span>
        </div>
        <p className="mb-3 text-xs uppercase tracking-[0.15em] text-primary">{project.status}{project.date ? ` / ${project.date}` : ""}</p>
        <h3 className="font-display text-3xl font-medium leading-tight transition-colors group-hover:text-primary md:text-4xl">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-textBody">{project.description}</p>
        <dl className="mt-6 grid gap-4 border-y border-borderSoft py-5 sm:grid-cols-2">
          <div>
            <dt className="label-sm text-primary">Problem</dt>
            <dd className="mt-2 line-clamp-2 text-sm leading-relaxed text-textDim">{project.challenge}</dd>
          </div>
          <div>
            <dt className="label-sm text-primary">Project direction</dt>
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
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-textMain transition-colors hover:text-primary">
            View case study <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link text-sm">Live demo <ArrowUpRight size={15} /></a>}
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-link text-sm"><FaGithub size={15} /> GitHub <ArrowUpRight size={14} /></a>}
        </div>
      </div>
    </motion.article>
  );
}
