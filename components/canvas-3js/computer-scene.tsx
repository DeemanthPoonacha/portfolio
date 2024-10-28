import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "./loader";
import Computer from "./computer";
import RotatingSkills from "./RotatingSkills";
import { useSection } from "@/lib/hooks/useSections";

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

  return (
    <div className="fixed right-0 w-full h-full top-0.5">
      <Canvas
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

          {/* <spotLight
            position={[3, 3, 3]}
            angle={0.15}
            penumbra={10}
            intensity={100}
          /> */}
          {/* <directionalLight
            // rotation={[0, 0, 0]}
            position={[5, 5, 5]}
            intensity={1}
          /> */}
          <ambientLight intensity={6} color={"white"} />
          {/* <hemisphereLight intensity={5} groundColor="gray" /> */}
          <RotatingSkills isVisible={skillsActive} />
          <Computer isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
