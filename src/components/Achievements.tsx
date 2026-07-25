import { motion } from "framer-motion";
import { Award, ExternalLink, Image as ImageIcon, Trophy } from "lucide-react";
import { achievements } from "../data/achievements";

export default function Achievements() {
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

        <div className="grid gap-6">
          {achievements.map((achievement, index) => (
            <motion.article
              key={`${achievement.title}-${achievement.date}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="group grid overflow-hidden rounded-3xl border border-borderSoft bg-bgCard/70 lg:grid-cols-[1.12fr_0.88fr]"
            >
              <div className="achievement-media relative min-h-[300px] overflow-hidden sm:min-h-[400px]">
                {achievement.image ? (
                  <img
                    src={achievement.image}
                    alt={achievement.imageAlt ?? achievement.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                  />
                ) : (
                  <div className="achievement-placeholder absolute inset-0 flex items-center justify-center" role="img" aria-label={achievement.imageAlt}>
                    <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                      <span className="absolute inset-3 rounded-full border border-primary/15" />
                      <Trophy size={58} strokeWidth={1.35} />
                    </div>
                    <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-xs text-white backdrop-blur-md">
                      <ImageIcon size={13} /> Achievement photo
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    <Award size={15} /> {achievement.type}
                  </span>
                  <span className="text-sm text-textMuted">{achievement.date}</span>
                </div>
                <h3 className="mt-8 font-display text-4xl font-medium leading-tight sm:text-5xl">{achievement.title}</h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-textMuted">{achievement.issuer}</p>
                <p className="mt-6 max-w-xl leading-relaxed text-textBody">{achievement.description}</p>
                {achievement.credentialUrl && (
                  <a href={achievement.credentialUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary">
                    View credential <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
