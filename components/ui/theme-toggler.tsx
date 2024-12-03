import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { TbSun, TbMoon } from "react-icons/tb";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      title="Toggle Theme"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 font-bold p-2"
    >
      {theme === "dark" ? (
        <TbSun className="h-5 w-5" />
      ) : (
        <TbMoon className="h-5 w-5" />
      )}
    </Button>
  );
};
