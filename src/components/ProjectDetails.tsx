import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../data/projects";
import { ProjectPreview } from "./ProjectCard";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <main id="main-content" className="relative z-10">
      <article>
        <header className="section-shell pb-12 pt-36 md:pb-16 md:pt-44">
          <a href="#/projects" className="mb-10 inline-flex items-center gap-2 text-sm text-textDim transition-colors hover:text-primary">
            <ArrowLeft size={17} /> All projects
          </a>
          <p className="eyebrow">{project.category} / {project.date}</p>
          <h1 className="mt-5 max-w-5xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-textBody md:text-2xl">{project.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-bg">
              <FaGithub size={17} /> View repository <ArrowUpRight size={16} />
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-borderMedium px-5 py-3 text-sm font-semibold">
                Live demo <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </header>

        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="project-media aspect-[16/8] min-h-[280px] overflow-hidden rounded-3xl border border-borderSoft bg-bgCard">
            <ProjectPreview project={project} index={0} />
          </div>
        </section>

        <section className="section-shell grid gap-12 border-b border-borderSoft lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
          <div>
            <p className="eyebrow">Project overview</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((tech) => <span key={tech} className="label-tag">{tech}</span>)}
            </div>
          </div>
          <div className="max-w-3xl">
            <p className="font-display text-3xl leading-snug text-textMain md:text-4xl">{project.overview}</p>
            <div className="mt-12 grid gap-9 md:grid-cols-2">
              <div className="border-t border-borderMedium pt-5">
                <h2 className="label-sm text-primary">The challenge</h2>
                <p className="mt-4 leading-relaxed text-textBody">{project.challenge}</p>
              </div>
              <div className="border-t border-borderMedium pt-5">
                <h2 className="label-sm text-primary">The solution</h2>
                <p className="mt-4 leading-relaxed text-textBody">{project.solution}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Product gallery</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Screens and flow.</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((item) => (
              <div key={item} className="aspect-[16/10] overflow-hidden rounded-2xl border border-borderSoft bg-bgCard">
                <ProjectPreview project={{ ...project, media: { ...project.media, type: "image", src: undefined } }} index={item} />
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="grid overflow-hidden rounded-3xl border border-borderSoft bg-bgCard lg:grid-cols-[0.78fr_1.22fr]">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="eyebrow">Demo walkthrough</p>
              <h2 className="mt-4 font-display text-4xl">See how it works.</h2>
              <p className="mt-5 leading-relaxed text-textBody">
                This area is ready for the project walkthrough. Add a video source and poster in the project data to publish it.
              </p>
            </div>
            <div className="relative flex aspect-video items-center justify-center bg-bgSoft">
              {project.media.type === "video" && project.media.src ? (
                <video className="h-full w-full object-cover" controls poster={project.media.poster}>
                  <source src={project.media.src} />
                </video>
              ) : (
                <>
                  <ProjectPreview project={{ ...project, media: { ...project.media, type: "video", src: undefined } }} index={1} />
                  <span className="absolute bottom-5 right-5 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-xs text-white backdrop-blur">
                    <Play className="mr-1 inline" size={13} /> Video coming soon
                  </span>
                </>
              )}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
