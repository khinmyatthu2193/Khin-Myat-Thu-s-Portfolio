import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { assetUrl } from "@/lib/asset-url";
import type { Achievement } from "../data/achievements";
import { AchievementVisual } from "./AchievementCard";

export default function AchievementDetails({ achievement }: { achievement: Achievement }) {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!activeImage) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setActiveImage(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeImage]);

  return (
    <main id="main-content" className="relative z-10">
      <article>
        <header className="section-shell pb-10 pt-28 md:pb-14 md:pt-36">
          <Link href="/achievements" className="mb-10 inline-flex items-center gap-2 text-sm text-textDim transition-colors hover:text-primary">
            <ArrowLeft size={17} /> All achievements
          </Link>
          <p className="eyebrow">{achievement.type} / {achievement.date}</p>
          <h1 className="mt-5 max-w-5xl font-display text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            {achievement.title}
          </h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-textMuted">{achievement.issuer}</p>
        </header>

        <section className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-24 sm:px-8 md:pb-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-12">
          <div className="achievement-media group relative aspect-[4/3] min-h-[300px] overflow-hidden rounded-3xl border border-borderSoft bg-bgCard p-2 sm:p-4">
            <AchievementVisual achievement={achievement} fit="contain" />
          </div>
          <div className="lg:pl-8">
            <p className="eyebrow">The milestone</p>
            <p className="mt-5 font-display text-2xl leading-snug text-textMain md:text-3xl">{achievement.description}</p>
            {achievement.credentialUrl && (
              <a href={achievement.credentialUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-bg">
                View credential <ExternalLink size={16} />
              </a>
            )}
          </div>
        </section>

        {achievement.gallery && achievement.gallery.length > 0 && (
          <section className="section-shell border-t border-borderSoft pt-16 md:pt-20">
            <div className="mb-9 grid gap-5 md:grid-cols-[0.75fr_1.25fr] md:items-end">
              <div>
                <p className="eyebrow">Event gallery</p>
                <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">The winning moment.</h2>
              </div>
              <p className="max-w-2xl leading-relaxed text-textBody">
                Team photos, award moments, and certificates from the One Project One Week Hackathon 2026.
              </p>
            </div>
            <motion.div
              className="grid gap-5 md:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-70px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
            >
              {achievement.gallery.map((item, index) => (
                <motion.figure
                  key={assetUrl(item.src)}
                  variants={{
                    hidden: { opacity: 0, y: 20, rotateY: index % 2 === 0 ? -18 : 18, scale: 0.97 },
                    visible: { opacity: 1, y: 0, rotateY: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformPerspective: 1200, transformOrigin: index % 2 === 0 ? "left center" : "right center" }}
                  className={`${index === 0 ? "md:col-span-2" : ""} group overflow-hidden rounded-2xl border border-borderSoft bg-bgCard transition-colors hover:border-primary/35`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveImage({ src: assetUrl(item.src), alt: item.alt })}
                    className={`${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"} relative block w-full cursor-zoom-in overflow-hidden bg-bgSoft`}
                    aria-label={`View full size: ${item.alt}`}
                  >
                    <img
                      src={assetUrl(item.src)}
                      alt={item.alt}
                      loading="lazy"
                      className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.025] ${index >= 4 ? "object-contain" : index === 0 ? "object-cover object-bottom" : "object-cover"}`}
                    />
                    <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white opacity-0 backdrop-blur-md transition-all group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <Maximize2 size={16} aria-hidden="true" />
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </button>
                  <figcaption className="flex items-start gap-3 border-t border-borderSoft px-4 py-3 text-sm leading-relaxed text-textDim">
                    <span className="font-display text-primary/80">0{index + 1}</span>
                    {item.alt}
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </section>
        )}
      </article>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[999] overflow-y-auto bg-black/90 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Expanded achievement image"
          >
            <div className="flex min-h-full items-center justify-center py-12">
              <motion.figure
                className="max-w-6xl"
                initial={{ opacity: 0, scale: 0.95, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                onClick={(event) => event.stopPropagation()}
              >
                <img src={activeImage.src} alt={activeImage.alt} className="max-h-[80dvh] max-w-full rounded-xl object-contain shadow-2xl" />
                <figcaption className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/75">{activeImage.alt}</figcaption>
              </motion.figure>
            </div>
            <button type="button" onClick={() => setActiveImage(null)} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20" aria-label="Close expanded image">
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
