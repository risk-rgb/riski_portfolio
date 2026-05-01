"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  // FIX QC: Mencegah Hydration Mismatch Error khas Next.js
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Sinkronisasi saat web pertama kali dimuat
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Jangan render sebelum client siap, biar UI gak ngedip
  if (!mounted) return null;

  return (
    // FIX 1: Tanam posisi Fixed langsung di sini (Pojok Kanan Atas)
    // FIX 2: Tambahin backdrop-blur biar elegan pas nimpa elemen lain
    <div className="fixed top-4 right-4 md:top-6 md:right-8 z-[60] flex w-fit items-center rounded-full border border-zinc-800 bg-zinc-950/90 backdrop-blur-md p-1 shadow-xl">
      <button
        // Padding dikecilin dikit di mobile (px-2) biar gak kegedean di layar HP
        className={`relative z-10 flex items-center gap-2 px-2 py-2 md:px-3 md:py-1.5 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
          theme === "light"
            ? "text-zinc-900"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
        onClick={() => toggleTheme("light")}
      >
        <Sun className="relative z-10 h-4 w-4 md:h-4 md:w-4" />
        <span className="relative z-10 hidden md:block">Light</span>
      </button>

      <button
        className={`relative z-10 flex items-center gap-2 px-2 py-2 md:px-3 md:py-1.5 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
          theme === "dark" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
        }`}
        onClick={() => toggleTheme("dark")}
      >
        <Moon className="relative z-10 h-4 w-4 md:h-4 md:w-4" />
        <span className="relative z-10 hidden md:block">Dark</span>
      </button>

      {/* Background Slider Animator */}
      <div
        className={`absolute inset-0 z-0 flex p-1 ${
          theme === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          // Warna slider saat bergeser (Putih untuk Light, Zinc-800 untuk Dark)
          className={`h-full w-1/2 rounded-full ${
            theme === "light"
              ? "bg-white shadow-sm"
              : "bg-zinc-800 border border-zinc-700 shadow-sm"
          }`}
        />
      </div>
    </div>
  );
};
