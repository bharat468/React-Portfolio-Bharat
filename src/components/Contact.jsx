import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  const contactInfo = [
    { icon: <Mail size={18} />, text: "bharatpareek256@gmail.com", label: "Email" },
    { icon: <Phone size={18} />, text: "+91 8003953815", label: "Phone" },
    { icon: <MapPin size={18} />, text: "Sardarshahar, Rajasthan", label: "Location" }
  ];

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden bg-transparent">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--dark-accent)]/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="section-container relative z-10 max-w-4xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col items-center justify-center text-center w-full"
        >
          <h2 className="text-[3rem] sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 text-center">
            Let's Talk.
          </h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto font-medium leading-[1.8] text-center pt-4">
            Have a project in mind? Looking to partner or work together?<br className="hidden md:block" /> 
            Reach out directly and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Floating Contact Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16"
        >
          {contactInfo.map((info, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full text-[var(--ink)] hover:bg-[var(--primary)] hover:text-[#0F1115] hover:border-transparent transition-all duration-300 cursor-default shadow-lg group">
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">{info.icon}</span>
              <span className="font-medium tracking-wide text-sm sm:text-base">{info.text}</span>
            </div>
          ))}
        </motion.div>



        {/* FOOTER */}
        <div className="mt-28 w-full border-t border-[var(--border)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-bold text-[var(--sub)] uppercase tracking-wider">
          <div>
            © {new Date().getFullYear()} <span className="text-[var(--ink)] font-black ml-1">Bharat Kumar</span>
          </div>
          <a href="#hero" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2 group">
            Back to Top
            <span className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--primary-ring)] group-hover:-translate-y-1 transition-all shadow-sm">
              ↑
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}