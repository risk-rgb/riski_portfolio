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
            Bekerja di{" "}
            <span className="text-foreground font-bold underline decoration-zinc-700 transition-colors duration-500">
              PT. Haeng Nam Sejahtera Indonesia (PTHSI)
            </span>
            Memastikan kepatuhan standar mutu melalui inspeksi presisi, analisis
            defect, dan implementasi solusi perbaikan berkelanjutan
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
      // Tambahan Section Drafter Lu!
      title: "2019 - 2022",
      content: (
        <div className="relative">
          <h3 className="text-xl md:text-3xl font-black text-foreground uppercase italic tracking-tighter mb-4 transition-colors duration-500">
            Drafter Engineering & Quality Control
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base mb-6 leading-relaxed transition-colors duration-500">
            Sebelum terjun ke dunia IT, gua pernah jadi drafter di (AFT)
            perusahaan konstruksi selama 2 tahun. Bertanggung jawab untuk
            membuat kebutuhan gambar kerja shop drawing & asbuilt drawing untuk
            proyek-proyek konstruksi besar. Di sini gua belajar gimana
            pentingnya detail, presisi, dan kolaborasi lintas tim untuk
            memastikan proyek berjalan lancar tanpa hambatan.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {/* Siapin 1 foto pas lu lagi jadi drafter atau foto blueprint */}
            <img
              src="/aft.jpg" // Ganti sama nama file foto drafter lu nanti
              alt="Drafting Work"
              className="h-32 w-full rounded-lg object-cover border border-border grayscale hover:grayscale-0 transition-all duration-500 md:h-44 lg:h-64"
            />
            <img
              src="/foto-4.jpg" // Ganti sama nama file foto drafter lu nanti
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
            Mahasiswa Teknik Informatika di{" "}
            <span className="text-foreground font-bold transition-colors duration-500">
              Universitas Dian Nusantara
            </span>
            Disini saya mendalami ilmu komputer, pemrograman, dan teknologi
            informasi. Selain itu, saya juga aktif dalam organisasi kampus
            seperti HIMTI (Himpunan Mahasiswa Teknik Informatika) yang
            memberikan pengalaman berharga dalam kepemimpinan dan kerja tim.
            Selama kuliah, saya juga mengikuti berbagai proyek dan kompetisi
            yang memperluas pengetahuan saya di bidang teknologi.
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
            SMK Muhammadiyah 1 Cileungsi -Teknik Instalasi Tenaga Listrik
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base mb-6 leading-relaxed transition-colors duration-500">
            Lulusan SMK dengan jurusan Teknik Instalasi Tenaga Listrik. Di sini
            saya mendapatkan dasar-dasar pengetahuan tentang listrik, instalasi,
            dan pemeliharaan sistem listrik. selain itu saya mehami sistem
            stardelta yang digunakan untuk menghidupkan motor listrik.
            pengalaman ini dan plc omron yang saya pelajari di sekolah
            memberikan dasar untuk memahami konsep-konsep teknis yang saya
            gunakan dalam pekerjaan saya saat ini.
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
    // FIX: Hapus class "dark" yang nyelip di belakang, biarkan bg-background yang bekerja
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
