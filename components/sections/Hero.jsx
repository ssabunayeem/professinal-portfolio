"use client";

import React from "react";
import { motion as Motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTerminal,
  FaCode,
} from "react-icons/fa";
import ScrollyCanvas from "../hero/ScrollyCanvas";

export default function Hero() {
  return (
    <div
      className="relative h-[200vh] md:h-[300vh] w-full bg-background"
      id="home"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0 opacity-50">
          <ScrollyCanvas numFrames={192} />
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-background to-transparent z-10 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column: Terminal Panel */}
            <Motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* ASCII Art Banner */}

              {/* Terminal Prompt */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-4 md:p-6 rounded-xl border border-primary/20 bg-black/20 hover:bg-black/30  shadow-sm"
              >
                {/* System Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                  <FaTerminal className="text-secondary" />
                  <span className="text-xs font-mono text-muted">
                    dev@portfolio:~$
                  </span>
                  <div className="ml-auto flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                </div>

                {/* Greeting */}
                <div className="mb-4">
                  <p className="text-primary font-mono text-sm mb-2">
                    Professional Full-Stack Engineer
                  </p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-2">
                    S.S. Abu Nayeem
                  </h1>
                  <p className="text-muted text-sm md:text-base max-w-xl">
                    Building scalable, high-performance web applications for
                    global startups. Focused on architectural integrity and
                    production-ready code.
                  </p>
                </div>

                {/* Typing Animation */}
                <div className="mb-6">
                  <p className="text-muted text-sm mb-2">
                    <span className="text-primary">$</span> ./show_roles.sh
                  </p>
                  <div className="min-h-[60px]">
                    <TypeAnimation
                      sequence={[
                        "MERN Stack Web Developer",
                        2000,
                        "React & Next.js Developer",
                        2000,
                        "Frontend Specialist",
                        2000,
                        "Technical Consultant",
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      className="text-lg sm:text-xl md:text-2xl font-bold text-primary font-mono"
                      repeat={Infinity}
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="text-muted text-sm leading-relaxed space-y-2">
                  <p>
                    <span className="text-primary">►</span> Engineering
                    scalable, enterprise-grade web applications for global
                    startups
                  </p>
                  <p>
                    <span className="text-primary">►</span> Deep proficiency in
                    the modern React ecosystem and high-availability backends
                  </p>
                  <p>
                    <span className="text-primary">►</span> Committed to
                    security-first architecture and performance optimization
                  </p>
                </div>
              </Motion.div>
            </Motion.div>

            {/* Right Column: ASCII Art, Stats & Actions */}
            <Motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center lg:items-end justify-center space-y-8"
            >
              {/* ASCII Art Banner */}
              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full p-4 rounded-lg overflow-hidden bg-black/10 hover:bg-black/20 border border-primary/20 shadow-sm"
              >
                <div className="overflow-x-auto custom-scrollbar">
                  <pre className="text-[5px] xs:text-[7px] sm:text-[8px] md:text-[10px] leading-tight text-primary font-mono whitespace-pre inline-block min-w-full">
                    {`
 ██████╗ ███████╗██╗   ██╗    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔═══██╗██╔════╝██║   ██║    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██║   ██║█████╗  ██║   ██║    ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██║   ██║██╔══╝  ╚██╗ ██╔╝    ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
╚██████╔╝███████╗ ╚████╔╝     ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
 ╚═════╝ ╚══════╝  ╚═══╝      ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
`}
                  </pre>
                </div>
              </Motion.div>

              {/* Cyber Stats */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-4 w-full"
              >
                {[
                  {
                    label: "IT EXPERIENCE",
                    value: "4+ Years",
                    color: "text-primary",
                    border: "hover:border-primary/50",
                  },
                  {
                    label: "STACK",
                    value: "MERN",
                    color: "text-foreground",
                    border: "hover:border-foreground/50",
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg bg-black/10 border border-white/5 ${stat.border} transition-all group shadow-sm flex flex-col items-center lg:items-end`}
                  >
                    <div className={`text-2xl font-black ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-mono text-muted uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </Motion.div>

              {/* Terminal Commands (CTA Buttons) */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 w-full lg:w-auto"
              >
                <a
                  href="https://drive.google.com/file/d/1vMdn2bJFIkN4XbmnaV11bCIW4GOAYMwi/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-4 rounded-xl overflow-hidden border border-primary/30 hover:border-primary transition-all duration-300 flex items-center justify-center gap-3 bg-primary/10 hover:bg-primary/20 backdrop-blur-sm shadow-lg shadow-primary/5"
                >
                  <FaTerminal className="text-primary" />
                  <span className="text-foreground font-mono text-xs md:text-sm uppercase tracking-wider font-extrabold whitespace-nowrap">
                    $ GET --RESUME
                  </span>
                </a>
                <a
                  href="#projects"
                  className="group relative px-6 py-4 rounded-xl overflow-hidden border border-white/10 hover:border-foreground/50 transition-all duration-300 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                >
                  <FaCode className="text-foreground" />
                  <span className="text-foreground font-mono text-xs md:text-sm uppercase tracking-wider font-extrabold whitespace-nowrap">
                    $ VIEW --PORTFOLIO
                  </span>
                </a>
              </Motion.div>

              {/* Social Links */}
              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex gap-4"
              >
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/ssabunayeem",
                    hoverColor: "hover:text-white",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://linkedin.com/in/ssabunayeem",
                    hoverColor: "hover:text-primary",
                  },
                  {
                    icon: FaWhatsapp,
                    href: "https://wa.me/8801673722032",
                    hoverColor: "hover:text-secondary",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center text-muted ${social.hoverColor} hover:bg-white/5 transition-all shadow-sm`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </Motion.div>
            </Motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-muted uppercase tracking-[0.2em]">
            Scroll
          </span>
          <div className="w-px h-12 bg-linear-to-b from-primary to-transparent">
            <Motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-1 bg-primary rounded-full -ml-[1.5px]"
            />
          </div>
        </Motion.div>
      </div>
    </div>
  );
}
