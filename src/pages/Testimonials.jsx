"use client"

import { useState, useEffect } from "react"
import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "I thank you for the professional and kind assistance you provided during our mission in India, Mr. Luca di Montezemolo (CEO of Ferrari) & the whole Italian delegation were very glad about your work.",
    name: "Patriza Barboni",
    location: "Rome Italy",
  },
  {
    id: 2,
    quote: "Good Service & lovely people. You made my trip an excellent experience. Thanks for your help.",
    name: "Anthony Westbrook",
    location: "California USA",
  },
  {
    id: 3,
    quote:
      "TIME crafted an absolutely extraordinary journey through Rajasthan for our family. Every detail was impeccable, from the heritage palace stays to our private guide who became like family.",
    name: "Sarah Mitchell",
    location: "New York, USA",
  },
  {
    id: 4,
    quote:
      "The level of personalization and attention to detail was remarkable. Our Nepal trekking expedition was perfectly organized, and the team's local expertise made all the difference.",
    name: "James Crawford",
    location: "London, UK",
  },
  {
    id: 5,
    quote:
      "As a luxury travel advisor, I've worked with many DMCs, but TIME stands apart. Their professionalism, creativity, and genuine passion for their destinations consistently exceed our clients' expectations.",
    name: "Maria Santos",
    location: "Luxury Travel Advisor, Spain",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <>
      <PageHeader title="Testimonials" image="/yoga-retreat-kerala-wellness-spa.jpg" />

      {/* Video Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                src="/maldives-overwater-villa-luxury-travel-editorial-s.jpg"
                alt="Testimonial Video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-coral-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">T</span>
                    </div>
                    <span className="text-white font-semibold">Time Tours</span>
                    <button className="ml-4 text-white/80 hover:text-white text-sm flex items-center gap-1">
                      Copy link
                    </button>
                  </div>
                  <button className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center hover:bg-coral-600 transition-colors">
                    <Play size={28} className="text-white ml-1" />
                  </button>
                  <p className="text-white/80 text-sm mt-4">Watch on YouTube</p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper>
            <div className="text-center">
              {/* Testimonial Icon */}
              <div className="w-20 h-20 bg-coral-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="2" />
                  <circle cx="12" cy="8" r="3" fill="white" />
                  <path d="M6 18c0-3 3-5 6-5s6 2 6 5" fill="white" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="relative">
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="px-12">
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 min-h-[120px]">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <p className="font-script text-2xl text-charcoal">
                    {testimonials[currentTestimonial].name} ({testimonials[currentTestimonial].location})
                  </p>
                </div>

                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-teal-500" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
