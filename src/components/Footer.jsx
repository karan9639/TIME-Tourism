"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const LOGO_URL =
  "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766208995/db12b09d-532d-4a98-b2b0-b9070c23525a.png";

const footerLinks = {
  explore: [
    { name: "About Us", path: "/about" },
    { name: "Tour Packages", path: "/tour-packages" },
    { name: "FAQ's", path: "/faqs" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Stories", path: "/stories" },
  ],
  destinations: [
    { name: "India", path: "/destinations/india" },
    { name: "Nepal", path: "/destinations/nepal" },
    { name: "Bhutan", path: "/destinations/bhutan" },
    { name: "Sri Lanka", path: "/destinations/sri-lanka" },
    { name: "Maldives", path: "/destinations/maldives" },
  ],
  connect: [
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ],
};

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2500);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div>
              <Link
                to="/"
                className="inline-flex items-center"
                aria-label="Go to home"
              >
                <img
                  src={LOGO_URL}
                  alt="TIME"
                  className="h-12 w-auto"
                  loading="lazy"
                  decoding="async"
                />
              </Link>

              <p className="mt-4 text-sm leading-relaxed text-white/75">
                TIME was established in 1998 with the sole aim of providing
                quality services viz a viz value for money.
              </p>

              {/* Social */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-terracotta-300 transition"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-terracotta-300 transition"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-terracotta-300 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-terracotta-300 transition"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
              </div>

              {/* Quick contacts */}
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3 text-white/75">
                  <Mail
                    size={16}
                    className="text-terracotta-300 flex-shrink-0"
                  />
                  <a
                    href="mailto:info@tourismindiamanagement.com"
                    className="hover:text-terracotta-300 transition"
                  >
                    info@tourismindiamanagement.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/75">
                  <Phone
                    size={16}
                    className="text-terracotta-300 flex-shrink-0"
                  />
                  <a
                    href="tel:+91-124-4932450"
                    className="hover:text-terracotta-300 transition"
                  >
                    +91-124-4932450
                  </a>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-white font-semibold tracking-wide mb-5">
                Explore
              </h4>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-terracotta-300 transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations + Connect */}
            <div>
              <h4 className="text-white font-semibold tracking-wide mb-5">
                Destinations
              </h4>
              <ul className="space-y-3">
                {footerLinks.destinations.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-terracotta-300 transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-white font-semibold tracking-wide mt-10 mb-5">
                Connect
              </h4>
              <ul className="space-y-3">
                {footerLinks.connect.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-terracotta-300 transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Form */}
            <div>
              <h4 className="text-white font-semibold tracking-wide mb-5">
                Contact
              </h4>

              <ul className="space-y-4 mb-7 text-sm">
                <li className="flex items-start gap-3 text-white/75">
                  <MapPin
                    size={18}
                    className="text-terracotta-300 mt-0.5 flex-shrink-0"
                  />
                  <span>
                    USA – 27615 SE Robinson RD,
                    <br />
                    Camas WA 98607
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white/75">
                  <MapPin
                    size={18}
                    className="text-terracotta-300 mt-0.5 flex-shrink-0"
                  />
                  <span>
                    INDIA – 603, Millennium Plaza,
                    <br />
                    Gurugram Haryana
                  </span>
                </li>
              </ul>

              <h5 className="text-white font-semibold mb-4">Send a message</h5>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="footer-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="footer-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name *"
                    required
                    className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/15 text-white placeholder:text-white/45
                               focus:outline-none focus:border-terracotta-300 focus:ring-2 focus:ring-terracotta-300/20 transition text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="footer-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    required
                    className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/15 text-white placeholder:text-white/45
                               focus:outline-none focus:border-terracotta-300 focus:ring-2 focus:ring-terracotta-300/20 transition text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="footer-subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="footer-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/15 text-white placeholder:text-white/45
                               focus:outline-none focus:border-terracotta-300 focus:ring-2 focus:ring-terracotta-300/20 transition text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="footer-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="footer-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={3}
                    className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/15 text-white placeholder:text-white/45
                               focus:outline-none focus:border-terracotta-300 focus:ring-2 focus:ring-terracotta-300/20 transition text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded bg-terracotta-500 text-white font-medium
                             hover:bg-terracotta-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Sending..."
                    : isSubmitted
                    ? "Sent!"
                    : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} TIME – Tourism India Management
              Enterprise. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-white/60 hover:text-terracotta-300 transition"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-white/60 hover:text-terracotta-300 transition"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Speak to an Expert Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Link
          to="/contact"
          className="px-5 py-3 rounded-full bg-terracotta-500 text-white text-sm font-medium shadow-lg
                     hover:bg-terracotta-600 transition"
        >
          Speak to an Expert
        </Link>
      </div>
    </footer>
  );
}
