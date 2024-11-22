"use client";

import { ProjectDCard } from "@/components/ui/project-card";
import { projects as originalProjects } from "@/data/data";
import { useSection } from "@/lib/hooks/useSections";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { CSSProperties } from "react";

export default function Projects() {
  const { setSelectedProjectIndex, selectedProjectIndex } = useSection();
  const extendToMinSize = (array: any[], minSize = 5) => {
    if (array.length === 0) return []; // Handle edge case for empty input array

    const timesToExtend = Math.ceil(minSize / array.length); // Calculate how many times to extend
    const extendedArray = Array(timesToExtend).fill(array).flat(); // Extend the array

    return extendedArray;
  };
  const projects = extendToMinSize(originalProjects, 5);

  const handleNext = () => {
    const nextIndex = (selectedProjectIndex + 1) % projects.length;
    setSelectedProjectIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (selectedProjectIndex - 1 + projects.length) % projects.length;
    setSelectedProjectIndex(prevIndex);
  };

  const getVisibleIndices = () => {
    const total = projects.length;
    return [
      (selectedProjectIndex - 2 + total) % total,
      (selectedProjectIndex - 1 + total) % total,
      selectedProjectIndex,
      (selectedProjectIndex + 1) % total,
      (selectedProjectIndex + 2) % total,
    ];
  };

  const getItemStyles = (index: number) => {
    const visibleIndices = getVisibleIndices();
    const position = visibleIndices.indexOf(index);

    const baseStyles = {
      position: "absolute",
      transition: "all 500ms ease-out",
      width: "33.333%",
    };

    switch (position) {
      case 0:
        return {
          ...baseStyles,
          transform: "translateX(-80%) scale(0.6)",
          opacity: 0,
          zIndex: 1,
        };
      case 1: // Left card
        return {
          ...baseStyles,
          transform: "translateX(0%) scale(0.8)",
          opacity: 0.9,
          zIndex: 1,
        };
      case 2: // Center card
        return {
          ...baseStyles,
          transform: "translateX(100%) scale(1)",
          opacity: 1,
          zIndex: 2,
        };
      case 3: // Right card
        return {
          ...baseStyles,
          transform: "translateX(200%) scale(0.8)",
          opacity: 0.9,
          zIndex: 1,
        };
      case 4:
        return {
          ...baseStyles,
          transform: "translateX(280%) scale(0.6)",
          opacity: 0,
          zIndex: 1,
        };

      default:
        return {
          ...baseStyles,
          transform: "translateX(100%) scale(0.6)",
          opacity: 0,
          zIndex: -1,
        };
    }
  };
  return (
    <div className="mt-[30vh] md:mt-[45vh] relative w-full max-w-6xl mx-auto h-96 flex items-center justify-center overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute left-4 z-10 p-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors"
        aria-label="Previous"
      >
        <BsArrowLeftCircle className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 z-10 p-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors"
        aria-label="Next"
      >
        <BsArrowRightCircle className="w-6 h-6" />
      </button>

      <div className="relative w-full h-full">
        {projects.map((project, index) => (
          <div
            key={project.id + index}
            style={getItemStyles(index) as CSSProperties}
          >
            <ProjectDCard
              onClick={() => setSelectedProjectIndex(index)}
              project={project}
              isSelected={selectedProjectIndex === index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
