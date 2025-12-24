"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"

const slides = [
  {
    image:
      "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766550651/taj-mahal-india-luxury-travel-editorial-golden-hou_jjflsn.jpg",
    title: "Extraordinary Journeys",
    titleLine2: "Across the Subcontinent",
    subtitle:
      "Crafting bespoke travel experiences to India, Nepal, Bhutan, Sri Lanka & Maldives with unparalleled expertise and personalized service.",
  },
  {
    image:
      "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766550351/bhutan11650x650_xfehye.jpg",
    title: "Discover the Magic",
    titleLine2: "of Bhutan",
    subtitle:
      "Experience the spiritual beauty and ancient traditions of the Land of the Thunder Dragon.",
  },
  {
    image:
      "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766550632/nepal-himalaya-mountains-luxury-travel-editorial-p_ogvx8w.jpg",
    title: "Himalayan Adventures",
    titleLine2: "Await You",
    subtitle:
      "Trek through majestic peaks and discover the cultural treasures of Nepal.",
  },
];


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-terracotta-300 tracking-[0.3em] text-sm uppercase mb-4">Extraordinary Experiences</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-script text-white mb-2 leading-tight">
          {slides[currentSlide].title}
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-script text-white mb-6">
          {slides[currentSlide].titleLine2}
        </h2>
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {slides[currentSlide].subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/destinations"
            className="px-8 py-3 bg-terracotta-500 text-white font-medium rounded hover:bg-terracotta-600 transition-colors"
          >
            Explore Destinations
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded border border-white/30 hover:bg-white/20 transition-colors"
          >
            Plan Your Journey
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-terracotta-400 w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
