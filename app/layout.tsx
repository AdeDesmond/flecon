import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site-config";
import { TvIcon } from "lucide-react";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: [
    {
      url: "/logo/logo.svg",
      href: "/logo/logo.svg",
    },
  ],
};

const siteFont = localfont({
  src: "./../public/fonts/Roboto-Light.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(siteFont.className)}>{children}</body>
    </html>
  );
}
