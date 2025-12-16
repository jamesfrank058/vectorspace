
import React from "react"

const FB_URL = "https://www.facebook.com/share/1D7zWuTwbQ/"
const IG_URL = "https://www.instagram.com/vectorspace_limited?igsh=cmo0NTI3aWJqNThn"
const TT_URL = "https://vm.tiktok.com/ZMHTcd8RvuPFk-Mkios/"

export default function Socials() {
  return (
    <div className="flex items-center gap-3 mt-4">
      <a
        href={FB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="VectorSpace on Facebook"
        className="text-medium-gray hover:text-gold-orange transition-colors duration-300 transform hover:scale-110"
      >
        <img src="/icons/facebook-1-svgrepo-com.svg" alt="Facebook" className="w-6 h-6 filter hover:brightness-125 transition-all duration-300" />
      </a>

      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="VectorSpace on Instagram"
        className="text-medium-gray hover:text-gold-orange transition-colors duration-300 transform hover:scale-110"
      >
        <img src="/icons/instagram-1-svgrepo-com.svg" alt="Instagram" className="w-6 h-6 filter hover:brightness-125 transition-all duration-300" />
      </a>

      <a
        href={TT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="VectorSpace on TikTok"
        className="text-medium-gray hover:text-gold-orange transition-colors duration-300 transform hover:scale-110"
      >
        <img src="/icons/tiktok-svgrepo-com.svg" alt="TikTok" className="w-6 h-6 filter hover:brightness-125 transition-all duration-300" />
      </a>
    </div>
  )
}

