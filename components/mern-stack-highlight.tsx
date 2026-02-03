import { Database, Server, Code, Globe } from "lucide-react";

interface MernStackHighlightProps {
  fadeInDelay: (delay: number) => string;
}

export function MernStackHighlight({ fadeInDelay }: MernStackHighlightProps) {
  return (
    <div
      className={`mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 ${fadeInDelay(
        400,
      )}`}
    >
      {[
        {
          title: "React.js",
          icon: Code,
          color: "blue",
          description:
            "Component-based UI library for building interactive and reusable user interfaces.",
        },
        {
          title: "Node.js",
          icon: Globe,
          color: "green",
          description:
            "JavaScript runtime for building fast and scalable server-side applications.",
        },
        {
          title: "Express.js",
          icon: Server,
          color: "red",
          description:
            "Fast, unopinionated web framework for Node.js that simplifies API development.",
        },

        {
          title: "MongoDB",
          icon: Database,
          color: "green",
          description:
            "NoSQL database for flexible, scalable data storage with powerful querying capabilities.",
        },
      ].map((item, index) => (
        <div
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          key={index}
        >
          <div
            className={`w-12 h-12 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-lg mb-4 flex items-center justify-center`}
          >
            <item.icon
              className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-400`}
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 gradient-text">
            {item.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
