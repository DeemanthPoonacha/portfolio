import { useState, useRef, TouchEventHandler } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const TouchVerticalJoystick = ({
  onChange = (val: number) => {},
  size = 60,
  knobSize = 40,
}) => {
  const [position, setPosition] = useState(0);
  const startYRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      startYRef.current = touch.clientY;
    }
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    if (e.touches.length > 0 && containerRef.current) {
      const touch = e.touches[0];
      const containerRect = containerRef.current.getBoundingClientRect();

      // Calculate vertical movement
      const deltaY = touch.clientY - startYRef.current;

      // Limit movement to half the container height
      const halfHeight = containerRect.height / 2;
      const limitedDeltaY = Math.max(-halfHeight, Math.min(halfHeight, deltaY));

      // Normalize movement (between -1 and 1)
      const normalizedMovement = limitedDeltaY / halfHeight;

      setPosition(limitedDeltaY);
      onChange(normalizedMovement);
    }
  };

  const handleTouchEnd = () => {
    // Reset to original position
    setPosition(0);
    onChange(0);
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 right-4 z-50"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div
        className="absolute bottom-0 left-0 w-full bg-blue-500/30 rounded-full"
        style={{
          height: `${size}px`,
          touchAction: "none",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="absolute left-1/2 transform -translate-x-1/2 gradient-bg rounded-full flex flex-col items-center justify-center shadow-2xl"
          style={{
            width: `${knobSize}px`,
            height: `${knobSize}px`,
            top: `${size / 2 - knobSize / 2 + position}px`,
          }}
        >
          <BsChevronUp className="text-white dark:text-black -mb-1" />
          <BsChevronDown className="text-white dark:text-black" />
        </div>
      </div>
    </div>
  );
};

export default TouchVerticalJoystick;
