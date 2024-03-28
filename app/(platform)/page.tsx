import Image from "next/image";
import { HeroSection } from "./_components/hero-section";
import { BusinessCarousel } from "./_components/business-carousel";
import { TeamVictory } from "./_components/team-victory";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BusinessCarousel />
      <TeamVictory />
    </div>
  );
}
