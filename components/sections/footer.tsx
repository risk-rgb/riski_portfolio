"use client";
import React from "react";
// Lucide untuk ikon umum
import { Mail, ArrowUpRight } from "lucide-react";
// React Icons (Feather) untuk logo brand
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { footer } from "motion/react-m";
import { JourneyTimeline } from "./journey-timeline";
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-border bg-background pt-20 pb-10 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Bagian Kiri: Branding & Status */}
          <div className="md:col-span-5 flex flex-col items-start">
            <h2 className="text-foreground text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 transition-colors duration-500">
              RAHMAT<span className="text-blue-500">RIZKIYANSYAH</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mb-6 transition-colors duration-500">
              Navigating the intersection of Industrial Quality Control and
              Modern Software Engineering. Building robust, bug-free digital
              solutions.
            </p>
            {/* Indikator Status ala System Engineer */}
            <div className="flex items-center gap-2 px-3 py-1.5 border border-border rounded-full bg-zinc-100 dark:bg-zinc-900 transition-colors duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
                Available for Work
              </span>
            </div>
          </div>

          {/* Bagian Tengah: Navigasi */}
          <div className="md:col-span-3 md:col-start-7 flex flex-col">
            <h3 className="text-foreground font-bold uppercase tracking-widest mb-6 transition-colors duration-500">
              Navigation
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                "Home",
                "Journey Timeline",
                "Projects-section",
                "Skills-section",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="flex items-center gap-1 text-zinc-500 hover:text-foreground transition-colors duration-300"
                  >
                    {" "}
                    {item}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bagian Kanan: Sosial & Kontak */}
          <div className="md:col-span-3 flex flex-col">
            <h3 className="text-foreground font-bold uppercase tracking-widest mb-6 transition-colors duration-500">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/risk-rgb"
                className="p-2 border border-border rounded-lg text-zinc-500 hover:text-foreground hover:border-foreground transition-all duration-300 bg-zinc-50 dark:bg-zinc-900/50"
              >
                {/* Gunakan FiGithub dari react-icons */}
                <FiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/riski-ansyah-0a4b44212"
                className="p-2 border border-border rounded-lg text-zinc-500 hover:text-foreground hover:border-foreground transition-all duration-300 bg-zinc-50 dark:bg-zinc-900/50"
              >
                {/* Gunakan FiLinkedin dari react-icons */}
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rriskiansyah10@gmail.com"
                className="p-2 border border-border rounded-lg text-zinc-500 hover:text-foreground hover:border-foreground transition-all duration-300 bg-zinc-50 dark:bg-zinc-900/50"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bagian Bawah: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border transition-colors duration-500">
          <p className="text-zinc-500 text-xs font-mono mb-4 md:mb-0">
            © {currentYear} Rahmat Rizkiyansyah. All rights reserved.
          </p>
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
            WEST JAVA BOGOR IN INDONESIA
          </p>
        </div>
      </div>
    </footer>
  );
};
