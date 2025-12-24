"use client"

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Mail, MapPin } from "lucide-react"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Tour Packages", path: "/tour-packages" },
  { name: "FAQ's", path: "/faqs" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Stories", path: "/stories" },
  { name: "Contact Us", path: "/contact" },
]

const LOGO_URL =
  "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766144775/TIME_-_Company-removebg-preview_cejuig.png"

export default function Header() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false)
    }
    if (isMobileMenuOpen) window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isMobileMenuOpen])

  return (
    <>
      <div className="hidden md:block fixed top-0 left-0 right-0 z-[60] bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-4 lg:gap-6">
              <a
                href="mailto:info@tourismindiamanagement.com"
                className="flex items-center gap-2 hover:text-teal-400 transition-colors"
              >
                <Mail size={14} />
                <span className="hidden lg:inline">info@tourismindiamanagement.com</span>
                <span className="lg:hidden">Email Us</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                <span className="hidden lg:inline">27615 SE Robinson RD, Camas WA 98607</span>
                <span className="lg:hidden">Camas, WA</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <header className="fixed left-0 right-0 z-50 transition-all duration-300 top-0 md:top-10 bg-white shadow-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary Navigation">
          <div className="h-14 sm:h-16 md:h-20 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Go to home">
              <img
                src={LOGO_URL || "/placeholder.svg"}
                alt="TIME - The company that cares"
                className="h-8 sm:h-10 md:h-12 w-auto"
                loading="eager"
                decoding="async"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 xl:px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                      active ? "text-teal-500" : "text-gray-700 hover:text-teal-500 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        id="mobile-menu"
        className={`lg:hidden fixed right-0 top-14 sm:top-16 bottom-0 w-full max-w-xs sm:max-w-sm bg-white z-50 transition-transform duration-300 ease-in-out overflow-y-auto shadow-xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="p-4 sm:p-5">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                    active ? "text-teal-500 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          <div className="pt-6 mt-6 border-t border-gray-200 space-y-3">
            <a
              href="mailto:info@tourismindiamanagement.com"
              className="flex items-center gap-3 text-gray-600 text-sm hover:text-teal-500 transition-colors"
            >
              <Mail size={18} className="flex-shrink-0" />
              <span className="break-all text-xs sm:text-sm">info@tourismindiamanagement.com</span>
            </a>
            <div className="flex items-start gap-3 text-gray-600 text-sm">
              <MapPin size={18} className="flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm">27615 SE Robinson RD, Camas WA 98607</span>
            </div>
          </div>
        </div>
      </aside>

      <div className="h-14 sm:h-16 md:h-[120px]" />
    </>
  )
}
