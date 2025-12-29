"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Layer0() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 text-marble relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/layer0-bg.png"
          alt="Network visualization"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-obsidian/50" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian/40" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-block px-6 py-2 border border-gold text-gold text-sm tracking-[0.3em] uppercase mb-8 backdrop-blur-sm bg-obsidian/30"
          >
            Layer 0
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            The Jurisdiction
            <span className="block text-gold drop-shadow-lg">Routing Layer</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-marble/90 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Move assets and identities across jurisdictions with different compliance rules.
            Fast deployment with local ecosystems.
          </motion.p>

          {/* Key Point */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block bg-obsidian/60 backdrop-blur-sm border border-gold/50 px-8 py-6"
          >
            <p className="font-[family-name:var(--font-syne)] text-lg md:text-xl text-gold">
              Bottom up community adoption
            </p>
            <p className="text-marble/80 text-sm mt-2">
              Jurisdiction owns the treasury
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { title: "Cross-Jurisdiction", desc: "Seamless asset movement with compliance" },
              { title: "Fast Deployment", desc: "Launch in weeks, not years" },
              { title: "Local Ecosystems", desc: "Integrate existing local infrastructure" },
            ].map((feature, index) => (
              <div key={feature.title} className="text-center backdrop-blur-sm bg-obsidian/30 p-6 border border-marble/10">
                <div className="w-12 h-12 mx-auto mb-4 border border-gold/50 flex items-center justify-center bg-obsidian/50">
                  <span className="text-gold font-[family-name:var(--font-syne)] font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="font-[family-name:var(--font-syne)] font-semibold mb-2 text-marble">
                  {feature.title}
                </h4>
                <p className="text-marble/70 text-sm">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
