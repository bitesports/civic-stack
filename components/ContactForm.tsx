"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", organization: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-gold/30 p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 border-2 border-gold flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold mb-2">
          Message Sent
        </h3>
        <p className="text-stone-light">
          Thank you for your interest. We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm tracking-widest uppercase text-stone-light mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-stone/50 text-marble placeholder:text-stone focus:border-gold focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm tracking-widest uppercase text-stone-light mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-stone/50 text-marble placeholder:text-stone focus:border-gold focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm tracking-widest uppercase text-stone-light mb-2">
          Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-transparent border border-stone/50 text-marble placeholder:text-stone focus:border-gold focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm tracking-widest uppercase text-stone-light mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-transparent border border-stone/50 text-marble placeholder:text-stone focus:border-gold focus:outline-none transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-8 py-4 bg-gold text-obsidian font-[family-name:var(--font-syne)] font-semibold text-sm tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

