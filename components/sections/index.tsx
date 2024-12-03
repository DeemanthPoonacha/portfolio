"use client";
import { useSection } from "@/lib/hooks/useSections";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Skills from "./skills";
import Hero from "./hero";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title?: string;
  nav_title?: string;
  content: JSX.Element;
}

export const sections: SectionProps[] = [
  { id: "hero", content: <Hero /> },
  { id: "about", title: "About Me", nav_title: "About", content: <About /> },
  {
    id: "projects",
    title: "Featured Projects",
    nav_title: "Projects",
    content: <Projects />,
  },
  { id: "skills", title: "Skills", nav_title: "Skills", content: <Skills /> },
  {
    id: "contact",
    title: "Contact Me",
    nav_title: "Contact",
    content: <Contact />,
  },
];

export const Section = ({ id, content, title }: SectionProps) => {
  const { setCurrentSection } = useSection();
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: 100,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    if (inView) setCurrentSection(id);
  }, [inView]);
  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center h-screen relative w-full mb-96 md:mb-[15%] pointer-events-none"
      ref={ref}
    >
      {!title ? null : (
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-4xl font-bold mt-32 md:mt-0 mb-12 mx-auto gradient-text"
        >
          {title}
        </motion.h2>
      )}
      <div className="container mx-auto">{content}</div>
    </section>
  );
};

const Sections = () => (
  <>
    {sections.map((section) => (
      <Section key={section.id} {...section} />
    ))}
  </>
);

export default Sections;
