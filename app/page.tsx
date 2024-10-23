"use client";
import { Section, sections } from "@/components/sections";

export default function Home() {
  return (
    <div className="w-full">
      {sections.map((section) => (
        <Section {...section} />
      ))}
    </div>
  );
}
