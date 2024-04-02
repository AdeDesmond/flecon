import { cn } from "@/lib/utils";
import React from "react";
import { PortfolioGrid } from "./_components/portfolio-grid";
import { Subscribe } from "@/components/subscribe";

function PortFolioPage() {
  return (
    <main className={cn("overflow-y-scroll w-full min-h-screen")}>
      <PortfolioGrid />
      <Subscribe />
    </main>
  );
}

export default PortFolioPage;

{
  /* <DisplayGridItems
          className="row-span-2"
          imageUrl="/img/business/team2.jpg"
        />
        <DisplayGridItems
          className="row-span-1"
          imageUrl="/img/business/team1.jpg"
        />
        <DisplayGridItems
          className="row-span-2"
          imageUrl="/img/business/team3.jpg"
        />
        <DisplayGridItems
          className="row-span-1"
          imageUrl="/img/business/team4.jpg"
        /> */
}
