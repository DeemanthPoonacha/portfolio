"use client";
import { SectionContext } from "@/lib/hooks/useSections";
import { useState } from "react";

// Create a provider component to wrap around the main app
export function SectionProvider({ children }: { children: any }) {
  const [currentSection, setCurrentSection] = useState("hero");
  const [selectedProject, setSelectedProject] = useState("bloggy");

  return (
    <SectionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}
