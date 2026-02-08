import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const experiences = [
  {
    role: "Contract / Part-Time Developer & IT Support",
    company: "Landco Solar Company Ltd & Freelance Projects",
    period: "Jan 2025 – Dec 2025",
    points: [
      "Developed and maintained responsive web applications using React, JavaScript, and Tailwind CSS",
      "Delivered freelance projects independently, ensuring usability and performance",
      "Provided IT support, including system troubleshooting and basic network issues",
    ],
  },
  {
    role: "Python Programming Trainer",
    company: "ICTD Digital Lab (Shushilan Ltd & IBF JV)",
    period: "Oct 2023 – Nov 2024",
    points: [
      "Conducted Python programming training for beginners and intermediate learners",
      "Explained core programming concepts through hands-on examples and exercises",
      "Evaluated student progress and provided constructive technical feedback",
    ],
  },
  {
    role: "Information Technology Executive",
    company: "BD Tech Services Ltd.",
    period: "Jun 2021 – Oct 2023",
    points: [
      "Monitored and maintained computer lab systems to ensure reliable performance, security, and availability.",
      "Provided technical support for hardware, software, and basic system issues to staff and users.",
      "Assisted with system updates, routine maintenance, and basic network troubleshooting.",
      "Developed a strong foundation in IT support, problem-solving, and professional workplace practices.",
    ],
  },
  {
    role: "IT Assistant",
    company: "American International University- Bangladesh (AIUB)",
    period: "Jan 2019 – Apr 2019",
    points: [
      "Monitored and maintained computer lab systems to ensure reliable performance, security, and availability.",
      "Provided timely technical support for hardware and software issues affecting students and faculty.",
      "Assisted with system updates, routine maintenance, and basic network troubleshooting tasks.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle
        label="Career"
        title="Professional Experience"
        subtitle="My journey in the tech industry, moving from IT support to specialized web development."
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
        {/* Vertical Line (Centered on md+) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border-dim/50" />
        {/* Vertical Line (Left on mobile) */}
        <div className="md:hidden absolute left-2 h-full w-0.5 bg-border-dim/50" />

        <div className="space-y-16">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10" />

                {/* Timeline Dot (Mobile) */}
                <div className="md:hidden absolute left-2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 mt-1" />

                {/* Content Card */}
                <div
                  className={`w-full md:w-1/2 ${isEven ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"} pl-8 md:pl-0`}
                >
                  <div className="glass-card p-6 md:p-8 hover:border-primary/40 hover:scale-[1.02] hover:bg-primary/5 transition-all duration-500 text-left">
                    <span className="inline-block text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-muted/80 mb-4">{exp.company}</p>

                    {exp.points.length > 0 && (
                      <ul className="space-y-2 text-muted/70 text-sm md:text-base inline-block text-left">
                        {exp.points.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-2 text-left"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Empty Space for the other side on Desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
