"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { GraduationCap, Code, Languages, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useTranslations } from "@/contexts/LanguageContext"

const certificationsData = {
  blockchain: {
    icon: <Code className="w-6 h-6" />,
    title: "Blockchain",
    description: "Especialización en tecnología Blockchain y contratos inteligentes",
    certificates: [
      {
        title: "Blockchain Specialization",
        institution: "University at Buffalo",
        date: "February 2024",
        credential: "GAHX97Y6JFNX",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Certificado%20de%20especializacion%20Coursera%20GAHX97Y6JFNX-1-1lCiTqvqJbvqAByktKteZU5e9TttTC.png",
        verifyUrl: "https://coursera.org/verify/specialization/GAHX97Y6JFNX",
      },
      {
        title: "Blockchain Basics",
        institution: "University at Buffalo",
        date: "February 2024",
        credential: "QTR5BHYPX25C",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Certificado%201%20Coursera%20QTR5BHYPX25C-1-8SfjFYVluVNEtJZJGLH0ZXwiABFGFs.png",
        verifyUrl: "https://coursera.org/verify/QTR5BHYPX25C",
      },
      {
        title: "Smart Contracts",
        date: "February 2024",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Certificado%202%20Coursera%20Z94LU6CB2C83-1-qqyqleERSJy5gziC5FGxtBkVVRbfil.png",
        verifyUrl: "https://coursera.org/verify/Z94LU6CB2C83",
      },
      {
        title: "Decentralized Applications",
        date: "February 2024",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Certificado%203%20Coursera%20CDNH8UFC6Q49-1-NtyAorig2HW4gG8TBhF16Hv7m9bvaa.png",
        verifyUrl: "https://coursera.org/verify/CDNH8UFC6Q49",
      },
      {
        title: "Blockchain Platforms",
        date: "February 2024",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Certificado%204%20de%20Coursera%20BAN5W9UU72AS-1-N2OuUu1VqXVTUUjlYpD6fe2PNjWiB7.png",
        verifyUrl: "https://coursera.org/verify/BAN5W9UU72AS",
      },
    ],
  },
  scrum: {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Scrum Master",
    description: "Certificación profesional en metodologías ágiles",
    certificates: [
      {
        title: "Scrum Master Certification",
        institution: "LearnQuest",
        date: "February 2024",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scrum%20Master%20Certification%20Coursera%20YZDJBPK98MK8-1-wzmKKfk403pE8evByKeGtvsIpyKJQf.png",
        verifyUrl: "https://coursera.org/verify/specialization/YZDJBPK98MK8",
      },
      {
        title: "Introduction to Scrum Master Training",
        date: "February 2024",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Certificado%201%20de%20Coursera%20MULGAYLW6NVM-1-yHD2OTR0zIskz47tVsF9FwtMo3RKQx.png",
        verifyUrl: "https://coursera.org/verify/MULGAYLW6NVM",
      },
      {
        title: "Scrum Methodologies",
        date: "February 2024",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Certificado%202%20de%20Coursera%20MULGAYLW6NVM-1-i9IMvkaf8Dh4uM9XUSh58WvOlcObpl.png",
        verifyUrl: "https://coursera.org/verify/4VXZ6E9JDXP8",
      },
      {
        title: "Scaling Agile and Team-of-Teams",
        date: "February 2024",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Certificado%203%20de%20Coursera%20XDPMP6RM3395-1-rZUPzfLDB2OikLPdcv0FMPc7iCNrRI.png",
        verifyUrl: "https://coursera.org/verify/XDPMP6RM3395",
      },
      {
        title: "Combining Scrum with Other Agile Methodologies",
        date: "February 2024",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Certificado%204%20de%20Coursera%20RY7RU2WEHV4H-1-CStM0vUsFGaMx40bskLVg7ZTO7ELlZ.png",
        verifyUrl: "https://coursera.org/verify/RY7RU2WEHV4H",
      },
    ],
  },
  english: {
    icon: <Languages className="w-6 h-6" />,
    title: "Inglés",
    description: "Certificación en inglés como lengua extranjera",
    certificates: [
      {
        title: "Advanced Phase",
        institution: "Británico",
        date: "June 2022",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CERTIFICADO%20AD%20VERA%20NU%C3%91EZ,NICOLAS%20ALEJANDRO-1-nFbmOO7oGZWz0SmJwAEOmdEB4f828H.png",
        code: "B257-0000000764",
      },
      {
        title: "Intermediate Phase",
        institution: "Británico",
        date: "April 2021",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CERTIFICADO%20INT%20VERA%20NU%C3%91EZ,NICOLAS%20ALEJANDRO-1-46oUVo4fATpLrBSRyMbmvC6vHB1QDX.png",
        code: "B257-0000000765",
      },
      {
        title: "Basic Phase",
        institution: "Británico",
        date: "October 2018",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CERTIFICADO%20BAS%20VERA%20NU%C3%91EZ,NICOLAS%20ALEJANDRO-1-sqITitlnFYykxBjjvoEngEcIMT8Bfm.png",
        code: "B257-0000000766",
      },
    ],
  },
}

export default function Certifications() {
  const t = useTranslations()
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof certificationsData>("blockchain")
  const [selectedCert, setSelectedCert] = useState<number>(0)
  const [direction, setDirection] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setSelectedCert((prev) => (prev + 1) % certificationsData[selectedCategory].certificates.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [selectedCategory])

  const handlePrevious = () => {
    setDirection(-1)
    setSelectedCert((prev) => (prev === 0 ? certificationsData[selectedCategory].certificates.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setSelectedCert((prev) => (prev + 1) % certificationsData[selectedCategory].certificates.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="certifications" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.certifications?.title || "Certificaciones"}</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Certificaciones profesionales en tecnología, metodologías ágiles e idiomas
        </p>
      </motion.div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(certificationsData).map(([key, value]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedCategory(key as keyof typeof certificationsData)
                setSelectedCert(0)
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
                selectedCategory === key
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20"
              }`}
            >
              {value.icon}
              {value.title}
            </button>
          ))}
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={selectedCert}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full bg-gray-900 rounded-3xl overflow-hidden">
                  <Image
                    src={certificationsData[selectedCategory].certificates[selectedCert].image || "/placeholder.svg"}
                    alt={certificationsData[selectedCategory].certificates[selectedCert].title}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {certificationsData[selectedCategory].certificates[selectedCert].title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-300">
                          {certificationsData[selectedCategory].certificates[selectedCert].institution}
                        </p>
                        <p className="text-gray-400">
                          {certificationsData[selectedCategory].certificates[selectedCert].date}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        {certificationsData[selectedCategory].certificates[selectedCert].verifyUrl && (
                          <a
                            href={certificationsData[selectedCategory].certificates[selectedCert].verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                          >
                            Verificar <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <p className="text-gray-400">
                          Credential: {certificationsData[selectedCategory].certificates[selectedCert].credential}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

