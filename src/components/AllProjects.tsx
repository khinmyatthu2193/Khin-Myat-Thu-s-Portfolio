import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects, type Project } from "../data/projects";
import styles from "./Projects.module.css";
import FeaturedProject from "./FeaturedProject";
import ProjectGridCard from "./ProjectGridCard";

const featuredProject = projects.find((project) => project.featured);
const archiveProjects = projects;
const filterCategory = (project: Project) => project.projectType === "MIIT special project" || project.status === "Academic Project" ? "Academic" : project.category;
const filters = ["All", ...Array.from(new Set(archiveProjects.map(filterCategory)))];
type SortOrder = "newest" | "oldest" | "title";

function compareProjects(a: Project, b: Project, order: SortOrder) {
  if (order === "title") return a.title.localeCompare(b.title);
  // Undated projects stay last in both chronological views.
  if (!a.sortDate || !b.sortDate) return a.sortDate ? -1 : b.sortDate ? 1 : a.title.localeCompare(b.title);
  // Compare date precision as supplied, without parsing locale-dependent labels.
  const comparison = a.sortDate.localeCompare(b.sortDate);
  return (order === "newest" ? -comparison : comparison) || a.title.localeCompare(b.title);
}

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const visibleProjects = useMemo(
    () => archiveProjects
      .filter((project) => activeFilter === "All" || filterCategory(project) === activeFilter)
      .sort((a, b) => compareProjects(a, b, sortOrder)),
    [activeFilter, sortOrder],
  );

  return (
    <main id="main-content" className={`relative z-10 ${styles.projects}`}>
      <section className="mx-auto max-w-[1280px] px-5 pb-9 pt-28 sm:px-8 md:pb-10 md:pt-32 lg:px-12">
        <p className="eyebrow !text-[0.6875rem]">Selected work</p>
        <div className="mt-4 grid gap-5 lg:grid-cols-[1.1fr_0.7fr] lg:items-end lg:gap-12">
          <h1 className="max-w-3xl font-display text-[clamp(2rem,calc(1.5rem+2vw),2.75rem)] font-medium leading-[1.07] tracking-[-0.035em] text-balance">
            Projects built around real problems.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-textBody sm:text-lg lg:pb-1">
            A collection of web, mobile and AI-powered products shaped through practical problem-solving.
          </p>
        </div>
      </section>

      {featuredProject && (
        <section className="mx-auto max-w-[1280px] px-5 pb-9 sm:px-8 md:pb-10 lg:px-12">
          <FeaturedProject project={featuredProject} />
        </section>
      )}

      <section className="section-shell !max-w-[1280px] !pt-0">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-[clamp(1.625rem,calc(1.4rem+0.7vw),1.875rem)] font-medium leading-[1.1] tracking-[-0.025em]">More projects.</h2>
          </div>
          <p className="text-sm text-textMuted" aria-live="polite">
            {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <div className="mt-4 flex min-w-0 flex-col gap-3 border-b border-borderSoft pb-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "border-primary bg-primary text-bg"
                    : "border-borderMedium bg-bgCard/45 text-textDim hover:border-primary hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <label className="flex shrink-0 items-center gap-2 text-sm text-textMuted">
            Sort
            <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as SortOrder)} className="min-h-11 rounded-xl border border-borderSoft bg-bgCard px-3 py-2 text-sm text-textMain">
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="title">A–Z</option>
            </select>
          </label>
        </div>

        <motion.div layout className="mt-5 grid min-h-[22rem] grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => <ProjectGridCard key={project.slug} project={project} index={index} />)}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
