import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const clientProjects = [
  {
    title: "REOS",
    subtitle: "Real Estate OS / ERP System",
    desc: "A multi-tenant, role-based ecosystem (Real Estate OS) where primarily 16 types of stakeholders collaborate in a real estate transaction. It goes beyond a simple property listing site to provide a comprehensive management platform.",
    image: "/project-images/REOS.png",
    live: "https://reos.skregp.com/",
  },
  {
    title: "SKREGP",
    subtitle: "AI-Powered Real Estate Platform",
    desc: "An AI-powered New York real estate platform helping buyers, sellers, renters, agents, and investors discover verified property listings, connect with trusted professionals, and make confident decisions.",
    image: "/project-images/SKREGP.png",
    live: "https://skregp.com/",
  },
  {
    title: "MediaClicking",
    subtitle: "Media & Communications Agency",
    desc: "A full-service media and communications agency delivering integrated solutions across strategy, creativity, analytics, and execution to help brands grow and transform through data-driven storytelling.",
    image: "/project-images/mediaclicking.png",
    live: "https://mediaclicking.com/",
  },
  {
    title: "ERPCAP",
    subtitle: "End-to-End ERP Solutions",
    desc: "Delivers comprehensive ERP solutions including implementation, cloud migration, integrations, and managed support for regulated industries. Orchestrating vision into reality.",
    image: "/project-images/ERPCAP.png",
    live: "https://erpcap.com/",
  },
];

export default function ClientProjects() {
  return (
    <Section id="client-projects">
      <SectionTitle
        label="Client Work"
        title="Client Projects"
        subtitle="A selection of professional applications and platforms built for clients."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {clientProjects.map((project, idx) => (
          <div
            key={idx}
            className="glass-card flex flex-col items-center text-center p-0 hover:border-primary/50 hover:scale-[1.02] hover:bg-primary/5 transition-all duration-500 group overflow-hidden"
          >
            {/* Project Image */}
            <div className="w-full h-64 overflow-hidden border-b border-border-dim/50">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
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
                  <span className="relative z-10">Visit Website</span>
                  <span className="relative z-10 text-xs transition-transform group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
