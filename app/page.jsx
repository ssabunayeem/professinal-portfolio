import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Training from "../components/sections/Training";
import Volunteering from "../components/sections/Volunteering";
import Contact from "../components/sections/Contact";
import Sidebar from "../components/ui/Sidebar";
import Footer from "../components/ui/Footer";
import Squares from "../components/ui/Squares";
import Ribbons from "../components/ui/Ribbons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary selection:text-white">
      <Sidebar />
      <Hero />

      {/* Content Container with Global Backgrounds */}
      <div className="relative w-full">
        {/* Background Animations */}
        <div className="absolute inset-0 z-0">
          <div className="sticky top-0 h-screen w-full opacity-100 overflow-hidden">
            <Squares
              direction="diagonal"
              speed={0.5}
              borderColor="#271E37"
              hoverFillColor="#222222"
              squareSize={40}
            />
            <div className="absolute inset-0 pointer-events-none">
              <Ribbons
                baseThickness={30}
                colors={["#7a01f4"]}
                speedMultiplier={0.5}
                maxAge={500}
                enableFade={false}
                enableShaderEffect={false}
              />
            </div>
          </div>
        </div>

        {/* Sections Content - transparent backgrounds where needed */}
        <div className="relative z-10 flex flex-col">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Training />
          <Volunteering />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
