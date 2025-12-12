import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import TestimonialCard from "../components/TestimonialCard"
import { partners } from "../data/partners"
import { testimonials } from "../data/testimonials"
import { ArrowRight, Handshake, Globe, Award, Shield } from "lucide-react"

const partnerBenefits = [
  {
    icon: Handshake,
    title: "Dedicated Support",
    description: "A dedicated account manager to ensure seamless communication and service delivery.",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description: "On-ground teams across all 5 destinations with deep local knowledge.",
  },
  {
    icon: Award,
    title: "Competitive Rates",
    description: "Best-in-market pricing through our established supplier relationships.",
  },
  {
    icon: Shield,
    title: "Financial Security",
    description: "Licensed and bonded operations with comprehensive insurance coverage.",
  },
]

export default function Partners() {
  return (
    <>
      <PageHeader
        title="Our Partners"
        subtitle="Building lasting relationships with the world's leading travel professionals"
        image="/placeholder.svg?height=800&width=1920"
      />

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Trade Partners</span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mt-4 mb-6">Your Trusted DMC Partner</h2>
            <p className="text-lg text-sand-600 leading-relaxed">
              TIME has earned the trust of leading tour operators, travel agencies, and corporate clients worldwide. Our
              commitment to excellence, reliability, and personalized service makes us the preferred DMC partner for the
              Indian Subcontinent.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 lg:py-28 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal">Why Partner With TIME</h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <RevealWrapper key={benefit.title} delay={index * 100}>
                <div className="bg-white p-8 text-center h-full">
                  <div className="w-14 h-14 bg-terracotta-500 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-serif text-charcoal mb-3">{benefit.title}</h3>
                  <p className="text-sand-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-16">
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mt-4">What Our Partners Say</h2>
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

      {/* Affiliations */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-16">
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Memberships</span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mt-4">Our Affiliations</h2>
          </RevealWrapper>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <RevealWrapper key={partner.id} delay={index * 50}>
                <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-terracotta-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Become a Partner</h2>
            <p className="text-sand-100 mb-8 max-w-2xl mx-auto">
              Join our network of travel professionals and offer your clients the finest travel experiences in the
              Indian Subcontinent.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-terracotta-500 font-medium tracking-wide hover:bg-sand-100 transition-colors"
            >
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
