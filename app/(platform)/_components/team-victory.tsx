import { cn } from "@/lib/utils";
import Image from "next/image";
import localfont from "next/font/local";
import { DisplayMission } from "./display-mission";
import { CircleUserRoundIcon, GlobeIcon, TrendingUpIcon } from "lucide-react";
const hFont = localfont({
  src: "../../../public/fonts/Roboto-Bold.ttf",
});

export const TeamVictory = () => {
  return (
    <section
      className={cn(
        "bg-[#FFFFFF] w-full p-[6rem] 2xl:px-[32rem] grid grid-cols-1 gap-y-[3rem] lg:gap-y-0 lg:grid-cols-2 place-items-center"
      )}
    >
      <div className="relative">
        <div className="absolute left-[-4.5rem] top-[-2rem] bg-[#12182B] h-[6rem] w-[9rem] rounded-md text-white flex items-center justify-center flex-col">
          <h3 className="text-sm">Core Team</h3>
          <div className="flex items-center gap-x-1 mb-2">
            <CircleUserRoundIcon className="h-5 w-5 text-[#69FAB4]" />{" "}
            <div className="flex flex-col">
              <p className="text-xs">Desmond</p>
              <div className="relative block w-[6rem] rounded-md bg-[#ffffff] h-2">
                <span className="absolute top-0 left-0 bg-[#69fab4] w-[80%] h-2 rounded-l-md"></span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <CircleUserRoundIcon className="h-5 w-5 text-[#69FAB4]" />{" "}
            <div className="flex flex-col">
              <p className="text-xs">Wilsha</p>
              <div className="relative block w-[6rem] rounded-md bg-[#ffffff] h-2">
                <span className="absolute top-0 left-0 bg-[#69fab4] w-[60%] h-2 rounded-l-md"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute 2xl:right-[-4rem] 2xl:bottom-[-4rem] lg:right-[-3.5rem] lg:bottom-[-3.5rem]  bg-[#FFFFFF] shadow-lg h-[10rem] w-[8rem] rounded-md bottom-[-3rem] right-[-3rem] flex flex-col items-center justify-center gap-3">
          <GlobeIcon className="h-5 w-5 text-[#69FAB4]" />
          <p className={cn(hFont.className, "font-bold")}>+53.9k</p>
          <p>Reach</p>
          <p className="flex items-center gap-1">
            <TrendingUpIcon className="h-5 w-5 text-[#69FAB4]" />
            <span className={cn(hFont.className, "font-bold")}>44.5%</span>
          </p>
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

// 2xl:h-[50vh] lg:h-[60vh]
