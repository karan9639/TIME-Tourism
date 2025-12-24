"use client";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Tour Packages", path: "/tour-packages" },
  { name: "FAQ's", path: "/faqs" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Stories", path: "/stories" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const LOGO_URL =
  "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766144775/TIME_-_Company-removebg-preview_cejuig.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // header style on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isMobileMenuOpen]);

  const isHome = location.pathname === "/";
  const isSolidHeader = isScrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolidHeader
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-cream-300"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3"
              aria-label="Go to home"
            >
              <img
                src={LOGO_URL}
                alt="TIME"
                className={`h-9 sm:h-10 md:h-11 w-auto transition-all duration-300 ${
                  isSolidHeader
                    ? "drop-shadow-none"
                    : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
                }`}
                loading="eager"
                decoding="async"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-terracotta-500 ${
                      isSolidHeader
                        ? "text-charcoal"
                        : "text-white/90 hover:text-white"
                    } ${active ? "text-terracotta-500" : ""}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className={`px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 rounded ${
                  isSolidHeader
                    ? "bg-terracotta-500 text-white hover:bg-terracotta-600"
                    : "bg-white/20 text-white border border-white/40 hover:bg-white hover:text-charcoal"
                }`}
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={`lg:hidden p-2 rounded transition-colors ${
                isSolidHeader ? "text-charcoal" : "text-white"
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-20 z-50 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${isSolidHeader ? "bg-white" : "bg-white"}`}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium py-3 border-b border-cream-200 transition-colors ${
                    active
                      ? "text-terracotta-500"
                      : "text-charcoal hover:text-terracotta-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="mt-6 block px-6 py-3 bg-terracotta-500 text-white text-center font-medium tracking-wide hover:bg-terracotta-600 transition-colors rounded"
          >
            Enquire Now
          </Link>

          {/* Mobile Contact Info (kept from your original header) */}
          <div className="pt-6 mt-6 border-t border-cream-200">
            <a
              href="mailto:info@tourismindiamanagement.com"
              className="flex items-center gap-2 text-taupe-600 text-sm mb-3"
            >
              <Mail size={16} />
              <span>info@tourismindiamanagement.com</span>
            </a>
            <div className="flex items-center gap-2 text-taupe-600 text-sm">
              <MapPin size={16} />
              <span>27615 SE Robinson RD, Camas WA 98607</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
