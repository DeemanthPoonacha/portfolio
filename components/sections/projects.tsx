"use client";

import { motion } from "framer-motion";
import { ThreeDCard } from "@/components/ui/3d-card";
import { projects } from "@/data/data";
import { useSection } from "@/lib/hooks/useSections";

export default function Projects() {
  const { setSelectedProject, selectedProject } = useSection();
  return (
    <div className="mt-[30vh] md:mt-[45vh] grid grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          onClick={() => setSelectedProject(project.id)}
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="h-full"
        >
          <ThreeDCard
            project={project}
            isSelected={selectedProject === project.id}
          />
        </motion.div>
      ))}
    </div>
  );
}
