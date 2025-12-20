import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const LOGO_URL =
  "https://res.cloudinary.com/dptxyo9dy/image/upload/v1766208995/db12b09d-532d-4a98-b2b0-b9070c23525a.png";

const footerLinks = {
  explore: [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Experiences", path: "/experiences" },
    { name: "MICE & Corporate", path: "/mice-corporate" },
  ],
  destinations: [
    { name: "India", path: "/destinations/india" },
    { name: "Nepal", path: "/destinations/nepal" },
    { name: "Bhutan", path: "/destinations/bhutan" },
    { name: "Sri Lanka", path: "/destinations/sri-lanka" },
    { name: "Maldives", path: "/destinations/maldives" },
  ],
  connect: [
    { name: "Contact Us", path: "/contact" },
    { name: "Our Partners", path: "/partners" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-sand-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center">
              <img
                src={LOGO_URL}
                alt="TIME"
                className="h-12 w-auto mb-4"
                loading="lazy"
              />
            </Link>

            <p className="text-sand-300 text-sm leading-relaxed mb-6">
              Tourism India Management Enterprise – Crafting extraordinary
              journeys across the Indian Subcontinent for over 24 years.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-sand-400 hover:text-terracotta-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-sand-400 hover:text-terracotta-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-sand-400 hover:text-terracotta-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sand-300 hover:text-terracotta-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Destinations
            </h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sand-300 hover:text-terracotta-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-terracotta-400 mt-0.5 flex-shrink-0"
                />
                <span className="text-sand-300 text-sm">
                  601, 6th Floor, Millennium Plaza,
                  <br />
                  Sector 27, Gurugram – 122002
                  <br />
                  Haryana, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone
                  size={18}
                  className="text-terracotta-400 flex-shrink-0"
                />
                <a
                  href="tel:+919810015651"
                  className="text-sand-300 hover:text-terracotta-400 transition-colors text-sm"
                >
                  +91 981 001 5651
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-terracotta-400 flex-shrink-0" />
                <a
                  href="mailto:info@timepl.in"
                  className="text-sand-300 hover:text-terracotta-400 transition-colors text-sm"
                >
                  info@timepl.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sand-400 text-sm">
              © {new Date().getFullYear()} TIME - Tourism India Management
              Enterprise. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sand-400 hover:text-terracotta-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sand-400 hover:text-terracotta-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
