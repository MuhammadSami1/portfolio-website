import Image from "next/image";

export function MobileHeader() {
  return (
    <div className="lg:hidden bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-md p-6 transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin-slow blur-md opacity-70"></div>
          <Image
            src="/image.png?height=60&width=60"
            alt="Profile"
            width={60}
            height={60}
            className="rounded-full object-center object-cover w-full h-full relative z-10"
          />
        </div>
        <div>
          <h1 className="text-2xl font-mono gradient-text font-bold">
            Muhammad Sami
          </h1>
          <p className="text-gray-600 dark:text-gray-400">MERN DEVELOPER</p>
        </div>
      </div>
    </div>
  );
}
