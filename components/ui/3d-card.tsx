"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { technologies } from "@/data/data";

export const ThreeDCard = ({
  project,
  className,
}: {
  project: {
    title: string;
    description: string;
    technologies: any[];
    link: string;
    image: string;
  };
  className?: string;
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -10;
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "w-full h-96 rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden cursor-pointer relative group",
        className
      )}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={project.image}
        alt={project.title}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-110 transition-transform duration-300"
      />
      <h3 className="absolute text-2xl font-bold text-zinc-50 p-4 z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {project.title}
      </h3>

      <div className="absolute inset-0 bg-black bg-opacity-60 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3> */}
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex space-x-2">
          {project.technologies.map((techid, index) => {
            const tech = technologies.find(({ id }) => id === techid);
            if (!tech) return;
            const { Icon, name } = tech;
            return (
              <Icon key={index} title={name} className="w-6 h-6 text-white" />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
