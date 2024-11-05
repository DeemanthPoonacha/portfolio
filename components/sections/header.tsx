"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TbMenu2, TbSun, TbMoon } from "react-icons/tb";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSection } from "@/lib/hooks/useSections";
import { sections } from ".";
import Image from "next/image";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { currentSection } = useSection();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const NavItems = () => (
    <>
      {sections
        .filter((_sec, index) => index)
        .map(({ id, title }) => (
          <Link
            key={id}
            href={"#" + id}
            className={cn(
              "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors",
              currentSection === id ? "text-primary dark:text-primary" : ""
            )}
          >
            {title}
          </Link>
        ))}
    </>
  );

  return (
    <motion.header
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          <Image
            src={
              theme === "dark"
                ? "/logos/logo_dark.png"
                : "/logos/logo_light.png"
            }
            alt="Logo"
            width={264 * 0.25}
            height={192 * 0.25}
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <NavItems />
          <ThemeToggler />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <TbMenu2 className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-4">
                <NavItems />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {theme === "dark" ? (
                    <TbSun className="h-5 w-5" />
                  ) : (
                    <TbMoon className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? (
        <TbSun className="h-5 w-5" />
      ) : (
        <TbMoon className="h-5 w-5" />
      )}
    </Button>
  );
}
