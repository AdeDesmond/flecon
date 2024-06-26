import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, BarChart4Icon, AreaChartIcon } from "lucide-react";
import localfont from "next/font/local";
import Image from "next/image";

const hFont = localfont({
  src: "../../../public/fonts/Roboto-Bold.ttf",
});

export const HeroSection = () => {
  return (
    <section className=" lg:mb-10 2xl:mb-0 bg-[#FFFFFF] w-full  flex lg:flex-row flex-col items-center p-4  justify-center lg:gap-40 2xl:gap-40 gap-16 2xl:p-[4rem] lg:p-[4rem] overflow-hidden">
      <div className="flex flex-col gap-y-10 items-center lg:items-start">
        <h2
          className={cn(
            hFont.className,
            "text-7xl relative text-center lg:text-start"
          )}
        >
          Utilize our <br /> solution to expand <br /> your business.
          <span className="bg-[#69FAB4] w-[30rem] h-[1.8rem]  absolute bottom-[-0.3rem] left-0 bg-opacity-85"></span>
        </h2>
        <p>
          make your business proper with great team of experts, <br /> we will
          make your new business plan a success
        </p>
        <Button
          size="sm"
          className="flex items-center gap-1 p-2 w-[6rem] group"
        >
          let&apos;s talk{" "}
          <ArrowRightIcon className="w-4 h-4 text-[#69FAB4] group-hover:translate-x-1 group-hover:scale-110 transition" />
        </Button>
      </div>

      <div className="relative w-[30rem] h-[30rem]">
        <div className="absolute top-0 left-[-7.5rem] z-10 hidden lg:block">
          <Image
            src="/img/pointer.svg"
            alt="pointer"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="bg-[#12182B] h-[6rem] w-[9rem] absolute top-10 right-[-3rem] rounded text-white z-[100] hidden lg:flex lg:items-center lg:flex-col lg:justify-center">
          <span className="text-xs">+80.5% Increase sales</span>
          <AreaChartIcon className="w-[3rem] h-[3rem] text-[#69fab4]" />
        </div>
        <div className="bg-[#12182B] h-[6rem] w-[11rem] absolute top-[10rem] left-[-4rem] rounded text-white z-[100] hidden lg:flex lg:items-center lg:justify-center lg:gap-3 lg:pl-4 p-2">
          <BarChart4Icon className="w-[5rem] h-[5rem] text-[#69fab4]" />
          <p className="text-xs">
            Our <br /> progressive minds
          </p>
        </div>
        <div className="bg-[#12182B] h-[4rem] w-[15rem] absolute bottom-10 right-[-3rem] rounded text-white z-[100] hidden lg:block p-1">
          <span className="text-xs">+70%</span>
          <div className="relative block w-full rounded-md bg-[#ffffff] h-2">
            <span className="absolute top-0 left-0 bg-[#69fab4] w-[80%] h-2 rounded-l-md"></span>
          </div>
          <span className="text-xs">Increase sales</span>
        </div>

        <Image
          src="/img/profile.jpg"
          alt="work image"
          fill
          className="object-cover rounded-full"
        />
      </div>
    </section>
  );
};

//
