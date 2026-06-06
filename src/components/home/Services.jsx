import { Globe, Smartphone, Database, Code2, FileText, Shield } from 'lucide-react'

const layanan = [
  {
    icon: <Globe size={28} className="text-blue-400" />,
    judul: 'Web Development',
    deskripsi: 'Pembuatan website statis maupun dinamis, landing page, toko online, hingga sistem informasi berbasis web.',
  },
  {
    icon: <Smartphone size={28} className="text-blue-400" />,
    judul: 'Mobile App',
    deskripsi: 'Pengerjaan tugas aplikasi mobile menggunakan Flutter, React Native, atau Android Studio.',
  },
  {
    icon: <Database size={28} className="text-blue-400" />,
    judul: 'Database',
    deskripsi: 'Desain ERD, normalisasi, query SQL, dan implementasi database MySQL, PostgreSQL, maupun MongoDB.',
  },
  {
    icon: <Code2 size={28} className="text-blue-400" />,
    judul: 'Pemrograman',
    deskripsi: 'Tugas algoritma, struktur data, OOP, dan pemrograman berbagai bahasa seperti Python, Java, C++.',
  },
  {
    icon: <FileText size={28} className="text-blue-400" />,
    judul: 'Laporan & Dokumentasi',
    deskripsi: 'Penulisan laporan praktikum, dokumentasi project, proposal skripsi, dan jurnal ilmiah IT.',
  },
  {
    icon: <Shield size={28} className="text-blue-400" />,
    judul: 'Keamanan Jaringan',
    deskripsi: 'Tugas jaringan komputer, konfigurasi router, keamanan sistem, dan analisis jaringan.',
  },
]

function Services() {
  return (
    <section id="services" className="bg-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-medium text-blue-400 border border-blue-800 rounded-full bg-blue-950/50">
            ✦ Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Apa yang Bisa Kami Bantu? <span className="text-blue-500">Lihat Layanan Kami</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Kami siap bantu semua jenis tugas IT kuliah kamu dengan hasil yang berkualitas dan tepat waktu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {layanan.map((item) => (
            <div
              key={item.judul}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-700 transition-colors duration-200"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{item.judul}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.deskripsi}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services