

"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import Socials from "./socials"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const menuRef = useRef<HTMLDivElement>(null)


  // Close menu when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])



  const handleNavigation = (anchor: string) => {
    if (pathname === "/projects") {
      router.push(`/#${anchor}`)
    } else {
      const element = document.getElementById(anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }


  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLogoClick = () => {
    router.push('/')
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <button onClick={handleLogoClick} className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <img src="/icon-light-32x32.png" alt="VectorSpace Logo" className="w-8 h-8 rounded" />
            <span className="font-bold text-xl text-foreground">VECTORSPACE</span>
          </button>


          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            <button onClick={() => handleNavigation("about")} className="text-foreground hover:text-accent transition">
              About
            </button>
            <button onClick={() => handleNavigation("team")} className="text-foreground hover:text-accent transition">
              Team
            </button>
            <button onClick={() => handleNavigation("services")} className="text-foreground hover:text-accent transition">
              Services
            </button>
            <button onClick={() => handleNavigation("projects")} className="text-foreground hover:text-accent transition">
              Projects
            </button>
            <button onClick={() => handleNavigation("contact")} className="text-foreground hover:text-accent transition">
              Contact
            </button>
          </nav>

          {/* Desktop Socials */}
          <div className="hidden md:flex items-center">
            <Socials />
          </div>


          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={handleMenuToggle} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>





        {/* Mobile Menu */}
        <div 
          ref={menuRef}
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-border bg-card/95 backdrop-blur-sm shadow-lg">
            <nav className="py-2 flex flex-col">
              <button 
                onClick={() => handleNavigation("about")} 
                className="px-6 py-4 text-left text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-accent hover:pl-8 relative group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3"></span>
                  About
                </span>
              </button>
              <button 
                onClick={() => handleNavigation("team")} 
                className="px-6 py-4 text-left text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-accent hover:pl-8 relative group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3"></span>
                  Team
                </span>
              </button>
              <button 
                onClick={() => handleNavigation("services")} 
                className="px-6 py-4 text-left text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-accent hover:pl-8 relative group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3"></span>
                  Services
                </span>
              </button>
              <button 
                onClick={() => handleNavigation("projects")} 
                className="px-6 py-4 text-left text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-accent hover:pl-8 relative group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3"></span>
                  Projects
                </span>
              </button>

              <button 
                onClick={() => handleNavigation("contact")} 
                className="px-6 py-4 text-left text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-accent hover:pl-8 relative group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3"></span>
                  Contact
                </span>
              </button>
            </nav>
            
            {/* Mobile Socials */}
            <div className="px-6 py-4 border-t border-border">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground font-medium">Follow us:</span>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}