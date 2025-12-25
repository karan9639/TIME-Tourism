"use client";

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  Award,
} from "lucide-react";
import RevealWrapper from "../components/RevealWrapper";

const headerCarouselImages = [
  "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
  "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg",
  "/indian-heritage-fort-rajasthan-luxury.jpg",
];

const stories = [
  {
    id: 1,
    slug: "food-travelist",
    title: "Food Travelist",
    category: "Culinary",
    description: "Culinary Journey Through India",
    image: "/indian-cooking-class-culinary-experience-luxury-tr.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "new-experience",
    title: "Spiritual India",
    category: "Experience",
    description: "Sacred Rituals Along the Ganges",
    image: "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
  },
  {
    id: 3,
    slug: "adventure-is-here",
    title: "Adventure Is Here",
    category: "Adventure",
    description: "Himalayan Trekking Expeditions",
    image: "/everest-base-camp-nepal-trekking-adventure-photogr.jpg",
  },
  {
    id: 4,
    slug: "lifetime-journey",
    title: "Lifetime Journey",
    category: "Expedition",
    description: "Epic Himalayan Expedition",
    image: "/himalaya-trekking-adventure-mountains.jpg",
  },
];

export default function Stories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedStory, setSelectedStory] = useState(stories[0]);

  const slideCount = headerCarouselImages.length;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideCount);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slideCount]);

  const trackTransform = useMemo(() => {
    return `translateX(-${currentSlide * 100}%)`;
  }, [currentSlide]);

  return (
    <>
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-script text-charcoal mb-6 tracking-wide">
            India Stories
          </h1>
          <p className="text-xl md:text-3xl font-serif text-gray-700 italic mb-4 leading-relaxed">
            Discover the soul of India through unforgettable journeys.
          </p>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From spiritual awakenings to culinary adventures, explore India's
            rich tapestry through the eyes of fellow travelers.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={prevSlide}
              className="shrink-0 w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-teal-600 hover:border-teal-500 transition-all shadow-sm hover:shadow-md"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: trackTransform }}
              >
                {headerCarouselImages.map((img, index) => (
                  <div
                    key={index}
                    className="shrink-0 px-3"
                    style={{ width: "100%" }}
                  >
                    <div className="flex justify-center">
                      <div className="w-[85%] sm:w-[75%] lg:w-[65%]">
                        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                          <img
                            src={img || "/placeholder.svg"}
                            alt={`India destination ${index + 1}`}
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

              <div className="mt-6 flex items-center justify-center gap-2.5">
                {headerCarouselImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === currentSlide
                        ? "bg-teal-500 w-8"
                        : "bg-gray-300 hover:bg-gray-400 w-2.5"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="shrink-0 w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-teal-600 hover:border-teal-500 transition-all shadow-sm hover:shadow-md"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
                About India Tours
              </h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the magic of India with TIME Tours - where ancient
                traditions meet modern luxury, and every journey becomes a story
                worth telling.
              </p>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <RevealWrapper delay={100}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-charcoal mb-3">
                      Diverse Destinations
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      From the majestic Himalayas to the serene backwaters of
                      Kerala, from the royal palaces of Rajasthan to the
                      spiritual ghats of Varanasi - discover India's incredible
                      diversity through carefully curated experiences.
                    </p>
                  </div>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={150}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                    <Users className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-charcoal mb-3">
                      Expert Guides
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our passionate local guides bring India's rich history and
                      culture to life. With deep knowledge and personal
                      connections, they provide authentic insights that
                      transform sightseeing into meaningful experiences.
                    </p>
                  </div>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                    <Calendar className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-charcoal mb-3">
                      Immersive Experiences
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Go beyond typical tourism with hands-on cooking classes,
                      meditation sessions with spiritual teachers, homestays
                      with local families, and exclusive access to hidden gems
                      known only to insiders.
                    </p>
                  </div>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={250}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                    <Award className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-charcoal mb-3">
                      Luxury & Comfort
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Travel in style with carefully selected heritage hotels,
                      boutique properties, and luxury resorts. We handle every
                      detail so you can focus on creating memories in India's
                      most extraordinary destinations.
                    </p>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
              Traveler Stories
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read firsthand accounts from travelers who have experienced the
              wonder of India with TIME Tours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {stories.map((story, index) => (
                <RevealWrapper key={story.id} delay={index * 50}>
                  <Link
                    to={`/stories/${story.slug}`}
                    className="relative overflow-hidden rounded-2xl cursor-pointer group block shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square"
                    onClick={() => setSelectedStory(story)}
                  >
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-300" />

                    <span className="absolute top-4 left-4 bg-teal-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-lg">
                      {story.category}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 transform group-hover:translate-y-0 transition-transform">
                      <h3 className="text-white font-bold text-xl md:text-2xl mb-2 group-hover:text-teal-300 transition-colors leading-tight">
                        {story.title}
                      </h3>
                      {story.description && (
                        <p className="text-white/90 text-sm md:text-base leading-relaxed">
                          {story.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </RevealWrapper>
              ))}
            </div>

            <div className="lg:col-span-1">
              <RevealWrapper delay={200}>
                <div className="sticky top-24">
                  <Link
                    to={`/stories/${selectedStory.slug}`}
                    className="relative overflow-hidden rounded-2xl block aspect-[3/4] shadow-xl hover:shadow-2xl transition-all duration-500 group"
                  >
                    <img
                      src={selectedStory.image || "/placeholder.svg"}
                      alt={selectedStory.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                    <button
                      type="button"
                      className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/25 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
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
                      <ChevronLeft size={24} />
                    </button>

                    <button
                      type="button"
                      className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/25 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
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
                      <ChevronRight size={24} />
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                      <span className="inline-block bg-teal-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4 shadow-lg">
                        {selectedStory.category}
                      </span>
                      <h2 className="text-4xl md:text-5xl font-serif text-white mb-3 leading-tight group-hover:text-teal-300 transition-colors">
                        {selectedStory.title}
                      </h2>
                      {selectedStory.description && (
                        <p className="text-white/95 text-base md:text-lg leading-relaxed">
                          {selectedStory.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
