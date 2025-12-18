import React from "react";
import bharat from "../assets/img/image.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        min-h-screen pt-32
        bg-gradient-to-br from-[#0B0F19] via-[#120C2E] to-[#1A103D]
        flex items-center
      "
    >
      <div
        className="
          max-w-7xl mx-auto px-6
          grid md:grid-cols-2 gap-12
          items-center
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            I'm <span className="text-orange-500">Bharat Kumar</span>
          </h1>

          <h2 className="mt-4 tracking-widest text-sm text-gray-400 uppercase">
            I am a Full Stack Developer
          </h2>

          <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">
            Passionate about creating web applications with modern
            technologies and bringing ideas to life through clean,
            scalable code.
          </p>

          {/* ✅ RESUME BUTTON (NO IMPORT ISSUE) */}
          <a
            href="/public/bharat RESUME (1).pdf"
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

        {/* ================= RIGHT IMAGE ================= */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">

            {/* SOFT BACK GLOW */}
            <div
              className="
                absolute top-6 left-6
                w-72 h-72 rounded-full
                bg-gradient-to-tr from-orange-500 to-pink-500
                blur-3xl opacity-30
              "
            ></div>

            {/* IMAGE RING */}
            <div
              className="
                relative w-72 h-72 rounded-full
                bg-gradient-to-tr from-[#1A103D] to-[#0B0F19]
                p-1 shadow-2xl
              "
            >
              <img
                src={bharat}
                alt="Bharat Kumar"
                className="
                  w-full h-full rounded-full
                  object-cover
                  border-4 border-[#0B0F19]
                "
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
