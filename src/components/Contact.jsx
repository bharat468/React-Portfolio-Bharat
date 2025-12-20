import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="contact"
      className="
        relative w-full
        py-28                 /* 👈 GAP FROM TOP & BOTTOM */
        flex items-center justify-center
        px-6
        bg-gradient-to-br
        from-[#050b24]
        via-[#071a2f]
        to-[#020617]
        overflow-hidden
      "
    >
      {/* DARK HERO OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTACT CARD */}
      <div
        data-aos="zoom-in"
        className="
          relative z-10
          w-full max-w-[900px]
          rounded-2xl
          bg-[#0f172a]/85
          backdrop-blur-xl
          border border-white/10
          px-8 py-10 md:px-12 md:py-12
          shadow-[0_0_60px_rgba(0,0,0,0.6)]
        "
      >
        {/* TITLE */}
        <h2
          data-aos="fade-down"
          className="text-center text-3xl md:text-4xl font-bold mb-10"
        >
          <span className="text-cyan-400">Contact Me</span>
        </h2>

        {/* CONTACT INFO */}
        <div
          data-aos="fade-up"
          className="flex flex-col gap-4 items-center mb-10 text-gray-300"
        >
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-cyan-400" />
            <span>bharatpareek256@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-cyan-400" />
            <span>8003953815</span>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <input type="hidden" name="email" value="bharatpareek256@gmail.com" />

          <input
            type="text"
            placeholder="Your Name"
            required
            className="
              px-4 py-3 rounded-lg
              bg-black/40
              border border-white/10
              text-gray-200 placeholder-gray-400
              focus:outline-none focus:border-cyan-400
            "
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="
              px-4 py-3 rounded-lg
              bg-black/40
              border border-white/10
              text-gray-200 placeholder-gray-400
              focus:outline-none focus:border-cyan-400
            "
          />

          <input
            type="text"
            placeholder="Subject"
            required
            className="
              md:col-span-2
              px-4 py-3 rounded-lg
              bg-black/40
              border border-white/10
              text-gray-200 placeholder-gray-400
              focus:outline-none focus:border-cyan-400
            "
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            required
            className="
              md:col-span-2
              px-4 py-3 rounded-lg
              bg-black/40
              border border-white/10
              text-gray-200 placeholder-gray-400
              focus:outline-none focus:border-cyan-400
            "
          ></textarea>

          <div className="md:col-span-2 text-center mt-2">
            <button
              type="submit"
              className="
                px-8 py-3 rounded-lg
                bg-cyan-400
                text-black font-semibold
                hover:bg-cyan-300
                hover:shadow-[0_0_20px_#22d3ee]
                transition
              "
            >
              Send Message
            </button>
          </div>
        </form>

        {/* SOCIAL ICONS (FIXED VISIBILITY) */}
        <div
          data-aos="fade-up"
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href="https://www.linkedin.com/in/bharat-kumar-3678a324a/"
            target="_blank"
            className="
              w-12 h-12 rounded-full
              flex items-center justify-center
              bg-[#0a66c2]
              text-white text-xl
              hover:scale-110
              hover:shadow-[0_0_20px_#0a66c2]
              transition
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/bharat468"
            target="_blank"
            className="
              w-12 h-12 rounded-full
              flex items-center justify-center
              bg-[#111827]
              text-white text-xl
              hover:scale-110
              hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]
              transition
            "
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
