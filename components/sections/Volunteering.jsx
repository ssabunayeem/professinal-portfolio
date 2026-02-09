import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const volunteering = [
  // ... (volunteering data unchanged)
  {
    role: "Volunteer & Web Application Developer",
    org: "YIM Blood Donation Community",
    period: "Jan 2025 – Present",
    location: "Dhaka, Bangladesh",
  },
  {
    role: "General Member",
    org: "AIUB Alumni Society (AIUBAlumS)",
    period: "Feb 2022 – Present",
    location: "Dhaka, Bangladesh",
  },
  {
    role: "Volunteer",
    org: "Al Ikram Organization",
    period: "Jun 2012 – Dec 2016",
    location: "Dhaka, Bangladesh",
  },
];

export default function Volunteering() {
  return (
    <Section id="volunteering">
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
        <SectionTitle
          label="Community"
          title="Volunteering Experience"
          subtitle="My contributions to social causes and community development."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {volunteering.map((item, i) => (
            <div
              key={i}
              className="glass-card p-6 border-t-2 border-t-secondary/30 hover:border-secondary/50 hover:bg-secondary/5 hover:scale-[1.02] transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex ietems-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-secondary font-bold text-xl">V</span>
              </div>
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest mb-2">
                {item.period}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {item.role}
              </h3>
              <p className="text-sm text-secondary font-medium">{item.org}</p>
              <p className="text-xs text-muted/60 mt-2 italic">
                {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
