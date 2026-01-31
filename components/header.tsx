

"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
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



  // Improved navigation: scroll to anchors reliably even when navigating from other pages or from a static export
  const handleNavigation = (anchor: string) => {
    // close menu first for a smoother UX
    setIsOpen(false)

    // If we're on the homepage, try to scroll directly to the element
    if (pathname === '/') {
      const element = document.getElementById(anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        // update the hash without causing a reload
        history.replaceState(null, '', `#${anchor}`)
        return
      }
      // If element not found (maybe not rendered yet), still set the hash so the effect will attempt to scroll
      history.replaceState(null, '', `#${anchor}`)
      return
    }

    // We're on a different page: navigate to the root with the hash.
    // Use a full page navigation so static exports from the `out` folder still work.
    window.location.href = `${window.location.origin}/#${anchor}`
  }


  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLogoClick = () => {
    router.push('/')
    setIsOpen(false)
  }

  // Helper to navigate to absolute paths reliably (works on static exports)
  const navigateTo = (path: string) => {
    // Try SPA navigation first, fall back to hard navigation for static exports
    const full = `${window.location.origin}${path.startsWith('/') ? path : '/' + path}`
    try {
      const res = router.push(path)
      if (res && typeof (res as Promise<unknown>).then === 'function') {
        (res as Promise<unknown>).catch(() => { window.location.href = full })
      } else {
        // if router.push isn't a promise, verify navigation happened and fallback if not
        setTimeout(() => {
          if (window.location.pathname !== path && window.location.pathname !== `${path}/`) {
            window.location.href = full
          }
        }, 150)
      }
    } catch {
      window.location.href = full
    }

    setIsOpen(false)
  }

  // When we land on the homepage (or when the hash changes), try to scroll to the element referenced by the hash.
  useEffect(() => {
    const tryScrollHash = () => {
      if (typeof window === 'undefined') return
      if (window.location.pathname !== '/') return
      const hash = window.location.hash
      if (!hash) return
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        // slight delay lets content render before scrolling
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
      }
    }

    // run once on mount/pathname change
    tryScrollHash()

    // listen for hash changes (e.g., when navigation sets the hash)
    window.addEventListener('hashchange', tryScrollHash)

    return () => window.removeEventListener('hashchange', tryScrollHash)
  }, [pathname])

  return (

    <header className="sticky top-0 z-50 border-b border-gray-600" style={{ backgroundColor: "#0B2A4A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">


          <button onClick={handleLogoClick} className="flex items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer">
            <Image src="/icon-light-32x32.png" alt="VectorSpace Logo" width={48} height={48} className="rounded" />
            <span className="font-bold text-xl">
              <span className="text-white">VECTOR</span>
              <span className="text-gold-orange">SPACE</span>
            </span>
          </button>


          {/* Desktop Menu */}

          <nav className="hidden md:flex gap-8">
            <button onClick={() => handleNavigation("about")} className="text-white hover:text-yellow-300 transition">
              About
            </button>
            <button onClick={() => handleNavigation("team")} className="text-white hover:text-yellow-300 transition">
              Team
            </button>
            <button onClick={() => handleNavigation("services")} className="text-white hover:text-yellow-300 transition">
              Services
            </button>
            <button onClick={() => handleNavigation("projects")} className="text-white hover:text-yellow-300 transition">
              Projects
            </button>
            <button onClick={() => navigateTo('/resources')} className="text-white hover:text-yellow-300 transition text-left">
              Resources
            </button>
            <button onClick={() => handleNavigation("faq")} className="text-white hover:text-yellow-300 transition">
              FAQ
            </button>
            <button onClick={() => handleNavigation("contact")} className="text-white hover:text-yellow-300 transition">
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
            isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-gray-600 backdrop-blur-sm shadow-lg max-h-[calc(100vh-4rem)] overflow-auto" style={{ backgroundColor: "rgba(11, 42, 74, 0.95)" }}>
            <nav className="py-2 flex flex-col">
              <button 
                onClick={() => handleNavigation("about")} 
                className="px-6 py-3 text-left text-white hover:text-yellow-300 hover:bg-white/10 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-yellow-300 hover:pl-8 relative group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3"></span>
                  About
                </span>
              </button>
              <button 
                onClick={() => handleNavigation("team")} 
                className="px-6 py-3 text-left text-white hover:text-yellow-300 hover:bg-white/10 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-yellow-300 hover:pl-8 relative group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3"></span>
                  Team
                </span>
              </button>
              <button 
                onClick={() => handleNavigation("services")} 
                className="px-6 py-3 text-left text-white hover:text-yellow-300 hover:bg-white/10 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-yellow-300 hover:pl-8 relative group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3"></span>
                  Services
                </span>
              </button>
              <button 
                onClick={() => handleNavigation("projects")} 
                className="px-6 py-3 text-left text-white hover:text-yellow-300 hover:bg-white/10 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-yellow-300 hover:pl-8 relative group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3"></span>
                  Projects
                </span>
              </button>

              <button
                onClick={() => navigateTo('/resources')}
                className="px-6 py-3 text-left text-white hover:text-yellow-300 hover:bg-white/10 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-yellow-300 hover:pl-8 relative group block"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3"></span>
                  Resources
                </span>
              </button>

              <button 
                onClick={() => handleNavigation("faq")} 
                className="px-6 py-3 text-left text-white hover:text-yellow-300 hover:bg-white/10 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-yellow-300 hover:pl-8 relative group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3"></span>
                  FAQ
                </span>
              </button>

              <button 
                onClick={() => handleNavigation("contact")} 
                className="px-6 py-3 text-left text-white hover:text-yellow-300 hover:bg-white/10 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-yellow-300 hover:pl-8 relative group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3"></span>
                  Contact
                </span>
              </button>
            </nav>
            
            {/* Mobile Socials */}
            <div className="px-6 py-4 border-t border-gray-600">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-white font-medium">Follow us:</span>
                <div className="ml-4">
                  <Socials compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}