import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

export default function ExperienceCard({ experience, index, featured = false }) {
  return (
    <Link
      to={`/experiences#${experience.id}`}
      className={`group relative overflow-hidden reveal ${featured ? "col-span-2 row-span-2" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`overflow-hidden ${featured ? "aspect-square" : "aspect-[4/3]"}`}>
        <img
          src={experience.image || "/placeholder.svg"}
          alt={experience.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-terracotta-300 text-xs uppercase tracking-wider mb-2 block">{experience.category}</span>
        <h3 className={`font-serif text-white mb-2 ${featured ? "text-3xl" : "text-xl"}`}>{experience.title}</h3>
        <span className="inline-flex items-center text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Learn More
          <ArrowUpRight size={16} className="ml-1" />
        </span>
      </div>
    </Link>
  )
}
