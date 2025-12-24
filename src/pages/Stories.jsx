"use client";

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RevealWrapper from "../components/RevealWrapper";

const headerCarouselImages = [
  "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
  "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg",
  "/indian-heritage-fort-rajasthan-luxury.jpg",
];

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
];

export default function Stories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedStory, setSelectedStory] = useState(stories[0]);

  const slideCount = headerCarouselImages.length;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideCount);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);

  // keyboard support for top carousel
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slideCount]);

  /**
   * We show 1/2/3 images depending on screen size, but we can’t know Tailwind breakpoints in JS without listeners.
   * So we implement a simple "track" that always has all slides and translates one slide at a time.
   * Each slide has responsive width:
   * - mobile: 80%
   * - sm: 45%
   * - lg: 32%
   */
  const trackTransform = useMemo(() => {
    return `translateX(-${currentSlide * 100}%)`;
  }, [currentSlide]);

  return (
    <>
      {/* Header */}
      <section className="pt-8 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-script text-charcoal mb-4">
            Stories
          </h1>
          <p className="text-xl font-serif text-gray-700 italic mb-2">
            There's something for every wanderlust-filled heart.
          </p>
          <p className="text-lg text-gray-600">
            Dive into a world of inspiration and adventure.
          </p>
        </div>
      </section>

      {/* ✅ FIXED Image Carousel */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center gap-3 sm:gap-4">
            {/* Prev */}
            <button
              type="button"
              onClick={prevSlide}
              className="shrink-0 w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-400 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Viewport */}
            <div className="overflow-hidden w-full">
              {/* Track */}
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: trackTransform }}
              >
                {headerCarouselImages.map((img, index) => (
                  <div
                    key={index}
                    className="shrink-0 px-2"
                    style={{ width: "100%" }} // one "page" per slide
                  >
                    <div className="flex justify-center">
                      <div className="w-[80%] sm:w-[70%] lg:w-[60%]">
                        <div className="w-full aspect-[3/2] rounded-xl overflow-hidden">
                          <img
                            src={img || "/placeholder.svg"}
                            alt={`Story image ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {headerCarouselImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === currentSlide
                        ? "bg-terracotta-500"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={nextSlide}
              className="shrink-0 w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-400 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
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
                      index === 0 || index === 5
                        ? "aspect-[4/3]"
                        : "aspect-square"
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
                      <h3 className="text-white font-semibold">
                        {story.title}
                      </h3>
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
                    type="button"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Previous story"
                    onClick={(e) => {
                      e.preventDefault();
                      const idx = stories.findIndex(
                        (s) => s.id === selectedStory.id
                      );
                      const prevIndex =
                        (idx - 1 + stories.length) % stories.length;
                      setSelectedStory(stories[prevIndex]);
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Next story"
                    onClick={(e) => {
                      e.preventDefault();
                      const idx = stories.findIndex(
                        (s) => s.id === selectedStory.id
                      );
                      const nextIndex = (idx + 1) % stories.length;
                      setSelectedStory(stories[nextIndex]);
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-3xl font-serif text-white mb-2">
                      {selectedStory.title}
                    </h2>
                    {selectedStory.description && (
                      <p className="text-white/80 text-sm">
                        {selectedStory.description}
                      </p>
                    )}
                  </div>
                </Link>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
