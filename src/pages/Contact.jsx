import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"
import EnquiryForm from "../components/EnquiryForm"
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["601, 6th Floor, Millennium Plaza", "Sector 27, Gurugram – 122002", "Haryana, India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 981 001 5651", "+91 971 745 6645"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["sanjeev@timepl.in", "info@timepl.in"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday – Friday", "9:00 AM – 6:00 PM IST"],
  },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Let's start planning your extraordinary journey"
        image="/placeholder.svg?height=800&width=1920"
      />

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <RevealWrapper>
                <span className="text-terracotta-500 text-sm tracking-[0.2em] uppercase font-medium">Get in Touch</span>
                <h2 className="text-3xl font-serif text-charcoal mt-4 mb-8">We'd Love to Hear From You</h2>
              </RevealWrapper>

              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <RevealWrapper key={item.title} delay={index * 100}>
                    <div className="flex">
                      <div className="w-12 h-12 bg-terracotta-500 flex items-center justify-center flex-shrink-0 mr-4">
                        <item.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-charcoal mb-1">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-sand-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </RevealWrapper>
                ))}
              </div>

              <RevealWrapper delay={400}>
                <div className="mt-12">
                  <h3 className="font-medium text-charcoal mb-4">Online</h3>
                  <div className="flex items-center space-x-2 text-sand-600 text-sm">
                    <Globe size={16} className="text-terracotta-500" />
                    <a
                      href="https://www.timetours.us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-terracotta-500 transition-colors"
                    >
                      www.timetours.us
                    </a>
                  </div>
                </div>
              </RevealWrapper>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2">
              <RevealWrapper delay={200}>
                <div className="bg-sand-50 p-8 lg:p-12">
                  <h3 className="text-2xl font-serif text-charcoal mb-2">Send an Enquiry</h3>
                  <p className="text-sand-600 mb-8">
                    Fill out the form below and our team will respond within 24 hours.
                  </p>
                  <EnquiryForm />
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-sand-200">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/placeholder.svg?height=400&width=1920"
            alt="Office Location"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-12 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif mb-2">Need Immediate Assistance?</h3>
              <p className="text-sand-300">Our travel specialists are available during office hours.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919810015651"
                className="px-6 py-3 bg-terracotta-500 text-white font-medium tracking-wide hover:bg-terracotta-600 transition-colors flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                +91 981 001 5651
              </a>
              <a
                href="mailto:sanjeev@timepl.in"
                className="px-6 py-3 bg-transparent text-white font-medium tracking-wide border border-white/40 hover:bg-white hover:text-charcoal transition-colors flex items-center justify-center"
              >
                <Mail size={18} className="mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
