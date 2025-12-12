import { Quote } from "lucide-react"

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-8 lg:p-10 shadow-sm">
      <Quote size={40} className="text-terracotta-300 mb-6" />
      <blockquote className="text-lg font-serif text-charcoal leading-relaxed mb-6 italic">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center">
        <img
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-medium text-charcoal">{testimonial.name}</p>
          <p className="text-sm text-sand-500">{testimonial.title}</p>
        </div>
      </div>
    </div>
  )
}
