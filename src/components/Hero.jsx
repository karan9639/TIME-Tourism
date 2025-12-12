"use client"

import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/luxury-taj-mahal-palace-india-golden-hour-travel-e.jpg" alt="Taj Mahal at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-sand-200 text-sm tracking-[0.3em] uppercase mb-6 font-medium">
          24 Years of Excellence
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-6 leading-tight text-balance">
          Extraordinary Journeys
          <br />
          <span className="italic font-normal">Across the Subcontinent</span>
        </h1>
        <p className="text-lg sm:text-xl text-sand-100 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Crafting bespoke travel experiences in India, Nepal, Bhutan, Sri Lanka & Maldives with unparalleled expertise
          and personalized service.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/destinations"
            className="px-8 py-4 bg-terracotta-500 text-white font-medium tracking-wide hover:bg-terracotta-600 transition-all duration-300 min-w-[200px]"
          >
            Explore Destinations
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-transparent text-white font-medium tracking-wide border border-white/50 hover:bg-white hover:text-charcoal transition-all duration-300 min-w-[200px]"
          >
            Plan Your Journey
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
