"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Sparkles, Users } from "lucide-react";
import portrait from "@/src/assets/khin1.jpg";
import { AchievementsPreview } from "@/src/components/HomePreviews";

export function AboutPage() {
  return (
    <main id="main-content">
      <section className="section-shell !pb-0 pt-28 md:pt-36">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[45%_45%_10%_10%] border border-primary/35 bg-bgCard">
            <Image src={portrait} alt="Khin Myat Thu" fill className="object-cover object-top" sizes="(max-width: 1024px) 90vw, 32vw" />
          </div>
          <div>
            <p className="eyebrow">About me</p>
            <h1 className="section-title mt-5">I&apos;m still becoming, but I&apos;m already building.</h1>
            <p className="mt-8 text-xl leading-[1.65] text-textBody md:text-2xl">I&apos;m Khin Myat Thu, a final-year Computer Science student at the Myanmar Institute of Information Technology (MIIT).</p>
            <p className="mt-6 leading-relaxed text-textDim">I enjoy turning ideas into things I can actually see, click, and use. Some begin at hackathons, some come from everyday problems, and some start because I&apos;m curious whether I can build them.</p>
            <p className="mt-4 leading-relaxed text-textDim">I&apos;m growing toward becoming a full-stack developer while exploring AI-powered products. I learn primarily by doing — building projects, working with teammates, experimenting, and learning from mistakes.</p>
          </div>
        </motion.div>
        <div className="mt-14 border-t border-borderMedium md:mt-16">
          <article className="grid gap-5 border-b border-borderSoft py-8 md:grid-cols-[0.75fr_1.25fr] md:items-start md:gap-12 md:py-9">
            <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-4">
              <span className="font-display text-xl italic text-primary/70" aria-hidden="true">01</span>
              <Code2 size={19} className="text-primary" aria-hidden="true" />
              <h2 className="text-lg font-semibold text-textMain sm:text-xl">Learning by Doing</h2>
            </div>
            <p className="max-w-[580px] text-[15px] leading-[1.65] text-textMain/80 sm:text-base md:justify-self-end">Projects have taught me technical skills, teamwork, product thinking, problem solving, communication, presentation, and how important it is to simply start.</p>
          </article>
          <article className="grid gap-5 border-b border-borderSoft py-8 md:grid-cols-[0.75fr_1.25fr] md:items-start md:gap-12 md:py-9">
            <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-4">
              <span className="font-display text-xl italic text-primary/70" aria-hidden="true">02</span>
              <Users size={19} className="text-primary" aria-hidden="true" />
              <h2 className="text-lg font-semibold text-textMain sm:text-xl">Sharing What I Learn</h2>
            </div>
            <p className="max-w-[580px] text-[15px] leading-[1.65] text-textMain/80 sm:text-base md:justify-self-end">I enjoy mentoring students, helping with hackathon and assignment preparation, teaching, presenting, and taking part in community activities.</p>
          </article>
          <article className="grid gap-5 py-8 md:grid-cols-[0.75fr_1.25fr] md:items-start md:gap-12 md:py-9">
            <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-4">
              <span className="font-display text-xl italic text-primary/70" aria-hidden="true">03</span>
              <Sparkles size={19} className="text-primary" aria-hidden="true" />
              <h2 className="text-lg font-semibold text-textMain sm:text-xl">Beyond Technology</h2>
            </div>
            <p className="max-w-[580px] text-[15px] leading-[1.65] text-textMain/80 sm:text-base md:justify-self-end">I enjoy singing, listening to music, cooking, and of course, a good cup of coffee ☕. I also love exploring new ideas and turning the ones that excite me into something I can actually build.</p>
          </article>
        </div>
      </section>
      <AchievementsPreview />
    </main>
  );
}
