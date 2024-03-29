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
import { Footer } from "./_components/footer";
import { FooterCopywrite } from "./_components/footer-copywrite";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
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
      <Footer />
      <FooterCopywrite />
    </main>
  );
}
