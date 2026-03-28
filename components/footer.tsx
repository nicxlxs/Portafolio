"use client"

import { useTranslations } from "@/contexts/LanguageContext"

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="py-8 bg-gray-100 dark:bg-[#121212]">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-white/50">
        <p>&copy; {new Date().getFullYear()} {t.footer?.copyright || "Mi Portafolio. Todos los derechos reservados."}</p>
      </div>
    </footer>
  )
}

