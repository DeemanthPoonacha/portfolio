import { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Group, Object3D, Object3DEventMap } from "three";
import { useFrame } from "@react-three/fiber";
import { skills } from "@/data/data";
import { TechnologyCard } from "@/lib/types";

interface SkillCardProps {
  skill: TechnologyCard;
  index: number;
  totalItems: number;
  groupRotation: number;
}

const SkillCard = ({
  skill,
  index,
  totalItems,
  groupRotation,
}: SkillCardProps) => {
  const cardRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  // Calculate if card should be flipped based on its position in the circle
  const calculateIsFlipped = () => {
    // Calculate the card's current angle in the circle
    const cardAngle = (2 * Math.PI * index) / totalItems;
    // Add the group's rotation to get the absolute angle
    const absoluteAngle = cardAngle + groupRotation;
    // Normalize the angle to 0-2π range
    const normalizedAngle = (absoluteAngle % (2 * Math.PI)) + Math.PI / 2 + 0.5;
    // Card should be flipped when it's in the back half of the circle
    return normalizedAngle > Math.PI / 2 && normalizedAngle < (3 * Math.PI) / 2;
  };

  return (
    <group
      ref={cardRef}
      onPointerEnter={(e) => {
        console.log("🚀 ~ e.object.scale:", e.object.scale);
        return e.object.scale.set(1.1, 1.1, 1.1);
      }}
      onPointerLeave={(e) => e.object.scale.set(1, 1, 1)}
    >
      <mesh rotation={[1.55, 1.5, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.1]} />
        <meshStandardMaterial
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
        position={[0, 0, 0]}
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s",
          transform: `${hovered ? "scale(1.1)" : "scale(1)"} ${
            calculateIsFlipped() ? "scaleX(1)" : "scaleX(-1)"
          }`,
          position: "relative",
          zIndex: calculateIsFlipped() ? 10000000 : -10000000,
          pointerEvents: "none",
          color: "#fff",
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

const RotatingSkills = () => {
  const groupRef = useRef<Group>(null);
  const itemRefs = useRef<(Group | null)[]>([]);
  const radius = 5;
  const [groupRotation, setGroupRotation] = useState(0);

  useGSAP(() => {
    itemRefs.current.forEach((item, index) => {
      if (!item) return;
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
          y: 0.8,
          z: targetZ,
          duration: 1,
          ease: "back.out(1.2)",
          delay: index * 0.1,
        }
      );
      gsap.fromTo(
        item.rotation,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        {
          x: 0,
          y: angle,
          z: 0,
          duration: 1,
          ease: "back.out(1.2)",
          delay: index * 0.1,
        }
      );
      gsap.fromTo(
        item.scale,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: "back.out(1.2)",
          delay: index * 0.1,
        }
      );
    });
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const rotation = clock.getElapsedTime() * 0.3;
      groupRef.current.rotation.y = rotation;
      setGroupRotation(rotation);
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        return (
          <group
            key={skill.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            position={[0, 0, 0]}
            scale={0}
          >
            <SkillCard
              skill={skill}
              index={index}
              totalItems={skills.length}
              groupRotation={groupRotation}
            />
          </group>
        );
      })}
    </group>
  );
};

export default RotatingSkills;
