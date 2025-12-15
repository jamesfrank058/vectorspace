
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
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4"
               onMouseEnter={() => setIsInteracting(true)}
               onMouseLeave={() => setIsInteracting(false)}>
            <button onClick={() => handleNavigation("about")} className="text-foreground hover:text-accent transition text-left">
              About
            </button>
            <button onClick={() => handleNavigation("team")} className="text-foreground hover:text-accent transition text-left">
              Team
            </button>
            <button onClick={() => handleNavigation("services")} className="text-foreground hover:text-accent transition text-left">
              Services
            </button>
            <button onClick={() => handleNavigation("projects")} className="text-foreground hover:text-accent transition">
              Projects
            </button>
            <button onClick={() => handleNavigation("contact")} className="text-foreground hover:text-accent transition text-left">
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}