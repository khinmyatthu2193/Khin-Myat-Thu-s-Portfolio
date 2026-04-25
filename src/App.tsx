import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import { projects } from "./data/projects";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-bg text-textMain min-h-screen relative overflow-x-hidden">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-40%] left-[-20%] w-[80%] h-[80%] bg-primary/10 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-[-40%] right-[-20%] w-[80%] h-[80%] bg-accent/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[50%] left-[50%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <Navbar />
      <Hero />

      {/* PROJECT SECTION */}
      <section id="projects" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-textDim mt-4 max-w-2xl mx-auto">
            Here are some of my recent works showcasing my skills in fullstack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      <Contact />
    </div>
  );
}