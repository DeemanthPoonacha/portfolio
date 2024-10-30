import { useSection } from "@/lib/hooks/useSections";
import { useVideoTexture, useTexture } from "@react-three/drei";

export const Screen = () => {
  const { currentSection, selectedProject } = useSection();
  const textures: Record<string, string> = {
    skills: "/custom-textures/black.png",
    contact: "/custom-textures/black.png",
    about: "/custom-textures/black.png",
    // projects: "/custom-textures/bloggy.webm",
    // hero: "/custom-textures/black.png",
  };
  const texture = useTexture(
    textures[currentSection] ||
      "/desktop_pc/textures/Material.074_30_baseColor.png"
  );
  const video = useVideoTexture(
    selectedProject
      ? `/custom-textures/${selectedProject}.webm`
      : `/custom-textures/bloggy.webm`,
    {}
  );
  video.colorSpace = "srgb";

  return currentSection === "projects" ? (
    <meshLambertMaterial map={video} />
  ) : (
    <meshBasicMaterial map={texture} />
  );
};
