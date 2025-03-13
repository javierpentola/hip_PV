import Header from "./components/header"
import Hero from "./components/hero"
import AboutUs from "./components/about-us"
import Services from "./components/services"
import HowItWorks from "./components/how-it-works"
import Testimonials from "./components/testimonials"
import FAQ from "./components/faq"
import CTA from "./components/cta"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

