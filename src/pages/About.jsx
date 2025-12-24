"use client"

import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import { Heart, Award, Users, Leaf, Target, Eye } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We are passionate about travel and dedicated to creating experiences that transform and inspire.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Every detail matters. We strive for excellence in every aspect of our service delivery.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting relationships with our clients and partners based on trust and mutual respect.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We are committed to responsible tourism that benefits local communities and preserves cultural heritage.",
  },
]

const team = [
  {
    name: "Sanjeev Joshi",
    role: "Founder & Managing Director",
    description:
      "With over 30 years in the travel industry, Sanjeev founded TIME with a vision to showcase the authentic beauty of the Indian Subcontinent.",
  },
  {
    name: "Atulya Joshi",
    role: "Director of Operations",
    description:
      "Atulya brings fresh perspectives and innovative solutions to ensure seamless travel experiences for all our guests.",
  },
]

const awards = [
  { name: "IATO Member", description: "Indian Association of Tour Operators" },
  { name: "PATA Member", description: "Pacific Asia Travel Association" },
  { name: "USTOA Allied", description: "United States Tour Operators Association" },
  { name: "Traveller Made", description: "Global Network of Travel Designers" },
]

export default function About() {
  return (
    <>
      <PageHeader
        title="About TIME"
        subtitle="24 years of crafting extraordinary journeys across the Indian Subcontinent"
        image="/indian-heritage-fort-rajasthan-luxury.jpg"
      />

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <RevealWrapper>
              <p className="text-terracotta-500 tracking-[0.2em] text-sm uppercase mb-4">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">A Legacy of Excellence Since 2000</h2>
              <div className="space-y-4 text-taupe-600 leading-relaxed">
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
                <div className="aspect-[4/3] bg-cream-200 rounded-lg overflow-hidden">
                  <img
                    src="/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg"
                    alt="TIME Tours Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-terracotta-500 text-white p-6 rounded-lg">
                  <p className="text-4xl font-bold">24+</p>
                  <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealWrapper>
              <div className="bg-cream-50 p-8 rounded-lg border border-cream-200">
                <div className="w-14 h-14 bg-terracotta-100 rounded-full flex items-center justify-center mb-6">
                  <Target size={24} className="text-terracotta-500" />
                </div>
                <h3 className="text-xl font-serif text-charcoal mb-4">Our Mission</h3>
                <p className="text-taupe-600 leading-relaxed">
                  To create extraordinary travel experiences that connect travelers with the authentic soul of the
                  Indian Subcontinent, while delivering exceptional service that exceeds expectations at every
                  touchpoint.
                </p>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={200}>
              <div className="bg-cream-50 p-8 rounded-lg border border-cream-200">
                <div className="w-14 h-14 bg-terracotta-100 rounded-full flex items-center justify-center mb-6">
                  <Eye size={24} className="text-terracotta-500" />
                </div>
                <h3 className="text-xl font-serif text-charcoal mb-4">Our Vision</h3>
                <p className="text-taupe-600 leading-relaxed">
                  To be the premier destination management company in the Indian Subcontinent, recognized globally for
                  our commitment to excellence, innovation, and sustainable tourism practices.
                </p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-script text-charcoal">Our Values</h2>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-terracotta-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{value.title}</h3>
                  <p className="text-taupe-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-script text-charcoal">Meet Our Team</h2>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-cream-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users size={48} className="text-taupe-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">{member.name}</h3>
                  <p className="text-terracotta-500 text-sm mb-4">{member.role}</p>
                  <p className="text-taupe-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 lg:py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <div className="w-14 h-14 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award size={24} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Recognized Excellence</h2>
            <p className="text-taupe-400 max-w-2xl mx-auto mb-12">
              Our commitment to exceptional service has been recognized by leading travel organizations and publications
              worldwide.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={24} className="text-terracotta-400" />
                  </div>
                  <h3 className="text-white font-medium mb-1">{award.name}</h3>
                  <p className="text-taupe-500 text-xs">{award.description}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
