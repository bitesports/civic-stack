"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian text-marble py-16 relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.svg" 
                alt="Civic Stack" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-[family-name:var(--font-syne)] font-semibold text-lg tracking-wide">
                CIVIC STACK
              </span>
            </div>
            <p className="text-stone-light text-sm leading-relaxed">
              The onchain operating system for jurisdictions. 
              Building the infrastructure for the next era of governance.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[family-name:var(--font-syne)] font-semibold mb-4 text-gold">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { label: "The Stack", href: "#stack" },
                { label: "Partners", href: "#partners" },
                { label: "Team", href: "#team" },
                { label: "Investment", href: "#invest" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-stone-light hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone text-sm">
            © {currentYear} Civic Stack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-stone hover:text-gold transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-stone hover:text-gold transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

