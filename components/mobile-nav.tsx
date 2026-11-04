"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname, useRouter } from "next/navigation"
import { useLanguage, useTranslations } from "@/contexts/LanguageContext"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  const { language, setLanguage } = useLanguage()
  const t = useTranslations()

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    { name: t.mobileNav?.about, id: "about" },
    { name: t.header?.certifications, id: "certifications" },
    { name: t.header?.skills, id: "skills" },
    { name: t.header?.projects, id: "projects" },
    { name: t.header?.contact, id: "contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    if (pathname !== "/") {
      router.push(`/#${sectionId}`)
      return
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2 rounded-lg bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition-colors" aria-label={t.mobileNav?.openMenu}>
        <Menu className="w-6 h-6" />
      </button>

      {mounted && createPortal(
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
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.mobileNav?.menu}</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label={t.mobileNav?.closeMenu}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 rounded-lg text-gray-800 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                    className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-gray-900 dark:text-white"
                  >
                    {resolvedTheme === "dark" ? (
                      <>
                        <Sun className="w-4 h-4" /> {t.mobileNav?.lightMode}
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4" /> {t.mobileNav?.darkMode}
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
      )}
    </div>
  )
}

