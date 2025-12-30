"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fundUse = [
  { label: "Tech Development", percentage: 50 },
  { label: "Ecosystem Partnerships", percentage: 25 },
  { label: "Go-to-Market Acceleration", percentage: 20 },
  { label: "Operations", percentage: 5 },
];

export default function Investment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="invest" ref={ref} className="py-32 bg-marble relative overflow-hidden marble-texture">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-stone tracking-[0.3em] uppercase text-sm mb-4">Investment Opportunity</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold">
            The Ask
          </h2>
        </motion.div>

        {/* Investment Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-obsidian text-marble p-12 md:p-16"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />

          {/* Key Numbers */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="text-center md:text-left">
              <p className="text-stone-light text-sm tracking-widest uppercase mb-2">Raising</p>
              <p className="font-[family-name:var(--font-syne)] text-5xl md:text-6xl font-bold text-gold">
                $1.5M
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-stone-light text-sm tracking-widest uppercase mb-2">Post-Money Valuation</p>
              <p className="font-[family-name:var(--font-syne)] text-5xl md:text-6xl font-bold">
                $10M
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-12" />

          {/* Use of Funds */}
          <div>
            <h3 className="text-gold tracking-[0.2em] uppercase text-sm mb-8 text-center md:text-left">
              Use of Funds
            </h3>
            <div className="space-y-6">
              {fundUse.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-marble">{item.label}</span>
                    <span className="text-gold font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="h-1 bg-stone/30 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      className="h-full bg-gold"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-12 py-4 bg-gold text-obsidian font-[family-name:var(--font-syne)] font-semibold text-sm tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300"
          >
            Discuss Investment
          </a>
        </motion.div>
      </div>
    </section>
  );
}

