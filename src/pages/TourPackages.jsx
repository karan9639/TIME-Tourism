"use client"
import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import { Calendar, ArrowRight } from "lucide-react"
import { tourPackagesData } from "../data/tourPackagesData"

/**
 * TourPackages Page
 *
 * Displays all available tour packages with links to detailed views.
 * SEO-optimized with semantic HTML and proper heading hierarchy.
 */

// Separate tours by category
const indiaTours = tourPackagesData.filter((tour) => tour.destination === "India")
const holidayTours = tourPackagesData.filter((tour) => tour.destination !== "India")

function TourCard({ tour, variant = "default" }) {
  const linkPath = `/tour-packages/${tour.slug || tour.id}`

  if (variant === "featured") {
    return (
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
        <Link to={linkPath} className="block">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={tour.image || "/placeholder.svg"}
              alt={tour.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="bg-terracotta text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 font-medium">
                <Calendar size={12} />
                {tour.duration} Days
              </span>
              <span className="bg-charcoal/80 text-white text-xs px-3 py-1 rounded-full">{tour.destination}</span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-serif text-lg text-charcoal mb-2 group-hover:text-terracotta transition-colors line-clamp-2">
              {tour.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3 mb-4">{tour.fullDescription || tour.description}</p>
            <div className="flex items-center justify-between">
              {tour.price && <span className="text-terracotta font-semibold">From ${tour.price.toLocaleString()}</span>}
              <span className="text-terracotta text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                View Details <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <Link to={linkPath} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={tour.image || "/placeholder.svg"}
            alt={tour.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex gap-2">
              <span className="bg-terracotta text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <Calendar size={12} />
                {tour.duration} Days
              </span>
              <span className="bg-white/20 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                {tour.destination}
              </span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-serif text-charcoal mb-2 text-sm group-hover:text-terracotta transition-colors line-clamp-2">
            {tour.title}
          </h3>
          <p className="text-gray-600 text-xs line-clamp-2 mb-3">{tour.description}</p>
          <div className="flex items-center justify-between">
            {tour.price && <span className="text-terracotta font-medium text-sm">${tour.price.toLocaleString()}</span>}
            <span className="text-terracotta text-xs font-medium flex items-center gap-1">
              Details <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function TourPackages() {
  const headerImages = [
    "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg",
    "/indian-heritage-fort-rajasthan-luxury.jpg",
    "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
    "/yoga-retreat-kerala-wellness-spa.jpg",
  ]

  return (
    <>
      {/* SEO-optimized page header */}
      <PageHeader
        title="Tour Packages"
        image={headerImages}
        variant="collage"
        subtitle="Discover extraordinary journeys across India and beyond"
      />

      {/* India Tours Section */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="india-tours-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper>
            <header className="text-center mb-12">
              <p className="text-terracotta font-medium uppercase tracking-wider text-sm mb-2">Explore India</p>
              <h2 id="india-tours-heading" className="text-3xl md:text-4xl font-serif text-charcoal mb-4">
                India Tour Packages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the incredible diversity of India through our carefully curated tour packages
              </p>
            </header>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {indiaTours.map((tour, index) => (
              <RevealWrapper key={tour.id} delay={index * 50}>
                <TourCard tour={tour} />
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Holiday Tours Section (Other Destinations) */}
      {holidayTours.length > 0 && (
        <section className="py-16 lg:py-20 bg-cream" aria-labelledby="holiday-tours-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper>
              <header className="text-center mb-12">
                <p className="text-terracotta font-medium uppercase tracking-wider text-sm mb-2">Beyond India</p>
                <h2 id="holiday-tours-heading" className="text-3xl md:text-4xl font-serif text-charcoal mb-4">
                  International Holidays
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Extend your journey to the neighboring gems of the Indian subcontinent
                </p>
              </header>
            </RevealWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {holidayTours.map((tour, index) => (
                <RevealWrapper key={tour.id} delay={index * 100}>
                  <TourCard tour={tour} variant="featured" />
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <h2 className="text-2xl md:text-3xl font-serif mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              We specialize in creating custom itineraries tailored to your preferences. Let our travel experts design
              your perfect journey.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-terracotta text-white px-8 py-4 rounded-lg font-medium hover:bg-terracotta/90 transition-colors"
            >
              Request Custom Itinerary
              <ArrowRight size={20} />
            </Link>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
