"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// 1. DEFINISI INTERFACE
interface CardProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}

export const CertificateSection = () => {
  return (
    <section
      id="certificates"
      className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-background border-t border-border"
    >
      {/* Background Text Decor */}
      <h2 className="relative z-0 text-[18vw] font-black text-zinc-900 md:text-[180px] select-none tracking-tighter italic transition-colors duration-500">
        AWARDS<span className="text-zinc-800">.</span>
      </h2>

      <Cards />

      {/* Label Petunjuk */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] animate-pulse">
          Drag to explore certificates
        </p>
      </div>
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      {/* FIX QC: Ubah semua backslash (\) menjadi forward slash (/) biar aman saat deploy */}
      <Card
        containerRef={containerRef}
        src="/sertifikat/sertifikat 2-1.png"
        alt="Dian Nusantara Univ"
        rotate="6deg"
        top="15%"
        left="20%"
        className="w-48 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/sertifikat/Sertifikat_Keikutsertaan-1.png"
        alt="Vocational Degree"
        rotate="-8deg"
        top="40%"
        left="55%"
        className="w-40 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="/sertifikat/Introduction to large language models-1.png"
        alt="Industrial Excellence"
        rotate="12deg"
        top="20%"
        left="45%"
        className="w-56 md:w-96"
      />
      <Card
        containerRef={containerRef}
        src="/sertifikat/certificate_42030_180_1769024445-1.png"
        alt="Quality Control Cert"
        rotate="-5deg"
        top="55%"
        left="25%"
        className="w-48 md:w-80"
      />
    </div>
  );
};

const Card = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}: CardProps) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const htmlEl = el as HTMLElement;
      let z = parseInt(
        window.getComputedStyle(htmlEl).getPropertyValue("z-index"),
      );

      if (!isNaN(z) && z > maxZIndex) {
        maxZIndex = z;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute bg-card border border-border p-2 pb-8 shadow-2xl cursor-grab active:cursor-grabbing transition-colors duration-500",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        // FIX UTAMA: Class "grayscale hover:grayscale-0" sudah dibuang
        className="pointer-events-none h-full w-full object-cover rounded-sm transition-all duration-500 shadow-sm"
      />
      <div className="mt-3 px-1">
        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-tighter italic">
          Ref: {alt}
        </p>
      </div>
    </motion.div>
  );
};
