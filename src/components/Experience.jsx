import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "MySathi Tech Pvt Ltd, Bikaner",
      year: "Feb 2026 - Present",
      tech: ["React", "React Native", "PostgreSQL", "Redis", "Node.js"],
      description: "Developing full-stack web applications and cross-platform mobile apps. Implementing Redis caching to improve performance and managing app releases on Google Play Console.",
    },
    {
      id: 2,
      role: "Full Stack Developer Intern",
      company: "Full Stack Learning, Jaipur",
      year: "Oct 2025 - Feb 2026",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      description: "Completed intensive project-based training in full-stack development, applying core concepts like component-based UI design and robust RESTful API integration.",
    },
    {
      id: 3,
      role: "Bachelor of Commerce (B.Com)",
      company: "Maharaja Ganga Singh University, Bikaner",
      year: "Jul 2022 - Apr 2025",
      tech: ["Commerce", "Business Operations", "65% Score"],
      description: "Graduated with a strong academic foundation in business operations, finance, and corporate strategies.",
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-36 relative overflow-hidden bg-transparent">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[var(--primary)]/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '12s' }}></div>
      <div className="absolute bottom-1/4 -left-32 w-[600px] h-[600px] bg-[var(--accent)]/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '14s', animationDelay: '3s' }}></div>

      <div className="section-container relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 lg:mb-32 pb-10 border-b border-[var(--border)] gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_var(--primary-ring)]">
              <Briefcase size={14} /> 02 / Career History
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[var(--ink)] tracking-tight font-['Sora'] leading-[1.1]">
              Professional <span className="text-gradient">Journey.</span>
            </h2>
          </div>
          <p className="text-[var(--sub)] max-w-md text-base md:text-lg font-medium leading-[1.8] tracking-wide">
            A timeline of my professional roles, academic background, and the technologies I've mastered along the way.
          </p>
        </motion.div>

        {/* PREMIUM TIMELINE */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Glowing Track */}
          <div className="absolute left-[39px] sm:left-1/2 sm:-translate-x-1/2 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-[var(--dark-accent)] opacity-50 shadow-[0_0_15px_var(--primary-ring)]"></div>

          <div className="flex flex-col gap-16 sm:gap-32">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-center justify-start sm:justify-between w-full ${isEven ? "sm:flex-row-reverse" : "sm:flex-row"}`}
                >
                  
                  {/* Timeline Node - Premium Ring */}
                  <div className="absolute left-[24px] sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full border-[4px] border-[#0F1115] bg-[var(--primary)] shadow-[0_0_20px_var(--primary)] z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden sm:block w-[45%]"></div>

                  {/* Card Content - Flush Premium Glass */}
                  <div className="w-full sm:w-[45%] pl-24 sm:pl-0 group relative perspective-1000">
                    
                    {/* Hover Glow Behind Card */}
                    <div className="absolute inset-0 bg-[var(--primary)]/10 blur-[50px] rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                    
                    <div className="relative w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)] group-hover:border-[var(--primary)]/30 transition-all duration-700 group-hover:-translate-y-2 p-8 sm:p-10 backdrop-blur-xl">
                      
                      {/* Year Badge */}
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/30 border border-white/5 text-[var(--primary)] font-bold text-sm tracking-widest mb-8">
                        <span className="w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)]"></span>
                        {exp.year}
                      </div>
                      
                      {/* Typography */}
                      <h3 className="text-3xl sm:text-4xl font-black text-[var(--ink)] mb-2 font-['Sora'] tracking-tight group-hover:text-[var(--primary)] transition-colors duration-300">
                        {exp.company}
                      </h3>
                      <h4 className="text-xl sm:text-2xl font-semibold text-[var(--sub)] mb-6 tracking-wide">
                        {exp.role}
                      </h4>
                      
                      <p className="text-[var(--sub)] text-lg leading-[1.8] mb-10 font-medium tracking-[0.015em]">
                        {exp.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-3">
                        {exp.tech.map((t, i) => (
                          <span key={i} className="px-4 py-2 rounded-full text-xs font-bold text-[var(--ink)] bg-white/5 border border-white/10 backdrop-blur-md uppercase tracking-wider hover:bg-[var(--primary)] hover:text-[#0F1115] hover:border-transparent transition-colors duration-300 cursor-default">
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
