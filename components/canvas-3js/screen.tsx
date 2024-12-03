import { useSection } from "@/lib/hooks/useSections";
import { useVideoTexture, useTexture } from "@react-three/drei";
import RotatingSkills from "./rotating-skills";
import { projects } from "@/data/data";
import { useTheme } from "next-themes";

export const Screen = () => {
  const { theme } = useTheme();
  const { currentSection, selectedProjectIndex } = useSection();
  const index = selectedProjectIndex % projects.length;
  const selectedProjectId = projects[index]?.id;
  const textures: Record<string, string> = {
    skills: "/custom-textures/skills.webp",
    contact:
      theme === "light"
        ? "/custom-textures/contact-light.webp"
        : "/custom-textures/contact-dark.webp",
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
