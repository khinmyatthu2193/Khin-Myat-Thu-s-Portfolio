import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Achievement } from "../data/achievements";
import { AchievementVisual } from "./AchievementCard";

export default function AchievementDetails({ achievement }: { achievement: Achievement }) {
  return (
    <main id="main-content" className="relative z-10">
      <article>
        <header className="section-shell pb-12 pt-36 md:pb-16 md:pt-44">
          <a href="#/achievements" className="mb-10 inline-flex items-center gap-2 text-sm text-textDim transition-colors hover:text-primary">
            <ArrowLeft size={17} /> All achievements
          </a>
          <p className="eyebrow">{achievement.type} / {achievement.date}</p>
          <h1 className="mt-5 max-w-5xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {achievement.title}
          </h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-textMuted">{achievement.issuer}</p>
        </header>

        <section className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-24 sm:px-8 md:pb-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-12">
          <div className="achievement-media group relative aspect-[4/3] min-h-[300px] overflow-hidden rounded-3xl border border-borderSoft">
            <AchievementVisual achievement={achievement} />
          </div>
          <div className="lg:pl-8">
            <p className="eyebrow">The milestone</p>
            <p className="mt-5 font-display text-3xl leading-snug text-textMain md:text-4xl">{achievement.description}</p>
            {achievement.credentialUrl && (
              <a href={achievement.credentialUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-bg">
                View credential <ExternalLink size={16} />
              </a>
            )}
          </div>
        </section>
      </article>
    </main>
  );
}
