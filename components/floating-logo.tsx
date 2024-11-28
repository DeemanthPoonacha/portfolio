import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { technologies } from "@/data/data";
import useScreenSize from "@/lib/hooks/useScreenSize";

type LogoProps = {
  Icon: any;
  initialPosition: {
    x: number;
    y: number;
  };
  speed: {
    x: number;
    y: number;
  };
  id: string;
  size: number;
};

const FloatingLogo = ({ Icon, initialPosition, speed, size }: LogoProps) => {
  const controls = useAnimation();
  const logoRef = useRef<HTMLDivElement | null>(null);
  const [velocity, setVelocity] = useState({ x: speed.x, y: speed.y });
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    const updatePosition = () => {
      if (!logoRef.current?.parentElement || !logoRef.current) return;

      const container = logoRef.current?.parentElement.getBoundingClientRect();
      const logo = logoRef.current.getBoundingClientRect();

      let newPos = {
        x: position.x + velocity.x,
        y: position.y + velocity.y,
      };

      let newVelocity = { ...velocity };

      // Check for collisions with container edges
      if (newPos.x <= 0 || newPos.x + logo.width >= container.width) {
        newVelocity.x = -newVelocity.x;
      }
      if (newPos.y <= 0 || newPos.y + logo.height >= container.height) {
        newVelocity.y = -newVelocity.y;
      }

      setPosition(newPos);
      setVelocity(newVelocity);
      controls.start(newPos);
    };

    const intervalId = setInterval(updatePosition, 50);

    return () => clearInterval(intervalId);
  }, [position, velocity, controls]);

  return (
    <motion.div
      ref={logoRef}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: size,
        height: size,
      }}
      animate={controls}
      initial={initialPosition}
      transition={{ type: "tween", duration: 0.05 }}
    >
      <Icon
        style={{ width: size, height: size }}
        className="text-gray-400 opacity-20"
      />
    </motion.div>
  );
};

const FloatingLogos = () => {
  const [logos, setLogos] = useState<LogoProps[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { isMobile } = useScreenSize();
  const iconSize = !isMobile ? 80 : 40;

  useEffect(() => {
    const initializeLogos = () => {
      if (containerRef.current) {
        const container = containerRef.current.getBoundingClientRect();
        const newLogos = technologies.map(({ Icon, id }) => ({
          id,
          Icon,
          initialPosition: {
            x: Math.random() * (container.width - iconSize),
            y: Math.random() * (container.height - iconSize),
          },
          speed: {
            x: (Math.random() - 0.5) * 4,
            y: (Math.random() - 0.5) * 4,
          },
          size: iconSize,
        }));
        setLogos(newLogos);
      }
    };

    initializeLogos();
    window.addEventListener("resize", initializeLogos);

    return () => window.removeEventListener("resize", initializeLogos);
  }, [iconSize]);

  return (
    <div
      ref={containerRef}
      className="absolute pointer-events-none w-full h-full top-0 left-0 overflow-hidden -z-10"
    >
      {logos.length > 0 &&
        logos.map((logo) => <FloatingLogo key={logo.id} {...logo} />)}
    </div>
  );
};

export default FloatingLogos;
