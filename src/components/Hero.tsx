import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import profile from "../assets/khin.jpg";
import { assetUrl } from "@/lib/asset-url";

export default function Hero() {
  return (
    <section id="home" className="relative z-10 flex items-center px-5 pb-16 pt-32 sm:min-h-[760px] sm:px-8 sm:pb-20 sm:pt-36 lg:min-h-[min(820px,92vh)] lg:px-12">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-7 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.16em] text-textDim">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-2 text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Open to opportunities
            </span>
            <span className="inline-flex items-center gap-1.5"><MapPin size={13} /> Mandalay, Myanmar</span>
          </div>

          <h1 className="font-display text-[clamp(3rem,7vw,7.2rem)] font-medium leading-[0.88] tracking-[-0.05em]">
            <span className="text-gradient">Khin Myat</span>
            <span className="block text-gradient">Thu.</span>
          </h1>

          <div className="mt-7 max-w-3xl border-l border-primary/50 pl-6">
            <p className="max-w-[34rem] text-xl font-medium leading-relaxed text-textMain md:text-2xl">
              Final-year Computer Science student building practical web, mobile, and AI-powered products while growing toward full-stack development.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-textDim md:text-base">
              I&apos;m still learning and experimenting — but I keep building.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/projects" className="button-primary">View My Projects <ArrowUpRight size={17} aria-hidden="true" /></Link>
              <Link href="/about-me" className="button-secondary">About Me</Link>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm">
            <Link className="text-link group" href="/contact-me">Contact <ArrowUpRight size={15} /></Link>
            <a className="text-link group" href="https://github.com/khinmyatthu2193" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
            <a className="text-link group" href="https://www.linkedin.com/in/khin-myat-thu-837892352" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-[360px]">
          <div className="portrait-frame relative aspect-square overflow-hidden rounded-full border-2 border-primary/45 bg-bgCard p-1.5">
            <img src={assetUrl(profile)} alt="Portrait of Khin Myat Thu" width="480" height="480" fetchPriority="high" className="h-full w-full rounded-full object-cover object-top grayscale-[12%] transition duration-700 hover:scale-[1.025] hover:grayscale-0" />
          </div>
          <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-full border border-primary/25" />
          <div className="absolute bottom-3 right-3 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-bg font-display text-3xl italic text-primary shadow-lg">
            K.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
