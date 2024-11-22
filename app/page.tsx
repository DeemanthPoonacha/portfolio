"use client";
import ComputersCanvas from "@/components/canvas-3js/computer-scene";
import { Section, sections } from "@/components/sections";

export default function Home() {
  return (
    <div className="w-full">
      <ComputersCanvas />
      {sections.map((section) => (
        <>
          <Section key={section.id} {...section} />
          <div className="section-divider"></div>
        </>
      ))}
    </div>
  );
}
