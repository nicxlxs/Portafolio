"use client"

import { motion, useAnimationFrame, useMotionValue } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useTranslations } from "@/contexts/LanguageContext"

const skillCategories = {
  Frontend: [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg",
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/angular/angular-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/express/express-original.svg",
    },
    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/spring/spring-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/java/java-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/python/python-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg",
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/git/git-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/docker/docker-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postman/postman-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/vscode/vscode-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/github/github-original.svg",
    },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/vercel/vercel-original.svg",
    },
  ],
}

const ROTATION_SPEED = 20 // degrees per second

export default function Skills() {
  const t = useTranslations()
  const [category, setCategory] = useState<keyof typeof skillCategories>("Frontend")
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
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

  // The whole wheel spins continuously around the Y axis.
  useAnimationFrame((_, delta) => {
    rotation.set((rotation.get() + (ROTATION_SPEED * delta) / 1000) % 360)
  })

  const skills = skillCategories[category]
  const cardWidth = isMobile ? 82 : 160
  const cardHeight = isMobile ? 112 : 216
  const gap = isMobile ? 4 : 44
  // Radius so neighbouring cards never overlap, whatever the number of skills.
  const radius = Math.max(
    isMobile ? 100 : 200,
    (cardWidth + gap) / (2 * Math.tan(Math.PI / skills.length)),
  )

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
                      className="absolute inset-0 rounded-xl bg-white dark:bg-white/90 p-3 md:p-6 flex flex-col items-center justify-between border border-gray-200 dark:border-transparent shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="relative w-10 h-10 md:w-[4.5rem] md:h-[4.5rem] mt-2">
                        {mounted && <Image src={skill.icon} alt={skill.name} fill className="object-contain" />}
                      </div>
                      <span className="text-xs md:text-base font-medium text-gray-900 text-center">{skill.name}</span>
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
