"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Liberty Leading the People - Eugène Delacroix"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-obsidian/40 to-obsidian/60" />
        {/* Gold tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent mix-blend-overlay" />
      </div>

      {/* Architectural Frame Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Column shadows on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian/40 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian/40 to-transparent" />
        
        {/* Top vignette */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-obsidian/60 to-transparent" />
        
        {/* Decorative border frame */}
        <div className="absolute inset-8 md:inset-16 border border-gold/20 pointer-events-none" />
        <div className="absolute top-8 md:top-16 left-8 md:left-16 w-8 h-8 border-t-2 border-l-2 border-gold" />
        <div className="absolute top-8 md:top-16 right-8 md:right-16 w-8 h-8 border-t-2 border-r-2 border-gold" />
        <div className="absolute bottom-8 md:bottom-16 left-8 md:left-16 w-8 h-8 border-b-2 border-l-2 border-gold" />
        <div className="absolute bottom-8 md:bottom-16 right-8 md:right-16 w-8 h-8 border-b-2 border-r-2 border-gold" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-24">
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gold" />
            <div className="w-2 h-2 rotate-45 border border-gold" />
            <div className="w-16 h-px bg-gold" />
          </div>
        </motion.div>

        {/* Pre-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gold tracking-[0.3em] uppercase text-sm mb-6"
        >
          Onchain Jurisdiction Infrastructure
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-[family-name:var(--font-syne)] text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-marble"
        >
          <span className="block">The Operating System</span>
          <span className="block text-gold drop-shadow-lg">for Jurisdictions</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-marble/90 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We turn governance, identity, finance, and registries into modular 
          onchain infrastructure that any jurisdiction can deploy.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://calendly.com/emivelazquez/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gold text-obsidian text-sm tracking-[0.2em] uppercase font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
          >
            Schedule Call
          </a>
          <a
            href="https://mountainous-emmental-9ad.notion.site/Civic-Stack-2d80bbe31d2a80a4bb20c95c14cad997?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border-2 border-marble/80 text-marble text-sm tracking-[0.2em] uppercase hover:bg-marble hover:text-obsidian transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-marble/70 text-xs tracking-widest uppercase">Discover</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
