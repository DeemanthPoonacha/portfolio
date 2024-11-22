"use client";
import { SectionContext } from "@/lib/hooks/useSections";
import { useState } from "react";

// Create a provider component to wrap around the main app
export function SectionProvider({ children }: { children: any }) {
  const [currentSection, setCurrentSection] = useState("hero");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  return (
    <SectionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        selectedProjectIndex,
        setSelectedProjectIndex,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}
