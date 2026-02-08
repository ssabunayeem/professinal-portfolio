"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function HeroOverlay() {
  const { scrollY } = useScroll();

  // Slide 1: Introduction
  const opacity1 = useTransform(scrollY, [0, 400, 500], [1, 1, 0]);
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);

  // Slide 2: Capability
  const opacity2 = useTransform(scrollY, [800, 900, 1400, 1500], [0, 1, 1, 0]);
  const y2 = useTransform(scrollY, [800, 1500], [50, -50]);

  // Slide 3: Tech Stack
  const opacity3 = useTransform(
    scrollY,
    [1700, 1800, 2300, 2400],
    [0, 1, 1, 0],
  );
  const y3 = useTransform(scrollY, [1700, 2400], [50, -50]);

  // Shared Card Style
  const cardStyle =
    "backdrop-blur-md bg-black/30 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded-2xl p-8";

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center p-6 text-white">
      {/* Slide 1: Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className={`text-center absolute flex flex-col items-center justify-center ${cardStyle}`}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-violet-400 drop-shadow-sm">
          S. S. Abu Nayeem
        </h1>
        <p className="text-lg md:text-xl text-slate-300 font-medium tracking-wide">
          MERN Stack Web Developer
        </p>
      </motion.div>

      {/* Slide 2: Left Aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className={`absolute flex flex-col items-start justify-center max-w-4xl left-4 md:left-20 ${cardStyle}`}
      >
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-left">
          I build <span className="text-cyan-400">scalable</span>,<br />
          production-ready web apps
          <br />
          <span className="text-violet-400">for real-world users.</span>
        </h2>
      </motion.div>

      {/* Slide 3: Right Aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className={`absolute flex flex-col items-end justify-center right-4 md:right-20 ${cardStyle}`}
      >
        <div className="text-right">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-fuchsia-400">
            From UI to API
          </h2>
          <p className="text-xl md:text-2xl text-slate-300">
            React • Next.js • Node.js • MongoDB
          </p>
        </div>
      </motion.div>
    </div>
  );
}
