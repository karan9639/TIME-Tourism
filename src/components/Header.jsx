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
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // scroll state
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  // ESC closes menu
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const isHome = location.pathname === "/";

  // ✅ Make header ALWAYS readable:
  // - On desktop: always white background like your screenshot
  // - On mobile: white background too
  // (If you later want transparent-on-hero, I can add a safe mode.)
  const headerClasses =
    "bg-white/95 backdrop-blur-md shadow-sm border-b border-cream-300";

  return (
    <>
      {/* Top bar (desktop only) */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-[60] bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 flex items-center justify-between text-xs">
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
      </div>

      {/* Header */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 top-0 md:top-10 ${headerClasses}`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Primary Navigation"
        >
          <div className="h-16 md:h-20 flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3"
              aria-label="Go to home"
            >
              <img
                src={LOGO_URL}
                alt="TIME"
                className="h-9 sm:h-10 md:h-11 w-auto"
                loading="eager"
                decoding="async"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={[
                      "text-sm font-medium transition-colors duration-300",
                      "text-charcoal hover:text-terracotta-500",
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
                className="px-6 py-2.5 text-sm font-medium rounded bg-terracotta-500 text-white hover:bg-terracotta-600 transition"
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-md text-charcoal hover:bg-cream-100 transition-colors"
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

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer (below header) */}
      <aside
        id="mobile-menu"
        className={[
          "lg:hidden fixed right-0 bottom-0 w-full max-w-sm bg-white z-50",
          "top-16", // below mobile header
          "transition-transform duration-300 ease-in-out",
          "overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="p-5">

          <div className="flex flex-col space-y-1">
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
          </div>

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

      {/* Spacer: mobile header 64px; desktop topbar 40px + header 80px = 120px */}
      <div className="h-16 md:h-[120px]" />
    </>
  );
}
