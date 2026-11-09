"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import {
  additionalTechnologyGroups, aiDevelopmentTools, capabilities, coreTechnologies,
  currentlyExploring, proficiencyLevels, softSkills, technologyFilters, type Technology, type TechnologyFilter, type TechnologyIdentity,
} from "@/src/data/skills";
import styles from "./Skills.module.css";

function TechnologyLogo({ technology }: { technology: TechnologyIdentity }) {
  const Icon = technology.icon;
  return (
    <span className={styles.logo}>
      {Icon ? <Icon aria-hidden="true" focusable="false" /> : (
        <Image src={technology.logo} width={24} height={24} alt="" />
      )}
    </span>
  );
}

function TechnologyName({ technology }: { technology: TechnologyIdentity }) {
  return technology.evidence ? (
    <a
      className={styles.technologyName}
      href={technology.evidence.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${technology.name} example in ${technology.evidence.project} on GitHub (opens in a new tab)`}
    >
      {technology.name}<ArrowUpRight size={12} aria-hidden="true" />
    </a>
  ) : <span>{technology.name}</span>;
}

function TechnologyList({ technologies, label }: { technologies: Technology[]; label: string }) {
  return (
    <ul className={styles.technologyList} aria-label={label}>
      {technologies.map((technology) => (
        <li key={technology.name}>
          <TechnologyLogo technology={technology} />
          <TechnologyName technology={technology} />
          {technology.level && <span className={styles.tagLevel}>{technology.level}</span>}
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  const reduce = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<TechnologyFilter>("All");
  const filteredTechnologies = coreTechnologies.filter((technology) => (
    activeFilter === "All" || technology.category === activeFilter
  ));

  function handleFilterKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;
    switch (event.key) {
      case "ArrowRight": nextIndex = (index + 1) % technologyFilters.length; break;
      case "ArrowLeft": nextIndex = (index - 1 + technologyFilters.length) % technologyFilters.length; break;
      case "Home": nextIndex = 0; break;
      case "End": nextIndex = technologyFilters.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setActiveFilter(technologyFilters[nextIndex]);
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus();
  }

  return (
    <section id="skills" aria-labelledby="skills-title" className="section-shell scroll-mt-20 !py-10 md:!py-14">
      <header className={styles.hero}>
        <p className="eyebrow">What I work with</p>
        <h1 id="skills-title" className={styles.heroTitle}>Skills <span>&amp; Technologies.</span></h1>
        <p className={styles.heroText}>From Django inventory systems to React Native business tools and Next.js booking experiences, I learn by building practical applications.</p>
        <a className={styles.githubLink} href="https://github.com/khinmyatthu2193" target="_blank" rel="noreferrer">Explore my GitHub<ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
      </header>

      <section aria-labelledby="skill-set-title" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className="eyebrow">01 / Capabilities</p>
          <h2 id="skill-set-title">Skill Set</h2>
        </div>
        <div className={styles.capabilityGrid}>
          {capabilities.map(({ title, description, icon: Icon, evidence }) => (
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
              <div className={styles.capabilityEvidence} aria-label={`${title} implementation examples`}>
                {evidence.map((source) => (
                  <a key={source.href} href={source.href} target="_blank" rel="noreferrer" aria-label={`View ${title} example in ${source.project} on GitHub (opens in a new tab)`}>
                    {source.project}<ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section aria-labelledby="technical-skills-title" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className="eyebrow">02 / Technologies &amp; tools</p>
          <h2 id="technical-skills-title">Technical Skills</h2>
        </div>
        <div className={styles.filterTabs} role="tablist" aria-label="Core technology categories">
          {technologyFilters.map((filter, index) => (
            <button
              key={filter}
              id={`technology-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              aria-controls="core-technologies-panel"
              tabIndex={activeFilter === filter ? 0 : -1}
              onClick={() => setActiveFilter(filter)}
              onKeyDown={(event) => handleFilterKeyDown(event, index)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div
          id="core-technologies-panel"
          role="tabpanel"
          aria-labelledby={`technology-tab-${technologyFilters.indexOf(activeFilter)}`}
          tabIndex={0}
        >
          <div className={styles.coreHeading}>
            <h3>Core Technologies</h3>
            <p id="proficiency-note">Levels are self-assessed and provisional. Linked code shows project usage; bar lengths are illustrative, not measured scores.</p>
          </div>
          <motion.ul
            key={activeFilter}
            className={styles.proficiencyGrid}
            aria-label="Core technologies"
            aria-describedby="proficiency-note"
            initial={false}
            animate={{ opacity: reduce ? 1 : [0.6, 1] }}
            transition={{ duration: reduce ? 0 : 0.2 }}
          >
            {filteredTechnologies.map((technology) => {
              const value = technology.value === null ? null : Math.min(100, Math.max(0, technology.value));
              return (
                <li key={technology.name} className={styles.proficiencyItem}>
                  <TechnologyLogo technology={technology} />
                  <div className={styles.proficiencyContent}>
                    <div className={styles.proficiencyLabel}>
                      <TechnologyName technology={technology} />
                      <span className={styles.level}>{technology.level ?? "Needs confirmation"}</span>
                    </div>
                    <div
                      className={styles.proficiencyBar}
                      role={value === null ? undefined : "meter"}
                      aria-hidden={value === null ? true : undefined}
                      aria-label={value === null ? undefined : `${technology.name} practical experience`}
                      aria-valuemin={value === null ? undefined : 0}
                      aria-valuemax={value === null ? undefined : 100}
                      aria-valuenow={value ?? undefined}
                      aria-valuetext={technology.level ? `${technology.level} — self-assessed practical experience` : undefined}
                    >
                      {value !== null && <motion.span
                        style={{ width: `${value}%` }}
                        initial={false}
                        whileInView={reduce ? undefined : { scaleX: [0, 1] }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      />}
                    </div>
                  </div>
                </li>
              );
            })}
          </motion.ul>
          <dl className={styles.proficiencyLegend} aria-label="Proficiency levels">
            {Object.entries(proficiencyLevels).map(([level, { description }]) => (
              <div key={level}><dt>{level}</dt><dd>{description}</dd></div>
            ))}
          </dl>
        </div>

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
        <section aria-labelledby="currently-exploring-title" className={styles.technologyGroup}>
          <h3 id="currently-exploring-title">Currently Exploring</h3>
          <TechnologyList technologies={currentlyExploring} label="Currently exploring" />
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
