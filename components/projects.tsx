"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Github } from "lucide-react"

const projects = [
  {
    title: "CargaSafe",
    description: "Aplicación web desarrollada para gestionar proyectos domésticos de hidroponía.",
    image: "/projects/cargasafe.png",
    tags: ["Angular", "Java", "PostgreSQL"],
    link: "#",
    github: "https://github.com/Los-Parkers-IoT/iot-solutions-development-cargasafe-frontend",
  },
  {
    title: "Connectly",
    description: "Aplicación web desarrollada para gestionar proyectos domésticos de hidroponía.",
    image: "/projects/connectly.png",
    tags: ["Python", "Tailwind", "MySQL"],
    link: "#",
    github: "https://github.com/UPC-SmartGarden-SW56",
  },
  {
    title: "NutriGain",
    description: "Aplicación de gestión de tareas con características colaborativas.",
    image: "/projects/nutrigain.png",
    tags: ["Angular", "Java", "MySQL"],
    link: "#",
    github: "https://github.com/UPC-NutriGain",
  },
  {
    title: "Smart Garden",
    description: "Aplicación web desarrollada para gestionar proyectos domésticos de hidroponía.",
    image: "/projects/smart-garden.png",
    tags: ["Angular", "Java", "MySQL"],
    link: "#",
    github: "https://github.com/UPC-SmartGarden-SW56",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-6xl text-center mb-16"
      >
        My Projects
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
              <p className="text-white/70 mb-4">{project.description}</p>
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
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  Ver más <ArrowRight className="w-4 h-4" />
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
          More Projects
        </motion.button>
      </div>
    </section>
  )
}

