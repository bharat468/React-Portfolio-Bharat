import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/img/image.png";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Built", value: "25+" },
    { label: "Happy Clients", value: "12+" },
  ];

  const tech = ["React", "React Native", "Node JS", "Express", "AWS", "Docker"];

  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden bg-transparent">
      <div className="section-container relative z-10">
        
        {/* Massive Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <h2 className="text-[3rem] sm:text-6xl md:text-7xl font-black text-[var(--ink)] tracking-tight leading-[1.1]">
            About Me.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* LEFT: LARGE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative"
          >
            <div className="glass-card !p-4 sm:!p-6 !rounded-[2rem] sm:!rounded-[2.5rem] relative z-10 group">
              <div className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[1.5rem] overflow-hidden relative">
                <img 
                  src={heroImg} 
                  alt="Bharat Pareek" 
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-80"></div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-[var(--primary)]/10 blur-[100px] -z-10 rounded-full animate-pulse"></div>
          </motion.div>

          {/* RIGHT: CONTENT & STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col space-y-10"
          >
            <div className="glass-card !p-8 sm:!p-10">
              <p className="text-lg sm:text-xl text-[var(--sub)] font-medium leading-[1.8]">
                I am a passionate <strong className="text-[var(--primary)] font-bold">Full Stack Developer</strong> focused on crafting premium digital experiences. I architect scalable backend systems and seamlessly integrate them with high-performance, pixel-perfect frontend interfaces.
              </p>
              <br />
              <p className="text-lg sm:text-xl text-[var(--sub)] font-medium leading-[1.8]">
                My obsession is building products that are not just functional, but inherently beautiful and responsive. I treat code like art.
              </p>
            </div>

            {/* Premium Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="glass-card !p-6 flex flex-col justify-center items-center text-center group">
                  <div className="text-4xl sm:text-5xl font-bold text-[var(--ink)] font-number mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-[var(--sub)] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills inside a Card */}
            <div className="glass-card !p-8">
              <h3 className="text-lg font-bold text-[var(--ink)] mb-6 uppercase tracking-widest text-center sm:text-left">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {tech.map((t, i) => (
                  <div key={i} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[var(--ink)] font-medium text-sm sm:text-base hover:bg-[var(--primary)] hover:text-[#0F1115] transition-colors duration-300 cursor-default">
                    {t}
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
