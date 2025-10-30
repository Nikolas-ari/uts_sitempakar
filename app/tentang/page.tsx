import Link from "next/link";

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl space-y-4 animate-fadeIn">
        <h1 className="text-4xl font-bold text-blue-700">Tentang Sistem Pakar</h1>
        <p className="text-gray-600 leading-relaxed">
          Sistem pakar ini dirancang untuk membantu pengguna dalam mendeteksi kemungkinan penyakit berdasarkan gejala yang mereka alami.
          Dengan menggunakan basis pengetahuan yang disimpan di <strong>Supabase</strong>, sistem dapat menganalisis dan memberikan hasil diagnosa dengan cepat dan akurat.
        </p>
        <h2 className="font-semibold text-lg mt-6">Dibuat Oleh:</h2>
        <p>Nikolas Triputra Mentari (2301020013)</p>
        <p>Ghayana Arum</p>

        <Link
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
