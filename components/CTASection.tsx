"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-32 bg-obsidian text-marble relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Get Started</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join the Future of Governance
          </h2>
          <p className="text-stone-light text-xl max-w-2xl mx-auto mb-12">
            Whether you&apos;re an investor, jurisdiction, or partner — let&apos;s talk about how Civic Stack can work for you.
          </p>

          {/* Schedule Call Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://calendly.com/emivelazquez/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-gold text-obsidian font-[family-name:var(--font-syne)] font-semibold text-lg tracking-[0.15em] uppercase hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
            >
              Schedule a Call
            </a>
          </motion.div>

          {/* Additional info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-stone mt-8 text-sm"
          >
            15-minute intro call with the founding team
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
