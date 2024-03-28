import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ShowBusinessCarouselProps {
  lists: { id: string; path: string }[];
}

export function ShowBusinessCarousel({ lists }: ShowBusinessCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl relative "
    >
      <CarouselContent>
        {lists.map((list) => (
          <CarouselItem key={list.id} className="md:basis-1/2 lg:basis-1/3">
            <Image
              src={list.path}
              alt="business"
              width={400}
              height={400}
              className="object-cover rounded"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-[-2rem] right-10">
        <CarouselPrevious className="bg-[#69FAB4]" />
        <CarouselNext className="bg-[#69FAB4]" />
      </div>
    </Carousel>
  );
}
