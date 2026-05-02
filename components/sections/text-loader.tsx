"use client";
import React from "react";

interface CutoutTextLoaderProps {
  height: string;
  background: string;
  imgUrl: string;
  text?: string;
}

const CutoutTextLoader = ({
  height,
  background,
  imgUrl,
  text = "QUALITY",
}: CutoutTextLoaderProps) => {
  return (
    <div className="relative overflow-hidden w-full" style={{ height }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10 opacity-95" // Gelapkan dikit overlay-nya
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none select-none uppercase flex items-center justify-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(2rem, 15vw, 12rem)",
        }}
      >
        {text}
      </span>
    </div>
  );
};

// Loader ini yang akan menutupi seluruh layar
export function InitialLoader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <CutoutTextLoader
        height="100vh" // Pakai 100vh supaya full satu layar
        background="black"
        imgUrl="/back-foto.png" // Pastikan sudah ada di folder public
        text="RISKIANSYAH"
      />
    </div>
  );
}
