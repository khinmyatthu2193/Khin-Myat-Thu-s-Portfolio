import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { achievements } from "../data/achievements";
import AchievementCard from "./AchievementCard";

const filters = ["All", "Certificate", "Hackathon", "Others"] as const;

export default function AllAchievements() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const visibleAchievements = useMemo(
    () => activeFilter === "All"
      ? achievements
      : achievements.filter((achievement) => achievement.type === activeFilter),
    [activeFilter],
  );

  return (
    <main id="main-content" className="relative z-10">
      <section className="section-shell pb-10 pt-28 md:pb-14 md:pt-36">
        <a href="#home" className="mb-10 inline-flex items-center gap-2 text-sm text-textDim transition-colors hover:text-primary">
          <ArrowLeft size={17} /> Back home
        </a>
        <p className="eyebrow">Milestones / Archive</p>
        <div className="mt-5 grid gap-7 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <h1 className="section-title">All achievements.</h1>
          <p className="max-w-xl text-lg leading-relaxed text-textBody">
            Awards, certificates, and meaningful moments collected throughout my learning and building journey.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-y border-borderSoft py-5" aria-label="Filter achievements">
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
              {filter === "All" ? "All" : `${filter}${filter === "Others" ? "" : "s"}`}
            </button>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <p className="mb-8 text-sm text-textMuted" aria-live="polite">
          Showing {visibleAchievements.length} {visibleAchievements.length === 1 ? "achievement" : "achievements"}
        </p>
        <div className="grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {visibleAchievements.map((achievement, index) => (
            <AchievementCard key={achievement.slug} achievement={achievement} index={index} />
          ))}
        </div>
        {visibleAchievements.length === 0 && (
          <div className="rounded-2xl border border-dashed border-borderMedium px-6 py-16 text-center text-textMuted">
            No {activeFilter.toLowerCase()} achievements have been added yet.
          </div>
        )}
      </section>
    </main>
  );
}
