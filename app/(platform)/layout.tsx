import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import localfont from "next/font/local";
import { Footer } from "./_components/footer";
import { FooterCopywrite } from "./_components/footer-copywrite";

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
      <Footer />
      <FooterCopywrite />
    </div>
  );
}
