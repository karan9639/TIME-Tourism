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

  // scroll state
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

  // lock body scroll when menu open
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMobileMenuOpen]);

  // escape closes menu
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const isHome = location.pathname === "/";
  const isSolidHeader = isScrolled || !isHome;

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-charcoal text-white py-2 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@tourismindiamanagement.com"
              className="flex items-center gap-2 hover:text-terracotta-300 transition-colors"
            >
              <Mail size={14} />
              <span>info@tourismindiamanagement.com</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              <span>27615 SE Robinson RD, Camas WA 98607</span>
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={[
          "fixed left-0 right-0 z-50 transition-all duration-300",
          "top-0", // ✅ keep it stable (no jumpy top-8/top-10)
          isSolidHeader
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-cream-300"
            : "bg-transparent",
        ].join(" ")}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Primary"
        >
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center" aria-label="Go to home">
              <img
                src={LOGO_URL}
                alt="TIME"
                className={[
                  "h-10 w-auto transition-all duration-300",
                  isSolidHeader
                    ? "drop-shadow-none"
                    : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]",
                ].join(" ")}
                loading="eager"
                decoding="async"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={[
                      "text-sm font-medium transition-colors duration-300",
                      isSolidHeader
                        ? "text-charcoal hover:text-terracotta-500"
                        : "text-white/90 hover:text-white",
                      active ? "text-terracotta-500" : "",
                    ].join(" ")}
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
                className={[
                  "px-6 py-2.5 text-sm font-medium rounded transition-all duration-300",
                  isSolidHeader
                    ? "bg-terracotta-500 text-white hover:bg-terracotta-600"
                    : "bg-white/20 text-white border border-white/40 hover:bg-white hover:text-charcoal",
                ].join(" ")}
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={[
                "lg:hidden p-2 rounded-md transition-colors",
                isSolidHeader
                  ? "text-charcoal hover:bg-cream-100"
                  : "text-white hover:bg-white/10",
              ].join(" ")}
              aria-label={
                isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        id="mobile-menu"
        className={[
          "lg:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50",
          "transition-transform duration-300 ease-in-out",
          "overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="sticky top-0 bg-white border-b border-cream-200 z-10">
          <div className="flex items-center justify-between px-4 h-20">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center"
              aria-label="Go to home"
            >
              <img
                src={LOGO_URL}
                alt="TIME"
                className="h-10 w-auto"
                loading="eager"
                decoding="async"
              />
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-charcoal hover:bg-cream-100 rounded-md transition-colors"
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col p-6 space-y-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={[
                  "text-base font-medium py-3 px-4 rounded-lg transition-colors",
                  active
                    ? "text-terracotta-500 bg-terracotta-50"
                    : "text-charcoal hover:bg-cream-100",
                ].join(" ")}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-4">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-terracotta-500 hover:bg-terracotta-600 text-white text-center font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Enquire Now
            </Link>
          </div>

          <div className="pt-6 mt-6 border-t border-cream-200 space-y-3">
            <a
              href="mailto:info@tourismindiamanagement.com"
              className="flex items-center gap-3 text-taupe-600 text-sm hover:text-terracotta-500 transition-colors"
            >
              <Mail size={18} className="flex-shrink-0" />
              <span className="break-all">info@tourismindiamanagement.com</span>
            </a>
            <div className="flex items-start gap-3 text-taupe-600 text-sm">
              <MapPin size={18} className="flex-shrink-0 mt-0.5" />
              <span>27615 SE Robinson RD, Camas WA 98607</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Spacer so content doesn't hide behind fixed header (h-20 header + optional topbar on md+) */}
      <div className="h-20 md:h-[calc(5rem+2rem)]" />
    </>
  );
}
