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
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const projects = [
  {
    title: "Bloggy",
    description: "A blog site built on ",
    technologies: ["astro", "typescript"],
    link: "https://bloggy-ivory.vercel.app/",
    image: "/projects/bloggy.jpg",
  },
  {
    title: "Fit Buddy",
    description:
      "A collaborative task management tool with real-time updates and team features.",
    technologies: ["reactjs", "javascript", "rapid"],
    link: "https://lambent-faun-fd75c3.netlify.app/",
    image: "/projects/fit-buddy.jpg",
  },
];
export const technologies = [
  // Technologies
  { id: "reactjs", Icon: SiReact, name: "React", color: "#61DAFB" },
  { id: "nodejs", Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { id: "express", Icon: SiExpress, name: "Express", color: "#000000" },
  { id: "mongodb", Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  {
    id: "tailwind",
    Icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#38B2AC",
  },
  { id: "api", Icon: TbApi, name: "API", color: "#E34F26" }, // Assuming RESTful APIs use a neutral color
  { id: "redux", Icon: SiRedux, name: "Redux", color: "#764ABC" },
  { id: "socketio", Icon: SiSocketdotio, name: "Socket.io", color: "#010101" },
  { id: "chartjs", Icon: SiChartdotjs, name: "Chart.js", color: "#FF6384" },
  { id: "stripe", Icon: SiStripe, name: "Stripe", color: "#635BFF" },
  { id: "vuejs", Icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
  { id: "firebase", Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  {
    id: "postgresql",
    Icon: SiPostgresql,
    name: "PostgreSQL",
    color: "#336791",
  },
  { id: "python", Icon: SiPython, name: "Python", color: "#3776AB" },
  {
    id: "tensorflow",
    Icon: SiTensorflow,
    name: "TensorFlow",
    color: "#FF6F00",
  },
  { id: "flask", Icon: SiFlask, name: "Flask", color: "#000000" },
  { id: "astro", Icon: SiAstro, name: "Astro", color: "#FF5D01" },

  // Skills
  {
    id: "javascript",
    Icon: SiJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
  },
  { id: "threejs", Icon: SiThreedotjs, name: "Three.js", color: "#000000" },
  { id: "nextjs", Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  {
    id: "typescript",
    Icon: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
  },
  { id: "docker", Icon: SiDocker, name: "Docker", color: "#2496ED" },
  { id: "git", Icon: SiGit, name: "Git", color: "#F05032" },
  { id: "restful_api", Icon: TbApi, name: "RESTful APIs", color: "#008080" }, // Neutral color for APIs
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
    "redux",
  ].includes(id)
);
