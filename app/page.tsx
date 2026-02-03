"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  GitlabIcon as GitHub,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MouseFollower } from "@/components/mouse-follower";
import { ParticlesBackground } from "@/components/particles-background";
import { AnimatedGradientBackground } from "@/components/animated-gradient-background";
import { useTheme } from "next-themes";
import MobileNavigation from "@/components/MobileNavigation";
import handleDownload from "@/lib/download";
import { navItems } from "@/ constants/data";

import { AboutTabs } from "@/components/about-tabs";
import { ContactForm } from "@/components/contact-form";
import { AvailabilityCalendar } from "@/components/availability-calendar";
import Footer from "@/components/Footer";
import { TypingEffect } from "@/components/typing-effect";
import { GlobeDemo } from "@/components/GlobeDemo";
import Loading from "@/app/loading";
import { ContactInfo } from "@/components/contact-info";
import { BioSection } from "@/components/bio-section";
import { MernStackHighlight } from "@/components/mern-stack-highlight";
import { ToolSection } from "@/components/tool-section";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { HeroSection } from "@/components/hero-section";
import { MobileHeader } from "@/components/mobile-header";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  // Refs for scroll animations
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Handle scroll for progress bar and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);

      // Determine active section based on scroll position
      const sections = ["home", "projects", "skills", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Check if elements are in view for animations
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll("[data-animate]");

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView =
          rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;

        if (isInView) {
          element.classList.add("animate-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollAnimation);

    // Initial check for animations
    handleScrollAnimation();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  // Theme effect
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const loadData = async () => {
      // Simulate loading (replace with actual data fetching)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return <Loading fullScreen={true} />;
  }

  // Animation classes
  const fadeIn = "data-animate";
  const fadeInDelay = (delay: number) =>
    `data-animate style="animation-delay: ${delay}ms"`;

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
      <MouseFollower />
      <ParticlesBackground />
      <AnimatedGradientBackground />

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Navigation */}
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
      {/* <MobileNavigation activeSection={activeSection} /> */}

      <div>
        {/* Left Sidebar - Fixed on desktop */}
        <div className="hidden lg:block fixed h-screen w-[350px] xl:w-[400px] bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-md p-8 overflow-y-auto transition-colors duration-300 border-r border-gray-200 dark:border-gray-800">
          <div className="space-y-10 h-full flex flex-col">
            {/* Profile Header */}
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 xl:w-24 xl:h-24">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin-slow blur-md opacity-70"></div>
                <Image
                  src="/image.png?height=80&width=80"
                  alt="Profile"
                  width={80}
                  height={80}
                  className="rounded-full object-center object-cover w-full h-full border-2 border-blue-500 relative z-10"
                />
              </div>
              <div>
                <h1 className="text-2xl font-mono gradient-text font-bold">
                  Muhammad Sami
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="gradient-text glow-text">
                    <TypingEffect
                      texts={["Web Developer", "MERN Developer"]}
                      typingSpeed={80}
                      deletingSpeed={40}
                      delayBetweenTexts={2000}
                    />
                  </span>
                </p>
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="absolute top-8 right-8">
              <ThemeToggle />
            </div>

            {/* Navigation */}
            <nav className="flex-grow">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-500 font-medium shadow-sm"
                          : "hover:bg-gray-200 dark:hover:bg-gray-800"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          activeSection === item.id
                            ? "bg-blue-500 glow"
                            : "bg-gray-400 dark:bg-gray-600"
                        }`}
                      ></span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I'm a passionate MERN stack developer specializing in building
                scalable web applications with NextJs, TypeScript, React,
                Node.js Express, and MongoDB.
              </p>
              <Button
                variant="outline"
                className="rounded-full gradient-border overflow-hidden group"
                onClick={handleDownload}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Download Resume
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                <span>muhammadsami1242@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 group-hover:animate-bounce" />
                <span>+92 (307) 403-1207</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <MapPin className="w-4 h-4 group-hover:animate-bounce" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <div className="flex gap-4">
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
                  <Link href="https://www.linkedin.com/in/muhammad-sami1/">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-300"
                  asChild
                >
                  <Link href="https://github.com/MuhammadSami1">
                    <GitHub className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                <p>© 2023 Muhammad Sami All rights reserved.</p>
                <div className="flex gap-4">
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
          </div>
        </div>

        {/* Right Content - Scrollable */}
        <div className="lg:ml-[350px] xl:ml-[400px] relative z-10">
          {/* Mobile Header - Only visible on mobile */}
          <MobileHeader />
          <GlobeDemo />
          {/* Main Content */}
          <div className="p-6 lg:p-10">
            {/* Hero Section */}

            <section
              id="home"
              className="min-h-[90vh] flex flex-col justify-center relative "
              ref={(el) => {
                sectionsRef.current.home = el;
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-80 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
              <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>

              <HeroSection fadeIn={fadeIn} />
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="py-20 relative"
              ref={(el) => {
                sectionsRef.current.projects = el;
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="flex justify-between items-center mb-10">
                <h2
                  className={`text-3xl font-mono gradient-text font-bold ${fadeIn}`}
                >
                  Featured Projects
                </h2>
              </div>
              <Projects fadeInDelay={fadeInDelay} />
            </section>

            {/* Skills Section */}
            <section
              id="skills"
              className="py-20 relative"
              ref={(el) => {
                sectionsRef.current.skills = el;
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="flex justify-between items-center mb-10">
                <h2
                  className={`text-3xl font-mono gradient-text font-bold ${fadeIn}`}
                >
                  My Skills
                </h2>
              </div>
              <Skills fadeIn={fadeIn} fadeInDelay={fadeInDelay} />

              {/* Tools Section */}
              <ToolSection fadeInDelay={fadeInDelay} />
            </section>

            {/* About Section */}
            <section
              id="about"
              className="py-20 relative"
              ref={(el) => {
                sectionsRef.current.about = el;
              }}
            >
              {/* Decorative blob */}
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

              <h2
                className={`text-3xl font-mono mb-10 gradient-text font-bold ${fadeIn}`}
              >
                About Me
              </h2>

              {/* Bio Section */}
              <div className={`mb-16 ${fadeIn}`}>
                <BioSection handleDownload={handleDownload} />
              </div>

              {/* Experience, Education, Interests Tabs */}
              <div className={`mb-16 ${fadeInDelay(200)}`}>
                <AboutTabs />
              </div>

              {/* MERN Stack Highlight */}
              <MernStackHighlight fadeInDelay={fadeInDelay} />
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              className="py-20 relative"
              ref={(el) => {
                sectionsRef.current.contact = el;
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="flex justify-between items-center mb-10">
                <h2
                  className={`text-3xl font-mono gradient-text font-bold ${fadeIn}`}
                >
                  Get In Touch
                </h2>
              </div>

              {/* Contact intro */}
              <div className={`mb-12 max-w-3xl mx-auto text-center ${fadeIn}`}>
                <h3 className="text-xl font-semibold mb-4">
                  Let's Work Together
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I'm currently available for freelance work, full-time
                  positions, and consulting opportunities. If you have a project
                  that needs a skilled MERN stack developer, or if you're
                  looking to add a dedicated team member to your company, I'd
                  love to hear from you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() =>
                      (window.location.href =
                        "mailto:muhammadsami1242@gmail.com?subject=Subject&body=Message%20text")
                    }
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me Directly
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() =>
                      (window.location.href =
                        "https://calendar.google.com/calendar/u/0/r/eventedit?text=Meeting+with+[Name]&dates=[YYYYMMDD]T[HHMMSS]/[YYYYMMDD]T[HHMMSS]&details=[Details]&location=[Location]")
                    }
                    className="rounded-full border-blue-500/50 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Form */}
                <div className={`${fadeIn}`}>
                  <h3 className="text-xl font-semibold mb-6 gradient-text">
                    Project Inquiry
                  </h3>
                  <ContactForm />
                </div>

                {/* Availability Calendar */}
                <div className={`${fadeInDelay(200)}`}>
                  <h3 className="text-xl font-semibold mb-6 gradient-text">
                    My Availability
                  </h3>
                  <AvailabilityCalendar />

                  {/* Contact Info */}
                  <ContactInfo />
                </div>
              </div>
            </section>
            {/* Footer - Mobile only */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
