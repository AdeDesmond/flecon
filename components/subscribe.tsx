import { cn } from "@/lib/utils";
import localfont from "next/font/local";
import { Button } from "./ui/button";

const hFont = localfont({
  src: "../public/fonts/Roboto-Bold.ttf",
});

export const Subscribe = () => {
  return (
    <div className="w-[90%] h-[30vh] rounded-lg bg-[#12182B] mx-auto mt-10 p-[4rem] ">
      <h2
        className={cn(hFont.className, "text-3xl text-white text-center mb-8")}
      >
        Ready to change your business route
      </h2>
      <p className="text-white text-center mb-8">
        Contact with us now and get an efficient service on your door,
        <br /> let &apos;s have a chat, shall we?
      </p>
      <div className="border overflow-hidden w-fit rounded-md mx-auto">
        <input
          type="text"
          name="email"
          id="email"
          className="outline-none h-full"
        />
        <Button className="">Get Started</Button>
      </div>
    </div>
  );
};
