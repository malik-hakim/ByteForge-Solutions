function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">

        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1.5 text-xs font-medium text-blue-400 border border-blue-800 rounded-full bg-blue-950/50">
          ✦ Jasa Pengerjaan Tugas IT Profesional
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Tugas IT Menumpuk?{' '}
          <span className="text-blue-500">Serahkan ke Kami</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
          KilatByte Solutions siap bantu kerjain tugas kuliah IT kamu —
          dari web development, mobile app, database, hingga laporan. Cepat, rapi, dan tepat waktu.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg px-6 py-3 text-center transition-colors duration-200"
          >
            Order Sekarang
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto border border-blue-600 text-blue-200 hover:text-white hover:bg-blue-600 rounded-lg px-6 py-3 text-center transition-colors duration-200"
          >
            Lihat Layanan
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
