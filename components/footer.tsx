import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import Socials from "./socials"

export default function Footer() {
  return (


    <footer className="text-white py-12 border-t border-gray-600" style={{ backgroundColor: "#0B2A4A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-1">
            <Image src="/icon-light-32x32.png" alt="VectorSpace Logo" width={48} height={48} className="rounded" />
            <span className="font-bold text-xl text-gold-orange">VECTOR<span className="text-white">SPACE</span></span>
          </div>
            <p className="text-light-gray">Engineering, Precision & Innovation</p>
            <Socials />
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gold-orange">Quick Links</h4>
            <div className="space-y-2 text-light-gray">
              <a href="#about" className="block hover:text-gold-orange transition-colors duration-300">
                About
              </a>
              <a href="#services" className="block hover:text-gold-orange transition-colors duration-300">
                Services
              </a>
              <a href="#projects" className="block hover:text-gold-orange transition-colors duration-300">
                Projects
              </a>
              <a href="#faq" className="block hover:text-gold-orange transition-colors duration-300">
                FAQ
              </a>
              <a href="#contact" className="block hover:text-gold-orange transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gold-orange">Contact</h4>
            <div className="space-y-3 text-light-gray">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-gold-orange" />
                <a href="tel:+254746333285" className="hover:text-gold-orange transition-colors duration-300">
                  +254 746 333 285
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-gold-orange" />
                <a href="mailto:info@vectorspace.co.ke" className="hover:text-gold-orange transition-colors duration-300">
                  info@vectorspace.co.ke
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-gold-orange" />
                <span>CK Business Center Ruiru</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-light-gray">
          <div className="mb-4">
            <p className="font-semibold text-gold-orange text-sm">Designed &amp; Developed by James Franklin</p>
            <p className="mt-2 flex items-center justify-center gap-4 text-sm">
              <a href="mailto:jamesfranklinkimotho@gmail.com" className="flex items-center text-gold-orange hover:underline">
                <Mail size={14} className="mr-2 text-gold-orange" /> Email
              </a>
              <span className="mx-2 text-light-gray">•</span>
              <a href="https://www.linkedin.com/in/franklin-james-52a63a312/" className="flex items-center text-gold-orange hover:underline">
                <Linkedin size={14} className="mr-2 text-gold-orange" /> LinkedIn
              </a>
              <span className="mx-2 text-light-gray">•</span>
              <a href="https://github.com/Jamesfrank058/" className="flex items-center text-gold-orange hover:underline">
                <Github size={14} className="mr-2 text-gold-orange" /> GitHub
              </a>
            </p>
          </div>

          <div className="border-t border-dark-gray pt-4">
            <p className="font-bold text-lg">&copy; 2026 VectorSpace Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}