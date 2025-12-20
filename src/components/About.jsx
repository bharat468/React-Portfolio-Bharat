import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {

  // 🔥 AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

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

        {/* ================= SECTION TITLE ================= */}
        <h2
          className="text-4xl font-bold text-white text-center mb-14"
          data-aos="fade-down"
        >
          About <span className="text-orange-500">Me</span>
        </h2>

        {/* ================= GLASS CARD ================= */}
        <div
          className="
            relative
            max-w-4xl mx-auto
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-2xl p-8 md:p-10
            text-gray-300
            shadow-2xl
          "
          data-aos="zoom-in"
        >
          {/* ✨ SOFT GLOW */}
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-orange-500/30 blur-3xl rounded-full"></div>

          {/* ABOUT TEXT */}
          <p
            className="leading-relaxed text-lg relative z-10"
            data-aos="fade-up"
          >
            I am a passionate{" "}
            <span className="text-orange-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            with experience in building modern web applications using
            React, JavaScript, and backend technologies. I enjoy
            creating clean UI, scalable code, and meaningful user
            experiences.
          </p>

          {/* ================= STATS ================= */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center relative z-10">

            <div
              className="p-6 bg-black/40 rounded-xl hover:scale-105 transition"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-3xl font-bold text-orange-500">1+</h3>
              <p className="text-sm text-gray-400 mt-1">Years Learning</p>
            </div>

            <div
              className="p-6 bg-black/40 rounded-xl hover:scale-105 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-3xl font-bold text-orange-500">10+</h3>
              <p className="text-sm text-gray-400 mt-1">Projects</p>
            </div>

            <div
              className="p-6 bg-black/40 rounded-xl hover:scale-105 transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-bold text-orange-500">React</h3>
              <p className="text-sm text-gray-400 mt-1">Primary Skill</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
