"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "@/contexts/LanguageContext"

export default function Contact() {
  const t = useTranslations()
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body = `${form.message}

${form.name} <${form.email}>`
    window.location.href = `mailto:nicolas.vera.nunez.2004@gmail.com?subject=${encodeURIComponent(
      t.contact?.subject ?? "",
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-4">
          <h2 className="text-4xl text-gray-900 dark:text-white">{t.contact?.interested}</h2>
          <h1 className="text-6xl font-serif text-gray-900 dark:text-white">{t.contact?.getInTouch}</h1>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg mb-2 text-gray-900 dark:text-white">
              {t.contact?.name}
            </label>
            <input
              type="text"
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t.contact?.namePlaceholder}
              className="w-full bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/20 placeholder:text-gray-500 dark:placeholder:text-white/40"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg mb-2 text-gray-900 dark:text-white">
              {t.contact?.email}
            </label>
            <input
              type="email"
              id="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t.contact?.emailPlaceholder}
              className="w-full bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/20 placeholder:text-gray-500 dark:placeholder:text-white/40"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg mb-2 text-gray-900 dark:text-white">
              {t.contact?.message}
            </label>
            <textarea
              id="message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.contact?.messagePlaceholder}
              rows={4}
              className="w-full bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/20 placeholder:text-gray-500 dark:placeholder:text-white/40"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors rounded-lg p-3 text-gray-900 dark:text-white">
            {t.contact?.send}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

