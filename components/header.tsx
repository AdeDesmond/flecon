import Link from "next/link";
import { Logo } from "./logo";
import { NavBar } from "./nav-bar";
import { Button } from "./ui/button";
import { MobileNav } from "./mobile-nav";

export const Header = () => {
  return (
    <header className="bg-[#12182B] h-[4rem] flex items-center justify-between max-w-6xl:px-[10rem] lg:px-[4rem] md:px-[4rem] relative pl-4  overflow-hidden">
      <Logo width={100} height={100} />
      <NavBar />
      <Button
        className="bg-[#69FAB4] text-black font-bold hover:bg-emerald-800 hover:text-white transiton hidden lg:block md:block"
        asChild
      >
        <Link href="/sign-up">Sign up</Link>
      </Button>
      <MobileNav />
    </header>
  );
};

//#12182B
//#69FAB4
//#FFC700
//#E7ECFF
//#FFFFFF
