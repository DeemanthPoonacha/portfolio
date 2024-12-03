"use client";

import { ProjectCard } from "@/components/ui/project-card";
import { projects as originalProjects } from "@/data/data";
import { useSection } from "@/lib/hooks/useSections";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSwipeable } from "react-swipeable";
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
    };

    switch (position) {
      case 0:
        return {
          ...baseStyles,
          transform: "translateX(-172%) scale(0.6)",
          opacity: 0,
          zIndex: 1,
        };
      case 1: // Left card
        return {
          ...baseStyles,
          transform: "translateX(-96%) scale(0.8)",
          opacity: 0.9,
          zIndex: 1,
        };
      case 2: // Center card
        return {
          ...baseStyles,
          transform: "translateX(0%) scale(1)",
          opacity: 1,
          zIndex: 2,
        };
      case 3: // Right card
        return {
          ...baseStyles,
          transform: "translateX(96%) scale(0.8)",
          opacity: 0.9,
          zIndex: 1,
        };
      case 4:
        return {
          ...baseStyles,
          transform: "translateX(172%) scale(0.6)",
          opacity: 0,
          zIndex: 1,
        };

      default:
        return {
          ...baseStyles,
          transform: "translateX(0%) scale(0.6)",
          opacity: 0,
          zIndex: -1,
        };
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventScrollOnSwipe: true, // Prevent browser scroll during swipe
    trackMouse: true,
  });

  return (
    <div
      {...swipeHandlers} // Add swipe handlers here
      className="mt-[30svh] md:mt-[35svh] 2xl:mt-[45svh] mb-8 relative w-full mx-auto h-96 flex items-center justify-center pointer-events-auto"
    >
      <div className="absolute w-screen max-w-7xl h-full overflow-hidden flex justify-center">
        <button
          onClick={handlePrev}
          className="md:hidden absolute top-1/2 -translate-y-1/2 left-0 z-10 p-2 rounded-full bg-black/70  transition-colors"
          aria-label="Previous"
        >
          <BsChevronLeft className="text-white w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="md:hidden absolute top-1/2 -translate-y-1/2 right-0 z-10 p-2 rounded-full bg-black/70  transition-colors"
          aria-label="Next"
        >
          <BsChevronRight className="text-white w-6 h-6" />
        </button>
        <div className="absolute w-full max-w-7xl flex justify-center">
          {projects.map((project, index) => (
            <div
              key={project.id + index}
              style={getItemStyles(index) as CSSProperties}
              className="w-5/6 md:w-1/3"
            >
              <ProjectCard
                onClick={() => setSelectedProjectIndex(index)}
                project={project}
                isSelected={selectedProjectIndex === index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
