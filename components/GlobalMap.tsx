"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { geoMercator, geoPath, GeoPath, GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { Feature, FeatureCollection, Geometry } from "geojson";

type ViewMode = "all" | "nation" | "network";

interface CountryProperties {
  name: string;
}

// Countries with active L2 or interest
const activeCountries: Record<string, { status: string; type: "nation" | "network" }> = {
  "United States of America": { status: "Exploring", type: "nation" },
  "Canada": { status: "Interested", type: "nation" },
  "Mexico": { status: "Active Talks", type: "nation" },
  "Brazil": { status: "Pilot Ready", type: "nation" },
  "Argentina": { status: "Interested", type: "nation" },
  "Colombia": { status: "Exploring", type: "nation" },
  "Chile": { status: "Interested", type: "nation" },
  "Paraguay": { status: "Active Talks", type: "nation" },
  "Costa Rica": { status: "Interested", type: "nation" },
  "Panama": { status: "Exploring", type: "nation" },
  "United Kingdom": { status: "Regulatory Sandbox", type: "nation" },
  "Germany": { status: "Interested", type: "nation" },
  "France": { status: "Exploring", type: "nation" },
  "Spain": { status: "Interested", type: "nation" },
  "Portugal": { status: "Exploring", type: "nation" },
  "Italy": { status: "Interested", type: "nation" },
  "Switzerland": { status: "Active Talks", type: "nation" },
  "Estonia": { status: "Pioneer", type: "nation" },
  "Lithuania": { status: "Interested", type: "nation" },
  "Netherlands": { status: "Exploring", type: "nation" },
  "Poland": { status: "Interested", type: "nation" },
  "Czech Republic": { status: "Exploring", type: "nation" },
  "Austria": { status: "Interested", type: "nation" },
  "United Arab Emirates": { status: "Active Talks", type: "nation" },
  "Saudi Arabia": { status: "Exploring", type: "nation" },
  "Nigeria": { status: "Exploring", type: "nation" },
  "Kenya": { status: "Interested", type: "nation" },
  "South Africa": { status: "Exploring", type: "nation" },
  "Rwanda": { status: "Exploring", type: "nation" },
  "Ghana": { status: "Interested", type: "nation" },
  "Singapore": { status: "Pilot Ready", type: "nation" },
  "Japan": { status: "Exploring", type: "nation" },
  "South Korea": { status: "Interested", type: "nation" },
  "India": { status: "Exploring", type: "nation" },
  "Thailand": { status: "Interested", type: "nation" },
  "Vietnam": { status: "Exploring", type: "nation" },
  "Philippines": { status: "Interested", type: "nation" },
  "Indonesia": { status: "Exploring", type: "nation" },
  "Malaysia": { status: "Interested", type: "nation" },
  "Australia": { status: "Interested", type: "nation" },
  "New Zealand": { status: "Exploring", type: "nation" },
  "Russia": { status: "Interested", type: "nation" },
  "China": { status: "Exploring", type: "nation" },
  "Taiwan": { status: "Interested", type: "nation" },
};

// Network states (virtual markers)
const networkStates = [
  { id: "praxis", name: "Praxis", status: "Building", x: 420, y: 220 },
  { id: "prospera", name: "Próspera", status: "Live", x: 180, y: 280 },
  { id: "liberland", name: "Liberland", status: "Building", x: 500, y: 200 },
  { id: "zuzalu", name: "Zuzalu", status: "Active", x: 510, y: 210 },
  { id: "vitalia", name: "Vitalia", status: "Building", x: 175, y: 275 },
  { id: "culdesac", name: "Culdesac", status: "Exploring", x: 150, y: 230 },
];

