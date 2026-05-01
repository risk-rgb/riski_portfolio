"use client";
import React from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="grid place-content-center gap-4 bg-background px-8 py-32 text-foreground border-t border-zinc-900"
    >
      {/* Label kecil biar makin elegant */}
      <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] mb-4 text-center">
        Get in Touch
      </p>
      <FlipLink href="https://mail.google.com/mail/?view=cm&fs=1&to=rriskiansyah10@gmail.com">
        Email
      </FlipLink>
      <FlipLink href="https://www.linkedin.com/in/riski-ansyah-0a4b44212">
        Linkedin
      </FlipLink>
      <FlipLink href="https://github.com/risk-rgb">Github</FlipLink>
      <FlipLink href="https://www.instagram.com/risiki10/?next=%2F">
        Instagram
      </FlipLink>
      <FlipLink href="https://www.tiktok.com/@rriskiansyah?lang=id-ID">
        TikTok
      </FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: string;
  href: string;
}

const FlipLink = ({ children, href }: FlipLinkProps) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden whitespace-nowrap text-5xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.8,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block text-zinc-500" // Warna berubah saat hover
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
