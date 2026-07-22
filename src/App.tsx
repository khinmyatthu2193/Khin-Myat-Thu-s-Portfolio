import { MotionConfig, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import { projects } from "./data/projects";

const strengths = [
  "Product-minded development",
  "Clean, accessible interfaces",
  "End-to-end delivery",
];

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen overflow-x-hidden bg-bg text-textMain selection:bg-primary selection:text-bg">
      <a href="#main-content" className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-bg transition-transform focus:translate-y-0">
        Skip to content
      </a>
      <div className="noise fixed inset-0 z-50 pointer-events-none" />
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="grid-lines absolute inset-0" />
      </div>

      <Navbar />
      <main id="main-content">
        <Hero />

        <section id="about" className="section-shell scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20"
          >
            <div>
              <p className="eyebrow">01 / About</p>
              <h2 className="section-title mt-5">I build useful ideas into products people can trust.</h2>
            </div>

            <div className="lg:pt-9">
              <p className="text-xl leading-relaxed text-textDim md:text-2xl md:leading-relaxed">
                I’m a final-year Computer Science student focused on turning practical problems into thoughtful digital products—from mobile-first business tools to AI-assisted systems.
              </p>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {strengths.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-t border-borderMedium pt-4 text-sm leading-relaxed text-textMain">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={17} />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-borderSoft bg-borderSoft sm:grid-cols-3">
                {[
                  ["MIIT", "Final-year CS"],
                  ["6+", "Products built"],
                  ["1st", "Hackathon 2026"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-bgCard/90 p-5 sm:p-6">
                    <p className="font-display text-3xl font-semibold text-primary">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-textMuted">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <Skills />

        <section id="projects" className="section-shell scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="eyebrow">03 / Selected work</p>
              <h2 className="section-title mt-5">Projects with purpose.</h2>
            </div>
            <a href="https://github.com/khinmyatthu2193" target="_blank" rel="noreferrer" className="text-link group">
              Explore GitHub <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <div className="border-t border-borderMedium">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <Blog />

        <Contact />
      </main>
    </div>
    </MotionConfig>
  );
}
