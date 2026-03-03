import AboutMe from "@/components/about-me"
import Certifications from "@/components/certifications"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <AboutMe />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

