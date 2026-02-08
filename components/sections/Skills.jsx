"use client";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiDaisyui,
  SiVite,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiStripe,
  SiPostman,
  SiFigma,
  SiLinux,
} from "react-icons/si";
import { TbApi, TbDeviceDesktopAnalytics, TbBug } from "react-icons/tb";
import { FaPalette } from "react-icons/fa";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "DaisyUI", icon: SiDaisyui, color: "#5AD1E4" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "REST APIs", icon: TbApi, color: "#00A3E0" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    category: "Design & Tools",
    items: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Responsive", icon: TbDeviceDesktopAnalytics, color: "#00A3E0" },
      { name: "Pixso", icon: FaPalette, color: "#F24E1E" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Testing", icon: TbBug, color: "#D11919" },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle
        label="Expertise"
        title="Skills & Technologies"
        subtitle="A comprehensive toolkit for modern software development."
      />

      <div className="max-w-6xl mx-auto space-y-16">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px grow bg-border-dim/30"></div>
              <h3 className="text-xl font-bold text-foreground/80 tracking-wide uppercase">
                {skillGroup.category}
              </h3>
              <div className="h-px grow bg-border-dim/30"></div>
            </div>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
              {skillGroup.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center gap-4 group cursor-default"
                >
                  <div className="relative p-5 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-500">
                    <item.icon
                      size={40}
                      color={item.color}
                      className="drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-sm font-semibold text-muted group-hover:text-foreground transition-colors duration-300">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
