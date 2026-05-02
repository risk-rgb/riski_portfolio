"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) return null;

  return (
    // FIX QC: Perhatikan class di bawah ini!
    // bottom-6 right-6 -> Posisinya di bawah kanan (Mobile)
    // md:bottom-auto md:top-6 md:right-8 -> Posisinya pindah ke atas kanan (PC/Laptop)
    <div className="fixed bottom-6 right-6 md:bottom-auto md:top-6 md:right-8 z-[60] flex w-fit items-center rounded-full border border-zinc-800 bg-zinc-950/90 p-1 shadow-xl backdrop-blur-md">
      <button
        className={`relative z-10 flex items-center gap-2 px-2 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300 md:px-3 md:py-1.5 ${
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
        className={`relative z-10 flex items-center gap-2 px-2 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300 md:px-3 md:py-1.5 ${
          theme === "dark" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
        }`}
        onClick={() => toggleTheme("dark")}
      >
        <Moon className="relative z-10 h-4 w-4 md:h-4 md:w-4" />
        <span className="relative z-10 hidden md:block">Dark</span>
      </button>

      <div
        className={`absolute inset-0 z-0 flex p-1 ${
          theme === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className={`h-full w-1/2 rounded-full shadow-sm ${
            theme === "light"
              ? "bg-white"
              : "border border-zinc-700 bg-zinc-800"
          }`}
        />
      </div>
    </div>
  );
};
