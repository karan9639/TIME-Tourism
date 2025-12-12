import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import { experiences } from "../data/experiences"
import { ArrowRight, ArrowUpRight } from "lucide-react"

export default function Experiences() {
  return (
    <>
      <PageHeader
        title="Curated Experiences"
        subtitle="Immerse yourself in extraordinary moments that create lasting memories"
        image="/placeholder.svg?height=800&width=1920"
      />

      {/* Introduction */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <p className="text-lg text-sand-600 leading-relaxed">
              Beyond sightseeing, we create immersive experiences that connect you with the soul of each destination.
              From royal palace stays to spiritual journeys, each experience is crafted to be truly unforgettable.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <RevealWrapper key={experience.id} delay={index * 100}>
                <div
                  id={experience.id}
                  className={`group relative overflow-hidden ${index === 0 ? "md:col-span-2" : ""}`}
                >
                  <div className={`overflow-hidden ${index === 0 ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
                    <img
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-terracotta-300 text-sm uppercase tracking-wider mb-2 block">
                      {experience.category}
                    </span>
                    <h3 className={`font-serif text-white mb-3 ${index === 0 ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                      {experience.title}
                    </h3>
                    <p className="text-sand-200 mb-4 max-w-xl">{experience.description}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-white font-medium hover:text-terracotta-300 transition-colors"
                    >
                      Plan This Experience
                      <ArrowUpRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">
              Little Inspirations
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mt-4">Explore Our Videos</h2>
          </RevealWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealWrapper>
              <div className="aspect-video bg-charcoal flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=700"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealWrapper>
            <RevealWrapper delay={150}>
              <div className="aspect-video bg-charcoal flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=700"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-terracotta-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Create Your Own Experience</h2>
            <p className="text-sand-100 mb-8 max-w-2xl mx-auto">
              Have something specific in mind? We specialize in crafting unique experiences tailored to your interests
              and passions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-terracotta-500 font-medium tracking-wide hover:bg-sand-100 transition-colors"
            >
              Start Planning
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
