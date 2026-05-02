"use client";
import React from "react";
import { motion } from "framer-motion";

export const VideoShowreel = () => {
  return (
    <section className="relative w-full bg-background overflow-hidden border-b border-border transition-colors duration-500 py-0">
      {/* 
        FIX QC: 
        1. Hapus h-[50vh] & h-[80vh] biar nggak nge-crop video.
        2. Pakai 'aspect-video' biar proporsi 16:9 asli video terjaga 100%.
        3. Tambah 'max-w-6xl mx-auto' biar videonya mentok di ukuran wajar & elegan di layar PC.
      */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-6xl mx-auto aspect-video bg-zinc-950 group shadow-2xl"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          controls
          // object-cover di sini aman karena containernya udah aspect-video
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
        >
          <source src="/showcase.mp4" type="video/mp4" />
        </video>

        {/* Shadow tipis di atas dan bawah biar nyatu sama halaman lu */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20 pointer-events-none" />
      </motion.div>
    </section>
  );
};
