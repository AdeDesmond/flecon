import { ShowBusinessCarousel } from "@/components/show-business-carousel";
import { ShowClients } from "@/components/show-client";
import { cn } from "@/lib/utils";
import localfont from "next/font/local";

const imagesList = [
  {
    id: "one",
    path: "/img/mentors/mentor1.jpg",
  },
  {
    id: "two",
    path: "/img/mentors/mentor2.jpg",
  },
  {
    id: "three",
    path: "/img/mentors/mentor3.jpg",
  },
  {
    id: "four",
    path: "/img/mentors/mentor4.jpg",
  },
];

const hFont = localfont({
  src: "../../../public/fonts/Roboto-Bold.ttf",
});
export const MentorTeam = () => {
  return (
    <div
      className={cn(
        "bg-[#FFFFFF] 2xl:h-[70vh] lg:h-[80vh]  p-[6rem] 2xl:px-[32rem]"
      )}
    >
      <h2 className={cn(hFont.className, " mb-16 text-4xl text-[#12182B]")}>
        Our mentors are <br /> expert in different fields.
      </h2>
      <ShowBusinessCarousel lists={imagesList} />
      <h3
        className={cn(
          "mt-[6rem] text-5xl text-center text-[#12182B]",
          hFont.className
        )}
      >
        What are our client saying?
      </h3>
      <p className="text-center text-sm mt-4 ">
        We are trusted by numerous companies from different <br /> business to
        meet their needs
      </p>
      <ShowClients />
    </div>
  );
};
