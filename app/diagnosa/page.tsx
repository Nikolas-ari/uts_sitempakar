"use client";

import { useState } from "react";
import { supabase } from "./../../lib/supabase";


export default function DiagnosaPage() {
  const [nama, setNama] = useState("");
  const [gejala, setGejala] = useState<string[]>([]);
  const [hasil, setHasil] = useState<{ penyakit: string; solusi: string } | null>(null);

  const daftarGejala = [
    { id: "G01", nama: "Demam Tinggi" },
    { id: "G02", nama: "Sakit Kepala" },
    { id: "G03", nama: "Nyeri Otot" },
    { id: "G04", nama: "Ruam Kulit" },
    { id: "G05", nama: "Mual / Muntah" },
    { id: "G06", nama: "Batuk" },
    { id: "G07", nama: "Pilek" },
    { id: "G08", nama: "Sakit Tenggorokan" },
    { id: "G09", nama: "Lemas" },
    { id: "G10", nama: "Keringat Dingin" },
  ];

  const rules = [
    { gejala: ["G01", "G02"], penyakit: "Flu Biasa", solusi: "Istirahat dan minum air putih." },
    { gejala: ["G01", "G04", "G03"], penyakit: "Demam Berdarah", solusi: "Segera ke dokter, lakukan tes darah." },
    { gejala: ["G01", "G05"], penyakit: "Malaria", solusi: "Konsumsi obat sesuai resep dokter." },
    { gejala: ["G06", "G07", "G08"], penyakit: "Batuk Pilek", solusi: "Minum vitamin dan istirahat cukup." },
  ];

  const toggleGejala = (id: string) => {
    setGejala((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nama || gejala.length === 0) {
      alert("Isi nama dan pilih minimal satu gejala!");
      return;
    }

    let bestMatch = null;
    let maxMatch = 0;

    for (const rule of rules) {
      const match = rule.gejala.filter((g) => gejala.includes(g)).length;
      if (match > maxMatch) {
        maxMatch = match;
        bestMatch = rule;
      }
    }

    const hasilDiagnosa = bestMatch
      ? { penyakit: bestMatch.penyakit, solusi: bestMatch.solusi }
      : { penyakit: "Tidak diketahui", solusi: "Silakan konsultasi ke dokter." };

    setHasil(hasilDiagnosa);

    const { error } = await supabase.from("diagnosa").insert([
      {
        nama_user: nama,
        gejala_terpilih: gejala.join(", "),
        penyakit_hasil: hasilDiagnosa.penyakit,
        solusi: hasilDiagnosa.solusi,
      },
    ]);

    if (error) {
      console.error("Gagal simpan ke Supabase:", error.message);
      alert("❌ Gagal menyimpan ke database!");
    } else {
      alert("✅ Hasil diagnosa berhasil disimpan ke database!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Form Diagnosa */}
        <div className="flex-1 bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-2xl space-y-6 animate-fadeIn">
          <h2 className="text-3xl font-bold text-blue-700 text-center md:text-left">
            Pilih Gejala yang Kamu Alami
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nama kamu"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="text-black w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              {daftarGejala.map((g) => (
                <label
                  key={g.id}
                  className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
                >
                  <input
                    type="checkbox"
                    checked={gejala.includes(g.id)}
                    onChange={() => toggleGejala(g.id)}
                    className="accent-blue-600"
                  />
                  {g.nama}
                </label>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow"
              >
                Analisis Sekarang
              </button>
              <button
                type="button"
                onClick={() => (window.location.href = "/")}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 hover:scale-105 transition-all duration-300 shadow"
              >
                Kembali ke Beranda
              </button>
            </div>
          </form>

          {hasil && (
            <div className="mt-6 p-4 bg-blue-50 rounded-xl shadow-inner text-center animate-fadeIn">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Hasil Diagnosa
              </h3>
              <h4 className="text-lg text-black mb-2">
                <p>
                <strong>Penyakit:</strong> {hasil.penyakit}
              </p>
              <p>
                <strong>Solusi:</strong> {hasil.solusi}
              </p>
              </h4>
              
            </div>
          )}
        </div>

        {/* Gambar kanan */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/dokter.png"
            alt="Diagnosa"
            className="w-80 md:w-96 rounded-2xl "
          />

        </div>
      </div>
    </div>
  );
}
