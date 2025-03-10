"use client";

import { motion } from "framer-motion";
import { ThreeDCard } from "@/components/ui/3d-card";
import { projects } from "@/data/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-800 dark:text-gray-100">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ThreeDCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
