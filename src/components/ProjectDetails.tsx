import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { assetUrl } from "@/lib/asset-url";
import type { Project } from "../data/projects";
import { ProjectPreview } from "./ProjectCard";

export default function ProjectDetails({ project }: { project: Project }) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!activeImage) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setActiveImage(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeImage]);

  return (
    <main id="main-content" className="relative z-10">
      <article>
        <header className="section-shell pb-10 pt-28 md:pb-14 md:pt-36">
          <Link href="/projects" className="mb-10 inline-flex items-center gap-2 text-sm text-textDim transition-colors hover:text-primary">
            <ArrowLeft size={17} /> All projects
          </Link>
          <p className="eyebrow">{project.category} / {project.status}{project.date ? ` / ${project.date}` : ""}</p>
          {project.subtitle && <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-primary">{project.subtitle}</p>}
          <h1 className="mt-5 max-w-5xl font-display text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-textBody md:text-2xl">{project.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-bg">
                <FaGithub size={17} /> View repository <ArrowUpRight size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-borderMedium px-5 py-3 text-sm font-semibold">
                Live demo <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </header>

        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="project-media aspect-[16/9] min-h-[280px] overflow-hidden rounded-3xl border border-borderSoft bg-[#f5eeee]">
            <ProjectPreview project={project} index={0} fit="contain" />
          </div>
        </section>

        <section className="section-shell border-b border-borderSoft">
          <div className="mb-10 flex flex-col gap-5 border-b border-borderSoft pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Project overview</p>
              <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight md:text-4xl">The idea behind the experience.</h2>
            </div>
            <div className="flex max-w-xl flex-wrap gap-2 md:justify-end">
              {project.technologies.map((tech) => <span key={tech} className="label-tag">{tech}</span>)}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-borderSoft bg-bgCard/60 p-7 md:p-9"
            >
              <p className="font-display text-2xl leading-relaxed text-textMain md:text-3xl">{project.overview}</p>
              {(project.projectType || project.role) && (
                <dl className="mt-8 grid gap-5 border-t border-borderSoft pt-7 sm:grid-cols-2">
                  {project.projectType && <div><dt className="label-sm text-primary">Project type</dt><dd className="mt-2 text-sm leading-relaxed text-textMain">{project.projectType}</dd></div>}
                  {project.role && <div><dt className="label-sm text-primary">My role</dt><dd className="mt-2 text-sm leading-relaxed text-textMain">{project.role}</dd></div>}
                </dl>
              )}
            </motion.div>

            <div className="grid gap-4">
              {[
                { number: "01", title: "The challenge", copy: project.challenge },
                { number: "02", title: "The solution", copy: project.solution },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group grid gap-5 rounded-2xl border border-borderSoft bg-bgCard/40 p-6 transition-colors hover:border-primary/30 hover:bg-bgCard/70 sm:grid-cols-[auto_1fr] md:p-7"
                >
                  <span className="font-display text-2xl text-primary/70">{item.number}</span>
                  <div>
                    <h3 className="label-sm text-primary">{item.title}</h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-textBody">{item.copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {project.responsibilities && (
          <section className="section-shell grid gap-12 border-b border-borderSoft lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
            <div><p className="eyebrow">What I owned</p><h2 className="mt-4 font-display text-3xl md:text-4xl">Full-stack delivery.</h2></div>
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

        {project.gallery && project.gallery.length > 0 && <section className="section-shell">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Product gallery</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Screens and flow.</h2>
            </div>
          </div>
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {project.gallery.map((media, index) => (
              <motion.figure
                key={media.alt}
                variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group overflow-hidden rounded-2xl border border-borderSoft bg-bgCard transition-colors hover:border-primary/40"
              >
                <button
                  type="button"
                  className="relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden text-left"
                  onClick={() => media.src && setActiveImage(assetUrl(media.src))}
                  aria-label={`Expand ${media.alt}`}
                  disabled={!media.src}
                >
                  <ProjectPreview project={{ ...project, media }} index={index + 1} fit="contain" />
                  {media.src && <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white opacity-0 backdrop-blur-md transition-all group-hover:translate-y-0 group-hover:opacity-100"><Maximize2 size={16} /></span>}
                </button>
                <figcaption className="flex items-center justify-between border-t border-borderSoft px-4 py-3 text-sm text-textDim"><span>{media.alt}</span><span className="text-xs text-primary">0{index + 1}</span></figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </section>}

        {(project.stack || project.highlights || project.challenges) && (
          <section className="section-shell grid gap-12 border-t border-borderSoft lg:grid-cols-3">
            {project.stack && <div><p className="eyebrow">Technology stack</p><div className="mt-6 space-y-5">{project.stack.map((group) => <div key={group.label}><h3 className="text-sm font-semibold text-textMain">{group.label}</h3><p className="mt-1 text-textBody">{group.items.join(" · ")}</p></div>)}</div></div>}
            {project.highlights && <div><p className="eyebrow">Development highlights</p><ul className="mt-6 space-y-3">{project.highlights.map((item) => <li key={item} className="flex gap-3 text-textBody"><Check className="mt-0.5 shrink-0 text-primary" size={17} />{item}</li>)}</ul></div>}
            {project.challenges && <div><p className="eyebrow">Challenges & learning</p><ul className="mt-6 space-y-3">{project.challenges.map((item) => <li key={item} className="flex gap-3 text-textBody"><span className="text-primary">—</span>{item}</li>)}</ul></div>}
          </section>
        )}

      </article>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[999] overflow-y-auto bg-black/90 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Expanded project screenshot"
          >
            <div className="flex min-h-full w-full items-start justify-center py-14 sm:py-10">
              <motion.img
                src={activeImage}
                alt="Expanded project screen"
                className="h-auto max-h-[calc(100dvh-7rem)] max-w-full rounded-xl object-contain shadow-2xl"
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={(event) => event.stopPropagation()}
              />
            </div>
            <button type="button" onClick={() => setActiveImage(null)} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20" aria-label="Close screenshot">
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
