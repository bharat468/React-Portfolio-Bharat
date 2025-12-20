import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  // 🔥 AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // mobile menu close after click
    }
  };

  return (
    <header
      data-aos="fade-down"
      className="
        fixed top-0 w-full z-50
        bg-gradient-to-r from-[#0B0F19] to-[#1A103D]
        border-b border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <div className="flex items-center gap-2" data-aos="fade-right">
          <span className="text-3xl">👋</span>
          <h1 className="text-2xl font-bold text-orange-500">
            Hey!
          </h1>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <nav
          data-aos="fade-up"
          className="
            hidden md:flex
            bg-gradient-to-r from-[#0b0f19d7] to-[#1A103D]
            backdrop-blur-xl
            rounded-full px-8 py-3
            gap-8
            text-base font-medium
            text-gray-300
          "
        >
          <button onClick={() => scrollToSection("hero")} className="hover:text-orange-400 transition">Home</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-orange-400 transition">About</button>
          <button onClick={() => scrollToSection("skill")} className="hover:text-orange-400 transition">Skills</button>
          <button onClick={() => scrollToSection("project")} className="hover:text-orange-400 transition">Projects</button>
          <button onClick={() => scrollToSection("experience")} className="hover:text-orange-400 transition">Experience</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-orange-400 transition">Contact</button>
        </nav>

        {/* ================= MOBILE ICON ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
          data-aos="fade-left"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div
          data-aos="fade-down"
          className="
            md:hidden
            bg-[#0B0F19]/95 backdrop-blur-xl
            border-t border-white/10
          "
        >
          <div className="flex flex-col items-center gap-7 py-8 text-lg font-medium text-gray-300">
            <button onClick={() => scrollToSection("hero")} className="hover:text-orange-400">Home</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-orange-400">About</button>
            <button onClick={() => scrollToSection("skill")} className="hover:text-orange-400">Skills</button>
            <button onClick={() => scrollToSection("project")} className="hover:text-orange-400">Projects</button>
            <button onClick={() => scrollToSection("experience")} className="hover:text-orange-400">Experience</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-orange-400">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}
