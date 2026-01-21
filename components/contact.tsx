"use client"

import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, CircleDot, Download, FileText } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Kenyan public holidays for 2024-2025
const kenyanHolidays = [
  { month: 1, day: 1, name: "New Year's Day" },
  { month: 3, day: 21, name: "Good Friday" },
  { month: 3, day: 24, name: "Easter Monday" },
  { month: 4, day: 18, name: "Idd-ul-Fitr" },
  { month: 5, day: 1, name: "Labour Day" },
  { month: 5, day: 25, name: "Africa Day" },
  { month: 6, day: 1, dayName: "Saturday", name: "Madaraka Day" },
  { month: 7, day: 20, name: "Eid al-Adha" },
  { month: 10, day: 20, name: "Mashujaa Day" },
  { month: 12, day: 12, name: "Independence Day" },
  { month: 12, day: 25, name: "Christmas Day" },
  { month: 12, day: 26, name: "Boxing Day" },
]

// Office hours configuration
const officeHours = {
  weekday: { open: 8, close: 17 }, // 8 AM - 5 PM
  saturday: { open: 8, close: 17 }, // 8 AM - 5 PM (same as weekdays)
}

// Get current time in Kenyan timezone (EAT, UTC+3)
function getKenyanTime(): Date {
  const now = new Date()
  const kenyaOffset = 3 * 60 // UTC+3 in minutes
  const localOffset = now.getTimezoneOffset()
  const kenyaTime = new Date(now.getTime() + (kenyaOffset + localOffset) * 60 * 1000)
  return kenyaTime
}

// Check if current day is a Kenyan public holiday
function isHoliday(date: Date): { isHoliday: boolean; name?: string } {
  const month = date.getMonth() + 1
  const day = date.getDate()

  const holiday = kenyanHolidays.find(h => 
    h.month === month && h.day === day
  )

  if (holiday) {
    return { isHoliday: true, name: holiday.name }
  }
  return { isHoliday: false }
}

// Check if office is currently open
function isOfficeOpen(): { isOpen: boolean; status: string; nextOpen?: string; holidayName?: string } {
  const now = getKenyanTime()
  const dayOfWeek = now.getDay() // 0 = Sunday, 1 = Monday, etc.
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const currentTime = hours + minutes / 60

  const holidayCheck = isHoliday(now)
  if (holidayCheck.isHoliday) {
    // Calculate when to reopen after holiday
    const nextDay = new Date(now)
    nextDay.setDate(nextDay.getDate() + 1)
    const nextDayOfWeek = nextDay.getDay()
    
    let reopenTime: string
    if (nextDayOfWeek === 0) {
      reopenTime = "Monday 8:00 AM"
    } else {
      reopenTime = "Tomorrow 8:00 AM"
    }
    
    return { 
      isOpen: false, 
      status: "Closed",
      nextOpen: reopenTime,
      holidayName: holidayCheck.name
    }
  }

  // Sunday - closed, reopens tomorrow (Monday)
  if (dayOfWeek === 0) {
    return { 
      isOpen: false, 
      status: "Closed",
      nextOpen: "Tomorrow 8:00 AM"
    }
  }

  // Monday-Friday
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    const { open, close } = officeHours.weekday
    if (currentTime >= open && currentTime < close) {
      return { 
        isOpen: true, 
        status: "Open Now",
      }
    } else if (currentTime < open) {
      return { 
        isOpen: false, 
        status: "Closed",
        nextOpen: `Today ${open}:00 AM`
      }
    } else {
      // After closing time, reopens tomorrow
      const nextDay = new Date(now)
      nextDay.setDate(nextDay.getDate() + 1)
      const nextDayOfWeek = nextDay.getDay()
      
      let reopenTime: string
      if (nextDayOfWeek === 0) {
        reopenTime = "Monday 8:00 AM"
      } else {
        reopenTime = "Tomorrow 8:00 AM"
      }
      
      return { 
        isOpen: false, 
        status: "Closed",
        nextOpen: reopenTime
      }
    }
  }

  // Saturday
  if (dayOfWeek === 6) {
    const { open, close } = officeHours.saturday
    if (currentTime >= open && currentTime < close) {
      return { 
        isOpen: true, 
        status: "Open Now",
      }
    } else if (currentTime < open) {
      return { 
        isOpen: false, 
        status: "Closed",
        nextOpen: `Today ${open}:00 AM`
      }
    } else {
      // After closing on Saturday, reopens Monday
      return { 
        isOpen: false, 
        status: "Closed",
        nextOpen: "Monday 8:00 AM"
      }
    }
  }

  return { isOpen: false, status: "Closed" }
}

function OfficeStatus() {
  const [status, setStatus] = useState<{ isOpen: boolean; status: string; nextOpen?: string; holidayName?: string } | null>(null)
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    // Update status every minute
    const updateStatus = () => {
      const kenyanTime = getKenyanTime()
      setStatus(isOfficeOpen())
      setCurrentTime(kenyanTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true,
        timeZone: 'Africa/Nairobi'
      }))
    }

    updateStatus()
    const interval = setInterval(updateStatus, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  if (!status) return null

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <CircleDot 
          size={16} 
          className={status.isOpen ? "text-green-500 animate-pulse" : "text-red-500"} 
        />
        <span className={`font-bold ${status.isOpen ? "text-green-600" : "text-red-600"}`}>
          {status.status}
        </span>
        <span className="text-sm text-medium-gray">
          (Kenya Time: {currentTime})
        </span>
      </div>
      {status.holidayName && (
        <p className="text-sm text-amber-600 font-medium">
          Holiday: {status.holidayName}
        </p>
      )}
      {!status.isOpen && status.nextOpen && (
        <p className="text-sm text-medium-gray">
          Reopens: {status.nextOpen}
        </p>
      )}
    </div>
  )
}

