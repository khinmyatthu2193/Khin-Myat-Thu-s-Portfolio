"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import portrait from "@/src/assets/khin1.jpg";
import { AchievementsPreview } from "@/src/components/HomePreviews";

export function AboutPage() {
  return (
    <main id="main-content">
      <section className="section-shell !pb-8 pt-28 md:!pb-10 md:pt-36">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[45%_45%_10%_10%] border border-primary/35 bg-bgCard">
            <Image src={portrait} alt="Khin Myat Thu" fill className="object-cover object-top" sizes="(max-width: 1024px) 90vw, 32vw" />
          </div>
          <div>
            <p className="eyebrow">About me</p>
            <h1 className="section-title mt-5">I&apos;m still becoming, but I&apos;m already building.</h1>
            <p className="mt-8 text-xl leading-[1.65] text-textBody md:text-2xl">I&apos;m Khin Myat Thu, a final-year Computer Science student at the Myanmar Institute of Information Technology (MIIT).</p>
            <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-[1.65] text-textDim sm:text-base">
              <p>I <span className="font-display italic text-textMain">learn primarily by doing</span>—building projects, working with teammates, experimenting, and learning from mistakes. These experiences have strengthened my technical skills, teamwork, product thinking, problem solving, communication, and confidence to simply start.</p>
              <p>I also enjoy <span className="font-display italic text-textMain">sharing what I learn</span> through mentoring students, helping with hackathon and assignment preparation, teaching, presenting, and participating in community activities.</p>
              <p><span className="font-display italic text-textMain">Outside technology</span>, I enjoy singing, listening to music, cooking, and a good cup of coffee. I&apos;m naturally curious and enjoy turning interesting ideas into things people can actually see, click, and use.</p>
            </div>
          </div>
        </motion.div>
      </section>
      <AchievementsPreview />
    </main>
  );
}
