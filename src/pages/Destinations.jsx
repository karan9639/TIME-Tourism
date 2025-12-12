import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import { destinations } from "../data/destinations"
import { ArrowRight } from "lucide-react"

export default function Destinations() {
  return (
    <>
      <PageHeader
        title="Our Destinations"
        subtitle="Five extraordinary countries, infinite possibilities"
        image="/placeholder.svg?height=800&width=1920"
      />

      {/* Introduction */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <p className="text-lg text-sand-600 leading-relaxed">
              From the majestic palaces of Rajasthan to the serene beaches of the Maldives, the mystical monasteries of
              Bhutan to the wildlife reserves of Sri Lanka – we bring you the very best of the Indian Subcontinent.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {destinations.map((destination, index) => (
            <RevealWrapper key={destination.id} delay={index * 100}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${
                  index !== destinations.length - 1 ? "border-b border-sand-300" : ""
                } ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Link to={`/destinations/${destination.id}`} className="block overflow-hidden group">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">{destination.name}</h2>
                  <p className="text-lg text-terracotta-500 italic mb-4">{destination.tagline}</p>
                  <p className="text-sand-600 leading-relaxed mb-6">{destination.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {destination.highlights.slice(0, 4).map((highlight) => (
                      <span key={highlight} className="px-3 py-1 bg-sand-100 text-sand-700 text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/destinations/${destination.id}`}
                    className="inline-flex items-center text-terracotta-500 font-medium hover:text-terracotta-600 transition-colors"
                  >
                    Explore {destination.name}
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-terracotta-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Can't Decide? Let Us Help</h2>
            <p className="text-sand-100 mb-8 max-w-2xl mx-auto">
              Our travel experts will help you choose the perfect destination based on your interests, budget, and
              travel style.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-terracotta-500 font-medium tracking-wide hover:bg-sand-100 transition-colors"
            >
              Speak to an Expert
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
