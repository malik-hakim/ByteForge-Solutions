import { Check } from 'lucide-react'

const paket = [
  {
    nama: 'Starter',
    harga: '50.000',
    deskripsi: 'Cocok untuk tugas sederhana dan individu.',
    fitur: [
      'Tugas 1 halaman / modul',
      'Revisi 1x',
      'Pengerjaan 1-2 hari',
      'Konsultasi via WhatsApp',
    ],
    popular: false,
  },
  {
    nama: 'Standard',
    harga: '150.000',
    deskripsi: 'Paling banyak dipilih untuk tugas menengah.',
    fitur: [
      'Tugas hingga 5 halaman / modul',
      'Revisi 3x',
      'Pengerjaan 2-3 hari',
      'Konsultasi via WhatsApp',
      'Source code disertakan',
      'Dokumentasi singkat',
    ],
    popular: true,
  },
  {
    nama: 'Premium',
    harga: '350.000',
    deskripsi: 'Untuk project besar dan deadline ketat.',
    fitur: [
      'Tugas unlimited modul',
      'Revisi unlimited',
      'Pengerjaan 1-3 hari (prioritas)',
      'Konsultasi via WhatsApp & Video Call',
      'Source code disertakan',
      'Dokumentasi lengkap',
      'Presentasi dibantu',
    ],
    popular: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-medium text-blue-400 border border-blue-800 rounded-full bg-blue-950/50">
            ✦ Harga
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Harga Terjangkau, Hasil Maksimal
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget kamu. Bisa juga custom, hubungi kami dulu!
          </p>
        </div>

        {/* Kartu Paket */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paket.map((item) => (
            <div
              key={item.nama}
              className={`relative rounded-xl p-8 border flex flex-col ${
                item.popular
                  ? 'bg-blue-600 border-blue-500'
                  : 'bg-gray-950 border-gray-800'
              }`}
            >
              {/* Badge Popular */}
              {item.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-bold px-4 py-1 rounded-full">
                  Paling Populer
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${item.popular ? 'text-white' : 'text-white'}`}>
                  {item.nama}
                </h3>
                <p className={`text-sm mb-4 ${item.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                  {item.deskripsi}
                </p>
                <div className="flex items-end gap-1">
                  <span className={`text-sm font-medium ${item.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                    Rp
                  </span>
                  <span className={`text-4xl font-bold ${item.popular ? 'text-white' : 'text-white'}`}>
                    {item.harga}
                  </span>
                  <span className={`text-sm mb-1 ${item.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                    /tugas
                  </span>
                </div>
              </div>

              {/* Fitur */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {item.fitur.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${item.popular ? 'text-white' : 'text-blue-400'}`}
                    />
                    <span className={`text-sm ${item.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tombol */}
              <a
                href="#contact"
                className={`block text-center font-semibold py-3 rounded-lg transition-colors duration-200 ${
                  item.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-500'
                }`}
              >
                Order Sekarang
              </a>
            </div>
          ))}
        </div>

        {/* Catatan */}
        <p className="text-center text-gray-500 text-sm mt-10">
          Harga bisa berbeda tergantung tingkat kesulitan dan deadline. 
          <a href="#contact" className="text-blue-400 hover:text-blue-300 ml-1">
            Konsultasi gratis dulu!
          </a>
        </p>

      </div>
    </section>
  )
}

export default Pricing