"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react"

const LOGO_URL =
  "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766208995/db12b09d-532d-4a98-b2b0-b9070c23525a.png"

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Tour Packages", path: "/tour-packages" },
  { name: "FAQ's", path: "/faqs" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Stories", path: "/stories" },
  { name: "Contact Us", path: "/contact" },
]

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 2500)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
  }

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-white font-semibold tracking-wide mb-4">Time Tours</h4>
              <Link to="/" className="inline-flex items-center" aria-label="Go to home">
                <img
                  src={LOGO_URL || "/placeholder.svg"}
                  alt="TIME - The company that cares"
                  className="h-12 sm:h-14 lg:h-16 w-auto"
                  loading="lazy"
                  decoding="async"
                />
              </Link>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                TIME was established in 1998 with the sole aim of providing quality services viz a viz value for money.
              </p>

              {/* Contact Info */}
              <ul className="mt-5 space-y-2.5 text-sm">
                <li className="flex items-center gap-3 text-white/70">
                  <Mail size={16} className="text-teal-400 flex-shrink-0" />
                  <a
                    href="mailto:info@tourismindiamanagement.com"
                    className="hover:text-teal-400 transition-colors break-all text-xs sm:text-sm"
                  >
                    info@tourismindiamanagement.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <Phone size={16} className="text-teal-400 flex-shrink-0" />
                  <a href="tel:+91-124-4932450" className="hover:text-teal-400 transition-colors text-xs sm:text-sm">
                    +91-124-4932450
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <MapPin size={16} className="text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">USA - 27615 SE Robinson RD, Camas WA 98607</span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <MapPin size={16} className="text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">INDIA - 603, Millennium Plaza, Gurugram Haryana</span>
                </li>
              </ul>

              {/* Social - Follow Us */}
              <div className="mt-5">
                <h5 className="text-white font-semibold mb-3 text-sm">Follow Us</h5>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="p-2 rounded bg-white/10 hover:bg-white/20 text-white/80 hover:text-teal-400 transition"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded bg-white/10 hover:bg-white/20 text-white/80 hover:text-teal-400 transition"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded bg-white/10 hover:bg-white/20 text-white/80 hover:text-teal-400 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded bg-white/10 hover:bg-white/20 text-white/80 hover:text-teal-400 transition"
                    aria-label="YouTube"
                  >
                    <Youtube size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold tracking-wide mb-4">Quick Links</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-teal-400 transition text-xs sm:text-sm hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Form */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-white font-semibold tracking-wide mb-4">Contact Us</h4>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="footer-name" className="block text-xs sm:text-sm text-white/80 mb-1">
                    Your Name (required) <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="footer-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40
                               focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30 transition text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="footer-email" className="block text-xs sm:text-sm text-white/80 mb-1">
                    Your Email (required) <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40
                               focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30 transition text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="footer-subject" className="block text-xs sm:text-sm text-white/80 mb-1">
                    Subject
                  </label>
                  <input
                    id="footer-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40
                               focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30 transition text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="footer-message" className="block text-xs sm:text-sm text-white/80 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="footer-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40
                               focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30 transition text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 sm:py-3 rounded bg-rose-500 text-white font-medium text-sm
                             hover:bg-rose-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : isSubmitted ? "Sent!" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-50">
        <Link
          to="/contact"
          className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full bg-rose-500 text-white text-xs sm:text-sm font-medium shadow-lg
                     hover:bg-rose-600 transition flex items-center gap-2"
        >
          <span className="hidden sm:inline">Speak to an Expert</span>
          <span className="sm:hidden">Contact</span>
        </Link>
      </div>
    </footer>
  )
}
