import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  const contactInfo = [
    { icon: <Mail size={20} />, text: "hello@bharatpareek.com", label: "Email" },
    { icon: <Phone size={20} />, text: "+91 98765 43210", label: "Phone" },
    { icon: <MapPin size={20} />, text: "Rajasthan, India", label: "Location" }
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
          className="mb-16 text-center"
        >
          <h2 className="text-[3rem] sm:text-6xl md:text-7xl font-black text-[var(--ink)] tracking-tight leading-[1.1] mb-6">
            Let's Talk.
          </h2>
          <p className="text-[var(--sub)] text-lg max-w-2xl mx-auto font-medium">
            Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you within 24 hours.
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

        {/* Borderless Floating Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <form className="flex flex-col gap-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {/* Name Input */}
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-0 border-b border-[var(--border)] py-4 text-[var(--ink)] text-lg focus:outline-none transition-colors peer placeholder:text-[var(--sub)]/50"
                />
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--primary)] transition-all duration-500 peer-focus:w-full"></span>
              </div>

              {/* Email Input */}
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-0 border-b border-[var(--border)] py-4 text-[var(--ink)] text-lg focus:outline-none transition-colors peer placeholder:text-[var(--sub)]/50"
                />
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--primary)] transition-all duration-500 peer-focus:w-full"></span>
              </div>
            </div>

            {/* Message Input */}
            <div className="relative group">
              <textarea
                placeholder="Tell me about your project..."
                rows="4"
                className="w-full bg-transparent border-0 border-b border-[var(--border)] py-4 text-[var(--ink)] text-lg focus:outline-none transition-colors peer resize-none placeholder:text-[var(--sub)]/50"
              ></textarea>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--primary)] transition-all duration-500 peer-focus:w-full"></span>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button
                type="button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="btn btn-primary !rounded-full !px-10 !py-4 text-sm tracking-widest flex items-center gap-3 overflow-hidden group relative"
              >
                <span className="relative z-10 font-extrabold uppercase">Send Message</span>
                <Send size={18} className={`relative z-10 transition-transform duration-500 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 rounded-full z-0"></div>
              </button>
            </div>

          </form>
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