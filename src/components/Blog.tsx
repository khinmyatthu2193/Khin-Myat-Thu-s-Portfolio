"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowUpRight, BookOpen, Clock3, NotebookPen, Search, X } from "lucide-react";
import { posts, type Post } from "../data/posts";

const notes = [...posts].reverse();
const topics = Array.from(new Set(notes.map((post) => post.tags[0])));

export default function Blog() {
  const reduceMotion = useReducedMotion();
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const readingHeading = useRef<HTMLHeadingElement>(null);
  const openingCard = useRef<string | null>(null);
  const cardButtons = useRef(new Map<string, HTMLButtonElement>());
  const archiveScroll = useRef(0);

  useEffect(() => {
    if (selectedPost) {
      readingHeading.current?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (openingCard.current) {
      cardButtons.current.get(openingCard.current)?.focus({ preventScroll: true });
      window.scrollTo({ top: archiveScroll.current, behavior: "instant" });
    }
  }, [selectedPost]);
  const search = query.trim().toLowerCase();
  const visibleNotes = notes.filter((post) =>
    (topic === null || post.tags[0] === topic) &&
    [post.title, post.summary, ...post.tags, ...post.lessons].join(" ").toLowerCase().includes(search),
  );

  function resetFilters() {
    setQuery("");
    setTopic(null);
  }

  if (selectedPost) {
    return (
      <section className="section-shell" aria-labelledby="reading-title">
        <div className="mx-auto max-w-3xl">
          <button type="button" onClick={() => setSelectedPost(null)} className="text-link min-h-11 text-sm">
            <ArrowLeft size={16} aria-hidden="true" />Back to all notes
          </button>
          <article className="mt-8 sm:mt-12">
            <header className="border-b border-borderMedium pb-8 sm:pb-10">
              <p className="eyebrow">{selectedPost.tags[0]} / Learning notes</p>
              <h1 ref={readingHeading} tabIndex={-1} id="reading-title" className="mt-5 rounded-sm font-display text-4xl font-medium leading-[1.15] tracking-[-0.03em] text-balance sm:text-5xl">{selectedPost.title}</h1>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-textMuted">
                <span>{selectedPost.date}</span>
                <span className="inline-flex items-center gap-2"><Clock3 size={15} aria-hidden="true" />{selectedPost.readTime}</span>
              </div>
              <p className="mt-7 text-lg leading-relaxed text-textBody sm:text-xl">{selectedPost.summary}</p>
            </header>
            <div className="py-9 sm:py-12">
              <h2 className="font-display text-2xl font-medium sm:text-3xl">What I took away</h2>
              <div className="mt-7 space-y-6 text-base leading-8 text-textBody sm:text-lg sm:leading-9">
                {selectedPost.lessons.map((lesson) => <p key={lesson}>{lesson}</p>)}
              </div>
            </div>
            <footer className="flex flex-wrap gap-2 border-t border-borderMedium pt-6">
              {selectedPost.tags.map((tag) => <span key={tag} className="label-tag">{tag}</span>)}
            </footer>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="section-shell scroll-mt-20" aria-labelledby="blog-title">
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-8 border-b border-borderMedium pb-10 sm:pb-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16"
      >
        <div>
          <p className="eyebrow flex items-center gap-2.5"><NotebookPen size={15} aria-hidden="true" />05 / The learning journal</p>
          <h1 id="blog-title" className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
            Notes from the<br className="hidden sm:block" /> <span className="italic text-primary">learning curve.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-textBody sm:text-lg">
            Small discoveries, honest reflections, and lessons that stay with me long after the code is written.
          </p>
          <a href="#learning-notes" className="text-link mt-7 text-sm">Explore the notes<ArrowDown size={15} aria-hidden="true" /></a>
        </div>
        <div className="border-l-2 border-primary/35 pl-5 lg:mb-1 lg:pl-6">
          <p className="font-display text-xl text-textMain">Learning by building.</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-textBody">A notebook on web development, mobile experiences, and exploring AI. Written from the projects I build and the questions along the way.</p>
          <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-textMuted">{String(notes.length).padStart(2, "0")} notes &nbsp; / &nbsp; Web, mobile &amp; AI</p>
        </div>
      </motion.header>

      <div id="learning-notes" className="scroll-mt-[calc(var(--navbar-height)+1.5rem)] pt-9 sm:pt-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">The notebook<span className="ml-3 align-middle font-sans text-xs text-textMuted">/ {String(notes.length).padStart(2, "0")}</span></h2>
          <div className="relative w-full sm:max-w-xs">
            <label htmlFor="note-search" className="sr-only">Search learning notes</label>
            <Search size={17} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-textMuted" />
            <input
              id="note-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the notebook…"
              aria-controls="note-results"
              className="min-h-12 w-full rounded-full border border-borderMedium bg-bgCard/70 py-3 pl-11 pr-4 text-sm text-textMain placeholder:text-textMuted"
            />
          </div>
        </div>

        <div role="group" aria-label="Filter notes by topic" className="mt-6 flex flex-wrap gap-2">
          {[null, ...topics].map((item) => (
            <button
              key={item ?? "all"}
              type="button"
              aria-pressed={topic === item}
              aria-controls="note-results"
              onClick={() => setTopic(item)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${topic === item ? "border-primary/40 bg-primary/10 text-primary" : "border-borderSoft bg-bgCard/40 text-textDim hover:border-primary/40 hover:text-textMain"}`}
            >
              {item ?? "All notes"}
              <span className="text-xs opacity-70">{item === null ? notes.length : notes.filter((post) => post.tags[0] === item).length}</span>
            </button>
          ))}
        </div>

        <div className="mb-5 mt-6 flex min-h-6 items-center justify-between gap-4">
          <p role="status" aria-live="polite" aria-atomic="true" className="text-xs text-textMuted">
            {visibleNotes.length} {visibleNotes.length === 1 ? "note" : "notes"}{search || topic ? " found" : " · Latest first"}
          </p>
          {(query || topic) && <button type="button" onClick={resetFilters} className="inline-flex min-h-11 items-center gap-1.5 text-xs text-primary hover:underline"><X size={14} aria-hidden="true" />Clear filters</button>}
        </div>

        <div id="note-results" className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleNotes.map((post) => {
            const isLatest = post === notes[0];
            return (
              <article key={post.title} className={`group relative flex flex-col rounded-2xl border transition-colors hover:border-primary/35 focus-within:border-primary/35 ${isLatest ? "border-primary/25 bg-primary/5" : "border-borderMedium bg-bgCard/70"}`}>
                <button
                  type="button"
                  aria-label={`Read ${post.title}`}
                  ref={(button) => {
                    if (button) cardButtons.current.set(post.title, button);
                    else cardButtons.current.delete(post.title);
                  }}
                  onClick={() => {
                    openingCard.current = post.title;
                    archiveScroll.current = window.scrollY;
                    setSelectedPost(post);
                  }}
                  className="absolute inset-0 z-10 cursor-pointer rounded-2xl"
                />
                <div className="flex min-h-[66px] items-center justify-between gap-3 border-b border-borderSoft px-6 py-5 sm:px-7">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary"><BookOpen size={16} aria-hidden="true" />{post.tags[0]}</span>
                  {isLatest && <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">Latest note</span>}
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-textMuted">
                    <span>{post.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock3 size={13} aria-hidden="true" />{post.readTime}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium leading-[1.25] tracking-[-0.02em] text-textMain">{post.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-textBody">{post.summary}</p>
                  <div className="mb-7 mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => <span key={tag} className="label-tag !text-[10px]">{tag}</span>)}
                  </div>
                  <div aria-hidden="true" className="mt-auto flex min-h-12 items-center justify-between gap-3 border-t border-borderMedium py-3 text-sm font-semibold text-primary">
                    Read the note<ArrowUpRight size={17} aria-hidden="true" />
                  </div>
                </div>
              </article>
            );
          })}
          {visibleNotes.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-borderMedium bg-bgCard/40 px-6 py-14 text-center">
              <Search size={24} aria-hidden="true" className="mx-auto text-primary" />
              <h3 className="mt-4 font-display text-2xl">No notes found.</h3>
              <p className="mt-3 text-sm leading-relaxed text-textBody">Try another keyword or explore all the notes.</p>
              <button type="button" onClick={resetFilters} className="button-secondary mt-6">Show all notes</button>
            </div>
          )}
        </div>
        <p className="mt-10 border-t border-borderSoft pt-6 text-sm leading-relaxed text-textMuted">A work in progress, just like the learning behind it.</p>
      </div>
    </section>
  );
}
