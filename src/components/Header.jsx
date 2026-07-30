import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "project" },
    { name: "Skills", id: "skill" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 sm:pt-5 px-3 sm:px-6 pointer-events-none"
    >
      <div
        className={`max-w-[1400px] mx-auto px-6 py-4 pointer-events-auto transition-all duration-500 rounded-full flex items-center justify-between ${scrolled ? "bg-[rgba(15,17,21,0.8)] backdrop-blur-[25px] border border-white/5 shadow-2xl" : "bg-transparent border-transparent"
          }`}
      >
        {/* BRAND LOGO */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl sm:text-2xl font-black text-[var(--ink)] tracking-tight cursor-pointer font-['Sora'] flex items-center"
        >
          BHARAT KUMAR<span className="text-[var(--primary)] font-light">.</span>
        </button>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[var(--sub)]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative group transition-colors duration-300 hover:text-[var(--ink)] cursor-pointer"
            >
              {link.name}
              {/* Champagne Underline Animation */}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[var(--primary)] transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* MOBILE HAMBURGER TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[var(--ink)] hover:text-[var(--primary)] transition-colors focus:outline-none p-2 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-3 max-w-[1400px] mx-auto bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl pointer-events-auto p-4 sm:p-6"
          >
            <div className="flex flex-col gap-4 text-sm font-medium text-[var(--ink)]">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-[var(--primary)] w-full py-3 transition-colors cursor-pointer flex items-center justify-start text-left font-['Sora'] text-lg"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
