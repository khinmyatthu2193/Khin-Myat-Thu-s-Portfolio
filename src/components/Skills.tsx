"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  GraduationCap,
  Languages,
  Layers3,
  Smartphone,
  Sprout,
  Users,
} from "lucide-react";
import Link from "next/link";
import { skillGroups, skillsProfile, type Skill } from "@/src/data/skills";
import styles from "./Skills.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const proofPoints = [
  {
    label: "Full-stack systems",
    title: "Climbio 2.0",
    description: "A business platform connecting responsive interfaces, secure APIs, operational data, reporting, and AI-supported guidance.",
    href: "/projects/climbio",
    tools: ["React + TypeScript", "Node + Express", "PostgreSQL + Prisma"],
    icon: Layers3,
  },
  {
    label: "Product & AI",
    title: "Foundora",
    description: "A privacy-first matching experience with deterministic compatibility scores, consent-based identity reveal, and AI explanations.",
    href: "/projects/foundora",
    tools: ["TanStack Start", "Supabase", "OpenRouter"],
    icon: BrainCircuit,
  },
  {
    label: "Mobile products",
    title: "Climbio Mobile",
    description: "A mobile toolkit for small businesses with product records, image storage, customer orders, and follow-up reminders.",
    href: "/projects/climbio-mobile",
    tools: ["React Native", "Firebase", "Expo"],
    icon: Smartphone,
  },
];

function SkillItem({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <li className={styles.skill}>
      <Icon aria-hidden="true" className="h-[17px] w-[17px] shrink-0 text-primary" />
      <span>{skill.name}</span>
    </li>
  );
}

