"use client"

import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Destinations from "./pages/Destinations"
import DestinationDetail from "./pages/DestinationDetail"
import Services from "./pages/Services"
import Experiences from "./pages/Experiences"
import MiceCorporate from "./pages/MiceCorporate"
import Partners from "./pages/Partners"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import TourPackages from "./pages/TourPackages"
import TourPackageDetail from "./pages/TourPackageDetail"
import FAQs from "./pages/FAQs"
import Testimonials from "./pages/Testimonials"
import Stories from "./pages/Stories"
import StoryDetail from "./pages/StoryDetail"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    })

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/mice-corporate" element={<MiceCorporate />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/tour-packages/:id" element={<TourPackageDetail />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:slug" element={<StoryDetail />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
