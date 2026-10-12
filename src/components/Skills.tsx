"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Blocks, BrainCircuit, Languages, Smartphone, Sprout, Users } from "lucide-react";
import Link from "next/link";
import { projects } from "@/src/data/projects";
import { skillGroups, skillsProfile, type Skill } from "@/src/data/skills";
import styles from "./Skills.module.css";

const ease = [0.22, 1, 0.36, 1] as const;
const allSkills = skillGroups.flatMap((group) => group.skills);
const getSkill = (name: string): Skill => {
  const skill = allSkills.find((item) => item.name === name);
  if (!skill) throw new Error(`Missing skill data for ${name}`);
  return skill;
};
const displaySkill = (sourceName: string, displayName = sourceName): Skill => ({ ...getSkill(sourceName), name: displayName });
const toolkitGroups = [
  { id: "languages", title: "Programming Languages", description: "The languages I use to shape products and solve problems.", skills: [displaySkill("JavaScript"), displaySkill("TypeScript"), displaySkill("Python"), displaySkill("Kotlin")] },
  { id: "frontend", title: "Frontend", description: "Interface foundations for responsive web experiences.", skills: [displaySkill("React", "React.js"), displaySkill("HTML", "HTML5"), displaySkill("CSS", "CSS3"), displaySkill("Bootstrap"), displaySkill("Tailwind CSS")] },
  { id: "backend", title: "Backend", description: "Server-side tools and API thinking behind connected products.", skills: [displaySkill("Node.js"), displaySkill("Express.js"), displaySkill("Django"), displaySkill("REST API", "REST APIs")] },
  { id: "mobile", title: "Mobile", description: "Cross-platform foundations for useful mobile tools.", skills: [displaySkill("React Native"), displaySkill("Expo")] },
  { id: "database", title: "Database & ORM", description: "Data storage and modeling tools used across my projects.", skills: [displaySkill("MySQL"), displaySkill("PostgreSQL"), displaySkill("Firebase"), displaySkill("Supabase"), displaySkill("Prisma")] },
  { id: "tools", title: "Tools", description: "The everyday tools I use to build, collaborate, and ship.", skills: [displaySkill("Git"), displaySkill("GitHub"), displaySkill("VS Code"), displaySkill("Codex"), displaySkill("Claude Code")] },
];
const brandColors: Record<string, string> = {
  JavaScript: "#F7DF1E", TypeScript: "#3178C6", Python: "#3776AB", Kotlin: "#7F52FF", "React.js": "#61DAFB", HTML5: "#E34F26", CSS3: "#1572B6", Bootstrap: "#7952B3", "Tailwind CSS": "#06B6D4", "Node.js": "#339933", "Express.js": "#6B7280", Django: "#092E20", "REST APIs": "rgb(var(--color-primary))", "React Native": "#61DAFB", Expo: "#000000", MySQL: "#4479A1", PostgreSQL: "#4169E1", Firebase: "#FFCA28", Supabase: "#3ECF8E", Prisma: "#5A67D8", Git: "#F05032", GitHub: "rgb(var(--color-text-main))", "VS Code": "#007ACC", Codex: "#10A37F", "Claude Code": "#D97757",
};
const showcasedProjects = ["climbio", "foundora", "climbio-mobile"]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

function SkillItem({ skill, compact = false }: { skill: Skill; compact?: boolean }) {
  const Icon = skill.icon;
  return <li className={`${styles.skill} ${compact ? styles.skillCompact : ""}`} data-api={skill.name === "REST APIs" ? "true" : undefined} style={{ "--skill-logo-color": brandColors[skill.name] } as CSSProperties}><Icon aria-hidden="true" className="h-8 w-8 shrink-0" /><span>{skill.name}</span></li>;
}

function ProjectLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="text-link text-sm">{children}<ArrowUpRight size={14} aria-hidden="true" /></Link>;
}

