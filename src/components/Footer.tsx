"use client";

import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 160);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <footer className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-4 border-t border-borderSoft px-5 py-6 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left lg:px-12">
      <a href="#main-content" aria-label="Back to top" title="Back to top" className={`group fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary text-bg shadow-[0_10px_28px_rgb(0_0_0/0.16)] transition-[transform,opacity,background-color] duration-300 hover:-translate-y-1 hover:bg-primaryGlow sm:bottom-7 sm:right-7 ${showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`} aria-hidden={!showBackToTop} tabIndex={showBackToTop ? 0 : -1}>
        <ArrowUp size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5" />
      </a>
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
