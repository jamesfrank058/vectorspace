"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    details: "",
    agreed: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      service: "",
      details: "",
      agreed: false,
    })
    alert("Thank you for your inquiry! We will be in touch soon.")
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-12">
          Ready to start your project? Contact us today for a free consultation
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground">Call Us</h4>
                  <a href="tel:+254746333285" className="text-accent hover:underline">
                    +254 746 333 285
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground">Email Us</h4>
                  <a href="mailto:info@vectorspace.co.ke" className="text-accent hover:underline">
                    info@vectorspace.co.ke
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground">Our Office</h4>
                  <a
                    href="https://maps.google.com/?q=CK+Business+Center+Ruiru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    CK Business Center Ruiru
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground">Working Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-muted-foreground">Holidays: Closed</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-bold text-foreground mb-4">Our Location</h4>
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
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
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
            <div>
              <label className="block text-foreground font-semibold mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-secondary text-foreground focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-foreground font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-secondary text-foreground focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-foreground font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-secondary text-foreground focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-foreground font-semibold mb-2">Service Interest</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-secondary text-foreground focus:outline-none focus:border-accent"
              >
                <option value="">Select a service</option>
                <option value="structural">Structural Engineering</option>
                <option value="project">Project Management</option>
                <option value="architectural">Architectural Design</option>
                <option value="construction">Construction</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>

            <div>
              <label className="block text-foreground font-semibold mb-2">
                Project Details <span className="text-red-500">*</span>
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-lg bg-secondary text-foreground focus:outline-none focus:border-accent"
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
                className="mt-1"
              />
              <label htmlFor="agreed" className="text-sm text-muted-foreground">
                I agree to the processing of my personal data as described in the{" "}
                <a href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
