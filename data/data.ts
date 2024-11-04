import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiThreedotjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiPython,
  SiChartdotjs,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiPostgresql,
  SiRedux,
  SiSocketdotio,
  SiAstro,
  SiStripe,
  SiTensorflow,
  SiVuedotjs,
  SiRapid,
  SiMui,
  SiAntdesign,
  SiReactquery,
  SiShadcnui,
  SiHtml5,
  SiCss3,
  SiFastapi,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { TechnologyCard } from "../lib/types";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "bloggy",
    title: "Bloggy",
    description:
      "Bloggy is a sleek, modern blog site built with Astro JS, TypeScript, and styled with Tailwind CSS. It offers readers a seamless experience across various categories, bringing organized, engaging content to one platform.",
    technologies: ["astro", "typescript", "tailwind"],
    link: "https://bloggy-ivory.vercel.app/",
    image: "/projects/bloggy.webp",
  },
  {
    id: "fit-buddy",
    title: "Fit Buddy",
    description:
      "Fit Buddy is your go-to app for finding exercises by targeted muscle group. Built with ReactJS, and powered by Rapid API, it offers categorized exercises with brief benefits and YouTube video guides for each, helping you master every move with ease.",
    technologies: ["reactjs", "javascript", "rapid", "mui"],
    link: "https://lambent-faun-fd75c3.netlify.app/",
    image: "/projects/fit-buddy.webp",
  },
];
export const technologies: TechnologyCard[] = [
  // Languages
  {
    id: "javascript",
    Icon: SiJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
  },
  {
    id: "typescript",
    Icon: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
  },
  { id: "python", Icon: SiPython, name: "Python", color: "#3776AB" },
  { id: "html", Icon: SiHtml5, name: "HTML", color: "#E34F26" },
  { id: "css", Icon: SiCss3, name: "CSS", color: "#38BDF8" },

  // Frontend
  { id: "reactjs", Icon: SiReact, name: "React", color: "#61DAFB" },
  { id: "nextjs", Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { id: "astro", Icon: SiAstro, name: "Astro", color: "#FF5D01" },
  { id: "threejs", Icon: SiThreedotjs, name: "Three.js", color: "#000000" },
  { id: "redux", Icon: SiRedux, name: "Redux", color: "#764ABC" },
  { id: "chartjs", Icon: SiChartdotjs, name: "Chart.js", color: "#FF6384" },
  {
    id: "reactquery",
    Icon: SiReactquery,
    name: "React Query",
    color: "#FF4154",
  },
  { id: "vuejs", Icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
  { id: "socketio", Icon: SiSocketdotio, name: "Socket.io", color: "#010101" },

  // Backend
  { id: "nodejs", Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { id: "express", Icon: SiExpress, name: "Express", color: "#000000" },
  { id: "stripe", Icon: SiStripe, name: "Stripe", color: "#635BFF" },
  { id: "firebase", Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  // {
  //   id: "tensorflow",
  //   Icon: SiTensorflow,
  //   name: "TensorFlow",
  //   color: "#FF6F00",
  // },
  { id: "flask", Icon: SiFlask, name: "Flask", color: "#000000" },
  { id: "fastapi", Icon: SiFastapi, name: "FastApi", color: "#000000" },

  // Databases
  { id: "mongodb", Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  {
    id: "postgresql",
    Icon: SiPostgresql,
    name: "PostgreSQL",
    color: "#336791",
  },

  // Tools
  { id: "docker", Icon: SiDocker, name: "Docker", color: "#2496ED" },
  { id: "git", Icon: SiGit, name: "Git", color: "#F05032" },

  // UI
  { id: "mui", Icon: SiMui, name: "MUI", color: "#007FFF" },
  { id: "antd", Icon: SiAntdesign, name: "Ant Design", color: "#0170FE" },
  {
    id: "tailwind",
    Icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#38B2AC",
  },
  { id: "shadcn", Icon: SiShadcnui, name: "Shadcn UI", color: "#38B2AC" },

  // Miscellaneous
  { id: "api", Icon: TbApi, name: "Restful API", color: "#E34F26" }, // Assuming RESTful APIs use a neutral color
  { id: "rapid", Icon: SiRapid, name: "Rapid API", color: "#0091FF" },
];

export const skills = technologies.filter(({ id }) =>
  [
    "javascript",
    "typescript",
    "reactjs",
    "nextjs",
    "astro",
    "nodejs",
    "mongodb",
    "tailwind",
    // "restful_api",
    "git",
    "threejs",
    "docker",
    "python",
    "reactquery",
  ].includes(id)
);
