import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Logo = ({ onClick = () => {} }) => {
  const { theme } = useTheme();

  return (
    <Link
      onClick={onClick}
      href="/"
      className="text-2xl font-bold gradient-text"
    >
      <Image
        src={
          theme === "dark" ? "/logos/logo_dark.png" : "/logos/logo_light.png"
        }
        alt="Logo"
        width={256 * 0.25}
        height={172 * 0.25}
      />
    </Link>
  );
};
