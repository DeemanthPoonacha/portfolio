"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { technologies } from "@/data/data";
import { Project } from "@/lib/types";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

export const ProjectCard = ({
  project,
  className,
  isSelected,
  onClick,
}: {
  project: Project;
  onClick: () => void;
  className?: string;
  isSelected?: boolean;
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
      onClick={onClick}
      ref={cardRef}
      className={cn(
        "w-full h-96 rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden cursor-pointer relative group select-none",
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
        src={project.image || "/projects/project-placeholder.webp"}
        alt={project.title}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute flex z-10 p-4 w-full justify-between items-center">
        <span
          className={cn(
            "bg-left-bottom block gradient-bg bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] p-2 rounded-md z-10 ",
            isSelected
              ? "bg-[length:100%_2px] "
              : "transition-all duration-500 ease-out"
          )}
        >
          <span className="relative">
            <div className="absolute -inset-0.5 rounded-lg gradient-bg opacity-75 blur-2xl" />
            <h3 className="text-2xl font-bold text-zinc-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {project.title}
            </h3>
          </span>
        </span>
        <Link
          target="_blank"
          href={project.link}
          className="z-50 p-2 rounded-md text-2xl font-bold text-zinc-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover-gradient-bg"
        >
          <div className="absolute -inset-0.5 rounded-lg gradient-bg opacity-75 blur-2xl" />
          <TbExternalLink className="" />
        </Link>
      </div>

      <div
        className={cn(
          "absolute inset-0 bg-black bg-opacity-60 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          isSelected ? "opacity-100 transition-opacity" : ""
        )}
      >
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
