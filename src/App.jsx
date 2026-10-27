import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Courses from './sections/Courses'
import Batches from './sections/Batches'
import Founders from './sections/Founders'
import Why from './sections/Why'
import Enquiry from './sections/Enquiry'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><Courses /><Batches /><Why /><Founders /><Enquiry /><Contact />
      </main>
      <Footer />
    </>
  )
}
