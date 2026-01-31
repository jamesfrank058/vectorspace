
import React from "react"
import Image from "next/image"

const FB_URL = "https://www.facebook.com/share/1D7zWuTwbQ/"
const IG_URL = "https://www.instagram.com/vectorspace_limited?igsh=cmo0NTI3aWJqNThn"
const TT_URL = "https://vm.tiktok.com/ZMHTcd8RvuPFk-Mkios/"

type SocialsProps = {
  compact?: boolean
}

export default function Socials({ compact = false }: SocialsProps) {
  const containerClass = compact ? "flex items-center gap-4" : "flex items-center gap-3 mt-4"
  const iconClass = compact ? "w-7 h-7 filter brightness-110 transition-all duration-300" : "w-6 h-6 filter hover:brightness-125 transition-all duration-300"
  const iconSize = compact ? 28 : 24
  const linkClass = compact
    ? "text-white hover:text-gold-orange transition-colors duration-300 transform hover:scale-105 p-2 rounded-md bg-white/0 hover:bg-white/6 shadow-sm"
    : "text-medium-gray hover:text-gold-orange transition-colors duration-300 transform hover:scale-110"

  return (
    <div className={containerClass}>
      <a
        href={FB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="VectorSpace on Facebook"
        className={linkClass}
      >
        <Image src="/icons/facebook-1-svgrepo-com.svg" alt="Facebook" width={iconSize} height={iconSize} className={iconClass} />
      </a>

      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="VectorSpace on Instagram"
        className={linkClass}
      >
        <Image src="/icons/instagram-1-svgrepo-com.svg" alt="Instagram" width={iconSize} height={iconSize} className={iconClass} />
      </a>

      <a
        href={TT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="VectorSpace on TikTok"
        className={linkClass}
      >
        <Image src="/icons/tiktok-svgrepo-com.svg" alt="TikTok" width={iconSize} height={iconSize} className={iconClass} />
      </a>
    </div>
  )
}

