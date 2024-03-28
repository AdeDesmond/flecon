import { cn } from "@/lib/utils";
import Image from "next/image";
import localfont from "next/font/local";

const hFont = localfont({
  src: "../../../public/fonts/Roboto-Bold.ttf",
});

export const TeamVictory = () => {
  return (
    <section
      className={cn(
        "bg-[#FFFFFF] h-[50vh] w-full p-[6rem] 2xl:px-[32rem] grid grid-cols-2"
      )}
    >
      <div className="relative">
        <div className="absolute left-[-1rem] top-[-2rem] bg-[#12182B] h-[6rem] w-[9rem] rounded-md text-white">
          test
        </div>
        <div className="absolute right-[3rem] bottom-[1rem] bg-[#FFFFFF] shadow-lg h-[10rem] w-[8rem] rounded-md ">
          test bottom
        </div>
        <Image
          src="/img/business/team5.jpg"
          alt="Team"
          width={500}
          height={500}
          className="object-cover rounded-md shadow-md"
        />
      </div>
      <div>
        <h2 className={cn(hFont.className, "text-3xl relative")}>
          We lead your business <br /> to team victory
          <span className="absolute bg-[#69FAB4] w-[7.59rem] h-[1rem] bottom-[2.2rem] xl:right-[20.56rem] bg-opacity-80 lg:right-[22rem]"></span>
        </h2>
        <p>
          We are a team of passionate business consultants & technology <br />{" "}
          veterans eager to help companies reach their full potential
        </p>
      </div>
    </section>
  );
};
