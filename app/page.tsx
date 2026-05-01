"use client";
import { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react"; // Pastikan install: npm install lenis
import { Navbar } from "@/components/navigation/navbar";
import { SlideTabsNav } from "@/components/navigation/slide-tabs";
import { Hero } from "@/components/sections/hero";
import { Velocity } from "@/components/sections/velocity";
import { ProjectsShowcase } from "@/components/sections/parallax-album"; // Import seksi Project dari parallax-album
import { InitialLoader } from "@/components/sections/text-loader";
import { ContactSection } from "@/components/sections/contact";
import { JourneyTimeline } from "@/components/sections/journey-timeline";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CertificateSection } from "@/components/sections/certificates";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Durasi loader 3 detik
    return () => clearTimeout(timer);
  }, []);

  // Cegah error router sebelum komponen mounted
  if (!mounted) return null;

  return (
    <main className="relative min-h-screen w-full bg-black">
      {isLoading ? (
        <InitialLoader />
      ) : (
        /* Gunakan ReactLenis di sini untuk membungkus SELURUH konten utama */
        <ReactLenis root options={{ lerp: 0.05 }}>
          <div className="animate-in fade-in duration-1000">
            <Navbar />

            <div className="absolute top-10 inset-x-0 z-50 flex justify-center pointer-events-none">
              <div className="pointer-events-auto">
                <SlideTabsNav />
              </div>
            </div>
            <Hero />
            <Velocity />
            <ProjectsShowcase />
            <JourneyTimeline />
            <ProjectsSection />
            <SkillsSection />
            <CertificateSection />
            <ContactSection />
            <Footer />
          </div>
        </ReactLenis>
      )}
    </main>
  );
}
