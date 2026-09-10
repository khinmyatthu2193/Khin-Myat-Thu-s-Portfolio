"use client";

import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [footerNearby, setFooterNearby] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 350);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const resizeObserver = new ResizeObserver(() => {
      setFooterHeight(footer.getBoundingClientRect().height);
    });
    // Start the lift just before the footer arrives, leaving room for the transition.
    const observer = new IntersectionObserver(
      ([entry]) => setFooterNearby(entry.isIntersecting),
      { rootMargin: "0px 0px 100px 0px" },
    );
    resizeObserver.observe(footer);
    observer.observe(footer);
    return () => {
      resizeObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-4 border-t border-borderSoft px-5 py-6 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left lg:px-12">
      <div
        className="pointer-events-none fixed right-4 z-40 transition-[bottom] duration-[350ms] ease-out [--edge:max(16px,env(safe-area-inset-bottom))] [--footer-lift:0] sm:right-7 sm:[--edge:28px] sm:[--footer-lift:1] motion-reduce:transition-none"
        style={{ bottom: `min(calc(var(--edge) + ${footerNearby ? footerHeight : 0}px * var(--footer-lift)), calc(100dvh - 60px))` }}
      >
        <button
          type="button"
          aria-label="Scroll to top"
          title="Scroll to top"
          aria-hidden={!showBackToTop}
          tabIndex={showBackToTop ? 0 : -1}
          onClick={() => window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
          })}
          className={`group inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary text-bg shadow-[0_10px_28px_rgb(0_0_0/0.16)] transition-[transform,opacity,visibility,background-color] duration-[350ms] ease-out hover:-translate-y-[3px] hover:scale-105 hover:bg-primaryGlow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transform-none motion-reduce:transition-none ${showBackToTop ? "visible pointer-events-auto translate-y-0 scale-100 opacity-100" : "invisible pointer-events-none translate-y-3 scale-90 opacity-0"}`}
        >
          <ArrowUp size={17} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
        </button>
      </div>
      <div className="text-textMuted">
        <p className="text-xs font-semibold uppercase tracking-[0.14em]">© 2026 Khin Myat Thu</p>
        <p className="mt-1.5 font-display text-sm italic tracking-wide text-textDim">Learning. Building. Growing.</p>
      </div>
      <div className="flex items-center gap-2" aria-label="Contact links">
        <a href="https://github.com/khinmyatthu2193" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderMedium text-textMuted transition-colors hover:border-primary hover:text-primary"><FaGithub size={15} aria-hidden="true" /></a>
        <a href="https://www.linkedin.com/in/khin-myat-thu-837892352" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderMedium text-textMuted transition-colors hover:border-primary hover:text-primary"><FaLinkedin size={15} aria-hidden="true" /></a>
        <Link href="/contact-me" aria-label="Contact Khin Myat Thu" title="Contact" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderMedium text-textMuted transition-colors hover:border-primary hover:text-primary"><Mail size={15} aria-hidden="true" /></Link>
      </div>
    </footer>
  );
}
