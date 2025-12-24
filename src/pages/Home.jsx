"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import RevealWrapper from "../components/RevealWrapper"
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Briefcase,
  Gem,
  Users,
  Leaf,
  Quote,
  ArrowRight,
  Clock,
  Award,
  Smile,
  CheckCircle,
} from "lucide-react"

// Destinations data
const destinations = [
  {
    name: "India",
    image:
      "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766550170/GoldenTriangle_rl2lny.jpg",
  },
  {
    name: "Nepal",
    image:
      "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766550632/nepal-himalaya-mountains-luxury-travel-editorial-p_ogvx8w.jpg",
  },
  {
    name: "Bhutan",
    image:
      "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766550630/paro-taktsang-bhutan-monastery-clouds-mountains_esh589.jpg",
  },
  {
    name: "Sri Lanka",
    image:
      "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766574588/sri-lanka-sigiriya-rock-fortress-luxury-travel-edi_k9nd4l.jpg",
  },
  {
    name: "Maldives",
    image:
      "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766550626/maldives-overwater-villa-luxury-travel-editorial-s_ebozac.jpg",
  },
];

// Services data
const services = [
  {
    icon: Briefcase,
    title: "Tailor-Made",
    description:
      "From corporate to individual, our experienced team provides customized travel solutions to your unique preferences.",
  },
  {
    icon: MapPin,
    title: "Escorted Tours",
    description:
      "Journey with expert guides offering exclusive experiences in boutique hotels, magnificent mansions and custom services.",
  },
  {
    icon: Gem,
    title: "Luxury Collection",
    description:
      "Curated for the discerning traveler, destinations, and unforgettable experiences in the most exclusive corners of the Indian Subcontinent.",
  },
  {
    icon: Users,
    title: "Local Experts",
    description:
      "Passionate about culture, tradition, local tales, and more. Immersive experiences designed just for you and tailored for your interests.",
  },
  {
    icon: Leaf,
    title: "Eco & Wellness",
    description:
      "Rejuvenate yourself with authentic Ayurvedic retreats, serene wellness centers, and eco-friendly stays in nature's paradise.",
  },
  {
    icon: Award,
    title: "M.I.C.E",
    description: "Meetings, incentives, conferences, and exhibitions delivered with precision and creativity.",
  },
]

// Experiences data
const experiences = [
  {
    title: "Heritage Palaces & Royal Stays",
    image:
      "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766550608/indian-heritage-fort-rajasthan-luxury_k1mede.jpg",
    category: "Luxury",
  },
  {
    title: "Wildlife Safaris",
    image:
      "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766550663/tiger-safari-india-wildlife-jungle_abwspy.jpg",
    category: "Adventure",
  },
  {
    title: "Spiritual Journeys",
    image:
      "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766550671/varanasi-ghats-sunrise-india-spiritual-travel-phot_gngy4n.jpg",
    category: "Culture",
  },
];

// Testimonials
const testimonials = [
  {
    quote:
      "TIME crafted an absolutely extraordinary journey through Rajasthan for our family. Every detail was impeccable, from the heritage hotels to the private guided tours.",
    name: "Sarah Mitchell",
    location: "New York, USA",
  },
  {
    quote:
      "The level of personalization and attention to detail exceeded all our expectations. Our Nepal adventure was truly once-in-a-lifetime.",
    name: "James Crawford",
    location: "London, UK",
  },
  {
    quote:
      "For a family-sized group, the service could not have been better. We felt cared for every step of the journey through the majestic Himalayas.",
    name: "Maria Santos",
    location: "Madrid, Spain",
  },
]

// Stats
const stats = [
  { icon: Clock, value: "24+", label: "Years Experience" },
  { icon: MapPin, value: "5", label: "Destinations" },
  { icon: Smile, value: "10,000+", label: "Happy Travelers" },
  { icon: CheckCircle, value: "100%", label: "Personalized Service" },
]

