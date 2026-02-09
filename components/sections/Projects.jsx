import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const projects = [
  {
    title: "MiniMart",
    subtitle: "E-Commerce Web Application",
    desc: "A sophisticated e-commerce platform designed for sub-second load times and global scalability. Engineered the core architecture from routing to persistent state management.",
    stack: ["Next.js", "Node.js", "Express.js", "Tailwind"],
    image: "/project-images/MiniMart.jpg",
    live: "https://mini-mart-client-six.vercel.app/",
    githubClient: "https://github.com/ssabunayeem/MiniMart-client",
    githubServer: "https://github.com/ssabunayeem/MiniMart-server",
  },
  {
    title: "Blood Donation System",
    subtitle: "Healthcare Resource Management",
    desc: "A collaborative management platform for critical healthcare resource coordination. Implemented secure role-based access control and integrated multi-currency financial systems.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    image: "/project-images/yim-blood-donation.jpeg",
    live: "https://yim-blood-donation.netlify.app/",
    githubClient: "https://github.com/ssabunayeem/P11-Blood-frontend",
    githubServer: "https://github.com/ssabunayeem/P11-Blood-backend",
  },
  {
    title: "PawMart",
    subtitle: "Pet Adoption & Supply Portal",
    desc: "An intuitive data-driven marketplace optimized for complex inventory management. Developed a reusable component system that reduced UI delivery time by 40%.",
    stack: ["React", "Tailwind", "Framer Motion", "MongoDB"],
    image: "/project-images/PawMart.jpeg",
    live: "https://p10-winter-pet-care.netlify.app/",
    githubClient: "https://github.com/ssabunayeem/P10-PawMart-frontend",
    githubServer: "https://github.com/ssabunayeem/P10-PawMart-backend",
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
            className="glass-card flex flex-col items-center text-center p-0 hover:border-primary/50 hover:scale-[1.02] hover:bg-primary/5 transition-all duration-500 group overflow-hidden"
          >
            {/* Project Image */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Project Content */}
            <div className="p-8 flex flex-col flex-grow w-full">
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
              <div className="flex flex-col gap-3 w-full pt-6 border-t border-border-dim/50">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-4 py-2.5 text-sm font-bold text-white transition-all flex items-center justify-center gap-2 group/link rounded-lg overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 hover:bg-pos-100 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "0% 0%",
                  }}
                >
                  <span className="relative z-10">View Live</span>
                  <span className="relative z-10 text-xs transition-transform group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card px-4 py-2.5 text-sm font-bold text-foreground hover:text-primary hover:border-primary/50 transition-all flex items-center justify-center gap-2 group/link"
                  >
                    Client
                    <span className="text-xs transition-transform group-hover/link:translate-x-1">
                      ↗
                    </span>
                  </a>
                  <a
                    href={project.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card px-4 py-2.5 text-sm font-bold text-foreground hover:text-primary hover:border-primary/50 transition-all flex items-center justify-center gap-2 group/link"
                  >
                    Server
                    <span className="text-xs transition-transform group-hover/link:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
