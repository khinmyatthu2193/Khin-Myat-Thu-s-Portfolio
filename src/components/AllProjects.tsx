import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectGridCard from "./ProjectGridCard";

const featuredProject = projects.find((project) => project.featured);
const archiveProjects = projects.filter((project) => !project.featured);
const filters = ["All", ...Array.from(new Set(archiveProjects.map((project) => project.category)))] as const;

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const visibleProjects = useMemo(
    () => activeFilter === "All" ? archiveProjects : archiveProjects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <main id="main-content" className="relative z-10">
      <section className="mx-auto max-w-[1400px] px-5 pb-10 pt-28 sm:px-8 md:pb-12 md:pt-32 lg:px-12">
        <p className="eyebrow">Selected work</p>
        <div className="mt-4 grid gap-5 lg:grid-cols-[1.1fr_0.7fr] lg:items-end lg:gap-12">
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.03] tracking-[-0.035em] text-balance sm:text-5xl lg:text-[3.5rem]">
            Projects built around real problems.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-textBody sm:text-lg lg:pb-1">
            A collection of web, mobile and AI-powered products shaped through practical problem-solving.
          </p>
        </div>
      </section>

      {featuredProject && (
        <section className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-8 md:pb-20 lg:px-12">
          <FeaturedProject project={featuredProject} />
        </section>
      )}

      <section className="section-shell border-t border-borderSoft pt-14 md:pt-16">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Project archive</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.025em] sm:text-4xl">More work and experiments.</h2>
          </div>
          <p className="text-sm text-textMuted" aria-live="polite">
            {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <div className="mt-7 flex max-w-full flex-wrap gap-2 border-y border-borderSoft py-4" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "border-primary bg-primary text-bg"
                  : "border-borderMedium bg-bgCard/45 text-textDim hover:border-primary hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-9 grid min-h-[22rem] gap-6 md:grid-cols-2 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => <ProjectGridCard key={project.slug} project={project} index={index} />)}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
