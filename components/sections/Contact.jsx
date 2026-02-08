import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <SectionTitle
          label="Inquiries"
          title="Get In Touch"
          subtitle="Are you looking for a dedicated MERN Stack developer for your next remote project? Let's connect and discuss how I can contribute to your team."
        />

        <div className="w-full">
          <div className="glass-card p-10 md:p-16 flex flex-col items-center bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/40 hover:scale-[1.01] transition-all duration-500 relative overflow-hidden group">
            {/* Background Decorative Element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>

            <p className="text-muted text-lg md:text-xl mb-10 max-w-sm relative z-10">
              Currently available for{" "}
              <span className="text-foreground font-bold">
                Remote MERN Stack / Frontend
              </span>{" "}
              roles.
            </p>

            <a
              href="mailto:ssabunayeem@gmail.com"
              className="text-4xl md:text-6xl font-black text-primary hover:text-secondary transition-all duration-300 mb-6 tracking-tighter relative z-10 hover:scale-105"
            >
              Let&apos;s Talk
            </a>

            <div className="flex flex-col items-center gap-2 mb-10 relative z-10">
              <a
                href="mailto:ssabunayeem@gmail.com"
                className="text-muted hover:text-primary transition-colors font-mono text-sm md:text-base border-b border-transparent hover:border-primary"
              >
                ssabunayeem@gmail.com
              </a>
              <a
                href="tel:+8801673722032"
                className="text-muted hover:text-primary transition-colors font-mono text-sm md:text-base border-b border-transparent hover:border-primary"
              >
                +880 1673722032
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 relative z-10">
              <a
                href="https://linkedin.com/in/ssabunayeem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground text-lg transition-all hover:-translate-y-1 font-bold border-b-2 border-transparent hover:border-primary pb-1"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ssabunayeem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground text-lg transition-all hover:-translate-y-1 font-bold border-b-2 border-transparent hover:border-primary pb-1"
              >
                GitHub
              </a>
              <a
                href="https://wa.me/8801673722032"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground text-lg transition-all hover:-translate-y-1 font-bold border-b-2 border-transparent hover:border-primary pb-1"
              >
                WhatsApp
              </a>
            </div>

            <a
              href="https://drive.google.com/file/d/1vMdn2bJFIkN4XbmnaV11bCIW4GOAYMwi/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-primary hover:bg-secondary text-white font-bold rounded-2xl transition-all shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 uppercase tracking-widest text-sm relative z-10"
            >
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
