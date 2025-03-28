"use client"

import { useState, useEffect, useRef } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
  decimals?: number
}

export function AnimatedCounter({
  end,
  duration = 2000,
  className = "",
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!countRef.current || hasAnimated.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hasAnimated.current = true

            let startTimestamp: number | null = null
            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp
              const progress = Math.min((timestamp - startTimestamp) / duration, 1)
              const currentCount = progress * end

              setCount(currentCount)

              if (progress < 1) {
                window.requestAnimationFrame(step)
              }
            }

            window.requestAnimationFrame(step)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(countRef.current)

    return () => {
      observer.disconnect()
    }
  }, [end, duration])

  return (
    <span ref={countRef} className={className}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

