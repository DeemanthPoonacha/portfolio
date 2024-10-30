import React, {
  Suspense,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useHelper,
  useProgress,
} from "@react-three/drei";
import { DirectionalLight, HemisphereLightHelper, Vector3 } from "three";
import { useSection } from "@/lib/hooks/useSections";
import { computerPositions } from "@/lib/constants";
import Computer from "./computer";
import RotatingSkills from "./RotatingSkills";
import CanvasLoader from "./loader";

// Optimized lighting component with proper typing
const Lighting = () => {
  const lightRef = useRef<DirectionalLight>(null);
  const { scene } = useThree();

  useEffect(() => {
    if (scene && lightRef.current) {
      scene.traverse((object) => {
        if (object.isMesh) {
          object.castShadow = true;
          object.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  return (
    <>
      <directionalLight
        ref={lightRef}
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.3} groundColor="blue" />
    </>
  );
};

// Main scene component
const Scene = ({ isMobile }: { isMobile: boolean }) => {
  const { currentSection } = useSection();

  return (
    <>
      <Computer isMobile={isMobile} />
      {currentSection === "skills" && <RotatingSkills />}
      <Lighting />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        dampingFactor={0.05}
        enableDamping
      />
    </>
  );
};

// Main canvas component
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className="fixed right-0 w-full h-full top-0.5 z-50">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [20, 3, 5],
          fov: 25,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          preserveDrawingBuffer: true,
          antialias: true,
          alpha: true,
        }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Scene isMobile={isMobile} />
        </Suspense>
        {/* <Preload all /> */}
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
