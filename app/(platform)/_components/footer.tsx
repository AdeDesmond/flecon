import localfont from "next/font/local";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { routes } from "@/routes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const hFont = localfont({
  src: "../../../public/fonts/Roboto-Bold.ttf",
});

export const Footer = () => {
  return (
    <footer className="w-[90%] grid grid-cols-1 lg:grid-cols-4 place-items-center mb-10">
      <div>
        <p>loggo</p>
        <Logo />
      </div>
      <div>
        <h4 className={cn(hFont.className, "mb-4")}>Our Company</h4>
        <ul>
          {routes.map((route) => (
            <li key={route.label}>
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className={cn(hFont.className, "mb-4")}>Services</h4>
        <p>Business analysis</p>
        <p>Strategic planning</p>
        <p>Business consulting & web presence</p>
        <p>Marketing strategy & Audit evaluation</p>
      </div>
      <div>
        <h4 className={cn(hFont.className, "mb-4")}>
          Subscribe to our newsletter
        </h4>
        <form action="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Subcribe with your email..."
            className="h-10 w-full outline-none border focus:ring focus:ring-slate-950 focus:ring-offset-1 transition rounded mb-2 "
          />
          <Button className="bg-[#69FAB4] text-black placeholder:text-xs">
            Subcribe
          </Button>
        </form>
      </div>
    </footer>
  );
};
