export default function PageHeader({ title, subtitle, image }) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-sand-200 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
