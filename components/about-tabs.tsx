"use client"

import { useState } from "react"
import { Card3D } from "@/components/3d-card"
import { Briefcase, GraduationCap, Heart, Coffee, Code, Lightbulb } from "lucide-react"
import { TimelineItem } from "@/components/timeline-item"

export function AboutTabs() {
  const [activeTab, setActiveTab] = useState("experience")

  const tabs = [
    { id: "experience", label: "Experience", icon: <Briefcase className="w-5 h-5" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="w-5 h-5" /> },
    { id: "interests", label: "Interests", icon: <Heart className="w-5 h-5" /> },
  ]

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-6">
        {activeTab === "experience" && (
          <div className="space-y-2">
            <TimelineItem
              year="2021 - Present"
              title="Senior MERN Stack Developer at TechInnovate"
              description="Leading a team of developers to build scalable web applications using MongoDB, Express, React, and Node.js. Implemented CI/CD pipelines and improved application performance by 40%."
              icon={<Briefcase className="w-5 h-5" />}
            />
            <TimelineItem
              year="2019 - 2021"
              title="Full Stack Developer at WebSolutions Inc."
              description="Developed and maintained multiple client projects using the MERN stack. Collaborated with UX designers to implement responsive and accessible user interfaces."
              icon={<Briefcase className="w-5 h-5" />}
            />
            <TimelineItem
              year="2018 - 2019"
              title="Frontend Developer at CreativeDigital"
              description="Specialized in building interactive user interfaces with React. Worked on performance optimization and implemented state management solutions using Redux."
              icon={<Briefcase className="w-5 h-5" />}
              isLast={true}
            />
          </div>
        )}

        {activeTab === "education" && (
          <div className="space-y-2">
            <TimelineItem
              year="2016 - 2018"
              title="Master's in Computer Science"
              description="University of Technology, specializing in Web Technologies and Distributed Systems. Graduated with honors and completed a thesis on scalable microservices architecture."
              icon={<GraduationCap className="w-5 h-5" />}
            />
            <TimelineItem
              year="2012 - 2016"
              title="Bachelor's in Software Engineering"
              description="State University, with a focus on software development methodologies and programming paradigms. Participated in multiple hackathons and coding competitions."
              icon={<GraduationCap className="w-5 h-5" />}
            />
            <TimelineItem
              year="2010 - 2012"
              title="Associate's Degree in Web Development"
              description="Community College, where I built a foundation in HTML, CSS, JavaScript, and basic backend technologies. Completed several internships during this period."
              icon={<GraduationCap className="w-5 h-5" />}
              isLast={true}
            />
          </div>
        )}

        {activeTab === "interests" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card3D className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Open Source Contribution</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    I actively contribute to open-source projects, particularly in the JavaScript ecosystem. I believe
                    in giving back to the community that has taught me so much.
                  </p>
                </div>
              </div>
            </Card3D>

            <Card3D className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Tech Mentoring</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    I enjoy mentoring junior developers and helping them navigate their career paths. Teaching is one of
                    the best ways to solidify your own knowledge.
                  </p>
                </div>
              </div>
            </Card3D>

            <Card3D className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Coffee & Coding</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    I'm a coffee enthusiast and enjoy exploring new cafes while working on side projects. There's
                    something magical about the combination of caffeine and code.
                  </p>
                </div>
              </div>
            </Card3D>

            <Card3D className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Fitness & Wellbeing</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    I believe in maintaining a healthy work-life balance. Regular exercise, meditation, and outdoor
                    activities help me stay productive and creative.
                  </p>
                </div>
              </div>
            </Card3D>
          </div>
        )}
      </div>
    </div>
  )
}

