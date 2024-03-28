"use client";

import { AlignJustifyIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-nav";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { routes } from "@/routes";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const MobileNav = () => {
  const [mounted, setMounted] = useState(false);
  const isOpen = useMobileSidebar((state) => state.isOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const pathName = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    onClose();
  }, [pathName, onClose]);
  if (!mounted) {
    return null;
  }
  return (
    <div className="lg:hidden md:hidden absolute top-3 right-4">
      <Button onClick={onOpen} variant="ghost" size="sm" className="group">
        <AlignJustifyIcon className="w-5 h-5 text-white group-hover:text-black" />
      </Button>

      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-[400px] sm:w-[540px] z-[100000]">
          <SheetHeader>
            <Logo />
          </SheetHeader>
          <div>
            <ul className="flex flex-col items-center gap-y-3">
              {routes.map((route) => (
                <li key={route.label}>
                  <Link href={route.path} className={cn("")}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
