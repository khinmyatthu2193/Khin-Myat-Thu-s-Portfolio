import { ArrowLeft } from "lucide-react";
import { achievements } from "../data/achievements";
import AchievementCard from "./AchievementCard";

export default function AllAchievements() {
  return (
    <main id="main-content" className="relative z-10">
      <section className="section-shell pb-14 pt-36 md:pb-20 md:pt-44">
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
      </section>

      <section className="section-shell pt-0">
        <p className="mb-8 text-sm text-textMuted">
          {achievements.length} {achievements.length === 1 ? "achievement" : "achievements"}
        </p>
        <div className="grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.slug} achievement={achievement} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
