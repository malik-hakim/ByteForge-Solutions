import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Pricing from '../components/Pricing'

function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-950">
        <Hero />
        <Services />
        <Pricing />
      </main>
    </>
  )
}

export default Home