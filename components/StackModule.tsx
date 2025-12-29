"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ModuleData {
  id: string;
  name: string;
  status: string;
  icon: string;
  description: string;
  details: string[];
}

interface StackModuleProps {
  module: ModuleData;
  index: number;
  isInView: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function StackModule({
  module,
  index,
  isInView,
  isExpanded,
  onToggle,
}: StackModuleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
      className={`group relative bg-marble-light border transition-all duration-500 cursor-pointer ${
        isExpanded 
          ? "border-gold shadow-lg" 
          : "border-stone-light/30 hover:border-gold/50"
      }`}
      onClick={onToggle}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{module.icon}</span>
            <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg">
              {module.name}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-6 flex items-center justify-center text-gold"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="7" y1="0" x2="7" y2="14" />
              <line x1="0" y1="7" x2="14" y2="7" />
            </svg>
          </motion.div>
        </div>

        {/* Status Badge */}
        <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs tracking-wider uppercase mb-4">
          {module.status}
        </div>

        {/* Description */}
        <p className="text-stone text-sm leading-relaxed">
          {module.description}
        </p>

        {/* Expanded Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-stone-light/30">
                <ul className="space-y-3">
                  {module.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone">
                      <span className="text-gold mt-1">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

