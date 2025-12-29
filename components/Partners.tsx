"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const partners = [
  { 
    name: "Filecoin", 
    category: "Storage",
    logo: "https://cdn.discordapp.com/attachments/1217149062290346087/1455276241203757311/Filecoin.png?ex=6954231d&is=6952d19d&hm=62b4d9aee4507825831a5682eb1701c2e6be0c9df91a089740b1784ea72723e3&"
  },
  { 
    name: "Aztec", 
    category: "Privacy",
    logo: "https://cdn.discordapp.com/attachments/1217149062290346087/1455276241530781934/Aztec.png?ex=6954231d&is=6952d19d&hm=c3c74182c2727fd63ac13054d28fb3bbaf94df2f2aef9da47893b731dee304e5&"
  },
  { 
    name: "Zama", 
    category: "Privacy",
    logo: "https://cdn.discordapp.com/attachments/1217149062290346087/1455276241887432807/Zama.png?ex=6954231d&is=6952d19d&hm=e2d8ab99fe6f0a66f3049c6f114aefba64c7baec1663738bc792ca64435f1999&"
  },
  { 
    name: "Genlayer", 
    category: "Disputes",
    logo: "https://cdn.discordapp.com/attachments/1217149062290346087/1455276242524704768/Genlayer.png?ex=6954231d&is=6952d19d&hm=ebd4e75f93e50d755e508090d9e1512c0a1a3e0fcbefc49e01ee4240f7eedce8&"
  },
  { 
    name: "m0", 
    category: "Stablecoin",
    logo: "https://cdn.discordapp.com/attachments/1217149062290346087/1455276243066028195/m0.jpg?ex=6954231e&is=6952d19e&hm=91cb9677d7ad13c2f7d4560b8892eb6495ec3dc8cf1560b9a978828633839994&"
  },
  { 
    name: "Uniswap", 
    category: "Exchange",
    logo: "https://cdn.discordapp.com/attachments/1217149062290346087/1455276243577471222/Uniswap.png?ex=6954231e&is=6952d19e&hm=a7d56fea7c8d97a99be7e81554191101baa48fd3154a74a9988ff1da278cb252&"
  },
  { 
    name: "Davinci.vote", 
    category: "Governance",
    logo: "https://cdn.discordapp.com/attachments/1217149062290346087/1455276240784199803/Davinci.png?ex=6954231d&is=6952d19d&hm=edf2751148109befe160faf82720424922b4f4ab4294cea64c27391e73de796e&"
  },
  { 
    name: "Kleros", 
    category: "Disputes",
    logo: "https://cdn.discordapp.com/attachments/1217149062290346087/1455277585935372543/kleros-logo.png?ex=6954245e&is=6952d2de&hm=646376511fbe190b05907320b2cc717e9d0f64d54748f443c573f0c88b328ad2"
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
