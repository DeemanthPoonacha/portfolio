import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSection } from "@/lib/hooks/useSections";

export default function About() {
  const { currentSection } = useSection();
  const isVisible = currentSection === "about";

  const imageVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.4,
        delay: 1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      x: -600,
      opacity: 0,
      scale: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.4,
        delay: 1.3,
      },
    },
  };

  const glowVariants = {
    hidden: { scale: 1, opacity: 0 },
    visible: {
      // scale: [1, 1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom },
    }),
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/3 flex justify-center pointer-events-auto">
        <motion.div
          className="relative"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <motion.div
            whileHover={isVisible ? { scale: 1.05 } : {}}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="absolute inset-0 gradient-bg rounded-full blur-2xl"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={glowVariants}
            />
            <Image
              src="/custom-textures/profile.jpg"
              alt="Profile"
              width={250}
              height={250}
              className="h-60 w-60 rounded-full shadow-lg relative z-10 border-4 border-white dark:border-gray-800 object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="rounded-lg bg-card text-card-foreground shadow-sm lg:w-2/3 hover-lift glass-card pointer-events-auto"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={cardVariants}
        whileHover={{ y: -5 }}
      >
        <Card className="bg-transparent">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              My Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <motion.p
              className="mb-4 text-gray-900 dark:text-gray-100 leading-relaxed"
              custom={0.6}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={textVariants}
            >
              With over 5 years of experience in full stack development, I've
              worked on a variety of projects ranging from small business
              websites to large-scale enterprise applications.
            </motion.p>
            <motion.p
              className="text-gray-900 dark:text-gray-100 leading-relaxed"
              custom={0.8}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={textVariants}
            >
              My passion lies in creating efficient, user-friendly applications
              that solve real-world problems. I'm constantly learning and
              adapting to new technologies to stay at the forefront of web
              development.
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
