import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {

  // ================= AOS INIT =================
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="experience"
      className="
        min-h-screen flex items-center justify-center px-6
        bg-gradient-to-br from-[#020617] via-[#020b2e] to-[#020617]
      "
    >
      {/* MAIN CONTAINER */}
      <div
        data-aos="zoom-in"
        className="
          w-full max-w-6xl
          rounded-3xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          p-10 md:p-14
          shadow-[0_0_60px_rgba(0,255,255,0.08)]
        "
      >
        {/* TITLE */}
        <h2
          data-aos="fade-down"
          className="text-center text-4xl md:text-5xl font-bold mb-16"
        >
          <span className="text-cyan-400">Experience</span>
        </h2>

        {/* TIMELINE */}
        <div className="relative">

          {/* VERTICAL LINE */}
          <div
            data-aos="fade-up"
            className="absolute left-4 top-0 h-full w-[2px]
            bg-gradient-to-b from-orange-500 via-pink-500 to-purple-500"
          />

          {/* ===== ITEM 1 ===== */}
          <div
            data-aos="fade-right"
            className="relative pl-14 mb-10"
          >
            {/* DOT */}
            <span className="absolute left-[6px] top-6 w-3 h-3 bg-orange-500 rounded-full" />

            {/* CARD */}
            <div
              className="
                bg-white/5
                border border-white/10
                rounded-xl
                p-6
                transition-all duration-500
                hover:scale-[1.02]
                hover:border-cyan-400/50
                hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]
              "
            >
              <h3 className="text-xl font-semibold text-orange-400">
                Full Stack Intern{" "}
                <span className="text-gray-300">@ FSL Learning</span>
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                May 2025 – Present
              </p>
            </div>
          </div>

          {/* ===== ITEM 2 ===== */}
          <div
            data-aos="fade-left"
            className="relative pl-14"
          >
            {/* DOT */}
            <span className="absolute left-[6px] top-6 w-3 h-3 bg-pink-500 rounded-full" />

            {/* CARD */}
            <div
              className="
                bg-white/5
                border border-white/10
                rounded-xl
                p-6
                transition-all duration-500
                hover:scale-[1.02]
                hover:border-pink-400/50
                hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]
              "
            >
              <h3 className="text-xl font-semibold text-pink-400">
                Full Stack Learning Internship
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Hands-on learning in frontend & backend development
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
