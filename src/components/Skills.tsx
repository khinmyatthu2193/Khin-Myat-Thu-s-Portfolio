"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Check, Code2, GitBranch, Monitor, Sparkles, Wrench, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { skillGroups, skillsProfile, type Skill } from "@/src/data/skills";
import styles from "./Skills.module.css";

const ease = [0.22, 1, 0.36, 1] as const;
const allSkills = skillGroups.flatMap((group) => group.skills);
const getSkill = (name: string, displayName = name): Skill => {
  const skill = allSkills.find((item) => item.name === name);
  if (!skill) throw new Error(`Missing skill data for ${name}`);
  return { ...skill, name: displayName };
};

const brandColors: Record<string, string> = {
  JavaScript: "#F7DF1E", TypeScript: "#3178C6", Kotlin: "#7F52FF", Python: "#3776AB", HTML5: "#E34F26", CSS3: "#1572B6", React: "#61DAFB", "React.js": "#61DAFB", "React Native": "#61DAFB", "Tailwind CSS": "#06B6D4", Bootstrap: "#7952B3", Expo: "#687EFF", Django: "#44B78B", MySQL: "#4479A1", Firebase: "#FFCA28", Supabase: "#3ECF8E", PostgreSQL: "#4169E1", Prisma: "#5A67D8", Git: "#F05032", GitHub: "rgb(var(--color-text-main))", "VS Code": "#007ACC", Cursor: "#8B5CF6", Codex: "#10A37F", "Claude Code": "#D97757", "REST API Development": "rgb(var(--color-primary))",
};

const featuredStack = ["JavaScript", "TypeScript", "React", "Python", "Django", "React Native", "PostgreSQL", "Supabase"].map((name) => getSkill(name));
const categories: { title: string; description: string; icon: LucideIcon; skills: Skill[] }[] = [
  { title: "Frontend Development", description: "Building clear, responsive interfaces for the web.", icon: Code2, skills: [getSkill("HTML", "HTML5"), getSkill("CSS", "CSS3"), getSkill("JavaScript"), getSkill("TypeScript"), getSkill("React", "React.js"), getSkill("Tailwind CSS"), getSkill("Bootstrap")] },
  { title: "Backend Development", description: "Connecting application logic with useful APIs and services.", icon: GitBranch, skills: [getSkill("Python"), getSkill("Django"), getSkill("REST API", "REST API Development")] },
  { title: "Mobile Development", description: "Exploring practical experiences across mobile devices.", icon: Monitor, skills: [getSkill("Kotlin"), getSkill("React Native"), getSkill("Expo")] },
  { title: "Database & Backend Services", description: "Working with structured data, storage, and connected platforms.", icon: BrainCircuit, skills: [getSkill("MySQL"), getSkill("PostgreSQL"), getSkill("Firebase"), getSkill("Supabase"), getSkill("Prisma")] },
  { title: "Development Tools", description: "Tools that support building, collaborating, and iterating.", icon: Wrench, skills: [getSkill("Git"), getSkill("GitHub"), getSkill("VS Code"), getSkill("Cursor"), getSkill("Codex"), getSkill("Claude Code")] },
];

function SkillPill({ skill, featured = false }: { skill: Skill; featured?: boolean }) {
  const Icon = skill.icon;
  return <li className={`${styles.skillPill} ${featured ? styles.featuredPill : ""}`} style={{ "--skill-color": brandColors[skill.name] ?? "rgb(var(--color-primary))" } as CSSProperties}><Icon aria-hidden="true" /><span>{skill.name}</span></li>;
}

