import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSection } from "@/lib/hooks/useSections";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { computerPositions } from "@/lib/constants";
import { Object3D } from "three";
import RotatingSkills from "./RotatingSkills";

const Computer = ({ isMobile = false }) => {
  const computerObject = useGLTF("./desktop_pc/scene.gltf");

  const { currentSection } = useSection();
  const targetRef = useRef<Object3D>(null);
  useGSAP(() => {
    if (!targetRef.current) return;

    const animConfigs = {
      duration: 1.5,
      ease: "power3.out",
    };
    const { position, rotation, scale } =
      computerPositions[currentSection].big_768;
    gsap.to(targetRef.current.position, {
      ...position,
      ...animConfigs,
    });
    gsap.to(targetRef.current.rotation, {
      ...rotation,
      ...animConfigs,
    });
    gsap.to(targetRef.current.scale, {
      x: scale,
      y: scale,
      z: scale,
      ...animConfigs,
    });
  }, [currentSection]);

  return (
    <mesh>
      <hemisphereLight intensity={15} groundColor="blue" />
      <pointLight intensity={1} position={[0.5, 0.15, -3.1]} color={"red"} />
      <primitive ref={targetRef} object={computerObject.scene} />
      <RotatingSkills isVisible={currentSection === "skills"} />
    </mesh>
  );
};
useGLTF.preload("/desktop_pc/scene.gltf");

export default Computer;
