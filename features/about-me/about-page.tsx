"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import portrait from "@/src/assets/khin.jpg";

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
            <h1 className="section-title mt-5">I build useful ideas into products people can trust.</h1>
            <p className="mt-8 text-xl leading-[1.65] text-textBody md:text-2xl">I&apos;m Khin Myat Thu, a final-year Computer Science student at the Myanmar Institute of Information Technology.</p>
            <p className="mt-6 leading-relaxed text-textDim">I enjoy turning practical problems into thoughtful web, mobile, and AI-powered products. My work combines full-stack engineering, product thinking, and curiosity for emerging technology.</p>
            <p className="mt-4 leading-relaxed text-textDim">I care about clear interfaces, dependable systems, and shipping things that are genuinely useful.</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
