"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <a href="/projects" className="text-foreground hover:text-accent transition">
              Projects
            </a>
            <button onClick={() => handleNavigation("contact")} className="text-foreground hover:text-accent transition">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button onClick={() => handleNavigation("about")} className="text-foreground hover:text-accent transition text-left">
              About
            </button>
            <button onClick={() => handleNavigation("team")} className="text-foreground hover:text-accent transition text-left">
              Team
            </button>
            <button onClick={() => handleNavigation("services")} className="text-foreground hover:text-accent transition text-left">
              Services
            </button>
            <a href="/projects" className="text-foreground hover:text-accent transition">
              Projects
            </a>
            <button onClick={() => handleNavigation("contact")} className="text-foreground hover:text-accent transition text-left">
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}