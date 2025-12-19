"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Destinations", path: "/destinations" },
  { name: "Services", path: "/services" },
  { name: "Experiences", path: "/experiences" },
  { name: "MICE & Corporate", path: "/mice-corporate" },
  { name: "Partners", path: "/partners" },
  { name: "Contact", path: "/contact" },
];

const LOGO_URL =
  "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766144775/TIME_-_Company-removebg-preview_cejuig.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";
  const isSolidHeader = isScrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolidHeader
          ? "bg-warm-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* If your logo is dark, the drop-shadow helps on transparent hero */}
            <img
              src={LOGO_URL}
              alt="TIME"
              className={`h-10 w-auto transition-all duration-300 ${
                isSolidHeader
                  ? "drop-shadow-none"
                  : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
              }`}
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-terracotta-500 ${
                  isSolidHeader
                    ? "text-charcoal"
                    : "text-white/90 hover:text-white"
                } ${
                  location.pathname === link.path ? "text-terracotta-500" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isSolidHeader ? "text-charcoal" : "text-white"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-warm-white transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium py-3 border-b border-sand-200 transition-colors ${
                location.pathname === link.path
                  ? "text-terracotta-500"
                  : "text-charcoal hover:text-terracotta-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-6 px-6 py-3 bg-terracotta-500 text-white text-center font-medium tracking-wide hover:bg-terracotta-600 transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}
