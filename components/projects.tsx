import { projects } from "@/ constants/data";
import Image from "next/image";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { Tabs } from "./ui/tabs";

interface ProjectsProps {
  fadeInDelay: (delay: number) => string;
}

export function Projects({ fadeInDelay }: ProjectsProps) {
  return (
    <Tabs defaultValue="all" className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg ${fadeInDelay(
              100 * index,
            )}`}
          >
            <div className="aspect-square relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="w-full h-full object-center transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm mt-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 p-0 h-auto text-white"
                    onClick={() => (window.location.href = project.link)}
                  >
                    <span className="flex items-center gap-1">
                      View Project <ExternalLink className="w-3 h-3" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Tabs>
  );
}
