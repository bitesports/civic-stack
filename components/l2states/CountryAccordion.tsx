"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Country, formatPopulation, getPerplexityUrl } from "@/lib/countries";
import CountryShape from "./CountryShape";

interface CountryAccordionProps {
  country: Country;
  isOpen: boolean;
  onToggle: () => void;
  onContribute: (countryName: string) => void;
}

export default function CountryAccordion({
  country,
  isOpen,
  onToggle,
  onContribute,
}: CountryAccordionProps) {
  return (
    <div className="border border-stone-light/30 rounded-lg overflow-hidden bg-white hover:border-gold/50 transition-colors">
      {/* Collapsed Header */}
      <button
        onClick={onToggle}
        className={`w-full px-4 py-4 md:px-6 md:py-5 flex items-center justify-between transition-all duration-300 ${
          isOpen ? "bg-obsidian text-marble" : "bg-white hover:bg-marble"
        }`}
      >
        <div className="flex items-center gap-3 md:gap-4">
          {/* Flag */}
          <span className="text-2xl md:text-3xl">{country.flag}</span>

          {/* Country Info */}
          <div className="text-left">
            <h3
              className={`font-[family-name:var(--font-syne)] font-semibold text-base md:text-lg ${
                isOpen ? "text-marble" : "text-obsidian"
              }`}
            >
              {country.name}
            </h3>
            <p
              className={`text-xs md:text-sm ${
                isOpen ? "text-stone-light" : "text-stone"
              }`}
            >
              Population: {formatPopulation(country.population)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {/* Perplexity Link - Hidden on mobile when closed */}
          <a
            href={getPerplexityUrl(country.name)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`hidden md:flex items-center gap-2 text-xs px-3 py-1.5 rounded-full transition-colors ${
              isOpen
                ? "bg-gold/20 text-gold hover:bg-gold/30"
                : "bg-stone-light/20 text-stone hover:bg-stone-light/30"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Web3 Relations
          </a>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={isOpen ? "text-gold" : "text-stone"}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-6 md:px-6 md:py-8 border-t border-stone-light/20 bg-marble/50">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                {/* Country Shape */}
                <div className="flex-shrink-0">
                  <CountryShape
                    countryName={country.name}
                    className="w-32 h-32 md:w-40 md:h-40"
                    fillColor="#C5A059"
                    strokeColor="#0D0D0D"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="font-[family-name:var(--font-syne)] text-xl md:text-2xl font-bold text-obsidian mb-2">
                    {country.name}
                  </h4>
                  <p className="text-stone text-sm md:text-base mb-4">
                    Be part of building {country.name}&apos;s sovereign L2 infrastructure.
                    Help shape the future of onchain governance for{" "}
                    {formatPopulation(country.population)} people.
                  </p>

                  {/* Mobile Perplexity Link */}
                  <a
                    href={getPerplexityUrl(country.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:hidden inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-stone-light/20 text-stone hover:bg-stone-light/30 mb-4"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    Learn about {country.name} & Web3
                  </a>

                  {/* Contribute Button */}
                  <button
                    onClick={() => onContribute(country.name)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-obsidian font-[family-name:var(--font-outfit)] font-bold uppercase tracking-wider text-sm hover:bg-gold/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    I Want to Contribute
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

