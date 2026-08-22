"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database, Smartphone } from "lucide-react";
import Link from "next/link";
import Hero from "@/src/components/Hero";

const stats = [["8", "Projects represented"], ["2", "Team hackathon wins"], ["200 / 1,331", "Cursor hackathon selection"], ["Final year", "Computer Science at MIIT"]];
const expertise = [
  { title: "Web development", text: "Learning frontend and backend development through React, Next.js, Django, and real projects.", icon: Code2 },
  { title: "Backend & data", text: "Exploring APIs, CRUD systems, databases, authentication, and real-time functionality.", icon: Database },
  { title: "Mobile & AI", text: "Building with React Native and Firebase while becoming more curious about AI-powered products.", icon: Smartphone },
];

export function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <section className="section-shell pt-4">
        <div className="grid overflow-hidden rounded-2xl border border-borderSoft bg-bgCard/50 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => <div key={label} className="border-b border-borderSoft p-6 text-center last:border-0 sm:border-r lg:border-b-0"><p className="font-display text-4xl font-semibold text-primary">{value}</p><p className="mt-2 text-xs uppercase tracking-[0.14em] text-textMuted">{label}</p></div>)}
        </div>
      </section>
      <section className="section-shell">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center"><p className="eyebrow">Learning by building</p><h2 className="section-title mt-5">I&apos;m still becoming, but I&apos;m already building.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">{expertise.map(({ title, text, icon: Icon }) => <article key={title} className="rounded-2xl border border-borderSoft bg-bgCard/60 p-7"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon size={19}/></div><h3 className="mt-6 font-display text-2xl">{title}</h3><p className="mt-3 leading-relaxed text-textBody">{text}</p></article>)}</div>
        </motion.div>
      </section>
      <section className="section-shell pt-0"><div className="rounded-3xl border border-primary/25 bg-primary/[0.07] px-7 py-14 text-center md:px-12"><p className="eyebrow">Let&apos;s build something together</p><h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl md:text-5xl">Have an idea worth turning into a useful product?</h2><div className="mt-8 flex flex-wrap justify-center gap-4"><Link href="/contact-me" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-bg">Get in touch <ArrowUpRight size={17}/></Link><Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-borderMedium px-6 py-3 text-sm font-semibold">View projects</Link></div></div></section>
    </main>
  );
}
