import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVercel } from "react-icons/si";

export default function Skill() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ];

  return (
    <section
      id="skill"
      className="
        min-h-screen py-24
        bg-gradient-to-br from-[#0B0F19] via-[#120C2E] to-[#0E0B1F]
        flex items-center
      "
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          My <span className="text-orange-500">Skills</span>
        </h2>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group
                bg-white/10 backdrop-blur-xl
                border border-white/20
                rounded-2xl p-6
                flex flex-col items-center justify-center gap-3
                text-gray-300
                hover:-translate-y-2 transition duration-300
                hover:border-orange-500
                hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]
              "
            >
              {/* ICON (smaller & clean) */}
              <div className="text-4xl group-hover:scale-110 transition">
                {skill.icon}
              </div>

              {/* NAME */}
              <h3 className="text-sm font-semibold tracking-wide group-hover:text-orange-400 transition">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
