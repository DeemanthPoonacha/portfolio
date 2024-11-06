"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Button from "../ui/outline-button";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setNotification("Thank you for your message. I'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setNotification(""), 5000);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-header">Contact Me</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white/20 backdrop-blur-xl dark:bg-black/20 bg-blur-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            {notification && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100 rounded-md">
                {notification}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-gray-300 focus:border-primary dark:border-gray-600 dark:focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-gray-300 focus:border-primary dark:border-gray-600 dark:focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="border-gray-300 focus:border-primary dark:border-gray-600 dark:focus:border-primary"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
