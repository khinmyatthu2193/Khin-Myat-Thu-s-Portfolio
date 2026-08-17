import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import ProjectGridCard from "./ProjectGridCard";

const filters = ["All", ...Array.from(new Set(projects.map((project) => project.category)))] as const;

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const visibleProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <main id="main-content" className="relative z-10">
      <section className="section-shell pb-10 pt-28 md:pb-14 md:pt-36">
        <a href="#home" className="mb-7 inline-flex items-center gap-2 text-sm text-textDim transition-colors hover:text-primary">
          <ArrowLeft size={17} /> Back home
        </a>
        <p className="eyebrow">Selected work / Archive</p>
        <div className="mt-5 grid gap-7 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <h1 className="section-title">All projects.</h1>
          <p className="max-w-xl text-lg leading-relaxed text-textBody">
            A collection of web, mobile, AI, and innovation projects—each shaped around a practical problem.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-2 border-y border-borderSoft py-4" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                activeFilter === filter
                  ? "border-primary bg-primary text-bg"
                  : "border-borderMedium text-textDim hover:border-primary hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <p className="mb-8 text-sm text-textMuted" aria-live="polite">
          Showing {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
        </p>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectGridCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
