import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <SectionTitle
          label="Introduction"
          title="About Me"
          subtitle="A developer with a mission to create impactful digital experiences."
        />

        <div className="text-lg md:text-xl text-muted leading-relaxed text-center space-y-6 max-w-3xl">
          <p>
            I am a{" "}
            <span className="text-foreground font-semibold">
              Full-Stack Engineer
            </span>{" "}
            with a track record of building performant, enterprise-grade web
            applications. My expertise lies in React, Next.js, and Node.js, with
            a deep focus on scalable architecture and security.
          </p>
          <p>
            With over <span className="text-primary font-bold">4 years</span> of
            industry experience, I specialize in delivering mission-critical
            solutions and production-hardened code. I prioritize
            maintainability, performance, and architectural integrity in every
            project.
          </p>
          <p>
            I am currently focused on engineering high-performance frontend
            systems and secure, decentralized backends that drive real-world
            business value for global organizations.
          </p>
        </div>

        {/* Designer Quote/Highlight */}
        <div className="mt-12 p-8 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/40 hover:scale-[1.02] transition-all duration-500 text-center italic text-foreground/80 max-w-2xl relative group">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl text-primary/20 group-hover:text-primary transition-colors">
            &quot;
          </span>
          &quot;I engineer scalable solutions where technical precision meets
          seamless user interaction to solve complex business problems.&quot;
        </div>
      </div>
    </Section>
  );
}
