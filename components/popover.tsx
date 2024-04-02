"use client";

import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface PopoverProps {
  children: React.ReactNode;
  onShowForm: (show: boolean) => void;
}

export const Popover = ({ children, onShowForm }: PopoverProps) => {
  const router = useRouter();
  const onShowFormState = () => {
    onShowForm(false);
    router.push("/");
  };
  return (
    <div className="fixed inset-0 bg-[#12182B] bg-opacity-80 w-full">
      <div
        onClick={(e) => {
          e.stopPropagation();
          onShowFormState();
        }}
        className="w-full h-full flex items-center justify-center relative cursor-pointer"
      >
        <Button
          onClick={onShowFormState}
          className="absolute top-2 right-2"
          variant="ghost"
          size="icon"
        >
          <X className="h-5 w-5 text-rose-500" />
        </Button>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
