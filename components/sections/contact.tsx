"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Button from "../ui/outline-button";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { BsSendFill } from "react-icons/bs";
import { useSection } from "@/lib/hooks/useSections";
import emailjs from "@emailjs/browser";

const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
  TO_EMAIL: process.env.NEXT_PUBLIC_TO_EMAIL || "dev.deemanth@gmail.com",
  TO_NAME: process.env.NEXT_PUBLIC_TO_NAME || "Deemanth K Poonacha",
};

const SOCIAL_LINKS = [
  {
    icon: SiGithub,
    href: "https://github.com/deemanthpoonacha",
    label: "deemanthpoonacha",
    color: "hover:text-gray-800 dark:hover:text-gray-200",
  },
  {
    icon: SiLinkedin,
    href: "https://linkedin.com/in/deemanth-poonacha",
    label: "deemanth-poonacha",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    icon: SiGmail,
    href: "mailto:dev.deemanth@gmail.com",
    label: "dev.deemanth@gmail.com",
    color: "hover:text-red-600 dark:hover:text-red-400",
  },
];

const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delay: 1.3 },
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
};

export default function Contact() {
  const { currentSection } = useSection();
  const isVisible = currentSection === "contact";
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState({
    message: "",
    type: "success",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormState({ name: "", email: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          reply_to: formState.email,
          to_name: EMAILJS_CONFIG.TO_NAME,
          to_email: EMAILJS_CONFIG.TO_EMAIL,
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
      );

      setNotification({
        message: "Thank you for your message. I'll get back to you soon. 😄",
        type: "success",
      });
      resetForm();
    } catch (err) {
      console.error("Email sending failed:", err);
      setNotification({
        message: `Something went wrong. Please try again later or email directly at ${EMAILJS_CONFIG.TO_EMAIL}`,
        type: "error",
      });
    } finally {
      setIsLoading(false);
      setTimeout(
        () => setNotification({ message: "", type: "success" }),
        15000
      );
    }
  };

  return (
    <>
      <motion.div
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-md w-full mx-auto rounded-md md:rounded-xl p-4 md:p-8 shadow-input bg-white/20 backdrop-blur-3xl dark:bg-black/20">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            {notification.message && (
              <div
                className={`mb-4 p-4 rounded-md ${
                  notification.type === "success"
                    ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                    : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100"
                }`}
              >
                {notification.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                className="border-gray-300 focus:border-primary dark:border-gray-600 dark:focus:border-primary"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                className="border-gray-300 focus:border-primary dark:border-gray-600 dark:focus:border-primary"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formState.message}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                className="border-gray-300 focus:border-primary dark:border-gray-600 dark:focus:border-primary"
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <BsSendFill className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="flex justify-center space-y-8"
      >
        <motion.div
          variants={ANIMATION_VARIANTS.item}
          className="flex lg:gap-4 mt-16"
        >
          {SOCIAL_LINKS.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:translate-x-2 transition-transform ${
                link.color
              } ${index !== 0 && "border-l-2"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="w-6 h-6" />
              <span className="text-lg hidden lg:block">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
