"use client";

import { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";

type ContributorType = "individual" | "company" | "investor";

interface ContributionFormProps {
  prefilledCountry?: string;
}

const ContributionForm = forwardRef<HTMLDivElement, ContributionFormProps>(
  ({ prefilledCountry }, ref) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      country: prefilledCountry || "",
      type: "individual" as ContributorType,
      companyName: "",
      fundName: "",
      message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Update country when prefilledCountry changes
    useEffect(() => {
      if (prefilledCountry) {
        setFormData((prev) => ({ ...prev, country: prefilledCountry }));
      }
    }, [prefilledCountry]);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null);

      try {
        const response = await fetch("/api/contribute", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }

        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          type: "individual",
          companyName: "",
          fundName: "",
          message: "",
        });
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const typeOptions: { value: ContributorType; label: string; icon: string }[] = [
      { value: "individual", label: "Individual", icon: "👤" },
      { value: "company", label: "Company", icon: "🏢" },
      { value: "investor", label: "Investor", icon: "💰" },
    ];

    if (submitted) {
      return (
        <div ref={ref} id="contribute-form" className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center px-4"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-obsidian mb-4">
              Thank You!
            </h3>
            <p className="text-stone text-lg mb-8">
              Your submission has been received. We&apos;ll be in touch soon to discuss how you can
              contribute to building sovereign L2 infrastructure.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 bg-obsidian text-marble font-semibold hover:bg-gold hover:text-obsidian transition-colors"
            >
              Submit Another Response
            </button>
          </motion.div>
        </div>
      );
    }

    return (
      <div ref={ref} id="contribute-form" className="py-16 md:py-24 bg-obsidian">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Get Involved</p>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold text-marble mb-4">
              Contribute to Your Nation&apos;s L2
            </h2>
            <p className="text-stone-light text-lg max-w-xl mx-auto">
              Whether you&apos;re an individual, company, or investor, there&apos;s a role for you
              in building sovereign blockchain infrastructure.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Type Selector */}
            <div className="space-y-2">
              <label className="block text-marble text-sm font-medium mb-3">
                I am a...
              </label>
              <div className="grid grid-cols-3 gap-3">
                {typeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, type: option.value }))}
                    className={`p-4 border-2 rounded-lg transition-all duration-200 ${
                      formData.type === option.value
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-stone-light/30 text-stone-light hover:border-gold/50"
                    }`}
                  >
                    <span className="text-2xl block mb-1">{option.icon}</span>
                    <span className="text-sm font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-marble text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-marble/10 border border-stone-light/30 rounded-lg text-marble placeholder-stone-light/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-marble text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-marble/10 border border-stone-light/30 rounded-lg text-marble placeholder-stone-light/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone & Country Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-marble text-sm font-medium mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-marble/10 border border-stone-light/30 rounded-lg text-marble placeholder-stone-light/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-marble text-sm font-medium mb-2">
                  Country of Interest *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-marble/10 border border-stone-light/30 rounded-lg text-marble placeholder-stone-light/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="e.g., Argentina"
                />
              </div>
            </div>

            {/* Conditional Company/Fund Name */}
            {formData.type === "company" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label htmlFor="companyName" className="block text-marble text-sm font-medium mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-marble/10 border border-stone-light/30 rounded-lg text-marble placeholder-stone-light/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Acme Corporation"
                />
              </motion.div>
            )}

            {formData.type === "investor" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label htmlFor="fundName" className="block text-marble text-sm font-medium mb-2">
                  Fund/Organization Name *
                </label>
                <input
                  type="text"
                  id="fundName"
                  name="fundName"
                  value={formData.fundName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-marble/10 border border-stone-light/30 rounded-lg text-marble placeholder-stone-light/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="XYZ Ventures"
                />
              </motion.div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-marble text-sm font-medium mb-2">
                How would you like to contribute? (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-marble/10 border border-stone-light/30 rounded-lg text-marble placeholder-stone-light/50 focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Tell us about your expertise, resources, or how you'd like to help..."
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gold text-obsidian font-[family-name:var(--font-outfit)] font-bold uppercase tracking-wider text-lg hover:bg-gold/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }
);

ContributionForm.displayName = "ContributionForm";

export default ContributionForm;

