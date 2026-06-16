'use client'

import { FaWhatsapp } from 'react-icons/fa'

export function WhatsAppButton() {
  const phoneNumber = '917350247244'

  const message = encodeURIComponent(
    'Hi Aditya, I found your portfolio and would like to connect.'
  )

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-4 right-4
        sm:bottom-5 sm:right-5
        md:bottom-6 md:right-6
        lg:bottom-8 lg:right-8
        z-50
        flex items-center justify-center

        w-12 h-12
        sm:w-14 sm:h-14
        md:w-16 md:h-16

        rounded-full
        bg-green-500
        text-white

        shadow-lg
        hover:scale-110
        hover:shadow-2xl

        transition-all
        duration-300
      "
    >
      <FaWhatsapp
        className="
          w-6 h-6
          sm:w-8 sm:h-8
          md:w-9 md:h-9
        "
      />
    </a>
  )
}