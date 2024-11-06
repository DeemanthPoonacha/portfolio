import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export interface ButtonProps {
  className?: string;
  spanClassName?: string;
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
}
const Button = (props: ButtonProps) => {
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
    <motion.button
      variants={fadeInUpVariants}
      whileHover={{ y: 2 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 group relative h-12 overflow-hidden p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-2xl",
        props.className
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2563EB_0%,#9333EA_50%,#2563EB_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#60a5fa_0%,#c084fc_50%,#60a5fa_100%)]" />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-200 group-hover:bg-slate-900/30",
          props.spanClassName
        )}
      >
        {props.children}
      </span>
    </motion.button>
  );
};

export default Button;
