import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { useSection } from "@/lib/hooks/useSections";
import gsap from "gsap";
import * as THREE from "three";
import CanvasLoader from "./loader";
import Computer from "./computer";
import CameraController from "./camera-controller";

// Main Scene component
const Scene = () => {
  return (
    <>
      <CameraController />
      <Computer />
      <Lighting />

      {/* <gridHelper args={[30, 30, 0xff0000, "teal"]} />
      <axesHelper args={[5]} /> */}
    </>
  );
};

// Lighting component with dynamic intensity based on section
const Lighting = () => {
  const { currentSection } = useSection();
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useEffect(() => {
    if (!lightRef.current) return;

    // Adjust lighting based on section
    const lightingConfigs: Record<
      string,
      { intensity: number; position: number[] }
    > = {
      home: { intensity: 1, position: [5, 5, 5] },
      about: { intensity: 1.2, position: [3, 3, 3] },
      skills: { intensity: 10, position: [-3, 4, 5] },
      projects: { intensity: 0.8, position: [0, 5, -5] },
      contact: { intensity: 1.3, position: [5, 2, 3] },
    };

    const config = lightingConfigs[currentSection];
    if (config) {
      gsap.to(lightRef.current, {
        intensity: config.intensity,
        duration: 2,
        ease: "power3.out",
      });
      gsap.to(lightRef.current.position, {
        x: config.position[0],
        y: config.position[1],
        z: config.position[2],
        duration: 2,
        ease: "power3.out",
      });
    }
  }, [currentSection]);

  return (
    <>
      <directionalLight
        ref={lightRef}
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <ambientLight intensity={2} />
    </>
  );
};

// Main canvas component
const ComputersCanvas = () => {
  // const [isMobile, setIsMobile] = useState(false);
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 500px)");
  //   setIsMobile(mediaQuery.matches);
  //   const handleMediaQueryChange = (event: MediaQueryListEvent) => {
  //     setIsMobile(event.matches);
  //   };
  //   mediaQuery.addEventListener("change", handleMediaQueryChange);
  //   return () =>
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  // }, []);

  return (
    <div className="fixed right-0 w-full h-full top-0.5 z-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          preserveDrawingBuffer: true,
          antialias: true,
          alpha: true,
        }}
        camera={{
          fov: 25,
          near: 0.1,
          far: 1000,
          position: [20, 3, 5],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Scene />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
