import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./loader";
import { useControls } from "leva";
import { Leva } from "leva";

const Computers = ({ isMobile = false }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
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
    scale: { value: 0.4, min: 0.0, max: 2 },
  });
  return (
    <mesh>
      <hemisphereLight intensity={15} groundColor="blue" />
      <pointLight intensity={1} position={[0.5, 0.15, -3.1]} color={"red"} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={[positionX, positionY, positionZ]}
        rotation={[rotationX, rotationY, rotationZ]}
      />
    </mesh>
  );
};
useGLTF.preload("/desktop_pc/scene.gltf");

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="fixed right-0 w-full h-full top-0.5">
      <Leva />
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
