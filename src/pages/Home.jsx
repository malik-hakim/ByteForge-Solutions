import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import Hero from '../components/home/Hero'
import WhyUs from '../components/home/WhyUs'
import Services from '../components/home/Services'
import Pricing from '../components/home/Pricing'

function Home() {
  return (
    <>
      <SEO
        title="Jasa Joki Tugas IT Profesional"
        description="ByteForge Solutions siap bantu kerjain tugas kuliah IT kamu. Web, mobile, database, laporan, dan lainnya. Cepat, rapi, tepat waktu."
        keywords="joki tugas IT, jasa coding, joki web development, joki database, joki mobile app, tugas kuliah IT"
        url="/"
      />
      <Navbar />
      <main className="bg-gray-950">
        <Hero />
        <WhyUs />
        <Services />
        <Pricing />
      </main>
    </>
  )
}

export default Home