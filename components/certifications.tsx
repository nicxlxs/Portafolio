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
  databases: {
    icon: <Code className="w-6 h-6" />,
    title: "Databases",
    description: "Especialización en diseño e implementación de bases de datos relacionales",
    certificates: [
      {
        title: "Databases for Data Scientists",
        institution: "University of Colorado Boulder",
        date: "February 2026",
        credential: "RMKO0LCLMUGT",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_sql/Coursera%20RMKO0LCLMUGT.png",
        verifyUrl: "https://coursera.org/verify/specialization/RMKO0LCLMUGT",
      },
      {
        title: "The Structured Query Language (SQL)",
        institution: "University of Colorado Boulder",
        date: "January 2026",
        credential: "VTVNU2J64MK8",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_sql/Coursera%20VTVNU2J64MK8.png",
        verifyUrl: "https://coursera.org/verify/VTVNU2J64MK8",
      },
      {
        title: "Advanced Topics and Future Trends in Database Technologies",
        institution: "University of Colorado Boulder",
        date: "February 2026",
        credential: "N0D1CG8IFIWJ",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_sql/Coursera%20N0D1CG8IFIWJ.png",
        verifyUrl: "https://coursera.org/verify/N0D1CG8IFIWJ",
      },
      {
        title: "Relational Database Design",
        institution: "University of Colorado Boulder",
        date: "January 2026",
        credential: "OGA4S2HPKH51",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_sql/Coursera%20OGA4S2HPKH51.png",
        verifyUrl: "https://coursera.org/verify/OGA4S2HPKH51",
      },
    ],
  },
  excel: {
    icon: <Code className="w-6 h-6" />,
    title: "Excel",
    description: "Certificaciones en Microsoft Excel y análisis de datos",
    certificates: [
      {
        title: "Microsoft Excel Skills for Data Analytics and Visualization",
        institution: "Coursera",
        date: "2026",
        credential: "65I94ADV4LMI",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_excel/Coursera%2065I94ADV4LMI.jpg",
        verifyUrl: "https://coursera.org/verify/65I94ADV4LMI",
      },
      {
        title: "Data Processing with Excel",
        institution: "Coursera",
        date: "2026",
        credential: "ICER9JF4GY83",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_excel/Coursera%20ICER9JF4GY83.jpg",
        verifyUrl: "https://coursera.org/verify/ICER9JF4GY83",
      },
    ],
  },
  python: {
    icon: <Code className="w-6 h-6" />,
    title: "Python",
    description: "Certificaciones en Python y desarrollo de aplicaciones",
    certificates: [
      {
        title: "Python for Everybody",
        institution: "Coursera",
        date: "2026",
        credential: "5TZ10Q22UC8Q",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_python/Coursera%205TZ10Q22UC8Q.jpg",
        verifyUrl: "https://coursera.org/verify/5TZ10Q22UC8Q",
      },
      {
        title: "Python Data Structures",
        institution: "Coursera",
        date: "2026",
        credential: "GUB85UFKD8EK",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_python/Coursera%20GUB85UFKD8EK.jpg",
        verifyUrl: "https://coursera.org/verify/GUB85UFKD8EK",
      },
      {
        title: "Using Python to Access Web Data",
        institution: "Coursera",
        date: "2026",
        credential: "O19MFW7MUIFY",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_python/Coursera%20O19MFW7MUIFY.jpg",
        verifyUrl: "https://coursera.org/verify/O19MFW7MUIFY",
      },
      {
        title: "Using Databases with Python",
        institution: "Coursera",
        date: "2026",
        credential: "W3LXBNP92GE9",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_python/Coursera%20W3LXBNP92GE9.jpg",
        verifyUrl: "https://coursera.org/verify/W3LXBNP92GE9",
      },
      {
        title: "Capstone Project - Building a Data Dashboard",
        institution: "Coursera",
        date: "2026",
        credential: "X1YRDUPDMEVM",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_python/Coursera%20X1YRDUPDMEVM.jpg",
        verifyUrl: "https://coursera.org/verify/X1YRDUPDMEVM",
      },
      {
        title: "Python Programming Specialization",
        institution: "Coursera",
        date: "2026",
        credential: "X8JWMPLMNAWA",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_python/Coursera%20X8JWMPLMNAWA.jpg",
        verifyUrl: "https://coursera.org/verify/X8JWMPLMNAWA",
      },
    ],
  },
  google_cloud: {
    icon: <Code className="w-6 h-6" />,
    title: "Google Cloud",
    description: "Certificaciones en Google Cloud Platform y soluciones en la nube",
    certificates: [
      {
        title: "Google Cloud Architecture Essentials",
        institution: "Coursera",
        date: "2026",
        credential: "2K7STSPW9NG9",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_google_cloud/Coursera%202K7STSPW9NG9.jpg",
        verifyUrl: "https://coursera.org/verify/2K7STSPW9NG9",
      },
      {
        title: "Preparing for Google Cloud Associate Cloud Engineer Exam",
        institution: "Coursera",
        date: "2026",
        credential: "8EFR72W76FY7",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_google_cloud/Coursera%208EFR72W76FY7.jpg",
        verifyUrl: "https://coursera.org/verify/8EFR72W76FY7",
      },
      {
        title: "Google Cloud Data Engineer Professional",
        institution: "Coursera",
        date: "2026",
        credential: "8UCMQB3GRK88",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_google_cloud/Coursera%208UCMQB3GRK88.jpg",
        verifyUrl: "https://coursera.org/verify/8UCMQB3GRK88",
      },
      {
        title: "Google Cloud Infrastructure Core Services",
        institution: "Coursera",
        date: "2026",
        credential: "HU2CYAJLQ3ZJ",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_google_cloud/Coursera%20HU2CYAJLQ3ZJ.jpg",
        verifyUrl: "https://coursera.org/verify/HU2CYAJLQ3ZJ",
      },
      {
        title: "Google Cloud Security and Compliance",
        institution: "Coursera",
        date: "2026",
        credential: "L18DNTNPWUR0",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_google_cloud/Coursera%20L18DNTNPWUR0.jpg",
        verifyUrl: "https://coursera.org/verify/L18DNTNPWUR0",
      },
      {
        title: "Google Cloud Professional Data Engineer",
        institution: "Coursera",
        date: "2026",
        credential: "Q9OZSETLWIX0",
        image:
          "https://z6toxlgp9dnnpx80.public.blob.vercel-storage.com/certifications/coursera_google_cloud/Coursera%20Q9OZSETLWIX0.jpg",
        verifyUrl: "https://coursera.org/verify/Q9OZSETLWIX0",
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t.certifications?.title || "Certificaciones"}</h2>
        <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
          {t.certifications?.subtitle || "Certificaciones profesionales en tecnología, metodologías ágiles e idiomas"}
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
                            {t.certifications?.verify || "Verificar"} <ExternalLink className="w-4 h-4" />
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
              aria-label={t.certifications?.previousCert || "Previous certificate"}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
              aria-label={t.certifications?.nextCert || "Next certificate"}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

