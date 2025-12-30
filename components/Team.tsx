"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Emi Velazquez",
    role: "CEO",
    image: "https://cdn.discordapp.com/attachments/1217149062290346087/1455282197408780593/KhbR2c0r_400x400.jpg?ex=695428a9&is=6952d729&hm=f9b0f8ab610241d2ee775ee8894b3f1ff58a7b213930862cd2354e16e616d4ef&",
    link: "https://x.com/emivelazquez6",
    linkType: "twitter"
  },
  {
    name: "KC",
    role: "CTO",
    image: "https://cdn.discordapp.com/attachments/1217149062290346087/1455282198184853556/1618652361489.jpeg?ex=695428a9&is=6952d729&hm=8fd8abb2d1676afe17adfbd914b7de2d00d0d784be92f997b93d3b40a8b3caa7&",
    link: "https://www.linkedin.com/in/kritarthchhabra/",
    linkType: "linkedin"
  },
  {
    name: "Rena O",
    role: "Chief of Staff",
    image: "https://cdn.discordapp.com/attachments/1217149062290346087/1455282197069303930/1727649008872.jpeg?ex=695428a9&is=6952d729&hm=5f6e9ada6b77afec44298242d40a1de5073a9d86e0c38be988ac04ade17be158&",
    link: "https://www.linkedin.com/in/renaobrien/",
    linkType: "linkedin"
  },
  {
    name: "Marc Baque Vilamala",
    role: "Fullstack Engineer, Identity",
    image: "https://cdn.discordapp.com/attachments/1217149062290346087/1455282196700069971/1673966347134.jpeg?ex=695428a9&is=6952d729&hm=0e8647632740e3b9afdbf57e23047433f72d2ce98bb5be38f106414dcaf0fec5&",
    link: "https://www.linkedin.com/in/marcbaque/",
    linkType: "linkedin"
  },
  {
    name: "Jordi Pinyana",
    role: "Voting and Governance",
    image: "https://cdn.discordapp.com/attachments/1217149062290346087/1455282196339232991/1718228618684.jpeg?ex=695428a9&is=6952d729&hm=8ffd59f530322689fbcd33f8fd784d9c72db128d7258538ffe80374d0514af2d&",
    link: "https://www.linkedin.com/in/jordi-painan/",
    linkType: "linkedin"
  },
  {
    name: "Paisanos.io",
    role: "Design Agency",
    image: "https://cdn.discordapp.com/attachments/1217149062290346087/1455282196100419594/Screenshot_2025-12-29_at_4.29.14_PM.png?ex=695428a9&is=6952d729&hm=84769bc6b15bc6610eec4593af64fa2a33dd7b8e0a981d180f583591681af374&",
    link: "https://www.linkedin.com/company/paisanos/",
    linkType: "linkedin"
  },
  {
    name: "Mike Tango Bravo",
    role: "Global BD",
    image: "https://cdn.discordapp.com/attachments/1217149062290346087/1455282195710214225/1516791016741.jpeg?ex=695428a9&is=6952d729&hm=eb065f46f261b297834a25a26021835288a6b27739ee3d29b4e788cf4d277a68&",
    link: "https://www.linkedin.com/in/barrowmike/",
    linkType: "linkedin"
  },
  {
    name: "Matias Huala",
    role: "Chief Operations Latam",
    image: "https://cdn.discordapp.com/attachments/1217149062290346087/1455282195366285312/Screenshot_2025-12-29_at_4.31.21_PM.png?ex=695428a9&is=6952d729&hm=4124a45655206af295b46832ef0725d989eb311a3bdab25d1404398ac8600650&",
    link: "https://www.linkedin.com/in/matias-huala/",
    linkType: "linkedin"
  },
];


export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" ref={ref} className="py-32 bg-obsidian text-marble relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">The Team</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built to Ship
          </h2>
          <p className="text-stone-light text-xl max-w-2xl mx-auto">
            A team that understands both the technology and the real-world constraints 
            of building infrastructure for jurisdictions.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              className="text-center group"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold/30 group-hover:border-gold transition-colors duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-marble">
                  {member.name}
                </h3>
                {member.link && (
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-light hover:text-gold transition-colors"
                    aria-label={`${member.name}'s profile`}
                  >
                    {member.linkType === "twitter" ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                  </a>
                )}
              </div>
              <p className="text-stone-light text-sm">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
