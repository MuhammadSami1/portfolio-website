"use client";
import { useState } from "react";
import { ThemeToggle } from "./ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type TMobileNavigationProps = {
  activeSection: string;
};

const MobileNavigation = ({ activeSection }: TMobileNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <>
      <div className="lg:hidden fixed top-0 right-0 z-40 p-4 flex items-center gap-2">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-sm"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 dark:bg-black/95 z-30 flex items-center justify-center lg:hidden">
          <nav className="text-center">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`text-2xl font-mono ${
                      activeSection === item.id
                        ? "text-blue-500 neon-text"
                        : "text-gray-900 dark:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
