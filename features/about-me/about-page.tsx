"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import portrait from "@/src/assets/khin1.jpg";

export function AboutPage() {
  return (
    <main id="main-content">
      <section className="section-shell pb-24 pt-28 md:pt-36">
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
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-borderSoft bg-bgCard/60 p-7"><p className="eyebrow">Learning by doing</p><p className="mt-4 leading-relaxed text-textBody">Projects have taught me technical skills, teamwork, product thinking, problem solving, communication, presentation, and how important it is to simply start.</p></article>
          <article className="rounded-2xl border border-borderSoft bg-bgCard/60 p-7"><p className="eyebrow">Sharing what I learn</p><p className="mt-4 leading-relaxed text-textBody">I enjoy mentoring students, helping with hackathon and assignment preparation, teaching, presenting, and taking part in community activities.</p></article>
          <article className="rounded-2xl border border-borderSoft bg-bgCard/60 p-7"><p className="eyebrow">Beyond technology</p><p className="mt-4 leading-relaxed text-textBody">I enjoy singing, listening to music, cooking, and of course, a good cup of coffee ☕. I also love exploring new ideas and turning the ones that excite me into something I can actually build.</p></article>
        </div>
        <div className="mt-12 rounded-2xl border border-primary/25 bg-primary/[0.06] p-7 md:p-9">
          <p className="eyebrow">Community</p><h2 className="mt-3 font-display text-3xl">Talkware</h2><p className="mt-3 max-w-3xl leading-relaxed text-textBody">Since December 2025, I&apos;ve contributed as a Coordinator, Event Owner, and Workflow Designer. One example is the Talkware June Meetup — Developer Productivity Hacks and Tools.</p>
        </div>
      </section>
    </main>
  );
}
