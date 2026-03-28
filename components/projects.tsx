"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Github } from "lucide-react"
import { useTranslations } from "@/contexts/LanguageContext"

const projects = [
  {
    title: "CargaSafe",
    descriptionKey: "cargasafe",
    image: "/projects/cargasafe.png",
    tags: ["Angular", "Java", "PostgreSQL"],
    link: "https://carga-safe.web.app/",
    github: "https://github.com/Los-Parkers-IoT/iot-solutions-development-cargasafe-frontend",
  },
  {
    title: "Connectly",
    descriptionKey: "connectly",
    image: "/projects/connectly.png",
    tags: ["Python", "Tailwind", "MySQL"],
    link: "https://connectly-ywvg.onrender.com/login",
    github: "https://github.com/UPC-SmartGarden-SW56",
  },
  {
    title: "NutriGain",
    descriptionKey: "nutrigain",
    image: "/projects/nutrigain.png",
    tags: ["Angular", "Java", "MySQL"],
    link: "https://front-azl2.vercel.app/",
    github: "https://github.com/UPC-NutriGain",
  },
  {
    title: "Smart Garden",
    descriptionKey: "smartgarden",
    image: "/projects/smart-garden.png",
    tags: ["Angular", "Java", "MySQL"],
    link: "#",
    github: "https://github.com/UPC-SmartGarden-SW56",
  },
]

export default function Projects() {
  const t = useTranslations()

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-6xl text-center mb-16"
      >
        {t.projects?.title || "My Projects"}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={300}
              className="w-full object-cover aspect-video"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white/70 mb-4">
                {t.projects?.[project.descriptionKey]?.description || ""}
              </p>
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  {t.projects?.viewMore || "Ver más"} <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          {t.projects?.moreProjects || "More Projects"}
        </motion.button>
      </div>
    </section>
  )
}

