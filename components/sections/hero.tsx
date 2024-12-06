"use client";

import { motion } from "framer-motion";
import FloatingLogos from "../floating-logo";
import Link from "next/link";
import Button from "../ui/outline-button";

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
      <div className="my-auto select-none">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col items-center lg:items-start w-fit mx-auto lg:mx-0 pointer-events-auto"
        >
          <motion.h1
            variants={fadeInUpVariants}
            className=" lg:text-left text-center text-6xl font-bold mb-4 gradient-text"
          >
            Deemanth Poonacha
          </motion.h1>
          <motion.h2
            variants={fadeInUpVariants}
            className="w-fit lg:text-left text-center text-2xl font-medium text-gray-600 dark:text-gray-300"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            variants={fadeInUpVariants}
            className="w-fit lg:text-left text-center text-lg mb-8 text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Passionate about creating robust and scalable web applications.
            <br />
            Experienced in both front-end and back-end technologies.
          </motion.p>

          <Link href="#contact" className="rounded-full">
            <Button className="rounded-full" spanClassName="rounded-full">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
      <FloatingLogos />
    </>
  );
}
