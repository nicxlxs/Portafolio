"use client"

import { motion } from "framer-motion"
import { HomeIcon, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useLanguage, useTranslations } from "@/contexts/LanguageContext"
import { usePathname } from "next/navigation"
import MobileNav from "./mobile-nav"
import { useEffect, useState } from "react"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = useTranslations()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleProjectsClick = () => {
    if (pathname === "/projects") {
      return // Already on projects page
    }
    scrollToSection("projects")
  }

  const handleHomeClick = () => {
    if (pathname === "/projects") {
      window.location.href = "/"
    } else {
      scrollToSection("about")
    }
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full top-0 z-50 flex justify-center py-6 px-4"
    >
      <nav className="flex items-center justify-between w-full max-w-6xl md:justify-center gap-4 md:gap-8 px-4 md:px-8 py-2 rounded-full bg-gray-100/90 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10">
        <button
          onClick={handleHomeClick}
          className="text-gray-800 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors"
        >
          <HomeIcon className="w-5 h-5" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => {
              if (pathname === "/projects") {
                window.location.href = "/#certifications"
              } else {
                scrollToSection("certifications")
              }
            }}
            className="text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors"
          >
            {t.header?.certifications || "Certificaciones"}
          </button>
          <button
            onClick={() => {
              if (pathname === "/projects") {
                window.location.href = "/#skills"
              } else {
                scrollToSection("skills")
              }
            }}
            className="text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors"
          >
            {t.header?.skills || "Habilidades"}
          </button>
          {pathname === "/projects" ? (
            <button
              disabled
              className="text-gray-600 dark:text-white/70 opacity-60 cursor-default"
            >
              {t.header?.projects || "Proyectos"}
            </button>
          ) : (
            <button
              onClick={handleProjectsClick}
              className="text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors"
            >
              {t.header?.projects || "Proyectos"}
            </button>
          )}
          <button
            onClick={() => {
              if (pathname === "/projects") {
                window.location.href = "/#contact"
              } else {
                scrollToSection("contact")
              }
            }}
            className="text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors"
          >
            {t.header?.contact || "Contacto"}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="px-3 py-1 rounded-lg bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-white/10 dark:text-white/90 text-sm font-medium dark:hover:bg-white/20 transition-colors uppercase"
          >
            {language}
          </button>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition-colors"
              aria-label={t.header?.changeTheme || "Change theme"}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
        </div>

        <MobileNav />
      </nav>
    </motion.header>
  )
}

