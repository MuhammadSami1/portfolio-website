import { TypingEffect } from "@/components/typing-effect";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";

interface HeroSectionProps {
  fadeIn: string;
}

export function HeroSection({ fadeIn }: HeroSectionProps) {
  return (
    <div className={`space-y-8 max-w-3xl relative z-10 ${fadeIn}`}>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
        I Build{" "}
        <span className="gradient-text glow-text">
          <TypingEffect
            texts={["Web Applications", "MERN Solutions", "User Experiences"]}
            typingSpeed={80}
            deletingSpeed={40}
            delayBetweenTexts={2000}
          />
        </span>
      </h1>
      <div className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
        <AnimatedText
          text="Full-stack MERN developer specializing in building robust, scalable, and user-friendly web applications that solve real-world problems."
          className="leading-relaxed"
        />
      </div>
      <div className="flex flex-wrap gap-4 pt-4">
        <Button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
          <Link href="#projects" className="flex items-center">
            View My Work
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
        <Button
          variant="outline"
          className="rounded-full border-blue-500/50 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
        >
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
    </div>
  );
}
