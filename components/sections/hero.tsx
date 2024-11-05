"use client";

import { motion } from "framer-motion";
import FloatingLogos from "../floating-logo";
import Link from "next/link";

export default function Hero() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="container px-4 relative z-10 select-none">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col items-center md:items-start"
        >
          <motion.h1
            variants={fadeInUpVariants}
            className=" md:text-left text-center text-6xl font-bold mb-4 gradient-text"
          >
            Deemanth Poonacha
          </motion.h1>
          <motion.h2
            variants={fadeInUpVariants}
            className="w-fit md:text-left text-center text-2xl font-medium text-gray-600 dark:text-gray-300"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            variants={fadeInUpVariants}
            className="w-fit md:text-left text-center text-lg mb-8 text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Passionate about creating robust and scalable web applications.
            <br />
            Experienced in both front-end and back-end technologies.
          </motion.p>

          <Link href="#contact">
            <motion.button
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-2xl"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-200 group-hover:bg-slate-800">
                Contact Me
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
      <FloatingLogos />
    </>
  );
}
