"use client"

import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import { Calendar } from "lucide-react"
import { tourPackagesData } from "../data/tourPackagesData"

// Separate tours by category
const indiaTours = tourPackagesData.filter((tour) => tour.destination === "India")
const holidayTours = tourPackagesData.filter((tour) => tour.destination !== "India")

function TourCard({ tour }) {
  const linkPath = `/tour-packages/${tour.slug || tour.id}`

  return (
    <article className="group block">
      <Link to={linkPath}>
        <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
          <img
            src={tour.image || "/placeholder.svg"}
            alt={tour.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex flex-wrap gap-1 sm:gap-2">
            <span className="bg-teal-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded flex items-center gap-1 font-medium">
              <Calendar size={10} className="sm:w-3 sm:h-3" />
              {tour.duration} Days
            </span>
            <span className="bg-rose-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded font-medium">
              {tour.destination}
            </span>
          </div>
        </div>
        <div className="mt-2 sm:mt-3">
          <h3 className="font-semibold text-charcoal text-xs sm:text-sm group-hover:text-teal-500 transition-colors line-clamp-2">
            {tour.title}
          </h3>
          <p className="text-gray-500 text-[10px] sm:text-xs mt-1 line-clamp-2">{tour.description}</p>
        </div>
      </Link>
    </article>
  )
}

function HolidayTourCard({ tour }) {
  const linkPath = `/tour-packages/${tour.slug || tour.id}`

  return (
    <article className="group block">
      <Link to={linkPath}>
        <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
          <img
            src={tour.image || "/placeholder.svg"}
            alt={tour.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex flex-wrap gap-1 sm:gap-2">
            <span className="bg-teal-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded flex items-center gap-1 font-medium">
              <Calendar size={10} className="sm:w-3 sm:h-3" />
              {tour.duration} Days
            </span>
            <span className="bg-rose-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded font-medium">
              Holidays
            </span>
          </div>
        </div>
        <div className="mt-2 sm:mt-3">
          <h3 className="font-semibold text-charcoal text-xs sm:text-sm group-hover:text-teal-500 transition-colors line-clamp-2">
            {tour.title}
          </h3>
          <p className="text-gray-500 text-[10px] sm:text-xs mt-1 line-clamp-3">
            {tour.fullDescription || tour.description}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default function TourPackages() {
  return (
    <>
      <PageHeader title="Tour Packages" image="/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg" />

      <section className="py-10 sm:py-12 lg:py-16 bg-white" aria-labelledby="india-tours-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid of India tours - 2 cols on mobile, 2 on sm, 3 on lg */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
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
        <section className="py-10 sm:py-12 lg:py-16 bg-gray-50" aria-labelledby="holiday-tours-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
              {holidayTours.map((tour, index) => (
                <RevealWrapper key={tour.id} delay={index * 100}>
                  <HolidayTourCard tour={tour} />
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
