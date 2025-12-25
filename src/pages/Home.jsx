import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import RevealWrapper from "../components/RevealWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Utensils,
  Camera,
  ShoppingBag,
  Building,
  Play,
  Calendar,
  X,
} from "lucide-react";
import { tourPackagesData } from "../data/tourPackagesData";

// Destination images grid - matching reference layout
const destinationImages = [
  {
    id: 1,
    image: "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg",
    title: "India",
    size: "large",
    hasLabel: true,
  },
  {
    id: 2,
    image: "/himalaya-trekking-adventure-mountains.jpg",
    title: "Ladakh Himalayan Photography Tour",
    size: "medium",
  },
  {
    id: 3,
    image: "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
    title: "Catholic Church Tour Package In India",
    size: "medium",
  },
  {
    id: 4,
    image: "/kerala-backwaters-houseboat-india-sunset.jpg",
    title: "Cycling Tours in North East India",
    size: "medium",
  },
  {
    id: 5,
    image: "/indian-heritage-fort-rajasthan-luxury.jpg",
    title: "Heritage Tour",
    size: "small",
  },
  {
    id: 6,
    image: "/tiger-safari-india-wildlife-jungle.jpg",
    title: "Wildlife Safari",
    size: "small",
  },
  {
    id: 7,
    image: "/yoga-retreat-kerala-wellness-spa.jpg",
    title: "Wellness Retreat",
    size: "small",
  },
  {
    id: 8,
    image: "/jaipur-palace-rajasthan-pink-city-architecture.jpg",
    title: "Royal Palaces",
    size: "small",
  },
  {
    id: 9,
    image: "/maldives-overwater-villa-luxury-travel-editorial-s.jpg",
    title: "Holiday",
    size: "large",
    hasLabel: true,
  },
];

// Services
const services = [
  {
    icon: Utensils,
    title: "Restaurants",
    description:
      "Experience the culinary & food options available at all throughout the tour",
  },
  {
    icon: Camera,
    title: "Sightseeing",
    description:
      "Offers best deals on sightseeing packages across various popular sightseeing destinations in India",
  },
  {
    icon: ShoppingBag,
    title: "Shops & Boutiques",
    description: "Shop with countless open-air markets and handcraft boutiques",
  },
  {
    icon: Building,
    title: "Stay",
    description:
      "We find lodging to fit your vacation style, whether you're looking for five-star luxury or friendly boutique properties",
  },
];

// Tour packages for carousel
const tourPackages = [
  tourPackagesData.find((t) => t.slug === "golden-triangle"),
  tourPackagesData.find((t) => t.slug === "rajasthan-land-of-maharajas"),
  tourPackagesData.find((t) => t.slug === "mystic-kerala"),
  tourPackagesData.find((t) => t.slug === "central-india-wildlife"),
  tourPackagesData.find((t) => t.slug === "golden-triangle-forts-havelis"),
].filter(Boolean);

// Testimonials
const testimonials = [
  {
    quote:
      "Good Service & lovely people. You made my trip an excellent experience. Thanks for your help.",
    name: "Anthony Woodcock",
    location: "California, USA",
  },
  {
    quote:
      "I thank you for the professional and kind assistance you provided during our mission in India. Mr. Luca di Montezemolo (CEO of Ferrari) & the whole Italian delegation were very glad about your work.",
    name: "Patrizia Barboni",
    location: "Rome, Italy",
  },
  {
    quote:
      "TIME crafted an absolutely extraordinary journey through Rajasthan for our family. Every detail was impeccable.",
    name: "Sarah Mitchell",
    location: "New York, USA",
  },
];

