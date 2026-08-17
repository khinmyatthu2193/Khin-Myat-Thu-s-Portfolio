import { motion } from "framer-motion";
import { Braces, Code2, Database, Smartphone, Sparkles } from "lucide-react";

const skillGroups = [
  {
    title: "Web development",
    description: "Responsive, accessible products built from interface to backend.",
    icon: Code2,
    skills: ["React", "Django", "REST APIs", "Responsive UI"],
  },
  {
    title: "Mobile products",
    description: "Mobile-first experiences shaped around real user and business needs.",
    icon: Smartphone,
    skills: ["React Native", "Firebase", "Authentication", "Real-time features"],
  },
  {
    title: "Data & backend",
    description: "Reliable application foundations and structured data workflows.",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "WebSockets", "Django Channels"],
  },
  {
    title: "AI & product thinking",
    description: "Practical AI features paired with clear product strategy.",
    icon: Sparkles,
    skills: ["Gemini AI", "Recommendation systems", "Prototyping", "Problem solving"],
  },
];

const languages = [
  { name: "Python", code: "PY" },
  { name: "TypeScript", code: "TS" },
  { name: "JavaScript", code: "JS" },
  { name: "SQL", code: "DB" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="border-y border-borderSoft py-12 md:py-16"
      >
        <div className="grid gap-7 border-b border-borderSoft pb-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">03 / Skills &amp; languages</p>
            <h2 className="section-title mt-5">The tools behind the <span className="text-gradient italic">work.</span></h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <p className="max-w-md leading-relaxed text-textBody">
              I combine full-stack engineering, product thinking, and emerging technology to turn ideas into useful experiences.
            </p>
            <div className="border-l-2 border-primary/40 pl-5">
              <p className="label-sm text-primary">How I work</p>
              <p className="mt-2 text-sm leading-relaxed text-textBody">
                Curious, collaborative, and focused on shipping clear, dependable products.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          {skillGroups.map(({ title, description, icon: Icon, skills }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className={`group relative border-borderSoft py-7 transition-colors hover:bg-primary/[0.035] md:p-7 ${
                index % 2 === 0 ? "md:border-r" : "md:pl-12"
              } ${index < 2 ? "border-b" : ""}`}
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm italic text-primary/70">0{index + 1}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon size={18} />
                  </div>
                </div>
                <span className="h-px flex-1 translate-y-5 bg-borderSoft transition-colors group-hover:bg-primary/25" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium md:text-[1.7rem]">{title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-textBody">{description}</p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {skills.map((skill) => (
                  <span key={skill} className="text-xs font-medium uppercase tracking-[0.1em] text-textMuted before:mr-2 before:text-primary before:content-['/']">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 border-t border-borderSoft pt-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary">
              <Braces size={17} />
            </div>
            <div>
              <p className="eyebrow">Language toolkit</p>
              <h3 className="mt-1 font-display text-2xl">Programming languages</h3>
            </div>
            <span className="ml-auto hidden h-px flex-1 bg-borderSoft sm:block" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 rounded-xl border border-borderSoft bg-bgCard/50 p-4 transition-colors hover:border-primary/30 hover:bg-primary/[0.045]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-semibold tracking-wider text-primary">
                  {language.code}
                </span>
                <div>
                  <span className="font-display text-xs italic text-primary/70">0{index + 1}</span>
                  <p className="mt-0.5 font-medium text-textMain">{language.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
