"use client";

import { useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { countries, regions } from "@/lib/countries";
import CountryAccordion from "@/components/l2states/CountryAccordion";
import ContributionForm from "@/components/l2states/ContributionForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type ViewMode = "nation" | "network";

export default function L2StatesPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("nation");
  const [openCountry, setOpenCountry] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [prefilledCountry, setPrefilledCountry] = useState<string>("");
  const formRef = useRef<HTMLDivElement>(null);

  // Filter and sort countries alphabetically
  const filteredCountries = useMemo(() => {
    return countries
      .filter((country) => {
        const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRegion = selectedRegion === "all" || country.region === selectedRegion;
        return matchesSearch && matchesRegion;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedRegion]);

  const handleToggle = (countryName: string) => {
    setOpenCountry(openCountry === countryName ? null : countryName);
  };

  const handleContribute = (countryName: string) => {
    setPrefilledCountry(countryName);
    // Scroll to form
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-marble">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-obsidian relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">L2 States Directory</p>
            <h1 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold text-marble mb-6">
              Every Nation Deserves <br className="hidden md:block" />
              <span className="text-gold">Sovereign Infrastructure</span>
            </h1>
            <p className="text-stone-light text-lg md:text-xl max-w-2xl mx-auto">
              Explore countries ready for their own L2 blockchain. Find your nation and contribute
              to building the future of onchain governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* Toggle & Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            {/* View Mode Toggle */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex bg-white border border-stone-light/50 rounded-lg overflow-hidden shadow-sm">
                <button
                  onClick={() => setViewMode("nation")}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    viewMode === "nation"
                      ? "bg-obsidian text-marble"
                      : "bg-white text-stone hover:bg-stone-light/20"
                  }`}
                >
                  <span>🏛</span>
                  Nation States
                </button>
                <button
                  onClick={() => setViewMode("network")}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-2 border-l border-stone-light/30 ${
                    viewMode === "network"
                      ? "bg-obsidian text-marble"
                      : "bg-white text-stone hover:bg-stone-light/20"
                  }`}
                >
                  <span>🌐</span>
                  Network States
                </button>
              </div>
            </div>

            {/* Search & Filter */}
            {viewMode === "nation" && (
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search countries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-stone-light/30 rounded-lg text-obsidian placeholder-stone focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Region Filter */}
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-3 bg-white border border-stone-light/30 rounded-lg text-obsidian focus:outline-none focus:border-gold transition-colors cursor-pointer"
                >
                  <option value="all">All Regions</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </motion.div>

          {/* Content based on view mode */}
          {viewMode === "nation" ? (
            <>
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center gap-8 mb-8 text-center"
              >
                <div>
                  <p className="font-[family-name:var(--font-syne)] text-3xl font-bold text-obsidian">
                    {filteredCountries.length}
                  </p>
                  <p className="text-stone text-sm">Countries</p>
                </div>
              </motion.div>

              {/* Countries List - Alphabetical */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-3"
              >
                {filteredCountries.map((country) => (
                  <CountryAccordion
                    key={country.iso}
                    country={country}
                    isOpen={openCountry === country.name}
                    onToggle={() => handleToggle(country.name)}
                    onContribute={handleContribute}
                  />
                ))}

                {filteredCountries.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-stone text-lg">No countries found matching your search.</p>
                  </div>
                )}
              </motion.div>
            </>
          ) : (
            /* Network States - Coming Soon */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center">
                <span className="text-5xl">🌐</span>
              </div>
              <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-obsidian mb-4">
                Network States Coming Soon
              </h3>
              <p className="text-stone text-lg max-w-md mx-auto mb-8">
                We&apos;re building out the Network States directory. Check back soon to explore
                digital-first jurisdictions.
              </p>
              <button
                onClick={() => setViewMode("nation")}
                className="px-6 py-3 bg-obsidian text-marble font-semibold hover:bg-gold hover:text-obsidian transition-colors"
              >
                Explore Nation States
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contribution Form */}
      <ContributionForm ref={formRef} prefilledCountry={prefilledCountry} />

      <Footer />
    </main>
  );
}

