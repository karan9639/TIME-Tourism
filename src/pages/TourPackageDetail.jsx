"use client"

import { useState, useEffect, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import { Calendar, MapPin, Check, X, ChevronLeft, Star, Info, Map, ImageIcon, ClipboardList } from "lucide-react"
import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import CloudinaryGallery from "../components/CloudinaryGallery"
import { tourPackagesData, getRelatedTours } from "../data/tourPackagesData"

export default function TourPackageDetail() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState("information")
  const tabsRef = useRef(null)

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
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-serif text-charcoal mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">The tour package you're looking for doesn't exist.</p>
          <Link
            to="/tour-packages"
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-teal-600 transition-colors text-sm sm:text-base"
          >
            <ChevronLeft size={18} />
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
        <nav
          className="bg-gray-100 border-b border-gray-200 sticky top-14 sm:top-16 md:top-[120px] z-20"
          aria-label="Tour sections"
        >
          <div className="max-w-7xl mx-auto">
            <div ref={tabsRef} className="flex overflow-x-auto scrollbar-hide" role="tablist">
              {tabs.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-shrink-0 flex items-center gap-1 sm:gap-1.5 md:gap-2 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-charcoal border-b-2 border-teal-500 bg-white"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                    aria-selected={activeTab === tab.id}
                    role="tab"
                  >
                    <IconComponent size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 overflow-x-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 min-w-0">
              {/* INFORMATION TAB */}
              {activeTab === "information" && (
                <RevealWrapper>
                  <article className="space-y-5 sm:space-y-6 md:space-y-8">
                    <header>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-charcoal">
                          {tour.title}
                        </h1>
                        <span className="text-gray-500 text-xs sm:text-sm md:text-base">/ per person</span>
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={12}
                              className={`sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ${star <= (tour.rating || 0) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                          ({tour.reviewCount || 0} Reviews)
                        </span>
                      </div>
                    </header>

                    {tour.keyDestinations && (
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 uppercase tracking-wide break-words">
                        {tour.keyDestinations.map((d) => d.name).join(" – ")}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <span className="inline-flex items-center gap-1 bg-teal-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs md:text-sm">
                        <Calendar size={10} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                        {tour.duration} Days
                      </span>
                      <span className="inline-flex items-center gap-1 bg-rose-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs md:text-sm">
                        {tour.destination}
                      </span>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-start border-b border-gray-200 py-2 sm:py-3">
                        <span className="w-full sm:w-28 md:w-32 font-medium text-charcoal text-xs sm:text-sm mb-1 sm:mb-0">
                          Destination
                        </span>
                        <span className="text-gray-600 text-xs sm:text-sm">{tour.destination}</span>
                      </div>
                      {tour.departure && (
                        <div className="flex flex-col sm:flex-row sm:items-start border-b border-gray-200 py-2 sm:py-3">
                          <span className="w-full sm:w-28 md:w-32 font-medium text-charcoal text-xs sm:text-sm mb-1 sm:mb-0">
                            Departure
                          </span>
                          <span className="text-gray-600 text-xs sm:text-sm">{tour.departure}</span>
                        </div>
                      )}

                      {tour.included && tour.included.length > 0 && (
                        <div className="flex flex-col sm:flex-row sm:items-start border-b border-gray-200 py-2 sm:py-3">
                          <span className="w-full sm:w-28 md:w-32 font-medium text-charcoal text-xs sm:text-sm mb-2 sm:mb-0">
                            Included
                          </span>
                          <div className="flex flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-1.5 sm:gap-y-2">
                            {tour.included.map((item, index) => (
                              <span
                                key={index}
                                className="flex items-center gap-1 text-gray-600 text-[10px] sm:text-xs md:text-sm"
                              >
                                <Check size={10} className="sm:w-3 sm:h-3 text-teal-500 flex-shrink-0" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {tour.notIncluded && tour.notIncluded.length > 0 && (
                        <div className="flex flex-col sm:flex-row sm:items-start border-b border-gray-200 py-2 sm:py-3">
                          <span className="w-full sm:w-28 md:w-32 font-medium text-charcoal text-xs sm:text-sm mb-2 sm:mb-0">
                            Not Included
                          </span>
                          <div className="flex flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-1.5 sm:gap-y-2">
                            {tour.notIncluded.map((item, index) => (
                              <span
                                key={index}
                                className="flex items-center gap-1 text-gray-600 text-[10px] sm:text-xs md:text-sm"
                              >
                                <X size={10} className="sm:w-3 sm:h-3 text-rose-500 flex-shrink-0" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="prose prose-sm max-w-none">
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        {tour.fullDescription || tour.description}
                      </p>
                    </div>

                    {tour.galleryImages && tour.galleryImages.length > 0 && (
                      <section className="mt-6 sm:mt-8 md:mt-12">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-charcoal mb-3 sm:mb-4 md:mb-6">
                          From our gallery
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                          {tour.galleryImages.slice(0, 3).map((img, index) => (
                            <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
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
                  <article className="space-y-4 sm:space-y-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-charcoal mb-3 sm:mb-4 md:mb-6">
                      Tour Plan
                    </h2>

                    {tour.itinerary && tour.itinerary.length > 0 ? (
                      <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        {tour.itinerary.map((day, index) => (
                          <DayAccordion key={index} day={day} defaultOpen={index === 0} />
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-6 sm:py-8 md:py-12 text-xs sm:text-sm md:text-base">
                        Detailed itinerary coming soon. Contact us for more information.
                      </p>
                    )}
                  </article>
                </RevealWrapper>
              )}

              {/* LOCATION TAB */}
              {activeTab === "location" && (
                <RevealWrapper>
                  <article className="space-y-4 sm:space-y-6 md:space-y-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-charcoal mb-3 sm:mb-4">
                      Tour Location
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                      {tour.locationDescription || tour.description}
                    </p>

                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={
                          tour.mapEmbed ||
                          `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506173.8467847397!2d77.20902!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus`
                        }
                        width="100%"
                        height="250"
                        className="sm:h-[300px] md:h-[400px]"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title={`Map of ${tour.title}`}
                      />
                    </div>

                    {tour.keyDestinations && (
                      <section>
                        <h3 className="text-base sm:text-lg md:text-xl font-serif text-charcoal mb-3 sm:mb-4">
                          Key Destinations
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                          {tour.keyDestinations.map((dest, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 md:p-4 bg-gray-50 rounded-lg"
                            >
                              <MapPin className="text-teal-500 flex-shrink-0 mt-0.5" size={16} />
                              <div className="min-w-0">
                                <h4 className="font-semibold text-charcoal text-xs sm:text-sm md:text-base">
                                  {dest.name}
                                </h4>
                                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 break-words">
                                  {dest.description}
                                </p>
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
                  <article className="space-y-4 sm:space-y-6 md:space-y-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-charcoal mb-3 sm:mb-4">Gallery</h2>

                    {tour.galleryImages && tour.galleryImages.length > 0 ? (
                      <CloudinaryGallery images={tour.galleryImages} layout="grid" columns={3} enableLightbox={true} />
                    ) : (
                      <div className="bg-gray-50 rounded-lg p-6 sm:p-8 md:p-12 text-center">
                        <ImageIcon
                          size={32}
                          className="sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-300 mx-auto mb-3 sm:mb-4"
                        />
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base">Gallery images coming soon</p>
                      </div>
                    )}
                  </article>
                </RevealWrapper>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-[180px] space-y-4 sm:space-y-6">
                {/* Promo banner */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/amazing-tour-india-travel.jpg"
                    alt="Amazing Tour"
                    className="w-full h-36 sm:h-40 md:h-48 object-cover"
                    onError={(e) => {
                      e.target.src = "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg"
                    }}
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-rose-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs md:text-sm font-bold transform rotate-12">
                    50% off
                  </div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                    <p className="font-script text-xl sm:text-2xl md:text-3xl text-white drop-shadow-lg">
                      Amazing Tour
                    </p>
                  </div>
                </div>

                {/* Related Tours */}
                <div className="space-y-3 sm:space-y-4">
                  {relatedTours.map((relTour) => (
                    <Link key={relTour.id} to={`/tour-packages/${relTour.slug}`} className="block group">
                      <div className="relative rounded-lg overflow-hidden">
                        <img
                          src={relTour.image || "/placeholder.svg"}
                          alt={relTour.title}
                          className="w-full h-36 sm:h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(relTour.title)}`
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2.5 sm:p-3 md:p-4">
                          <div className="flex gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                            <span className="bg-teal-500 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                              {relTour.duration} Days
                            </span>
                            <span className="bg-rose-500 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                              {relTour.destination}
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className="font-semibold text-charcoal mt-2 group-hover:text-teal-600 transition-colors text-xs sm:text-sm md:text-base">
                        {relTour.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 line-clamp-2">
                        {relTour.description}
                      </p>
                    </Link>
                  ))}
                </div>

                <div className="text-right">
                  <span className="text-teal-500 text-sm font-medium cursor-pointer hover:text-teal-600">TOP</span>
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
        className={`w-full flex items-center justify-between p-2.5 sm:p-3 md:p-4 text-left transition-colors ${
          isOpen ? "bg-gray-100" : "bg-white hover:bg-gray-50"
        }`}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-charcoal text-xs sm:text-sm md:text-base pr-2 sm:pr-4">
          <span className="text-teal-500 mr-1.5 sm:mr-2">{isOpen ? "−" : "+"}</span>
          Day {day.day}: {day.title}
        </span>
      </button>

      {isOpen && (
        <div className="p-2.5 sm:p-3 md:p-4 bg-white border-t border-gray-200">
          <div
            className="prose prose-sm max-w-none text-gray-600 text-xs sm:text-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: day.description }}
          />
          {day.overnight && (
            <p className="mt-2.5 sm:mt-3 md:mt-4 text-[10px] sm:text-xs md:text-sm font-medium text-teal-600">
              Overnight in {day.overnight}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
