"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Github, Search } from "lucide-react"
import { useTranslations } from "@/contexts/LanguageContext"
import { projectsData } from "@/lib/projects-data"

const PROJECTS_PER_PAGE = 12

export default function ProjectsPage() {
  const t = useTranslations()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projectsData.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.es.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.en.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesTag = !selectedTag || project.tags.includes(selectedTag)

      return matchesSearch && matchesTag
    })
  }, [searchTerm, selectedTag])

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  )

  const isSpanish = typeof t === "object" && "es" in t ? true : false
  const description = isSpanish ? "es" : "en"

  return (
    <section className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <h1 className="text-6xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {t.projects?.title || "Mis Proyectos"}
        </h1>
        <p className="text-center text-gray-700 dark:text-white/70 mb-12 text-lg">
          {filteredProjects.length} {filteredProjects.length === 1 ? "proyecto" : "proyectos"} encontrados
        </p>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={isSpanish ? "Buscar proyectos..." : "Search projects..."}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Tags Filter */}
        <div className="mb-12 flex flex-wrap gap-2 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setSelectedTag(null)
              setCurrentPage(1)
            }}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedTag === null
                ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                : "bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20"
            }`}
          >
            {isSpanish ? "Todos" : "All"}
          </motion.button>
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedTag(selectedTag === tag ? null : tag)
                setCurrentPage(1)
              }}
              className={`px-4 py-2 rounded-full transition-all text-sm ${
                selectedTag === tag
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        {paginatedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 dark:text-white/70 mb-4 text-sm line-clamp-2">
                    {project.description[description as keyof typeof project.description]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full bg-gray-200 dark:bg-white/10 text-xs text-gray-900 dark:text-white hover:cursor-pointer hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
                        onClick={() => {
                          setSelectedTag(tag)
                          setCurrentPage(1)
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-white/10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      {isSpanish ? "Ver más" : "View More"} <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors text-gray-900 dark:text-white"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-white/60 text-lg">
              {isSpanish ? "No se encontraron proyectos" : "No projects found"}
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-900 dark:text-white"
            >
              {isSpanish ? "Anterior" : "Previous"}
            </motion.button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                      : "bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-gray-900 dark:text-white"
                  }`}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-900 dark:text-white"
            >
              {isSpanish ? "Siguiente" : "Next"}
            </motion.button>
          </div>
        )}
      </motion.div>
    </section>
  )
}
