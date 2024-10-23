"use client";

import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/data/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
        Skills
      </h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 flex flex-col items-center justify-center">
                {skill.Icon && (
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.Icon className="w-12 h-12 mb-4 text-primary" />
                  </motion.div>
                )}
                <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
                  {skill.name}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
