"use client";
import { motion } from "framer-motion";
import Image from "next/image";
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
        <section className="mt-14 grid gap-10 border-t border-borderMedium py-12 md:mt-16 md:grid-cols-[0.8fr_1.2fr] md:gap-14 md:py-14" aria-labelledby="beyond-code-title">
          <div className="max-w-md">
            <p className="eyebrow">Beyond the code</p>
            <h2 id="beyond-code-title" className="mt-4 font-display text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">What shapes the way I build.</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-textDim sm:text-base">Projects, people, and curiosity continue to shape how I learn and create.</p>
          </div>
          <div className="space-y-8 md:space-y-9">
            <article>
              <h3 className="font-display text-[1.375rem] font-medium text-primary sm:text-2xl">Learning by Doing</h3>
              <p className="mt-3 max-w-[600px] text-[15px] leading-[1.65] text-textBody sm:text-base">Projects have taught me technical skills, teamwork, product thinking, problem solving, communication, presentation, and how important it is to simply start.</p>
            </article>
            <article>
              <h3 className="font-display text-[1.375rem] font-medium text-primary sm:text-2xl">Sharing What I Learn</h3>
              <p className="mt-3 max-w-[600px] text-[15px] leading-[1.65] text-textBody sm:text-base">I enjoy mentoring students, helping with hackathon and assignment preparation, teaching, presenting, and taking part in community activities.</p>
            </article>
            <article>
              <h3 className="font-display text-[1.375rem] font-medium text-primary sm:text-2xl">Beyond Technology</h3>
              <p className="mt-3 max-w-[600px] text-[15px] leading-[1.65] text-textBody sm:text-base">I enjoy singing, listening to music, cooking, and of course, a good cup of coffee ☕. I also love exploring new ideas and turning the ones that excite me into something I can actually build.</p>
            </article>
          </div>
        </section>
      </section>
      <AchievementsPreview />
    </main>
  );
}
