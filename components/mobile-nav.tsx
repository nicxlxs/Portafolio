"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage, useTranslations } from "@/contexts/LanguageContext"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = useTranslations()

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    { name: t.mobileNav?.about || "About", id: "about" },
    { name: t.header?.certifications || "Certificaciones", id: "certifications" },
    { name: t.header?.skills || "Habilidades", id: "skills" },
    { name: t.header?.projects || "Proyectos", id: "projects" },
    { name: t.header?.contact || "Contacto", id: "contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2 rounded-lg bg-white/10 text-white" aria-label={t.mobileNav?.openMenu || "Open menu"}>
        <Menu className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 z-50 p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">{t.mobileNav?.menu || "Menu"}</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label={t.mobileNav?.closeMenu || "Close menu"}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              <div className="absolute bottom-8 left-6 right-6 space-y-4">
                <button
                  onClick={() => setLanguage(language === "es" ? "en" : "es")}
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors uppercase text-gray-900 dark:text-white"
                >
                  {language}
                </button>
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-gray-900 dark:text-white"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="w-4 h-4" /> {t.mobileNav?.lightMode || "Light Mode"}
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4" /> {t.mobileNav?.darkMode || "Dark Mode"}
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

