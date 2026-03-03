"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particles: Particle[] = []
    const particleCount = 100
    const connectionDistance = 100
    let mouseX = 0
    let mouseY = 0

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      originalX: number
      originalY: number

      constructor() {
        this.size = Math.random() * 2 + 1 // Slightly larger particles
        this.speedX = Math.random() * 0.2 - 0.1 // Slower movement
        this.speedY = Math.random() * 0.2 - 0.1
        this.x = Math.random() * (canvas.width - this.size * 2) + this.size
        this.y = Math.random() * (canvas.height - this.size * 2) + this.size
        this.originalX = this.x
        this.originalY = this.y
      }

      update() {
        // Add mouse interaction
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const force = (100 - distance) / 100
          this.x -= dx * force * 0.03
          this.y -= dy * force * 0.03
        }

        // Return to original position
        const dxOrigin = this.originalX - this.x
        const dyOrigin = this.originalY - this.y
        this.x += dxOrigin * 0.05
        this.y += dyOrigin * 0.05

        // Normal movement
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width) this.speedX = -Math.abs(this.speedX)
        if (this.x < 0) this.speedX = Math.abs(this.speedX)
        if (this.y > canvas.height) this.speedY = -Math.abs(this.speedY)
        if (this.y < 0) this.speedY = Math.abs(this.speedY)
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function drawConnections(particles: Particle[], ctx: CanvasRenderingContext2D) {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15
            ctx.strokeStyle = theme === "dark" ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawConnections(particles, ctx)
      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    // Set canvas size
    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Reset particles with new positions after resize
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />
}

