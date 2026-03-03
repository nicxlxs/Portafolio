"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Instagram, Download } from "lucide-react"

const CV_CONTENT = `Nicolas Alejandro Vera Nuñez  
Estudiante de Ingeniería de Software 
...` // Your full CV content here

export default function AboutMe() {
  const handleDownloadCV = () => {
    // Create blob from CV content
    const blob = new Blob([CV_CONTENT], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "Nicolas_Vera_CV.txt")
    document.body.appendChild(link)
    link.click()
    link.parentNode?.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

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
            alt="Profile"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-white/70">
            Soy un estudiante apasionado de ingeniería de software con un fuerte interés en el desarrollo web y la
            creación de soluciones innovadoras. Me encanta aprender nuevas tecnologías y aplicarlas en proyectos
            desafiantes.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/nicxlxs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="www.linkedin.com/in/nicolas-vera-nuñez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/_nixl.vx/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1KVCXhaGwUcCHTPvhVE2YEs00PdW099HR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

