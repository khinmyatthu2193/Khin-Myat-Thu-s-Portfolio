import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// Make sure to use the correct image path - update this based on your actual file
import profile from "../assets/khin.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-6 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="text-primary text-sm font-medium">Available for work</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block mt-2">
              Khin Myat Thu
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-textDim text-lg max-w-2xl mx-auto lg:mx-0"
          >
            Computer Science student building real-world applications and exploring modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button className="group relative px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-black overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(52,211,153,0.5)]">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primaryGlow to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-borderSoft rounded-lg text-textMain hover:border-primary hover:text-primary transition-all"
            >
              View Projects <ArrowDown size={18} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex gap-4 justify-center lg:justify-start"
          >
            <a href="https://github.com/khinmyatthu2193" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-bgCard border border-borderSoft hover:border-primary hover:text-primary transition-all">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-bgCard border border-borderSoft hover:border-primary hover:text-primary transition-all">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:khinmyatthu2193@gmail.com" className="p-2 rounded-lg bg-bgCard border border-borderSoft hover:border-primary hover:text-primary transition-all">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 relative"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-xl"></div>
              <div className="absolute inset-[3px] rounded-full bg-bg"></div>
              {profile ? (
                <img
                  src={profile}
                  alt="Khin Myat Thu"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-4xl">👩‍💻</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-textDim text-xs uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-borderSoft rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-primary rounded-full mt-1"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}