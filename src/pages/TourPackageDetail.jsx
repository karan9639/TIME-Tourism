"use client"
import { useState, useEffect, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import { Calendar, MapPin, Check, X, ChevronLeft, Star, Info, Map, ImageIcon, ClipboardList } from "lucide-react"
import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import CloudinaryGallery from "../components/CloudinaryGallery"
import { tourPackagesData, getRelatedTours } from "../data/tourPackagesData"

/**
 * TourPackageDetail - Matches timetours.us tour detail page layout exactly
 * Features: Information, Tour Plan, Location, Gallery tabs
 */
export default function TourPackageDetail() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState("information")
  const tabsRef = useRef(null)

  // Find tour by slug or id
  const tour = tourPackagesData.find((t) => t.slug === id || t.id === Number.parseInt(id))
  const relatedTours = tour ? getRelatedTours(tour.id, 2) : []

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [id])

  useEffect(() => {
    if (tabsRef.current) {
      const activeButton = tabsRef.current.querySelector('[aria-selected="true"]')
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
      }
    }
  }, [activeTab])

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50 px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-serif text-charcoal mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-6">The tour package you're looking for doesn't exist.</p>
          <Link
            to="/tour-packages"
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600 transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Tour Packages
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: "information", label: "Information", icon: Info },
    { id: "tour-plan", label: "Tour Plan", icon: ClipboardList },
    { id: "location", label: "Location", icon: Map },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
  ]

  return (
    <>
      <PageHeader title={tour.title} image={tour.heroImage || tour.image} />

      <main className="bg-white">
        <nav className="bg-gray-100 border-b border-gray-200 sticky top-0 z-20" aria-label="Tour sections">
          <div className="max-w-7xl mx-auto">
            <div ref={tabsRef} className="flex overflow-x-auto scrollbar-hide" role="tablist">
              {tabs.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-shrink-0 flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-teal-600 border-b-2 border-teal-500 bg-white"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                    aria-selected={activeTab === tab.id}
                    role="tab"
                  >
                    <IconComponent size={14} className="sm:w-4 sm:h-4" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </nav>

        {/* Content - Improved padding and overflow handling */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-x-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 min-w-0">
              {/* INFORMATION TAB */}
              {activeTab === "information" && (
                <RevealWrapper>
                  <article className="space-y-6 sm:space-y-8">
                    {/* Title with rating */}
                    <header>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal">{tour.title}</h1>
                        <span className="text-gray-500 text-sm sm:text-base">/ per person</span>
                      </div>

                      {/* Star rating */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={14}
                              className={`sm:w-4 sm:h-4 ${star <= (tour.rating || 0) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500">({tour.reviewCount || 0} Reviews)</span>
                      </div>
                    </header>

                    {/* Route/Destinations - Added text wrapping */}
                    {tour.keyDestinations && (
                      <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide break-words">
                        {tour.keyDestinations.map((d) => d.name).join(" – ")}
                      </p>
                    )}

                    {/* Duration & Category badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 bg-teal-500 text-white px-3 py-1 rounded text-xs sm:text-sm">
                        <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                        {tour.duration} Days
                      </span>
                      <span className="inline-flex items-center gap-1 bg-rose-500 text-white px-3 py-1 rounded text-xs sm:text-sm">
                        {tour.destination}
                      </span>
                    </div>

                    {/* Tour info table - Made responsive with stacked layout on mobile */}
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-start border-b border-gray-200 py-3">
                        <span className="w-full sm:w-32 font-medium text-charcoal text-sm mb-1 sm:mb-0">
                          Destination
                        </span>
                        <span className="text-gray-600 text-sm">{tour.destination}</span>
                      </div>
                      {tour.departure && (
                        <div className="flex flex-col sm:flex-row sm:items-start border-b border-gray-200 py-3">
                          <span className="w-full sm:w-32 font-medium text-charcoal text-sm mb-1 sm:mb-0">
                            Departure
                          </span>
                          <span className="text-gray-600 text-sm">{tour.departure}</span>
                        </div>
                      )}

                      {/* Included */}
                      {tour.included && tour.included.length > 0 && (
                        <div className="flex flex-col sm:flex-row sm:items-start border-b border-gray-200 py-3">
                          <span className="w-full sm:w-32 font-medium text-charcoal text-sm mb-2 sm:mb-0">
                            Included
                          </span>
                          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
                            {tour.included.map((item, index) => (
                              <span key={index} className="flex items-center gap-1 text-gray-600 text-sm">
                                <Check size={12} className="text-teal-500 flex-shrink-0" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Not Included */}
                      {tour.notIncluded && tour.notIncluded.length > 0 && (
                        <div className="flex flex-col sm:flex-row sm:items-start border-b border-gray-200 py-3">
                          <span className="w-full sm:w-32 font-medium text-charcoal text-sm mb-2 sm:mb-0">
                            Not Included
                          </span>
                          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
                            {tour.notIncluded.map((item, index) => (
                              <span key={index} className="flex items-center gap-1 text-gray-600 text-sm">
                                <X size={12} className="text-rose-500 flex-shrink-0" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div className="prose prose-sm sm:prose prose-gray max-w-none">
                      <p className="text-sm sm:text-base">{tour.fullDescription || tour.description}</p>
                    </div>

                    {/* From our gallery preview */}
                    {tour.galleryImages && tour.galleryImages.length > 0 && (
                      <section className="mt-8 sm:mt-12">
                        <h2 className="text-xl sm:text-2xl font-serif text-charcoal mb-4 sm:mb-6">From our gallery</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                          {tour.galleryImages.slice(0, 3).map((img, index) => (
                            <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden bg-sand-200">
                              <img
                                src={
                                  img.url ||
                                  `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(img.alt || "travel destination")}`
                                }
                                alt={img.alt || `Gallery image ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                                onError={(e) => {
                                  e.target.src = `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(img.alt || "travel destination")}`
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                  </article>
                </RevealWrapper>
              )}

              {/* TOUR PLAN TAB */}
              {activeTab === "tour-plan" && (
                <RevealWrapper>
                  <article className="space-y-6">
                    <h2 className="text-xl sm:text-2xl font-serif text-charcoal mb-4 sm:mb-6">Tour Plan</h2>

                    {tour.itinerary && tour.itinerary.length > 0 ? (
                      <div className="space-y-3 sm:space-y-4">
                        {tour.itinerary.map((day, index) => (
                          <DayAccordion key={index} day={day} defaultOpen={index === 0} />
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8 sm:py-12 text-sm sm:text-base">
                        Detailed itinerary coming soon. Contact us for more information.
                      </p>
                    )}
                  </article>
                </RevealWrapper>
              )}

              {/* LOCATION TAB */}
              {activeTab === "location" && (
                <RevealWrapper>
                  <article className="space-y-6 sm:space-y-8">
                    <h2 className="text-xl sm:text-2xl font-serif text-charcoal mb-4">Tour Location</h2>
                    <p className="text-gray-600 text-sm sm:text-base">{tour.locationDescription || tour.description}</p>

                    {/* Map */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={
                          tour.mapEmbed ||
                          `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506173.8467847397!2d77.20902!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus`
                        }
                        width="100%"
                        height="300"
                        className="sm:h-[400px]"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title={`Map of ${tour.title}`}
                      />
                    </div>

                    {/* Key Destinations */}
                    {tour.keyDestinations && (
                      <section>
                        <h3 className="text-lg sm:text-xl font-serif text-charcoal mb-4">Key Destinations</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          {tour.keyDestinations.map((dest, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                              <MapPin className="text-teal-500 flex-shrink-0 mt-0.5" size={18} />
                              <div className="min-w-0">
                                <h4 className="font-semibold text-charcoal text-sm sm:text-base">{dest.name}</h4>
                                <p className="text-xs sm:text-sm text-gray-600 break-words">{dest.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                  </article>
                </RevealWrapper>
              )}

              {/* GALLERY TAB */}
              {activeTab === "gallery" && (
                <RevealWrapper>
                  <article className="space-y-6 sm:space-y-8">
                    <h2 className="text-xl sm:text-2xl font-serif text-charcoal mb-4">Gallery</h2>

                    {tour.galleryImages && tour.galleryImages.length > 0 ? (
                      <CloudinaryGallery images={tour.galleryImages} layout="grid" columns={3} enableLightbox={true} />
                    ) : (
                      <div className="bg-gray-50 rounded-lg p-8 sm:p-12 text-center">
                        <ImageIcon size={40} className="text-gray-300 mx-auto mb-4 sm:w-12 sm:h-12" />
                        <p className="text-gray-500 text-sm sm:text-base">Gallery images coming soon</p>
                      </div>
                    )}
                  </article>
                </RevealWrapper>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Promo banner */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg"
                    alt="Amazing Tour"
                    className="w-full h-40 sm:h-48 object-cover"
                    onError={(e) => {
                      e.target.src = "/amazing-tour-india-travel.jpg"
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded text-xs sm:text-sm font-bold transform rotate-12">
                    50% off
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="font-script text-2xl sm:text-3xl text-white drop-shadow-lg">Amazing Tour</p>
                  </div>
                </div>

                {/* Related Tours */}
                <div className="space-y-4">
                  {relatedTours.map((relTour) => (
                    <Link key={relTour.id} to={`/tour-packages/${relTour.slug}`} className="block group">
                      <div className="relative rounded-lg overflow-hidden">
                        <img
                          src={relTour.image || "/placeholder.svg"}
                          alt={relTour.title}
                          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(relTour.title)}`
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                          <div className="flex gap-2 mb-2">
                            <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded">
                              {relTour.duration} Days
                            </span>
                            <span className="bg-rose-500 text-white text-xs px-2 py-1 rounded">
                              {relTour.destination}
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className="font-semibold text-charcoal mt-2 group-hover:text-teal-600 transition-colors text-sm sm:text-base">
                        {relTour.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">{relTour.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}

function DayAccordion({ day, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-3 sm:p-4 text-left transition-colors ${
          isOpen ? "bg-gray-100" : "bg-white hover:bg-gray-50"
        }`}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-charcoal text-sm sm:text-base pr-4">
          <span className="text-teal-500 mr-2">{isOpen ? "−" : "+"}</span>
          Day {day.day}: {day.title}
        </span>
      </button>

      {isOpen && (
        <div className="p-3 sm:p-4 bg-white border-t border-gray-200">
          <div
            className="prose prose-sm max-w-none text-gray-600 text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: day.description }}
          />
          {day.overnight && (
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-teal-600">Overnight in {day.overnight}</p>
          )}
        </div>
      )}
    </div>
  )
}
