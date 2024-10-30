import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useHelper,
  useProgress,
} from "@react-three/drei";
import CanvasLoader from "./loader";
import Computer from "./computer";
import RotatingSkills from "./RotatingSkills";
import { useSection } from "@/lib/hooks/useSections";
import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
} from "three";

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
  const { currentSection } = useSection();
  const skillsActive = currentSection === "skills";
  const { progress } = useProgress();
  const loadLights = progress === 100;

  return (
    <div className="fixed right-0 w-full h-full top-0.5 z-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Computer isMobile={isMobile} />
          <RotatingSkills isVisible={skillsActive} />
          {loadLights && <Lightings />}
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

const Lightings = () => {
  // const { currentSection } = useSection();
  // const ref = useRef();
  // useHelper(ref, HemisphereLightHelper, 1);
  // if (currentSection === "projects") return <></>;
  return (
    <>
      <pointLight
      // ref={ref}
      // rotateY={(angle) => 90 - angle}
      // position={[0, 0, 0]}
      // intensity={100}
      />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        // minPolarAngle={Math.PI / 2}
      />
      {/* <spotLight
        ref={ref}
        position={[10, 1.3, 3]}
        angle={0.15}
        penumbra={0}
        intensity={300}
        distance={10}
        rotation={[-Math.PI / 2, 0, 0]}
      /> */}
      <ambientLight intensity={6} color={"white"} />
      {/* <hemisphereLight
        ref={ref}
        intensity={1}
        position={[1, 1, 1]}
        groundColor="purple"
      /> */}
    </>
  );
};

export default ComputersCanvas;
