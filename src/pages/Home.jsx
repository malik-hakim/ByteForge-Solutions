import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'

function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-950">
        <Hero />
        <Services />
      </main>
    </>
  )
}

export default Home