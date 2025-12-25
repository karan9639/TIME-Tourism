"use client"

import { useState } from "react"
import RevealWrapper from "../components/RevealWrapper"
import { MapPin, Phone, Send, Check, AlertCircle } from "lucide-react"

const countries = [
  "Select Country",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Mexico",
  "Other",
]

const hotelTypes = ["5 stars", "4 stars", "3 stars", "Economic"]

const referralSources = [
  "How did you find Timetours",
  "Search Engine (Google, Bing)",
  "Social Media",
  "Friend/Family Referral",
  "Travel Agent",
  "Online Advertisement",
  "Magazine/Newspaper",
  "Other",
]

export default function Contact() {
  const [formData, setFormData] = useState({
    adults: "",
    children: "",
    arrivalDate: "",
    numDays: "",
    hotelType: "",
    idealTrip: "",
    name: "",
    email: "",
    country: "",
    phone: "",
    referralSource: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <>
        {/* Map Section */}
        <section className="h-[300px] bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.988426051!2d77.08291131507!3d28.45760558249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzI3LjQiTiA3N8KwMDUnMDYuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TIME Tours Location"
          />
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-serif text-charcoal mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-8">
              Your enquiry has been received. Our travel specialists will contact you within 24 hours to begin crafting
              your perfect journey.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-coral-500 text-white font-medium hover:bg-coral-600 transition-colors"
            >
              Submit Another Enquiry
            </button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Map Section */}
      <section className="h-[300px] bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.988426051!2d77.08291131507!3d28.45760558249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzI3LjQiTiA3N8KwMDUnMDYuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TIME Tours Location"
        />
        {/* Location Card Overlay */}
        <div className="absolute top-4 left-4 bg-white p-4 shadow-lg max-w-xs z-10">
          <h3 className="font-semibold text-charcoal text-sm mb-1">
            Tourism India Management E...
          </h3>
          <p className="text-xs text-gray-600 mb-2">
            BLOCK E, 603, 6th Floor, Millennium Plaza, Sector 27, Gurugram,
            Haryana 122009
          </p>
          <div className="flex items-center gap-2 text-xs text-teal-600">
            <span>5.0 ★★★★★</span>
            <span className="text-gray-500">7 reviews</span>
          </div>
          <a
            href="#"
            className="text-xs text-blue-600 hover:underline block mt-1"
          >
            View larger map
          </a>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Company Info */}
            <RevealWrapper>
              <div>
                <h2 className="text-xl md:text-2xl font-serif text-charcoal mb-6 leading-relaxed">
                  TIME is professionally equipped to handle any of your needs in
                  India, Nepal, Sri Lanka and Bhutan
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="text-teal-500 mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-charcoal">Time Tours</p>
                      <p className="text-gray-600 text-sm">
                        603, 6th Floor, Millennium Plaza,4 br / Tower – B Sector
                        27, Gurugram – 122002 Haryana, INDIA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-coral-500 flex-shrink-0" />
                    <a
                      href="tel:091-124-4932499"
                      className="text-gray-600 text-sm hover:text-teal-500 transition-colors"
                    >
                      091-124-4932499
                    </a>
                  </div>
                </div>

                {/* Image */}
                {/* Images */}
                <div className="space-y-4">
                  {" "}
                  {/* change 4 to 2 or 6 as you like */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                    <img
                      src="/maldives-overwater-villa-turquoise-ocean.jpg"
                      alt="Kerala wellness retreat"
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[16/10] object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                    <img
                      src="/yoga-retreat-kerala-wellness-spa.jpg"
                      alt="Kerala wellness retreat"
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[16/10] object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
                  </div>
                </div>
              </div>
            </RevealWrapper>

            {/* Right Column - Query Form */}
            <RevealWrapper delay={200}>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-8 text-center">
                  Have any query – submit details now
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* How many people */}
                  <div>
                    <h3 className="font-semibold text-charcoal mb-4">
                      How many people?
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Adults
                        </label>
                        <input
                          type="number"
                          name="adults"
                          value={formData.adults}
                          onChange={handleChange}
                          min="0"
                          placeholder="0"
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Children
                        </label>
                        <input
                          type="number"
                          name="children"
                          value={formData.children}
                          onChange={handleChange}
                          min="0"
                          placeholder="0"
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Travel time */}
                  <div>
                    <h3 className="font-semibold text-charcoal mb-4">
                      Travel time
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          His arrival
                        </label>
                        <input
                          type="date"
                          name="arrivalDate"
                          value={formData.arrivalDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          No of days
                        </label>
                        <input
                          type="number"
                          name="numDays"
                          value={formData.numDays}
                          onChange={handleChange}
                          min="1"
                          placeholder="0"
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hotel Type */}
                  <div>
                    <h3 className="font-semibold text-charcoal mb-4">
                      Hotel Type
                    </h3>
                    <div className="space-y-2">
                      {hotelTypes.map((type) => (
                        <label
                          key={type}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="hotelType"
                            value={type}
                            checked={formData.hotelType === type}
                            onChange={handleChange}
                            className="w-4 h-4 text-teal-500 focus:ring-teal-500"
                          />
                          <span className="text-gray-700 text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Ideal Trip */}
                  <div>
                    <h3 className="font-semibold text-charcoal mb-4">
                      What would be your ideal trip?
                    </h3>
                    <textarea
                      name="idealTrip"
                      value={formData.idealTrip}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more to understand better. How can we make it extra special?"
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Personal Information */}
                  <div>
                    <h3 className="font-semibold text-charcoal mb-4">
                      Personal information
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                          className={`w-full px-4 py-2 border focus:outline-none focus:border-teal-500 transition-colors ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className={`w-full px-4 py-2 border focus:outline-none focus:border-teal-500 transition-colors ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Country
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors bg-white"
                        >
                          {countries.map((country) => (
                            <option
                              key={country}
                              value={
                                country === "Select Country" ? "" : country
                              }
                            >
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone"
                          className={`w-full px-4 py-2 border focus:outline-none focus:border-teal-500 transition-colors ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* How did you find us */}
                  <div>
                    <h3 className="font-semibold text-charcoal mb-4">
                      How did you find us?
                    </h3>
                    <select
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors bg-white"
                    >
                      {referralSources.map((source) => (
                        <option
                          key={source}
                          value={
                            source === "How did you find Timetours"
                              ? ""
                              : source
                          }
                        >
                          {source}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-terracotta-500 text-white font-medium hover:bg-terracotta-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
