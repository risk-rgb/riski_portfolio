"use client";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export function Velocity() {
  return (
    <section className="relative z-20 py-24 bg-background border-y border-white/5">
      <ScrollVelocityContainer className="text-5xl font-black md:text-8xl tracking-tighter italic uppercase text-foreground">
        <ScrollVelocityRow baseVelocity={3} direction={1}>
          Riski Portfolio • Creative Developer •
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={3} direction={-1}>
          Industrial Quality Control • NextJS Expert •
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </section>
  );
}
