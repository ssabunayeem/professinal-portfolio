import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const projects = [
  // ... (projects data unchanged)
  {
    title: "MiniMart",
    subtitle: "High-Concurrency E-Commerce Engine",
    desc: "A sophisticated e-commerce platform designed for sub-second load times and global scalability. Engineered the core architecture from routing to persistent state management.",
    stack: ["Next.js", "Node.js", "Express.js", "Tailwind"],
    live: "https://minimart-client.vercel.app/",
    github: "https://github.com/ssabunayeem/MiniMart-Project",
  },
  {
    title: "Blood Donation System",
    subtitle: "Healthcare Resource Management",
    desc: "A collaborative management platform for critical healthcare resource coordination. Implemented secure role-based access control and integrated multi-currency financial systems.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    live: "https://blood-donation-client.vercel.app/",
    github: "https://github.com/ssabunayeem/Blood-Donation-Management-System",
  },
  {
    title: "PawMart",
    subtitle: "Inventory-Focused Marketplace",
    desc: "An intuitive data-driven marketplace optimized for complex inventory management. Developed a reusable component system that reduced UI delivery time by 40%.",
    stack: ["React", "Tailwind", "Framer Motion", "MongoDB"],
    live: "https://paw-mart-pet.web.app/",
    github: "https://github.com/ssabunayeem/paw-mart-client",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle
        label="Portfolio"
        title="Featured Projects"
        subtitle="A selection of high-performance web applications demonstrating full-stack proficiency."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="glass-card flex flex-col items-center text-center p-8 hover:border-primary/50 hover:scale-[1.02] hover:bg-primary/5 transition-all duration-500 group"
          >
            {/* Project Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-primary font-mono uppercase tracking-widest mt-2">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-muted text-sm leading-relaxed mb-8 grow">
              {project.desc}
            </p>

            {/* Stack Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-bold px-3 py-1 rounded-full bg-secondary/5 text-secondary border border-secondary/20 uppercase tracking-tighter"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-6 w-full pt-6 border-t border-border-dim/50 justify-center">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-foreground hover:text-primary transition-colors flex items-center gap-1 group/link"
              >
                View Live{" "}
                <span className="text-xs transition-transform group-hover/link:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-foreground hover:text-primary transition-colors flex items-center gap-1 group/link"
              >
                GitHub{" "}
                <span className="text-xs transition-transform group-hover/link:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
