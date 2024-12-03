import ComputersCanvas from "@/components/canvas-3js/computer-scene";
import Sections from "@/components/sections";

export default function Home() {
  return (
    <div className="w-full">
      <ComputersCanvas />
      <Sections />
    </div>
  );
}
