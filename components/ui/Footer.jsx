"use client";

import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-primary/20 pt-32 pb-20 bg-background overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-linear-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_25px_rgba(var(--primary-rgb),0.5)]" />
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand Section */}
          <div className="space-y-4">
            <a
              href="#"
              className="text-3xl font-bold text-foreground tracking-tighter"
            >
              Nayeem<span className="text-primary">.</span>
            </a>
            <p className="text-muted max-w-sm leading-relaxed text-sm">
              Crafting immersive digital experiences with modern web
              technologies. Let&apos;s build something extraordinary together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-sm mb-4 text-foreground uppercase tracking-widest">
                Navigation
              </h4>
              <ul className="space-y-2 text-muted text-sm font-medium">
                <li>
                  <a
                    href="#about"
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-primary transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-primary transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4 text-foreground uppercase tracking-widest">
                More
              </h4>
              <ul className="space-y-2 text-muted text-sm font-medium">
                <li>
                  <a
                    href="#experience"
                    className="hover:text-primary transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social/Connect */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm mb-4 text-foreground uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/ssabunayeem"
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-foreground transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ssabunayeem"
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-primary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:ssabunayeem@gmail.com"
                className="text-muted hover:text-foreground transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://wa.me/8801673722032"
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-secondary transition-colors"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
            <p className="text-xs text-muted/50 mt-8 font-mono">
              © {new Date().getFullYear()} Abu Nayeem. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
