"use client";

import React, { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

// Komponen Node (Kotak Skill)
const SkillNode = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex h-16 w-16 md:h-20 md:w-20 flex-col items-center justify-center rounded-2xl border border-border bg-zinc-950 p-3 shadow-2xl transition-all hover:border-zinc-500 hover:scale-110 ${className}`}
    >
      <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-tighter text-zinc-300 text-center leading-tight">
        {children}
      </span>
    </div>
  );
});
SkillNode.displayName = "SkillNode";

export const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Refs untuk semua titik
  const coreRef = useRef<HTMLDivElement>(null);

  // Kiri (Frontend / Mobile)
  const nextjsRef = useRef<HTMLDivElement>(null);
  const reactNativeRef = useRef<HTMLDivElement>(null);
  const vueRef = useRef<HTMLDivElement>(null);

  // Kanan (Backend / Tools)
  const laravelRef = useRef<HTMLDivElement>(null);
  const codeIgniterRef = useRef<HTMLDivElement>(null);
  const postgresRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="skills-section"
      className="relative bg-background py-32 border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center z-20 relative">
        <p className="text-zinc-600 text-xs uppercase tracking-[0.4em] mb-4">
          Technical Arsenal
        </p>
        <h2 className="text-foreground text-5xl md:text-8xl font-black italic uppercase tracking-tighter">
          Core <span className="text-zinc-800">Stack</span>
        </h2>
      </div>

      <div
        className="relative flex w-full max-w-4xl mx-auto items-center justify-center p-4 md:p-10"
        ref={containerRef}
      >
        <div className="flex h-[400px] md:h-[500px] w-full flex-row items-stretch justify-between gap-10">
          {/* Kolom Kiri: Client-Side */}
          <div className="flex flex-col justify-between gap-4">
            <SkillNode ref={nextjsRef}>Next.js</SkillNode>
            <SkillNode ref={reactNativeRef}>React Native</SkillNode>
            <SkillNode ref={vueRef}>Vue.js</SkillNode>
            <SkillNode ref={codeIgniterRef}>CodeIgniter</SkillNode>
          </div>

          {/* Kolom Tengah: Core Node (Lu) */}
          <div className="flex flex-col justify-center">
            <div
              ref={coreRef}
              className="z-10 flex h-24 w-24 md:h-32 md:w-32 flex-col items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] backdrop-blur-md"
            >
              <span className="text-xs md:text-sm font-black uppercase tracking-widest text-foreground italic">
                CORE
              </span>
              <span className="text-[8px] md:text-[10px] text-blue-400 font-mono mt-1">
                ENGINEER
              </span>
            </div>
          </div>

          {/* Kolom Kanan: Server-Side & Data */}
          <div className="flex flex-col justify-between gap-4">
            <SkillNode ref={laravelRef}>Laravel</SkillNode>
            <SkillNode ref={codeIgniterRef}>CodeIgniter</SkillNode>
            <SkillNode ref={postgresRef}>PostgreSQL</SkillNode>
            <SkillNode ref={aiRef}>AI APIs</SkillNode>
          </div>
        </div>

        {/* ALIRAN DATA (BEAMS) */}
        {/* Dari Kiri ke Tengah (Input) */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={nextjsRef}
          toRef={coreRef}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={reactNativeRef}
          toRef={coreRef}
          duration={3.5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={vueRef}
          toRef={coreRef}
          duration={4}
        />

        {/* Dari Tengah ke Kanan (Output) */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={coreRef}
          toRef={laravelRef}
          duration={3}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={coreRef}
          toRef={postgresRef}
          duration={3.5}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={coreRef}
          toRef={aiRef}
          duration={4}
          reverse
        />
      </div>
    </section>
  );
};
