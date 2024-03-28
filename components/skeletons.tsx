import { Skeleton } from "./ui/skeleton";

export const HeroSkeleton = () => {
  return (
    <div className="w-full h-[50vh] flex justify-between p-10">
      <div className="w-[20rem] h-[10rem]">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="w-[20rem] h-[20rem] rounded-full">
        <Skeleton className="h-full w-full" />
      </div>
    </div>
  );
};

export const BusinessShowSkeleton = () => {
  return (
    <div className="flex items-center gap-6">
      <Skeleton className="w-[20rem] h-[20rem] rounded" />
      <Skeleton className="w-[20rem] h-[20rem] rounded" />
      <Skeleton className="w-[20rem] h-[20rem] rounded" />
      <Skeleton className="w-[20rem] h-[20rem] rounded" />
    </div>
  );
};

export const TeamVictorySkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="w-[50%] h-[30rem]">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="h-[10rem] w-[20rem]">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="w-[20rem] h-[8rem]">
          <Skeleton className="h-full w-full" />
        </div>
        <div>
          <div className="w-[10rem] h-[2rem]">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="w-[10rem] h-[2rem]">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="w-[10rem] h-[2rem]">
            <Skeleton className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MentorsSkeleton = () => {
  return (
    <div className="flex items-center gap-6">
      <Skeleton className="w-[20rem] h-[20rem] rounded" />
      <Skeleton className="w-[20rem] h-[20rem] rounded" />
      <Skeleton className="w-[20rem] h-[20rem] rounded" />
      <Skeleton className="w-[20rem] h-[20rem] rounded" />
    </div>
  );
};
