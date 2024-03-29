import { Suspense } from "react";
import { HeroSection } from "./_components/hero-section";
import { BusinessCarousel } from "./_components/business-carousel";
import { TeamVictory } from "./_components/team-victory";
import { SkillSection } from "./_components/skills-section";
import { MentorTeam } from "./_components/mentors-team";
import {
  BusinessShowSkeleton,
  HeroSkeleton,
  MentorsSkeleton,
  TeamVictorySkeleton,
} from "@/components/skeletons";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<BusinessShowSkeleton />}>
        <BusinessCarousel />
      </Suspense>
      <Suspense fallback={<TeamVictorySkeleton />}>
        <TeamVictory />
      </Suspense>
      <SkillSection />
      <Suspense fallback={<MentorsSkeleton />}>
        <MentorTeam />
      </Suspense>
    </div>
  );
}
