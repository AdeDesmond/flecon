import Image from "next/image";
import { HeroSection } from "./_components/hero-section";
import { BusinessCarousel } from "./_components/business-carousel";
import { TeamVictory } from "./_components/team-victory";
import { SkillSection } from "./_components/skills-section";
import { MentorTeam } from "./_components/mentors-team";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BusinessCarousel />
      <TeamVictory />
      <SkillSection />
      <MentorTeam />
    </div>
  );
}
