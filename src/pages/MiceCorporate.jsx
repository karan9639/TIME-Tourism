import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import EnquiryForm from "../components/EnquiryForm"
import { Building2, Users, Award, Calendar, MapPin, Star } from "lucide-react"

const miceServices = [
  {
    icon: Building2,
    title: "Meetings",
    description: "State-of-the-art venues and seamless logistics for productive business meetings of any scale.",
  },
  {
    icon: Award,
    title: "Incentives",
    description: "Reward your top performers with extraordinary travel experiences that motivate and inspire.",
  },
  {
    icon: Calendar,
    title: "Conferences",
    description: "Full-service conference planning with world-class venues, technology, and hospitality.",
  },
  {
    icon: Star,
    title: "Exhibitions",
    description: "Expert coordination for trade shows and exhibitions across the Indian Subcontinent.",
  },
]

const venues = [
  {
    name: "Royal Palace Hotels",
    location: "Rajasthan, India",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Beach Resorts",
    location: "Maldives & Sri Lanka",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Mountain Retreats",
    location: "Nepal & Bhutan",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function MiceCorporate() {
  return (
    <>
      <PageHeader
        title="MICE & Corporate"
        subtitle="Exceptional corporate events and incentive travel in extraordinary destinations"
        image="/placeholder.svg?height=800&width=1920"
      />

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealWrapper>
              <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">
                Corporate Excellence
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mt-4 mb-6">We Organize Your Trip</h2>
              <p className="text-sand-600 leading-relaxed mb-6">
                TIME is a leading DMC in India and events specialists for planning conventions and incentive travel. We
                are a preferred destination management company and PCO services used by international conference
                organisers worldwide.
              </p>
              <p className="text-sand-600 leading-relaxed">
                With over 24 years of experience, we bring unparalleled expertise to corporate events, combining luxury
                venues, seamless logistics, and cultural experiences that leave lasting impressions.
              </p>
            </RevealWrapper>
            <RevealWrapper delay={200}>
              <img src="/placeholder.svg?height=500&width=700" alt="Corporate Event" className="w-full h-auto" />
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* MICE Services */}
      <section className="py-20 lg:py-28 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-16">
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mt-4">MICE Solutions</h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {miceServices.map((service, index) => (
              <RevealWrapper key={service.title} delay={index * 100}>
                <div className="bg-white p-8 text-center h-full">
                  <div className="w-16 h-16 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-serif text-charcoal mb-3">{service.title}</h3>
                  <p className="text-sand-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-16">
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Venues</span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mt-4">Extraordinary Venues</h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <RevealWrapper key={venue.name} delay={index * 100}>
                <div className="group overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={venue.image || "/placeholder.svg"}
                      alt={venue.name}
                      className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-serif text-charcoal">{venue.name}</h3>
                    <p className="text-sand-500 flex items-center mt-1">
                      <MapPin size={14} className="mr-1" />
                      {venue.location}
                    </p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="py-20 lg:py-28 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <RevealWrapper>
              <span className="text-terracotta-400 text-sm tracking-[0.2em] uppercase font-medium">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-6">Plan Your Corporate Event</h2>
              <p className="text-sand-300 leading-relaxed mb-8">
                Whether it's an incentive trip for 20 executives or a conference for 2,000 delegates, our experienced
                team will ensure every detail is perfect.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users size={20} className="text-terracotta-400 mr-3" />
                  <span className="text-sand-200">Groups from 10 to 2,000+ delegates</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={20} className="text-terracotta-400 mr-3" />
                  <span className="text-sand-200">Access to exclusive venues across 5 countries</span>
                </div>
                <div className="flex items-center">
                  <Award size={20} className="text-terracotta-400 mr-3" />
                  <span className="text-sand-200">24+ years of MICE expertise</span>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={200}>
              <div className="bg-white p-8 lg:p-10">
                <EnquiryForm />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  )
}
