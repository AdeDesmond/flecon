import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  HandshakeIcon,
  BarChart2Icon,
  TrophyIcon,
  DatabaseIcon,
  MonitorCheckIcon,
  UsersIcon,
  HandCoinsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import localfont from "next/font/local";
import { Subscribe } from "@/components/subscribe";

const hFont = localfont({
  src: "../../../public/fonts/Roboto-Bold.ttf",
});

function AboutPage() {
  return (
    <main className={cn("overflow-y-scroll w-full min-h-screen")}>
      <div className="flex lg:flex-row flex-col gap-y-8 items-center justify-center lg:gap-[8rem] mt-[5rem] mb-[5rem]">
        <div className="">
          <Image
            src="/img/business/team2.jpg"
            alt="Team Photo"
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="">
          <h2 className={cn(hFont.className, "text-3xl mb-8")}>
            Take Control & learn <br /> about your money.
          </h2>
          <p className="w-[40rem] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            perspiciatis cupiditate neque deleniti provident aliquam vel, magni
            corporis veniam ab tenetur obcaecati expedita commodi sint amet
            magnam asperiores ex unde?
          </p>
          <Button asChild>
            <Link href="/">
              Learn more <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full bg-[#12182B] p-10 flex items-center justify-around 2xl:px-[17rem]  mb-[6rem]">
        <div className="flex items-center gap-x-2">
          <div className="w-[3rem] h-[3rem] rounded-full bg-[#69FAB4] flex items-center justify-center">
            <HandshakeIcon />
          </div>
          <div className={cn("flex flex-col gap-y-1 items-start")}>
            <p className={cn(hFont.className, "text-2xl text-white")}>250+</p>
            <p className="text-white">Partner with us</p>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="w-[3rem] h-[3rem] rounded-full bg-[#69FAB4] flex items-center justify-center">
            <BarChart2Icon />
          </div>
          <div className={cn("flex flex-col gap-y-1 items-start")}>
            <p className={cn(hFont.className, "text-2xl text-white")}>$250+</p>
            <p className="text-white">Cumulative trading volume</p>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="w-[3rem] h-[3rem] rounded-full bg-[#69FAB4] flex items-center justify-center">
            <TrophyIcon />
          </div>
          <div className={cn("flex flex-col gap-y-1 items-start")}>
            <p className={cn(hFont.className, "text-2xl text-white")}>250</p>
            <p className="text-white">Successful projects</p>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-center gap-4 mb-[10rem]">
        <div>
          <h2 className={cn(hFont.className, "text-3xl mb-6")}>
            Simply said, the most effective <br /> strategy for your business
          </h2>
          <p className="w-[40rem] mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            ducimus, debitis blanditiis molestias culpa inventore aspernatur
            necessitatibus vel, ratione, dignissimos maiores mollitia! Sapiente,
            odio? Rerum nesciunt aspernatur ex? Ipsam, a!
          </p>
          <Button asChild>
            <Link href={"/"}>
              View more <ArrowRightIcon />
            </Link>
          </Button>
        </div>
        <div className="w-[40rem] bg-[#E7ECFF] grid grid-cols-2 grid-rows-2 p-4 rounded">
          <div className="w-full mb-10">
            <div className="h-[2rem] w-[2rem] rounded bg-[#69FAB4] flex items-center justify-center mb-2">
              <DatabaseIcon />
            </div>
            <h3 className={cn(hFont.className, "mb-2 text-lg")}>
              Data Collection
            </h3>
            <p className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. nemo
              fugit, sunt dolore
            </p>
          </div>
          <div>
            <div className="h-[2rem] w-[2rem] rounded bg-[#69FAB4] flex items-center justify-center mb-2">
              <MonitorCheckIcon />
            </div>
            <h3 className={cn(hFont.className, "mb-2 text-lg")}>
              Web solution
            </h3>
            <p className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. nemo
              fugit, sunt dolore
            </p>
          </div>
          <div>
            <div className="h-[2rem] w-[2rem] rounded bg-[#69FAB4] flex items-center justify-center mb-2">
              <UsersIcon />
            </div>
            <h3 className={cn(hFont.className, "mb-2 text-lg")}>
              Market research
            </h3>
            <p className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. nemo
              fugit, sunt dolore
            </p>
          </div>
          <div>
            <div className="h-[2rem] w-[2rem] rounded bg-[#69FAB4] flex items-center justify-center mb-2">
              <HandCoinsIcon />
            </div>
            <h3 className={cn(hFont.className, "mb-2 text-lg")}>
              Our services
            </h3>
            <p className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. nemo
              fugit, sunt dolore
            </p>
          </div>
        </div>
      </div>

      <div className="mb-[5rem] flex items-center justify-center flex-col">
        <h2 className={cn(hFont.className, "text-4xl  text-center mb-10")}>
          We support our clients in bringing <br /> their business concepts to
          life and <br /> attaining success.
        </h2>

        <div className="">
          <Image
            src="/img/business/deal.jpg"
            alt="happy deal with partners"
            width={800}
            height={200}
            className="object-cover rounded shadow-md hover:shadow-lg hover:scale-110 transition duration-500"
          />
        </div>
      </div>

      <div className="mt-10 mb-10">
        <Subscribe />
      </div>
    </main>
  );
}

export default AboutPage;
