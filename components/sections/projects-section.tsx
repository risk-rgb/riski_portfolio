"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiExternalLink, FiGithub, FiX } from "react-icons/fi"; // Pastiin react-icons udah keinstall

// DATA PROJECT: Gua tambahin array 'features' biar lu bisa pamer spek teknis
const MY_PROJECTS = [
  {
    title: "Photocopy System",
    client: "CV SS BERSAUDARA",
    tech: ["PHP", "PostgreSQL", "Tailwind", "Dompdf"],
    shortDesc:
      "Sistem Manajemen Informasi Mesin Fotokopi Dengan Fitur Permintaan Sparepart & Algoritma EOQ.",
    longDesc:
      "Sistem ini dirancang khusus untuk mengatasi bottleneck pada manajemen inventaris di lini produksi industri. Berjalan di atas ekosistem PHP dan PostgreSQL yang kokoh untuk menangani ribuan baris data transaksi harian.",
    features: [
      "Implementasi Algoritma EOQ (Economic Order Quantity)",
      "Deteksi otomatis library Dompdf untuk ekspor laporan PDF",
      "Sistem tracking permintaan sparepart real-time",
      "Role-Based Access Control (Admin & Operator)",
    ],
    image: "/logo.png",
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "Digital Invitation",
    client: "Shopee Ecosystem",
    tech: ["Marketing", "Design", "E-Commerce"],
    shortDesc:
      "Platform penjualan produk digital terintegrasi dengan Shopee Affiliate.",
    longDesc:
      "Project kewirausahaan yang berfokus pada desain undangan digital premium. Memanfaatkan ekosistem Shopee untuk manajemen transaksi, tracking resi digital, dan konversi pelanggan.",
    features: [
      "Integrasi workflow Shopee Affiliate",
      "Template desain responsif & premium",
      "Otomatisasi pengiriman produk digital",
      "Analitik konversi penjualan",
    ],
    image: "/foto-2.jpeg",
    demoLink: "#",
    repoLink: "#",
  },
];

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<
    (typeof MY_PROJECTS)[0] | null
  >(null);

  // Fungsi untuk ngunci scroll body pas modal kebuka
  React.useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeProject]);

  return (
    <section
      id="projects-section"
      className="relative bg-background py-24 md:py-32 border-t border-border overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* BAGIAN KIRI: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 text-left z-10">
            <p className="text-zinc-500 text-xs uppercase tracking-[0.4em] mb-4">
              Engineering Output
            </p>
            <h2 className="text-foreground text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6 transition-colors duration-500">
              Featured <br />
              <span className="text-zinc-500 dark:text-zinc-700">Projects</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Kumpulan arsitektur sistem, aplikasi mobile, dan eksplorasi
              digital. Berfokus pada logika backend yang tangguh dan pengalaman
              UI/UX yang presisi.
            </p>
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest animate-pulse border-l-2 border-zinc-500 pl-3">
              * Klik pada kartu untuk melihat spesifikasi detail
            </p>
          </div>

          {/* BAGIAN KANAN: Grid Card */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-20">
            {MY_PROJECTS.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onClick={() => setActiveProject(proj)}
                className="group relative h-[320px] md:h-[380px] w-full rounded-2xl overflow-hidden cursor-pointer bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={proj.image}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  alt={proj.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 flex flex-col justify-end transition-colors duration-500">
                  <span className="text-blue-500 font-mono text-[10px] uppercase tracking-widest mb-3 border border-blue-500/30 w-fit px-2 py-1 rounded bg-blue-500/10 backdrop-blur-md">
                    {proj.client}
                  </span>
                  <h3 className="text-foreground font-black text-2xl uppercase italic leading-tight mb-2 transition-colors duration-500">
                    {proj.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 transition-colors duration-500">
                    {proj.shortDesc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MEGA MODAL (SPECIFIC & DETAILED) --- */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-background/80 flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.95, opacity: 0 }}
              className="bg-card border border-border w-full max-w-6xl h-[90vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative transition-colors duration-500"
            >
              {/* Tombol Close */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 md:left-4 md:right-auto z-50 w-10 h-10 flex items-center justify-center bg-background/50 backdrop-blur-md hover:bg-foreground text-foreground hover:text-background rounded-full transition-colors border border-border"
              >
                <FiX className="text-xl" />
              </button>

              {/* SISI KIRI MODAL: Gambar (Sticky) */}
              <div className="w-full md:w-2/5 h-64 md:h-full relative bg-zinc-900 border-r border-border shrink-0">
                <img
                  src={activeProject.image}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity"
                  alt="Detail"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card md:from-transparent to-transparent md:to-card/20" />
              </div>

              {/* SISI KANAN MODAL: Area Spesifikasi (Bisa di-Scroll) */}
              <div className="w-full md:w-3/5 p-6 md:p-12 overflow-y-auto bg-card">
                <p className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-3">
                  {activeProject.client}
                </p>
                <h2 className="text-foreground text-4xl md:text-5xl font-black uppercase italic mb-8 leading-tight transition-colors duration-500">
                  {activeProject.title}
                </h2>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 bg-background border border-border text-foreground text-xs font-mono rounded-md shadow-sm transition-colors duration-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Deskripsi Panjang */}
                <div className="mb-10">
                  <h4 className="text-foreground text-lg font-bold mb-3 uppercase tracking-wider">
                    Project Overview
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed transition-colors duration-500">
                    {activeProject.longDesc}
                  </p>
                </div>

                {/* Key Features (Daftar Fitur Spesifik) */}
                <div className="mb-12">
                  <h4 className="text-foreground text-lg font-bold mb-4 uppercase tracking-wider">
                    Key Features & Specs
                  </h4>
                  <ul className="space-y-3">
                    {activeProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FiCheckCircle className="text-blue-500 mt-1 shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons (Opsional: Demo / Github) */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                  <a
                    href={activeProject.demoLink}
                    className="flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold text-sm uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
                  >
                    Live Demo <FiExternalLink />
                  </a>
                  <a
                    href={activeProject.repoLink}
                    className="flex items-center gap-2 px-6 py-3 bg-background border border-border text-foreground font-bold text-sm uppercase tracking-wider rounded hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                  >
                    Source Code <FiGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
