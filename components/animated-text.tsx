"use client"

import { useEffect, useRef } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export function AnimatedText({ text, className = "", once = true }: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!containerRef.current || (once && hasAnimated.current)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hasAnimated.current = true

            const spans = containerRef.current?.querySelectorAll("span")
            if (!spans) return

            spans.forEach((span, index) => {
              span.style.animationDelay = `${index * 0.03}s`
              span.classList.add("animate-in")
            })

            if (once) observer.disconnect()
          } else if (!once) {
            const spans = containerRef.current?.querySelectorAll("span")
            if (!spans) return

            spans.forEach((span) => {
              span.classList.remove("animate-in")
            })
          }
        })
      },
      { threshold: 0.5 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [once, text])

  return (
    <div ref={containerRef} className={`inline-block ${className}`} aria-label={text}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 translate-y-4 transition-all duration-300 ease-out"
          style={{ animationFillMode: "forwards" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}

