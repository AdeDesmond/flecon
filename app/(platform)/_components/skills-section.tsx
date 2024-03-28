import { cn } from "@/lib/utils";
import { DisplaySkillsCards } from "./display-skills";
import localfont from "next/font/local";

const hFont = localfont({
  src: "../../../public/fonts/Roboto-Bold.ttf",
});

export const SkillSection = () => {
  return (
    <section
      className={cn(
        "2xl:h-[70vh] lg:h-[100vh] w-full bg-[#12182B] p-[4rem] 2xl:px-[32rem]"
      )}
    >
      <h2
        className={cn("text-center text-4xl text-white mb-4", hFont.className)}
      >
        What we do to serve your best
      </h2>
      <p className={cn("text-center text-white")}>
        We provide comprehensive services to support your business <br />
        by leveraging strategy to drive people, process and information
      </p>
      <DisplaySkillsCards />
    </section>
  );
};
