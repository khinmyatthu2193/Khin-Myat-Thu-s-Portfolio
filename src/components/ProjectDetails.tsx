import { ArrowLeft, ArrowUpRight, Check, Play } from "lucide-react";
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
          {project.subtitle && <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-primary">{project.subtitle}</p>}
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
            {(project.projectType || project.role) && (
              <dl className="mt-10 grid gap-6 sm:grid-cols-2">
                {project.projectType && <div><dt className="label-sm text-primary">Project type</dt><dd className="mt-2 text-textMain">{project.projectType}</dd></div>}
                {project.role && <div><dt className="label-sm text-primary">My role</dt><dd className="mt-2 text-textMain">{project.role}</dd></div>}
              </dl>
            )}
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

        {project.responsibilities && (
          <section className="section-shell grid gap-12 border-b border-borderSoft lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
            <div><p className="eyebrow">What I owned</p><h2 className="mt-4 font-display text-4xl">Full-stack delivery.</h2></div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.responsibilities.map((item) => <li key={item} className="flex gap-3 rounded-xl border border-borderSoft bg-bgCard/60 p-4 text-textBody"><Check className="mt-0.5 shrink-0 text-primary" size={17} />{item}</li>)}
            </ul>
          </section>
        )}

        {(project.customerFeatures || project.adminFeatures) && (
          <section className="section-shell border-b border-borderSoft">
            <p className="eyebrow">Key features</p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {[{ title: "Customer experience", items: project.customerFeatures }, { title: "Administration", items: project.adminFeatures }].map(({ title, items }) => items && (
                <div key={title} className="rounded-2xl border border-borderSoft bg-bgCard/60 p-7">
                  <h2 className="font-display text-3xl">{title}</h2>
                  <ul className="mt-6 grid gap-3">{items.map((item) => <li key={item} className="flex gap-3 text-textBody"><Check className="mt-0.5 shrink-0 text-primary" size={17} />{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="section-shell">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Product gallery</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Screens and flow.</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {(project.gallery ?? [undefined, undefined]).map((media, index) => (
              <figure key={media?.src ?? index} className="overflow-hidden rounded-2xl border border-borderSoft bg-bgCard">
                <div className="aspect-[16/10]">
                  <ProjectPreview project={{ ...project, media: media ?? { ...project.media, type: "image", src: undefined } }} index={index + 1} />
                </div>
                {media?.alt && <figcaption className="border-t border-borderSoft px-4 py-3 text-sm text-textDim">{media.alt}</figcaption>}
              </figure>
            ))}
          </div>
        </section>

        {(project.stack || project.highlights || project.challenges) && (
          <section className="section-shell grid gap-12 border-t border-borderSoft lg:grid-cols-3">
            {project.stack && <div><p className="eyebrow">Technology stack</p><div className="mt-6 space-y-5">{project.stack.map((group) => <div key={group.label}><h3 className="text-sm font-semibold text-textMain">{group.label}</h3><p className="mt-1 text-textBody">{group.items.join(" · ")}</p></div>)}</div></div>}
            {project.highlights && <div><p className="eyebrow">Development highlights</p><ul className="mt-6 space-y-3">{project.highlights.map((item) => <li key={item} className="flex gap-3 text-textBody"><Check className="mt-0.5 shrink-0 text-primary" size={17} />{item}</li>)}</ul></div>}
            {project.challenges && <div><p className="eyebrow">Challenges & learning</p><ul className="mt-6 space-y-3">{project.challenges.map((item) => <li key={item} className="flex gap-3 text-textBody"><span className="text-primary">—</span>{item}</li>)}</ul></div>}
          </section>
        )}

        <section className="section-shell pt-0">
          <div className="grid overflow-hidden rounded-3xl border border-borderSoft bg-bgCard lg:grid-cols-[0.78fr_1.22fr]">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="eyebrow">Demo walkthrough</p>
              <h2 className="mt-4 font-display text-4xl">See how it works.</h2>
              <p className="mt-5 leading-relaxed text-textBody">
                {project.demoVideo ? "Watch the complete shopping journey, from browsing products to managing orders." : "This area is ready for the project walkthrough. Add a video source and poster in the project data to publish it."}
              </p>
            </div>
            <div className="relative flex aspect-video items-center justify-center bg-bgSoft">
              {project.demoVideo || (project.media.type === "video" && project.media.src) ? (
                <video className="h-full w-full object-cover" controls preload="metadata" poster={project.media.src ?? project.media.poster}>
                  <source src={project.demoVideo ?? project.media.src} />
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
