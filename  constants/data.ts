import {
  GitlabIcon as GitHub,
  CheckCircle,
  Award,
  Zap,
  Users,
} from "lucide-react";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  // { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

// Stats for the about section
export const stats = [
  { value: 50, label: "Projects Completed", icon: CheckCircle },
  { value: 15, label: "Happy Clients", icon: Users },
  { value: 5, label: "Years Experience", icon: Award },
  { value: 99, label: "Uptime Percentage", icon: Zap },
];

export const skillsData = [
  { name: "MongoDB", level: 95, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Node.js", level: 92, category: "Backend" },
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "Redux", level: 80, category: "Frontend" },
  { name: "GraphQL", level: 75, category: "Backend" },
  { name: "REST API", level: 90, category: "Backend" },
  { name: "AWS", level: 70, category: "DevOps" },
  { name: "Docker", level: 75, category: "DevOps" },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Full Stack",
    description:
      "Complete MERN stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
    image: "/placeholder.svg?height=600&width=600",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redux", "Stripe API"],
  },
  {
    id: 2,
    title: "Real-time Chat Application",
    category: "Full Stack",
    description:
      "Scalable chat platform with real-time messaging, user authentication, and message persistence using Socket.io and MongoDB.",
    image: "/placeholder.svg?height=600&width=600",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "JWT"],
  },
  {
    id: 3,
    title: "Task Management System",
    category: "Full Stack",
    description:
      "Collaborative project management tool with drag-and-drop interfaces, team collaboration features, and automated notifications.",
    image: "/placeholder.svg?height=600&width=600",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redux", "WebSockets"],
  },
  {
    id: 4,
    title: "Healthcare Portal",
    category: "Full Stack",
    description:
      "Patient-centered healthcare portal with appointment scheduling, medical record management, and secure doctor-patient communication.",
    image: "/placeholder.svg?height=600&width=600",
    tech: ["MongoDB", "Express", "React", "Node.js", "GraphQL", "Auth0"],
  },
  {
    id: 5,
    title: "Content Management System",
    category: "Backend",
    description:
      "Headless CMS with custom API endpoints, content modeling, and multi-user collaboration features for content creators.",
    image: "/placeholder.svg?height=600&width=600",
    tech: ["MongoDB", "Express", "Node.js", "GraphQL", "Redis", "AWS S3"],
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    category: "Frontend",
    description:
      "Interactive data visualization dashboard with real-time updates, customizable widgets, and data export capabilities.",
    image: "/placeholder.svg?height=600&width=600",
    tech: ["React", "Redux", "D3.js", "WebSockets", "Material UI", "Chart.js"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp",
    quote:
      "Tony delivered an exceptional MERN stack application that exceeded our expectations. His deep understanding of both frontend and backend technologies resulted in a seamless, high-performance solution.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateLabs",
    quote:
      "Working with Tony was a game-changer for our startup. His full-stack expertise helped us launch our MVP in record time, with clean code and excellent architecture decisions.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "GlobalSoft",
    quote:
      "Tony's ability to translate complex business requirements into elegant technical solutions is remarkable. His MERN stack implementation has been robust, scalable, and easy to maintain.",
    image: "/placeholder.svg?height=100&width=100",
  },
];
