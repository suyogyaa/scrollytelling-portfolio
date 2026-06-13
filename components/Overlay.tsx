"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: 25% to 45% (peak at 30% to 40%)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3: 55% to 75% (peak at 60% to 70%)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center px-8 md:px-24">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
            Suyogya Sedhai. <br/>Computer Engineer.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-lg mt-4">
            Machine Learning & Data Science.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col justify-center items-start text-left px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white max-w-2xl">
            I build intelligent <br/><span className="text-white/50">systems.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col justify-center items-end text-right px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white max-w-2xl">
            Bridging engineering <br/><span className="text-white/50">and data science.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
