import { Mail, Phone, MapPin } from "lucide-react"
import Socials from "./socials"

export default function Footer() {
  return (


    <footer className="text-white py-12 border-t border-gray-600" style={{ backgroundColor: "#272752" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2">
            <img src="/icon-light-32x32.png" alt="VectorSpace Logo" className="w-8 h-8 rounded" />
            <span className="font-bold text-xl text-foreground">VECTORSPACE</span>
          </div>
            <p className="text-light-gray">Engineering, Precision & Innovation</p>
            <Socials />
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
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
              <a href="#contact" className="block hover:text-gold-orange transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
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

        <div className="border-t border-dark-gray pt-8 text-center text-light-gray">
          <p>&copy; 2025 VectorSpace Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}