import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";
import { ThemeToggler } from "./theme-toggler";
import { NavItems } from "./nav-items";

export function MobileSheet() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={toggleSheet}
        className="md:hidden text-gray-800 dark:text-gray-200"
      >
        <TbMenu2 className="h-6 w-6" />
      </button>

      {/* Overlay and Sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed h-screen inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSheet}
            />

            {/* Sheet Content */}
            <motion.div
              className="fixed inset-x-0 top-0 bg-white dark:bg-gray-900 z-50 shadow-2xl"
              initial={{ y: -430 }}
              animate={{ y: 0 }}
              exit={{ y: -430 }}
              transition={{ type: "spring", damping: 35, stiffness: 200 }}
            >
              <div className="relative">
                <div className="p-4 flex justify-between items-center">
                  <Logo onClick={handleItemClick} />

                  <ThemeToggler />

                  {/* Close Button */}
                  {/* <button
                    onClick={toggleSheet}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <TbX className="h-6 w-6" />
                  </button> */}
                </div>
                {/* Navigation Links */}
                <div className="grid gap-4 p-6">
                  <NavItems onClick={handleItemClick} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
