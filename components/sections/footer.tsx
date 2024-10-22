export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; 2024 Deemanth Poonacha. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="#"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
