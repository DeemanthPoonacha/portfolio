import React, { useEffect, useRef, useCallback } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSection } from "@/lib/hooks/useSections";
import gsap from "gsap";
import { cameraPositions } from "@/lib/constants";
import { button, folder, useControls } from "leva";
import { PerspectiveCamera } from "three";
import { OrbitControls as OrbitControlsType } from "three-stdlib";

const CameraController = () => {
  const { camera } = useThree();
  const { currentSection } = useSection();
  const controlsRef = useRef<any>(null);

  // Function to animate camera movement
  const animateCamera = useCallback(
    (targetConfig: (typeof cameraPositions)[keyof typeof cameraPositions]) => {
      if (!camera || !controlsRef.current) return;

      const duration = 1.5;
      const ease = "power3.out";

      // Animate position
      gsap.to(camera.position, {
        x: targetConfig.position.x,
        y: targetConfig.position.y,
        z: targetConfig.position.z,
        duration,
        ease,
        onUpdate: () => {
          camera.updateProjectionMatrix();
          if (controlsRef.current) {
            controlsRef.current.update();
          }
        },
      });

      // Animate FOV
      gsap.to(camera, {
        fov: targetConfig.fov,
        duration,
        ease,
        onUpdate: () => {
          camera.updateProjectionMatrix();
        },
      });

      // Animate target/lookAt
      gsap.to(controlsRef.current.target, {
        x: targetConfig.target.x,
        y: targetConfig.target.y,
        z: targetConfig.target.z,
        duration,
        ease,
        onUpdate: () => {
          controlsRef.current?.update();
        },
      });
    },
    [camera]
  );

  // React to section changes
  useEffect(() => {
    const targetConfig = cameraPositions[currentSection];
    if (targetConfig) {
      animateCamera(targetConfig);
    }
  }, [currentSection, animateCamera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 4}
    />
  );
};

// Camera controller component with simplified Leva controls
export const LevaCameraController = () => {
  const { camera } = useThree();
  const { currentSection } = useSection();
  const controlsRef = useRef<OrbitControlsType>(null);

  // Create simple Leva controls that update based on current section
  const [{ position, target, fov }, set] = useControls(() => ({
    [`Current Section: ${currentSection}`]: folder({
      position: {
        value: { x: 20, y: 3, z: 5 },
        step: 0.1,
      },
      target: {
        value: { x: 0, y: 0, z: 0 },
        step: 0.1,
      },
      fov: {
        value: 25,
        min: 10,
        max: 100,
        step: 1,
      },
      "Copy Values": button(() => {
        const values = {
          position: {
            x: Number(camera.position.x.toFixed(2)),
            y: Number(camera.position.y.toFixed(2)),
            z: Number(camera.position.z.toFixed(2)),
          },
          target: {
            x: Number(controlsRef.current?.target.x.toFixed(2)),
            y: Number(controlsRef.current?.target.y.toFixed(2)),
            z: Number(controlsRef.current?.target.z.toFixed(2)),
          },
          fov: Number((camera as PerspectiveCamera).fov.toFixed(2)),
        };

        // Copy to clipboard
        const jsonString = JSON.stringify(values, null, 2);
        navigator.clipboard.writeText(jsonString);
        console.log("Camera values for section:", currentSection);
        console.log(jsonString);
      }),
    }),
  }));

  // Update camera based on control values
  useEffect(() => {
    if (!camera || !controlsRef.current) return;

    camera.position.set(position.x, position.y, position.z);
    controlsRef.current.target.set(target.x, target.y, target.z);
    (camera as PerspectiveCamera).fov = fov;
    camera.updateProjectionMatrix();
    controlsRef.current.update();
  }, [camera, position, target, fov]);

  // Update controls when section changes
  useEffect(() => {
    // Get initial values for the section from your cameraPositions object
    const sectionConfig = cameraPositions[currentSection];
    if (sectionConfig) {
      set({
        position: sectionConfig.position,
        target: sectionConfig.target,
        fov: sectionConfig.fov,
      });
    }
  }, [currentSection, set]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={true} // Enabled for easier positioning
      enablePan={true} // Enabled for easier positioning
      enableRotate={true} // Enabled for easier positioning
      maxPolarAngle={Math.PI}
      minPolarAngle={0}
    />
  );
};

export default CameraController;
