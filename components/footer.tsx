import { Mail, Phone, MapPin } from "lucide-react"
import Socials from "./socials"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded"></div>
              <span className="font-bold text-xl">VECTORSPACE</span>
            </div>
            <p className="text-muted-foreground">Engineering, Precision & Innovation</p>
            <Socials />
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 text-muted-foreground">
              <a href="#about" className="block hover:text-foreground transition">
                About
              </a>
              <a href="#services" className="block hover:text-foreground transition">
                Services
              </a>
              <a href="#projects" className="block hover:text-foreground transition">
                Projects
              </a>
              <a href="#contact" className="block hover:text-foreground transition">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+254746333285" className="hover:text-foreground transition">
                  +254 746 333 285
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@vectorspace.co.ke" className="hover:text-foreground transition">
                  info@vectorspace.co.ke
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>CK Business Center Ruiru</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 VectorSpace Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}