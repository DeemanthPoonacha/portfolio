import { createContext, useContext, useState } from "react";

// Create the context
interface SectionContextType {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export const SectionContext = createContext<SectionContextType>({
  currentSection: "",
  setCurrentSection: () => {},
});

// Create a custom hook for easy access to the context
export function useSection() {
  return useContext(SectionContext);
}
