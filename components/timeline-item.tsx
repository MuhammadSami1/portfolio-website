"use client"

import type { ReactNode } from "react"
import { Card3D } from "@/components/3d-card"

interface TimelineItemProps {
  year: string
  title: string
  description: string
  icon?: ReactNode
  isLast?: boolean
}

export function TimelineItem({ year, title, description, icon, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[22px] top-10 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-purple-600/30"></div>
      )}

      {/* Timeline dot */}
      <div className="relative z-10 mt-1.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md">
        {icon}
      </div>

      {/* Content */}
      <div className="pb-8">
        <Card3D
          className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md"
          glareIntensity={0.1}
          rotationIntensity={5}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300">
              {year}
            </span>
            <h3 className="text-lg font-semibold gradient-text">{title}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </Card3D>
      </div>
    </div>
  )
}

