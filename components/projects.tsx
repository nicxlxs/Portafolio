"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Github } from "lucide-react"
import { useTranslations } from "@/contexts/LanguageContext"
import { projectsData } from "@/lib/projects-data"

export default function Projects() {
  const t = useTranslations()
  
  // Get only featured projects
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4)
  const isSpanish = typeof t === "object" && "es" in t ? true : false
  const description = isSpanish ? "es" : "en"

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-6xl text-center mb-16 text-gray-900 dark:text-white"
      >
        {t.projects?.title || "My Projects"}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur-sm overflow-hidden"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={300}
              className="w-full object-cover aspect-video group-hover:scale-110 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-white/70 mb-4">
                {project.description[description as keyof typeof project.description]}
              </p>
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-gray-200 dark:bg-white/10 text-sm text-gray-900 dark:text-white">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {t.projects?.viewMore || "Ver más"} <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors text-gray-900 dark:text-white"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors text-gray-900 dark:text-white font-semibold"
          >
            {isSpanish ? "Ver todos los proyectos" : "View All Projects"}
          </motion.button>
        </Link>
      </div>
    </section>
  )
}

