import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { TbSun, TbMoon } from "react-icons/tb";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? (
        <TbSun className="h-5 w-5" />
      ) : (
        <TbMoon className="h-5 w-5" />
      )}
    </Button>
  );
};