function CategoryCard({ category, index, reduce }: { category: (typeof categories)[number]; index: number; reduce: boolean | null }) {
  const Icon = category.icon;
  return <motion.article className={styles.categoryCard} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: reduce ? 0 : .55, delay: reduce ? 0 : index * .05, ease }}>
    <div className={styles.categoryTop}><span className={styles.categoryIcon}><Icon size={18} strokeWidth={1.7} aria-hidden="true" /></span><span className={styles.categoryNumber}>{String(index + 1).padStart(2, "0")}</span></div>
    <h3>{category.title}</h3><p>{category.description}</p>
    <ul className={styles.skillList} aria-label={`${category.title} skills`}>{category.skills.map((skill) => <SkillPill key={skill.name} skill={skill} />)}</ul>
  </motion.article>;
}

export default function Skills() {
  const reduce = useReducedMotion();
  return <section id="skills" aria-labelledby="skills-title" className="section-shell scroll-mt-20 !pt-10 md:!pt-16">
    <header className={styles.hero}>
      <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduce ? 0 : .6, ease }}>
        <p className="eyebrow">What I work with</p>
        <h1 id="skills-title" className={styles.heroTitle}>Skills <span>&amp; Technologies</span></h1>
        <p className={styles.heroText}>Tools and technologies I use to turn ideas into practical digital experiences, while continuously learning and exploring new possibilities.</p>
      </motion.div>
      <div className={styles.heroAside}><span className={styles.heroNote}>Final-year CSE student<br />building through practice</span><Link href="/projects" className="button-secondary">See the work <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
    </header>

    <section aria-labelledby="featured-stack-title" className={styles.featuredSection}>
      <div className={styles.featuredIntro}><p className="eyebrow">01 / Featured stack</p><h2 id="featured-stack-title">The tools I reach for most.</h2><p>Technologies I have worked with across practical web, mobile, and connected application projects.</p></div>
      <ul className={styles.featuredList}>{featuredStack.map((skill) => <SkillPill key={skill.name} skill={skill} featured />)}</ul>
    </section>

    <section aria-labelledby="technical-toolkit-title" className={styles.toolkit}><div className={styles.sectionHeading}><div><p className="eyebrow">02 / Technical toolkit</p><h2 id="technical-toolkit-title">A closer look at the stack.</h2></div><p>Organized around the kind of work each group helps me do.</p></div><div className={styles.categoryGrid}>{categories.map((category, index) => <CategoryCard key={category.title} category={category} index={index} reduce={reduce} />)}</div></section>

    <section aria-labelledby="exploring-title" className={styles.exploringSection}><div><p className="eyebrow">03 / Still exploring</p><h2 id="exploring-title">Learning is part of the work.</h2><p>These are areas I am currently exploring through study and hands-on experimentation.</p></div><ul className={styles.exploringList}><li><Code2 size={18} aria-hidden="true" /><span>PHP</span><small>Exploring</small></li><li><Code2 size={18} aria-hidden="true" /><span>Laravel</span><small>Exploring</small></li><li><Sparkles size={18} aria-hidden="true" /><span>AI-powered web applications</span><small>Exploring</small></li></ul></section>

    <section aria-labelledby="workflow-title" className={styles.workflowSection}><div className={styles.workflowIntro}><p className="eyebrow">04 / How I build</p><h2 id="workflow-title">A practical way of working.</h2></div><ul className={styles.workflowList}><li><strong>Version control</strong><span>Git &amp; GitHub</span></li><li><strong>Environment</strong><span>VS Code</span></li><li><strong>AI-assisted development</strong><span>Cursor, Codex, Claude Code</span></li><li><strong>Building</strong><span>Practical web and mobile applications</span></li><li><strong>Learning</strong><span>New technologies through hands-on projects</span></li></ul></section>

    <section aria-labelledby="soft-skills-title" className={styles.humanSection}><div className={styles.humanIntro}><p className="eyebrow">05 / How I work with people</p><h2 id="soft-skills-title">The human side of building.</h2></div><ul className={styles.softSkillList}>{skillsProfile.collaboration.map((skill) => <li key={skill}><Check size={15} aria-hidden="true" />{skill}</li>)}</ul></section>
  </section>;
}
