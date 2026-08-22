import { motion } from "framer-motion";
import Link from "next/link";
import { assetUrl } from "@/lib/asset-url";
import { ArrowUpRight, Award, Image as ImageIcon, Trophy } from "lucide-react";
import type { Achievement } from "../data/achievements";

export function AchievementVisual({ achievement, fit = "cover" }: { achievement: Achievement; fit?: "cover" | "contain" }) {
  if (achievement.image) {
    return (
      <img
        src={assetUrl(achievement.image)}
        alt={achievement.imageAlt ?? achievement.title}
        loading="lazy"
        className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"} transition duration-700 group-hover:scale-[1.025]`}
      />
    );
  }

  return (
    <div className="achievement-placeholder absolute inset-0 flex items-center justify-center" role="img" aria-label={achievement.imageAlt}>
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
        <span className="absolute inset-3 rounded-full border border-primary/15" />
        <Trophy size={46} strokeWidth={1.35} />
      </div>
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-xs text-white backdrop-blur-md">
        <ImageIcon size={13} /> Achievement photo
      </span>
    </div>
  );
}

export default function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.2) }}
      className="group"
    >
      <Link href={`/achievements/${achievement.slug}`} className="block h-full" aria-label={`View ${achievement.title}`}>
        <div className="achievement-media relative aspect-[4/3] overflow-hidden rounded-2xl border border-borderSoft">
          <AchievementVisual achievement={achievement} />
        </div>
        <div className="pt-5">
          <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
            <span className="inline-flex items-center gap-2 text-primary"><Award size={14} /> {achievement.type}</span>
            <span className="text-textMuted">{achievement.date}</span>
          </div>
          <h3 className="mt-3 font-display text-2xl font-medium leading-tight transition-colors group-hover:text-primary">
            {achievement.title}
          </h3>
          <p className="mt-2 text-sm uppercase tracking-[0.1em] text-textMuted">{achievement.issuer}</p>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-textBody">{achievement.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
            View achievement <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
