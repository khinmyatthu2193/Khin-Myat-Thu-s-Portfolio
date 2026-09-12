"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { assetUrl } from "@/lib/asset-url";
import type { Project, ProjectMedia } from "../data/projects";
import { ProjectPreview } from "./ProjectCard";
import styles from "./ProjectDetails.module.css";

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return <section className={styles.section} aria-labelledby={id}>
    <div className={styles.sectionHeading}><p className="eyebrow">{label}</p><h2 id={id}>{title}</h2></div>
    {children}
  </section>;
}

function Actions({ project, back = false }: { project: Project; back?: boolean }) {
  if (!project.github && !project.liveUrl && !back) return null;
  return <div className={styles.actions}>
    {project.github && <a className="button-primary" href={project.github} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} aria-hidden="true" /></a>}
    {project.liveUrl && <a className="button-secondary" href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} aria-hidden="true" /></a>}
    {back && <Link href="/projects" className="button-secondary">Back to Projects <ArrowLeft size={16} aria-hidden="true" /></Link>}
  </div>;
}

const technologyGroups: Record<string, string[]> = {
  Frontend: ["React", "TypeScript", "JavaScript", "HTML & CSS", "TanStack Start"],
  Mobile: ["React Native", "Expo", "Kotlin", "Android"],
  "UI & animation": ["Tailwind CSS", "Bootstrap", "Framer Motion", "Motion", "Recharts", "Lucide React"],
  Backend: ["Node.js", "Express", "Python", "Django", "Django Channels"],
  "Data & storage": ["Prisma", "PostgreSQL", "SQLite", "Firebase", "Supabase", "Supabase Storage", "Appwrite Storage", "Local Storage", "JSON"],
  "State & architecture": ["Zustand", "TanStack Query", "MVVM"],
  "APIs & libraries": ["OpenRouter", "WebSockets", "Web Audio API", "NLTK", "pandas", "openpyxl"],
  Tooling: ["Vite", "vite-plugin-pwa"],
};

function getStack(project: Project) {
  const explicit = (project.stack ?? []).filter(group => group.items.length);
  const assigned = new Set(explicit.flatMap(group => group.items));
  const remaining = project.technologies.filter(tech => !assigned.has(tech));
  const grouped = Object.entries(technologyGroups).map(([label, technologies]) => ({ label, items: remaining.filter(tech => technologies.includes(tech)) })).filter(group => group.items.length);
  const known = new Set(grouped.flatMap(group => group.items));
  const other = remaining.filter(tech => !known.has(tech));
  return [...explicit, ...grouped, ...(other.length ? [{ label: "Other technologies", items: other }] : [])];
}

