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
  ArrowRight,
  ExternalLink,
  Database,
  Server,
  Code,
  Globe,
  Download,
  Clock,
  Calendar,
  Briefcase,
  GraduationCap,
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
import { Card3D } from "@/components/3d-card";
import { AnimatedText } from "@/components/animated-text";
import { AnimatedCounter } from "@/components/animated-counter";
import { AboutTabs } from "@/components/about-tabs";
import { ContactForm } from "@/components/contact-form";
import { AvailabilityCalendar } from "@/components/availability-calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import { TypingEffect } from "@/components/typing-effect";
import { stats, skillsData, projects } from "@/ constants/data";
import { GlobeDemo } from "@/components/GlobeDemo";
import Loading from "@/app/loading";

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
                <p className="text-gray-600 dark:text-gray-400">
                  MERN DEVELOPER
                </p>
              </div>
            </div>
          </div>
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

              <div className={`space-y-8 max-w-3xl relative z-10 ${fadeIn}`}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  I Build{" "}
                  <span className="gradient-text glow-text">
                    <TypingEffect
                      texts={[
                        "Web Applications",
                        "MERN Solutions",
                        "User Experiences",
                      ]}
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
                <Button
                  variant="ghost"
                  className={`flex items-center gap-2 hover:bg-blue-500/10 transition-all duration-300 ${fadeIn}`}
                >
                  View All Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <Tabs defaultValue="all" className="mb-10">
                <TabsList className="bg-white dark:bg-gray-800 p-1 rounded-full border border-gray-200 dark:border-gray-700">
                  <TabsTrigger value="all" className="rounded-full">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="full-stack" className="rounded-full">
                    Full Stack
                  </TabsTrigger>
                  <TabsTrigger value="frontend" className="rounded-full">
                    Frontend
                  </TabsTrigger>
                  <TabsTrigger value="backend" className="rounded-full">
                    Backend
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                      <Card3D
                        key={project.id}
                        className={`group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg ${fadeInDelay(
                          100 * index
                        )}`}
                      >
                        <div className="aspect-square relative">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <div>
                              <span className="text-sm text-blue-400">
                                {project.category}
                              </span>
                              <h3 className="text-xl font-semibold text-white">
                                {project.title}
                              </h3>
                              <p className="text-gray-300 text-sm mt-2">
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
                              >
                                <span className="flex items-center gap-1">
                                  View Project{" "}
                                  <ExternalLink className="w-3 h-3" />
                                </span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card3D>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="full-stack" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects
                      .filter((p) => p.category === "Full Stack")
                      .map((project, index) => (
                        <Card3D
                          key={project.id}
                          className={`group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg ${fadeInDelay(
                            100 * index
                          )}`}
                        >
                          <div className="aspect-square relative">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                              <div>
                                <span className="text-sm text-blue-400">
                                  {project.category}
                                </span>
                                <h3 className="text-xl font-semibold text-white">
                                  {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
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
                                >
                                  <span className="flex items-center gap-1">
                                    View Project{" "}
                                    <ExternalLink className="w-3 h-3" />
                                  </span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card3D>
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="frontend" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects
                      .filter((p) => p.category === "Frontend")
                      .map((project, index) => (
                        <Card3D
                          key={project.id}
                          className={`group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg ${fadeInDelay(
                            100 * index
                          )}`}
                        >
                          <div className="aspect-square relative">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                              <div>
                                <span className="text-sm text-blue-400">
                                  {project.category}
                                </span>
                                <h3 className="text-xl font-semibold text-white">
                                  {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
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
                                >
                                  <span className="flex items-center gap-1">
                                    View Project{" "}
                                    <ExternalLink className="w-3 h-3" />
                                  </span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card3D>
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="backend" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects
                      .filter((p) => p.category === "Backend")
                      .map((project, index) => (
                        <Card3D
                          key={project.id}
                          className={`group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg ${fadeInDelay(
                            100 * index
                          )}`}
                        >
                          <div className="aspect-square relative">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                              <div>
                                <span className="text-sm text-blue-400">
                                  {project.category}
                                </span>
                                <h3 className="text-xl font-semibold text-white">
                                  {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
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
                                >
                                  <span className="flex items-center gap-1">
                                    View Project{" "}
                                    <ExternalLink className="w-3 h-3" />
                                  </span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card3D>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className={`space-y-6 ${fadeIn}`}>
                  {skillsData.slice(0, 6).map((skill) => (
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
                            transition:
                              "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                          data-animate
                          onAnimationEnd={(e) => {
                            (
                              e.target as HTMLElement
                            ).style.width = `${skill.level}%`;
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`space-y-6 ${fadeInDelay(200)}`}>
                  {skillsData.slice(6).map((skill) => (
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
                            transition:
                              "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                          data-animate
                          onAnimationEnd={(e) => {
                            (
                              e.target as HTMLElement
                            ).style.width = `${skill.level}%`;
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Section */}
              <div className={`mt-16 ${fadeInDelay(400)}`}>
                <h3 className="text-xl font-semibold mb-6 gradient-text">
                  Tools & Technologies
                </h3>
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {[
                      "MongoDB",
                      "Express",
                      "React",
                      "Node.js",
                      "Redux",
                      "Next.js",
                      "TypeScript",
                      "GraphQL",
                      "REST API",
                      "JWT",
                      "Socket.io",
                      "Docker",
                    ].map((tool, i) => (
                      <Card3D
                        key={tool}
                        className={`flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 ${fadeInDelay(
                          50 * i
                        )}`}
                        glareIntensity={0.1}
                        rotationIntensity={5}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-3 flex items-center justify-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md"></div>
                        </div>
                        <span className="text-sm text-center font-medium">
                          {tool}
                        </span>
                      </Card3D>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {/* Testimonials Section */}

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
                <Card3D className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <div className="relative w-full aspect-square max-w-[300px] mx-auto">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 blur-md opacity-70"></div>
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Tony B."
                          width={300}
                          height={300}
                          className="rounded-xl relative z-10 object-cover"
                        />
                      </div>

                      <div className="mt-6 space-y-4">
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2">
                          <Download className="w-4 h-4" />
                          Download Resume
                        </Button>

                        <div className="flex justify-center gap-4">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-300"
                          >
                            <Twitter className="w-5 h-5" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-300"
                          >
                            <Linkedin className="w-5 h-5" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-300"
                          >
                            <GitHub className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold gradient-text mb-4">
                          Who I Am
                        </h3>
                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                          <p>
                            Hello! I'm Tony, a passionate MERN stack developer
                            with over 5 years of experience building web
                            applications that combine beautiful interfaces with
                            powerful functionality.
                          </p>
                          <p>
                            My journey in web development began with a
                            fascination for creating interactive experiences.
                            This led me to specialize in the MERN stack
                            (MongoDB, Express, React, and Node.js), where I've
                            found the perfect balance between frontend
                            creativity and backend robustness.
                          </p>
                          <p>
                            I approach each project with a focus on clean code,
                            performance optimization, and user-centered design.
                            Whether I'm building a complex e-commerce platform
                            or a simple landing page, I bring the same level of
                            dedication and attention to detail.
                          </p>
                          <p>
                            When I'm not coding, you'll find me contributing to
                            open-source projects, mentoring junior developers,
                            or exploring new technologies to stay at the cutting
                            edge of web development.
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
                            <p className="font-medium">
                              San Francisco, California
                            </p>
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
                            <p className="font-medium">5+ Years</p>
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
                            <p className="font-medium">
                              Master's in Computer Science
                            </p>
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
                </Card3D>
              </div>

              {/* Stats */}
              <div
                className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 ${fadeIn}`}
              >
                {stats.map((stat, index) => (
                  <Card3D
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                    glareIntensity={0.1}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                        <stat.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="text-3xl font-bold gradient-text">
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.label === "Uptime Percentage" ? "%" : ""}
                        />
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </Card3D>
                ))}
              </div>

              {/* Experience, Education, Interests Tabs */}
              <div className={`mb-16 ${fadeInDelay(200)}`}>
                <AboutTabs />
              </div>

              {/* MERN Stack Highlight */}
              <div
                className={`mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 ${fadeInDelay(
                  400
                )}`}
              >
                {[
                  {
                    title: "MongoDB",
                    icon: Database,
                    color: "green",
                    description:
                      "NoSQL database for flexible, scalable data storage with powerful querying capabilities.",
                  },
                  {
                    title: "Express.js",
                    icon: Server,
                    color: "red",
                    description:
                      "Fast, unopinionated web framework for Node.js that simplifies API development.",
                  },
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
                ].map((item, index) => (
                  <Card3D
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </Card3D>
                ))}
              </div>
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
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:animate-bounce">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Email
                        </p>
                        <p className="group-hover:text-blue-500 transition-colors">
                          muhammadsami1242@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:animate-bounce">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Phone
                        </p>
                        <p className="group-hover:text-blue-500 transition-colors">
                          +92 (307) 403-1207
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:animate-bounce">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Location
                        </p>
                        <p className="group-hover:text-blue-500 transition-colors">
                          Lahore, Pakistan
                        </p>
                      </div>
                    </div>
                  </div>
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

//<section
//  id="testimonials"
//  className="py-20 relative"
//  ref={(el) => {
//    sectionsRef.current.testimonials = el;
//  }}
//>
//  {/* Decorative elements */}
//  <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
//
// <div className="flex justify-between items-center mb-10">
//    <h2 className={`text-3xl font-mono gradient-text font-bold ${fadeIn}`}>
//      Client Testimonials
//    </h2>
//  </div>
//  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//    {testimonials.map((testimonial, index) => (
//      <Card3D
//        key={testimonial.id}
//        className={`bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200           dark:border-gray-700 shadow-lg ${fadeInDelay(
//          100 * index
//        )}`}
//        glareIntensity={0.1}
//      >
//        <div className="flex items-center gap-2 mb-2">
//          {[...Array(5)].map((_, i) => (
//            <svg
//              key={i}
//              className="w-5 h-5 text-yellow-400 fill-current"
//              viewBox="0 0 20 20"
//            >
//              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//            </svg>
//          ))}
//        </div>
//        <p className="text-gray-700 dark:text-gray-300 italic mb-6 relative">
//          <span className="absolute -top-4 -left-2 text-5xl text-blue-500/20">
//            "
//          </span>
//          {testimonial.quote}
//          <span className="absolute -bottom-4 -right-2 text-5xl text-blue-500/20">
//            "
//          </span>
//        </p>
//        <div className="flex items-center gap-3">
//          <div className="relative">
//            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-sm opacity-70"></div>
//            <Image
//              src={testimonial.image || "/placeholder.svg"}
//              alt={testimonial.name}
//              width={50}
//              height={50}
//             className="rounded-full relative z-10 border-2 border-white dark:border-gray-800"
//            />
//          </div>
//          <div>
//            <h4 className="font-semibold gradient-text">{testimonial.name}</h4>
//            <p className="text-sm text-gray-600 dark:text-gray-400">
//              {testimonial.role}, {testimonial.company}
//            </p>
//          </div>
//        </div>
//      </Card3D>
//    ))}
//  </div>
//</section>;
