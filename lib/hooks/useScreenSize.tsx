import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<"sm" | "md" | "lg">("lg");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width <= 640) {
        setScreenSize("sm");
      } else if (width <= 1024) {
        setScreenSize("md");
      } else {
        setScreenSize("lg");
      }
    };

    // Set initial size
    updateScreenSize();

    // Add event listener
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const isMobile = screenSize === "sm";

  return { isMobile, screenSize };
};

export default useScreenSize;
