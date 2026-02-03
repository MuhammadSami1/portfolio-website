import { skillsData } from "@/ constants/data";

interface SkillsProps {
  fadeIn: string;
  fadeInDelay: (delay: number) => string;
}

export function Skills({ fadeIn, fadeInDelay }: SkillsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className={`space-y-6 ${fadeIn}`}>
        {skillsData.slice(0, 4).map((skill) => (
          <div key={skill.name} className="space-y-2 group">
            <div className="flex justify-between">
              <span className="group-hover:text-blue-500 transition-colors">
                {skill.name}
              </span>
              <span className="group-hover:text-blue-500 transition-colors">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 group-hover:shadow-md group-hover:shadow-blue-500/20"
                style={{
                  width: `0%`,
                  transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                data-animate
                onAnimationEnd={(e) => {
                  (e.target as HTMLElement).style.width = `${skill.level}%`;
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className={`space-y-6 ${fadeInDelay(200)}`}>
        {skillsData.slice(4).map((skill) => (
          <div key={skill.name} className="space-y-2 group">
            <div className="flex justify-between">
              <span className="group-hover:text-blue-500 transition-colors">
                {skill.name}
              </span>
              <span className="group-hover:text-blue-500 transition-colors">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 group-hover:shadow-md group-hover:shadow-blue-500/20"
                style={{
                  width: `0%`,
                  transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                data-animate
                onAnimationEnd={(e) => {
                  (e.target as HTMLElement).style.width = `${skill.level}%`;
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
