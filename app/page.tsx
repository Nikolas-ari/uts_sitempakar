"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className="font-sans bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex flex-col justify-center items-center overflow-hidden relative px-6"
    >
      {/* Background Blur Circle */}
      <div className="absolute w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-300 rounded-full blur-2xl opacity-40 bottom-10 right-10 animate-pulse"></div>

      {/* Content */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl w-full animate-fadeInUp">
        {/* Gambar kiri */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="/dokter.png"
            alt="Sistem Pakar"
            className="w-80 md:w-[420px] rounded-3xl"
          />
        </div>

        {/* Teks kanan */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-blue-600 text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Sistem Pakar <br />
            <span className="text-blue-800">Deteksi Penyakit Manusia</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
            Website ini membantu menganalisis gejala yang kamu alami untuk mendeteksi penyakit
            secara cepat, akurat, dan berbasis kecerdasan sistem pakar.
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4">
            <Link
              href="/diagnosa"
              className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:bg-blue-700 transition-all duration-300"
            >
              Mulai Diagnosa
            </Link>
            <Link
              href="/tentang"
              className="px-8 py-4 border border-blue-600 text-blue-600 rounded-full text-lg font-medium hover:bg-blue-50 transition-all duration-300"
            >
              Tentang Sistem
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-5 text-gray-400 text-sm tracking-wide">
        © 2025 Sistem Pakar
      </footer>
    </main>
  );
}