export default function Home() {
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
      <Hero />

      {/* Welcome Section */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <p className="text-terracotta-500 tracking-[0.2em] text-sm uppercase mb-4">Welcome to TIME</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6 leading-tight">
              Crafting Dreams Into
              <br />
              Extraordinary Journeys
            </h2>
            <p className="text-taupe-600 leading-relaxed max-w-3xl mx-auto">
              For more than 24 years, TIME – Tourism India Management Enterprise has been turning dreams into
              extraordinary travel experiences across the Indian Subcontinent. We believe every journey should be
              exceptional, every Life Well Travelled.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-terracotta-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon size={28} className="mx-auto mb-2 opacity-80" />
                <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <p className="text-terracotta-500 tracking-[0.2em] text-sm uppercase mb-4">Explore</p>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Our Destinations</h2>
            <p className="text-taupe-600 max-w-2xl mx-auto">
              Five extraordinary countries. Infinite possibilities. Discover the wonders of the Indian Subcontinent.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {destinations.map((dest, index) => (
                <Link key={index} to="/destinations" className="group relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={dest.image || "/placeholder.svg"}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{dest.name}</p>
                    <p className="text-white/70 text-sm flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Discover <ArrowRight size={14} />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </RevealWrapper>

          <div className="text-center mt-8">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-terracotta-500 font-medium hover:text-terracotta-600 transition-colors"
            >
              View All Destinations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <p className="text-terracotta-500 tracking-[0.2em] text-sm uppercase mb-4">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Our Services</h2>
            <p className="text-taupe-600 max-w-2xl mx-auto">
              From bespoke itineraries to corporate events, we deliver exceptional service across every aspect of
              travel.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon size={28} className="text-terracotta-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">{service.title}</h3>
                  <p className="text-taupe-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-charcoal text-white font-medium rounded hover:bg-charcoal/90 transition-colors"
            >
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Curated Experiences Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <p className="text-terracotta-500 tracking-[0.2em] text-sm uppercase mb-4">Unforgettable</p>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Curated Experiences</h2>
            <p className="text-taupe-600 max-w-2xl mx-auto">
              Immerse yourself in extraordinary moments crafted to create lasting memories.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large experience card */}
              <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-lg group">
                <img
                  src={experiences[0].image || "/placeholder.svg"}
                  alt={experiences[0].title}
                  className="w-full h-full min-h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-terracotta-300 text-sm uppercase tracking-wider">
                    {experiences[0].category}
                  </span>
                  <h3 className="text-2xl font-serif text-white mt-2">{experiences[0].title}</h3>
                </div>
              </div>

              {/* Small experience cards */}
              {experiences.slice(1).map((exp, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg aspect-square group">
                  <img
                    src={exp.image || "/placeholder.svg"}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-terracotta-300 text-xs uppercase tracking-wider">{exp.category}</span>
                    <h3 className="text-lg font-serif text-white mt-1">{exp.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>

          <div className="text-center mt-8">
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 text-terracotta-500 font-medium hover:text-terracotta-600 transition-colors"
            >
              Discover All Experiences <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 lg:py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote size={48} className="text-terracotta-400 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-script text-white italic mb-6">
            "We are not in the travel business. We are in the business of dreams."
          </blockquote>
          <p className="text-taupe-400 uppercase tracking-wider text-sm">TIME Team Philosophy</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <p className="text-terracotta-500 tracking-[0.2em] text-sm uppercase mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal">What Our Guests Say</h2>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="relative">
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-taupe-400 hover:text-terracotta-500 transition-colors z-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="px-12 text-center">
                <div className="flex justify-center gap-4 mb-8">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                        index === currentTestimonial
                          ? "border-terracotta-500 bg-terracotta-100"
                          : "border-cream-300 bg-cream-200"
                      }`}
                    >
                      <Quote
                        size={16}
                        className={index === currentTestimonial ? "text-terracotta-500" : "text-taupe-400"}
                      />
                    </div>
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-taupe-700 italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <p className="font-semibold text-charcoal">{testimonials[currentTestimonial].name}</p>
                <p className="text-taupe-500 text-sm">{testimonials[currentTestimonial].location}</p>
              </div>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-taupe-400 hover:text-terracotta-500 transition-colors z-10"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealWrapper>
              <p className="text-terracotta-500 tracking-[0.2em] text-sm uppercase mb-4">Start Your Journey</p>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">Let's Craft Your Dream Journey</h2>
              <p className="text-taupe-600 mb-6 leading-relaxed">
                Every extraordinary journey begins with a conversation. Share your travel dreams with us, and our expert
                team will craft a bespoke experience tailored to your desires.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm text-taupe-600">
                  <CheckCircle size={16} className="text-terracotta-500" />
                  <span>Personalized Itineraries</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-taupe-600">
                  <CheckCircle size={16} className="text-terracotta-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={200}>
              <div className="bg-cream-100 p-8 rounded-lg">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-taupe-600 mb-1">
                        First Name <span className="text-terracotta-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-cream-300 rounded bg-white focus:outline-none focus:border-terracotta-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-taupe-600 mb-1">
                        Last Name <span className="text-terracotta-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-cream-300 rounded bg-white focus:outline-none focus:border-terracotta-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-taupe-600 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-cream-300 rounded bg-white focus:outline-none focus:border-terracotta-400"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-taupe-600 mb-1">Budget (Estimated)</label>
                      <select className="w-full px-4 py-2 border border-cream-300 rounded bg-white focus:outline-none focus:border-terracotta-400">
                        <option>Select a destination</option>
                        <option>India</option>
                        <option>Nepal</option>
                        <option>Bhutan</option>
                        <option>Sri Lanka</option>
                        <option>Maldives</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-taupe-600 mb-1">Preferred Travel Date</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-cream-300 rounded bg-white focus:outline-none focus:border-terracotta-400"
                        placeholder="dd-mm-yyyy"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-taupe-600 mb-1">Number of Travelers</label>
                      <input
                        type="number"
                        className="w-full px-4 py-2 border border-cream-300 rounded bg-white focus:outline-none focus:border-terracotta-400"
                        placeholder="2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-taupe-600 mb-1">Tell us about Your Dream Journey</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2 border border-cream-300 rounded bg-white focus:outline-none focus:border-terracotta-400 resize-none"
                      placeholder="Share your travel interests, special requirements, or any specific experiences you're looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-terracotta-500 text-white font-medium rounded hover:bg-terracotta-600 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Enquiry <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  )
}
