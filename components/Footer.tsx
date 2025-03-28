import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Twitter, Linkedin, GitlabIcon as GitHub } from "lucide-react";
const Footer = () => {
  return (
    <footer className="py-10 lg:hidden">
      <div className="space-y-6">
        <div className="flex justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-300"
            asChild
          >
            <Link href="#">
              <Twitter className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-300"
            asChild
          >
            <Link href="#">
              <Linkedin className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-300"
            asChild
          >
            <Link href="#">
              <GitHub className="w-5 h-5" />
            </Link>
          </Button>
        </div>
        <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© 2025 Muhammad Sami. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link
              href="#"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
