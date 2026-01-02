"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const blueprintCards = [
  {
    id: "multilocal",
    title: "Multilocal",
    subtitle: "Network State Experiment",
    description:
      "Starting with a network state, adoption and testing is easier and can move at our pace, working with a team that's executing on this.",
    backgroundImage: "/multilocal-herosmall.png",
    accentColor: "gold",
  },
  {
    id: "uruguay",
    title: "Uruguay",
    subtitle: "Nation State Pioneer",
    description:
      "A forward-thinking nation, small enough to create effective and quick changes in governance infrastructure.",
    backgroundImage: "/uruguay-bg.jpg",
    accentColor: "aegean",
  },
];

export default function GTMBlueprint() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Go-To-Market</p>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-5xl lg:text-6xl font-bold text-marble mb-4 md:mb-6">
            The Blueprint
          </h2>
          <p className="text-stone-light text-base md:text-lg max-w-2xl mx-auto">
            Two parallel paths to prove the Civic Stack model: a network state experiment and a
            nation state pioneer.
          </p>
        </motion.div>

        {/* Two Column Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {blueprintCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="relative group overflow-hidden rounded-lg min-h-[320px] md:min-h-[400px]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-obsidian/70 group-hover:bg-obsidian/60 transition-colors duration-300" />

              {/* Accent Border */}
              <div
                className={`absolute inset-0 border-2 ${
                  card.accentColor === "gold" ? "border-gold/30" : "border-aegean/30"
                } group-hover:border-opacity-60 transition-all duration-300`}
              />

              {/* Corner Accents */}
              <div
                className={`absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 ${
                  card.accentColor === "gold" ? "border-gold" : "border-aegean"
                }`}
              />
              <div
                className={`absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 ${
                  card.accentColor === "gold" ? "border-gold" : "border-aegean"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 ${
                  card.accentColor === "gold" ? "border-gold" : "border-aegean"
                }`}
              />
              <div
                className={`absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 ${
                  card.accentColor === "gold" ? "border-gold" : "border-aegean"
                }`}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                {/* Subtitle Badge */}
                <span
                  className={`inline-block self-start px-3 py-1 text-xs uppercase tracking-wider font-semibold rounded mb-3 ${
                    card.accentColor === "gold"
                      ? "bg-gold/20 text-gold"
                      : "bg-aegean/20 text-aegean"
                  }`}
                >
                  {card.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold text-marble mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-stone-light text-base md:text-lg leading-relaxed max-w-md">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