export default function GlobalMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [viewMode, setViewMode] = useState<ViewMode>("all");
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [hoveredNetwork, setHoveredNetwork] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [countries, setCountries] = useState<Feature<Geometry, CountryProperties>[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);

  // Load TopoJSON data
  useEffect(() => {
    fetch("/world-low.json")
      .then((response) => response.json())
      .then((topology: Topology<{ countries: GeometryCollection<CountryProperties> }>) => {
        const geojson = feature(topology, topology.objects.countries) as FeatureCollection<Geometry, CountryProperties>;
        setCountries(geojson.features);
      })
      .catch((error) => console.error("Error loading map data:", error));
  }, []);

  // Create projection and path generator
  const { projection, pathGenerator } = useMemo(() => {
    const proj = geoMercator()
      .scale(130)
      .translate([400, 300])
      .center([0, 20]);
    
    const path = geoPath().projection(proj) as GeoPath<unknown, GeoPermissibleObjects>;
    
    return { projection: proj, pathGenerator: path };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mapRef.current) {
      const rect = mapRef.current.getBoundingClientRect();
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const getCountryColor = (countryName: string, isHovered: boolean) => {
    const isActive = activeCountries[countryName];
    
    // When viewing network states only, show map in muted colors
    if (!highlightNationStates) {
      if (isHovered) {
        return "#3B82F6"; // Blue on hover
      }
      return isActive ? "#D1D5DB" : "#E5E7EB"; // Muted gray for all countries
    }
    
    if (isHovered) {
      return "#3B82F6"; // Blue on hover
    }
    
    if (isActive) {
      return "#4ADE80"; // Green for active countries
    }
    
    return "#E5E7EB"; // Light gray for inactive
  };

  const filteredNetworkStates = viewMode === "nation" ? [] : networkStates;
  const showNationStates = true; // Always show the map
  const highlightNationStates = viewMode !== "network"; // Only highlight when not in network-only mode

  return (
    <section ref={ref} className="py-32 bg-marble relative overflow-hidden marble-texture">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-stone tracking-[0.3em] uppercase text-sm mb-4">Global Reach</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Jurisdiction L2 Network
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto">
            Explore jurisdictions building their sovereign infrastructure on Civic Stack.
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-white border border-stone-light/50 rounded-lg overflow-hidden shadow-sm">
            {[
              { id: "all" as ViewMode, label: "All", icon: "⊞" },
              { id: "nation" as ViewMode, label: "Nation States", icon: "🏛" },
              { id: "network" as ViewMode, label: "Network States", icon: "🌐" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setViewMode(tab.id)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-2 border-r border-stone-light/30 last:border-r-0 ${
                  viewMode === tab.id
                    ? "bg-blue-500 text-white"
                    : "bg-white text-stone hover:bg-stone-light/20"
                }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Map Container */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-white border border-stone-light/30 rounded-2xl overflow-hidden shadow-lg"
          onMouseMove={handleMouseMove}
        >
          <svg
            viewBox="0 0 800 500"
            className="w-full h-auto"
            style={{ minHeight: "280px", background: "#FAFAFA" }}
          >
            {/* Render countries */}
            {showNationStates && countries.map((country, index) => {
              const countryName = country.properties?.name || `country-${index}`;
              const path = pathGenerator(country);
              const isHovered = hoveredCountry === countryName;
              
              if (!path) return null;
              
              return (
                <path
                  key={index}
                  d={path}
                  fill={getCountryColor(countryName, isHovered)}
                  stroke="#FFFFFF"
                  strokeWidth={isHovered ? 1.5 : 0.5}
                  className="transition-all duration-200 cursor-pointer"
                  onMouseEnter={() => setHoveredCountry(countryName)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  style={{
                    filter: isHovered ? "brightness(1.1) drop-shadow(0 2px 4px rgba(0,0,0,0.2))" : "none",
                  }}
                />
              );
            })}

            {/* Network state markers */}
            {filteredNetworkStates.map((ns) => {
              const isHovered = hoveredNetwork === ns.id;
              return (
                <g key={ns.id}>
                  {/* Pulse animation */}
                  <circle
                    cx={ns.x}
                    cy={ns.y}
                    r="12"
                    fill="#C9A227"
                    opacity="0.3"
                  >
                    <animate
                      attributeName="r"
                      values="8;14;8"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.4;0.1;0.4"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Main marker */}
                  <circle
                    cx={ns.x}
                    cy={ns.y}
                    r={isHovered ? 10 : 8}
                    fill={isHovered ? "#3B82F6" : "#C9A227"}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredNetwork(ns.id)}
                    onMouseLeave={() => setHoveredNetwork(null)}
                    style={{
                      filter: isHovered ? "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" : "none",
                    }}
                  />
                  {/* Label */}
                  {isHovered && (
                    <text
                      x={ns.x}
                      y={ns.y - 16}
                      textAnchor="middle"
                      className="fill-obsidian text-xs font-semibold pointer-events-none"
                    >
                      {ns.name}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Hover Tooltip */}
          <AnimatePresence>
            {(hoveredCountry || hoveredNetwork) && (
              <motion.div
                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute pointer-events-none bg-white shadow-lg border border-stone-light/30 rounded-lg p-3 z-20"
                style={{
                  left: Math.min(Math.max(tooltipPos.x - 60, 16), 400),
                  top: Math.max(tooltipPos.y - 80, 16),
                  minWidth: "140px",
                }}
              >
                <div className="text-center">
                  <h4 className="font-[family-name:var(--font-syne)] font-semibold text-sm text-obsidian mb-0.5">
                    {hoveredCountry || networkStates.find(n => n.id === hoveredNetwork)?.name}
                  </h4>
                  <p className="text-stone text-xs mb-2">
                    {hoveredNetwork ? "Network State" : "Nation State"}
                  </p>
                  <button className="w-full px-3 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded hover:bg-blue-600 transition-colors">
                    Get in touch
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 border border-stone-light/30 rounded-xl shadow-md">
            <p className="text-xs font-bold text-obsidian mb-3 uppercase tracking-wider">Legend</p>
            <div className="flex flex-col gap-2.5 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-green-400" />
                <span className="text-obsidian">Nation State L2</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-gold" />
                <span className="text-obsidian">Network State L2</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-gray-200" />
                <span className="text-obsidian">Available</span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-stone mb-4">Don&apos;t see your jurisdiction?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-obsidian text-marble text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-obsidian transition-all duration-300"
          >
            Launch Your L2
          </a>
        </motion.div>
      </div>
    </section>
  );
}
