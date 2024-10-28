import { useRef, useState, useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useSection } from "@/lib/hooks/useSections";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { computerPositions } from "@/lib/constants";
import { Object3D, Group, TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { skills } from "@/data/data";
const SkillCard = ({ skill, position, rotation }) => {
  const cardRef = useRef();
  const [hovered, setHovered] = useState(false);

  // const colorMap = useLoader(TextureLoader, `/tech/${skill.id}.png`);
  // Always face the camera
  // useFrame(({ camera }) => {
  //   if (cardRef.current) {
  //     cardRef.current.rotateY(180);
  //   }
  // });

  return (
    <group
      // ref={cardRef}
      // position={position}
      // visible={isVisible}
      position={position}
      rotation={rotation}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <mesh rotation={[1.55, 1.5, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.1]} />
        <meshStandardMaterial
          // map={colorMap}
          bumpScale={1.3}
          color={skill.color}
          metalness={1.2}
          roughness={0.8}
          opacity={0.9}
        />
      </mesh>
      <Html
        transform
        distanceFactor={5}
        position={[0, 0, 0.1]}
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          pointerEvents: "none",
        }}
      >
        <div style={{ fontSize: "2em" }}>
          <skill.Icon />
        </div>
        <div
          style={{
            fontSize: "0.8em",
            marginTop: "0.5em",
            fontWeight: "bold",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {skill.name}
        </div>
      </Html>
    </group>
  );
};

const RotatingSkills = ({ isVisible }) => {
  const groupRef = useRef();
  const itemRefs = useRef([]);
  const radius = 5;
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible && !isAnimating) {
      setIsAnimating(true);
      itemRefs.current.forEach((item, index) => {
        const angle = (2 * Math.PI * index) / skills.length;
        const targetX = Math.sin(angle) * radius;
        const targetZ = Math.cos(angle) * radius;

        gsap.fromTo(
          item.position,
          {
            x: 0,
            y: 0,
            z: 0,
          },
          {
            x: targetX,
            y: 1.5,
            z: targetZ,
            duration: 1,
            ease: "back.out(1.2)",
            delay: index * 0.1,
          }
        );
      });
    }
  }, [isVisible]);

  useFrame(({ clock }) => {
    if (groupRef.current && isVisible) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });
  if (!isVisible) return <></>;

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const angle = (2 * Math.PI * index) / skills.length;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        const y = 1; // Slightly above the computer
        return (
          <SkillCard
            skill={skill}
            key={index}
            position={[x, y, z]}
            rotation={[0, angle, 0]}
          />
        );
      })}
    </group>
  );
};

export default RotatingSkills;
