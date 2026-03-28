"use client"

import { motion } from "framer-motion"
import { useTranslations } from "@/contexts/LanguageContext"

export default function Contact() {
  const t = useTranslations()

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-4">
          <h2 className="text-4xl text-gray-900 dark:text-white">{t.contact?.interested || "¿Interesado en mí?"}</h2>
          <h1 className="text-6xl font-serif text-gray-900 dark:text-white">{t.contact?.getInTouch || "No dudes en contactarme."}</h1>
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg mb-2 text-gray-900 dark:text-white">
              {t.contact?.name || "Nombre"}
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/20"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg mb-2 text-gray-900 dark:text-white">
              {t.contact?.email || "Correo"}
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/20"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg mb-2 text-gray-900 dark:text-white">
              {t.contact?.message || "Mensaje"}
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/20"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors rounded-lg p-3 text-gray-900 dark:text-white">
            {t.contact?.send || "Enviar"}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

