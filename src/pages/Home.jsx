import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import WhyUs from '../components/home/WhyUs'
import Services from '../components/home/Services'
import Pricing from '../components/home/Pricing'

function Home() {
  return (
    <>
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