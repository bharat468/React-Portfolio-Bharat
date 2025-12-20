import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bharat from "../assets/img/image.png";

export default function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="hero"
      className="
        min-h-screen pt-32
        bg-gradient-to-br from-[#0B0F19] via-[#120C2E] to-[#1A103D]
        flex items-center
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            I'm <span className="text-orange-500">Bharat Kumar</span>
          </h1>

          <h2 className="mt-4 tracking-widest text-sm text-gray-400 uppercase">
            Full Stack Developer
          </h2>

          <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">
            Passionate about building modern, scalable web applications
            with clean UI and strong backend logic.
          </p>

          {/* ✅ RESUME BUTTON (VERCEL SAFE) */}
          <a
            href="/bharat-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block mt-8 px-7 py-3 rounded-lg
              bg-orange-500 text-black font-semibold
              hover:shadow-[0_0_30px_#F97316]
              transition duration-300
            "
          >
            View Resume →
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end" data-aos="zoom-in">
          <div className="relative flex flex-col items-center">

            {/* AVAILABLE BADGE */}
            <div className="
              mb-6 px-6 py-2 rounded-full
              bg-white/10 backdrop-blur-xl
              border border-white/20
              text-sm text-gray-200
              flex items-center gap-2
            ">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              AVAILABLE FOR JOB
            </div>

            {/* IMAGE */}
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 blur-3xl opacity-40"></div>

              <div className="relative w-full h-full rounded-full p-[4px] bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600">
                <div className="w-full h-full rounded-full bg-[#0B0F19] p-2">
                  <img
                    src={bharat}
                    alt="Bharat Kumar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
