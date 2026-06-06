import { Zap, Shield, RefreshCw, HeadphonesIcon } from 'lucide-react'

const alasan = [
  {
    icon: <Zap size={28} className="text-blue-400" />,
    judul: 'Pengerjaan Cepat',
    deskripsi: 'Kami menghormati deadlinemu. Tugas selesai tepat waktu, bahkan untuk deadline mepet sekalipun.',
  },
  {
    icon: <Shield size={28} className="text-blue-400" />,
    judul: 'Kerahasiaan Terjamin',
    deskripsi: 'Identitas, nama kampus, dan tugasmu 100% aman. Tidak akan pernah dipublikasikan ke siapapun.',
  },
  {
    icon: <RefreshCw size={28} className="text-blue-400" />,
    judul: 'Revisi Gratis',
    deskripsi: 'Hasil belum sesuai instruksi? Tenang, kami jamin revisi gratis sampai kamu puas.',
  },
  {
    icon: <HeadphonesIcon size={28} className="text-blue-400" />,
    judul: 'Konsultasi Mudah',
    deskripsi: 'Cukup chat admin via WhatsApp. Respon cepat, ramah, dan siap bantu kapanpun kamu butuh.',
  },
]

function WhyUs() {
  return (
    <section id="whyus" className="bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-medium text-blue-400 border border-blue-800 rounded-full bg-blue-950/50">
            ✦ Kenapa Kami?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kenapa Memilih KilatByte?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Bukan sekadar joki biasa. Kami hadir sebagai solusi akademik yang profesional, aman, dan terpercaya.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {alasan.map((item) => (
            <div
              key={item.judul}
              className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-blue-700 transition-colors duration-200"
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

export default WhyUs