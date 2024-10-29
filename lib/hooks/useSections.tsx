import { createContext, useContext, useState } from "react";

// Create the context
interface SectionContextType {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  selectedProject: string;
  setSelectedProject: (section: string) => void;
}

export const SectionContext = createContext<SectionContextType>({
  currentSection: "hero",
  setCurrentSection: () => {},
  selectedProject: "bloggy",
  setSelectedProject: () => {},
});

// Create a custom hook for easy access to the context
export function useSection() {
  return useContext(SectionContext);
}
