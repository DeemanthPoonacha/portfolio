"use client";
import React, { useState, useEffect } from "react";

const Slider3D = () => {
  const [rotation, setRotation] = useState(0);
  const quantity = 10;
  const radius = 550; // Distance from center

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev - 1) % 360); // Changed to negative for clockwise rotation
    }, 50); // Made animation smoother with shorter interval
    return () => clearInterval(interval);
  }, []);

  const items = [
    { color: "bg-red-500" },
    { color: "bg-blue-500" },
    { color: "bg-green-500" },
    { color: "bg-yellow-500" },
    { color: "bg-purple-500" },
    { color: "bg-black" },
    { color: "bg-gray-500" },
    { color: "bg-pink-500" },
    { color: "bg-orange-500" },
    { color: "bg-cyan-500" },
  ];

  return (
    <div className="w-full h-screen bg-gray-200 overflow-hidden relative flex items-center justify-center">
      <div
        className="relative w-48 h-64"
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(-16deg) rotateY(${rotation}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        {items.map((item, index) => {
          const angle = (360 / quantity) * index;
          return (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
              }}
            >
              <div className={`w-full h-full ${item.color}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider3D;