export default function ProjectDetails({ project }: { project: Project }) {
  const [activeImage, setActiveImage] = useState<ProjectMedia | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!activeImage) return;
    const element = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [activeImage]);

  const stack = getStack(project);
  const workflows = (project.featuredWorkflows ?? []).filter(item => item.media.src);
  const featuredSources = new Set(workflows.map(item => assetUrl(item.media.src!)));
  const gallery = (project.gallery ?? []).filter(media => media.src && !featuredSources.has(assetUrl(media.src)) && (!project.media.src || assetUrl(media.src) !== assetUrl(project.media.src)));
  const features = project.features?.length ? project.features : [
    ...(project.highlights ?? []).map(description => ({ title: "", description })),
    ...(project.customerFeatures ?? []).map(description => ({ title: "Customer experience", description })),
    ...(project.adminFeatures ?? []).map(description => ({ title: "Administration", description })),
  ];
  // Each metadata field has one presentation owner. Dates belong to the eyebrow;
  // type and short context belong to the hero; ownership belongs to the snapshot.
  const heroContext = [...new Set([project.projectType, project.event, project.context].filter(Boolean))];
  const snapshot = [
    { label: "Role", value: project.role }, { label: "Team", value: project.teamType },
    { label: "Status", value: project.status }, { label: "Course", value: project.course },
  ].filter(item => item.value && !heroContext.includes(item.value) && item.value !== project.date);
  const responsibilities = [...new Set(project.responsibilities ?? [])].filter(item =>
    item.trim() && item.trim().toLowerCase() !== project.role?.trim().toLowerCase()
  );
  const narrative = [{ title: "The problem", description: project.challenge }, { title: "The approach", description: project.solution }, { title: "The result", description: project.outcome }].filter(item => item.description);

  function mediaFigure(media: ProjectMedia, hero = false) {
    if (!media.src) return <div className={styles.placeholder}><ProjectPreview project={{ ...project, media }} index={0} /></div>;
    if (media.type === "video") return <figure className={styles.figure}><video controls preload="metadata" poster={media.poster ? assetUrl(media.poster) : undefined} aria-label={media.alt} src={assetUrl(media.src)} /><figcaption>{media.alt}</figcaption></figure>;
    const portrait = typeof media.src !== "string" && media.src.height > media.src.width;
    return <figure className={`${styles.figure} ${portrait ? styles.portrait : ""}`}>
      <button type="button" onClick={() => setActiveImage(media)} aria-label={`Expand ${media.alt}`} className={styles.imageButton}>
        {typeof media.src === "string" ?
          // String assets have no intrinsic dimensions; native sizing preserves their ratio.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={media.src} alt={media.alt} loading={hero ? "eager" : "lazy"} /> :
          <Image src={media.src} alt={media.alt} preload={hero} sizes={hero ? "(max-width: 767px) 100vw, 900px" : "(max-width: 767px) 100vw, 720px"} />}
        <span className={styles.expand}><Maximize2 size={15} aria-hidden="true" /><span>Expand</span></span>
      </button>
      <figcaption>{media.alt}</figcaption>
    </figure>;
  }

  return <main id="main-content" className={styles.page}>
    <article>
      <header className={styles.hero}>
        <Link href="/projects" className="text-link mb-7 w-fit text-sm"><ArrowLeft size={16} aria-hidden="true" /> Back to Projects</Link>
        <p className="eyebrow">{[project.category, project.date].filter(Boolean).join(" / ")}</p>
        <h1>{project.title}</h1>
        {project.subtitle && <p className="mt-3 font-medium text-primary">{project.subtitle}</p>}
        <p className={styles.description}>{project.description}</p>
        <Actions project={project} />
        {heroContext.length > 0 && <p className={styles.heroContext}>{heroContext.join(" \u00b7 ")}</p>}
      </header>
      <div className={styles.heroVisual}>{mediaFigure(project.media, true)}</div>
      {snapshot.length > 0 && <section className={styles.snapshot} aria-labelledby="snapshot"><h2 id="snapshot" className="eyebrow">Project Snapshot</h2><dl>{snapshot.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></section>}
      {responsibilities.length > 0 && <Section id="contribution" label="My contribution" title="What I worked on.">
        <ol className={styles.contributions}>{responsibilities.map((item, index) => <li className={styles.card} key={item}><span className={styles.number}>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
      </Section>}
      {stack.length > 0 && <Section id="tech-stack" label="Tech stack" title="Built with."><div className={styles.stack}>{stack.map(group => <div key={group.label}><h3>{group.label}</h3><ul>{group.items.map(tech => <li className="project-tech-chip" key={tech}>{tech}</li>)}</ul></div>)}</div></Section>}
      {project.overview && <Section id="overview" label="Project overview" title={project.overviewTitle ?? project.title.split(":")[0]}><p className={styles.prose}>{project.overview}</p></Section>}
      {narrative.length > 0 && <Section id="approach" label="Problem & approach" title="From need to implementation."><div className={styles.contributions}>{narrative.map(item => <div className={styles.card} key={item.title}><h3>{item.title}</h3><p>{item.description}</p></div>)}</div></Section>}
      {features.length > 0 && <Section id="features" label="Key features" title="Core capabilities."><ul className={styles.grid}>{features.map((item, index) => <li className={styles.card} key={item.description}>{item.title ? <h3>{item.title}</h3> : <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>}<p>{item.description}</p></li>)}</ul></Section>}
      {workflows.length > 0 && <Section id="workflows" label="Featured workflows" title="A closer look at the product."><div className={styles.workflows}>{workflows.map((item, index) => <div className={styles.workflow} key={item.title}><div className={styles.workflowCopy}><span className={styles.number}>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></div>{mediaFigure(item.media)}</div>)}</div></Section>}
      {gallery.length > 0 && <Section id="gallery" label="More screens" title="Explore the details."><div className={styles.gallery}>{gallery.map(media => <div key={assetUrl(media.src!)}>{mediaFigure(media)}</div>)}</div></Section>}
      {!!project.technicalHighlights?.length && <Section id="technical" label="Technical highlights" title="Engineering decisions."><div className={styles.grid}>{project.technicalHighlights.map(item => <div className={styles.card} key={item.title}><h3>{item.title}</h3><p>{item.description}</p></div>)}</div></Section>}
      {!!(project.challenges?.length || project.learnings?.length) && <Section id="learnings" label="Challenges & learnings" title="Lessons from the build."><ul className={styles.contributions}>{[...(project.challenges ?? []), ...(project.learnings ?? [])].map(item => <li className={styles.card} key={item}>{item}</li>)}</ul></Section>}
      <section className={styles.cta} aria-labelledby="explore"><p className="eyebrow">Continue exploring</p><h2 id="explore">Explore the project.</h2><p>Continue through the available project links or explore more of my work.</p><Actions project={project} back /></section>
    </article>
    <dialog ref={dialog} className={styles.dialog} aria-label={activeImage?.alt ?? "Expanded project screenshot"} onCancel={() => setActiveImage(null)} onKeyDown={event => { if (event.key === "Tab") { event.preventDefault(); event.currentTarget.querySelector<HTMLButtonElement>("button")?.focus(); } }} onClick={event => { if (event.target === event.currentTarget) setActiveImage(null); }}>
      <button type="button" className={styles.close} onClick={() => setActiveImage(null)} aria-label="Close screenshot" autoFocus><X size={22} /></button>
      {activeImage?.src && <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assetUrl(activeImage.src)} alt={activeImage.alt} />
        <p>{activeImage.alt}</p>
      </>}
    </dialog>
  </main>;
}
