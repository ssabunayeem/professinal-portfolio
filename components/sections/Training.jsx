import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const trainings = [
  // ... (trainings data unchanged)
  {
    title: "Web Development Course (MERN Stack)",
    org: "Programming Hero (Ongoing)",
    period: "Jun 2025 – Jan 2026",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Cybersecurity and Ethical Hacking Essential courses",
    org: "CodeRed",
    period: "Jan 2026 – Present",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Digital Marketing & Freelancing Training",
    org: "e-Learning & Earning Ltd. (Govt Program)",
    period: "Jan 2025 – April 2025",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Software Quality Assurance",
    org: "SJ Innovation (Community Outreach Program)",
    period: "Jan 2020 – Mar 2020",
    location: "Dhaka, Bangladesh",
  },
];

export default function Training() {
  return (
    <Section id="training">
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
        <SectionTitle
          label="Certifications"
          title="Training & Certifications"
          subtitle="Specialized technical training and professional development programs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {trainings.map((item, i) => (
            <div
              key={i}
              className="glass-card p-6 md:p-8 border-l-4 border-l-primary hover:bg-primary/10 hover:scale-[1.02] hover:border-primary/40 transition-all duration-500 flex flex-col items-start text-left group"
            >
              <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                {item.period}
              </span>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-lg text-muted/80 mt-1 font-semibold">
                {item.org}
              </p>
              <p className="text-sm text-muted/60 mt-1 italic">
                {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
