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
    technologies: ["react", "javascript", "rapid"],
    link: "https://lambent-faun-fd75c3.netlify.app/",
    image: "/projects/fit-buddy.jpg",
  },
];
export const technologies = [
  // Skills
  { id: "javascript", Icon: SiJavascript, name: "JavaScript" },
  { id: "typescript", Icon: SiTypescript, name: "TypeScript" },
  { id: "react", Icon: SiReact, name: "React" },
  { id: "nextjs", Icon: SiNextdotjs, name: "Next.js" },
  { id: "astro", Icon: SiAstro, name: "Astro" },
  { id: "nodejs", Icon: SiNodedotjs, name: "Node.js" },
  { id: "express", Icon: SiExpress, name: "Express" },
  { id: "mongodb", Icon: SiMongodb, name: "MongoDB" },
  { id: "tailwindcss", Icon: SiTailwindcss, name: "Tailwind CSS" },
  { id: "restful_api", Icon: TbApi, name: "RESTful APIs" },
  { id: "git", Icon: SiGit, name: "Git" },
  { id: "threejs", Icon: SiThreedotjs, name: "Three.js" },
  { id: "docker", Icon: SiDocker, name: "Docker" },
  { id: "python", Icon: SiPython, name: "Python" },

  // Technologies
  { id: "redux", Icon: SiRedux, name: "Redux" },
  { id: "socketio", Icon: SiSocketdotio, name: "Socket.io" },
  { id: "chartjs", Icon: SiChartdotjs, name: "Chart.js" },
  { id: "stripe", Icon: SiStripe, name: "Stripe" },
  { id: "vuejs", Icon: SiVuedotjs, name: "Vue.js" },
  { id: "firebase", Icon: SiFirebase, name: "Firebase" },
  { id: "postgresql", Icon: SiPostgresql, name: "PostgreSQL" },
  { id: "tensorflow", Icon: SiTensorflow, name: "TensorFlow" },
  { id: "flask", Icon: SiFlask, name: "Flask" },
  { id: "rapid", Icon: SiRapid, name: "Rapid API" },
];

export const skills = technologies.filter(({ id }) =>
  [
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "astro",
    "nodejs",
    "mongodb",
    "tailwindcss",
    "restful_api",
    "git",
    "threejs",
    "docker",
    "python",
    "redux",
  ].includes(id)
);
