import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          About Me
        </h2>
        <div className="relative flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
              <Image
                src=""
                // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="John Doe"
                width={250}
                height={250}
                className="rounded-full shadow-lg hover-lift"
              />
            </div>
          </div>
          <Card className="md:w-2/3 hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                My Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                With over 5 years of experience in full stack development, I've
                worked on a variety of projects ranging from small business
                websites to large-scale enterprise applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                My passion lies in creating efficient, user-friendly
                applications that solve real-world problems. I'm constantly
                learning and adapting to new technologies to stay at the
                forefront of web development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
