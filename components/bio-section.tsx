import Image from "next/image";
import { Button } from "./ui/button";
import {
  Briefcase,
  Clock,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

interface BioSectionProps {
  handleDownload: () => void;
}

export function BioSection({ handleDownload }: BioSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="relative w-full aspect-square max-w-[300px] mx-auto">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 blur-md opacity-70"></div>
            <Image
              src="/image1.png?height=300&width=300"
              alt="Muhammad Sami"
              width={300}
              height={300}
              className="rounded-xl w-full h-full relative z-10 object-cover"
            />
          </div>

          <div className="mt-6 space-y-4">
            <Button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2"
              onClick={handleDownload}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>

            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-300"
              >
                <Link href="#">
                  <Twitter className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-300"
              >
                <Link href="https://www.linkedin.com/in/muhammad-sami1/">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-300"
              >
                <Link href="https://github.com/MuhammadSami1">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Who I Am</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Hello! I'm Muhammad Sami, a passionate MERN stack developer with
                over +1 year of experience building web applications that
                combine beautiful interfaces with powerful functionality.
              </p>
              <p>
                My journey in web development began with a fascination for
                creating interactive experiences. This led me to specialize in
                the MERN stack (MongoDB, Express, React, and Node.js).
              </p>
              <p>
                I approach each project with a focus on clean code, performance
                optimization, and user-centered design. I bring the same level
                of dedication and attention to detail.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 dark:text-gray-400">
                  Location
                </h4>
                <p className="font-medium">Lahore, Pakistan</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 dark:text-gray-400">
                  Experience
                </h4>
                <p className="font-medium">1+ Years</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 dark:text-gray-400">
                  Education
                </h4>
                <p className="font-medium">Bachelor's in Computer Science</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <Clock className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 dark:text-gray-400">
                  Availability
                </h4>
                <p className="font-medium">Full-time / Freelance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
