import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Languages, Sprout, Users } from "lucide-react";
import { skillGroups, skillsProfile, type Skill } from "@/src/data/skills";
import styles from "./Skills.module.css";

function SkillItem({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <li className={styles.skill}>
      <Icon aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-primary" />
      <span>{skill.name}</span>
    </li>
  );
}

export default function Skills() {
  const reducedMotion = useReducedMotion();
  const learningSkills = skillGroups.flatMap((group) => group.skills.filter((skill) => skill.currentlyLearning));

  return (
    <section id="skills" aria-labelledby="skills-title" className="section-shell scroll-mt-20 !pt-10 md:!pt-14">
      <header className={styles.hero}>
        <div className="relative z-10">
          <p className="eyebrow">Skills / A growing toolkit</p>
          <h1 id="skills-title" className="section-title mt-5 max-w-2xl">
            Curiosity into code.<br /><span className="text-gradient italic">Learning into practice.</span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-textBody">
            I build web, mobile, and AI-powered applications through academic, personal, and collaborative projects — learning new tools as I go.
          </p>
          <Link href="/projects" className="text-link mt-6 w-fit text-sm">
            Explore my project work <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.profile}>
          <GraduationCap size={24} className="text-primary" aria-hidden="true" />
          <p className="mt-5 text-xs font-medium uppercase tracking-widest text-primary">{skillsProfile.direction}</p>
          <p className="mt-3 font-display text-2xl leading-snug">{skillsProfile.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-textBody">{skillsProfile.institution}</p>
          <div className="mt-6 flex items-center gap-2 border-t border-primary/15 pt-4 text-xs text-textDim">
            <Sprout size={15} className="text-primary" aria-hidden="true" /> Built through practice. Always growing.
          </div>
        </div>
      </header>

      <div className="mb-5 mt-10 flex items-end justify-between gap-4">
        <h2 className="font-display text-2xl">Technical toolkit</h2>
        <p className="text-xs text-textMuted">Tools, technologies &amp; foundations</p>
      </div>
      <div className={styles.grid}>
        {skillGroups.map(({ id, title, description, icon: Icon, skills, project }, index) => (
          <motion.article
            key={id}
            aria-labelledby={`${id}-title`}
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? { opacity: 1, y: 0 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : (index % 2) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={styles.card}
          >
            <div className="flex items-center justify-between gap-4">
              <span className={styles.categoryIcon}><Icon size={21} aria-hidden="true" /></span>
              <span aria-hidden="true" className="font-mono text-xs text-textMuted">/ 0{index + 1}</span>
            </div>
            <h3 id={`${id}-title`} className="mt-5 font-display text-2xl leading-snug tracking-tight">{title}</h3>
            <p className="mb-5 mt-2 text-sm leading-relaxed text-textDim">{description}</p>
            <ul className="flex flex-wrap gap-2">
              {skills.filter((skill) => !skill.currentlyLearning).map((skill) => <SkillItem key={skill.name} skill={skill} />)}
            </ul>
            {project && (
              <div className="mt-auto pt-6">
                <div className="border-t border-borderSoft pt-4">
                  <Link href={project.href} className="text-link text-sm">{project.name}<ArrowUpRight size={14} aria-hidden="true" /></Link>
                  <p className="mt-1.5 text-xs leading-relaxed text-textMuted">{project.detail}</p>
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </div>

      <aside aria-labelledby="learning-title" className={styles.learning}>
        <div className="flex items-start gap-4">
          <span className={styles.categoryIcon}><Sprout size={22} aria-hidden="true" /></span>
          <div>
            <h2 id="learning-title" className="font-display text-2xl">Currently Learning</h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-textDim">Making room for new ideas. Flutter is the next part of my mobile development journey.</p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2">{learningSkills.map((skill) => <SkillItem key={skill.name} skill={skill} />)}</ul>
      </aside>

      <div className="mt-8 grid gap-8 border-t border-borderSoft pt-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <section aria-labelledby="collaboration-title">
          <h2 id="collaboration-title" className="flex items-center gap-3 font-display text-xl"><Users size={19} className="text-primary" aria-hidden="true" /> Beyond the code</h2>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
            {skillsProfile.collaboration.map((skill) => <li key={skill} className="text-sm text-textDim">{skill}</li>)}
          </ul>
        </section>
        <section aria-labelledby="languages-title">
          <h2 id="languages-title" className="flex items-center gap-3 font-display text-xl"><Languages size={19} className="text-primary" aria-hidden="true" /> Languages</h2>
          <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {skillsProfile.languages.map((language) => <div key={language.name}><dt className="text-sm text-textMain">{language.name}</dt><dd className="mt-1 text-xs text-textMuted">{language.level}</dd></div>)}
          </dl>
        </section>
      </div>
    </section>
  );
}
