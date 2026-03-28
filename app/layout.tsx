import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/LanguageContext"
import Background from "@/components/background"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Mi Portafolio",
  description: "Portafolio de proyectos de ingeniería de software",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <Background />
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"

import "./globals.css"

import "./globals.css"

