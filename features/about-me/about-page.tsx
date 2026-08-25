"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import portrait from "@/src/assets/khin1.jpg";

const ease = [0.22, 1, 0.36, 1] as const;
const journey = [
  ["2022", "Started my Computer Science journey", "Began studying Computer Science Engineering at MIIT and started exploring how software could be used to solve everyday problems."],
  ["2024", "Started building real projects", "Moved beyond classroom concepts and began developing complete web applications, including Brancy and RecycleLink."],
  ["2025", "Explored bigger ideas", "Expanded into mobile development and AI-powered experiences through projects such as Climbio, Career Ladder, and Future Harvest."],
  ["2026", "Built and refined real solutions", "Continued developing practical digital products while strengthening my experience in full-stack development, AI, teamwork, and presenting ideas."],
  ["Now", "Still becoming", "Continuing to grow as a full-stack developer, explore useful AI, and look for opportunities to build meaningful digital products."],
];
const curiosities = [
  ["Sharing what I learn", "I enjoy turning what I discover into clear notes, presentations, and meaningful conversations with others."],
  ["Building useful things", "I enjoy taking an unfinished idea and shaping it into something people can understand and use."],
  ["Exploring possibilities", "I’m naturally curious about unfamiliar technologies, new perspectives and different ways to solve practical problems."],
  ["Outside technology", "Singing, listening to music, cooking and slowing down with a good cup of coffee."],
];
const achievements = [
  ["Winner", "One Project One Week Hackathon 2026", "Technortal · Team Strivo · May 25–31, 2026"],
  ["Winner", "AI for Climate-Resilient Agriculture Hackathon 2026", "UNDP Myanmar · Team ICONIC · March 2026"],
    ["2nd Place", "HackAtom — Science Festival Myanmar 2025", "November 2025"],
  ["Selected Participant", "Cursor Myanmar AI Hackathon 2026", "Team Victorya · Selected among 200 participants from 1,331 applications"],
];
const growthStages = [
  ["Learn", "Exploring new ideas and strengthening the foundations behind my work."],
  ["Build", "Turning what I learn into practical products and working experiences."],
  ["Share", "Supporting others and exchanging the lessons I gain along the way."],
  ["Grow", "Improving through every project, challenge and collaboration."],
];

function SectionIntro({ label, title, text, id }: { label: string; title: string; text?: string; id: string }) {
  return <div><p className="eyebrow">{label}</p><h2 id={id} className="mt-5 font-display text-[clamp(2rem,3.8vw,3.5rem)] font-medium leading-[1.04] tracking-[-0.03em] text-textMain">{title}</h2>{text && <p className="mt-5 max-w-xl leading-relaxed text-textBody">{text}</p>}</div>;
}

