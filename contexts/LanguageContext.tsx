"use client"

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react"
import es from "@/public/locales/es.json"
import en from "@/public/locales/en.json"

export type Language = "es" | "en"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Translations = Record<string, any>

const dictionaries: Record<Language, Translations> = { es, en }

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with the default language so server and first client render match.
  const [language, setLanguageState] = useState<Language>("es")

  useEffect(() => {
    try {
      const saved = localStorage.getItem("language")
      if (saved === "es" || saved === "en") setLanguageState(saved)
    } catch {
      // localStorage unavailable (private mode, etc.)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem("language", lang)
    } catch {
      // ignore
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: dictionaries[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function useTranslations() {
  const { translations } = useLanguage()
  return translations
}
