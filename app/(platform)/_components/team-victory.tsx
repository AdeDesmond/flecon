import { cn } from "@/lib/utils";
import Image from "next/image";
import localfont from "next/font/local";
import { DisplayMission } from "./display-mission";

const hFont = localfont({
  src: "../../../public/fonts/Roboto-Bold.ttf",
});

export const TeamVictory = () => {
  return (
    <section
      className={cn(
        "bg-[#FFFFFF] 2xl:h-[50vh] lg:h-[60vh] w-full p-[6rem] 2xl:px-[32rem] grid grid-cols-1 gap-y-[3rem] lg:gap-y-0 lg:grid-cols-2 place-items-center"
      )}
    >
      <div className="relative">
        <div className="absolute left-[-4.5rem] top-[-2rem] bg-[#12182B] h-[6rem] w-[9rem] rounded-md text-white">
          test
        </div>
        <div className="absolute 2xl:right-[-4rem] 2xl:bottom-[-4rem] lg:right-[-3.5rem] lg:bottom-[-3.5rem]  bg-[#FFFFFF] shadow-lg h-[10rem] w-[8rem] rounded-md bottom-[-3rem] right-[-3rem]">
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
        <h2 className={cn(hFont.className, "text-3xl relative mb-4")}>
          We lead your business <br /> to team victory
          <span className="absolute bg-[#69FAB4] w-[7.59rem] h-[1rem] bottom-[2.2rem] 2xl:right-[9.1rem] bg-opacity-80 lg:right-[9.1rem]"></span>
        </h2>
        <p className="mb-4">
          We are a team of passionate business consultants & technology <br />{" "}
          veterans eager to help companies reach their full potential
        </p>
        <DisplayMission />
      </div>
    </section>
  );
};