export default function Skills() {
  const reducedMotion = useReducedMotion();
  const learningSkills = skillGroups.flatMap((group) => group.skills.filter((skill) => skill.currentlyLearning));
  const reveal = reducedMotion ? false : { opacity: 0, y: 22 };

  return (
    <section id="skills" aria-labelledby="skills-title" className="section-shell scroll-mt-20 !pt-10 md:!pt-14">
      <header className={styles.hero}>
        <motion.div
          className="relative z-10"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.65, ease }}
        >
          <p className="eyebrow">Skills / Built through practice</p>
          <h1 id="skills-title" className="section-title mt-5 max-w-3xl">
            Tools are useful when they turn into <span className="text-gradient italic">working products.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-textBody sm:text-lg">
            My toolkit spans the product journey—from shaping responsive interfaces to building APIs, working with data, and adding practical AI where it serves a real need.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#skills-in-practice" className="button-primary">
              See skills in practice <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/projects" className="button-secondary">Browse all projects</Link>
          </div>
        </motion.div>

        <motion.aside
          className={styles.profile}
          aria-label="Current professional direction"
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.65, delay: reducedMotion ? 0 : 0.12, ease }}
        >
          <div className="flex items-center justify-between gap-4">
            <span className={styles.categoryIcon}><GraduationCap size={22} aria-hidden="true" /></span>
            <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary">Current direction</span>
          </div>
          <p className="mt-6 font-display text-3xl leading-tight">{skillsProfile.direction}</p>
          <p className="mt-3 text-sm leading-relaxed text-textBody">{skillsProfile.role} at {skillsProfile.institution}.</p>
          <div className={styles.profileFocus}>
            <span><Blocks size={15} aria-hidden="true" /> Web</span>
            <span><Smartphone size={15} aria-hidden="true" /> Mobile</span>
            <span><BrainCircuit size={15} aria-hidden="true" /> Practical AI</span>
          </div>
          <p className="mt-5 flex items-center gap-2 border-t border-primary/15 pt-4 text-xs text-textDim">
            <Sprout size={15} className="text-primary" aria-hidden="true" /> Learning by building and iterating.
          </p>
        </motion.aside>
      </header>

      <motion.section
        id="skills-in-practice"
        aria-labelledby="practice-title"
        className="scroll-mt-28 border-b border-borderSoft py-14 md:py-20"
        initial={reveal}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: reducedMotion ? 0 : 0.65, ease }}
      >
        <div className="grid gap-5 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="eyebrow">Capabilities in practice</p>
            <h2 id="practice-title" className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">How the toolkit comes together.</h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-textBody sm:text-base md:justify-self-end">
            Selected work showing how I combine technologies to solve a complete product problem—not just use them in isolation.
          </p>
        </div>

        <div className={styles.proofGrid}>
          {proofPoints.map(({ label, title, description, href, tools, icon: Icon }, index) => (
            <motion.article
              key={title}
              className={styles.proofCard}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : index * 0.07, ease }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className={styles.categoryIcon}><Icon size={20} aria-hidden="true" /></span>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary">{label}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-textBody">{description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
                {tools.map((tool) => <li key={tool} className="label-tag">{tool}</li>)}
              </ul>
              <Link href={href} className="text-link mt-6 w-fit text-sm">
                View case study <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <section aria-labelledby="toolkit-title" className="py-14 md:py-20">
        <div className="mb-8 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="eyebrow">Technical toolkit</p>
            <h2 id="toolkit-title" className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">What I work with.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-textMuted sm:text-right">Technologies and foundations used across academic, personal, and collaborative work.</p>
        </div>

        <div className={styles.grid}>
          {skillGroups.map(({ id, title, description, icon: Icon, skills, project }, index) => {
            const establishedSkills = skills.filter((skill) => !skill.currentlyLearning);
            return (
              <motion.article
                key={id}
                aria-labelledby={`${id}-title`}
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : (index % 3) * 0.05, ease }}
                className={styles.card}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={styles.categoryIcon}><Icon size={20} aria-hidden="true" /></span>
                  <span className="text-xs text-textMuted">{String(establishedSkills.length).padStart(2, "0")} skills</span>
                </div>
                <h3 id={`${id}-title`} className="mt-5 font-display text-2xl leading-snug tracking-tight">{title}</h3>
                <p className="mb-5 mt-2 text-sm leading-relaxed text-textDim">{description}</p>
                <ul className="flex flex-wrap gap-2">
                  {establishedSkills.map((skill) => <SkillItem key={skill.name} skill={skill} />)}
                </ul>
                {project && (
                  <div className="mt-auto pt-6">
                    <div className="border-t border-borderSoft pt-4">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-textMuted">Used in</p>
                      <Link href={project.href} className="text-link mt-2 text-sm">{project.name}<ArrowUpRight size={14} aria-hidden="true" /></Link>
                      <p className="mt-1.5 text-xs leading-relaxed text-textMuted">{project.detail}</p>
                    </div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </section>

      <aside aria-labelledby="learning-title" className={styles.learning}>
        <div className="flex items-start gap-4">
          <span className={styles.categoryIcon}><Sprout size={22} aria-hidden="true" /></span>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary">Next in the toolkit</p>
            <h2 id="learning-title" className="mt-2 font-display text-2xl">Currently learning</h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-textDim">Exploring Flutter as the next step in my mobile development journey.</p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2">{learningSkills.map((skill) => <SkillItem key={skill.name} skill={skill} />)}</ul>
      </aside>

      <div className={styles.footerGrid}>
        <section aria-labelledby="collaboration-title">
          <h2 id="collaboration-title" className="flex items-center gap-3 font-display text-xl"><Users size={19} className="text-primary" aria-hidden="true" /> How I work with others</h2>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {skillsProfile.collaboration.map((skill) => <li key={skill} className={styles.softSkill}>{skill}</li>)}
          </ul>
        </section>
        <section aria-labelledby="languages-title">
          <h2 id="languages-title" className="flex items-center gap-3 font-display text-xl"><Languages size={19} className="text-primary" aria-hidden="true" /> Languages</h2>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {skillsProfile.languages.map((language) => (
              <div key={language.name} className={styles.language}>
                <dt className="text-sm font-medium text-textMain">{language.name}</dt>
                <dd className="mt-1 text-xs text-textMuted">{language.level}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </section>
  );
}
