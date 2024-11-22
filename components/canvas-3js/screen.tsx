import { useSection } from "@/lib/hooks/useSections";
import { useVideoTexture, useTexture } from "@react-three/drei";
import RotatingSkills from "./rotating-skills";
import { projects } from "@/data/data";

export const Screen = () => {
  const { currentSection, selectedProjectIndex } = useSection();
  const index = selectedProjectIndex % projects.length;
  const selectedProjectId = projects[index]?.id;
  const textures: Record<string, string> = {
    skills: "/custom-textures/skills.webp",
    contact: "/custom-textures/black.png",
    about: "/custom-textures/profile.jpg",
    // projects: "/custom-textures/bloggy.webm",
    // hero: "/custom-textures/black.png",
  };
  const texture = useTexture(
    textures[currentSection] ||
      "/desktop_pc/textures/Material.074_30_baseColor.png"
  );
  const video = useVideoTexture(
    selectedProjectId
      ? `/custom-textures/${selectedProjectId}.webm`
      : `/custom-textures/bloggy.webm`,
    {}
  );
  video.colorSpace = "srgb";

  return (
    <>
      {currentSection === "skills" && <RotatingSkills />}
      {currentSection === "projects" ? (
        <meshLambertMaterial map={video} />
      ) : (
        <meshBasicMaterial map={texture} />
      )}
    </>
  );
};
