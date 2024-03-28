import { ShowBusinessCarousel } from "@/components/show-business-carousel";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";
import localfont from "next/font/local";

const hFont = localfont({
  src: "../../../public/fonts/Roboto-Bold.ttf",
});

const imagesList = [
  {
    id: "one",
    path: "/img/business/team1.jpg",
  },
  {
    id: "two",
    path: "/img/business/team2.jpg",
  },
  {
    id: "three",
    path: "/img/business/team3.jpg",
  },
  {
    id: "four",
    path: "/img/business/team4.jpg",
  },
];

export const BusinessCarousel = () => {
  return (
    <section className="bg-[#12182B] w-full 2xl:h-[50vh] lg:h-[63vh] bg-[url('/img/carousel.svg')] bg-center bg-cover p-[6rem] 2xl:px-[32rem]">
      <div className="w-full flex justify-between mb-[4rem]">
        <h2 className={cn(hFont.className, "text-white text-3xl ")}>
          <span className="flex gap-2">
            We provide the best{" "}
            <TrendingUp className="bg-[#69FAB4] w-[3rem] h-[2rem] text-black rounded-lg " />
          </span>{" "}
          solution for your business <br /> development
        </h2>
        <p className="text-white">
          We provide all the services that you need to <br /> boost your
          business to a higher level
        </p>
      </div>
      <ShowBusinessCarousel lists={imagesList} />
    </section>
  );
};
