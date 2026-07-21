import { motion } from "framer-motion";
import { Braces, Code2, Database, Lightbulb, Smartphone, Sparkles } from "lucide-react";

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
        className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20"
      >
        <div>
          <p className="eyebrow">02 / Skills &amp; languages</p>
          <h2 className="section-title mt-5">The tools behind the <span className="text-gradient italic">work.</span></h2>
          <p className="mt-6 max-w-md leading-relaxed text-textDim">
            I combine full-stack engineering, product thinking, and emerging technology to turn ideas into useful experiences.
          </p>

          <div className="mt-9 rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <div className="flex items-center gap-3 text-primary">
              <Lightbulb size={19} />
              <p className="text-xs font-semibold uppercase tracking-[0.16em]">How I work</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-textDim">
              Curious, collaborative, and focused on shipping solutions that are clear, dependable, and easy to use.
            </p>
          </div>
        </div>

        <div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-borderSoft bg-borderSoft sm:grid-cols-2">
            {skillGroups.map(({ title, description, icon: Icon, skills }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group bg-bgCard/90 p-6 transition-colors hover:bg-bgSoft sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/25 bg-primary/5 text-primary">
                  <Icon size={19} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-textDim">{description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-borderSoft px-3 py-1 text-[11px] uppercase tracking-wider text-textMuted">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 border-y border-borderMedium py-6">
            <div className="mb-4 flex items-center gap-2 text-textMuted">
              <Braces size={16} />
              <p className="text-xs font-semibold uppercase tracking-[0.18em]">Programming languages</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {languages.map((language, index) => (
                <div key={language} className="flex items-center gap-3">
                  <span className="font-display text-sm italic text-primary">0{index + 1}</span>
                  <span className="text-lg text-textMain">{language}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
