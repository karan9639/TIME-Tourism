import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function DestinationCard({ destination, index }) {
  return (
    <Link
      to={`/destinations/${destination.id}`}
      className="group relative overflow-hidden reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-serif text-white mb-2">{destination.name}</h3>
        <p className="text-sand-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
          {destination.tagline}
        </p>
        <span className="inline-flex items-center text-terracotta-300 text-sm font-medium group-hover:text-terracotta-400 transition-colors">
          Discover
          <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  )
}
