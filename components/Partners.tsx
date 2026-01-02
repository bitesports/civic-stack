"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const partners = [
  { 
    name: "Filecoin", 
    category: "Storage",
    logo: "/partners/Filecoin.png"
  },
  { 
    name: "Aztec", 
    category: "Privacy",
    logo: "/partners/Aztec.png"
  },
  { 
    name: "Zama", 
    category: "Privacy",
    logo: "/partners/Zama.png"
  },
  { 
    name: "Genlayer", 
    category: "Disputes",
    logo: "/partners/Genlayer.png"
  },
  { 
    name: "m0", 
    category: "Stablecoin",
    logo: "/partners/m0.jpg"
  },
  { 
    name: "Uniswap", 
    category: "Exchange",
    logo: "/partners/Uniswap.png"
  },
  { 
    name: "Davinci.vote", 
    category: "Governance",
    logo: "/partners/Davinci.png"
  },
  { 
    name: "Kleros", 
    category: "Disputes",
    logo: "/partners/Kleros.svg"
  },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" ref={ref} className="py-32 bg-marble relative overflow-hidden marble-texture">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-stone tracking-[0.3em] uppercase text-sm mb-4">Ecosystem</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold mb-4">
            Built With Industry Leaders
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto">
            Partnering with the best protocols to deliver production-ready infrastructure.
          </p>
        </motion.div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              className="group relative bg-marble-light border border-stone-light/30 p-6 text-center hover:border-gold/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[160px]"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-gold transition-colors duration-300" />
              
              {/* Logo */}
              {partner.logo ? (
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-16 h-16 mb-4 bg-stone-light/30 rounded-full flex items-center justify-center">
                  <span className="font-[family-name:var(--font-syne)] font-bold text-2xl text-stone">
                    {partner.name.charAt(0)}
                  </span>
                </div>
              )}
              
              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg mb-1">
                {partner.name}
              </h3>
              <p className="text-stone text-xs tracking-widest uppercase">
                {partner.category}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional partners note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-stone mt-12"
        >
          And more partnerships in development...
        </motion.p>
      </div>
    </section>
  );
}
