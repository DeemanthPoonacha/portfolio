import ComputersCanvas from "@/components/canvas-3js/computer-scene";
import Sections from "@/components/sections";
import SectionNavigator from "@/components/ui/section-navigator";

export default function Home() {
  return (
    <div className="w-full">
      <ComputersCanvas />
      <Sections />
      <SectionNavigator />
    </div>
  );
}
