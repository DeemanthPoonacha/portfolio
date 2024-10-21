"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FloatingLogos from "./floating-logo";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center h-screen lg:h-[70vh] relative py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="container px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Deemanth Poonacha
          </h1>
          <h2 className="text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Full Stack Developer
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Passionate about creating robust and scalable web applications.
            Experienced in both front-end and back-end technologies.
          </p>
          <Button asChild className="bg-primary text-white hover:bg-primary/90">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>
      <FloatingLogos />
    </section>
  );
}
