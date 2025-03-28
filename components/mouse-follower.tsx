"use client"

import { useState, useEffect } from "react"

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    // Show the cursor follower after a short delay to prevent initial animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateHoverState = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y)
      const isHoverable =
        hoveredElement?.tagName === "BUTTON" ||
        hoveredElement?.tagName === "A" ||
        hoveredElement?.closest("button") ||
        hoveredElement?.closest("a") ||
        window.getComputedStyle(hoveredElement || document.body).cursor === "pointer"

      setIsHovering(isHoverable)
      setIsPointer(window.getComputedStyle(document.body).cursor === "pointer")
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", updateHoverState)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", updateHoverState)
    }
  }, [position.x, position.y])

  if (!isVisible) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          width: isHovering ? "60px" : "12px",
          height: isHovering ? "60px" : "12px",
          backgroundColor: "#fff",
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
          opacity: isPointer ? 0 : 1,
        }}
      />
      <div
        className="fixed pointer-events-none z-50 rounded-full bg-white/20 backdrop-blur-sm"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          width: "40px",
          height: "40px",
          transition: "transform 0.1s ease, opacity 0.3s ease",
          opacity: isPointer ? 0 : 0.5,
        }}
      />
    </>
  )
}

