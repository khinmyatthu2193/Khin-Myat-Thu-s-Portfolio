import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  date: string;
  description: string;
  github: string;
  technologies?: string[];
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const technologies = project.technologies || ["React", "Node.js", "TailwindCSS"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-gradient-to-br from-bgCard/80 to-bgSoft/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-borderSoft hover:border-primary/40 transition-all duration-300"
    >
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5h6" />
            </svg>
          </div>
          
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-textDim hover:text-primary hover:bg-primary/10 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-textMain group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Date */}
        <div className="flex items-center gap-2 mt-2 text-textMuted text-sm">
          <Calendar size={14} />
          <span>{project.date}</span>
        </div>

        {/* Description */}
        <p className="text-textDim text-sm mt-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-md bg-white/5 border border-borderSoft text-textDim"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Code Link */}
        <div className="mt-5 pt-4 border-t border-borderSoft">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium group/link hover:gap-3 transition-all"
          >
            View Project <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}