"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import RevealWrapper from "../components/RevealWrapper"

const headerCarouselImages = [
  "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
  "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg",
  "/indian-heritage-fort-rajasthan-luxury.jpg",
]

const stories = [
  {
    id: 1,
    slug: "adventure-is-here",
    title: "Beautiful China",
    description: "PHOTOGRAPHED BY J.D SWATANTRA",
    image: "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "stunning-greece",
    title: "Food Travelist",
    image: "/indian-cooking-class-culinary-experience-luxury-tr.jpg",
  },
  {
    id: 3,
    slug: "new-experience",
    title: "Lifetime Journey",
    image: "/himalaya-trekking-adventure-mountains.jpg",
  },
  {
    id: 4,
    slug: "adventure-is-here",
    title: "Travel In Europe",
    image: "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
  },
  {
    id: 5,
    slug: "stunning-greece",
    title: "Stunning Greece",
    image: "/maldives-overwater-villa-luxury-travel-editorial-s.jpg",
  },
  {
    id: 6,
    slug: "adventure-is-here",
    title: "Adventure Is Here",
    image: "/everest-base-camp-nepal-trekking-adventure-photogr.jpg",
  },
]

export default function Stories() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedStory, setSelectedStory] = useState(stories[0])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % headerCarouselImages.length)
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + headerCarouselImages.length) % headerCarouselImages.length)

  return (
    <>
      {/* Header */}
      <section className="pt-8 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-script text-charcoal mb-4">Stories</h1>
          <p className="text-xl font-serif text-gray-700 italic mb-2">
            There's something for every wanderlust-filled heart.
          </p>
          <p className="text-lg text-gray-600">Dive into a world of inspiration and adventure.</p>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="flex gap-4 justify-center items-center">
              <button
                onClick={prevSlide}
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-4 overflow-hidden">
                {headerCarouselImages.map((img, index) => (
                  <div key={index} className="w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={img || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Story cards */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {stories.slice(0, 6).map((story, index) => (
                <RevealWrapper key={story.id} delay={index * 50}>
                  <Link
                    to={`/stories/${story.slug}`}
                    className={`relative overflow-hidden rounded-lg cursor-pointer group block ${
                      index === 0 || index === 5 ? "aspect-[4/3]" : "aspect-square"
                    }`}
                    onClick={() => setSelectedStory(story)}
                  >
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold">{story.title}</h3>
                    </div>
                  </Link>
                </RevealWrapper>
              ))}
            </div>

            {/* Right column - Featured story */}
            <div className="lg:col-span-1">
              <RevealWrapper delay={200}>
                <Link
                  to={`/stories/${selectedStory.slug}`}
                  className="relative overflow-hidden rounded-lg block aspect-[3/4]"
                >
                  <img
                    src={selectedStory.image || "/placeholder.svg"}
                    alt={selectedStory.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Navigation arrows */}
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Previous story"
                    onClick={(e) => {
                      e.preventDefault()
                      const currentIndex = stories.findIndex((s) => s.id === selectedStory.id)
                      const prevIndex = (currentIndex - 1 + stories.length) % stories.length
                      setSelectedStory(stories[prevIndex])
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Next story"
                    onClick={(e) => {
                      e.preventDefault()
                      const currentIndex = stories.findIndex((s) => s.id === selectedStory.id)
                      const nextIndex = (currentIndex + 1) % stories.length
                      setSelectedStory(stories[nextIndex])
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-3xl font-serif text-white mb-2">{selectedStory.title}</h2>
                    {selectedStory.description && <p className="text-white/80 text-sm">{selectedStory.description}</p>}
                  </div>
                </Link>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
