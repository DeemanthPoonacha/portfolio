import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useSection } from "@/lib/hooks/useSections";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

const Computer = ({ isMobile = false }) => {
  const computerObject = useGLTF("./desktop_pc/scene.gltf");
  // const {
  //   positionX,
  //   positionY,
  //   positionZ,
  //   rotationX,
  //   rotationY,
  //   rotationZ,
  //   scale,
  // } = useControls("computer", {
  //   positionX: { value: 0, min: -10, max: 10 },
  //   positionY: { value: 0, min: -10, max: 10 },
  //   positionZ: { value: -3.3, min: -10, max: 10 },
  //   rotationX: { value: 0, min: -1, step: 0.01, max: 1 },
  //   rotationY: { value: -0.7, min: -1, step: 0.01, max: 1 },
  //   rotationZ: { value: 0.0, min: -1, step: 0.01, max: 1 },
  //   scale: { value: 0.4, min: 0.0, max: 4 },
  // });
  const { currentSection } = useSection();
  const [pose, setPose] = useState(computerPositions[currentSection]?.big_768);
  useEffect(() => {
    if (currentSection) setPose(computerPositions[currentSection].big_768);
  }, [currentSection]);
  // const targetRef = useRef(null);
  // useGSAP(() => {
  //   console.log(targetRef.current);
  //   gsap.to(targetRef.current, {
  //     position: computerPositions[currentSection].big_768.position[0],
  //     // x: computerPositions[currentSection].big_768.position[0],
  //     // y: computerPositions[currentSection].big_768.position[1],
  //     // z: computerPositions[currentSection].big_768.position[2],
  //     duration: 1.5,
  //     ease: "power3.out",
  //     repeat: -1,
  //     // scale: pose.scale,
  //   });
  // }, [currentSection]);

  return (
    <mesh>
      <hemisphereLight intensity={15} groundColor="blue" />
      <pointLight intensity={1} position={[0.5, 0.15, -3.1]} color={"red"} />
      <primitive {...pose} object={computerObject.scene} />
    </mesh>
  );
};
useGLTF.preload("/desktop_pc/scene.gltf");

export default Computer;
type Pose = {
  position: number[];
  rotation: number[];
  scale: number;
};
const computerPositions: Record<string, { big_768: Pose }> = {
  hero: {
    big_768: { position: [0, 0, -3.3], rotation: [0, -0.7, 0.0], scale: 0.4 },
  },
  projects: {
    big_768: {
      position: [0, -3.4, -4.3],
      rotation: [0, -0.2, 0.13],
      scale: 1.46,
    },
  },
  about: {
    big_768: {
      position: [0, -0.2, 1.3],
      rotation: [0, 0.2, 0],
      scale: 0.46,
    },
  },
  skills: {
    big_768: {
      position: [0, 0, 0],
      rotation: [0, -0.3, 0],
      scale: 0.4,
    },
  },
  contact: {
    big_768: {
      position: [0, -4.4, -4.9],
      rotation: [0, -0.2, 0.13],
      scale: 1.53,
    },
  },
};
