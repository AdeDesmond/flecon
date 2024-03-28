import Image from "next/image";
import { HeroSection } from "./_components/hero-section";
import { BusinessCarousel } from "./_components/business-carousel";
import { TeamVictory } from "./_components/team-victory";
import { SkillSection } from "./_components/skills-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BusinessCarousel />
      <TeamVictory />
      <SkillSection />
    </div>
  );
}
