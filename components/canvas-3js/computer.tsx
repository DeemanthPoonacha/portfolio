import React from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

const Computer = ({ isMobile = false }) => {
  const computerObject = useGLTF("./desktop_pc/scene.gltf");
  const {
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    scale,
  } = useControls("computer", {
    positionX: { value: 0, min: -10, max: 10 },
    positionY: { value: 0, min: -10, max: 10 },
    positionZ: { value: -3.3, min: -10, max: 10 },
    rotationX: { value: 0, min: -1, step: 0.01, max: 1 },
    rotationY: { value: -0.7, min: -1, step: 0.01, max: 1 },
    rotationZ: { value: 0.0, min: -1, step: 0.01, max: 1 },
    scale: { value: 0.4, min: 0.0, max: 4 },
  });
  return (
    <mesh>
      <hemisphereLight intensity={15} groundColor="blue" />
      <pointLight intensity={1} position={[0.5, 0.15, -3.1]} color={"red"} />
      <primitive
        object={computerObject.scene}
        scale={scale}
        position={[positionX, positionY, positionZ]}
        rotation={[rotationX, rotationY, rotationZ]}
      />
    </mesh>
  );
};
useGLTF.preload("/desktop_pc/scene.gltf");

export default Computer;

const computerPositions = [
  {
    id: "hero",
    big_768: { position: [0, 0, -3.3], rotation: [0, -0.7, 0.0], scale: 0.4 },
  },
  {
    id: "work",
    big_768: {
      position: [0, -4.4 - 4.7],
      rotation: [0, -0.2, 0.13],
      scale: 1.58,
    },
  },
  {
    id: "about",
    big_768: {
      position: [0, -0.2, 1.3],
      rotation: [0, 0.2, 0],
      scale: 0.46,
    },
  },
  {
    id: "skills",
    big_768: {
      position: [0, 0, 0],
      rotation: [0, -0.3, 0],
      scale: 0.4,
    },
  },
  {
    id: "contact",
    big_768: {
      position: [0, -8.8 - 7.9],
      rotation: [0, -0.2, 0],
      scale: 2.64,
    },
  },
];
