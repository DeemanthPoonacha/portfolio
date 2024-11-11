import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { SectionProvider } from "@/components/section-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deemanth Poonacha",
  description:
    "Portfolio website showcasing Deemanth Poonacha's skills and projects as a full stack developer",
  icons: {
    icon: "/logos/logo_light.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SectionProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </SectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