function WorkingHours() {
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const kenyanTime = getKenyanTime()
      setCurrentTime(kenyanTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true,
        timeZone: 'Africa/Nairobi'
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex gap-4">
      <Clock className="text-gold-orange shrink-0 mt-1" size={24} />
      <div>
        <h4 className="font-bold text-dark-gray">Working Hours</h4>
        <p className="text-medium-gray">Monday - Saturday: 8:00 AM - 5:00 PM</p>
        <p className="text-medium-gray">Holidays: Closed</p>
        <div className="mt-3 p-3 bg-light-gray rounded-lg">
          <OfficeStatus />
        </div>
      </div>
    </div>
  )
}

const faqItems = [
  {
    question: "What services does VectorSpace Ltd offer?",
    answer: "VectorSpace Ltd provides comprehensive engineering and construction services, including: Advanced Building Systems (EPS & hybrid construction), General construction and renovation works, Cost planning and Bills of Quantities (BQs), Structural integrity assessments and retrofitting, Civil and structural engineering consultancy, Architectural planning and design services."
  },
  {
    question: "How can I request a quote for my project?",
    answer: "You can request a quote by emailing us at projects@vectorspace.co.ke or chatting with us directly on WhatsApp. To help us respond accurately, please share: The service required, Project location, Proposed timelines, Architectural and/or structural drawings (if available)."
  },
  {
    question: "Do you serve clients outside Kenya?",
    answer: "Yes. While we are based in Nairobi, Kenya, we serve clients across East Africa and, in some cases, beyond—depending on the nature and scope of the service."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on scope and complexity: Construction works - 4-bedroom bungalow: approximately 2–3 months, 5-bedroom maisonette: approximately 4–5 months. Design services - Timelines typically range from 2 weeks to 2 months, depending on project size, approvals, and design complexity."
  },
  {
    question: "Do you provide structural integrity assessments?",
    answer: "Yes. We carry out detailed Structural Integrity Assessments for existing buildings. Our services include visual inspections, structural evaluations, and recommendations for repairs, strengthening, or retrofitting where necessary. Testing methods are selected based on the building type and condition."
  },
  {
    question: "Is VectorSpace Ltd licensed to operate in Kenya?",
    answer: "Yes. VectorSpace Ltd is licensed by the National Construction Authority (NCA) to operate and undertake construction works in Kenya, in compliance with all applicable statutory and regulatory requirements."
  },
  {
    question: "How can I collaborate with VectorSpace Ltd?",
    answer: "We welcome collaborations with architects, contractors, developers, and property owners. To discuss partnerships or joint projects, contact us via email at info@vectorspace.co.ke."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes. We offer an initial consultation to understand your project needs and advise on the best approach. Get in touch to schedule a meeting and explore how we can support your project."
  },
  {
    question: "Do you handle approvals and regulatory requirements?",
    answer: "We support clients through the design coordination and documentation process and can guide on statutory requirements. Approval submissions may be handled directly by the client or by arrangement, depending on the project scope."
  }
]

export default function Contact() {
  return (

    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Company Profile Download Card */}
        <div className="mb-12 rounded-xl p-6 md:p-8 shadow-lg" style={{ backgroundColor: "#0B2A4A" }}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-lg bg-gold-orange/20 flex items-center justify-center">
                <FileText className="text-gold-orange w-10 h-10" />
              </div>
            </div>
            <div className="grow text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Download Our Company Profile
              </h3>
              <p className="text-gray-300 mb-4 md:mb-0">
                Get the complete overview of our services, projects, team, and engineering capabilities.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="/resources/vectorspace-company-profile.pdf"
                download="VectorSpace-Company-Profile.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-orange text-white font-semibold rounded-lg hover:bg-gold-orange/90 transition-colors duration-300 shadow-md"
              >
                <Download size={20} />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-medium-gray text-lg mb-12">
            Find answers to common questions about our services, process, and how we can help with your project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-light-gray rounded-lg px-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left text-dark-gray hover:text-brand-blue transition-colors duration-300 py-4">
                    <span className="font-semibold text-lg pr-4">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-medium-gray leading-relaxed pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-dark-gray mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="text-gold-orange shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-dark-gray">Call Us</h4>
                  <a href="tel:+254746333285" className="text-brand-blue hover:text-deep-blue transition-colors duration-300 hover:underline">
                    +254 746 333 285
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-gold-orange shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-dark-gray">Email Us</h4>
                  <a href="mailto:info@vectorspace.co.ke" className="text-brand-blue hover:text-deep-blue transition-colors duration-300 hover:underline">
                    info@vectorspace.co.ke
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-gold-orange shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-dark-gray">Our Office</h4>
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

              <WorkingHours />

              <div className="mt-6">
                <h4 className="text-2xl font-bold text-dark-gray mb-4">Our Location</h4>
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
        </div>

        {/* Call-to-Action */}
        <div className="mt-16">
          <div className="rounded-2xl p-8 md:p-12 shadow-lg" style={{ backgroundColor: "#0B2A4A" }}>
            <div className="text-center">
              <MessageCircle className="mx-auto text-gold-orange mb-4" size={48} />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Didn&apos;t find your answer?
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Contact us via Email or Chat with us on WhatsApp
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@vectorspace.co.ke"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-brand-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md"
                >
                  <Mail size={20} />
                  Email Us
                  <ArrowRight size={16} />
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=254746333285&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-orange text-white font-semibold rounded-lg hover:bg-gold-orange/90 transition-colors duration-300 shadow-md"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

