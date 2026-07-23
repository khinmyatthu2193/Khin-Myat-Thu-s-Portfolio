import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import profile from "../assets/khin.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative z-10 flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.16em] text-textDim">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-2 text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Available for opportunities
            </span>
            <span className="inline-flex items-center gap-1.5"><MapPin size={13} /> Mandalay, Myanmar</span>
          </div>

          <h1 className="font-display text-[clamp(3.6rem,8vw,8.6rem)] font-medium leading-[0.85] tracking-[-0.055em]">
            Khin Myat
            <span className="block text-gradient italic">Thu.</span>
          </h1>

          <div className="mt-9 grid max-w-3xl gap-7 border-l border-primary/50 pl-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-textDim md:text-xl">
              Full-stack developer and product builder creating clear, human-centered web, mobile, and AI experiences.
            </p>
            <a href="#projects" className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-bg transition-transform hover:rotate-[-8deg] hover:scale-105" aria-label="View selected projects">
              <ArrowDownRight size={23} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm">
            <a className="text-link group" href="#contact">Contact <ArrowUpRight size={15} /></a>
            <a className="text-link group" href="https://github.com/khinmyatthu2193" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
            <a className="text-link group" href="https://www.linkedin.com/in/khin-myat-thu-837892352" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-[360px]">
          <div className="portrait-frame relative aspect-square overflow-hidden rounded-full border-2 border-primary/45 bg-bgCard p-1.5">
            <img src={profile} alt="Portrait of Khin Myat Thu" width="480" height="480" fetchPriority="high" className="h-full w-full rounded-full object-cover object-top grayscale-[12%] transition duration-700 hover:scale-[1.025] hover:grayscale-0" />
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