// Partner logos
const partners = [
  { name: "Tourism of India", logo: "/India-Tourism-Logo-1.png" },
  { name: "IATO", logo: "/IATO-LOGO-1.png" },
  { name: "ASTA", logo: "/ASTA-logo-1.jpg" },
  { name: "USTOA", logo: "/USTOA-Logo-1.jpeg" },
  { name: "TAAI", logo: "/TAAI-Logo-1.png" },
  { name: "SITE", logo: "/Site-Logo-1.jpg" },
  { name: "PATA", logo: "/PATA-Logo.jpg" },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentPackageSlide, setCurrentPackageSlide] = useState(0);

  // ✅ FIX: Hooks must be inside the component
  const [open, setOpen] = useState(false);

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Close modal on ESC + lock scroll
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);

  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <>
      <Hero />

      {/* Personalized Tours Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-8 sm:mb-12">
            <p className="text-teal-500 font-script text-lg sm:text-xl mb-2">
              Personalized Tours
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-3 sm:mb-4">
              For Your Holiday
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto px-4">
              Customizable All Inclusive Itineraries • Best Deals Guaranteed •
              Special Early-Bird Offer • Transparent Pricing • 24*7 On-Trip
              Assistance
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            {/* Mobile grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:hidden">
              {destinationImages.slice(0, 8).map((dest) => (
                <div
                  key={dest.id}
                  className="relative group overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={dest.image || "/placeholder.svg"}
                    alt={dest.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {dest.hasLabel ? (
                    <div className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-0.5 rounded text-xs font-medium">
                      {dest.title}
                    </div>
                  ) : (
                    <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium line-clamp-2">
                      {dest.title}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-4">
              <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg">
                <img
                  src={destinationImages[0].image || "/placeholder.svg"}
                  alt={destinationImages[0].title}
                  className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3 bg-teal-500 text-white px-3 py-1 rounded text-xs font-medium">
                  India
                </div>
              </div>

              {[1, 2, 3].map((i) => (
                <div
                  key={destinationImages[i].id}
                  className="col-span-2 relative group overflow-hidden rounded-lg aspect-[4/3]"
                >
                  <img
                    src={destinationImages[i].image || "/placeholder.svg"}
                    alt={destinationImages[i].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium line-clamp-2">
                    {destinationImages[i].title}
                  </p>
                </div>
              ))}

              {[4, 5, 6].map((i) => (
                <div
                  key={destinationImages[i].id}
                  className="col-span-2 relative group overflow-hidden rounded-lg aspect-[4/3]"
                >
                  <img
                    src={destinationImages[i].image || "/placeholder.svg"}
                    alt={destinationImages[i].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}

              <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg">
                <img
                  src={destinationImages[8].image || "/placeholder.svg"}
                  alt={destinationImages[8].title}
                  className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-script text-xl lg:text-2xl">
                    Holiday
                  </p>
                </div>
              </div>

              <div className="col-span-4 lg:col-span-6 relative group overflow-hidden rounded-lg aspect-[3/1]">
                <img
                  src="/travel-photography-gallery-collage-india-nepal-bhu.jpg"
                  alt="Travel collage"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Choose a Unique Experience Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-teal-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left */}
            <RevealWrapper>
              <p className="text-teal-100 font-script text-lg sm:text-xl mb-2">
                Best Discover
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 sm:mb-6 leading-tight">
                CHOOSE A UNIQUE
                <br />
                EXPERIENCE
              </h2>
              <p className="text-white/90 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                We at TIME understand the changing time and demands of travelers
                and therefore aim to provide all our clients with an experience,
                which is unprecedented.
              </p>
            </RevealWrapper>

            {/* Right - Video/Image Cards */}
            <RevealWrapper delay={200}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Video Card */}
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="relative rounded-lg overflow-hidden aspect-[4/3] group w-full text-left"
                  aria-label="Play video"
                >
                  <img
                    src="/image.png"
                    alt="Guided tour"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <Play
                        size={16}
                        className="sm:w-5 sm:h-5 text-teal-500 ml-0.5"
                      />
                    </div>
                  </div>
                </button>

                {/* Image Card */}
                <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
                  <img
                    src="/luxury-palace-hotel-oberoi-udaivilas-editorial-pho.jpg"
                    alt="Luxury stay"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-teal-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-xs">
                    HAUL &amp; LOST SHOW
                  </div>
                </div>
              </div>
            </RevealWrapper>

            {/* ✅ Video Modal */}
            {open && (
              <div
                className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
                role="dialog"
                aria-modal="true"
                onMouseDown={() => setOpen(false)} // click outside closes
              >
                <div
                  className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
                  onMouseDown={(e) => e.stopPropagation()} // keep open when clicking inside
                >
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="absolute top-3 right-3 z-[10000] w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg"
                    aria-label="Close video"
                  >
                    <X className="w-5 h-5 text-gray-900" />
                  </button>

                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Ks0lWrfuz5Q?autoplay=1&rel=0"
                    title="TIME Tours Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 sm:py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <RevealWrapper key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <service.icon
                      size={32}
                      className="sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-gray-400"
                      strokeWidth={1}
                    />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-1 sm:mb-2 text-xs sm:text-sm">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Holiday Section - Tour Packages */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-8 sm:mb-12">
            <p className="text-teal-500 font-script text-lg sm:text-xl mb-2">
              Plan The
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal mb-3 sm:mb-4">
              Perfect Holiday
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aene an
              commodo ligula eget dolor. Aenean massa. Cum sociis m.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {tourPackages.map((tour) => (
                <Link
                  key={tour.id}
                  to={`/tour-packages/${tour.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                    <img
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-wrap gap-1 sm:gap-2">
                      <span className="bg-teal-500 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex items-center gap-0.5 sm:gap-1">
                        <Calendar size={8} className="sm:w-2.5 sm:h-2.5" />
                        {tour.duration}
                      </span>
                      <span className="bg-rose-500 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                        {tour.category}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-3">
                    <h3 className="font-semibold text-charcoal text-xs sm:text-sm group-hover:text-teal-500 transition-colors line-clamp-2">
                      {tour.title}
                    </h3>
                    <p className="text-gray-500 text-[10px] sm:text-xs mt-1 line-clamp-2 hidden sm:block">
                      {tour.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </RevealWrapper>

          
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper>
            <div className="relative text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 bg-orange-100 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-400 rounded-full flex items-center justify-center text-white">
                  <Quote size={20} className="sm:w-6 sm:h-6" />
                </div>
              </div>

              <button
                onClick={prevTestimonial}
                className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextTestimonial}
                className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>

              <blockquote className="text-gray-700 text-base sm:text-lg md:text-xl italic mb-4 sm:mb-6 px-2 sm:px-12">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <p className="font-script text-lg sm:text-xl text-charcoal">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                ({testimonials[currentTestimonial].location})
              </p>

              <div className="flex justify-center gap-2 mt-4 sm:hidden">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentTestimonial === index
                        ? "bg-teal-500"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Partners */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-8 sm:h-10 md:h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
