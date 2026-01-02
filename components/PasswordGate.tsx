"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ACCESS_CODE = "civicstack";
const STORAGE_KEY = "civicstack_access";

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [isUnlocked, setIsUnlocked] = useState<boolean | null>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const hasAccess = localStorage.getItem(STORAGE_KEY) === "true";
    setIsUnlocked(hasAccess);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code.toLowerCase() === ACCESS_CODE) {
      localStorage.setItem(STORAGE_KEY, "true");
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setCode("");
    }
  };

  // Show nothing while checking localStorage (prevents flash)
  if (isUnlocked === null) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Show gate if not unlocked
  if (!isUnlocked) {
    return (
      <div className="fixed inset-0 z-[9999] bg-obsidian flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("/hero-bg.png")` }}
          />
          <div className="absolute inset-0 bg-obsidian/80" />
        </div>

        {/* Gate content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-md px-6"
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.svg"
              alt="Civic Stack"
              width={180}
              height={45}
              className="invert"
            />
          </div>

          {/* Card */}
          <div className="bg-obsidian border border-gold/30 p-8 relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold" />

            <div className="text-center mb-6">
              <h1 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-marble mb-2">
                Investor Preview
              </h1>
              <p className="text-stone-light text-sm">
                Enter your access code to continue
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <motion.div
                animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                <input
                  type="password"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setError(false);
                  }}
                  placeholder="Access Code"
                  autoFocus
                  className={`w-full px-4 py-3 bg-marble/10 border rounded-none text-marble text-center tracking-widest placeholder-stone-light/50 focus:outline-none transition-colors ${
                    error
                      ? "border-red-500 focus:border-red-500"
                      : "border-stone-light/30 focus:border-gold"
                  }`}
                />
              </motion.div>

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-400 text-sm text-center mt-2"
                  >
                    Invalid access code
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-gold text-obsidian font-[family-name:var(--font-outfit)] font-bold uppercase tracking-wider text-sm hover:bg-gold/80 transition-colors"
              >
                Enter
              </button>
            </form>
          </div>

          {/* Footer note */}
          <p className="text-center text-stone-light/50 text-xs mt-6">
            For investor access, contact{" "}
            <a href="mailto:emi@civic-stack.com" className="text-gold hover:underline">
              emi@civic-stack.com
            </a>
          </p>
        </motion.div>
      </div>
    );
  }

  // Unlocked - show children
  return <>{children}</>;
}

