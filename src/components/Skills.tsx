"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import {
  additionalTechnologyGroups, aiDevelopmentTools, capabilities, coreTechnologies,
  currentlyLearning, softSkills, type Technology,
} from "@/src/data/skills";
import styles from "./Skills.module.css";

function TechnologyLogo({ technology }: { technology: Technology }) {
  const Icon = technology.icon;
  return (
    <span className={styles.logo}>
      {Icon ? <Icon aria-hidden="true" focusable="false" /> : (
        <Image src={technology.logo} width={24} height={24} alt="" />
      )}
    </span>
  );
}

function TechnologyList({ technologies, label }: { technologies: Technology[]; label: string }) {
  return (
    <ul className={styles.technologyList} aria-label={label}>
      {technologies.map((technology) => (
        <li key={technology.name}>
          <TechnologyLogo technology={technology} />
          <span>{technology.name}</span>
          {technology.level && <span className={styles.tagLevel}>{technology.level}</span>}
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" aria-labelledby="skills-title" className="section-shell scroll-mt-20 !py-10 md:!py-14">
      <header className={styles.hero}>
        <p className="eyebrow">What I work with</p>
        <h1 id="skills-title" className={styles.heroTitle}>Skills <span>&amp; Technologies.</span></h1>
        <p className={styles.heroText}>I enjoy building practical digital solutions and exploring how different technologies work together.</p>
      </header>

      <section aria-labelledby="skill-set-title" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className="eyebrow">01 / Capabilities</p>
          <h2 id="skill-set-title">Skill Set</h2>
        </div>
        <div className={styles.capabilityGrid}>
          {capabilities.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              className={styles.capabilityCard}
              initial={false}
              whileInView={reduce ? undefined : { y: [8, 0], opacity: [0.8, 1] }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className={styles.capabilityIcon}><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section aria-labelledby="technical-skills-title" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className="eyebrow">02 / Technologies &amp; tools</p>
          <h2 id="technical-skills-title">Technical Skills</h2>
        </div>
        <div className={styles.coreHeading}>
          <h3>Core Technologies</h3>
          <p id="proficiency-note">Levels reflect self-assessed practical experience. Bar lengths are illustrative, not measured scores.</p>
        </div>
        <ul className={styles.proficiencyGrid} aria-label="Core technologies" aria-describedby="proficiency-note">
          {coreTechnologies.map((technology) => {
            const value = Math.min(100, Math.max(0, technology.value));
            return (
              <li key={technology.name} className={styles.proficiencyItem}>
                <TechnologyLogo technology={technology} />
                <div className={styles.proficiencyContent}>
                  <div className={styles.proficiencyLabel}>
                    <span>{technology.name}</span>
                    <span className={styles.level}>{technology.level}</span>
                  </div>
                  <div
                    className={styles.proficiencyBar}
                    role="meter"
                    aria-label={`${technology.name} practical experience`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={value}
                    aria-valuetext={`${technology.level} — self-assessed practical experience`}
                  >
                    <motion.span
                      style={{ width: `${value}%` }}
                      initial={false}
                      whileInView={reduce ? undefined : { scaleX: [0, 1] }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className={styles.technologyGroup}>
          <h3>Additional Technologies</h3>
          <div className={styles.additionalGroups}>
            {additionalTechnologyGroups.map(({ category, technologies }) => (
              <div className={styles.additionalGroup} key={category}>
                <h4>{category}</h4>
                <TechnologyList technologies={technologies} label={`${category} technologies`} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.technologyGroup}>
          <h3>AI Development Tools</h3>
          <p className={styles.groupDescription}>AI-powered tools that support my coding, experimentation, and development workflow.</p>
          <TechnologyList technologies={aiDevelopmentTools} label="AI development tools" />
        </div>
        <section aria-labelledby="currently-learning-title" className={styles.technologyGroup}>
          <h3 id="currently-learning-title">Currently Learning</h3>
          <TechnologyList technologies={currentlyLearning} label="Currently learning" />
        </section>
      </section>

      <section aria-labelledby="soft-skills-title" className={styles.humanSection}>
        <div className={styles.sectionHeading}>
          <p className="eyebrow">03 / How I work</p>
          <h2 id="soft-skills-title">Beyond the Code</h2>
        </div>
        <ul className={styles.softSkillList}>
          {softSkills.map((skill) => <li key={skill}><Check size={15} aria-hidden="true" />{skill}</li>)}
        </ul>
      </section>
    </section>
  );
}
