"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import { Plus, Minus, Calendar, ArrowRight } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "How can I reach India, if I am residing outside India?",
    answer: {
      title: "Entry to India by Air",
      content:
        "India is well connected to almost all the countries in the world through air network. Delhi, Mumbai, Chennai, Kolkata (Calcutta), Thiruvananthapuram, Kochi (Cochin), Hyderabad and Goa (for charter flights) are the international gateways for India from where most of the flight take off takes place. Out of these airports, Delhi and Mumbai are the most preferred gateways as they are near to famous tourist destinations like Agra, Rajasthan, and Goa. Major international airlines flying to India are Lufthansa, British Airways, Singapore Airlines, Swiss, Air France, Emirates, SAS, Austrian Airlines, Al Italia, Air India, Indian Airlines (for neighboring countries and Middle East), Virgin Atlantic, Continental, Delta, NorthWest Airlines, Etihad, Qatar Airways, Sri Lankan, KLM, Aeroflot, Lot Polish, Thai Airways, Qantas, Oman Air, Turkish, Kuwait Airways, Druk Air etc.",
      subtitle: "Entry to India by Road",
      subcontent:
        "India can be also entered through certain road entry points from Nepal, Pakistan, and Bangladesh. These entry points are beneficial especially when one is moving from India to Nepal and Nepal to India.",
    },
  },
  {
    id: 2,
    question: "What about the climate of India? When can I visit India?",
    answer: {
      content:
        "India has a diverse climate ranging from tropical in the south to temperate and alpine in the Himalayan north. The best time to visit most of India is from October to March when the weather is pleasant and ideal for sightseeing.",
    },
  },
  {
    id: 3,
    question: "What are the major tourist circuits of India?",
    answer: {
      content:
        "Major tourist circuits include the Golden Triangle (Delhi-Agra-Jaipur), Rajasthan Heritage Circuit, Kerala Backwaters, Himalayan Circuit, and the Buddhist Circuit covering important Buddhist sites.",
    },
  },
  {
    id: 4,
    question: "In which part of the world is India located?",
    answer: {
      content:
        "India is located in South Asia, bordered by Pakistan to the west, China, Nepal, and Bhutan to the north, and Bangladesh and Myanmar to the east. The Indian Ocean is to the south.",
    },
  },
  {
    id: 5,
    question: "What are the major tourist destinations of India?",
    answer: {
      content:
        "Major destinations include the Taj Mahal in Agra, Jaipur's palaces, Kerala's backwaters, Goa's beaches, Varanasi's ghats, Ladakh's landscapes, and the temples of South India.",
    },
  },
  {
    id: 6,
    question: "What is the Length of India's Coastline?",
    answer: {
      content:
        "India has a coastline of approximately 7,517 kilometers, stretching along the Arabian Sea on the west, the Indian Ocean on the south, and the Bay of Bengal on the east.",
    },
  },
  {
    id: 7,
    question: "What is the best time to visit India?",
    answer: {
      content:
        "The best time to visit India varies by region. Generally, October to March is ideal for most parts. The summer months (April-June) are best for hill stations, while monsoon (July-September) is perfect for Kerala and the Northeast.",
    },
  },
  {
    id: 8,
    question: "What is the best thing to do if pestered by beggars and street urchins?",
    answer: {
      content:
        "It's best to politely decline and walk away. Avoid engaging or giving money as it encourages the practice. Instead, consider donating to established charities that help underprivileged communities.",
    },
  },
  {
    id: 9,
    question: "Can I hire a mobile phone in India?",
    answer: {
      content:
        "Yes, you can purchase a local SIM card with a valid ID and passport. Major carriers like Airtel, Vodafone, and Jio offer prepaid plans. Many hotels also provide mobile phone rental services.",
    },
  },
  {
    id: 10,
    question: "How safe is drinking water in India?",
    answer: {
      content:
        "It's recommended to drink only bottled water or filtered water. Avoid tap water and ice in drinks. Most hotels provide complimentary bottled water, and bottled water is readily available everywhere.",
    },
  },
  {
    id: 11,
    question: "How should I tip waiters at restaurants / hotels?",
    answer: {
      content:
        "Tipping is customary in India. A tip of 10-15% is appropriate at restaurants if service charge is not included. For hotel staff, Rs. 50-100 per service is standard. Always carry small denominations for tipping.",
    },
  },
]

const sidebarTours = [
  {
    id: 1,
    slug: "golden-triangle",
    title: "Golden Triangle",
    description: "The itinerary covers the famous cities of Delhi, Agra & Jaipur.",
    image: "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg",
    days: 6,
    location: "India",
  },
  {
    id: 2,
    slug: "rajasthan-land-of-maharajas",
    title: "Rajasthan Tour – The Land of Maharajas",
    description:
      "Delhi, the Empress of Indian cities has a fascinating history and a stimulating present. She has often been sacked and left naked and desolate. But she could not be despoiled of the incomparable situation that marks her for the metropolis of a Great Empire. The capital of India, Delhi has been the seat of power...",
    image: "/indian-heritage-fort-rajasthan-luxury.jpg",
    days: 13,
    location: "India",
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left hover:text-teal-600 transition-colors"
      >
        <span className="font-medium text-charcoal flex items-center gap-3">
          <span className="text-teal-500">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
          {faq.question}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 pl-9 text-gray-600 text-sm leading-relaxed">
          {faq.answer.title && <h4 className="font-semibold text-charcoal mb-2">{faq.answer.title}</h4>}
          <p className="mb-4">{faq.answer.content}</p>
          {faq.answer.subtitle && <h4 className="font-semibold text-charcoal mb-2">{faq.answer.subtitle}</h4>}
          {faq.answer.subcontent && <p>{faq.answer.subcontent}</p>}
        </div>
      )}
    </div>
  )
}

function SidebarTourCard({ tour }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/tour-packages/${tour.slug}`)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View ${tour.title} tour details`}
      className="bg-white rounded-lg overflow-hidden shadow-sm mb-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.image || "/placeholder.svg"}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1 shadow-md">
            <Calendar size={12} />
            {tour.days} Days
          </span>
          <span className="bg-coral-500 text-white text-xs px-2 py-1 rounded shadow-md">{tour.location}</span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <ArrowRight size={16} className="text-teal-600" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-charcoal mb-2 group-hover:text-teal-600 transition-colors duration-300">
          {tour.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-4 leading-relaxed">{tour.description}</p>
        <div className="mt-3 flex items-center text-teal-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
          View Details
          <ArrowRight size={14} className="ml-1" />
        </div>
      </div>
    </div>
  )
}

export default function FAQs() {
  const [openFAQ, setOpenFAQ] = useState(1)

  const headerImages = [
    "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg",
    "/indian-heritage-fort-rajasthan-luxury.jpg",
    "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
    "/yoga-retreat-kerala-wellness-spa.jpg",
  ]

  return (
    <>
      <PageHeader title="FAQ" image={headerImages} variant="collage" />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* FAQ Column */}
            <div className="lg:col-span-2">
              <RevealWrapper>
                <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-8">Frequently Asked Questions</h2>
                <div className="space-y-0">
                  {faqs.map((faq) => (
                    <FAQItem
                      key={faq.id}
                      faq={faq}
                      isOpen={openFAQ === faq.id}
                      onToggle={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                    />
                  ))}
                </div>
              </RevealWrapper>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <RevealWrapper delay={200}>
                {sidebarTours.map((tour) => (
                  <SidebarTourCard key={tour.id} tour={tour} />
                ))}
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
