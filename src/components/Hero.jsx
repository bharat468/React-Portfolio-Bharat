import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const techStack = [
    "React", "Next.js", "MongoDB", "AWS", "Docker", "Redis"
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 sm:pt-40 lg:pt-0">

      {/* LUXURY BLURRED BACKGROUND GRADIENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 animate-pulse"
          style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', animationDuration: '8s' }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 animate-pulse"
          style={{ background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)', animationDuration: '12s', animationDelay: '2s' }}
        ></div>
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full mt-10 lg:mt-20">

        {/* ================= LEFT: MASSIVE TYPOGRAPHY ================= */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-[var(--ink)] leading-[1.05] tracking-tight mb-8"
          >
            FULL STACK <br />
            <span className="text-gradient">DEVELOPER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl lg:text-2xl text-[var(--ink)] max-w-2xl font-normal leading-[1.6] mb-4"
          >
            Building Modern Experiences with React, Next.js & Cloud Infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-[var(--sub)] font-medium text-base sm:text-lg flex items-center gap-3"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--secondary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--secondary)]"></span>
            </span>
            Currently @ <strong className="text-[var(--ink)]">Mysathi Tech Pvt Ltd</strong>
          </motion.div>

          {/* LUXURY CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <a href="#project" className="btn btn-primary">
              View Projects <ArrowRight size={18} strokeWidth={2.5} />
            </a>
            <a href="/bharat-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Download Resume <Download size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary !border-transparent hover:!border-transparent hover:!bg-white/5">
              Contact Me <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* ================= RIGHT: FLOATING GLASS CARD ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
          className="lg:col-span-5 relative w-full max-w-sm mx-auto lg:ml-auto perspective-1000 z-10"
        >
          <div className="glass-card !p-8 sm:!p-10 transform transition-transform duration-700 hover:rotate-x-1 hover:-rotate-y-2 hover:scale-[1.02] shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
            
            <div className="border-b border-white/10 pb-6 mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--ink)] font-['Sora'] mb-1">
                Bharat Pareek
              </h3>
              <div className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">
                Full Stack Developer
              </div>
            </div>

            <ul className="space-y-4">
              {techStack.map((tech, i) => (
                <li key={i} className="flex items-center gap-4 text-base sm:text-lg font-medium text-[var(--ink)] group">
                  <CheckCircle2 size={20} className="text-[var(--primary)] group-hover:scale-110 transition-transform" />
                  <span className="group-hover:translate-x-1 transition-transform">{tech}</span>
                </li>
              ))}
            </ul>

          </div>
          
          {/* Decorative floating blur behind the card */}
          <div className="absolute -inset-10 bg-[var(--primary)]/5 blur-3xl -z-10 rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
}
