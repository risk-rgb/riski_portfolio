"use client";
import React from "react";
import { MorphingText } from "@/components/ui/morphing-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full overflow-hidden bg-background transition-colors duration-500 antialiased items-center justify-center"
    >
      {/* 1. BACKGROUND BERSIH */}
      <div className="absolute inset-0 z-0 bg-background transition-colors duration-500" />

      <div className="relative z-10 mx-auto w-full max-w-7xl p-6 text-center flex flex-col items-center justify-center mt-10">
        {/* 2. BADGE STATUS */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-muted-foreground text-[10px] uppercase tracking-[0.2em] mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 transition-colors duration-500 shadow-sm"></div>

        {/* 3. MORPHING TEXT: SPACING EXTREME 
            Gua ganti min-h jadi fix height (h-[...]) yang super lega.
            Mobile 200px, Tablet 280px, Desktop 320px. 
            Margin-bottom (mb) juga gua besarin ke mb-16. */}
        <div className="h-[200px] md:h-[280px] lg:h-[320px] w-full flex items-center justify-center mb-10 md:mb-16">
          <MorphingText
            className="text-foreground text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase italic transition-colors duration-500 leading-none"
            texts={[
              "Rahmat Rizkiyansyah",
              "Software Engineer",
              "QC Specialist",
              "System Drafter",
              "Quality Code",
            ]}
          />
        </div>

        {/* 4. TEXT GENERATE EFFECT: Keterbacaan Maksimal */}
        <div className="max-w-6xl mx-auto px-4 mt-6">
          <TextGenerateEffect
            className="text-center font-normal"
            words="A Software Engineering student combining 4 years of industrial Quality Control precision, and 2 years of technical drafting experience to build robust, bug-free digital solutions."
          />
        </div>

        {/* 5. DECORATIVE INDICATOR */}
        <div className="mt-16 md:mt-24 animate-bounce opacity-30">
          <div className="w-[1px] h-16 bg-gradient-to-b from-foreground to-transparent mx-auto transition-colors duration-500" />
        </div>
      </div>
    </section>
  );
}
