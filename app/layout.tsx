import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Civic Stack | The Onchain Operating System for Jurisdictions",
  description: "Civic Stack is a full-stack operating system for jurisdictions. We turn governance, identity, finance, and registries into modular onchain infrastructure that any jurisdiction can deploy.",
  keywords: ["blockchain", "governance", "jurisdiction", "web3", "onchain", "identity", "DeFi", "stablecoin"],
  openGraph: {
    title: "Civic Stack | The Onchain Operating System for Jurisdictions",
    description: "Modular onchain infrastructure for jurisdictions. Identity, governance, treasury, and more.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Civic Stack | Onchain Jurisdiction Infrastructure",
    description: "The full-stack operating system for jurisdictions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${outfit.variable} antialiased bg-marble text-obsidian`}
      >
        {children}
      </body>
    </html>
  );
}
