import React, { JSX } from "react"

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=254746333285&text&type=phone_number&app_absent=0"

export default function WhatsApp(): JSX.Element {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-fab"
    >
      <img src="/whatsapp.svg" alt="WhatsApp" />
    </a>
  )
}
