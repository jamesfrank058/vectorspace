"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <a href="#about" className="text-foreground hover:text-accent transition">
              About
            </a>
            <a href="#team" className="text-foreground hover:text-accent transition">
              Team
            </a>
            <a href="#services" className="text-foreground hover:text-accent transition">
              Services
            </a>
            <a href="#projects" className="text-foreground hover:text-accent transition">
              Projects
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#about" className="text-foreground hover:text-accent transition">
              About
            </a>
            <a href="#team" className="text-foreground hover:text-accent transition">
              Team
            </a>
            <a href="#services" className="text-foreground hover:text-accent transition">
              Services
            </a>
            <a href="#projects" className="text-foreground hover:text-accent transition">
              Projects
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}