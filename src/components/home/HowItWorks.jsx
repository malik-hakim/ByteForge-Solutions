import { MessageCircle, HandCoins, Hammer, PackageCheck } from 'lucide-react'

const langkah = [
  {
    nomor: '01',
    icon: <MessageCircle size={24} className="text-blue-400" />,
    judul: 'Kirim Tugas',
    deskripsi: 'Chat admin via WhatsApp beserta detail instruksi, format pengumpulan, dan deadline tugasmu.',
  },
  {
    nomor: '02',
    icon: <HandCoins size={24} className="text-blue-400" />,
    judul: 'Deal & DP',
    deskripsi: 'Estimasi harga diberikan secara transparan. Setelah deal, lakukan pembayaran DP untuk mulai pengerjaan.',
  },
  {
    nomor: '03',
    icon: <Hammer size={24} className="text-blue-400" />,
    judul: 'Proses Kilat',
    deskripsi: 'Tim ahli KilatByte mengerjakan tugasmu dengan serius, rapi, dan sesuai instruksi yang diberikan.',
  },
  {
    nomor: '04',
    icon: <PackageCheck size={24} className="text-blue-400" />,
    judul: 'Pelunasan & Terima File',
    deskripsi: 'Cek hasil lewat screenshot atau video, lunasi pembayaran, dan file lengkap langsung dikirimkan.',
  },
]

function HowItWorks() {
  return (
    <section id="howitworks" className="bg-gray-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-medium text-blue-400 border border-blue-800 rounded-full bg-blue-950/50">
            ✦ Alur Kerja
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cara Kerja yang Anti-Ribet
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Cukup 4 langkah mudah dan tugasmu beres. Tidak perlu pusing, kami yang urus semuanya.
          </p>
        </div>

        {/* Langkah */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">

          {/* Garis penghubung desktop */}
          <div className="hidden lg:block absolute top-[100px] left-[14%] right-[14%] h-[2px] bg-blue-800/60 z-0" />

          {langkah.map((item) => (
            <div
              key={item.nomor}
              className="relative z-10 bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-blue-700 transition-colors duration-200 flex flex-col gap-3"
            >
              {/* Nomor & Icon */}
              <div className="flex items-center justify-between">
                <div className="bg-blue-950 border border-blue-800 text-blue-400 text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {item.nomor}
                </div>
                {item.icon}
              </div>

              {/* Teks */}
              <div>
                <h3 className="text-white font-semibold text-base mb-1">{item.judul}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/6283106230170"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Mulai Sekarang via WhatsApp
          </a>
          <p className="text-gray-500 text-sm mt-3">
            Konsultasi gratis, tanpa komitmen apapun.
          </p>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks