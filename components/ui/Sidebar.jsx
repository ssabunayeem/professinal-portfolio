"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaChalkboardTeacher,
  FaTools,
  FaProjectDiagram,
  FaHandHoldingHeart,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

const navItems = [
  { icon: FaHome, label: "Home", href: "#home" },
  { icon: FaUser, label: "About", href: "#about" },
  { icon: FaTools, label: "Skills", href: "#skills" },
  { icon: FaProjectDiagram, label: "Projects", href: "#projects" },
  { icon: FaBriefcase, label: "Experience", href: "#experience" },
  { icon: FaGraduationCap, label: "Education", href: "#education" },
  { icon: FaChalkboardTeacher, label: "Training", href: "#training" },
  { icon: FaHandHoldingHeart, label: "Volunteering", href: "#volunteering" },
  {
    icon: FaFileAlt,
    label: "Resume",
    href: "https://drive.google.com/file/d/1vMdn2bJFIkN4XbmnaV11bCIW4GOAYMwi/view",
    isExternal: true,
  },
  { icon: FaEnvelope, label: "Contact", href: "#contact" },
];

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState("#home");

  const handleScroll = (e, item) => {
    if (item.isExternal) return;

    e.preventDefault();
    const { href } = item;
    setActiveItem(href);
    if (window.lenis) {
      window.lenis.scrollTo(href);
    } else {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Desktop Sidebar (Left) */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, width: isHovered ? 260 : 80 }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hidden md:flex fixed left-0 top-0 h-screen flex-col items-center py-8 bg-black/10 hover:bg-black/20 backdrop-blur-xl border-r border-primary/20 shadow-xl z-50 overflow-hidden border-neon-primary"
      >
        {/* Top: Logo/System Status */}
        <div className="w-full flex items-center justify-center mb-10 px-4 h-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 min-w-[40px] rounded-xl border border-primary/20 flex items-center justify-center bg-primary/10">
              <span className="font-bold text-primary text-lg">N</span>
            </div>
            {/* Logo Text (Animated) */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="whitespace-nowrap overflow-hidden"
                >
                  <h1 className="font-bold text-foreground text-lg tracking-wider">
                    NAYEEM<span className="text-primary">.</span>
                  </h1>
                  <p className="text-[10px] text-muted font-mono tracking-widest">
                    SYSTEM_ONLINE
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Center: Navigation Items */}
        <nav className="flex-1 w-full px-4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden scrollbar-none">
          {navItems.map((item, index) => {
            const isActive = activeItem === item.href;
            return (
              <a
                key={index}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                onClick={(e) => handleScroll(e, item)}
                className={`relative group w-full flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-primary/10 border border-primary/30 shadow-[0_0_10px_rgba(139,92,246,0.1)]"
                    : "hover:bg-white/5 border border-transparent hover:border-white/5"
                }`}
              >
                {/* Active Bar (Left) */}
                {isActive && (
                  <motion.div
                    layoutId="active-bar"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full"
                  />
                )}

                {/* Icon */}
                <div className="min-w-[24px] flex justify-center">
                  <item.icon
                    size={18}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-primary glow-primary scale-110"
                        : "text-muted group-hover:text-foreground group-hover:glow-primary"
                    }`}
                  />
                </div>

                {/* Label (Animated) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`whitespace-nowrap text-sm font-medium tracking-wide ${
                        isActive
                          ? "text-foreground font-semibold"
                          : "text-muted group-hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </a>
            );
          })}
        </nav>

        {/* Bottom: Social/Connect */}
        <div className="w-full px-4 mt-4">
          <div className="w-full p-4 rounded-xl border border-white/5 flex flex-col items-center gap-3 overflow-hidden relative group bg-black/20">
            <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4 items-center relative z-10"
                >
                  <a
                    href="https://github.com/ssabunayeem"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/ssabunayeem"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full flex flex-col gap-2 relative z-10"
                >
                  <p className="text-[10px] text-muted uppercase font-mono tracking-wider text-center mb-1">
                    Connect
                  </p>
                  <div className="flex justify-evenly w-full">
                    <a
                      href="https://github.com/ssabunayeem"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded bg-white/5 hover:bg-primary/10 text-muted hover:text-primary transition-all"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href="https://linkedin.com/in/ssabunayeem"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded bg-white/5 hover:bg-primary/10 text-muted hover:text-primary transition-all"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Mobile Bottom Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-black/10 hover:bg-black/20 backdrop-blur-md border border-primary/20 rounded-2xl shadow-2xl z-50 px-6 py-4 transition-all duration-500 border-neon-primary"
      >
        <div className="flex justify-between items-center">
          {navItems
            .filter((item) => !item.isExternal)
            .slice(0, 6)
            .map((item, index) => {
              const isActive = activeItem === item.href;
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item)}
                  className="flex flex-col items-center gap-1 group relative"
                >
                  {isActive && (
                    <div className="absolute -top-4 w-8 h-1 bg-primary rounded-b-full" />
                  )}
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      isActive ? "bg-primary/20 text-primary" : "text-muted"
                    }`}
                  >
                    <item.icon size={20} />
                  </div>
                </a>
              );
            })}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
