"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
  className?: string
}

export function TypingEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = "",
}: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // If paused, don't do anything
        if (isPaused) return

        // Get the current full text
        const fullText = texts[currentTextIndex]

        // If deleting
        if (isDeleting) {
          // Remove the last character
          setCurrentText((prev) => prev.slice(0, -1))

          // If all characters are deleted
          if (currentText.length === 0) {
            setIsDeleting(false)
            // Move to the next text
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
        // If typing
        else {
          // Add the next character
          setCurrentText(fullText.slice(0, currentText.length + 1))

          // If all characters are typed
          if (currentText.length === fullText.length) {
            // Pause before deleting
            setIsPaused(true)
            setTimeout(() => {
              setIsPaused(false)
              setIsDeleting(true)
            }, delayBetweenTexts)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}

