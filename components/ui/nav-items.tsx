import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSection } from "@/lib/hooks/useSections";
import { sections } from "../sections";

export const NavItems = ({ onClick = () => {} }) => {
  const { currentSection } = useSection();

  return (
    <>
      {sections
        .filter((_sec, index) => index)
        .map(({ id, nav_title }) => (
          <Link
            key={id}
            href={"#" + id}
            onClick={onClick}
            className={cn(
              "group font-bold transition-all duration-300 ease-in-out w-full",
              currentSection === id ? "" : ""
            )}
          >
            <span
              className={cn(
                "bg-left-bottom block gradient-bg bg-[length:100%_2px] p-2 rounded-md !w-full",
                currentSection === id
                  ? "bg-[length:100%_2px] text-gray-200 dark:text-gray-800"
                  : "bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              )}
            >
              {nav_title}
            </span>
          </Link>
        ))}
    </>
  );
};
