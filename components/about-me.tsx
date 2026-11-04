"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Instagram, Download } from "lucide-react"
import { useTranslations } from "@/contexts/LanguageContext"

export default function AboutMe() {
  const t = useTranslations()

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-20%20at%201.32.52%20AM-GFtqfEu4DAD9l6pzKXkyEXNl73xRaK.jpeg"
            alt={t.aboutMe?.profileAlt}
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t.aboutMe?.title}</h2>
          <p className="text-lg text-gray-700 dark:text-white/70">
            {t.aboutMe?.description}
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/nicxlxs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition-colors"
            >
              <Github className="w-6 h-6" aria-label="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-vera-nu%C3%B1ez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-6 h-6" aria-label="LinkedIn" />
            </a>
            <a
              href="https://www.instagram.com/_nixl.vx/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition-colors"
            >
              <Instagram className="w-6 h-6" aria-label="Instagram" />
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1WA1UTFFi9V20dx9rWXzn8hmZeuvtGO8G/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-[#1A1A1A] hover:bg-black dark:hover:bg-[#2A2A2A] transition-colors text-white"
          >
            <Download className="w-5 h-5" />
            <span>{t.aboutMe?.downloadCV}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

