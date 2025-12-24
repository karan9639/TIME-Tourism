"use client"

export default function PageHeader({ title, subtitle, image }) {
  return (
    <section className="relative h-[35vh] min-h-[250px] sm:h-[40vh] sm:min-h-[300px] flex items-center justify-center overflow-hidden bg-gray-200">
      {image && (
        <>
          <div className="absolute inset-0">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}
      <div className="relative z-10 text-center px-4">
        <p className="text-xs sm:text-sm text-white/80 tracking-wider mb-1 sm:mb-2 font-sans">Time Tours</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-script text-white drop-shadow-lg">{title}</h1>
        {subtitle && <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto mt-3 sm:mt-4">{subtitle}</p>}
      </div>
    </section>
  )
}
