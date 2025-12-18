import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // mobile menu close after click
    }
  };

  return (
    <header
      className="
        fixed top-0 w-full z-50
        bg-gradient-to-r from-[#0B0F19] to-[#1A103D]
        border-b border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">👋</span>
          <h1 className="text-xl font-bold text-orange-500">
            Hey!
          </h1>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <nav
          className="
            hidden md:flex
            bg-gradient-to-r from-[#0b0f19d7] to-[#1A103D] backdrop-blur-xl
            rounded-full px-6 py-2
            gap-6 text-sm text-gray-300
          "
        >
          <button onClick={() => scrollToSection("hero")} className="hover:text-orange-400">Home</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-orange-400">About</button>
          <button onClick={() => scrollToSection("skill")} className="hover:text-orange-400">Skills</button>
          <button onClick={() => scrollToSection("project")} className="hover:text-orange-400">Projects</button>
          <button onClick={() => scrollToSection("experience")} className="hover:text-orange-400">Experience</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-orange-400">Contact</button>
        </nav>

        {/* ================= MOBILE ICON ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div
          className="
            md:hidden
            bg-[#0B0F19]/95 backdrop-blur-xl
            border-t border-white/10
          "
        >
          <div className="flex flex-col items-center gap-6 py-6 text-gray-300">
            <button onClick={() => scrollToSection("hero")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("skill")}>Skills</button>
            <button onClick={() => scrollToSection("project")}>Projects</button>
            <button onClick={() => scrollToSection("experience")}>Experience</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}
