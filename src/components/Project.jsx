import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Layers3, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// PROJECT IMAGES
import sosalImg from "../assets/img/sosal.png";
import shopHubImg from "../assets/img/Shophub.png";
import radhaImg from "../assets/img/radha.png";
import chronelixImg from "../assets/img/chronelix.png";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Sosal — Social Media Web App",
      category: "Full Stack Architecture",
      description: "Built a full-stack social media platform with real-time interactions, posts, and user profiles.",
      img: sosalImg,
      stack: ["React", "Redux", "Socket.io", "Node.js", "Express", "MongoDB"],
      live: "https://sosal-frontend.onrender.com/login",
      github: "https://github.com/bharat468?tab=repositories",
      featured: true
    },
    {
      id: 2,
      title: "ShopHub E-Commerce",
      category: "REST API Architecture",
      description: "Developed secure, scalable REST APIs powering authentication, product management, and real-time data flow for an e-commerce platform.",
      img: shopHubImg,
      stack: ["React.js", "Node.js", "Express", "MongoDB"],
      live: "https://backend-1-unc9.onrender.com",
      github: "https://github.com/bharat468?tab=repositories",
      featured: false
    },
    {
      id: 3,
      title: "Radha Enterprises",
      category: "Frontend Architecture",
      description: "Developed a complete frontend web application using React.js. Implemented modern, highly responsive user interfaces with Shadcn UI and Tailwind CSS, while managing complex application state with Redux.",
      img: radhaImg,
      stack: ["React.js", "Redux", "Tailwind CSS", "Shadcn UI", "Typescript"],
      live: "https://radha-enterprises-rouge.vercel.app/",
      github: "https://github.com/bharat468?tab=repositories",
      featured: true
    },
    {
      id: 4,
      title: "Chronelix",
      category: "Frontend Application",
      description: "Built the Chronelix frontend web application using React.js. Designed a highly interactive and modern user interface focusing on robust component structure and seamless user experience.",
      img: chronelixImg,
      stack: ["React.js", "Tailwind CSS", "JavaScript"],
      live: "https://chronelix.vercel.app/",
      github: "https://github.com/bharat468?tab=repositories",
      featured: false
    }
  ];

  return (
    <section id="project" className="py-24 md:py-36 relative overflow-hidden bg-transparent">

      {/* AURORA GLOWS */}
      <div className="absolute top-1/2 -left-32 w-[800px] h-[800px] bg-[var(--primary)]/10 blur-[200px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-0 -right-32 w-[800px] h-[800px] bg-[var(--accent)]/10 blur-[200px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '15s', animationDelay: '2s' }}></div>

      <div className="section-container relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 pb-10 border-b-2 border-[var(--border)] gap-8"
        >
          <div>
            <div className="badge badge-primary mb-4 !px-5 !py-2 !text-xs font-extrabold shadow-[0_0_15px_var(--primary-ring)]">
              <Sparkles size={14} /> 03 / Engineering Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[var(--ink)] tracking-normal font-['Sora'] leading-[1.2]">
              Selected <span className="text-gradient">Architectures</span>
            </h2>
          </div>
          <p className="text-[var(--sub)] max-w-md text-base md:text-lg font-normal leading-[1.85] tracking-[0.015em]">
            A deep dive into high-complexity systems I have engineered, focusing on real-time data, scalability, and premium user experiences.
          </p>
        </motion.div>

        {/* PROJECTS CINEMATIC SHOWCASE */}
        <div className="flex flex-col gap-24 sm:gap-32 mt-10">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? "" : "lg:flex-row-reverse"}`}
              >

                {/* Image Showcase - Cinematic Full Width */}
                <div className="w-full lg:w-[55%] group relative">
                  {/* Decorative Glow */}
                  <div className="absolute inset-0 bg-[var(--primary)]/20 blur-[60px] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden glass-card !p-3 sm:!p-4 shadow-[0_30px_60px_rgba(0,0,0,0.4)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] group-hover:border-[var(--primary-ring)] transition-all duration-700 group-hover:-translate-y-2">
                    <div className="w-full h-full rounded-[1.2rem] sm:rounded-[1.8rem] overflow-hidden relative">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Subtle Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Content - Floating Minimalist Text */}
                <div className="w-full lg:w-[45%] flex flex-col items-start text-left">

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary-soft)] border border-[var(--primary-ring)]/30 flex items-center justify-center text-[var(--primary)] shadow-[0_0_10px_var(--primary-ring)]">
                      {project.featured ? <Layers3 size={18} /> : <Code2 size={18} />}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[var(--sub)] uppercase tracking-widest">{project.category}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--ink)] mb-6 font-['Sora'] leading-[1.2]">
                    {project.title}
                  </h3>

                  {/* FULL UNTRUNCATED DESCRIPTION */}
                  <p className="text-[var(--sub)] text-lg leading-[1.8] tracking-[0.015em] mb-10 font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.stack.map((tech, idx) => (
                      <span key={idx} className="badge badge-primary !px-4 !py-2 !text-xs !font-bold !bg-[var(--bg)] !border-[var(--border)] tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 w-full">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary sm:flex-1 w-full sm:w-auto flex items-center justify-center gap-2 !py-4 shadow-lg group">
                      View Live Project <ExternalLink size={18} strokeWidth={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary !px-5 !py-4 sm:flex-none w-full sm:w-auto justify-center group hover:bg-[var(--primary-soft)] hover:border-[var(--primary-ring)] transition-all">
                      <FaGithub size={22} className="group-hover:scale-110 transition-transform" />
                    </a>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
