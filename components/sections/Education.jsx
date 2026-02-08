import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

export default function Education() {
  return (
    <Section id="education">
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
        <SectionTitle
          label="Background"
          title="Education"
          subtitle="My academic foundation in Computer Science and Engineering."
        />

        <div className="w-full">
          {/* Main Degree */}
          <div className="glass-card p-8 md:p-12 border-t-4 border-t-primary max-w-3xl mx-auto hover:bg-primary/5 hover:scale-[1.01] hover:border-primary/40 transition-all duration-500">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-3xl font-bold">BSc</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                Computer Science & Engineering
              </h3>
              <p className="text-primary font-bold text-lg md:text-xl">
                American International University-Bangladesh
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-muted text-sm md:text-base mt-6 font-mono">
                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                  Class of 2019
                </span>
                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                  CGPA 3.15
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
