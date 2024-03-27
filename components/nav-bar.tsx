"use client";
import { usePathname } from "next/navigation";
import { routes } from "@/routes";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const NavBar = () => {
  const pathName = usePathname();
  const onActivePath = (path: string) => {
    if (path === "/") {
      return "right-[.6rem]";
    } else if (path === "/about") {
      return "right-[1.2rem]";
    } else if (path === "/portfolio") {
      return "right-[1.2rem]";
    } else if (path === "/service") {
      return "right-[1.65rem]";
    }
  };
  const renderRoutes = routes.map((route) => (
    <li key={route.label} className="h-full relative cursor-pointer">
      <Link
        href={route.path}
        className={cn(
          pathName === route.path && "text-[#69FAB4] transition-color"
        )}
      >
        {route.label}
      </Link>
      {route.path === pathName && (
        <div
          className={cn(
            "bg-[#69FAB4] w-[1.5rem] h-[.2rem] absolute bottom-0 transition",
            onActivePath(route.path)
          )}
        ></div>
      )}
    </li>
  ));
  return (
    <nav className="h-full flex items-center justify-center ">
      <ul
        className={cn(
          "hidden  lg:flex md:flex text-[#FFFFFF] items-center gap-x-6 h-full justify-center pt-5"
        )}
      >
        {renderRoutes}
      </ul>
    </nav>
  );
};

//right-3.5
