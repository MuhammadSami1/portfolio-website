interface ToolSectionProps {
  fadeInDelay: (delay: number) => string;
}

export function ToolSection({ fadeInDelay }: ToolSectionProps) {
  return (
    <div className={`mt-16 ${fadeInDelay(400)}`}>
      <h3 className="text-xl font-semibold mb-6 gradient-text">
        Tools & Technologies
      </h3>
      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            "Next.js",
            "TypeScript",
            "React",
            "Redux",
            "Node.js",
            "MongoDB",
          ].map((tool, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 ${fadeInDelay(
                50 * i,
              )}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-3 flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md"></div>
              </div>
              <span className="text-sm text-center font-medium">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
