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

const languages = ["Python", "TypeScript", "JavaScript", "SQL"];

export default function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="border-y border-borderSoft py-14 md:py-20"
      >
        <div className="grid gap-8 border-b border-borderSoft pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">02 / Skills &amp; languages</p>
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
              className={`group relative border-borderSoft py-9 transition-colors hover:bg-primary/[0.035] md:p-9 ${
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
              <h3 className="mt-6 font-display text-2xl font-medium md:text-3xl">{title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-textBody">{description}</p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {skills.map((skill) => (
                  <span key={skill} className="text-xs font-medium uppercase tracking-[0.1em] text-textMuted before:mr-2 before:text-primary before:content-['/']">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-primary px-6 py-7 text-bg md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <Braces size={18} />
            <p className="label-sm">Programming languages</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {languages.map((language, index) => (
              <div key={language} className="flex items-center gap-2">
                <span className="font-display text-xs italic opacity-70">0{index + 1}</span>
                <span className="text-base font-medium">{language}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
