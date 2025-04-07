import { TProjects } from "@/types/types";
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
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Redux", level: 80, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express.js", level: 83, category: "Backend" },
  { name: "MongoDB", level: 81, category: "Backend" },
];

export const projects: TProjects[] = [
  {
    id: 1,
    title: "Kanban Board",
    category: "Full Stack",
    description:
      "Built an interactive Kanban board with drag-and-drop, task management, and subtask tracking features.",
    image: "/projects/kanban-board.png?height=600&width=600",
    tech: [
      "Next.js",
      "TypeScript",
      "React-Hook-Form",
      "Framer-Motion",
      "Tailwind-CSS",
      "Zustand",
      "DND-Kit",
    ],
    link: "https://kanban-board-ten-kappa.vercel.app/",
  },
  {
    id: 2,
    title: "Comments Section",
    category: "Frontend",
    description:
      "Developed a fully functional comment section with features like add, edit, delete, and nested replies.",
    image: "/projects/interactive-comments-section.png?height=600&width=600",
    tech: [
      "Next.js",
      "TypeScript",
      "Husky",
      "Prettier",
      "Tailwind-CSS",
      "ESLint",
      "Jotai",
    ],
    link: "https://interactive-comments-section-puce.vercel.app/",
  },

  {
    id: 3,
    title: "Logical Labs",
    category: "Full Stack",
    description:
      "Developed a job search platform using Next.js, TypeScript, and Tailwind CSS, providing a responsive UI.",
    image: "/projects/logical-labs.png?height=600&width=600",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk"],
    link: "https://logical-labs.vercel.app/",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    category: "Frontend",
    description:
      "Led the development of a sophisticated e-commerce platform using React, Tailwind CSS, Redux, and MockAPI.",
    image: "/projects/inwood.png?height=600&width=600",
    tech: ["React", "Redux", "Tailwind-CSS", "Vite"],
    link: "https://inwood-khaki.vercel.app/",
  },
  {
    id: 5,
    title: "BistroBliss",
    category: "Frontend",
    description:
      "Created a visually appealing and user-friendly restaurant website using React and Tailwind CSS.",
    image: "/projects/BistroBliss.png?height=600&width=600",
    tech: ["React", "Tailwind-CSS", "Vite"],
    link: "https://bistro-bliss-beryl.vercel.app/",
  },
  {
    id: 6,
    title: "Ticket-App",
    category: "Full Stack",
    description:
      "Interactive data visualization dashboard with real-time updates, customizable widgets.",
    image: "/projects/Ticket-App.png?height=600&width=600",
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],

    link: "https://github.com/MuhammadSami1/Ticket-App",
  },
  {
    id: 7,
    title: "UserPostApp",
    category: "Frontend",
    description:
      "Enhanced application functionality with Forms API synchronization.",
    image: "/projects/UserPostApp.png?height=600&width=600",
    tech: ["React", "Redux", "Tailwind-CSS", "Vite"],
    link: "https://crud-app-mu-nine.vercel.app/",
  },
  {
    id: 8,
    title: "Astroship-Website",
    category: "Frontend",
    description:
      "Created a responsive website featuring 5 – 6 pages, ensuring a consistent and engaging user experience across alldevices.",
    image: "/projects/Astroship-Website.png?height=600&width=600",
    tech: ["React", "Tailwind-CSS", "Vite"],
    link: "https://astroship-website.vercel.app/",
  },
  {
    id: 9,
    title: "Mern-ChatApp",
    category: "Full Stack",
    description:
      "Developed a real-time chat application using MongoDB, Express, React, and Node.js, with Socket.io for live messaging. ",
    image: "/projects/Mern-ChatApp.png?height=600&width=600",
    tech: ["MERN", "Tailwind-CSS", "Daisy UI"],
    link: "https://github.com/MuhammadSami1/Mern-ChatApp",
  },
];

// export const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "CTO",
//     company: "TechCorp",
//     quote:
//       "Tony delivered an exceptional MERN stack application that exceeded our expectations. His deep understanding of both frontend and backend technologies resulted in a seamless, high-performance solution.",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "Startup Founder",
//     company: "InnovateLabs",
//     quote:
//       "Working with Tony was a game-changer for our startup. His full-stack expertise helped us launch our MVP in record time, with clean code and excellent architecture decisions.",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     role: "Product Manager",
//     company: "GlobalSoft",
//     quote:
//       "Tony's ability to translate complex business requirements into elegant technical solutions is remarkable. His MERN stack implementation has been robust, scalable, and easy to maintain.",
//     image: "/placeholder.svg?height=100&width=100",
//   },
// ];
