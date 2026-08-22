import { motion } from "framer-motion";
import { BookOpen, ChevronDown } from "lucide-react";
import { posts } from "../data/posts";

export default function Blog() {
  return (
    <section id="blog" className="section-shell scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow">05 / Blog</p>
            <h2 className="section-title mt-5">What I’m learning.</h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-relaxed text-textBody">
            Short notes, useful discoveries, and practical lessons from my daily development journey.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="flex flex-col rounded-2xl border border-borderSoft bg-bgCard/70 p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.14em] text-textMuted">
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-1.5"><BookOpen size={14} />{post.readTime}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium leading-tight">{post.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-textBody">{post.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="label-tag">{tag}</span>
                ))}
              </div>
              <details className="group/note mt-6 border-t border-borderMedium pt-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-primary focus-visible:outline-none">
                  Read the note
                  <ChevronDown size={17} className="transition-transform group-open/note:rotate-180" />
                </summary>
                <div className="mt-5 space-y-4">
                  {post.lessons.map((lesson) => (
                    <p key={lesson} className="border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-textBody">{lesson}</p>
                  ))}
                </div>
              </details>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
