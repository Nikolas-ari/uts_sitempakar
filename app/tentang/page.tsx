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
        <h1 className="text-xl font-bold text-black mt-6">
          <h2 >Dibuat Oleh:</h2>
        <p>Nikolas Triputra Mentari</p>
        <p>Ghayana Arum</p>
        </h1>
        

        <Link
          href="/"
         className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:bg-blue-700 transition-all duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
