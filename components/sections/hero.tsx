"use client";

import { motion } from "framer-motion";
import FloatingLogos from "../floating-logo";
import ComputersCanvas from "../canvas-3js/computer-scene";

export default function Hero() {
  return (
    <>
      <div className="container px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Deemanth Poonacha
          </h1>
          <h2 className="text-left text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Full Stack Developer
          </h2>
          <p className="text-lg mb-8 max-w-2xl text-gray-600 dark:text-gray-300">
            Passionate about creating robust and scalable web applications.
            <br />
            Experienced in both front-end and back-end technologies.
          </p>

          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-2xl">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <a href="#contact">Contact Me</a>
            </span>
          </button>
        </motion.div>
      </div>
      <FloatingLogos />
      <ComputersCanvas />
    </>
  );
}
