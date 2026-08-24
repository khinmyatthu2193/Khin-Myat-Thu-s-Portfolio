"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Hero from "@/src/components/Hero";
import { FeaturedProjects } from "@/src/components/HomePreviews";

const stats = [["6+", "Projects Built"], ["Full-Stack + AI", "Focus"], ["Product-Minded", "Approach"], ["2027", "Graduating"]];
const contributions = [
  {
    word: "BUILD.",
    label: "Full-stack products",
    description: "Responsive interfaces, application logic, and data.",
  },
  {
    word: "SIMPLIFY.",
    label: "Digital experiences",
    description: "Clearer flows, cleaner interfaces, and thoughtful iteration.",
  },
  {
    word: "EXPLORE.",
    label: "Useful AI",
    description: "Practical AI features designed around real user needs.",
  },
];

export function HomePage() {
  const reduceMotion = useReducedMotion();
  const [activeContribution, setActiveContribution] = useState(0);
  const active = contributions[activeContribution];

  return (
    <main id="main-content">
      <Hero />
      <FeaturedProjects />

      <motion.section initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="home-section !pb-8 !pt-6 sm:!pb-10" aria-label="Portfolio highlights">
        <div className="grid overflow-hidden rounded-2xl border border-borderSoft bg-bgCard/50 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label], index) => (
            <motion.div key={label} initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.07 }} className={`flex min-h-28 flex-col justify-center p-5 text-center sm:min-h-32 sm:p-6 ${index < 3 ? "border-b border-borderSoft" : ""} ${index % 2 === 0 ? "sm:border-r" : ""} ${index >= 2 ? "sm:border-b-0" : ""} ${index < 3 ? "lg:border-b-0 lg:border-r" : "lg:border-r-0"}`}>
              <p className={`font-display font-semibold text-primary ${value.length > 6 ? "text-2xl md:text-3xl" : "text-4xl"}`}>{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-textMuted">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="home-section scroll-mt-20 !pb-16 !pt-14 sm:!pt-16 md:!pb-24"
        aria-labelledby="contribution-title"
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative overflow-hidden border-y border-borderMedium py-8 sm:py-10 lg:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }} className="relative flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40 motion-reduce:animate-none" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primaryGlow shadow-[0_0_12px_rgb(var(--color-primary-glow)/0.8)]" /></span>
            Available for internships &amp; junior roles
          </motion.div>

          <div className="relative mt-8 grid gap-8 lg:grid-cols-[0.72fr_1fr_0.7fr] lg:items-center lg:gap-10">
            <motion.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h2 id="contribution-title" className="max-w-md font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">What can we build together?</h2>
              <p className="mt-5 text-sm text-textBody sm:text-base">You need someone who can</p>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28 }}
              onMouseLeave={(event) => { if (!event.currentTarget.contains(document.activeElement)) setActiveContribution(0); }}
              className="relative flex flex-col items-start"
              role="group"
              aria-label="Ways I can contribute"
            >
              <motion.span
                aria-hidden="true"
                className="absolute -left-1 h-2.5 w-2.5 rounded-full bg-primaryGlow shadow-[0_0_18px_rgb(var(--color-primary-glow)/0.9)]"
                animate={{ top: `${activeContribution * 33.33 + 14}%` }}
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 220, damping: 24 }}
              />
              {contributions.map((item, index) => {
                const isActive = index === activeContribution;
                return (
                  <motion.button
                    key={item.word}
                    type="button"
                    aria-pressed={isActive}
                    onMouseEnter={() => setActiveContribution(index)}
                    onFocus={() => setActiveContribution(index)}
                    onClick={() => setActiveContribution(index)}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.28 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className={`group relative ml-5 py-0.5 text-left font-display text-[clamp(2.8rem,10vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.055em] transition-colors duration-300 lg:text-[clamp(3.5rem,5.4vw,5.75rem)] ${isActive ? "italic text-primary" : "text-textDim hover:text-primary"}`}
                  >
                    {item.word}
                    <svg aria-hidden="true" viewBox="0 0 300 90" preserveAspectRatio="none" className={`pointer-events-none absolute -inset-x-3 -inset-y-1 h-[calc(100%+0.5rem)] w-[calc(100%+1.5rem)] overflow-visible transition-opacity duration-300 ${isActive ? "opacity-70" : "opacity-0"}`}>
                      <motion.ellipse cx="150" cy="45" rx="146" ry="37" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" initial={false} animate={{ pathLength: isActive ? 1 : 0 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }} />
                    </svg>
                    <span className="sr-only"> {isActive ? "selected" : "select"}</span>
                  </motion.button>
                );
              })}
            </motion.div>

            <div className="relative min-h-[150px] border-l border-borderMedium pl-6 lg:min-h-[178px] lg:self-end lg:pl-8">
              <svg aria-hidden="true" className="pointer-events-none absolute -left-24 -top-8 hidden h-60 w-24 overflow-visible text-primary/40 lg:block" viewBox="0 0 100 240" fill="none"><motion.path animate={{ d: `M2 ${38 + activeContribution * 78} C 42 ${38 + activeContribution * 78}, 45 118, 98 118` }} stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" initial={reduceMotion ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={reduceMotion ? { duration: 0 } : { duration: 0.38, ease: [0.16, 1, 0.3, 1] }} /></svg>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={active.word} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -6 }} transition={{ duration: reduceMotion ? 0 : 0.22 }} aria-live="polite">
                  <p className="font-display text-2xl italic text-textMain">{active.label}</p>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-textBody">{active.description}</p>
                  <Link href="/projects" className="mt-5 inline-flex text-sm font-semibold text-primary underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primaryGlow">See related work ↗</Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.div initial={reduceMotion ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="relative mt-10 grid gap-5 border-t border-borderSoft pt-6 text-xs uppercase tracking-[0.13em] text-textMuted sm:grid-cols-3 sm:items-end">
            <p className="normal-case tracking-normal">Based in Mandalay, Myanmar · Open to remote, Yangon &amp; Mandalay opportunities.</p>
            <p className="hidden text-center sm:block">Move your cursor to explore</p>
            <Link href="/contact-me#contact" className="justify-self-start font-semibold text-textMain underline decoration-borderMedium underline-offset-4 transition-colors hover:text-primary sm:justify-self-end">Start a conversation ↗</Link>
          </motion.div>
        </div>
      </motion.section>

    </main>
  );
}
