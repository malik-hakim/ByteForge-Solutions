import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-950">
        <Hero />
      </main>
    </>
  )
}

export default Home