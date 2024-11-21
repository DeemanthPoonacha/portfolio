"use client";
import { MobileSheet } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavItems } from "./nav-items";
import { Logo } from "../ui/logo";
import { ThemeToggler } from "../ui/theme-toggler";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-6">
          <NavItems />
          <ThemeToggler />
        </div>
        <MobileSheet />
      </nav>
    </motion.header>
  );
}
