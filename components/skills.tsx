"use client"

import { motion, useAnimationFrame, useMotionValue } from "framer-motion"
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

const ROTATION_SPEED = 20 // degrees per second

export default function Skills() {
  const t = useTranslations()
  const [category, setCategory] = useState<keyof typeof skillCategories>("Frontend")
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [paused, setPaused] = useState(false)
  const { resolvedTheme } = useTheme()
  const rotation = useMotionValue(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // The whole wheel spins around the Y axis; pausing on hover lets you read a card.
  useAnimationFrame((_, delta) => {
    if (paused) return
    rotation.set((rotation.get() + (ROTATION_SPEED * delta) / 1000) % 360)
  })

  const skills = skillCategories[category]
  const cardWidth = isMobile ? 84 : 132
  const cardHeight = isMobile ? 116 : 180
  const gap = isMobile ? 18 : 40
  // Radius so neighbouring cards never overlap, whatever the number of skills.
  const radius = Math.max(
    isMobile ? 110 : 190,
    (cardWidth + gap) / (2 * Math.tan(Math.PI / skills.length)),
  )
  const isDark = resolvedTheme === "dark"

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h2 className="text-2xl mb-2 text-gray-900 dark:text-white">{t.skills?.theseAreMy}</h2>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 dark:text-white">{t.skills?.title}</h1>
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
              {t.skills?.categories?.[cat] ?? cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Scene: perspective + slight tilt so the wheel reads as 3D */}
      <div
        className="relative flex items-center justify-center w-full"
        style={{
          height: cardHeight + 120,
          perspective: isMobile ? 800 : 1400,
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div style={{ transformStyle: "preserve-3d", transform: "rotateX(-12deg)" }} className="relative">
          <motion.div
            key={category}
            style={{
              rotateY: rotation,
              transformStyle: "preserve-3d",
              width: cardWidth,
              height: cardHeight,
            }}
            className="relative"
          >
            {skills.map((skill, index) => {
              const angle = (index * 360) / skills.length
              const iconSrc =
                typeof skill.icon === "string" ? skill.icon : isDark ? skill.icon.dark : skill.icon.light

              return (
                <div
                  key={skill.name}
                  className="absolute inset-0"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                >
                  {/* Floating motion */}
                  <motion.div
                    className="relative w-full h-full"
                    style={{ transformStyle: "preserve-3d" }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                    transition={{
                      opacity: { duration: 0.6, delay: index * 0.08 },
                      scale: { duration: 0.6, delay: index * 0.08 },
                      y: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.25,
                      },
                    }}
                  >
                    {/* Front face */}
                    <div
                      className="absolute inset-0 rounded-xl bg-white dark:bg-white/90 p-3 md:p-5 flex flex-col items-center justify-between border border-gray-200 dark:border-transparent shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="relative w-9 h-9 md:w-14 md:h-14 mt-2">
                        {mounted && <Image src={iconSrc} alt={skill.name} fill className="object-contain" />}
                      </div>
                      <span className="text-xs md:text-sm font-medium text-gray-900 text-center">{skill.name}</span>
                    </div>

                    {/* Back face: seen when the card turns away from the viewer */}
                    <div
                      className="absolute inset-0 rounded-xl bg-gray-900 dark:bg-[#1A1A1A] border border-gray-700 dark:border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex items-center justify-center"
                      style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                      <div className="w-3/4 h-3/4 rounded-lg border border-white/20" />
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
