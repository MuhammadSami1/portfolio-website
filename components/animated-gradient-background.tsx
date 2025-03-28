"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    let time = 0

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.003

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradient = ctx.createLinearGradient(
        canvas.width * (0.5 + 0.5 * Math.sin(time)),
        0,
        canvas.width * (0.5 + 0.5 * Math.cos(time)),
        canvas.height,
      )

      if (theme === "dark") {
        gradient.addColorStop(0, "rgba(30, 58, 138, 0.05)")
        gradient.addColorStop(0.5, "rgba(79, 70, 229, 0.05)")
        gradient.addColorStop(1, "rgba(91, 33, 182, 0.05)")
      } else {
        gradient.addColorStop(0, "rgba(219, 234, 254, 0.3)")
        gradient.addColorStop(0.5, "rgba(199, 210, 254, 0.3)")
        gradient.addColorStop(1, "rgba(224, 231, 255, 0.3)")
      }

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw some circles
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * (0.2 + 0.6 * Math.sin(time * 0.7 + i))
        const y = canvas.height * (0.2 + 0.6 * Math.cos(time * 0.5 + i))
        const radius = 100 + 50 * Math.sin(time * 0.3 + i * 2)

        const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)

        if (theme === "dark") {
          circleGradient.addColorStop(0, "rgba(59, 130, 246, 0.05)")
          circleGradient.addColorStop(1, "rgba(59, 130, 246, 0)")
        } else {
          circleGradient.addColorStop(0, "rgba(59, 130, 246, 0.1)")
          circleGradient.addColorStop(1, "rgba(59, 130, 246, 0)")
        }

        ctx.fillStyle = circleGradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}

