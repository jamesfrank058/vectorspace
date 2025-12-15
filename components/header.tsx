
"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      
      // Set a timeout to close menu after scroll stops
      scrollTimeoutRef.current = setTimeout(() => {
        if (!isInteracting) {
          setIsOpen(false)
        }
      }, 150) // Wait 150ms after scroll stops
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [isInteracting])


  const handleNavigation = (anchor: string) => {
    setIsInteracting(true)
    
    if (pathname === "/projects") {
      router.push(`/#${anchor}`)
    } else {
      const element = document.getElementById(anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    
    // Reset interaction state after navigation
    setTimeout(() => {
      setIsOpen(false)
      setIsInteracting(false)
    }, 100)
  }

  const handleMenuToggle = () => {
    setIsInteracting(true)
    setIsOpen(!isOpen)
    
    // Reset interaction state after toggle
    setTimeout(() => {
      setIsInteracting(false)
    }, 200)
  }

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img src="/icon-light-32x32.png" alt="VectorSpace Logo" className="w-8 h-8 rounded" />
            <span className="font-bold text-xl text-foreground">VECTORSPACE</span>
          </div>

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


          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={handleMenuToggle} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>




        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>


          <div className="border-t border-border bg-card/95 backdrop-blur-sm shadow-lg">
            <nav className="py-2 flex flex-col"
                 onMouseEnter={() => setIsInteracting(true)}
                 onMouseLeave={() => setIsInteracting(false)}>
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
          </div>
        </div>
      </div>
    </header>
  )
}