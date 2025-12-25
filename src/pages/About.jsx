"use client";

import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import RevealWrapper from "../components/RevealWrapper";
import {
  Heart,
  Award,
  Users,
  Leaf,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We are passionate about travel and dedicated to creating experiences that transform and inspire.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Every detail matters. We strive for excellence in every aspect of our service delivery.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build lasting relationships with our clients and partners based on trust and mutual respect.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We are committed to responsible tourism that benefits local communities and preserves cultural heritage.",
  },
];

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
];

const testimonials = [
  {
    quote:
      "I thank you for the professional and kind assistance you provided during our mission in India, Mr. Luca di Montezemolo (CEO of Ferrari) & the whole Italian delegation were very glad about your work.",
    name: "Patriza Barboni",
    location: "Rome Italy",
  },
  {
    quote:
      "Good Service & lovely people. You made my trip an excellent experience. Thanks for your help.",
    name: "Anthony Westbrook",
    location: "California USA",
  },
];

const partners = [
  { name: "Tourism of India", logo: "/tourism-india-logo.jpg" },
  { name: "IATO", logo: "/iato-travel-logo.jpg" },
  { name: "ASTA", logo: "/asta-travel-logo.jpg" },
  { name: "USTOA", logo: "/ustoa-travel-logo.jpg" },
  { name: "TAAI", logo: "/taai-travel-logo.jpg" },
  { name: "SITE", logo: "/site-events-logo.jpg" },
  { name: "PATA", logo: "/pata-asia-travel-logo.jpg" },
];

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <>
      <PageHeader
        title="About Us"
        image="/indian-heritage-fort-rajasthan-luxury.jpg"
      />

      {/* About Time Tours Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left: Text */}
            <RevealWrapper>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
                About Time Tours
              </h2>

              <div className="space-y-5 text-gray-600 leading-relaxed max-w-2xl">
                <p>
                  In today's world where man and machine are synonyms due to
                  fast growing technology, a holiday has become a must for us to
                  relax and rejuvenate. The tourism industry, therefore, has
                  become one of the fast growing industries and is changing its
                  dimensions every minute. We at TIME understand the changing
                  time and demands of travelers and therefore aim to provide all
                  our clients with an experience, which is unparalleled.
                </p>

                <p>
                  TIME was established in 1998 with the sole aim of providing
                  quality services viz a viz value for money. The Indian
                  sub-continent being one of the most challenging destinations
                  requires a lot of expertise and dedication, therefore we at
                  TIME ensure to provide all our Travel Partners services which
                  not only make their clients happy but gives us a repeat value.
                </p>

                <p className="italic">
                  Our motto, "The Company that cares", says it all.
                </p>
              </div>
            </RevealWrapper>

            {/* Right: Logo */}
            <RevealWrapper delay={200}>
              <div className="flex justify-center lg:justify-end lg:pt-2">
                <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md flex justify-center lg:justify-end">
                  <img
                    src="https://res.cloudinary.com/dptxyo9dy/image/upload/v1766144775/TIME_-_Company-removebg-preview_cejuig.png"
                    alt="TIME Tours logo"
                    className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
                  />
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper>
            <div className="relative text-center">
              {/* Avatar icon */}
              <div className="w-20 h-20 mx-auto mb-8 bg-orange-100 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white">
                  <Quote size={24} />
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg md:text-xl italic mb-6 px-12">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author */}
              <p className="font-script text-xl text-charcoal">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-gray-500 text-sm">
                ({testimonials[currentTestimonial].location})
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>
          <div className="text-right mt-4">
            <span className="text-teal-500 text-sm font-medium">TOP</span>
          </div>
        </div>
      </section>
    </>
  );
}
