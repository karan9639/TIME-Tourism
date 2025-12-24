"use client"

import { useParams, Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import EnquiryForm from "../components/EnquiryForm"
import CloudinaryGallery from "../components/CloudinaryGallery"
import { destinations } from "../data/destinations"
import { Check, MapPin } from "lucide-react"

export default function DestinationDetail() {
  const { id } = useParams()
  const destination = destinations.find((d) => d.id === id)

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-charcoal mb-4">Destination Not Found</h1>
          <Link to="/destinations" className="text-terracotta-500 hover:underline">
            View All Destinations
          </Link>
        </div>
      </div>
    )
  }

  const destinationGallery = Array.from({ length: 8 }, (_, i) => ({
    url: `/placeholder.svg?height=800&width=1200&query=${destination.name} ${destination.highlights[i % destination.highlights.length]} luxury travel photography`,
    alt: `${destination.name} - ${destination.highlights[i % destination.highlights.length]}`,
    title: destination.highlights[i % destination.highlights.length],
  }))

  return (
    <>
      <PageHeader title={destination.name} subtitle={destination.tagline} image={destination.heroImage} />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <RevealWrapper>
              <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Overview</span>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mt-4 mb-6">Discover {destination.name}</h2>
              <p className="text-sand-600 leading-relaxed mb-8">{destination.description}</p>
              <div className="space-y-3">
                {destination.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center">
                    <div className="w-6 h-6 bg-terracotta-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-charcoal">{highlight}</span>
                  </div>
                ))}
              </div>
            </RevealWrapper>

            <RevealWrapper delay={200}>
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                className="w-full h-full object-cover min-h-[400px]"
              />
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Gallery - Using CloudinaryGallery component with grid layout */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Photo Gallery</span>
            <h2 className="text-3xl font-serif text-charcoal mt-4">Experience {destination.name}</h2>
            <p className="text-sand-600 mt-4 max-w-2xl mx-auto">
              Explore our curated collection of photographs capturing the essence and beauty of {destination.name}
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <CloudinaryGallery
              images={destinationGallery}
              layout="grid"
              columns={4}
              aspectRatio="landscape"
              enableLightbox={true}
            />
          </RevealWrapper>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 lg:py-28 bg-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <RevealWrapper>
              <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Plan Your Trip</span>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mt-4 mb-6">
                Ready to Explore {destination.name}?
              </h2>
              <p className="text-sand-600 leading-relaxed mb-8">
                Let our travel specialists craft the perfect {destination.name} itinerary tailored to your preferences,
                interests, and travel style.
              </p>
              <div className="flex items-center text-sand-600">
                <MapPin size={20} className="text-terracotta-500 mr-2" />
                <span>Operated locally for authentic experiences</span>
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

      {/* Other Destinations */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <h2 className="text-2xl font-serif text-charcoal">Explore Other Destinations</h2>
          </RevealWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {destinations
              .filter((d) => d.id !== id)
              .map((dest, index) => (
                <RevealWrapper key={dest.id} delay={index * 100}>
                  <Link to={`/destinations/${dest.id}`} className="group block">
                    <div className="overflow-hidden">
                      <img
                        src={dest.image || "/placeholder.svg"}
                        alt={dest.name}
                        className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-lg font-serif text-charcoal mt-4 group-hover:text-terracotta-500 transition-colors">
                      {dest.name}
                    </h3>
                  </Link>
                </RevealWrapper>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
