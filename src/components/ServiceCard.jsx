export default function ServiceCard({ service, index }) {
  const Icon = service.icon

  return (
    <div
      className="group p-8 bg-sand-50 hover:bg-terracotta-500 transition-all duration-500 reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 flex items-center justify-center mb-6 text-terracotta-500 group-hover:text-white transition-colors">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-serif text-charcoal group-hover:text-white mb-3 transition-colors">
        {service.title}
      </h3>
      <p className="text-sand-600 group-hover:text-sand-100 text-sm leading-relaxed transition-colors">
        {service.description}
      </p>
    </div>
  )
}
