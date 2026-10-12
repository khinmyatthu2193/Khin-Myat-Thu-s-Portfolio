"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
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
const categories = [
  { label: "Programming Languages", skills: [displaySkill("JavaScript"), displaySkill("TypeScript"), displaySkill("Python"), displaySkill("Kotlin")] },
  { label: "Frontend", skills: [displaySkill("React", "React.js"), displaySkill("HTML", "HTML5"), displaySkill("CSS", "CSS3"), displaySkill("Bootstrap"), displaySkill("Tailwind CSS")] },
  { label: "Backend", skills: [displaySkill("Node.js"), displaySkill("Express.js"), displaySkill("Django"), displaySkill("REST API", "REST APIs")] },
  { label: "Mobile", skills: [displaySkill("React Native"), displaySkill("Expo")] },
  { label: "Database & ORM", skills: [displaySkill("MySQL"), displaySkill("PostgreSQL"), displaySkill("Firebase"), displaySkill("Supabase"), displaySkill("Prisma")] },
  { label: "Tools", skills: [displaySkill("Git"), displaySkill("GitHub"), displaySkill("VS Code"), displaySkill("Codex"), displaySkill("Claude Code")] },
];
const brandColors: Record<string, string> = {
  JavaScript: "#F7DF1E", TypeScript: "#3178C6", Python: "#3776AB", Kotlin: "#7F52FF", "React.js": "#61DAFB", HTML5: "#E34F26", CSS3: "#1572B6", Bootstrap: "#7952B3", "Tailwind CSS": "#06B6D4", "Node.js": "#339933", "Express.js": "rgb(var(--color-text-main))", Django: "#44B78B", "REST APIs": "rgb(var(--color-primary))", "React Native": "#61DAFB", Expo: "rgb(var(--color-text-main))", MySQL: "#4479A1", PostgreSQL: "#4169E1", Firebase: "#FFCA28", Supabase: "#3ECF8E", Prisma: "#5A67D8", Git: "#F05032", GitHub: "rgb(var(--color-text-main))", "VS Code": "#007ACC", Codex: "#10A37F", "Claude Code": "#D97757",
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;
  const style = { "--skill-logo-color": brandColors[skill.name], "--float-delay": `${(index % 5) * 0.22}s` } as CSSProperties;
  return <div className={`${styles.skillCard} ${index % 2 === 0 ? styles.skillCardFloating : ""}`} style={style}><Icon aria-hidden="true" className={styles.skillLogo} /><span>{skill.name}</span></div>;
}

function FloatingLogoCluster({ skills, clusterIndex, reducedMotion }: { skills: Skill[]; clusterIndex: number; reducedMotion: boolean | null }) {
  const positions = skills.length === 5
    ? [[20, 32], [20, 68], [50, 50], [80, 32], [80, 68]]
    : skills.length === 4
      ? [[20, 50], [50, 32], [50, 68], [80, 50]]
      : [[34, 50], [66, 50]];

  return <ul className={`${styles.logoCluster} ${styles[`logoCluster${skills.length}`]}`} aria-label="Technology logos">
    <span className={styles.clusterGlow} aria-hidden="true" />
    {skills.map((skill, index) => {
      const [left, top] = positions[index];
      return <motion.li key={skill.name} className={styles.clusterItem} style={{ left: `${left}%`, top: `${top}%` }} initial={reducedMotion ? false : { opacity: 0, scale: 0.92, y: 10 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: reducedMotion ? 0 : 0.42, delay: reducedMotion ? 0 : clusterIndex * 0.05 + index * 0.06, ease }}><SkillCard skill={skill} index={index} /></motion.li>;
    })}
  </ul>;
}

export default function Skills() {
  const reducedMotion = useReducedMotion();
  return <section id="skills" aria-labelledby="skills-title" className="section-shell scroll-mt-20 !pt-8 md:!pt-12">
    <header className={styles.hero}>
      <motion.div initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.55, ease }}>
        <p className="eyebrow">Skills / The toolkit</p>
        <h1 id="skills-title" className="section-title mt-4 max-w-3xl">Tools for building <span className="text-gradient italic">useful things.</span></h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-textBody sm:text-lg">A focused set of technologies I use to move from thoughtful interfaces to dependable, connected products.</p>
      </motion.div>
      <div className={styles.heroMeta}><span className={styles.skillCount}>25 <span>technologies</span></span><Link href="/projects" className="text-link text-sm">See the work <ArrowUpRight size={14} aria-hidden="true" /></Link></div>
    </header>
    <section aria-labelledby="technical-toolkit-title" className={styles.showcase}>
      <div className={styles.showcaseHeader}><div><p className="eyebrow">01 / Technical toolkit</p><h2 id="technical-toolkit-title" className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">Everything in view.</h2></div></div>
      <div className={styles.categoryList}>{categories.map((category, index) => <section key={category.label} className={`${styles.categoryRow} ${index % 2 === 1 ? styles.categoryRowReverse : ""}`} aria-labelledby={`category-${index}`}><div className={styles.categoryCopy}><span className={styles.categoryIndex}>{String(index + 1).padStart(2, "0")}</span><div><h3 id={`category-${index}`} className="font-display text-2xl sm:text-3xl">{category.label}</h3><p>{category.skills.length} technologies</p></div></div><FloatingLogoCluster skills={category.skills} clusterIndex={index} reducedMotion={reducedMotion} /></section>)}</div>
    </section>
    <section aria-labelledby="soft-skills-title" className={styles.softSkills}><div><p className="eyebrow">02 / How I work</p><h2 id="soft-skills-title" className="mt-2 font-display text-2xl sm:text-3xl">The human side of the stack.</h2></div><ul className={styles.softSkillList}>{skillsProfile.collaboration.map((skill) => <li key={skill}>{skill}</li>)}</ul></section>
  </section>;
}
