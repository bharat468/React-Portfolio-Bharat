import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen py-24
        bg-gradient-to-br from-[#0E0B1F] via-[#120C2E] to-[#0B0F19]
        flex items-center
      "
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* SECTION TITLE */}
        <h2 className="text-4xl font-bold text-white text-center mb-14">
          About <span className="text-orange-500">Me</span>
        </h2>

        {/* GLASS CARD */}
        <div
          className="
            max-w-4xl mx-auto
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-2xl p-8 md:p-10
            text-gray-300
            shadow-2xl
          "
        >
          <p className="leading-relaxed text-lg">
            I am a passionate{" "}
            <span className="text-orange-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            with experience in building modern web applications using
            React, JavaScript, and backend technologies. I enjoy
            creating clean UI, scalable code, and meaningful user
            experiences.
          </p>

          {/* STATS */}
          <div className="mt-10 grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-5 bg-black/40 rounded-xl">
              <h3 className="text-3xl font-bold text-orange-500">1+</h3>
              <p className="text-sm text-gray-400 mt-1">Years Learning</p>
            </div>

            <div className="p-5 bg-black/40 rounded-xl">
              <h3 className="text-3xl font-bold text-orange-500">10+</h3>
              <p className="text-sm text-gray-400 mt-1">Projects</p>
            </div>

            <div className="p-5 bg-black/40 rounded-xl">
              <h3 className="text-2xl font-bold text-orange-500">React</h3>
              <p className="text-sm text-gray-400 mt-1">Primary Skill</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
