"use client";

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

// ✅ Removed "Contact Us" from footer links
const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Tour Packages", path: "/tour-packages" },
  { name: "FAQ's", path: "/faqs" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Stories", path: "/stories" },
  { name: "Contact Us", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          {/* ✅ 2-column layout on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Brand Column */}
            <div className="md:pr-6">
              <h4 className="text-white font-semibold tracking-wide mb-4">
                Time Tours
              </h4>

              <Link
                to="/"
                className="inline-flex items-center"
                aria-label="Go to home"
              >
                <img
                  src={LOGO_URL || "/placeholder.svg"}
                  alt="TIME - The company that cares"
                  className="h-12 sm:h-14 lg:h-16 w-auto"
                  loading="lazy"
                  decoding="async"
                />
              </Link>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                TIME was established in 1998 with the sole aim of providing
                quality services viz a viz value for money.
              </p>

              {/* Contact Info (kept) */}
              <ul className="mt-5 space-y-2.5">
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
                  <a
                    href="tel:+91-124-4932450"
                    className="hover:text-teal-400 transition-colors text-xs sm:text-sm"
                  >
                    +91-124-4932450
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <MapPin
                    size={16}
                    className="text-teal-400 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-xs sm:text-sm">
                    USA - 27615 SE Robinson RD, Camas WA 98607
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <MapPin
                    size={16}
                    className="text-teal-400 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-xs sm:text-sm">
                    INDIA - 603, Millennium Plaza, Gurugram Haryana
                  </span>
                </li>
              </ul>

              {/* Social */}
              <div className="mt-5">
                <h5 className="text-white font-semibold mb-3 text-sm">
                  Follow Us
                </h5>
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
            <div className="md:justify-self-center w-full md:w-auto">
              <h4 className="text-white font-semibold tracking-wide mb-4">
                Quick Links
              </h4>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 sm:gap-3">
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

            {/* ✅ Contact Form REMOVED */}
          </div>
        </div>
      </div>

      {/* ✅ Floating contact button REMOVED */}
    </footer>
  );
}