export default function Skills() {
  const reducedMotion = useReducedMotion();
  const learningSkills = skillGroups.flatMap((group) => group.skills.filter((skill) => skill.currentlyLearning));
  const foundations = skillGroups.find((group) => group.id === "core-concepts");

  return <section id="skills" aria-labelledby="skills-title" className="section-shell scroll-mt-20 !pt-8 md:!pt-12">
    <header className={styles.hero}>
      <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.55, ease }}>
        <p className="eyebrow">Skills / Built through practice</p>
        <h1 id="skills-title" className="section-title mt-4 max-w-3xl">A toolkit shaped by <span className="text-gradient italic">real products.</span></h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-textBody sm:text-lg">I move between thoughtful interfaces, dependable systems, and practical AI—choosing tools for the problem they help solve.</p>
        <div className="mt-6 flex flex-wrap gap-3"><Link href="#technical-toolkit" className="button-primary">Explore the toolkit <ArrowUpRight size={16} aria-hidden="true" /></Link><Link href="/projects" className="button-secondary">Browse selected work</Link></div>
      </motion.div>
      <div className={styles.focusList} aria-label="Focus areas">
        {[[Blocks, "Web development", "Interfaces that make complex work feel clear."], [Smartphone, "Mobile development", "Useful tools for people on the move."], [BrainCircuit, "Practical AI", "AI that supports a real workflow or decision."]].map(([Icon, title, description]) => { const FocusIcon = Icon as typeof Blocks; return <div key={title as string} className={styles.focusItem}><FocusIcon size={18} aria-hidden="true" /><div><strong>{title as string}</strong><span>{description as string}</span></div></div>; })}
      </div>
    </header>

    <section id="technical-toolkit" aria-labelledby="toolkit-title" className={`${styles.toolkitSection} border-b border-borderSoft py-14 scroll-mt-20 md:py-20`}>
      <div className="grid gap-4 md:grid-cols-[.8fr_1.2fr] md:items-end"><div><p className="eyebrow">01 / Technical toolkit</p><h2 id="toolkit-title" className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">What I work with.</h2></div><p className="max-w-xl text-sm leading-relaxed text-textBody md:justify-self-end">Explore the technologies behind my web, mobile, backend, and AI work. The list stays compact; the projects below show how it is applied.</p></div>
      <div className={styles.toolkitGrid}>
        {toolkitGroups.map((group, index) => <motion.section key={group.id} aria-labelledby={`${group.id}-title`} className={`${styles.toolkitCategory} ${group.id === "backend" ? styles.toolkitFeatured : ""} ${group.id === "frontend" || group.id === "database" ? styles.toolkitWide : ""}`} initial={reducedMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reducedMotion ? 0 : 0.4, delay: reducedMotion ? 0 : index * 0.04, ease }}><div className={styles.toolkitCategoryHeader}><span className={styles.categoryIndex}>{String(index + 1).padStart(2, "0")}</span><div><h3 id={`${group.id}-title`} className="font-display text-xl sm:text-2xl">{group.title}</h3><p>{group.description}</p></div></div><ul className={styles.logoGrid}>{group.skills.map((skill) => <SkillItem key={skill.name} skill={skill} />)}</ul></motion.section>)}
      </div>
    </section>

    <section aria-labelledby="selected-work-title" className="border-b border-borderSoft py-14 md:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">02 / Selected work</p><h2 id="selected-work-title" className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">Where the toolkit lands.</h2></div><Link href="/projects" className="text-link text-sm">See all projects <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
      <div className={styles.projectGrid}>{showcasedProjects.map((project, index) => <motion.article key={project.slug} className={styles.projectCard} initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : index * 0.06, ease }}><div className="flex flex-1 flex-col p-5 sm:p-6"><div className="flex items-center justify-between gap-3"><span className="eyebrow !text-[.65rem]">{project.category}</span>{project.status && <span className="project-meta-pill">{project.status}</span>}</div><h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">{project.title}</h3><p className="mt-2 text-sm leading-relaxed text-textBody">{project.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{project.technologies.slice(0, index === 0 ? 5 : 4).map((technology) => <span key={technology} className="project-tech-chip">{technology}</span>)}</div><div className="mt-auto pt-5"><ProjectLink href={`/projects/${project.slug}`}>View case study</ProjectLink></div></div></motion.article>)}</div>
    </section>

    {foundations && <section aria-labelledby="foundations-title" className="border-b border-borderSoft py-14 md:py-20"><div className="grid gap-5 md:grid-cols-[.7fr_1.3fr] md:items-start"><div><p className="eyebrow">03 / Engineering foundations</p><h2 id="foundations-title" className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">The principles underneath.</h2></div><div><p className="max-w-xl text-sm leading-relaxed text-textBody">Core concepts I return to when turning a feature into a reliable, usable product.</p><ul className={styles.foundationGrid}>{foundations.skills.map((skill) => { const FoundationIcon = skill.icon; return <li key={skill.name}><FoundationIcon size={17} aria-hidden="true" /><span>{skill.name}</span></li>; })}</ul></div></div></section>}

    <aside aria-labelledby="learning-title" className={styles.learning}><div className="flex items-start gap-4"><span className={styles.categoryIcon}><Sprout size={21} aria-hidden="true" /></span><div><p className="eyebrow !text-[.65rem]">04 / Currently exploring</p><h2 id="learning-title" className="mt-2 font-display text-2xl">Learning by building the next iteration.</h2><p className="mt-2 max-w-xl text-sm leading-relaxed text-textDim">Flutter is the current focus in my mobile development journey.</p></div></div><ul className="flex flex-wrap gap-2">{learningSkills.map((skill) => <SkillItem key={skill.name} skill={skill} compact />)}</ul></aside>
    <div className={styles.footerGrid}><section aria-labelledby="collaboration-title"><h2 id="collaboration-title" className="flex items-center gap-3 font-display text-xl"><Users size={19} className="text-primary" aria-hidden="true" /> How I work with others</h2><ul className="mt-5 grid gap-2 sm:grid-cols-2">{skillsProfile.collaboration.map((skill) => <li key={skill} className={styles.softSkill}>{skill}</li>)}</ul></section><section aria-labelledby="languages-title"><h2 id="languages-title" className="flex items-center gap-3 font-display text-xl"><Languages size={19} className="text-primary" aria-hidden="true" /> Spoken languages</h2><dl className="mt-5 grid gap-2 sm:grid-cols-2">{skillsProfile.languages.map((language) => <div key={language.name} className={styles.language}><dt className="text-sm font-medium text-textMain">{language.name}</dt><dd className="mt-1 text-xs text-textMuted">{language.level}</dd></div>)}</dl></section></div>
  </section>;
}
