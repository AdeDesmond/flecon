import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import localfont from "next/font/local";

interface FleconLayoutProps {
  children: React.ReactNode;
}

const mainFont = localfont({
  src: "../../public/fonts/Roboto-Light.ttf",
});

export default function FleconLayout({ children }: FleconLayoutProps) {
  return (
    <div className="w-full min-h-screen">
      <Header />
      {children}
    </div>
  );
}
