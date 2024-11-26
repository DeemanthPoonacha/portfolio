export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-md z-50">
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
        <a
          className="mx-1 text-primary"
          href="https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66"
        >
          Gaming Desktop PC 3D Model
        </a>
        by
        <a
          className="mx-1 text-primary"
          href="https://sketchfab.com/Yolala1232"
        >
          Yolala1232
        </a>
        licensed under
        <a
          className="mx-1 text-primary"
          href="http://creativecommons.org/licenses/by/4.0/"
        >
          CC-BY-4.0
        </a>
      </div>
    </footer>
  );
}
