"use client";

import { useEffect, useState } from "react";

export default function HasilPage() {
  const [hasil, setHasil] = useState<{ penyakit: string; solusi: string } | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("hasilPenyakit");
    if (data) setHasil(JSON.parse(data));
  }, []);

  if (!hasil) return <p className="text-center mt-10">Tidak ada hasil.</p>;

  return (
    <main className="max-w-lg mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Hasil Diagnosa</h1>
      <p className="text-xl mb-2">Penyakit: {hasil.penyakit}</p>
      <p className="text-gray-700">Solusi: {hasil.solusi}</p>
    </main>
  );
}