export function AboutPage() {
  const reduce = useReducedMotion();
  const [activeJourney, setActiveJourney] = useState(0);
  const [activeCuriosity, setActiveCuriosity] = useState(0);
  const [activeGrowth, setActiveGrowth] = useState(3);
  const reveal = reduce ? false : { opacity: 0, y: 28 };
  const sectionMotion = { initial: reveal, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 }, transition: { duration: 0.72, ease } };

  return <main id="main-content">
    <section className="section-shell !max-w-[1280px] !pb-14 pt-28 md:!pb-16 md:pt-36" aria-labelledby="about-title">
      <div className="grid gap-12 lg:grid-cols-[38fr_62fr] lg:items-center lg:gap-14 xl:gap-[72px]">
        <motion.div initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.75, delay: 0.42, ease }} className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[45%_45%_10%_10%] border border-primary/25 bg-bgCard shadow-[0_16px_40px_rgb(20_54_35_/_0.06)] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[400px]"><Image src={portrait} alt="Portrait of Khin Myat Thu" fill priority className="object-cover object-[center_30%]" sizes="(max-width: 639px) 280px, (max-width: 1023px) 360px, 400px" /></motion.div>
        <div className="min-w-0">
          <motion.p initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow text-[0.8125rem]">About me</motion.p>
          <h1 id="about-title" className="mt-5 max-w-[680px] font-display text-4xl font-medium leading-[1.04] tracking-[-0.035em] sm:text-[2.625rem] md:text-5xl lg:text-[3.25rem]"><span className="block">Learning by doing.</span><span className="block italic text-primary">Building what matters.</span></h1>
          <motion.div initial={reveal} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.68, delay: 0.2, ease }} className="mt-6 max-w-[680px] space-y-5 text-base leading-[1.68] text-textMain/75 lg:text-[1.0625rem]"><p>I’m Khin Myat Thu, a final-year Computer Science student who learns best by turning ideas into working products. I enjoy exploring full-stack development, practical AI, and digital solutions that respond to real-world problems.</p><p>I’m always curious to learn something new, experiment with different technologies, and turn what I learn into something useful. For me, every project is an opportunity to grow, solve problems, and understand how technology can make a meaningful difference.</p></motion.div>
        </div>
      </div>
      <motion.div initial={reveal} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.32, ease }} className="mt-12 border-t border-borderSoft pt-8 md:mt-14 lg:mt-14" aria-labelledby="education-title"><p id="education-title" className="eyebrow">Education</p><div className="mt-5 grid gap-5 lg:grid-cols-2 lg:gap-6"><div className="flex h-full flex-col rounded-2xl border border-primary/20 bg-bgCard/20 p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_10px_28px_rgb(20_54_35_/_0.08)] motion-reduce:transform-none motion-reduce:transition-none"><p className="font-display text-xl sm:text-2xl">B.E. (Hons) in Computer Science Engineering</p><p className="mt-3 text-sm text-textMuted sm:text-base">Myanmar Institute of Information Technology</p><p className="mt-auto pt-4 text-sm font-medium text-primary">2022–2027</p></div><div className="flex h-full flex-col rounded-2xl border border-primary/20 bg-bgCard/20 p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_10px_28px_rgb(20_54_35_/_0.08)] motion-reduce:transform-none motion-reduce:transition-none"><p className="font-display text-xl sm:text-2xl">Diploma in English</p><p className="mt-3 text-sm text-textMuted sm:text-base">Mandalay University of Foreign Languages</p><p className="mt-auto pt-4 text-sm font-medium text-primary">2023–2024</p></div></div></motion.div>
    </section>

    <motion.section {...sectionMotion} className="section-shell border-t border-borderSoft md:!pt-20" aria-labelledby="journey-title">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20"><div className="lg:self-start lg:pt-[132px]"><SectionIntro id="journey-title" label="My journey" title="Still learning. Still building." text="My path has grown through curiosity, practical projects, and a constant willingness to learn and try something new." /></div>
        <div className="relative pl-8 sm:pl-12"><div aria-hidden="true" className="absolute bottom-0 left-[5px] top-2 w-px bg-borderMedium sm:left-[9px]" /><motion.div aria-hidden="true" initial={reduce ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: reduce ? 0 : 1.1, ease }} className="absolute bottom-0 left-[5px] top-2 w-px origin-top bg-primary sm:left-[9px]" /><motion.span aria-hidden="true" animate={{ top: `${activeJourney * 24.2 + 1}%` }} transition={reduce ? { duration: 0 } : { duration: 0.4, ease }} className="absolute -left-0.5 h-3 w-3 rounded-full bg-primaryGlow shadow-[0_0_16px_rgb(var(--color-primary-glow)/0.85)] sm:left-[3px]" />
          {journey.map(([year, title, text], index) => <motion.article key={year} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} onViewportEnter={() => setActiveJourney(index)} viewport={{ once: true, amount: 0.55 }} transition={{ duration: 0.65, ease }} className={`relative min-h-40 border-b border-borderSoft pb-9 pt-1 last:border-0 sm:min-h-44 lg:min-h-[168px] ${activeJourney === index ? "opacity-100" : "opacity-60"}`}><span aria-hidden="true" className={`absolute -left-[2.15rem] top-2 h-2.5 w-2.5 rounded-full border sm:-left-[2.95rem] ${activeJourney === index ? "border-primary bg-primary" : "border-primary/45 bg-bg"}`} /><p className="font-display text-3xl text-primary sm:text-4xl">{year}</p><h3 className="mt-3 font-display text-xl sm:text-2xl">{title}</h3><p className="mt-3 max-w-2xl leading-relaxed text-textBody">{text}</p></motion.article>)}
        </div></div>
    </motion.section>

    <motion.section {...sectionMotion} className="section-shell border-t border-borderSoft" aria-labelledby="curiosity-title">
      <SectionIntro id="curiosity-title" label="Beyond the code" title="What keeps me curious." text="Technology is an important part of my life, but it isn’t the whole story." />
      <div className="mt-10 hidden items-stretch gap-12 lg:grid lg:grid-cols-[42fr_58fr] xl:gap-16"><div role="tablist" aria-label="Things that keep me curious" className="space-y-3">{curiosities.map(([title], index) => { const active = index === activeCuriosity; return <button key={title} id={`curiosity-tab-${index}`} type="button" role="tab" aria-selected={active} aria-controls="curiosity-panel" onMouseEnter={() => setActiveCuriosity(index)} onFocus={() => setActiveCuriosity(index)} onClick={() => setActiveCuriosity(index)} className={`group flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-[color,background-color,border-color,transform] duration-300 motion-reduce:transform-none motion-reduce:transition-none ${active ? "translate-x-1 border-primary/25 bg-primary/10 text-primary" : "border-transparent text-textDim hover:bg-primary/5 hover:text-textMain"}`}><span className="text-xs font-semibold tracking-[0.12em] text-primary/80">{String(index + 1).padStart(2, "0")}</span><span className="font-display text-xl">{title}</span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="ml-auto h-4 w-4 opacity-55 transition-transform duration-300 group-hover:translate-x-0.5"><path d="m9 5 7 7-7 7" /></svg></button>; })}</div><div id="curiosity-panel" role="tabpanel" aria-labelledby={`curiosity-tab-${activeCuriosity}`} aria-live="polite" className="flex min-h-[220px] items-center rounded-3xl bg-gradient-to-br from-bgCard/70 to-primary/10 p-8 xl:p-9"><AnimatePresence mode="wait" initial={false}><motion.div key={activeCuriosity} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -6 }} transition={{ duration: reduce ? 0 : 0.24, ease }}><h3 className="font-display text-2xl text-textMain xl:text-3xl">{curiosities[activeCuriosity][0]}</h3><p className="mt-4 max-w-xl text-base leading-[1.7] text-textBody">{curiosities[activeCuriosity][1]}</p></motion.div></AnimatePresence></div></div>
      <div className="mt-8 space-y-3 lg:hidden">{curiosities.map(([title, description], index) => { const active = index === activeCuriosity; const panelId = `curiosity-accordion-panel-${index}`; return <div key={title}><button type="button" aria-expanded={active} aria-controls={panelId} onClick={() => setActiveCuriosity(index)} className={`flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-[color,background-color,border-color] duration-300 ${active ? "border-primary/25 bg-primary/10 text-primary" : "border-transparent text-textDim hover:bg-primary/5 hover:text-textMain"}`}><span className="text-xs font-semibold tracking-[0.12em] text-primary/80">{String(index + 1).padStart(2, "0")}</span><span className="font-display text-lg sm:text-xl">{title}</span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={`ml-auto h-4 w-4 shrink-0 opacity-55 transition-transform duration-300 ${active ? "rotate-90" : ""}`}><path d="m9 5 7 7-7 7" /></svg></button><AnimatePresence initial={false}>{active && <motion.div id={panelId} initial={reduce ? false : { opacity: 0, height: 0, y: -4 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={reduce ? undefined : { opacity: 0, height: 0, y: -4 }} transition={{ duration: reduce ? 0 : 0.25, ease }} className="overflow-hidden"><p className="mx-2 mt-2 rounded-2xl bg-gradient-to-br from-bgCard/70 to-primary/10 px-5 py-5 leading-[1.7] text-textBody sm:px-6">{description}</p></motion.div>}</AnimatePresence></div>; })}</div>
    </motion.section>

    <motion.section initial={reduce ? false : { opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.72, ease }} className="section-shell border-t border-borderSoft" aria-labelledby="forward-title">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
        <div>
          <motion.p initial={reduce ? false : { opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="eyebrow">Looking forward</motion.p>
          <h2 id="forward-title" className="mt-5 font-display text-[clamp(2rem,3.8vw,3.5rem)] font-medium leading-[1.04] tracking-[-0.03em] text-textMain">
            <motion.span initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.08, ease }}>Growing with every </motion.span>
            <motion.span initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.14, ease }} className="relative inline-block italic text-primary">project.<motion.span aria-hidden="true" initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.4, ease }} className="absolute -bottom-1 left-0 h-px w-full origin-left bg-primary/65" /></motion.span>
          </h2>
        </div>
        <div className="space-y-4 leading-relaxed text-textBody">
          <motion.p initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.62, delay: 0.16, ease }}>I’m working toward becoming a stronger full-stack developer while gradually exploring AI and building products that solve practical problems.</motion.p>
          <motion.p initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.62, delay: 0.23, ease }}>As I prepare to graduate in 2027, I’m open to internships, junior developer roles and meaningful collaborations—remotely or in Mandalay and Yangon.</motion.p>
          <motion.p initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.62, delay: 0.3, ease }} className="text-sm font-semibold text-primary">Based in Mandalay, Myanmar · Open to remote, Yangon &amp; Mandalay opportunities.</motion.p>
        </div>
      </div>
      <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.34, ease }} className="mt-14">
        <div className="relative py-6" role="group" aria-label="Growth journey stages">
          <div aria-hidden="true" className="absolute left-[6%] right-[6%] top-1/2 h-px bg-borderMedium" />
          <motion.div aria-hidden="true" initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: reduce ? 0 : 1.6, delay: 0.4, ease }} className="absolute left-[6%] right-[6%] top-1/2 h-px origin-left bg-primary/35" />
          <motion.div aria-hidden="true" animate={{ scaleX: activeGrowth / 3 }} transition={{ duration: reduce ? 0 : 0.45, ease }} className="absolute left-[6%] right-[6%] top-1/2 h-px origin-left bg-primary" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-[4%] top-1/2 grid -translate-y-1/2 grid-cols-4">
            {growthStages.map(([word], index) => <div key={word} className="flex justify-center">{activeGrowth === index && <motion.span layoutId="growth-stage-node" transition={reduce ? { duration: 0 } : { duration: 0.42, ease }} className="h-2.5 w-2.5 rounded-full bg-primaryGlow shadow-[0_0_15px_rgb(var(--color-primary-glow)/0.85)]" />}</div>)}
          </div>
          <div className="relative grid grid-cols-4 gap-1">
            {growthStages.map(([word], index) => {
              const active = activeGrowth === index;
              return <motion.button key={word} type="button" aria-pressed={active} onMouseEnter={() => setActiveGrowth(index)} onFocus={() => setActiveGrowth(index)} onClick={() => setActiveGrowth(index)} initial={reduce ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} animate={{ y: active && !reduce ? -4 : 0 }} transition={{ opacity: { duration: reduce ? 0 : 0.3, delay: reduce ? 0 : 0.48 + index * 0.28 }, y: { duration: reduce ? 0 : 0.3, ease } }} className={`relative justify-self-center bg-bg px-1.5 py-2 font-display text-sm uppercase tracking-[0.06em] transition-[color,opacity,font-style] sm:px-3 sm:text-xl ${active ? "italic text-primary" : "text-textDim opacity-70 hover:opacity-100"}`}><span aria-hidden="true" className={`absolute inset-0 -z-10 rounded-full bg-primary/10 blur-md transition-opacity ${active ? "opacity-100" : "opacity-0"}`} />{word}<svg aria-hidden="true" viewBox="0 0 100 34" preserveAspectRatio="none" className={`pointer-events-none absolute -inset-x-1 inset-y-0 h-full w-[calc(100%+0.5rem)] text-primary transition-opacity ${active ? "opacity-65" : "opacity-0"}`}><motion.ellipse cx="50" cy="17" rx="47" ry="14" fill="none" stroke="currentColor" strokeWidth="1" initial={false} animate={{ pathLength: active ? 1 : 0 }} transition={{ duration: reduce ? 0 : 0.38, ease }} /></svg></motion.button>;
            })}
          </div>
        </div>
        <div className="min-h-20 pt-5 text-center" aria-live="polite"><AnimatePresence mode="wait" initial={false}><motion.p key={activeGrowth} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -6 }} transition={{ duration: reduce ? 0 : 0.24, ease }} className="mx-auto max-w-2xl leading-relaxed text-textBody">{growthStages[activeGrowth][1]}</motion.p></AnimatePresence></div>
      </motion.div>
    </motion.section>

    <motion.section {...sectionMotion} className="section-shell border-t border-borderSoft" aria-labelledby="recognition-title">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end"><SectionIntro id="recognition-title" label="A few moments I’m grateful for" title="Recognition along the way." /><Link href="/achievements" className="text-link">View all achievements ↗</Link></div>
      <div className="mt-10 border-y border-borderMedium">{achievements.map(([placement, event, detail], index) => <motion.article key={event} initial={reduce ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} whileHover={reduce ? undefined : { x: 4 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="grid gap-3 border-b border-borderSoft py-6 last:border-0 md:grid-cols-[0.35fr_1fr_0.7fr] md:items-center md:gap-8"><p className="font-display text-xl italic text-primary sm:text-2xl">{placement}</p><h3 className="font-display text-lg sm:text-xl">{event}</h3><p className="text-sm text-textMuted md:text-right">{detail}</p></motion.article>)}</div>
    </motion.section>
  </main>;
}
