export default function PageHeader({ title, subtitle, image }) {
  return (
    <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center overflow-hidden bg-taupe-400">
      {image && (
        <>
          <div className="absolute inset-0">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover opacity-60" />
          </div>
          <div className="absolute inset-0 bg-taupe-500/50" />
        </>
      )}
      <div className="relative z-10 text-center px-4">
        <p className="text-sm text-white/70 tracking-wider mb-2 font-sans">Time Tours</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-script text-white">{title}</h1>
        {subtitle && <p className="text-base text-white/80 max-w-2xl mx-auto mt-4">{subtitle}</p>}
      </div>
    </section>
  )
}
