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
        className="text-foreground hover:text-accent transition"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.88v-6.99H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.99 22 12z" />
        </svg>
      </a>

      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="VectorSpace on Instagram"
        className="text-foreground hover:text-accent transition"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="currentColor" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      </a>


      <a
        href={TT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="VectorSpace on TikTok"
        className="text-foreground hover:text-accent transition"
      >
        <img src="/tiktok-svgrepo-com.svg" alt="TikTok" className="w-6 h-6" />
      </a>
    </div>
  )
}
