import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import { services } from "../data/services"
import { ArrowRight } from "lucide-react"

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive travel solutions tailored to your needs"
        image="/placeholder.svg?height=800&width=1920"
      />

      {/* Introduction */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <p className="text-lg text-sand-600 leading-relaxed">
              The Indian sub-continent being one of the most challenging destinations requires a lot of expertise and
              dedication, therefore we at TIME ensure to provide all our Travel Partners services which not only make
              their clients happy but gives us a repeat value.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <RevealWrapper key={service.id} delay={index * 50}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${
                  index !== services.length - 1 ? "border-b border-sand-300" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-terracotta-500 flex items-center justify-center mr-4">
                      <service.icon size={24} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif text-charcoal">{service.title}</h2>
                  </div>
                  <p className="text-sand-600 leading-relaxed mb-6">{service.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-terracotta-500 font-medium hover:text-terracotta-600 transition-colors"
                  >
                    Enquire About {service.title}
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Need a Custom Solution?</h2>
            <p className="text-sand-300 mb-8 max-w-2xl mx-auto">
              Our team specializes in creating bespoke travel experiences. Tell us what you're looking for, and we'll
              make it happen.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-terracotta-500 text-white font-medium tracking-wide hover:bg-terracotta-600 transition-colors"
            >
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
