"use client"

import { useState, useEffect } from "react"

const slides = [
  {
    image: "/indian-heritage-fort-rajasthan-luxury.jpg",
    location: "Agra Fort",
  },
  {
    image: "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg",
    location: "Taj Mahal",
  },
  {
    image: "/jaipur-palace-rajasthan-pink-city-architecture.jpg",
    location: "Jaipur Palace",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[45vh] min-h-[320px] sm:h-[50vh] sm:min-h-[400px] md:h-[60vh] flex items-end overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.location} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 w-full pb-8 sm:pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            {/* Location Title - responsive font sizes */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-script text-white drop-shadow-lg">
                {slides[currentSlide].location}
              </h1>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-1.5 sm:gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
