"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function JourneyTimeline() {
  const data = [
    {
      title: "2022 - Present",
      content: (
        <div className="relative">
          <h3 className="text-xl md:text-3xl font-black text-foreground uppercase italic tracking-tighter mb-4 transition-colors duration-500">
            Quality Control
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base mb-6 max-w-2xl leading-relaxed transition-colors duration-500">
            Working at{" "}
            <span className="text-foreground font-bold underline decoration-zinc-700 transition-colors duration-500">
              PT. Haeng Nam Sejahtera Indonesia (PTHSI)
            </span>
            . Ensuring quality standard compliance through precision inspection,
            defect analysis, and the implementation of continuous improvement
            solutions.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <img
              src="/hsi.png"
              alt="PTHSI Work"
              className="h-32 w-full rounded-lg object-cover border border-border grayscale hover:grayscale-0 transition-all duration-500 md:h-44 lg:h-64"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2022",
      content: (
        <div className="relative">
          <h3 className="text-xl md:text-3xl font-black text-foreground uppercase italic tracking-tighter mb-4 transition-colors duration-500">
            Drafter Engineering & Quality Control
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base mb-6 leading-relaxed transition-colors duration-500">
            Before transitioning into the IT industry, I worked as a drafter at
            a construction company (AFT) for 2 years. I was responsible for
            creating shop drawings and as-built drawings for large-scale
            construction projects. This experience taught me the critical
            importance of detail, precision, and cross-functional collaboration
            in ensuring seamless project execution.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <img
              src="/aft.jpg"
              alt="Drafting Work"
              className="h-32 w-full rounded-lg object-cover border border-border grayscale hover:grayscale-0 transition-all duration-500 md:h-44 lg:h-64"
            />
            <img
              src="/foto-4.jpg"
              alt="Drafting Work 2"
              className="h-32 w-full rounded-lg object-cover border border-border grayscale hover:grayscale-0 transition-all duration-500 md:h-44 lg:h-64"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - Present",
      content: (
        <div className="relative">
          <h3 className="text-xl md:text-3xl font-black text-foreground uppercase italic tracking-tighter mb-4 transition-colors duration-500">
            Academic Journey
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base mb-6 leading-relaxed transition-colors duration-500">
            Informatics Engineering student at{" "}
            <span className="text-foreground font-bold transition-colors duration-500">
              Universitas Dian Nusantara
            </span>
            . I am deepening my knowledge in computer science, programming, and
            information technology. Furthermore, I actively participate in
            campus organizations like HIMTI (Informatics Engineering Student
            Association), gaining valuable experience in leadership and
            teamwork. Throughout my studies, I have also engaged in various
            projects and competitions to broaden my technical expertise.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <img
              src="/undira.png"
              alt="Dian Nusantara"
              className="h-32 w-full rounded-lg object-cover border border-border grayscale hover:grayscale-0 transition-all duration-500 md:h-44 lg:h-64"
            />
            <img
              src="/roomclass.jpeg"
              alt="Learning Tech"
              className="h-32 w-full rounded-lg object-cover border border-border grayscale hover:grayscale-0 transition-all duration-500 md:h-44 lg:h-64"
            />
            <img
              src="/frends.jpeg"
              alt="Learning Tech 2"
              className="h-32 w-full rounded-lg object-cover border border-border grayscale hover:grayscale-0 transition-all duration-500 md:h-44 lg:h-64"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2017 - 2019",
      content: (
        <div className="relative">
          <h3 className="text-xl md:text-3xl font-black text-foreground uppercase italic tracking-tighter mb-4 transition-colors duration-500">
            SMK Muhammadiyah 1 Cileungsi - Electrical Engineering
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base mb-6 leading-relaxed transition-colors duration-500">
            Vocational High School (SMK) graduate majoring in Electrical Power
            Installation Engineering. Here, I acquired fundamental knowledge of
            electricity, installation, and electrical system maintenance. I also
            developed an understanding of the star-delta systems used to operate
            electric motors. This experience, combined with learning Omron PLCs,
            provided a solid foundation for grasping the technical concepts I
            apply in my current work.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <img
              src="/logosmk.png"
              alt="SMK Days"
              className="h-32 w-full rounded-lg object-cover border border-border grayscale hover:grayscale-0 transition-all duration-500 md:h-44 lg:h-64"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="journey-timeline"
      className="bg-background py-24 border-t border-border transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-12">
        <p className="text-zinc-500 text-xs uppercase tracking-[0.4em] mb-4">
          History Log
        </p>
        <h2 className="text-foreground text-4xl md:text-7xl font-black tracking-tighter uppercase italic transition-colors duration-500">
          Professional{" "}
          <span className="text-zinc-500 dark:text-zinc-800">Path</span>
        </h2>
      </div>

      <div className="w-full bg-background transition-colors duration-500">
        <Timeline data={data} />
      </div>
    </section>
  );
}
