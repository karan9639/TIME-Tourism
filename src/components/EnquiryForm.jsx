"use client"

import { useState } from "react"
import { Send, Check, AlertCircle } from "lucide-react"

export default function EnquiryForm({ variant = "default" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travelers: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const destinations = ["India", "Nepal", "Bhutan", "Sri Lanka", "Maldives", "Multi-Country"]

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.destination) {
      newErrors.destination = "Please select a destination"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your travel plans"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <div className={`text-center py-12 ${variant === "dark" ? "text-white" : "text-charcoal"}`}>
        <div className="w-16 h-16 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-serif mb-4">Thank You!</h3>
        <p className={`${variant === "dark" ? "text-sand-300" : "text-sand-600"}`}>
          Your enquiry has been received. Our travel specialists will contact you within 24 hours to begin crafting your
          perfect journey.
        </p>
      </div>
    )
  }

  const inputClasses =
    variant === "dark"
      ? "w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-sand-400 focus:outline-none focus:border-terracotta-400 transition-colors"
      : "w-full px-4 py-3 bg-white border border-sand-300 text-charcoal placeholder:text-sand-400 focus:outline-none focus:border-terracotta-500 transition-colors"

  const labelClasses =
    variant === "dark" ? "block text-sm font-medium text-sand-200 mb-2" : "block text-sm font-medium text-charcoal mb-2"

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputClasses} ${errors.name ? "border-red-500" : ""}`}
            placeholder="John Smith"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputClasses} ${errors.email ? "border-red-500" : ""}`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${inputClasses} ${errors.phone ? "border-red-500" : ""}`}
            placeholder="+1 234 567 8900"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="destination" className={labelClasses}>
            Preferred Destination *
          </label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className={`${inputClasses} ${errors.destination ? "border-red-500" : ""}`}
          >
            <option value="">Select a destination</option>
            {destinations.map((dest) => (
              <option key={dest} value={dest}>
                {dest}
              </option>
            ))}
          </select>
          {errors.destination && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.destination}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="travelDate" className={labelClasses}>
            Preferred Travel Date
          </label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="travelers" className={labelClasses}>
            Number of Travelers
          </label>
          <input
            type="number"
            id="travelers"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            className={inputClasses}
            placeholder="2"
            min="1"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Tell Us About Your Dream Journey *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`${inputClasses} resize-none ${errors.message ? "border-red-500" : ""}`}
          placeholder="Share your travel interests, special requirements, or any specific experiences you'd like..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle size={14} className="mr-1" />
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-8 py-4 bg-terracotta-500 text-white font-medium tracking-wide hover:bg-terracotta-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <Send size={18} className="ml-2" />
          </>
        )}
      </button>
    </form>
  )
}
