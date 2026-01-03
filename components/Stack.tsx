"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const modules = [
  {
    id: "identity",
    name: "Identity & Citizenship",
    status: "80% Built",
    icon: "👤",
    description: "Verifiable credentials as digital citizenship. ZK-based DID with granular disclosures.",
    details: [
      "Supports government IDs and third-party reputations (Airbnb, Uber, MercadoPago)",
      "Designed for rapid onboarding at scale",
      "Zero-knowledge proofs for privacy-preserving verification"
    ]
  },
  {
    id: "governance",
    name: "Governance & Voting",
    status: "Davinci.vote",
    icon: "⚖️",
    description: "Citizens govern real economic flows. Sequencer fees allocated via VC-based voting.",
    details: [
      "Built on Davinci.vote with experienced governance designers",
      "Identity-aware, not token-only governance",
      "Quadratic voting and delegation support"
    ]
  },
  {
    id: "disputes",
    name: "Dispute Resolution",
    status: "Kleros + Genlayer",
    icon: "🏛️",
    description: "Onchain dispute systems adapted per jurisdiction.",
    details: [
      "Partners: Kleros, Genlayer",
      "Configurable between automated resolution and human arbitration",
      "Bridges code and local legal norms"
    ]
  },
  {
    id: "stablecoin",
    name: "Stablecoin & Payments",
    status: "m0 Partnership",
    icon: "💰",
    description: "Jurisdiction-issued stablecoin for payments, incentives, and treasury operations.",
    details: [
      "Interoperable with DeFi while remaining jurisdiction-native",
      "Partner protocol: m0",
      "Built-in compliance and reporting"
    ]
  },
  {
    id: "treasury",
    name: "Treasury & Revenue",
    status: "Sequencer Fees",
    icon: "🏦",
    description: "Sequencer fees accrue directly to the jurisdiction treasury.",
    details: [
      "Governance decides allocation: Public goods, Incentives, Reserves, Dividends",
      "Creates direct feedback loop between activity and governance",
      "Transparent, auditable fund flows"
    ]
  },
  {
    id: "exchange",
    name: "Regulated Exchange",
    status: "Uniswap v4 + VCs",
    icon: "📊",
    description: "Uniswap v4 with verifiable credential checks.",
    details: [
      "Permissioned markets without sacrificing liquidity",
      "Enables compliant trading of jurisdiction-specific assets",
      "KYC/AML integration via identity layer"
    ]
  },
  {
    id: "bonds",
    name: "Jurisdiction Bonds",
    status: "New Asset Class",
    icon: "📜",
    description: "Invest in the future of a jurisdiction.",
    details: [
      "Programmatic bonds receive % of future sequencer fees",
      "Transparent, onchain alternative to public debt",
      "A new sovereign asset class"
    ]
  },
  {
    id: "registries",
    name: "Registries",
    status: "Pre Launch Partner",
    icon: "📋",
    description: "Company and Property registries onchain.",
    details: [
      "Company Registry: Onchain incorporation and ownership",
      "Property Registry: NFT-based ownership of physical assets",
      "Reduces fraud, increases liquidity, enables composability"
    ]
  },
  {
    id: "privacy",
    name: "Privacy & Storage",
    status: "Zama + Aztec + Filecoin",
    icon: "🔐",
    description: "Privacy-preserving compliance and decentralized storage.",
    details: [
      "Partners: Zama, Aztec for FHE and ZK privacy",
      "Built on Filecoin for censorship resistance",
      "Auditability without surveillance"
    ]
  },
];

export default function Stack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeModule, setActiveModule] = useState(modules[0].id);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const selectedModule = modules.find(m => m.id === activeModule) || modules[0];

  const toggleMobileAccordion = (id: string) => {
    setExpandedMobile(expandedMobile === id ? null : id);
  };

  return (
    <section id="stack" ref={ref} className="py-24 md:py-32 bg-marble relative overflow-hidden">
      {/* Greek key pattern border at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-stone tracking-[0.3em] uppercase text-sm mb-4">Modular Architecture</p>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            The Stack
          </h2>
          <p className="text-stone text-base md:text-lg max-w-2xl mx-auto px-4">
            Adopt modules independently or deploy as a complete system.
          </p>
        </motion.div>

        {/* Mobile: Accordion Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:hidden space-y-3"
        >
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-marble-light border border-stone-light/30 rounded-lg overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleMobileAccordion(module.id)}
                className={`w-full px-4 py-4 flex items-center justify-between transition-all duration-300 ${
                  expandedMobile === module.id ? "bg-obsidian text-marble" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{module.icon}</span>
                  <div className="text-left">
                    <p className={`font-[family-name:var(--font-syne)] font-semibold text-sm ${
                      expandedMobile === module.id ? "text-marble" : "text-obsidian"
                    }`}>
                      {module.name}
                    </p>
                    <p className={`text-xs ${
                      expandedMobile === module.id ? "text-gold" : "text-stone"
                    }`}>
                      {module.status}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedMobile === module.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={expandedMobile === module.id ? "text-gold" : "text-stone"}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {expandedMobile === module.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-2 border-t border-stone-light/20">
                      <p className="text-obsidian text-sm mb-4 leading-relaxed">
                        {module.description}
                      </p>
                      <div className="space-y-2">
                        {module.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-gold text-sm mt-0.5">→</span>
                            <span className="text-stone text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Desktop: Tabs Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex gap-8"
        >
          {/* Left Tabs */}
          <div className="w-1/3">
            <div className="bg-marble-light border border-stone-light/30 rounded-lg overflow-hidden">
              {modules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full text-left px-5 py-4 flex items-center gap-4 transition-all duration-300 border-b border-stone-light/20 last:border-b-0 ${
                    activeModule === module.id
                      ? "bg-obsidian text-marble"
                      : "hover:bg-stone-light/10"
                  }`}
                >
                  <span className="text-xl">{module.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-[family-name:var(--font-syne)] font-semibold text-sm truncate ${
                      activeModule === module.id ? "text-marble" : "text-obsidian"
                    }`}>
                      {module.name}
                    </p>
                    <p className={`text-xs truncate ${
                      activeModule === module.id ? "text-gold" : "text-stone"
                    }`}>
                      {module.status}
                    </p>
                  </div>
                  {activeModule === module.id && (
                    <div className="w-1 h-8 bg-gold rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedModule.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-marble-light border border-stone-light/30 rounded-lg p-8 h-full"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">{selectedModule.icon}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-obsidian mb-2">
                      {selectedModule.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded">
                      {selectedModule.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-obsidian text-lg mb-8 leading-relaxed">
                  {selectedModule.description}
                </p>

                {/* Details */}
                <div className="space-y-4">
                  <h4 className="font-[family-name:var(--font-syne)] font-semibold text-sm uppercase tracking-wider text-stone">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {selectedModule.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-gold mt-1 text-lg">→</span>
                        <span className="text-stone">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-stone-light/30">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-obsidian font-semibold hover:text-gold transition-colors"
                  >
                    Learn more about {selectedModule.name}
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
