"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"

interface Card3DProps {
  children: ReactNode
  className?: string
  glareIntensity?: number
  rotationIntensity?: number
  borderRadius?: string
}

export function Card3D({
  children,
  className = "",
  glareIntensity = 0.2,
  rotationIntensity = 10,
  borderRadius = "1rem",
}: Card3DProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate mouse position relative to card center (in percentage)
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    // Set rotation based on mouse position
    setRotation({
      x: -y * rotationIntensity, // Negative because we want to rotate towards the mouse
      y: x * rotationIntensity,
    })

    // Set glare position
    setGlarePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-200 ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: isHovering
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`
          : "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
        borderRadius,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card content */}
      <div
        style={{
          transform: "translateZ(20px)",
          borderRadius,
        }}
      >
        {children}
      </div>

      {/* Glare effect */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius,
            background: `radial-gradient(
              circle at 
              ${50 + glarePosition.x * 100}% 
              ${50 + glarePosition.y * 100}%, 
              rgba(255, 255, 255, ${glareIntensity}), 
              transparent
            )`,
            transform: "translateZ(20px)",
          }}
        />
      )}
    </div>
  )
}

