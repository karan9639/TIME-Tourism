import PageHeader from "../components/PageHeader";
import FilterableGallery from "../components/FilterableGallery";
import RevealWrapper from "../components/RevealWrapper";
import CloudinaryGallery from "../components/CloudinaryGallery";
import { demoGalleryImages } from "../data/cloudinaryImages";

export default function Gallery() {
  return (
    <main>
      <PageHeader
        title="Photo Gallery"
        subtitle="Capturing the beauty and essence of the Indian Subcontinent"
        image="/travel-photography-gallery-collage-india-nepal-bhu.jpg"
      />

      {/* Featured Gallery Section */}
      <section
        className="py-16 lg:py-24 bg-cream"
        aria-labelledby="gallery-collection"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">
              Our Collection
            </span>
            <h2
              id="gallery-collection"
              className="text-3xl md:text-4xl font-serif text-charcoal mt-4 mb-6"
            >
              Journey Through Extraordinary Moments
            </h2>
            <p className="text-sand-600 max-w-2xl mx-auto leading-relaxed">
              Explore our curated collection of travel photography from across
              India, Nepal, Bhutan, and Sri Lanka. Each image tells a story of
              adventure, culture, and natural beauty.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <FilterableGallery
              images={demoGalleryImages}
              layout="grid"
              columns={3}
              aspectRatio="landscape"
              enableLightbox
            />
          </RevealWrapper>
        </div>
      </section>

      {/* Bento Layout Section */}
      <section
        className="py-16 lg:py-24 bg-warm-white"
        aria-labelledby="gallery-featured"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <h2
              id="gallery-featured"
              className="text-3xl md:text-4xl font-serif text-charcoal mb-6"
            >
              Featured Destinations
            </h2>
            <p className="text-sand-600 max-w-2xl mx-auto">
              A dynamic showcase of our most breathtaking destinations and
              experiences
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <CloudinaryGallery
              images={demoGalleryImages}
              layout="bento"
              enableLightbox
              className="mb-8"
            />
          </RevealWrapper>
        </div>
      </section>

      {/* Masonry Layout Section */}
      <section
        className="py-16 lg:py-24 bg-sand-100"
        aria-labelledby="gallery-moments"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <h2
              id="gallery-moments"
              className="text-3xl md:text-4xl font-serif text-charcoal mb-6"
            >
              Travel Moments
            </h2>
            <p className="text-sand-600 max-w-2xl mx-auto">
              Candid captures and authentic experiences from our journeys
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <CloudinaryGallery
              images={demoGalleryImages}
              layout="masonry"
              enableLightbox
            />
          </RevealWrapper>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-20 bg-terracotta-500"
        aria-labelledby="gallery-cta"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="gallery-cta"
            className="text-3xl md:text-4xl font-serif text-white mb-6"
          >
            Ready to Create Your Own Memories?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Let us craft a personalized journey that captures moments as
            beautiful as these
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-terracotta-500 px-8 py-4 font-medium hover:bg-sand-50 transition-colors rounded"
          >
            Start Planning Your Journey
          </a>
        </div>
      </section>
    </main>
  );
}
