import { motion } from "framer-motion";
import { ArrowDownToLine, MapPin } from "lucide-react";
import Link from "next/link";
import profile from "../assets/khin.jpg";
import { assetUrl } from "@/lib/asset-url";

export default function Hero() {
  return (
    <section id="home" className="relative z-10 flex items-center px-5 pb-12 pt-28 sm:min-h-[680px] sm:px-8 sm:pb-14 sm:pt-32 lg:min-h-[min(720px,82vh)] lg:px-12">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.16em] text-textDim">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-2 text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Open to opportunities
            </span>
            <span className="inline-flex items-center gap-1.5"><MapPin size={13} /> Mandalay, Myanmar</span>
          </div>

          <h1 className="font-display text-[clamp(2.3rem,4.5vw,4.5rem)] font-medium leading-[0.94] tracking-[-0.04em]">
            <span className="text-gradient">Khin Myat</span>
            <span className="block text-gradient">Thu.</span>
          </h1>

          <div className="mt-6 max-w-[600px]">
            <p className="text-[clamp(1.3125rem,2vw,2rem)] font-medium leading-[1.3] tracking-[-0.012em] text-textMain">
              Final-year <span className="font-display italic">Computer Science</span> student and aspiring <span className="font-display italic text-primary">full-stack developer</span> building practical <span className="font-display italic text-primaryGlow">web and AI-powered products</span>.
            </p>
            <p className="mt-4 max-w-[580px] text-[1.0625rem] leading-relaxed text-textBody md:text-lg">
              I enjoy turning ideas into useful, thoughtful digital experiences.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/projects" className="button-primary">View My Projects</Link>
              <a className="button-secondary" href="/Khin_Myat_Thu_CV.pdf" download="Khin_Myat_Thu_CV.pdf">
                Download CV <ArrowDownToLine size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-[390px]">
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
