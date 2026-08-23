import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-4 border-t border-borderSoft px-5 py-6 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left lg:px-12">
      <div className="text-textMuted">
        <p className="text-xs font-semibold uppercase tracking-[0.14em]">© 2026 Khin Myat Thu</p>
        <p className="mt-1.5 font-display text-sm italic tracking-wide text-textDim">Learning. Building. Growing.</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2" aria-label="Contact links">
          <a href="https://github.com/khinmyatthu2193" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderMedium text-textMuted transition-colors hover:border-primary hover:text-primary"><FaGithub size={15} aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/khin-myat-thu-837892352" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderMedium text-textMuted transition-colors hover:border-primary hover:text-primary"><FaLinkedin size={15} aria-hidden="true" /></a>
          <Link href="/contact-me" aria-label="Contact Khin Myat Thu" title="Contact" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderMedium text-textMuted transition-colors hover:border-primary hover:text-primary"><Mail size={15} aria-hidden="true" /></Link>
        </div>
        <span className="h-5 w-px bg-borderMedium" aria-hidden="true" />
        <a href="#main-content" aria-label="Back to top" title="Back to top" className="group inline-flex h-9 items-center gap-2 rounded-full border border-primary/30 px-3 text-xs font-semibold uppercase tracking-[0.1em] text-textDim transition-colors hover:border-primary hover:text-primary">
          Top <ArrowUp size={14} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
