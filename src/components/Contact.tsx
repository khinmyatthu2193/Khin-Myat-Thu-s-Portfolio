import { motion } from "framer-motion";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const contacts = [
  { label: "Email", value: "khinmyatthu2193@gmail.com", icon: Mail, copy: true },
  { label: "Phone", value: "+959 797 237 421", icon: Phone, copy: true },
  { label: "Location", value: "Mandalay, Myanmar", icon: MapPin },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyValue = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(value);
    window.setTimeout(() => setCopied(null), 1800);
  };

  return (
    <section id="contact" className="relative z-10 scroll-mt-20 border-t border-borderSoft bg-bgSoft/70">
      <div className="section-shell !pb-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="eyebrow">03 / Contact</p>
              <h2 className="section-title mt-5">Let’s make something <span className="text-gradient italic">meaningful.</span></h2>
              <p className="mt-6 max-w-md leading-relaxed text-textDim">
                Have a project, opportunity, or idea in mind? Here are the best ways to reach me.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://github.com/khinmyatthu2193" target="_blank" rel="noreferrer" className="social-button"><FaGithub size={17} /> GitHub</a>
                <a href="https://www.linkedin.com/in/khin-myat-thu-837892352" target="_blank" rel="noreferrer" className="social-button"><FaLinkedin size={17} /> LinkedIn</a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-borderMedium bg-bgCard/60">
              {contacts.map(({ label, value, icon: Icon, copy }) => (
                <div key={label} className="group flex items-center gap-4 border-b border-borderSoft p-5 last:border-b-0 sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/5 text-primary"><Icon size={19} /></div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.15em] text-textMuted">{label}</p>
                    <p className="mt-1 break-all text-sm text-textMain sm:text-base">{value}</p>
                  </div>
                  {copy && (
                    <button onClick={() => copyValue(value)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-borderMedium text-textDim transition-colors hover:border-primary hover:text-primary" aria-label={`Copy ${label.toLowerCase()}`} title={`Copy ${label.toLowerCase()}`}>
                      {copied === value ? <Check size={17} className="text-primary" /> : <Copy size={17} />}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <footer className="mt-20 flex flex-col gap-3 border-t border-borderSoft pt-7 text-xs uppercase tracking-[0.14em] text-textMuted sm:flex-row sm:justify-between">
            <p>© 2026 Khin Myat Thu</p><p>Designed &amp; built with intention</p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
