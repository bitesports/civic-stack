"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const primitives = [
  "Identity",
  "Governance", 
  "Treasury",
  "Markets"
];

export default function Convergence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-marble relative overflow-hidden marble-texture">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-stone tracking-[0.3em] uppercase text-sm mb-4">Convergence</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold">
            Network States & Nation States
          </h2>
        </motion.div>

        {/* Two paths converging */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Network States */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <div className="inline-block">
              <div className="flex items-center justify-center md:justify-end gap-4 mb-4">
                {/* Network State Icon */}
                <svg className="w-12 h-12 text-gold" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="32" cy="16" r="6" />
                  <circle cx="16" cy="40" r="6" />
                  <circle cx="48" cy="40" r="6" />
                  <circle cx="32" cy="52" r="4" />
                  <line x1="32" y1="22" x2="32" y2="48" />
                  <line x1="26" y1="18" x2="20" y2="34" />
                  <line x1="38" y1="18" x2="44" y2="34" />
                  <line x1="22" y1="40" x2="42" y2="40" />
                </svg>
                <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold">
                  Network States
                </h3>
              </div>
              <p className="text-stone mb-6 max-w-sm ml-auto">
                Move fast, experiment first. Digital-native communities building governance from scratch.
              </p>
              <div className="flex justify-center md:justify-end gap-2">
                <span className="px-3 py-1 border border-gold/30 text-gold text-xs tracking-wider uppercase">
                  Experimental
                </span>
                <span className="px-3 py-1 border border-gold/30 text-gold text-xs tracking-wider uppercase">
                  Agile
                </span>
              </div>
            </div>
          </motion.div>

          {/* Nation States */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <div className="inline-block">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold">
                  Nation States
                </h3>
                {/* Nation State Icon */}
                <svg className="w-12 h-12 text-gold" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="12" y="48" width="40" height="6" rx="1" />
                  <rect x="16" y="24" width="6" height="24" />
                  <rect x="29" y="24" width="6" height="24" />
                  <rect x="42" y="24" width="6" height="24" />
                  <polygon points="32,8 10,24 54,24" fill="none" />
                  <circle cx="32" cy="16" r="3" />
                </svg>
              </div>
              <p className="text-stone mb-6 max-w-sm">
                Adopt incrementally. Established institutions modernizing their infrastructure.
              </p>
              <div className="flex justify-center md:justify-start gap-2">
                <span className="px-3 py-1 border border-gold/30 text-gold text-xs tracking-wider uppercase">
                  Institutional
                </span>
                <span className="px-3 py-1 border border-gold/30 text-gold text-xs tracking-wider uppercase">
                  Established
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Convergence Point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          {/* Connecting lines */}
          <div className="hidden md:block absolute top-0 left-1/4 w-1/4 h-8 border-t-2 border-r-2 border-gold/30" />
          <div className="hidden md:block absolute top-0 right-1/4 w-1/4 h-8 border-t-2 border-l-2 border-gold/30" />
          
          <div className="bg-obsidian text-marble p-12 text-center">
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-6">
              Both Converge On
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {primitives.map((primitive, index) => (
                <motion.div
                  key={primitive}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-semibold"
                >
                  {primitive}
                  {index < primitives.length - 1 && (
                    <span className="text-gold ml-6 hidden sm:inline">·</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

