import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// PROJECT IMAGES
import pokemon from "../assets/img/pokemon.jpeg";
import ecommerce from "../assets/img/e-commerce.jpg";
import calculator from "../assets/img/calculetor.jpg";
import todo from "../assets/img/todo App.jpg";
import API from "../assets/img/API.jpg";
import Asian from "../assets/img/The Asian Club.jpeg";
import newecommerce from "../assets/img/full stack ecommerce.jpeg";
import form from "../assets/img/form.jpeg";
import game from "../assets/img/dice game.jpeg";

export default function Project() {
  // ================= AOS INIT =================
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // ================= PROJECT DATA =================
  const projects = [
    // ===== FEATURED CURRENT MERN PROJECT =====
    {
      title: "Full Stack E-Commerce (In Progress)",
      image: newecommerce,
      desc: "Full Stack MERN e-commerce with user auth, cart, products, admin panel & payments.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Render"],
      live: "https://backend-1-unc9.onrender.com/",
      code: "https://github.com/bharat468",
    },

    // ===== HTML / CSS / JS =====
    {
      title: "The Asian Club",
      image: Asian,
      desc: "Fully responsive club/community website made using pure HTML, CSS and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://the-asian-club-green.vercel.app/",
      code: "https://github.com/bharat468",
    },
    {
      title: "API Movie Search App",
      image: API,
      desc: "Fetch and search movies using an external API and display dynamically.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      live: "https://movie-two-hazel.vercel.app/",
      code: "https://github.com/bharat468",
    },
    {
      title: "Dice Rolling Game",
      image: game,
      desc: "Simple dice rolling game using DOM manipulation and random logic.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://dace-game.vercel.app/",
      code: "https://github.com/bharat468",
    },

    // ===== REACT =====
    {
      title: "Pokemon World",
      image: pokemon,
      desc: "Pokemon explorer using React + live API with search, filter & pagination.",
      tech: ["React", "API", "CSS"],
      live: "https://api-blush-chi.vercel.app/",
      code: "https://github.com/bharat468",
    },
    {
      title: "Todo App",
      image: todo,
      desc: "CRUD todo app built with React and LocalStorage persistence.",
      tech: ["React", "CSS", "LocalStorage"],
      live: "https://todo-zeta-flame-12.vercel.app/",
      code: "https://github.com/bharat468",
    },
    {
      title: "Calculator App",
      image: calculator,
      desc: "Basic calculator made in HTML, CSS and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://calculetor-three.vercel.app/",
      code: "https://github.com/bharat468",
    },

    // ===== ADVANCED UI / FIREBASE =====
    {
      title: "E-Commerce UI Demo",
      image: ecommerce,
      desc: "Frontend e-commerce UI with Firebase backend and product management.",
      tech: ["React", "Firebase", "Tailwind"],
      live: "https://react-ecommerce-zeta-inky.vercel.app/",
      code: "https://github.com/bharat468",
    },

    // ===== CMS PANEL =====
    {
      title: "Form Dashboard CMS",
      image: form,
      desc: "React dashboard to collect and manage submitted form entries.",
      tech: ["React", "Tailwind"],
      live: "https://fsl-form-seven.vercel.app/",
      code: "https://github.com/bharat468",
    },
  ];

  return (
    <section
      id="project"
      className="min-h-screen py-24 bg-gradient-to-br from-[#0E0B1F] via-[#120C2E] to-[#0B0F19]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-white text-center mb-16"
          data-aos="fade-down"
        >
          My <span className="text-orange-500">Projects</span>
        </h2>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                group relative
                bg-white/10 backdrop-blur-xl
                border border-white/20
                rounded-2xl overflow-hidden
                text-gray-300
                transition-all duration-500 ease-out
                hover:-translate-y-3
                hover:border-orange-500
                hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-44 object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-110
                  "
                />
                <div
                  className="
                    absolute inset-0
                    bg-black/60
                    flex items-center justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500
                  "
                >
                  <span className="text-orange-400 font-semibold text-lg">
                    View Project
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        text-xs px-3 py-1 rounded-full
                        bg-black/40 border border-white/10
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      text-sm px-4 py-2 rounded-lg
                      bg-orange-500 text-black font-semibold
                      hover:shadow-[0_0_20px_#F97316]
                      transition
                    "
                  >
                    <FaExternalLinkAlt /> Live
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      text-sm px-4 py-2 rounded-lg
                      border border-white/20
                      hover:border-orange-500
                      hover:text-orange-400
                      transition
                    "
                  >
                    <FaGithub /> Code
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
