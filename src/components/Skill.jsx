import React from "react";
import { motion } from "framer-motion";

export default function Skill() {
  const skills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Node.js", level: 90 },
    { name: "MongoDB", level: 85 },
    { name: "Redis", level: 75 },
    { name: "AWS", level: 80 },
    { name: "Docker", level: 70 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind", level: 95 },
    { name: "PostgreSQL", level: 80 },
    { name: "Firebase", level: 85 }
  ];

  return (
    <section id="skill" className="py-24 md:py-36 relative overflow-hidden bg-transparent">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="section-container relative z-10 text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-[3rem] sm:text-6xl md:text-7xl font-black text-[var(--ink)] tracking-tight leading-[1.1]">
            Skills.
          </h2>
        </motion.div>

        {/* Circular Glowing Icons Grid */}
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Outer Glow on Hover */}
              <div className="absolute inset-0 bg-[var(--primary)]/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* The Circular Badge */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full glass-card flex flex-col items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-[var(--primary-ring)] cursor-default">
                
                <span className="text-[var(--ink)] font-bold text-sm sm:text-base tracking-wider uppercase z-10 text-center">
                  {skill.name}
                </span>

                <div className="absolute inset-0 rounded-full border border-[var(--primary)]/0 group-hover:border-[var(--primary)]/30 transition-colors duration-500"></div>
                
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
