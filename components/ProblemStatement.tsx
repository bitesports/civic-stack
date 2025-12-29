"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    title: "Global by Default",
    description: "Capital, identity, and assets are already global and onchain. The infrastructure exists—jurisdictions just need to use it.",
  },
  {
    title: "Local Rules, Global Rails",
    description: "Jurisdictions need to enforce local rule sets on global infrastructure. The future is sovereign compliance on shared rails.",
  },
  {
    title: "Sovereign Revenue",
    description: "Sequencer fees are a new sovereign revenue stream—and should benefit the jurisdiction, not external platforms.",
  },
];

export default function ProblemStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-obsidian text-marble relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            rgba(201, 162, 39, 0.1) 50px,
            rgba(201, 162, 39, 0.1) 51px
          )`
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">The Thesis</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold">
            The World Is Coming Onchain
          </h2>
        </motion.div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="relative group"
            >
              {/* Card Box */}
              <div className="relative bg-obsidian-soft/50 border border-gold/20 p-8 h-full hover:border-gold/50 transition-all duration-300">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold" />
                
                {/* Number */}
                <div className="font-[family-name:var(--font-syne)] text-6xl font-bold text-gold/30 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold mb-4 text-gold">
                  {problem.title}
                </h3>
                <p className="text-stone-light leading-relaxed">
                  {problem.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-gold via-gold/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

