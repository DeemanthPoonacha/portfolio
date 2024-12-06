"use client";
import useScreenSize from "@/lib/hooks/useScreenSize";
import { useState, useRef, useEffect } from "react";
import TouchVerticalJoystick from "./vertical-joystick";

const SectionNavigator = () => {
  const [value, setValue] = useState(0);

  // Find all section elements
  const getSections = () => {
    return Array.from(document.querySelectorAll("section"));
  };
  // Determine current section
  const getCurrentSectionIndex = () => {
    const sections = getSections();
    const scrollPosition = window.scrollY;
    return sections.findIndex(
      (section) =>
        section.offsetTop <= scrollPosition + window.innerHeight / 2 &&
        section.offsetTop + section.offsetHeight >
          scrollPosition + window.innerHeight / 2
    );
  };
  // Scroll to specific section
  const scrollToSection = (index: number) => {
    const sections = getSections();
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to next/previous section
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (Math.abs(value) === 1) {
      if (!scrollIntervalRef.current) {
        const currentIndex = getCurrentSectionIndex();
        scrollToSection(currentIndex + value);

        scrollIntervalRef.current = setInterval(() => {
          const updatedIndex = getCurrentSectionIndex();
          scrollToSection(updatedIndex + value);
        }, 1500);
      }
    } else {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    }

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [value]);

  // for touch capabilities
  const { isMobile } = useScreenSize();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    const checkTouchCapabilities = () => {
      const hasTouchCapabilities =
        isMobile ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0;
      setIsTouchDevice(hasTouchCapabilities);
    };

    checkTouchCapabilities();
  }, []);

  if (!isTouchDevice) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="text-center pt-4">
        <p className="text-lg">Current Joystick Value: {value.toFixed(2)}</p>
      </div>
      <TouchVerticalJoystick
        onChange={(val) => setValue(val)}
        size={60}
        knobSize={45}
      />
    </div>
  );
};

export default SectionNavigator;
