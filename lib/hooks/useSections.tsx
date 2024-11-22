import { createContext, useContext, useState } from "react";

// Create the context
interface SectionContextType {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  selectedProjectIndex: number;
  setSelectedProjectIndex: (index: number) => void;
}

export const SectionContext = createContext<SectionContextType>({
  currentSection: "hero",
  setCurrentSection: () => {},
  selectedProjectIndex: 0,
  setSelectedProjectIndex: () => {},
});

// Create a custom hook for easy access to the context
export function useSection() {
  return useContext(SectionContext);
}
