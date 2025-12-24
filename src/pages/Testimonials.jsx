"use client"

import { useState, useEffect } from "react"
import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

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

const partners = [
  { name: "Tourism of India", logo: "/tourism-india-logo.jpg" },
  { name: "IATO", logo: "/iato-travel-logo.jpg" },
  { name: "ASTA", logo: "/asta-travel-logo.jpg" },
  { name: "USTOA", logo: "/ustoa-travel-logo.jpg" },
  { name: "TAAI", logo: "/taai-travel-logo.jpg" },
  { name: "SITE", logo: "/site-events-logo.jpg" },
  { name: "PATA", logo: "/pata-asia-travel-logo.jpg" },
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

      {/* Testimonials Carousel */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper>
            <div className="relative text-center">
              {/* Testimonial Icon */}
              <div className="w-20 h-20 mx-auto mb-8 bg-orange-100 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white">
                  <Quote size={24} />
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>

              {/* Testimonial Content */}
              <div className="px-12">
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 min-h-[120px]">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <p className="font-script text-2xl text-charcoal">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-500 text-sm">({testimonials[currentTestimonial].location})</p>
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

      {/* Partners Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-12 w-auto" />
              </div>
            ))}
          </div>
          <div className="text-right mt-4">
            <span className="text-teal-500 text-sm font-medium">TOP</span>
          </div>
        </div>
      </section>
    </>
  )
}
