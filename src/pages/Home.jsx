import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import DestinationCard from "../components/DestinationCard"
import ServiceCard from "../components/ServiceCard"
import ExperienceCard from "../components/ExperienceCard"
import TestimonialCard from "../components/TestimonialCard"
import EnquiryForm from "../components/EnquiryForm"
import RevealWrapper from "../components/RevealWrapper"
import { destinations } from "../data/destinations"
import { services } from "../data/services"
import { experiences } from "../data/experiences"
import { testimonials } from "../data/testimonials"
import { ArrowRight, Award, Users, Globe, Clock } from "lucide-react"

export default function Home() {
  return (
    <>
      <Hero />

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Welcome to TIME</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mt-4 mb-6 text-balance">
              Crafting Dreams Into Extraordinary Journeys
            </h2>
            <p className="text-lg text-sand-600 leading-relaxed">
              For more than 24 years, TIME – Tourism India Management Enterprise has been spinning dreams into
              extraordinary travel experiences across the Indian Subcontinent. We believe every journey should be
              exceptional, every Life, Well Travelled.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-terracotta-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: "24+", label: "Years Experience" },
              { icon: Globe, value: "5", label: "Destinations" },
              { icon: Users, value: "10,000+", label: "Happy Travelers" },
              { icon: Award, value: "100%", label: "Personalized Service" },
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon size={32} className="mx-auto mb-3 opacity-80" />
                <p className="text-3xl md:text-4xl font-serif">{stat.value}</p>
                <p className="text-sm text-sand-100 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-16">
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Explore</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mt-4 mb-6">Our Destinations</h2>
            <p className="text-lg text-sand-600 max-w-2xl mx-auto">
              Five extraordinary countries, infinite possibilities. Discover the wonders of the Indian Subcontinent.
            </p>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard key={destination.id} destination={destination} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-flex items-center text-terracotta-500 font-medium hover:text-terracotta-600 transition-colors"
            >
              View All Destinations
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-16">
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">What We Offer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mt-4 mb-6">Our Services</h2>
            <p className="text-lg text-sand-600 max-w-2xl mx-auto">
              From bespoke itineraries to corporate events, we deliver exceptional service across every aspect of
              travel.
            </p>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-charcoal text-white font-medium tracking-wide hover:bg-terracotta-500 transition-colors"
            >
              Explore All Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 lg:py-28 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-16">
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Unforgettable</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mt-4 mb-6">Curated Experiences</h2>
            <p className="text-lg text-sand-600 max-w-2xl mx-auto">
              Immerse yourself in extraordinary moments crafted to create lasting memories.
            </p>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.slice(0, 3).map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} featured={index === 0} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/experiences"
              className="inline-flex items-center text-terracotta-500 font-medium hover:text-terracotta-600 transition-colors"
            >
              Discover All Experiences
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/placeholder.svg?height=800&width=1920" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealWrapper>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-relaxed italic">
              "We are not in the travel business. We are in the business of dreams."
            </blockquote>
            <p className="mt-8 text-sand-300 text-sm tracking-wider uppercase">— The TIME Philosophy</p>
          </RevealWrapper>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-16">
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mt-4 mb-6">What Our Guests Say</h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <RevealWrapper key={testimonial.id} delay={index * 150}>
                <TestimonialCard testimonial={testimonial} />
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Enquiry Form */}
      <section className="py-20 lg:py-28 bg-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <RevealWrapper>
              <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">
                Start Your Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mt-4 mb-6">
                Let's Craft Your Dream Journey
              </h2>
              <p className="text-lg text-sand-600 mb-8 leading-relaxed">
                Every extraordinary journey begins with a conversation. Share your travel dreams with us, and our expert
                team will craft a bespoke experience tailored to your desires.
              </p>
              <div className="flex items-center space-x-6 text-sand-600">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center mr-3">
                    <Clock size={20} className="text-white" />
                  </div>
                  <span className="text-sm">
                    Response within
                    <br />
                    <strong>24 hours</strong>
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center mr-3">
                    <Award size={20} className="text-white" />
                  </div>
                  <span className="text-sm">
                    100%
                    <br />
                    <strong>Personalized</strong>
                  </span>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={200}>
              <div className="bg-white p-8 lg:p-10 shadow-lg">
                <EnquiryForm />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  )
}
