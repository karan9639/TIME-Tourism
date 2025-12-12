import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import { Award, Globe, Users, Heart, Target, Eye } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We are passionate about travel and dedicated to creating experiences that transform and inspire.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Every detail matters. We strive for excellence in every aspect of our service delivery.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting relationships with our clients and partners based on trust and mutual respect.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "We are committed to responsible tourism that benefits local communities and preserves cultural heritage.",
  },
]

const team = [
  {
    name: "Sanjeev Joshi",
    title: "Founder & Managing Director",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "With over 30 years in the travel industry, Sanjeev founded TIME with a vision to showcase the authentic beauty of the Indian Subcontinent.",
  },
  {
    name: "Atulya Joshi",
    title: "Director of Operations",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Atulya brings fresh perspectives and innovative solutions to ensure seamless travel experiences for all our guests.",
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        title="About TIME"
        subtitle="24 years of crafting extraordinary journeys across the Indian Subcontinent"
        image="/placeholder.svg?height=800&width=1920"
      />

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <RevealWrapper>
              <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mt-4 mb-6">
                A Legacy of Excellence Since 2000
              </h2>
              <div className="space-y-4 text-sand-600 leading-relaxed">
                <p>
                  TIME – Tourism India Management Enterprise Pvt Ltd. is a distinguished destination management company
                  with over 24 years of expertise in delivering exceptional travel experiences across the Indian
                  Subcontinent.
                </p>
                <p>
                  Specializing in crafting bespoke, authentic itineraries for destinations including India, Maldives,
                  Sri Lanka, Nepal, and Bhutan, we offer a comprehensive range of services, from luxury holidays to
                  niche, special-interest tours.
                </p>
                <p>
                  With a strong focus on personalization, we design tailor-made programs to meet individual and group
                  travelers' unique preferences and requirements. Our team of highly skilled travel planners and
                  knowledgeable guides, combined with our exclusive product offerings and unparalleled service,
                  consistently earns accolades from discerning clients.
                </p>
                <p>
                  At TIME, we are dedicated to providing immersive and unforgettable experiences, ensuring that every
                  journey is not just a trip, but a memorable adventure that exceeds expectations.
                </p>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={200}>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=700&width=600"
                  alt="TIME Travel Experience"
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-terracotta-500 p-6 text-white">
                  <p className="text-4xl font-serif">24+</p>
                  <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <RevealWrapper>
              <div className="bg-white p-10">
                <div className="w-14 h-14 bg-terracotta-500 flex items-center justify-center mb-6">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-serif text-charcoal mb-4">Our Mission</h3>
                <p className="text-sand-600 leading-relaxed">
                  To create extraordinary travel experiences that connect travelers with the authentic soul of the
                  Indian Subcontinent, while delivering exceptional service that exceeds expectations at every
                  touchpoint.
                </p>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={150}>
              <div className="bg-white p-10">
                <div className="w-14 h-14 bg-terracotta-500 flex items-center justify-center mb-6">
                  <Eye size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-serif text-charcoal mb-4">Our Vision</h3>
                <p className="text-sand-600 leading-relaxed">
                  To be the premier destination management company in the Indian Subcontinent, recognized globally for
                  our commitment to excellence, innovation, and sustainable tourism practices.
                </p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-16">
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mt-4">Our Values</h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <RevealWrapper key={value.title} delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-terracotta-500" />
                  </div>
                  <h3 className="text-xl font-serif text-charcoal mb-2">{value.title}</h3>
                  <p className="text-sand-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-16">
            <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mt-4">Meet Our Team</h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <RevealWrapper key={member.name} delay={index * 150}>
                <div className="text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto mb-6"
                  />
                  <h3 className="text-2xl font-serif text-charcoal mb-1">{member.name}</h3>
                  <p className="text-terracotta-500 text-sm mb-4">{member.title}</p>
                  <p className="text-sand-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 lg:py-28 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <Award size={48} className="mx-auto text-terracotta-400 mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Recognized Excellence</h2>
            <p className="text-sand-300 max-w-2xl mx-auto mb-12">
              Our commitment to exceptional service has been recognized by leading travel organizations and publications
              worldwide.
            </p>
          </RevealWrapper>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {["IATO Member", "PATA Member", "USTOA Allied", "Traveller Made"].map((award, index) => (
              <RevealWrapper key={award} delay={index * 100}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award size={32} className="text-terracotta-400" />
                  </div>
                  <p className="text-sand-200 text-sm">{award}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
