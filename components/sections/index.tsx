import { useSection } from "@/lib/hooks/useSections";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Skills from "./skills";
import Hero from "./hero";

interface SectionProps {
  id: string;
  title: string;
  content: JSX.Element;
}

export const sections: SectionProps[] = [
  { id: "hero", title: "Home", content: <Hero /> },
  { id: "about", title: "About", content: <About /> },
  { id: "projects", title: "Projects", content: <Projects /> },
  { id: "skills", title: "Skills", content: <Skills /> },
  { id: "contact", title: "Contact", content: <Contact /> },
];

export const Section = ({ id, content, title }: SectionProps) => {
  const { setCurrentSection } = useSection();
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: 100,
  });

  useEffect(() => {
    if (inView) setCurrentSection(id);
  }, [inView]);
  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center h-screen lg:h-[70vh] relative "
      ref={ref}
    >
      {content}
    </section>
  );
};
