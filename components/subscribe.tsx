import { cn } from "@/lib/utils";
import localfont from "next/font/local";
import { Button } from "./ui/button";

const hFont = localfont({
  src: "../public/fonts/Roboto-Bold.ttf",
});

export const Subscribe = () => {
  return (
    <div className="w-[90%]  rounded-lg bg-[#12182B] mx-auto mt-10 lg:p-[2rem] 2xl:p-[4rem] p-[2rem]">
      <h2
        className={cn(
          hFont.className,
          "text-sm lg:text-3xl text-white text-center lg:mb-8 mb-4"
        )}
      >
        Ready to change your business route
      </h2>
      <p className="text-white text-center mb-8 text-xs lg:text-sm">
        Contact with us now and get an efficient service on your door,
        <br /> let &apos;s have a chat, shall we?
      </p>
      <div className="border overflow-hidden w-fit rounded-md mx-auto h-[2.5rem] bg-white">
        <input
          type="text"
          name="email"
          id="email"
          className="outline-none h-full"
        />
        <Button className="bg-[#69FAB4] rounded-l-none hover:bg-emerald-900 hover:text-white hover:font-bold text-black transition">
          Get Started
        </Button>
      </div>
    </div>
  );
};
