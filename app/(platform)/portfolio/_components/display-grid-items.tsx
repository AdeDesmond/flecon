import { cn } from "@/lib/utils";
import Image from "next/image";

interface DisplayGridItemsProps {
  className: string;
  imageUrl?: string;
}

export const DisplayGridItems = ({
  className,
  imageUrl,
}: DisplayGridItemsProps) => {
  return (
    <div className={cn("relative", className)}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Employees at work"
          fill
          className="object-cover"
        />
      )}
    </div>
  );
};
