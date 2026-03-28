"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "es" | "en"

type Translations = Record<string, any>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es")
  const [translations, setTranslations] = useState<Translations>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = (localStorage.getItem("language") as Language) || "es"
    setLanguageState(savedLanguage)
    loadTranslations(savedLanguage)
  }, [])

  const loadTranslations = async (lang: Language) => {
    try {
      setIsLoading(true)
      const response = await fetch(`/locales/${lang}.json`)
      const data = await response.json()
      setTranslations(data)
    } catch (error) {
      console.error(`Error loading translations for ${lang}:`, error)
    } finally {
      setIsLoading(false)
    }
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    loadTranslations(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
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
