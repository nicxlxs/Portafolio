"use client"

import { motion, useAnimation } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useTranslations } from "@/contexts/LanguageContext"

const skillCategories = {
  Frontend: [
    {
      name: "HTML",
      icon: {
        light:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/html%20modo%20blanco-qILOmp8pHH72F9F6qxdgUdyQTQ6Z0K.png",
        dark: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/html%20modo%20negro-XTtDrqXWKmwj7d5w3DW3o5T5XuxxE4.png",
      },
    },
    {
      name: "CSS",
      icon: {
        light:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/css%20modo%20blanco-mU0tGlfXciSxhFVpoljIB97hm5UzC4.png",
        dark: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/css%20modo%20negro-FXXmoLeUM6GrhZ1vifzmbBYjsnDvRd.png",
      },
    },
    {
      name: "JavaScript",
      icon: {
        light:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/javascript%20modo%20blanco-9Sy8dalrvAmeYNf7KlytlxYNIQau41.png",
        dark: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/javascript%20modo%20negro-IrETsH0zZ9FFtwWUIj18ErkLY6yQLp.png",
      },
    },
    {
      name: "React",
      icon: {
        light:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react%20modo%20blanco-bT21bRmjBYdIwLN2Y1KsFGY8JfrnZ5.png",
        dark: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rect%20modo%20negro-t0FsK5HaN5AQXExLlGWVhzRR3DFtGO.png",
      },
    },
    {
      name: "Next.js",
      icon: {
        light:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nextjs%20modo%20blanco-dZoSKzWHnMyaGRMZkWlppD0AtjVv32.png",
        dark: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nextjs%20modo%20negro-hLrBs6VYw68txlxX2DRYkoV5uqgfTX.png",
      },
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: {
        light:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nodejs%20modo%20blanco-7YUJdYwbiupEpR4CxODeCSgcJvo8x5.png",
        dark: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nodejs%20modo%20negro-603pE3UyRPGU81ydluWPxTIEZsyszt.png",
      },
    },
    {
      name: "Express",
      icon: {
        light:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/express%20modo%20blanco-Bi5CFPMF5xtYtO8S5dDcL5nLWUue1h.png",
        dark: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/express%20modo%20negro-6D1xT9cC4HgQb7tLFzPbZG48hQBPVb.png",
      },
    },
    {
      name: "Spring Boot",
      icon: {
        light:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/springboot%20modo%20blanco-sIwI4pEyddXlgNgiJSKkghFb5ROL2R.png",
        dark: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/springboot%20modo%20negro-DPslBaUPFa1DrZdTYDwwJGlV7CZR9h.png",
      },
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: {
        light:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git%20modo%20blanco-5Fbg6xoJTd0WvuWLfdhIi9NXhV6TWv.png",
        dark: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git%20modo%20negro-uZofjpfoeqF11JOH9p4Y4inJ2ztOaV.png",
      },
    },
    {
      name: "Docker",
      icon: {
        light:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-docker-500-i3c4uMPLzvohWd93hqIvcMLfmjuPTG.png",
        dark: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-docker-500%20(1)-wrVe8LuXUs22LB3jAmwLfCppbGN2Y5.png",
      },
    },
    {
      name: "Postman",
      icon: {
        light:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/postman%20modo%20blanco-qC4sbzvEBZJc4zZdoYMnx3lYkyGb0y.png",
        dark: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/postman%20modo%20negro-hXVu7O52nGSdZnOaJX7L0AZQXoqTka.png",
      },
    },
    {
      name: "VS Code",
      icon: {
        light:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-visual-studio-500-OQKd2t7DKQnMTgX5H5Iu71LfQYpEDs.png",
        dark: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-visual-studio-500%20(1)-ux45jX5u6C25akumfF6SETmh4BTA6u.png",
      },
    },
  ],
}

export default function Skills() {
  const t = useTranslations()
  const [category, setCategory] = useState<keyof typeof skillCategories>("Frontend")
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const controls = useAnimation()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    controls.start({
      rotateY: 360,
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    })
  }, [controls])

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h2 className="text-2xl mb-2 text-gray-900 dark:text-white">{t.skills?.theseAreMy || "These are my"}</h2>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 dark:text-white">{t.skills?.title || "SKILLS"}</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {Object.keys(skillCategories).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat as keyof typeof skillCategories)}
              className={`px-4 md:px-6 py-2 rounded-full transition-colors ${
                category === cat
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] preserve-3d" animate={controls}>
        {skillCategories[category].map((skill, index) => {
          const angle = (index * 2 * Math.PI) / skillCategories[category].length
          const radius = isMobile ? 100 : 200
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle)
          const z = 30 * Math.sin(angle * 2)

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: x + radius,
                y: y + radius,
                z,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              style={{
                position: "absolute",
                transform: `translate(-50%, -50%) translate3d(0, 0, ${z}px)`,
                transformStyle: "preserve-3d",
              }}
              className="hover:scale-110 transition-transform duration-300"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                <div className="w-20 h-28 md:w-32 md:h-44 rounded-lg bg-white dark:bg-white/90 p-4 md:p-6 flex flex-col items-center justify-between shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                  <div className="relative w-8 h-8 md:w-12 md:h-12 mb-2">
                    {mounted && (
                      <Image
                        src={
                          typeof skill.icon === "string"
                            ? skill.icon
                            : theme === "dark"
                              ? skill.icon.dark
                              : skill.icon.light
                        }
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-900">{skill.name}</span>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

