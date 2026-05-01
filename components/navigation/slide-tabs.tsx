"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";

// --- TYPES ---
type Position = {
  left: number;
  width: number;
  opacity: number;
};

// --- MAIN COMPONENT ---
export const SlideTabsNav = () => {
  return (
    // FIX 1: Posisikan Navigasi melayang (fixed) di sini, di pembungkus paling luar!
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-fit md:w-auto">
      <SlideTabs />
    </nav>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      // FIX 2: Tambahkan overflow-x-auto biar bisa digeser di HP, bg-background biar adaptif tema
      className="relative mx-auto flex w-full md:w-fit rounded-full border border-border bg-background/80 backdrop-blur-md p-1 shadow-sm overflow-x-auto no-scrollbar transition-colors duration-500"
    >
      <Tab setPosition={setPosition} href="#home">
        Home
      </Tab>
      <Tab setPosition={setPosition} href="#journey-timeline">
        About
      </Tab>
      <Tab setPosition={setPosition} href="#projects-section">
        Projects
      </Tab>
      <Tab setPosition={setPosition} href="#skills-section">
        Skills
      </Tab>
      <Tab setPosition={setPosition} href="#certificates">
        Certificates
      </Tab>
      <Tab setPosition={setPosition} href="#contact">
        Contact
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
  href: string;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    // FIX 3: Tag <nav> yang salah kamar udah gua hapus dari sini
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      // FIX 4: Tambah whitespace-nowrap biar teks nggak patah ke bawah di layar kecil
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white mix-blend-difference md:px-5 md:py-2 md:text-sm whitespace-nowrap"
    >
      <a href={href} className="w-full h-full block">
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      // Adaptif untuk Light/Dark Mode
      className="absolute z-0 h-7 rounded-full bg-zinc-900 dark:bg-white md:h-[36px] transition-colors duration-500"
    />
  );
};
