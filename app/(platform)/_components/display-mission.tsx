"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const missionList = [
  {
    title: "mission",
    description: "This is our mission",
  },
  {
    title: "movement",
    description: "This is our mission",
  },
  {
    title: "value",
    description: "This is our value",
  },
];
export const DisplayMission = () => {
  const [selected, setSelected] = useState("mission");
  const handleSelectedViews = (view: string) => {
    setSelected(view);
  };
  return (
    <div>
      <div className="flex items-center gap-x-3">
        <Button
          className={cn(
            "bg-white text-black border",
            selected !== "mission" ? null : "bg-[#12182B] text-white transition"
          )}
          size="sm"
          onClick={() => handleSelectedViews("mission")}
        >
          Our Mission
        </Button>
        <Button
          className={cn(
            "bg-white text-black border",
            selected !== "movement"
              ? null
              : "bg-[#12182B] text-white transition"
          )}
          size="sm"
          onClick={() => handleSelectedViews("movement")}
        >
          Our Move
        </Button>
        <Button
          className={cn(
            "bg-white text-black border",
            selected !== "value" ? null : "bg-[#12182B] text-white transition"
          )}
          size="sm"
          onClick={() => handleSelectedViews("value")}
        >
          Our Value
        </Button>
      </div>
      <div className="mt-6">
        {selected === "mission" && (
          <div className={cn("bg-[#E7ECFF] p-3 rounded w-fit")}>
            <p>
              Our strategy planning process rapidly delivers plans that stick{" "}
              <br /> with execution support to make your plans a reality
            </p>
          </div>
        )}
        {selected === "movement" && (
          <div className={cn("bg-[#E7ECFF] p-3 rounded w-fit")}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo{" "}
            <br /> est, nulla magni earum praesentium minus vero, ut <br />{" "}
            cupiditate dolore ad eaque commodi voluptatum aliquid, <br />{" "}
            tempora <br /> eius voluptatibus! Totam, repellendus unde?{" "}
          </div>
        )}
        {selected === "value" && (
          <div className={cn("bg-[#E7ECFF] p-3 rounded w-fit")}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Delectus ipsum nesciunt optio, nisi aspernatur cum nulla unde <br />{" "}
            animi voluptatem consectetur. Optio assumenda dicta placeat <br />{" "}
            nemo reprehenderit tenetur voluptatum at hic.
          </div>
        )}
      </div>
    </div>
  );
};
