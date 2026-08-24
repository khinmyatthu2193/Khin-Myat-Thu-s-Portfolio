"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownToLine, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import profile from "../assets/khin.jpg";
import { assetUrl } from "@/lib/asset-url";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const portraitRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  const updatePortrait = (x: number, y: number) => {
    const portrait = portraitRef.current;
    if (!portrait) return;
    portrait.style.setProperty("--pointer-x", x.toFixed(3));
    portrait.style.setProperty("--pointer-y", y.toFixed(3));
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse" || !window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (event.clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2)));
    const y = Math.max(-1, Math.min(1, (event.clientY - (bounds.top + bounds.height / 2)) / (bounds.height / 2)));
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => updatePortrait(x, y));
  };

  const resetPortrait = () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => updatePortrait(0, 0));
  };

  return (
    <section id="home" className="relative z-10 flex items-center px-5 pb-12 pt-28 sm:min-h-[680px] sm:px-8 sm:pb-14 sm:pt-32 lg:min-h-[min(720px,82vh)] lg:px-12">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        <div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="mb-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.16em] text-textDim">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-2 text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary motion-reduce:animate-none" /> Available for internships &amp; junior roles
            </span>
            <span className="inline-flex items-center gap-1.5 normal-case tracking-normal"><MapPin size={13} /> Based in Mandalay, Myanmar · Open to remote, Yangon &amp; Mandalay opportunities.</span>
          </motion.div>

          <h1 className="font-display text-[clamp(2.15rem,4vw,4rem)] font-medium leading-[0.98] tracking-[-0.04em]">
            {["Khin Myat", "Thu."].map((line, index) => <span key={line} className="block overflow-hidden"><motion.span className="block text-gradient" initial={reduceMotion ? false : { opacity: 0, y: "105%" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}>{line}</motion.span></span>)}
          </h1>

          <motion.div className="mt-6 max-w-[600px]" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}>
            <p className="text-[clamp(1.3125rem,2vw,2rem)] font-medium leading-[1.3] tracking-[-0.012em] text-textMain">
              Final-year <span className="font-display italic">Computer Science</span> student and aspiring <span className="font-display italic text-primary">full-stack developer</span> building practical <span className="font-display italic text-primaryGlow">web and AI-powered products</span>.
            </p>
            <p className="mt-4 max-w-[580px] text-[1.0625rem] leading-relaxed text-textBody md:text-lg">
              I enjoy turning ideas into useful, thoughtful digital experiences.
            </p>
            <motion.div className="mt-6 flex flex-wrap items-center gap-3" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}>
              <Link href="/projects" className="button-primary">View My Projects</Link>
              <a className="button-secondary" href="/Khin_Myat_Thu_CV.pdf" download="Khin_Myat_Thu_CV.pdf">
                Download CV <ArrowDownToLine size={16} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="portrait-float relative mx-auto w-full max-w-[390px]">
          <motion.div ref={portraitRef} onPointerMove={handlePointerMove} onPointerLeave={resetPortrait} className="portrait-composition relative" initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 1.06 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.05, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div aria-hidden="true" className="portrait-glow absolute inset-[8%] -z-10 rounded-full bg-primary/25 blur-3xl" initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.5 }} />
          <svg aria-hidden="true" className="portrait-ring pointer-events-none absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-primary/35" viewBox="0 0 420 420"><motion.circle cx="210" cy="210" r="207" fill="none" stroke="currentColor" strokeWidth="1" initial={reduceMotion ? false : { pathLength: 0, rotate: -3 }} animate={{ pathLength: 1, rotate: 2 }} transition={{ pathLength: { duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }, rotate: { duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] } }} /></svg>
          <div className="portrait-frame relative aspect-square overflow-hidden rounded-full border-2 border-primary/45 bg-bgCard p-1.5">
            <motion.div className="h-full w-full overflow-hidden rounded-full" initial={reduceMotion ? false : { clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <img src={assetUrl(profile)} alt="Portrait of Khin Myat Thu" width="480" height="480" fetchPriority="high" className="portrait-photo h-full w-full rounded-full object-cover object-top grayscale-[12%] transition-[filter] duration-700 hover:grayscale-0" />
            </motion.div>
          </div>
          <div className="portrait-offset-ring absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-full border border-primary/25" />
          <motion.div className="portrait-badge absolute bottom-3 right-3 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-bg font-display text-3xl italic text-primary shadow-lg" initial={reduceMotion ? false : { opacity: 0, scale: 0.72 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}>
            K.
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
