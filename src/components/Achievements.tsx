import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { achievements } from "../data/achievements";
import AchievementCard from "./AchievementCard";

export default function Achievements() {
  const featuredAchievements = achievements.filter((achievement) => achievement.featured).slice(0, 3);

  return (
    <section id="achievements" className="section-shell scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow">04 / Achievements</p>
            <h2 className="section-title mt-5">Milestones worth sharing.</h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-relaxed text-textBody">
            Awards, certificates, and moments that reflect the learning, teamwork, and persistence behind my work.
          </p>
        </div>

        <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {featuredAchievements.map((achievement, index) => (
            <AchievementCard key={achievement.slug} achievement={achievement} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/achievements" className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-bg">
            View all achievements <ArrowUpRight size={17} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
