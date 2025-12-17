"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { supabase } from "../lib/supabase"

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    details: "",
    agreed: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Only submit if we have a real Supabase client (not the build-time mock)
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY) {
        const { error } = await (supabase as any)
          .from('contact_submissions')
          .insert([
            {
              full_name: formData.fullName,
              email: formData.email,
              phone: formData.phone,
              service: formData.service,
              details: formData.details,
              agreed: formData.agreed,
              created_at: new Date().toISOString(),
            }
          ])

        if (error) throw error
      }

      setSubmitStatus("success")
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        details: "",
        agreed: false,
      })
    } catch (error: any) {
      console.error("Error submitting form:", error)
      console.error("Error details:", error?.message, error?.details, error?.hint)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (

    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Get In Touch</h2>
        <p className="text-medium-gray text-lg mb-12">
          Ready to start your project? Contact us today for a free consultation
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-dark-gray mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="text-gold-orange shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-2xl md:text-lg font-bold text-dark-gray">Call Us</h4>
                  <a href="tel:+254746333285" className="text-brand-blue hover:text-deep-blue transition-colors duration-300 hover:underline">
                    +254 746 333 285
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-gold-orange shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-2xl md:text-lg font-bold text-dark-gray">Email Us</h4>
                  <a href="mailto:info@vectorspace.co.ke" className="text-brand-blue hover:text-deep-blue transition-colors duration-300 hover:underline">
                    info@vectorspace.co.ke
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-gold-orange shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-2xl md:text-lg font-bold text-dark-gray">Our Office</h4>
                  <a
                    href="https://maps.google.com/?q=CK+Business+Center+Ruiru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:text-deep-blue transition-colors duration-300 hover:underline"
                  >
                    CK Business Center Ruiru
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-gold-orange shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-2xl md:text-lg font-bold text-dark-gray">Working Hours</h4>
                  <p className="text-medium-gray">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-medium-gray">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-medium-gray">Holidays: Closed</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-2xl md:text-lg font-bold text-dark-gray mb-4">Our Location</h4>
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-light-gray shadow-lg">
                  <iframe
                    src="https://maps.google.com/maps?q=CK+Business+Center+Ruiru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CK Business Center Ruiru Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>


          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-lg border shadow-lg"
            style={{ backgroundColor: "#0B2A4A", borderColor: "transparent" }}
          >
            <div>
              <label className="block text-white font-semibold mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-light-gray rounded-lg bg-white text-dark-gray focus:outline-none focus:border-brand-blue transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-light-gray rounded-lg bg-white text-dark-gray focus:outline-none focus:border-brand-blue transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-light-gray rounded-lg bg-white text-dark-gray focus:outline-none focus:border-brand-blue transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Service Interest</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-light-gray rounded-lg bg-white text-dark-gray focus:outline-none focus:border-brand-blue transition-colors duration-300"
              >
                <option value="">Select a service</option>
                <option value="advanced-building">Advanced Building Systems & Specialized Construction</option>
                <option value="general-construction">General Construction & Renovation Works</option>
                <option value="costings">Costings (BQs) & System-Based Cost Comparisons</option>
                <option value="structural-assessment">Structural Integrity Assessments & Retrofitting</option>
                <option value="civil-engineering">Civil & Structural Engineering Services</option>
                <option value="architectural-design">Architectural Planning & Design Services</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Project Details <span className="text-red-500">*</span>
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-light-gray rounded-lg bg-white text-dark-gray focus:outline-none focus:border-brand-blue transition-colors duration-300"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agreed"
                id="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                required
                className="mt-1 text-brand-blue"
              />
              <label htmlFor="agreed" className="text-sm text-gray-200">
                I agree to the processing of my personal data as described in the{" "}
                <a href="/privacy" className="text-brand-blue hover:text-deep-blue transition-colors duration-300 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold-orange text-white py-3 rounded-lg font-semibold hover:bg-gold-orange/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>


            {submitStatus === "success" && (
              <div className="text-green-600 text-center mt-4 bg-green-50 p-3 rounded-lg border border-green-200">
                Thank you for your inquiry! We will be in touch soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="text-red-600 text-center mt-4 bg-red-50 p-3 rounded-lg border border-red-200">
                There was an error submitting your form. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
